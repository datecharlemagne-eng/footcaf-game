const STORAGE_KEY = 'footcaf-save-v1';

const defaultState = {
  club: 'AS Dakar',
  season: 2026,
  day: 1,
  budget: 12_000_000,
  reputation: 76,
  morale: 72,
  objective: 'Championnat CAF',
  players: [
    { name: 'Sadio Diop', position: 'Gardien', rating: 82 },
    { name: 'Moussa Faye', position: 'Défenseur', rating: 80 },
    { name: 'Mamadou Cissé', position: 'Défenseur', rating: 78 },
    { name: 'Ibrahima Ndao', position: 'Milieu', rating: 81 },
    { name: 'Khalid Samb', position: 'Milieu', rating: 79 },
    { name: 'Yacine Fall', position: 'Attaquant', rating: 84 },
    { name: 'Ablaye Diagna', position: 'Attaquant', rating: 82 }
  ],
  market: [
    { name: 'Lamine Kébé', position: 'Milieu', price: 1_500_000, rating: 85 },
    { name: 'Moussa Sarr', position: 'Ailier', price: 2_200_000, rating: 86 },
    { name: 'Ndiaga Mbaye', position: 'Avant-centre', price: 2_600_000, rating: 88 },
    { name: 'Baba Mbengue', position: 'Défenseur', price: 1_200_000, rating: 80 }
  ],
  fixtures: [
    { round: 1, opponent: 'FC Thiès', home: true },
    { round: 2, opponent: 'US Saint-Louis', home: false },
    { round: 3, opponent: 'Renaissance Ziguinchor', home: true },
    { round: 4, opponent: 'Club Yoff', home: false },
    { round: 5, opponent: 'Amitié Sédhiou', home: true }
  ],
  fixtureIndex: 0,
  standings: [
    { club: 'AS Dakar', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 },
    { club: 'FC Thiès', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 },
    { club: 'US Saint-Louis', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 },
    { club: 'Renaissance Ziguinchor', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 },
    { club: 'Club Yoff', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 },
    { club: 'Amitié Sédhiou', played: 0, wins: 0, draws: 0, losses: 0, points: 0, gf: 0, ga: 0 }
  ],
  caf: {
    phase: 'Quarts de finale',
    form: 'Bonne',
    score: '1 - 0',
    goalDiff: 1
  },
  log: [
    'La préparation de la semaine a commencé dans de bonnes conditions.',
    'Le staff a constaté une hausse de la cohésion de groupe avant le prochain match.',
    'Le club se prépare sérieusement pour le titre national et la Coupe CAF.'
  ]
};

const dom = {
  clubName: document.querySelector('#club-name'),
  season: document.querySelector('#season'),
  day: document.querySelector('#day'),
  budget: document.querySelector('#budget'),
  reputation: document.querySelector('#reputation'),
  morale: document.querySelector('#morale'),
  objective: document.querySelector('#objective'),
  teamList: document.querySelector('#team-list'),
  marketList: document.querySelector('#market-list'),
  fixtureBox: document.querySelector('#fixture-box'),
  cafBox: document.querySelector('#caf-box'),
  standingsBody: document.querySelector('#standings-body'),
  log: document.querySelector('#log'),
  trainBtn: document.querySelector('#train-btn'),
  matchBtn: document.querySelector('#match-btn'),
  recruitBtn: document.querySelector('#recruit-btn'),
  nextDayBtn: document.querySelector('#next-day-btn'),
  resetBtn: document.querySelector('#reset-btn')
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultState);

  try {
    const parsed = JSON.parse(saved);
    return { ...structuredClone(defaultState), ...parsed };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatMoney(value) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value);
}

function getCurrentFixture() {
  return state.fixtures[state.fixtureIndex] || null;
}

function addLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 8);
}

function averageTeamRating() {
  if (!state.players.length) return 0;
  const total = state.players.reduce((sum, player) => sum + player.rating, 0);
  return total / state.players.length;
}

function renderTeam() {
  dom.teamList.innerHTML = state.players
    .map(
      (player) => `
        <div class="player-card">
          <div class="player-meta">
            <strong>${player.name}</strong>
            <span>${player.position}</span>
          </div>
          <span class="rating-badge">${player.rating}</span>
        </div>
      `
    )
    .join('');
}

