import { useState } from 'react';
import type { Preset } from '../types';
import { generateExportCode, hexToVec3 } from '../services/ShaderEngine';
import './ExportModal.css';

interface ExportModalProps {
  preset: Preset;
  colors: Record<string, string>;
  canvas: HTMLCanvasElement | null;
  onClose: () => void;
}

export function ExportModal({ preset, colors, canvas, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);
  const [videoStatus, setVideoStatus] = useState<string | null>(null);
  const code = generateExportCode(preset, colors);

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = () => {
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `${preset.id}-shader.png`);
    }, 'image/png');
  };

  const handleDownloadSvg = () => {
    if (!canvas) return;
    const image = canvas.toDataURL('image/png');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}"><image href="${image}" width="${canvas.width}" height="${canvas.height}"/></svg>`;
    downloadBlob(new Blob([svg], { type: 'image/svg+xml' }), `${preset.id}-shader.svg`);
  };

  const handleDownloadVideo = () => {
    if (!canvas || !canvas.captureStream || typeof MediaRecorder === 'undefined') {
      setVideoStatus('Video export is not supported in this browser.');
      return;
    }

    const mimeType = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm']
      .find((type) => MediaRecorder.isTypeSupported(type));
    if (!mimeType) {
      setVideoStatus('Video export is not supported in this browser.');
      return;
    }

    const chunks: Blob[] = [];
    const recorder = new MediaRecorder(canvas.captureStream(60), { mimeType });
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    recorder.onstop = () => {
      downloadBlob(new Blob(chunks, { type: mimeType }), `${preset.id}-shader.webm`);
      setVideoStatus('Video downloaded.');
    };
    setVideoStatus('Recording 5 seconds…');
    recorder.start();
    window.setTimeout(() => recorder.stop(), 5000);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const colorUniforms = preset.colors
      .map((c) => {
        const hex = colors[c.key] || c.defaultValue;
        const vec = hexToVec3(hex);
        return `u_${c.key}: { value: new THREE.Vector3(${vec.x.toFixed(3)}, ${vec.y.toFixed(3)}, ${vec.z.toFixed(3)}) },`;
      })
      .join('\n            ');

    const html = `<!DOCTYPE html>
<html>
<head>
    <title>${preset.name} - Shader Explorer</title>
    <style>
        body { margin: 0; overflow: hidden; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        const vertexShader = \`
            varying vec2 v_uv;
            void main() {
                v_uv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`${preset.fragmentShader}\`;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const uniforms = {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            ${colorUniforms}
        };

        const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        document.addEventListener('mousemove', (e) => {
            uniforms.u_mouse.value.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
        });

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        });

        function animate() {
            uniforms.u_time.value = performance.now() / 1000;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${preset.id}-shader.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="export-modal-overlay" onClick={onClose}>
      <div className="export-modal" onClick={(e) => e.stopPropagation()}>
        <div className="export-header">
          <h2>Export Shader</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="export-content">
          <p className="export-description">
            Export the current modified preview or download the editable shader source.
          </p>
          <div className="export-actions export-format-actions">
            <button className="export-btn primary" onClick={handleDownloadPng} disabled={!canvas}>
              Download PNG
            </button>
            <button className="export-btn" onClick={handleDownloadSvg} disabled={!canvas}>
              Download SVG
            </button>
            <button className="export-btn" onClick={handleDownloadVideo} disabled={!canvas}>
              Download Video
            </button>
          </div>
          {videoStatus && <p className="export-status" role="status">{videoStatus}</p>}
          <div className="export-actions">
            <button className="export-btn" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
            <button className="export-btn" onClick={handleDownloadHtml}>
              Download HTML
            </button>
          </div>
          <pre className="code-preview">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
