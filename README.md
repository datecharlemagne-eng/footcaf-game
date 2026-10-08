const STORAGE_KEY = 'footcaf-save-v1';

const basePlayers = [
  { name: 'Sadio Diop', position: 'Gardien', rating: 82 },
  { name: 'Moussa Faye', position: 'Défenseur', rating: 80 },
  { name: 'Mamadou Cissé', position: 'Défenseur', rating: 78 },
  { name: 'Ibrahima Ndao', position: 'Milieu', rating: 81 },
  { name: 'Khalid Samb', position: 'Milieu', rating: 79 },
  { name: 'Yacine Fall', position: 'Attaquant', rating: 84 },
  { name: 'Ablaye Diagna', position: 'Attaquant', rating: 82 }
];

const baseMarket = [
  { name: 'Lamine Kébé', position: 'Milieu', price: 1_500_000, rating: 85 },
  { name: 'Moussa Sarr', position: 'Ailier', price: 2_200_000, rating: 86 },
  { name: 'Ndiaga Mbaye', position: 'Avant-centre', price: 2_600_000, rating: 88 },
  { name: 'Baba Mbengue', position: 'Défenseur', price: 1_200_000, rating: 80 }
];

const createDefaultState = () => ({
  club: 'AS Dakar',
  season: 2026,
  day: 1,
  budget: 12_000_000,
  reputation: 76,
  morale: 72,
  objective: 'Championnat CAF',
  difficulty: 'Moyen',
  trainingFocus: 'Attaque',
  players: structuredClone(basePlayers),
  market: structuredClone(baseMarket),
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
  ],
  eventText: 'Pas d’événement majeur.'
});

