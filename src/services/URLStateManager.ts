import { getById } from './PresetRegistry';

interface URLState {
  presetId: string;
  colors: Record<string, string>;
}

export function getStateFromURL(): URLState | null {
  const params = new URLSearchParams(window.location.search);
  const presetId = params.get('preset');

  if (!presetId) return null;

  const preset = getById(presetId);
  if (!preset) return null;

  const colors: Record<string, string> = {};
  for (const colorDef of preset.colors) {
    const value = params.get(colorDef.key);
    if (value && /^[0-9a-fA-F]{6}$/.test(value)) {
      colors[colorDef.key] = `#${value}`;
    }
  }

  return { presetId, colors };
}

export function updateURL(presetId: string, colors: Record<string, string>): void {
  const params = new URLSearchParams();
  params.set('preset', presetId);

  for (const [key, value] of Object.entries(colors)) {
    // Remove # prefix for cleaner URLs
    params.set(key, value.replace('#', ''));
  }

  const newURL = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newURL);
}

export function clearURL(): void {
  window.history.replaceState({}, '', window.location.pathname);
}
