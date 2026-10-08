:root {
  --bg: #081b2a;
  --bg-2: #0d2338;
  --panel: rgba(17, 35, 50, 0.84);
  --panel-strong: #12283b;
  --line: rgba(124, 160, 186, 0.25);
  --text: #edf5ff;
  --muted: #9ab5d1;
  --green: #3fe3a2;
  --gold: #ffcc70;
  --rose: #ff6988;
  --blue: #67c4ff;
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: linear-gradient(135deg, var(--bg), var(--bg-2));
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  padding: 22px 18px;
  border-right: 1px solid var(--line);
  background: rgba(9, 20, 31, 0.7);
  backdrop-filter: blur(8px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px 18px;
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green), #0ccfd1);
  color: #062133;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.brand h1 {
  margin: 0;
  font-size: 1.45rem;
}

.brand small {
  color: var(--muted);
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 22px;
}

.nav-btn,
.ghost-btn,
.primary-btn {
  border: 1px solid var(--line);
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-btn:hover,
.ghost-btn:hover,
.primary-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(103, 196, 255, 0.7);
}

.nav-btn.active {
  background: linear-gradient(135deg, rgba(103,196,255,0.18), rgba(63,227,162,0.12));
  border-color: rgba(103, 196, 255, 0.7);
}

.mini-panel {
  margin-top: 30px;
  padding: 16px 14px;
  background: rgba(18, 40, 59, 0.9);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.mini-panel h3 {
  margin-top: 0;
  font-size: 1rem;
}

.primary-btn {
  background: linear-gradient(135deg, var(--green), #2bb389);
  color: #052b1d;
  border: none;
  font-weight: 700;
  width: 100%;
  margin-top: 10px;
}

.main-panel {
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 0.72rem;
}

.topbar h2 {
  margin: 0;
  font-size: 2rem;
}

.top-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--muted);
  font-size: 0.8rem;
}

.chip.accent {
  background: rgba(255,204,112,0.12);
  border-color: rgba(255,204,112,0.4);
  color: var(--gold);
}

.screen {
  display: none;
}

.screen.active {
  display: block;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.stat-card,
.panel-block,
.player-card,
.recruit-card,
.finance-card,
.competition-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 18px 18px 16px;
}

.stat-card label {
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 12px;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 8px;
}

.stat-card small {
  color: var(--muted);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 18px;
}

.panel-block {
  padding: 18px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 12px;
}

.section-head h3 {
  margin: 0;
  font-size: 1.15rem;
}

.agenda-list,
.notification-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.agenda-list li,
.notification-list li {
  display: flex;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
}

.agenda-list li::before {
  content: "•";
  color: var(--blue);
  font-size: 1.4rem;
  line-height: 1;
}

.notification-list li::before {
  content: "!";
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255,105,136,0.14);
  color: var(--rose);
  font-weight: 800;
}

.card-list,
.finance-grid,
.competition-grid {
  display: grid;
  gap: 16px;
}

.player-card,
.recruit-card,
.finance-card,
.competition-card {
  padding: 18px;
}

.player-card {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr auto;
  align-items: center;
  gap: 16px;
}

.player-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.player-header strong {
  font-size: 1.08rem;
}

.meta {
  color: var(--muted);
  font-size: 0.82rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 78px;
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  border: 1px solid var(--line);
}

.badge.green {
  background: rgba(63,227,162,0.12);
  color: var(--green);
}

.badge.gold {
  background: rgba(255,204,112,0.12);
  color: var(--gold);
}

.badge.blue {
  background: rgba(103,196,255,0.12);
  color: var(--blue);
}

.action-btn {
  border: none;
  background: linear-gradient(135deg, var(--blue), #2e92ff);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.table-wrapper {
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(17, 35, 50, 0.8);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}

th {
  background: rgba(255,255,255,0.02);
  color: var(--muted);
  font-weight: 600;
}

tr:last-child td {
  border-bottom: none;
}

.competition-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.finance-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metric-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--muted);
}

.metric-row strong {
  color: var(--text);
}

@media (max-width: 1040px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .stats-grid,
  .content-grid,
  .finance-grid,
  .competition-grid {
    grid-template-columns: 1fr;
  }

  .player-card {
    grid-template-columns: 1fr 1fr;
  }
}
