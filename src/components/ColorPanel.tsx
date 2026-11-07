import { HexColorPicker, HexColorInput } from 'react-colorful';
import type { ColorDefinition } from '../types';
import './ColorPanel.css';

interface ColorPanelProps {
  colorDefinitions: ColorDefinition[];
  values: Record<string, string>;
  onChange: (colorKey: string, value: string) => void;
  onReset: () => void;
  onExport: (format: 'png' | 'svg' | 'video') => void;
}

export function ColorPanel({ colorDefinitions, values, onChange, onReset, onExport }: ColorPanelProps) {
  return (
    <div className="color-panel">
      <div className="color-panel-header">
        <h3>Colors</h3>
        <button className="reset-btn" onClick={onReset}>
          Reset
        </button>
      </div>
      <div className="export-section">
        <span className="export-label">Download preview</span>
        <div className="export-actions">
          <button type="button" onClick={() => onExport('png')}>PNG</button>
          <button type="button" onClick={() => onExport('svg')}>SVG</button>
          <button type="button" onClick={() => onExport('video')}>Video</button>
        </div>
      </div>
      <div className="color-list">
        {colorDefinitions.map((colorDef) => (
          <div key={colorDef.key} className="color-item">
            <div className="color-info">
              <label>{colorDef.label}</label>
              {colorDef.description && (
                <span className="color-description">{colorDef.description}</span>
              )}
            </div>
            <div className="color-picker-wrapper">
              <HexColorPicker
                color={values[colorDef.key] || colorDef.defaultValue}
                onChange={(color) => onChange(colorDef.key, color)}
              />
              <div className="hex-input-wrapper">
                <HexColorInput
                  color={values[colorDef.key] || colorDef.defaultValue}
                  onChange={(color) => onChange(colorDef.key, color)}
                  prefixed
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
