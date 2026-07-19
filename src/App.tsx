import { useEffect, useMemo, useState } from "react";
import type { AppState, Category, Experiment } from "./types";
import { defaultState, loadState, saveState, today } from "./lib/storage";
import { experiments } from "./data/experiments";
import { achievements, equipment, TOTAL } from "./data/meta";
import { accentClass, FlaskIcon, dots } from "./components/shared";
import { Tile } from "./components/shared";
import { Detail } from "./components/Detail";

const CATEGORIES: Category[] = ["Chemistry", "Physics", "Earth Science", "Life & Plants"];
type View = "home" | "library" | "progress" | "certificate" | "settings";

function evaluateUnlocked(state: AppState): Record<string, string> {
  const doneSlugs = Object.keys(state.completed);
  const n = doneSlugs.length;
  const doneByCat = (cat: Category) =>
    experiments.filter((e) => e.category === cat).every((e) => state.completed[e.slug]);
  const next = { ...state.unlocked };
  for (const a of achievements) {
    if (next[a.id]) continue;
    let hit = false;
    if (a.kind === "milestone" && a.threshold != null) hit = n >= a.threshold;
    if (a.kind === "category" && a.category) hit = doneByCat(a.category);
    if (a.kind === "special" && a.slug) hit = !!state.completed[a.slug];
    if (hit) next[a.id] = today();
  }
  return next;
}

