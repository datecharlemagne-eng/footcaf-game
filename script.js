* {
  box-sizing: border-box;
}

:root {
  --bg: #0d1a2a;
  --bg-alt: #10263f;
  --panel: rgba(18, 35, 54, 0.95);
  --panel-strong: rgba(20, 44, 70, 0.98);
  --accent: #37d38d;
  --accent-strong: #1aa569;
  --warning: #f5c76d;
  --danger: #ff6d6d;
  --text: #edf5ff;
  --muted: #9bb7d6;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: rgba(0, 0, 0, 0.24);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #0d1a2a 0%, #143354 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), #66efb1);
  color: #062b1b;
  font-weight: 800;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 8px 24px rgba(55, 211, 141, 0.2);
}

button:hover {
  transform: translateY(-1px);
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
  padding: 1.2rem 1.4rem;
  background: rgba(16, 38, 63, 0.9);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow) 0 22px 40px;
}

.eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--muted);
  text-transform: uppercase;
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.5rem);
}

.club-badges {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.6rem 0.8rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
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
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow) 0 16px 32px;
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(55, 211, 141, 0.18), rgba(26,165,105,0.1));
}

.label {
  display: block;
  color: var(--muted);
  margin-bottom: 0.45rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
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
  box-shadow: var(--shadow) 0 20px 30px;
}

.panel.highlight {
  background: linear-gradient(180deg, rgba(26, 54, 86, 0.95), rgba(17, 32, 52, 0.98));
}

.panel.wide {
  grid-column: 1 / -1;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
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
  gap: 0.7rem;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  border-radius: 14px;
  padding: 0.9rem 0.8rem;
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
  font-size: 0.85rem;
}

.rating-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: rgba(55, 211, 141, 0.14);
  color: var(--accent);
  font-weight: 800;
}

.fixture-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.85rem 0.9rem;
  display: grid;
  gap: 0.5rem;
}

.fixture-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.9rem;
  color: var(--muted);
}

.fixture-score {
  font-size: 1.35rem;
  font-weight: 800;
}

.standings-wrap {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
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
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(255,255,255,0.02);
}

.standings-table tr.highlight-team {
  background: rgba(55, 211, 141, 0.08);
}

.log-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.log-list li {
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  padding: 0.85rem 0.9rem;
  color: var(--muted);
}

@media (max-width: 840px) {
  .stats-grid,
  .main-grid {
    grid-template-columns: 1fr;
  }

  .club-header,
  .panel-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
