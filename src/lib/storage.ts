import type { AppState } from "../types";

const KEY = "science-kit-companion:v2";

export const defaultState: AppState = {
  version: 2,
  scientistName: "",
  completed: {},
  favourites: [],
  notes: {},
  unlocked: {},
  lastSlug: null,
  settings: { density: "comfortable" }
};

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    // shallow-merge over defaults so missing/renamed keys never crash the app
    return {
      ...defaultState,
      ...parsed,
      settings: { ...defaultState.settings, ...(parsed?.settings ?? {}) }
    };
  } catch {
    return { ...defaultState };
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked — the app keeps working in memory
  }
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}
