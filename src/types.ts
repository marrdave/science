export type Category = "Chemistry" | "Physics" | "Earth Science" | "Life & Plants";
export type Status = "verified" | "bonus";
export type Supervision = "Adult required" | "Child (adult nearby)";

export interface Item {
  name: string;
  quantity?: string;
  /** true = amount is a sensible approximation, not from the original booklet */
  approx?: boolean;
}

export interface Step {
  text: string;
  /** seconds; when set, the step shows a timer */
  timer?: number;
  tip?: string;
  warning?: string;
}

export interface Experiment {
  id: number;
  slug: string;
  title: string;
  status: Status;
  category: Category;
  /** 1..5 */
  difficulty: number;
  minutes: number;
  /** human string e.g. "3–5 days" for long waits; drives a note, not a live timer */
  waitTime?: string;
  supervision: Supervision;
  messy: boolean;
  /** true = nothing needed from the kitchen */
  kitOnly: boolean;
  summary: string;
  kitItems: Item[];
  homeItems: Item[];
  safety: string[];
  steps: Step[];
  expected: string;
  why: string;
  troubleshooting?: { problem: string; fix: string }[];
  cleanup: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  kind: "milestone" | "category" | "special";
  /** milestone: number completed; category: complete that category; special: specific slug */
  threshold?: number;
  category?: Category;
  slug?: string;
}

export interface EquipmentItem {
  name: string;
  kind: "tool" | "reusable" | "chemical";
  note?: string;
}

export interface AppState {
  version: number;
  scientistName: string;
  /** slug -> ISO date completed */
  completed: Record<string, string>;
  favourites: string[];
  notes: Record<string, string>;
  unlocked: Record<string, string>; // achievement id -> ISO date
  lastSlug: string | null;
  settings: { density: "comfortable" | "compact" };
}
