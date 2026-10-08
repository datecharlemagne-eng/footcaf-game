:root {
  --bg: #071a29;
  --bg-2: #0d2338;
  --panel: rgba(17, 35, 50, 0.85);
  --panel-strong: #12283b;
  --line: rgba(145, 178, 207, 0.25);
  --text: #edf5ff;
  --muted: #9ab7d5;
  --green: #48e8a8;
  --gold: #ffcf70;
  --blue: #60c1ff;
  --rose: #ff6f8a;
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  --pitch: #2ba461;
  --light-line: rgba(255,255,255,0.7);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(135deg, var(--bg), var(--bg-2));
  color: var(--text);
}

button { font: inherit; }

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
}

.sidebar {
  padding: 22px 18px;
  border-right: 1px solid var(--line);
  background: rgba(7, 18, 29, 0.7);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green), #13cfe1);
  color: #072539;
  font-size: 1.5rem;
  font-weight: 900;
  box-shadow: var(--shadow);
}

.brand h1 { margin: 0; font-size: 1.4rem; }
.brand small { color: var(--muted); }

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 22px;
}

.nav-btn, .ghost-btn, .primary-btn, .secondary-btn {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-btn:hover, .ghost-btn:hover, .primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(96,193,255,0.7);
}

.nav-btn.active {
  border-color: rgba(96,193,255,0.7);
  background: linear-gradient(135deg, rgba(96,193,255,0.15), rgba(72,232,168,0.12));
}

.mini-panel {
  margin-top: 30px;
  padding: 16px 14px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(18, 40, 59, 0.9);
  box-shadow: var(--shadow);
}

.mini-panel h3 { margin-top: 0; }

.primary-btn {
  width: 100%;
  margin-top: 14px;
  border: none;
  background: linear-gradient(135deg, var(--green), #1ec69e);
  color: #062f22;
  font-weight: 800;
}

.secondary-btn {
  width: 100%;
  margin-top: 10px;
  background: rgba(255,255,255,0.05);
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
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--muted);
  margin: 0 0 8px;
}

.topbar h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.2rem);
}

.top-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--muted);
}

.chip.accent {
  background: rgba(255,207,112,0.1);
  color: var(--gold);
  border-color: rgba(255,207,112,0.4);
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
.competition-card,
.career-card,
.database-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 18px;
}

.stat-card label {
  display: block;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 0.8rem;
}

.stat-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 2rem;
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
  gap: 12px;
  margin-bottom: 16px;
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
  background: rgba(255,111,138,0.12);
  color: var(--rose);
  font-weight: 800;
}

.card-list {
  display: grid;
  gap: 16px;
}

.player-card,
.recruit-card,
.finance-card,
.competition-card,
.database-card,
.career-card {
  padding: 18px;
}

.player-card {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr auto;
  align-items: center;
  gap: 14px;
}

.player-header { display: flex; flex-direction: column; gap: 4px; }
.player-header strong { font-size: 1.08rem; }
.meta { color: var(--muted); font-size: 0.82rem; }

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 84px;
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
  border: 1px solid var(--line);
}

.badge.green { background: rgba(72,232,168,0.12); color: var(--green); }
.badge.gold { background: rgba(255,207,112,0.12); color: var(--gold); }
.badge.blue { background: rgba(96,193,255,0.12); color: var(--blue); }

.action-btn {
  border: none;
  background: linear-gradient(135deg, var(--blue), #2f90ff);
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
  background: rgba(18, 40, 59, 0.9);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}

th {
  background: rgba(255,255,255,0.02);
  color: var(--muted);
}

tr:last-child td { border-bottom: none; }

.career-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 18px;
}

.player-summary {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.player-summary .player-name {
  font-size: 1.5rem;
  font-weight: 800;
}

.progress-block {
  margin-top: 12px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--line);
}

.progress-bar span {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--green), var(--blue));
}

.match-stage {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 18px;
}

.pitch {
  position: relative;
  height: 420px;
  border-radius: 22px;
  overflow: hidden;
  background: linear-gradient(180deg, #1f9d5c, var(--pitch));
  border: 8px solid #dfe8ee;
  box-shadow: var(--shadow);
  transform: perspective(1200px) rotateX(8deg);
}

.pitch-line {
  position: absolute;
  border: 2px solid var(--light-line);
}

.center-line {
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  transform: translateX(-50%);
}

.center-circle {
  top: 50%;
  left: 50%;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.box {
  width: 120px;
  height: 180px;
  top: 50%;
  transform: translateY(-50%);
}

.left-box { left: 0; border-left: none; }
.right-box { right: 0; border-right: none; }

.player {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
  border: 2px solid rgba(0,0,0,0.2);
}

.player.p1 { left: 18%; top: 30%; }
.player.p2 { left: 25%; top: 62%; }
.player.p3 { left: 42%; top: 46%; }
.player.p4 { left: 58%; top: 28%; }
.player.p5 { left: 62%; top: 68%; }
.player.enemy { background: #12283b; border-color: rgba(255,255,255,0.15); }
.player.enemy.e1 { right: 18%; top: 30%; }
.player.enemy.e2 { right: 25%; top: 62%; }
.player.enemy.e3 { right: 42%; top: 46%; }
.player.enemy.e4 { right: 58%; top: 28%; }
.player.enemy.e5 { right: 62%; top: 68%; }

.ball {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(255,255,255,0.6);
}

.match-panel {
  background: rgba(18, 40, 59, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.scoreboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  color: var(--muted);
}

.scoreboard strong {
  color: var(--text);
  font-size: 1.4rem;
}

.match-log {
  display: grid;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--muted);
}

.database-grid,
.finance-grid,
.competition-grid {
  display: grid;
  gap: 16px;
}

.database-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.finance-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.metric-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--muted);
}

.metric-row strong { color: var(--text); }

@media (max-width: 1040px) {
  .app-shell { grid-template-columns: 1fr; }
  .sidebar { border-right: none; border-bottom: 1px solid var(--line); }
  .stats-grid, .content-grid, .career-layout, .match-stage, .database-grid, .finance-grid { grid-template-columns: 1fr; }
  .player-card { grid-template-columns: 1fr 1fr; }
}






















































































































