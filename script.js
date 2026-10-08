* {
  box-sizing: border-box;
}

:root {
  --bg-1: #0a1624;
  --bg-2: #112d46;
  --panel: rgba(16, 32, 51, 0.96);
  --panel-alt: rgba(19, 42, 65, 0.95);
  --panel-soft: rgba(255, 255, 255, 0.02);
  --accent: #39d78a;
  --accent-2: #7fe7b0;
  --warning: #f5ca67;
  --danger: #ff6f6f;
  --text: #edf7ff;
  --muted: #a4bfdc;
  --line: rgba(255, 255, 255, 0.09);
  --shadow: rgba(0, 0, 0, 0.22);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #062d1d;
  font-weight: 800;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
  box-shadow: 0 10px 22px rgba(57, 215, 138, 0.18);
}

button:hover {
  transform: translateY(-1px);
  filter: brightness(1.02);
}

button.ghost {
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border: 1px solid var(--line);
  box-shadow: none;
}

select {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--text);
  padding: 0.6rem 0.7rem;
  margin-top: 0.35rem;
}

.hidden {
  display: none !important;
}

.start-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(2, 10, 17, 0.75);
  backdrop-filter: blur(8px);
  z-index: 10;
}

.start-panel {
  width: min(460px, calc(100vw - 2rem));
  background: rgba(13, 29, 45, 0.97);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.5rem 1.3rem;
  box-shadow: 0 24px 50px rgba(0,0,0,0.28);
}

.start-panel h2 {
  margin-bottom: 1.2rem;
}

.start-actions {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.select-wrap {
  display: block;
  color: var(--muted);
  margin-top: 0.5rem;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem 3rem;
}

.header {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.club-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  border-radius: 20px;
  background: rgba(16, 35, 56, 0.95);
  border: 1px solid var(--line);
  box-shadow: 0 24px 40px var(--shadow);
}

.eyebrow {
  margin: 0 0 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--muted);
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.7rem);
}

.club-badges {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--text);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-card {
  padding: 1rem 1.05rem;
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: 0 18px 30px var(--shadow);
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(57, 215, 138, 0.14), rgba(127, 231, 176, 0.08));
}

.label {
  display: block;
  color: var(--muted);
  margin-bottom: 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-card strong {
  font-size: 1.08rem;
}

.main-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(290px, 1fr));
  gap: 1rem;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 20px 32px var(--shadow);
}

.panel.highlight {
  background: linear-gradient(180deg, rgba(28, 57, 89, 0.98), rgba(16, 32, 51, 0.98));
}

.panel.wide {
  grid-column: 1 / -1;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.team-list,
.market-list {
  display: grid;
  gap: 0.7rem;
}

.player-card,
.market-card {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  border-radius: 14px;
  padding: 0.9rem 0.8rem;
  background: var(--panel-soft);
  border: 1px solid var(--line);
}

.player-meta,
.market-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.player-meta span,
.market-meta span {
  color: var(--muted);
  font-size: 0.82rem;
}

.rating-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.6rem;
  height: 2.6rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: rgba(57, 215, 138, 0.12);
  color: var(--accent);
  font-weight: 800;
}

.mg-controls {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.mg-controls label {
  display: block;
  color: var(--muted);
  font-size: 0.83rem;
}

.fixture-box,
.caf-box {
  display: grid;
  gap: 0.6rem;
  border-radius: 14px;
  padding: 0.85rem 0.9rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
}

.fixture-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  color: var(--muted);
}

.fixture-score {
  font-size: 1.3rem;
  font-weight: 800;
}

.caf-stage {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  color: var(--muted);
}

.standings-wrap {
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--line);
}

.standings-table {
  width: 100%;
  border-collapse: collapse;
}

.standings-table th,
.standings-table td {
  padding: 0.75rem 0.65rem;
  text-align: left;
  border-bottom: 1px solid var(--line);
}

.standings-table th {
  background: rgba(255,255,255,0.02);
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.standings-table tr.highlight-team {
  background: rgba(57, 215, 138, 0.08);
}

.log-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.log-list li {
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  color: var(--muted);
}

@media (max-width: 840px) {
  .stats-grid,
  .main-grid,
  .mg-controls,
  .start-actions {
    grid-template-columns: 1fr;
    display: grid;
  }

  .club-header,
  .panel-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
