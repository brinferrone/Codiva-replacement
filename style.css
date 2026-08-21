:root {
  --bg: #0b0b12;
  --bg-soft: #14141f;
  --card: #181826;
  --card-2: #1f1f30;
  --line: rgba(255, 255, 255, 0.08);
  --text: #f4f4f8;
  --muted: #9a9ab0;
  --accent: #7c5cff;
  --accent-2: #ff5c8a;
  --good: #34d399;
  --warn: #fbbf24;
  --bad: #f87171;
  --radius: 18px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Inter", system-ui, sans-serif;
  background: radial-gradient(1200px 600px at 80% -10%, rgba(124, 92, 255, 0.18), transparent 60%),
              radial-gradient(900px 500px at -10% 10%, rgba(255, 92, 138, 0.12), transparent 55%),
              var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.app {
  max-width: 1080px;
  margin: 0 auto;
  padding: 56px 24px 80px;
}

/* Hero */
.hero { margin-bottom: 36px; }

.hero-mark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}

.hero-mark .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

.hero-label {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(34px, 6vw, 56px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  background: linear-gradient(120deg, #fff 30%, #b9a8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  margin-top: 14px;
  color: var(--muted);
  max-width: 560px;
  font-size: 15px;
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}

.stat {
  background: linear-gradient(180deg, var(--card), var(--card-2));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 18px 16px;
}

.stat .k {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.stat .v {
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  font-weight: 600;
  margin-top: 8px;
  word-break: break-word;
}

.stat .v.small { font-size: 15px; }

.verdict {
  grid-column: 1 / -1;
  text-align: center;
  padding: 16px;
  border-radius: var(--radius);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  border: 1px solid var(--line);
}
.verdict.amazing { background: rgba(52, 211, 153, 0.12); color: var(--good); border-color: rgba(52, 211, 153, 0.3); }
.verdict.great   { background: rgba(124, 92, 255, 0.14); color: #b9a8ff; border-color: rgba(124, 92, 255, 0.3); }
.verdict.keep    { background: rgba(248, 113, 113, 0.12); color: var(--bad); border-color: rgba(248, 113, 113, 0.3); }
.verdict.empty   { background: var(--card); color: var(--muted); }

/* Controls */
.controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.btn {
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: 999px;
  padding: 11px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.12s ease, background 0.2s ease, border-color 0.2s ease;
}
.btn:active { transform: translateY(1px); }

.btn-primary {
  background: linear-gradient(120deg, var(--accent), #9d7bff);
  color: #fff;
  box-shadow: 0 6px 20px rgba(124, 92, 255, 0.35);
}
.btn-primary:hover { filter: brightness(1.08); }

.btn-ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--line);
}
.btn-ghost:hover { border-color: var(--accent-2); color: var(--accent-2); }

.capacity {
  margin-left: auto;
  font-size: 13px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}
.capacity.full { color: var(--warn); }

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.card {
  position: relative;
  background: linear-gradient(180deg, var(--card), var(--card-2));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
  overflow: hidden;
  transition: transform 0.18s ease, border-color 0.18s ease;
  animation: rise 0.3s ease both;
}
.card:hover { transform: translateY(-3px); border-color: rgba(124, 92, 255, 0.4); }

.card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 64px;
  background: linear-gradient(120deg, rgba(124, 92, 255, 0.25), rgba(255, 92, 138, 0.18));
  opacity: 0.5;
}

.card .cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  margin: -20px -20px 16px;
}

.card .cover .note {
  font-family: "Space Grotesk", sans-serif;
  font-size: 28px;
  color: #fff;
  opacity: 0.9;
}

.card .genre {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 3px 10px;
  margin-bottom: 12px;
}

.card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
}

.card .artist { color: var(--muted); font-size: 14px; margin-top: 2px; }

.card .meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 13px;
  color: var(--muted);
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  color: var(--text);
}
.rating .bar {
  width: 60px; height: 6px; border-radius: 3px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
}
.rating .bar i {
  display: block; height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
}

.card .actions { margin-top: 16px; display: flex; gap: 10px; }

.play {
  flex: 1;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.18s ease, border-color 0.18s ease;
}
.play:hover { background: var(--accent); border-color: var(--accent); color: #fff; }

.like {
  font-family: inherit;
  font-size: 14px;
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  transition: color 0.18s ease, border-color 0.18s;
}
.like:hover { color: var(--accent-2); border-color: var(--accent-2); }

/* Empty + footer */
.empty {
  text-align: center;
  color: var(--muted);
  padding: 48px 0;
  font-size: 15px;
}

.foot {
  margin-top: 48px;
  text-align: center;
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.04em;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 720px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .verdict { grid-column: 1 / -1; }
}
