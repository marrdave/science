import type { Category, Experiment } from "../types";

export function accentClass(cat: Category): string {
  switch (cat) {
    case "Chemistry": return "cat-chem";
    case "Physics": return "cat-phys";
    case "Earth Science": return "cat-earth";
    case "Life & Plants": return "cat-life";
  }
}

export function sym(e: Experiment): string {
  const words = e.title.replace(/[^A-Za-z ]/g, "").split(/\s+/).filter(Boolean);
  const a = words[0]?.[0] ?? "X";
  const b = words[1]?.[0]?.toLowerCase() ?? words[0]?.[1]?.toLowerCase() ?? "";
  return (a + b);
}

export function dots(n: number): string {
  return "●".repeat(n) + "○".repeat(Math.max(0, 5 - n));
}

export function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6M10 3v6l-4.5 8.5A2 2 0 0 0 7.3 21h9.4a2 2 0 0 0 1.8-3.5L14 9V3"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="15" r="1" fill="currentColor" />
      <circle cx="14" cy="17.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Tile({ e, done, onClick }: { e: Experiment; done: boolean; onClick: () => void }) {
  return (
    <button className={`tile ${accentClass(e.category)}`} onClick={onClick}>
      {done && <span className="done-flag" aria-label="Completed">✓</span>}
      {e.status === "bonus" && !done && <span className="badge-bonus">BONUS</span>}
      <span className="num">No. {e.id}</span>
      <span className="sym">{sym(e)}</span>
      <span className="tname">{e.title}</span>
      <span className="meta">
        <span className="dots" aria-label={`difficulty ${e.difficulty} of 5`}>{dots(e.difficulty)}</span>
        <span>{e.minutes}m</span>
        {e.supervision === "Adult required" && <span className="adult" title="Adult required">🧑‍🔬</span>}
      </span>
    </button>
  );
}
