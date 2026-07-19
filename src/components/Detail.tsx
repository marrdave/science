import { useEffect, useRef, useState } from "react";
import type { Experiment } from "../types";
import { accentClass, dots, sym } from "./shared";

function Timer({ seconds }: { seconds: number }) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (running && left > 0) {
      ref.current = window.setTimeout(() => setLeft((l) => l - 1), 1000);
    }
    if (left === 0 && ref.current) setRunning(false);
    return () => { if (ref.current) clearTimeout(ref.current); };
  }, [running, left]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return (
    <div>
      <div className="timer">{mm}:{ss}</div>
      <div className="step-nav">
        <button className="btn ghost" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : left === 0 ? "Done" : "Start timer"}
        </button>
        <button className="btn line" onClick={() => { setLeft(seconds); setRunning(false); }}>Reset</button>
      </div>
    </div>
  );
}

export function Detail({
  e, done, fav, note, onBack, onToggleDone, onToggleFav, onNote, onNav
}: {
  e: Experiment;
  done: boolean;
  fav: boolean;
  note: string;
  onBack: () => void;
  onToggleDone: () => void;
  onToggleFav: () => void;
  onNote: (v: string) => void;
  onNav: (dir: -1 | 1) => void;
}) {
  const [step, setStep] = useState(0);
  const s = e.steps[step];

  return (
    <div className={accentClass(e.category)}>
      <button className="btn line no-print" onClick={onBack} style={{ marginBottom: 12 }}>← All experiments</button>

      <div className="detail-head">
        <span className="eyebrow">No. {String(e.id).padStart(2, "0")} · {sym(e)}</span>
        <h1>{e.title}</h1>
        <p className="muted" style={{ margin: "4px 0 12px" }}>{e.summary}</p>
        <div>
          <span className="pill accent">{e.category}</span>
          <span className="pill">{dots(e.difficulty)}</span>
          <span className="pill">{e.minutes} min{e.waitTime ? ` + ${e.waitTime}` : ""}</span>
          <span className="pill">{e.supervision}</span>
          {e.messy && <span className="pill">Messy</span>}
        </div>
      </div>

      <div className="section safety">
        <h3>Stay safe</h3>
        <ul>{e.safety.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>

      <div className="section">
        <h3>What you need</h3>
        <div className="needs">
          <div>
            <strong>From the kit</strong>
            <ul>
              {e.kitItems.map((it, i) => (
                <li key={i}>{it.name}{it.quantity ? ` — ${it.quantity}` : ""}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>From home</strong>
            <ul>
              {e.homeItems.length === 0 && <li className="muted">Nothing — kit only!</li>}
              {e.homeItems.map((it, i) => (
                <li key={i}>
                  {it.name}{it.quantity ? ` — ${it.quantity}` : ""}
                  {it.approx && <span className="approx"> (approx)</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section stepper">
        <h3 style={{ textAlign: "left" }}>Steps</h3>
        <div className="step-num">Step {step + 1} of {e.steps.length}</div>
        <p className="step-text">{s.text}</p>
        {s.tip && <p className="step-tip">💡 {s.tip}</p>}
        {s.warning && <p className="step-warn">⚠️ {s.warning}</p>}
        {typeof s.timer === "number" && s.timer > 0 && <Timer seconds={s.timer} />}
        {s.timer === 0 && <p className="step-tip">⏳ This one needs a long wait — come back later.</p>}
        <div className="step-nav no-print">
          <button className="btn line" disabled={step === 0} onClick={() => setStep((n) => n - 1)}>Back</button>
          {step < e.steps.length - 1
            ? <button className="btn accent" onClick={() => setStep((n) => n + 1)}>Next step</button>
            : <button className="btn accent" onClick={onToggleDone}>{done ? "✓ Completed" : "Mark completed"}</button>}
        </div>
      </div>

      <div className="section">
        <h3>What should happen?</h3>
        <p>{e.expected}</p>
        <h3 style={{ marginTop: 14 }}>Why it works</h3>
        <p>{e.why}</p>
        {e.troubleshooting && e.troubleshooting.length > 0 && (
          <>
            <h3 style={{ marginTop: 14 }}>If it goes wrong</h3>
            <ul>
              {e.troubleshooting.map((t, i) => <li key={i}><strong>{t.problem}:</strong> {t.fix}</li>)}
            </ul>
          </>
        )}
        <h3 style={{ marginTop: 14 }}>Tidy up</h3>
        <p>{e.cleanup}</p>
      </div>

      <div className="section no-print">
        <label htmlFor="note">My notes</label>
        <textarea id="note" rows={3} value={note} placeholder="What did you see? What would you try next?"
          onChange={(ev) => onNote(ev.target.value)} />
      </div>

      <div className="detail-foot no-print">
        <button className="btn accent" onClick={onToggleDone}>{done ? "✓ Completed" : "Mark completed"}</button>
        <button className="btn ghost" onClick={onToggleFav}>{fav ? "★ Favourite" : "☆ Favourite"}</button>
        <button className="btn line" onClick={() => window.print()}>Print this</button>
        <span style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="btn line" onClick={() => onNav(-1)}>← Prev</button>
          <button className="btn line" onClick={() => onNav(1)}>Next →</button>
        </span>
      </div>
    </div>
  );
}
