import { useMemo, useEffect, useRef } from 'react';
import type { Preset } from '../types';
import './ShaderPreview.css';

interface ShaderPreviewProps {
  preset: Preset;
  colors: Record<string, string>;
  onError: (error: string | null) => void;
}

function buildShaderProps(
  preset: Preset,
  colors: Record<string, string>
): Record<string, unknown> {
  const props: Record<string, unknown> = { ...preset.defaultProps };
  const colorsArray: Array<{ index: number; value: string }> = [];

  for (const [colorKey, propPath] of Object.entries(preset.colorPropMap)) {
    const value = colors[colorKey];
    if (!value) continue;

    const arrayMatch = propPath.match(/^colors\[(\d+)\]$/);
    if (arrayMatch) {
      colorsArray.push({ index: parseInt(arrayMatch[1], 10), value });
    } else {
      props[propPath] = value;
    }
  }

  if (colorsArray.length > 0) {
    colorsArray.sort((a, b) => a.index - b.index);
    props.colors = colorsArray.map((c) => c.value);
  }

  return props;
}

export function ShaderPreview({ preset, colors, onError }: ShaderPreviewProps) {
  const Component = preset.component;
  const errorRef = useRef<string | null>(null);

  const shaderProps = useMemo(() => {
    try {
      const p = buildShaderProps(preset, colors);
      errorRef.current = null;
      return p;
    } catch (e) {
      errorRef.current = e instanceof Error ? e.message : 'Failed to build shader props';
      return preset.defaultProps;
    }
  }, [preset, colors]);

  useEffect(() => {
    onError(errorRef.current);
  }, [shaderProps, onError]);

  return (
    <div className="shader-preview">
      <Component
        {...shaderProps}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}
