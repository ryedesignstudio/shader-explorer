import type * as THREE from 'three';

export interface ColorDefinition {
  key: string;
  label: string;
  defaultValue: string; // Hex color e.g. '#ff0000'
  description?: string;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  category: 'abstract' | 'nature' | 'geometric' | 'animated';
  colors: ColorDefinition[];
  fragmentShader: string;
}

export interface ShaderUniforms {
  u_time: { value: number };
  u_mouse: { value: THREE.Vector2 };
  u_resolution: { value: THREE.Vector2 };
  [key: string]: { value: THREE.Vector3 | THREE.Vector2 | number };
}

export const VERTEX_SHADER = `
  varying vec2 v_uv;
  void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export type Category = Preset['category'] | 'all';
