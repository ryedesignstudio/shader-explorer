import { useState, useEffect, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import type { Category } from './types';
import { getAll, getById } from './services/PresetRegistry';
import { getStateFromURL, updateURL } from './services/URLStateManager';
import { ShaderPreview } from './components/ShaderPreview';
import { ColorPanel } from './components/ColorPanel';
import { PresetGallery } from './components/PresetGallery';
import './App.css';

function App() {
  const presets = getAll();

  const [selectedPresetId, setSelectedPresetId] = useState(() => {
    const urlState = getStateFromURL();
    return urlState?.presetId || presets[0].id;
  });

  const [customColors, setCustomColors] = useState<Record<string, string>>(() => {
    const urlState = getStateFromURL();
    return urlState?.colors || {};
  });

  const [categoryFilter, setCategoryFilter] = useState<Category>('effects');
  const [isColorPanelOpen, setIsColorPanelOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedPreset = getById(selectedPresetId) || presets[0];

  useEffect(() => {
    if (Object.keys(customColors).length > 0) {
      updateURL(selectedPresetId, customColors);
    }
  }, [selectedPresetId, customColors]);

  // Track scroll position on mobile to hide gallery + hint
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePresetSelect = useCallback((presetId: string) => {
    setSelectedPresetId(presetId);
    setCustomColors({});
    // Scroll back to top when selecting a new preset
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleColorChange = useCallback((colorKey: string, value: string) => {
    setCustomColors((prev) => ({ ...prev, [colorKey]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setCustomColors({});
  }, []);

  const handleError = useCallback((error: string | null) => {
    setError(error);
  }, []);

  const handleExport = useCallback(async (format: 'png' | 'svg' | 'video') => {
    const target = document.querySelector<HTMLElement>('.app');
    if (!target) {
      setError('The preview is not ready to export yet.');
      return;
    }

    const download = (blob: Blob, filename: string) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    try {
      const screenshot = await html2canvas(target, {
        backgroundColor: '#0a0a0a',
        useCORS: true,
        allowTaint: false,
        logging: false,
        width: window.innerWidth,
        height: window.innerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        scrollX: 0,
        scrollY: window.scrollY,
      });

      if (format === 'png') {
        screenshot.toBlob((blob) => {
          if (blob) download(blob, `${selectedPreset.id}.png`);
        }, 'image/png');
        return;
      }

      const image = screenshot.toDataURL('image/png');
      if (format === 'svg') {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${screenshot.width} ${screenshot.height}"><image href="${image}" width="100%" height="100%" /></svg>`;
        download(new Blob([svg], { type: 'image/svg+xml' }), `${selectedPreset.id}.svg`);
        return;
      }

      const stream = screenshot.captureStream(30);
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : 'video/webm';
      const chunks: Blob[] = [];
      const recorder = new MediaRecorder(stream, { mimeType });
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };
      recorder.onstop = () => download(new Blob(chunks, { type: mimeType }), `${selectedPreset.id}.webm`);
      recorder.start();
      window.setTimeout(() => recorder.stop(), 5000);
    } catch (exportError) {
      setError(exportError instanceof Error ? exportError.message : 'Unable to capture the current preview.');
    }
  }, [selectedPreset.id]);

  const currentColors = selectedPreset.colors.reduce(
    (acc, colorDef) => {
      acc[colorDef.key] = customColors[colorDef.key] || colorDef.defaultValue;
      return acc;
    },
    {} as Record<string, string>
  );

  return (
    <div className="app" ref={scrollRef}>
      {/* Shader fills viewport, fixed behind everything */}
      <div className="shader-canvas-wrapper">
        <ShaderPreview
          preset={selectedPreset}
          colors={currentColors}
          onError={handleError}
        />
      </div>

      {/* Top overlay bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <h1 className="app-title">Shader Explorer</h1>
          <span className="preset-name-label">{selectedPreset.name}</span>
        </div>
        <div className="top-bar-right">
          <button
            className={`top-btn ${isColorPanelOpen ? 'active' : ''}`}
            onClick={() => setIsColorPanelOpen((prev) => !prev)}
          >
            Color
          </button>
        </div>
      </header>

      {error && <div className="error-banner">{error}</div>}

      {/* Desktop: Color panel overlay on the right */}
      <aside className={`color-panel-overlay ${isColorPanelOpen ? 'open' : ''}`}>
        <ColorPanel
          colorDefinitions={selectedPreset.colors}
          values={currentColors}
          onChange={handleColorChange}
          onReset={handleReset}
          onExport={handleExport}
        />
      </aside>

      {/* Bottom preset gallery - fades out on mobile when scrolled */}
      <div className={`bottom-gallery ${hasScrolled ? 'scrolled-away' : ''}`}>
        <PresetGallery
          presets={presets}
          selectedId={selectedPresetId}
          categoryFilter={categoryFilter}
          onSelect={handlePresetSelect}
          onCategoryChange={setCategoryFilter}
        />
      </div>

      {/* Mobile scroll hint - fades out when scrolled */}
      <div className={`scroll-hint ${hasScrolled ? 'hidden' : ''}`}>
        <div className="scroll-hint-arrow" />
        <span>Scroll for colors</span>
      </div>

      {/* Spacer for first viewport on mobile, then color panel below */}
      <div className="mobile-spacer" />
      <div className="mobile-color-screen">
        <ColorPanel
          colorDefinitions={selectedPreset.colors}
          values={currentColors}
          onChange={handleColorChange}
          onReset={handleReset}
          onExport={handleExport}
        />
      </div>
    </div>
  );
}

export default App;
