const clubName = document.querySelector('#club-name');
const budgetEl = document.querySelector('#budget');
const reputationEl = document.querySelector('#reputation');
const moraleEl = document.querySelector('#morale');
const seasonEl = document.querySelector('#season');
const leaguePointsEl = document.querySelector('#league-points');
const leagueRankEl = document.querySelector('#league-rank');
const cafStageEl = document.querySelector('#caf-stage');
const cafFormEl = document.querySelector('#caf-form');
const teamListEl = document.querySelector('#team-list');
const marketListEl = document.querySelector('#market-list');
const logEl = document.querySelector('#log');

const state = {
  club: 'AS Dakar',
  budget: 11200000,
  reputation: 78,
  morale: 72,
  season: 2026,
  leaguePoints: 18,
  leagueRank: 2,
  cafStage: 'Quart de finale',
  cafForm: 'Bonne',
  day: 1,
  players: [
    { name: 'Sadio Diop', position: 'Gardien', rating: 82 },
    { name: 'Moussa Faye', position: 'Défenseur', rating: 80 },
    { name: 'Mamadou Cissé', position: 'Défenseur', rating: 78 },
    { name: 'Ibrahima Ndao', position: 'Milieu', rating: 81 },
    { name: 'Khalid Samb', position: 'Milieu', rating: 79 },
    { name: 'Yacine Fall', position: 'Attaquant', rating: 84 },
    { name: 'Ablaye Diagna', position: 'Attaquant', rating: 82 },
  ],
  market: [
    { name: 'Lamine Kébé', position: 'Milieu', price: 1500000, rating: 85 },
    { name: 'Moussa Sarr', position: 'Ailier', price: 2200000, rating: 86 },
    { name: 'Ndiaga Mbaye', position: 'Avant-centre', price: 2600000, rating: 88 }
  ],
  log: [
    'Le club a repris l’entraînement après une préparation solide.',
    'La dynamique de groupe est positive avant le prochain match.',
    'Le staff technique met l’accent sur la finition devant le but.'
  ]
};

function formatMoney(value) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value);
}

function addLog(message) {
  state.log.unshift(message);
  if (state.log.length > 8) state.log.pop();
  renderLog();
}

function renderTeam() {
  teamListEl.innerHTML = state.players
    .map(
      (player) => `
        <div class="player-card">
          <div class="player-meta">
            <strong>${player.name}</strong>
            <span>${player.position}</span>
          </div>
          <span class="badge">${player.rating}</span>
        </div>
      `
    )
    .join('');
}

function renderMarket() {
  marketListEl.innerHTML = state.market
    .map(
      (player) => `
        <div class="market-card">
          <div class="market-meta">
            <strong>${player.name}</strong>
            <span>${player.position} • ${player.rating} ★</span>
          </div>
          <button data-player="${player.name}" data-price="${player.price}">Signer • ${formatMoney(player.price)}</button>
        </div>
      `
    )
    .join('');

  marketListEl.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.player;
      const price = Number(button.dataset.price);
      const target = state.market.find((player) => player.name === name);

      if (!target) return;

      if (state.budget < price) {
        addLog(`Le recrutement de ${name} est refusé : budget insuffisant.`);
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
      addLog(`${name} a signé au club pour ${formatMoney(price)}.`);
      render();
    });
  });
}

function renderLog() {
  logEl.innerHTML = state.log.map((entry) => `<li>${entry}</li>`).join('');
}

function renderStats() {
  clubName.textContent = state.club;
  budgetEl.textContent = formatMoney(state.budget);
  reputationEl.textContent = state.reputation;
  moraleEl.textContent = `${state.morale}%`;
  seasonEl.textContent = state.season;
  leaguePointsEl.textContent = state.leaguePoints;
  leagueRankEl.textContent = `${state.leagueRank}e`;
  cafStageEl.textContent = state.cafStage;
  cafFormEl.textContent = state.cafForm;
}

function simulateMatch() {
  const teamStrength = state.players.reduce((sum, player) => sum + player.rating, 0) / state.players.length;
  const homeScore = Math.max(0, Math.round(teamStrength / 18 + Math.random() * 2 - 0.8));
  const awayScore = Math.max(0, Math.round((teamStrength - 8) / 18 + Math.random() * 2 - 1.2));

  const resultText = homeScore >= awayScore
    ? `Victoire ${homeScore} - ${awayScore} à domicile.`
    : `Défaite ${homeScore} - ${awayScore}.`;

  if (homeScore >= awayScore) {
    state.leaguePoints += 3;
    state.reputation += 3;
    state.morale = Math.min(100, state.morale + 8);
  } else {
    state.morale = Math.max(30, state.morale - 6);
    state.reputation = Math.max(20, state.reputation - 1);
  }

  addLog(`Match de championnat : ${resultText}`);
  render();
}

function trainTeam() {
  state.morale = Math.min(100, state.morale + 10);
  state.reputation += 1;
  state.players = state.players.map((player) => ({
    ...player,
    rating: Math.min(97, player.rating + (Math.random() > 0.5 ? 1 : 0))
  }));
  addLog('L’entraînement a renforcé la cohésion et la qualité technique du groupe.');
  render();
}

function nextDay() {
  state.day += 1;
  state.budget += 180000;
  state.morale = Math.max(45, state.morale - 2);
  state.reputation += 1;
  addLog(`Jour ${state.day} : les préparatifs du prochain rendez-vous sportif avancent.`);
  render();
}

function render() {
  renderStats();
  renderTeam();
  renderMarket();
  renderLog();
}

document.querySelector('#match-btn').addEventListener('click', simulateMatch);
document.querySelector('#train-btn').addEventListener('click', trainTeam);
document.querySelector('#recruit-btn').addEventListener('click', () => {
  const cheapest = state.market[0];
  if (!cheapest) {
    addLog('Le mercato est vide pour le moment.');
    return;
  }

  addLog(`Le club cible ${cheapest.name} dans le mercato africain.`);
  render();
});
document.querySelector('#next-day-btn').addEventListener('click', nextDay);

render();
