import { useState } from 'react';
import type { Preset } from '../types';
import { generateExportCode, hexToVec3 } from '../services/ShaderEngine';
import './ExportModal.css';

interface ExportModalProps {
  preset: Preset;
  colors: Record<string, string>;
  onClose: () => void;
}

export function ExportModal({ preset, colors, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);
  const code = generateExportCode(preset, colors);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
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
            Copy the Three.js code or download as a standalone HTML file.
          </p>
          <div className="export-actions">
            <button className="export-btn primary" onClick={handleCopy}>
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
            <button className="export-btn" onClick={handleDownload}>
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