function renderMarket() {
  dom.marketList.innerHTML = state.market
    .map(
      (player) => `
        <div class="market-card">
          <div class="market-meta">
            <strong>${player.name}</strong>
            <span>${player.position} • ${player.rating} ★</span>
          </div>
          <button data-player="${player.name}" data-price="${player.price}">Signer ${formatMoney(player.price)}</button>
        </div>
      `
    )
    .join('');

  dom.marketList.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.player;
      const price = Number(button.dataset.price);
      const target = state.market.find((player) => player.name === name);

      if (!target) return;
      if (state.budget < price) {
        addLog(`Le recrutement de ${name} est refusé : budget insuffisant.`);
        render();
        return;
      }

      state.budget -= price;
      state.players.push({
        name: target.name,
        position: target.position,
        rating: target.rating
      });
      state.market = state.market.filter((player) => player.name !== name);
      state.reputation += 2;
      addLog(`${name} a signé pour ${formatMoney(price)}. Le groupe est renforcé.`);
      render();
      saveState();
    });
  });
}

function renderFixture() {
  const fixture = getCurrentFixture();
  if (!fixture) {
    dom.fixtureBox.innerHTML = `
      <div class="fixture-meta">
        <span>Calendrier</span>
        <span>Terminé</span>
      </div>
      <div class="fixture-score">Saison clôturée</div>
    `;
    return;
  }

  const venue = fixture.home ? 'Domicile' : 'Extérieur';
  dom.fixtureBox.innerHTML = `
    <div class="fixture-meta">
      <span>Journée ${fixture.round}</span>
      <span>${venue}</span>
    </div>
    <div class="fixture-score">AS Dakar vs ${fixture.opponent}</div>
    <div class="fixture-meta">
      <span>Ambiance</span>
      <strong>${state.morale}%</strong>
    </div>
  `;
}

function renderCAF() {
  dom.cafBox.innerHTML = `
    <div class="caf-stage">
      <span>Phase</span>
      <strong>${state.caf.phase}</strong>
    </div>
    <div class="caf-stage">
      <span>Forme</span>
      <strong>${state.caf.form}</strong>
    </div>
    <div class="caf-stage">
      <span>Dernier résultat</span>
      <strong>${state.caf.score}</strong>
    </div>
    <div class="caf-stage">
      <span>Différence</span>
      <strong>${state.caf.goalDiff >= 0 ? '+' : ''}${state.caf.goalDiff}</strong>
    </div>
  `;
}

function renderStandings() {
  const rows = [...state.standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const diffA = a.gf - a.ga;
    const diffB = b.gf - b.ga;
    if (diffB !== diffA) return diffB - diffA;
    return b.gf - a.gf;
  });

  dom.standingsBody.innerHTML = rows
    .map((club, index) => `
      <tr class="${club.club === state.club ? 'highlight-team' : ''}">
        <td>${index + 1}</td>
        <td>${club.club}</td>
        <td>${club.points}</td>
        <td>${club.played}</td>
        <td>${club.gf - club.ga >= 0 ? '+' : ''}${club.gf - club.ga}</td>
      </tr>
    `)
    .join('');
}

function renderLog() {
  dom.log.innerHTML = state.log.map((entry) => `<li>${entry}</li>`).join('');
}

function renderHeader() {
  dom.clubName.textContent = state.club;
  dom.season.textContent = state.season;
  dom.day.textContent = state.day;
  dom.budget.textContent = formatMoney(state.budget);
  dom.reputation.textContent = state.reputation;
  dom.morale.textContent = `${state.morale}%`;
  dom.objective.textContent = state.objective;
}

function applyLeagueResult(result) {
  const row = state.standings.find((team) => team.club === state.club);
  if (!row) return;

  row.played += 1;
  row.gf += result.goalsFor;
  row.ga += result.goalsAgainst;

  if (result.goalsFor > result.goalsAgainst) {
    row.points += 3;
    row.wins += 1;
    addLog(`Victoire ${result.goalsFor} - ${result.goalsAgainst} contre ${result.opponent}.`);
    state.reputation += 3;
    state.morale = clamp(state.morale + 8, 0, 100);
  } else if (result.goalsFor === result.goalsAgainst) {
    row.points += 1;
    row.draws += 1;
    addLog(`Nul ${result.goalsFor} - ${result.goalsAgainst} contre ${result.opponent}.`);
    state.reputation += 1;
    state.morale = clamp(state.morale + 2, 0, 100);
  } else {
    row.losses += 1;
    addLog(`Défaite ${result.goalsFor} - ${result.goalsAgainst} contre ${result.opponent}.`);
    state.reputation = Math.max(20, state.reputation - 2);
    state.morale = clamp(state.morale - 8, 0, 100);
  }
}

