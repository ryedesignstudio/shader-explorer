import type { ComponentType } from 'react';

export interface ColorDefinition {
  key: string;
  label: string;
  defaultValue: string;
  description?: string;
}

/** Each preset maps to a Paper Shader React component */
export interface Preset {
  id: string;
  name: string;
  description: string;
  category: 'effects' | 'image-filters' | 'logo-animations';
  colors: ColorDefinition[];
  /** The Paper Shader React component */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  /** Default non-color props to pass to the component */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultProps: Record<string, any>;
  /** Maps color key -> prop name on the component */
  colorPropMap: Record<string, string>;
}

export type Category = Preset['category'];
