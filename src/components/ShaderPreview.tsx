import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import type { Preset } from '../types';
import { createMaterial, updateColors } from '../services/ShaderEngine';
import './ShaderPreview.css';

interface ShaderPreviewProps {
  preset: Preset;
  colors: Record<string, string>;
  onError: (error: string | null) => void;
  onCanvasReady?: (canvas: HTMLCanvasElement | null) => void;
}

export function ShaderPreview({ preset, colors, onError, onCanvasReady }: ShaderPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const animationRef = useRef<number>(0);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    onCanvasReady?.(renderer.domElement);

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Material
    try {
      const material = createMaterial(preset, colors);
      material.uniforms.u_resolution.value.set(width, height);
      materialRef.current = material;

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      onError(null);
    } catch (e) {
      onError(e instanceof Error ? e.message : 'Shader compilation failed');
    }

    // Animation loop
    const animate = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_time.value = performance.now() / 1000;
      }
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      onCanvasReady?.(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset.id]); // Re-init when preset changes

  // Update colors without re-creating scene
  useEffect(() => {
    if (materialRef.current) {
      try {
        updateColors(materialRef.current, preset, colors);
        onError(null);
      } catch (e) {
        onError(e instanceof Error ? e.message : 'Color update failed');
      }
    }
  }, [colors, preset, onError]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !materialRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      rendererRef.current.setSize(width, height);
      materialRef.current.uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!materialRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1 - (e.clientY - rect.top) / rect.height; // Flip Y for UV space
    materialRef.current.uniforms.u_mouse.value.set(x, y);
  }, []);

  return (
    <div
      ref={containerRef}
      className="shader-preview"
      onMouseMove={handleMouseMove}
    />
  );
}
