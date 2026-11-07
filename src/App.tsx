import { useState, useEffect, useCallback } from 'react';
import type { Category } from './types';
import { getAll, getById } from './services/PresetRegistry';
import { getStateFromURL, updateURL } from './services/URLStateManager';
import { ShaderPreview } from './components/ShaderPreview';
import { ColorPanel } from './components/ColorPanel';
import { PresetGallery } from './components/PresetGallery';
import { ExportModal } from './components/ExportModal';
import './App.css';

function App() {
  const presets = getAll();
  
  // Initialize from URL - use lazy initialization to avoid setState in effect
  const [selectedPresetId, setSelectedPresetId] = useState(() => {
    const urlState = getStateFromURL();
    return urlState?.presetId || presets[0].id;
  });
  
  const [customColors, setCustomColors] = useState<Record<string, string>>(() => {
    const urlState = getStateFromURL();
    return urlState?.colors || {};
  });
  
  const [categoryFilter, setCategoryFilter] = useState<Category>('all');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewCanvas, setPreviewCanvas] = useState<HTMLCanvasElement | null>(null);

  const selectedPreset = getById(selectedPresetId) || presets[0];

  // Update URL when state changes
  useEffect(() => {
    if (Object.keys(customColors).length > 0) {
      updateURL(selectedPresetId, customColors);
    }
  }, [selectedPresetId, customColors]);

  const handlePresetSelect = useCallback((presetId: string) => {
    setSelectedPresetId(presetId);
    setCustomColors({}); // Reset colors for new preset
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

  // Get current colors (custom or defaults)
  const currentColors = selectedPreset.colors.reduce(
    (acc, colorDef) => {
      acc[colorDef.key] = customColors[colorDef.key] || colorDef.defaultValue;
      return acc;
    },
    {} as Record<string, string>
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsFullscreen((prev) => !prev);
      }
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className={`app ${isFullscreen ? 'fullscreen' : ''}`}>
      <header className="app-header">
        <h1>Shader Explorer</h1>
        <div className="header-actions">
          <button
            className="header-btn"
            onClick={() => setIsFullscreen((prev) => !prev)}
            title="Toggle Fullscreen (Cmd/Ctrl+F)"
          >
            {isFullscreen ? '⊙' : '⛶'}
          </button>
          <button className="header-btn primary" onClick={() => setIsExportOpen(true)}>
            Export
          </button>
        </div>
      </header>

      <main className="app-main">
        {!isFullscreen && (
          <aside className="sidebar gallery-sidebar">
            <PresetGallery
              presets={presets}
              selectedId={selectedPresetId}
              categoryFilter={categoryFilter}
              onSelect={handlePresetSelect}
              onCategoryChange={setCategoryFilter}
            />
          </aside>
        )}

        <section className="preview-section">
          <div className="preset-header">
            <h2>{selectedPreset.name}</h2>
            <p>{selectedPreset.description}</p>
          </div>
          {error && <div className="error-banner">{error}</div>}
          <div className="preview-container">
            <ShaderPreview
              preset={selectedPreset}
              colors={currentColors}
              onError={handleError}
              onCanvasReady={setPreviewCanvas}
            />
          </div>
        </section>

        {!isFullscreen && (
          <aside className="sidebar color-sidebar">
            <ColorPanel
              colorDefinitions={selectedPreset.colors}
              values={currentColors}
              onChange={handleColorChange}
              onReset={handleReset}
            />
          </aside>
        )}
      </main>

      {isExportOpen && (
        <ExportModal
          preset={selectedPreset}
          colors={currentColors}
          canvas={previewCanvas}
          onClose={() => setIsExportOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