const dom = {
  startOverlay: document.querySelector('#start-overlay'),
  gameShell: document.querySelector('#game-shell'),
  newGameBtn: document.querySelector('#new-game-btn'),
  continueBtn: document.querySelector('#continue-btn'),
  startDifficulty: document.querySelector('#start-difficulty'),
  clubName: document.querySelector('#club-name'),
  season: document.querySelector('#season'),
  day: document.querySelector('#day'),
  difficultyLabel: document.querySelector('#difficulty-label'),
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
  resetBtn: document.querySelector('#reset-btn'),
  trainingFocus: document.querySelector('#training-focus'),
  difficultySelect: document.querySelector('#difficulty-select')
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return createDefaultState();
  try {
    const parsed = JSON.parse(saved);
    return { ...createDefaultState(), ...parsed };
  } catch {
    return createDefaultState();
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

function getDifficultyModifier() {
  return {
    Facile: 0.85,
    Moyen: 1,
    Difficile: 1.15
  }[state.difficulty] || 1;
}

function getFocusBonus() {
  const focus = state.trainingFocus || 'Attaque';
  const bonuses = {
    Attaque: { attack: 1.75, defense: 0.2 },
    Défense: { attack: 0.3, defense: 1.8 },
    Contrôle: { attack: 0.9, defense: 0.9 }
  };
  return bonuses[focus] || bonuses.Attaque;
}

function renderTeam() {
  dom.teamList.innerHTML = state.players
    .map((player) => `
      <div class="player-card">
        <div class="player-meta">
          <strong>${player.name}</strong>
          <span>${player.position}</span>
        </div>
        <span class="rating-badge">${player.rating}</span>
      </div>
    `)
    .join('');
}

function renderMarket() {
  dom.marketList.innerHTML = state.market
    .map((player) => `
      <div class="market-card">
        <div class="market-meta">
          <strong>${player.name}</strong>
          <span>${player.position} • ${player.rating} ★</span>
        </div>
        <button data-player="${player.name}" data-price="${player.price}">Signer ${formatMoney(player.price)}</button>
      </div>
    `)
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
      state.players.push({ ...target });
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
      <div class="fixture-meta"><span>Calendrier</span><span>Terminé</span></div>
      <div class="fixture-score">Saison clôturée</div>
    `;
    return;
  }

  dom.fixtureBox.innerHTML = `
    <div class="fixture-meta">
      <span>Journée ${fixture.round}</span>
      <span>${fixture.home ? 'Domicile' : 'Extérieur'}</span>
    </div>
    <div class="fixture-score">AS Dakar vs ${fixture.opponent}</div>
    <div class="fixture-meta">
      <span>État du club</span>
      <strong>${state.morale}%</strong>
    </div>
  `;
}

function renderCAF() {
  dom.cafBox.innerHTML = `
    <div class="caf-stage"><span>Phase</span><strong>${state.caf.phase}</strong></div>
    <div class="caf-stage"><span>Forme</span><strong>${state.caf.form}</strong></div>
    <div class="caf-stage"><span>Dernier résultat</span><strong>${state.caf.score}</strong></div>
    <div class="caf-stage"><span>Différence</span><strong>${state.caf.goalDiff >= 0 ? '+' : ''}${state.caf.goalDiff}</strong></div>
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
  dom.difficultyLabel.textContent = state.difficulty;
  dom.budget.textContent = formatMoney(state.budget);
  dom.reputation.textContent = state.reputation;
  dom.morale.textContent = `${state.morale}%`;
  dom.objective.textContent = state.objective;
  dom.trainingFocus.value = state.trainingFocus;
  dom.difficultySelect.value = state.difficulty;
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

function triggerRandomEvent() {
  const events = [
    'Un sponsor majeur renforce le budget du club pour la semaine.',
    'Un joueur talentueux demande une place plus centrale dans le onze.',
    'Une blessure légère touche un titulaire, il faudra gérer le groupe.',
    'La presse locale met le club en avant pour un bon parcours.'
  ];

  const selected = events[Math.floor(Math.random() * events.length)];
  state.eventText = selected;
  addLog(selected);
}

function simulateMatch() {
  const fixture = getCurrentFixture();
  if (!fixture) {
    addLog('Aucun match n’est programmé pour l’instant.');
    render();
    return;
  }

  const focusBonus = getFocusBonus();
  const diffFactor = getDifficultyModifier();
  const ourRating = averageTeamRating() + state.morale / 15 + focusBonus.attack * 1.2;
  const opponentRating = (72 + Math.random() * 14) * diffFactor;
  const homeBoost = fixture.home ? 1.2 : 0.8;
  const scoreDiff = (ourRating * homeBoost - opponentRating) / 18;

  let ourGoals = Math.max(0, Math.round(1 + scoreDiff + Math.random() * 2.2 + focusBonus.attack * 0.25));
  let opponentGoals = Math.max(0, Math.round(1 + (opponentRating - ourRating) / 18 + Math.random() * 1.8 + focusBonus.defense * 0.1));

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

  if (Math.random() > 0.7) triggerRandomEvent();

  addLog(`Match contre ${fixture.opponent} : ${ourGoals} - ${opponentGoals}.`);
  render();
  saveState();
}

function trainTeam() {
  const focus = getFocusBonus();
  state.players = state.players.map((player) => {
    let bonus = 0;
    const lower = player.position.toLowerCase();
    if (lower.includes('attaqu') || lower.includes('ailier') || lower.includes('milieu')) {
      bonus = focus.attack;
    } else if (lower.includes('déf') || lower.includes('gard')) {
      bonus = focus.defense;
    } else {
      bonus = focus.attack * 0.7 + focus.defense * 0.7;
    }

    return {
      ...player,
      rating: clamp(player.rating + (Math.random() > 0.45 ? Math.round(bonus) : 0), 70, 97)
    };
  });
  state.morale = clamp(state.morale + 8, 0, 100);
  state.reputation += 1;
  addLog(`L’entraînement axé sur ${state.trainingFocus} a renforcé le groupe.`);
  render();
  saveState();
}

function nextDay() {
  state.day += 1;
  state.budget += 240_000;
  state.morale = clamp(state.morale - 2, 35, 100);
  state.reputation += 1;
  if (Math.random() > 0.6) triggerRandomEvent();
  addLog(`Journée ${state.day} : le club avance dans sa préparation et sécurise la suite de la saison.`);
  render();
  saveState();
}

function recruitBestPlayer() {
  const best = state.market.slice().sort((a, b) => b.rating - a.rating)[0];
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
  state.players.push({ ...best });
  state.market = state.market.filter((player) => player.name !== best.name);
  state.reputation += 4;
  addLog(`${best.name} a été recruté pour ${formatMoney(best.price)}. C’est un coup de maître.`);
  render();
  saveState();
}

function resetGame() {
  state = createDefaultState();
  saveState();
  render();
}

function showGame() {
  dom.startOverlay.classList.add('hidden');
  dom.gameShell.classList.remove('hidden');
}

function hideGame() {
  dom.startOverlay.classList.remove('hidden');
  dom.gameShell.classList.add('hidden');
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

dom.newGameBtn.addEventListener('click', () => {
  state = createDefaultState();
  state.difficulty = dom.startDifficulty.value;
  saveState();
  showGame();
  render();
});

dom.continueBtn.addEventListener('click', () => {
  state.difficulty = dom.startDifficulty.value;
  showGame();
  render();
});

dom.trainBtn.addEventListener('click', trainTeam);
dom.matchBtn.addEventListener('click', simulateMatch);
dom.recruitBtn.addEventListener('click', recruitBestPlayer);
dom.nextDayBtn.addEventListener('click', nextDay);
dom.resetBtn.addEventListener('click', resetGame);
dom.trainingFocus.addEventListener('change', (event) => {
  state.trainingFocus = event.target.value;
  saveState();
  render();
});
dom.difficultySelect.addEventListener('change', (event) => {
  state.difficulty = event.target.value;
  saveState();
  render();
});

render();
showGame();
saveState();