export function App() {
  const [state, setState] = useState<AppState>(() => loadState());
  const [view, setView] = useState<View>("home");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [catFilter, setCatFilter] = useState<Category | "All">("All");
  const [hideDone, setHideDone] = useState(false);
  const [kitOnly, setKitOnly] = useState(false);

  useEffect(() => { saveState(state); }, [state]);

  function update(mut: (s: AppState) => AppState) {
    setState((prev) => {
      const draft = mut({ ...prev });
      draft.unlocked = evaluateUnlocked(draft);
      return draft;
    });
  }

  const doneCount = Object.keys(state.completed).length;
  const byCat = useMemo(() => {
    const m: Record<string, { done: number; total: number }> = {};
    for (const c of CATEGORIES) m[c] = { done: 0, total: 0 };
    for (const e of experiments) {
      m[e.category].total++;
      if (state.completed[e.slug]) m[e.category].done++;
    }
    return m;
  }, [state.completed]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return experiments.filter((e) => {
      if (catFilter !== "All" && e.category !== catFilter) return false;
      if (hideDone && state.completed[e.slug]) return false;
      if (kitOnly && !e.kitOnly) return false;
      if (q && !(`${e.title} ${e.summary} ${e.category}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [query, catFilter, hideDone, kitOnly, state.completed]);

  const open = openSlug ? experiments.find((e) => e.slug === openSlug) ?? null : null;

  function openExperiment(e: Experiment) {
    setOpenSlug(e.slug);
    update((s) => ({ ...s, lastSlug: e.slug }));
  }
  function toggleDone(slug: string) {
    update((s) => {
      const completed = { ...s.completed };
      if (completed[slug]) delete completed[slug]; else completed[slug] = today();
      return { ...s, completed };
    });
  }
  function toggleFav(slug: string) {
    update((s) => ({
      ...s,
      favourites: s.favourites.includes(slug) ? s.favourites.filter((x) => x !== slug) : [...s.favourites, slug]
    }));
  }
  function navRelative(dir: -1 | 1) {
    if (!open) return;
    const idx = experiments.findIndex((e) => e.slug === open.slug);
    const next = experiments[(idx + dir + experiments.length) % experiments.length];
    openExperiment(next);
  }

  // ---------- DETAIL ----------
  if (open) {
    return (
      <Shell view={view} setView={(v) => { setOpenSlug(null); setView(v); }}>
        <Detail
          e={open}
          done={!!state.completed[open.slug]}
          fav={state.favourites.includes(open.slug)}
          note={state.notes[open.slug] ?? ""}
          onBack={() => { setOpenSlug(null); setView("library"); }}
          onToggleDone={() => toggleDone(open.slug)}
          onToggleFav={() => toggleFav(open.slug)}
          onNote={(v) => update((s) => ({ ...s, notes: { ...s.notes, [open.slug]: v } }))}
          onNav={navRelative}
        />
      </Shell>
    );
  }

  return (
    <Shell view={view} setView={setView}>
      {view === "home" && (
        <>
          <span className="eyebrow">150 Fun Science Experiments · companion</span>
          <h1>Welcome, {state.scientistName || "scientist"} 👩‍🔬</h1>

          <div className="readout" style={{ marginTop: 12 }}>
            <div className="count">{doneCount}<small> / {TOTAL} done</small></div>
            <div className="bar"><span style={{ width: `${(doneCount / TOTAL) * 100}%` }} /></div>
            <div className="cats">
              {CATEGORIES.map((c) => (
                <div key={c} className={`cat-row ${accentClass(c)}`}>
                  <span className="swatch" /><span>{c}</span>
                  <span className="n">{byCat[c].done}/{byCat[c].total}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-actions">
            <button className="btn full" onClick={() => setView("library")}>Browse experiments</button>
            <button className="btn ghost full" onClick={() => {
              const pick = experiments[Math.floor(Math.random() * experiments.length)];
              openExperiment(pick);
            }}>Surprise me</button>
          </div>

          {state.lastSlug && (() => {
            const last = experiments.find((e) => e.slug === state.lastSlug);
            return last ? (
              <button className="btn line full" onClick={() => openExperiment(last)}>
                Continue: {last.title} →
              </button>
            ) : null;
          })()}

          <div className="namefield">
            <label htmlFor="name">Scientist's name</label>
            <input id="name" value={state.scientistName} placeholder="Type a name for the certificates"
              onChange={(e) => update((s) => ({ ...s, scientistName: e.target.value }))} />
          </div>

          <p className="disclaimer">
            A friendly, fan-made guide for a kit whose booklet was lost — not the official manufacturer manual.
            Always have an adult nearby. 8+.
          </p>
        </>
      )}

      {view === "library" && (
        <>
          <h1>Experiments</h1>
          <input className="search" placeholder="Search experiments…" value={query}
            onChange={(e) => setQuery(e.target.value)} />
          <div className="filters">
            <button className="chip" aria-pressed={catFilter === "All"} onClick={() => setCatFilter("All")}>All</button>
            {CATEGORIES.map((c) => (
              <button key={c} className="chip" aria-pressed={catFilter === c} onClick={() => setCatFilter(c)}>{c}</button>
            ))}
            <button className="chip" aria-pressed={hideDone} onClick={() => setHideDone((v) => !v)}>Not done yet</button>
            <button className="chip" aria-pressed={kitOnly} onClick={() => setKitOnly((v) => !v)}>Kit only</button>
          </div>
          {filtered.length === 0
            ? <p className="muted">No experiments match those filters. Try clearing one.</p>
            : <div className="grid">
                {filtered.map((e) => (
                  <Tile key={e.slug} e={e} done={!!state.completed[e.slug]} onClick={() => openExperiment(e)} />
                ))}
              </div>}
          <p className="disclaimer">More experiments get added over time.</p>
        </>
      )}

      {view === "progress" && (
        <>
          <h1>Progress</h1>
          <div className="readout">
            <div className="count">{Math.round((doneCount / TOTAL) * 100)}<small>% complete</small></div>
            <div className="bar"><span style={{ width: `${(doneCount / TOTAL) * 100}%` }} /></div>
          </div>

          <h2 style={{ marginTop: 18 }}>Badges</h2>
          <div className="ach">
            {achievements.map((a) => {
              const on = !!state.unlocked[a.id];
              return (
                <div key={a.id} className={`card-a ${on ? "" : "locked"}`}>
                  <div className="medal">{on ? "🏅" : "🔒"}</div>
                  <strong>{a.title}</strong>
                  <div className="muted" style={{ fontSize: ".85rem" }}>{a.description}</div>
                  {on && <div className="mono" style={{ fontSize: ".72rem", marginTop: 6 }}>Earned {state.unlocked[a.id]}</div>}
                </div>
              );
            })}
          </div>

          <h2 style={{ marginTop: 18 }}>All experiments</h2>
          <div className="list">
            {experiments.map((e) => (
              <div key={e.slug} className={`row ${accentClass(e.category)}`}>
                <span className="accent-dot" />
                <span className="r-name">{e.id}. {e.title}</span>
                <span className="r-meta">{state.completed[e.slug] ? `✓ ${state.completed[e.slug]}` : dots(e.difficulty)}</span>
              </div>
            ))}
          </div>
          <button className="btn line full no-print" style={{ marginTop: 14 }} onClick={() => window.print()}>
            Print completion checklist
          </button>
        </>
      )}

      {view === "certificate" && (
        <>
          <h1 className="no-print">Certificate</h1>
          <div className="cert">
            <div className="crest">⚗️🏅⚗️</div>
            <h2>Certificate of Science</h2>
            <p>This certifies that</p>
            <div className="who">{state.scientistName || "Young Scientist"}</div>
            <p>has completed <strong>{doneCount}</strong> of {TOTAL} experiments{doneCount >= TOTAL ? " — the whole kit!" : ""}</p>
            <p className="mono" style={{ fontSize: ".8rem" }}>{today()}</p>
            <div className="sig">Signed by a grown-up scientist</div>
          </div>
          <button className="btn full no-print" style={{ marginTop: 14 }} onClick={() => window.print()}>Print certificate</button>
        </>
      )}

      {view === "settings" && (
        <>
          <h1>Settings</h1>
          <div className="section">
            <label htmlFor="name2">Scientist's name</label>
            <input id="name2" value={state.scientistName}
              onChange={(e) => update((s) => ({ ...s, scientistName: e.target.value }))} />
          </div>

          <div className="section">
            <h3>Equipment checklist</h3>
            <p className="muted" style={{ fontSize: ".85rem" }}>What should be in the box. Only use chemicals that are still sealed and clearly labelled.</p>
            <div className="list" style={{ marginTop: 10 }}>
              {equipment.map((it) => (
                <div key={it.name} className="row">
                  <span className="r-name">{it.name}</span>
                  <span className="r-meta">{it.kind}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section no-print">
            <h3>Your data</h3>
            <p className="muted" style={{ fontSize: ".85rem" }}>Progress is saved on this device only. Back it up here.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              <button className="btn ghost" onClick={() => {
                const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob); a.download = "science-kit-progress.json"; a.click();
                URL.revokeObjectURL(a.href);
              }}>Export progress</button>

              <label className="btn line" style={{ margin: 0 }}>
                Import progress
                <input type="file" accept="application/json" style={{ display: "none" }}
                  onChange={(ev) => {
                    const f = ev.target.files?.[0]; if (!f) return;
                    f.text().then((t) => {
                      try {
                        const parsed = JSON.parse(t);
                        update(() => ({ ...defaultState, ...parsed, settings: { ...defaultState.settings, ...(parsed.settings ?? {}) } }));
                      } catch { alert("That file couldn't be read."); }
                    });
                  }} />
              </label>

              <button className="btn line" onClick={() => {
                if (confirm("Reset ALL progress? This can't be undone.")) {
                  setState({ ...defaultState });
                  setView("home");
                }
              }}>Reset progress</button>
            </div>
          </div>
        </>
      )}
    </Shell>
  );
}

function Shell({ view, setView, children }: { view: View; setView: (v: View) => void; children: React.ReactNode }) {
  const tabs: [View, string, string][] = [
    ["home", "🏠", "Home"],
    ["library", "🧪", "Experiments"],
    ["progress", "🏆", "Progress"],
    ["certificate", "📜", "Certificate"],
    ["settings", "⚙️", "Settings"]
  ];
  return (
    <>
      <header className="topbar no-print">
        <span className="logo"><FlaskIcon className="flask" /> SCIENCE KIT</span>
        <span className="sub">companion</span>
      </header>
      <main className="app">{children}</main>
      <nav className="tabs no-print">
        {tabs.map(([v, ic, label]) => (
          <button key={v} aria-current={view === v} onClick={() => setView(v)}>
            <span className="ic">{ic}</span><span>{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