function updateOpponentTable(result) {
  const opponent = state.standings.find((team) => team.club === result.opponent);
  if (!opponent) return;

  opponent.played += 1;
  opponent.gf += result.opponentGoals;
  opponent.ga += result.goalsFor;

  if (result.opponentGoals > result.goalsFor) {
    opponent.points += 3;
    opponent.wins += 1;
  } else if (result.opponentGoals === result.goalsFor) {
    opponent.points += 1;
    opponent.draws += 1;
  } else {
    opponent.losses += 1;
  }
}

function updateCAFProgress(result) {
  const diff = result.goalsFor - result.opponentGoals;
  state.caf.goalDiff = diff;
  state.caf.score = `${result.goalsFor} - ${result.opponentGoals}`;

  if (diff >= 0) {
    state.caf.form = 'Bonne';
    state.caf.phase = state.caf.phase === 'Quarts de finale' ? 'Demi-finales' : 'Finale';
    addLog(`Le club progresse en Coupe CAF. Résultat : ${result.goalsFor} - ${result.opponentGoals}.`);
  } else {
    state.caf.form = 'À corriger';
    addLog(`La Coupe CAF a été plus compliquée : ${result.goalsFor} - ${result.opponentGoals}.`);
  }
}

function simulateMatch() {
  const fixture = getCurrentFixture();
  if (!fixture) {
    addLog('Aucun match n’est programmé pour l’instant.');
    render();
    return;
  }

  const ourRating = averageTeamRating() + state.morale / 15;
  const opponentRating = 72 + Math.random() * 14;
  const homeBoost = fixture.home ? 1.2 : 0.8;
  const scoreDiff = (ourRating * homeBoost - opponentRating) / 18;

  let ourGoals = Math.max(0, Math.round(1 + scoreDiff + Math.random() * 2.2));
  let opponentGoals = Math.max(0, Math.round(1 + (opponentRating - ourRating) / 18 + Math.random() * 1.8));

  if (ourGoals > 4 && Math.random() > 0.7) ourGoals = 4;
  if (opponentGoals > 4 && Math.random() > 0.7) opponentGoals = 4;

  const result = {
    opponent: fixture.opponent,
    goalsFor: ourGoals,
    goalsAgainst: opponentGoals,
    opponentGoals
  };

  applyLeagueResult(result);
  updateOpponentTable(result);
  updateCAFProgress(result);

  state.fixtureIndex += 1;
  state.day += 1;
  state.budget += 180_000;
  state.reputation += 1;

  addLog(`Match contre ${fixture.opponent} : ${ourGoals} - ${opponentGoals}.`);

  render();
  saveState();
}

function trainTeam() {
  state.players = state.players.map((player) => ({
    ...player,
    rating: clamp(player.rating + (Math.random() > 0.5 ? 1 : 0), 70, 97)
  }));
  state.morale = clamp(state.morale + 8, 0, 100);
  state.reputation += 1;
  addLog('L’entraînement collectif a renforcé la confiance et la qualité du groupe.');
  render();
  saveState();
}

function nextDay() {
  state.day += 1;
  state.budget += 240_000;
  state.morale = clamp(state.morale - 2, 35, 100);
  state.reputation += 1;
  addLog(`Journée ${state.day} : le club avance dans sa préparation et sécurise la suite de la saison.`);
  render();
  saveState();
}

function recruitBestPlayer() {
  const best = state.market
    .slice()
    .sort((a, b) => b.rating - a.rating)[0];

  if (!best) {
    addLog('Le mercato est vide pour le moment.');
    render();
    return;
  }

  if (state.budget < best.price) {
    addLog(`Le club ne peut pas encore recruter ${best.name}.`);
    render();
    return;
  }

  state.budget -= best.price;
  state.players.push({ ...best, name: best.name, position: best.position, rating: best.rating });
  state.market = state.market.filter((player) => player.name !== best.name);
  state.reputation += 4;
  addLog(`${best.name} a été recruté pour ${formatMoney(best.price)}. C’est un coup de maître.`);
  render();
  saveState();
}

function resetGame() {
  state = structuredClone(defaultState);
  saveState();
  render();
}

function render() {
  renderHeader();
  renderTeam();
  renderMarket();
  renderFixture();
  renderCAF();
  renderStandings();
  renderLog();
}

dom.trainBtn.addEventListener('click', trainTeam);
dom.matchBtn.addEventListener('click', simulateMatch);
dom.recruitBtn.addEventListener('click', recruitBestPlayer);
dom.nextDayBtn.addEventListener('click', nextDay);
dom.resetBtn.addEventListener('click', resetGame);

render();
saveState();
