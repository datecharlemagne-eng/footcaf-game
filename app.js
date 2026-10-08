const STORAGE_KEY = 'footcaf-save-v1';
const DATA = window.FOOTCAF && window.FOOTCAF.DATA ? window.FOOTCAF.DATA : {
  nations: [], academies: [], tournaments: [], referees: [], commentators: []
};

const defaultState = {
  clubName: 'Raja CA',
  budget: 18500000,
  reputation: 78,
  teamValue: 64200000,
  form: 7.8,
  week: 12,
  season: '2026/27',
  players: [
    { name: 'Yassine Bounou', position: 'Gardien', age: 33, ovr: 82, potential: 84, value: 9500000, status: 'Titulaire' },
    { name: 'Nayef Aguerd', position: 'Défenseur', age: 29, ovr: 80, potential: 82, value: 8200000, status: 'Titulaire' },
    { name: 'Azzedine Ounahi', position: 'Milieu', age: 27, ovr: 81, potential: 84, value: 15000000, status: 'Tête d’affiche' },
    { name: 'Youssef En-Nesyri', position: 'Attaquant', age: 26, ovr: 83, potential: 85, value: 22000000, status: 'Buteur' },
    { name: 'M. Boussoufa', position: 'Milieu', age: 31, ovr: 75, potential: 76, value: 2600000, status: 'Expérimenté' },
    { name: 'S. El Moutaraji', position: 'Attaquant', age: 22, ovr: 74, potential: 82, value: 9000000, status: 'Prometteur' }
  ],
  recruitment: [
    { name: 'Hamza El Aouad', age: 18, position: 'Milieu', country: 'Maroc', potential: 85, fee: 4200000, trend: 'Très demandé' },
    { name: 'Amine Benslimane', age: 17, position: 'Défenseur', country: 'Algérie', potential: 82, fee: 3100000, trend: 'Scouts actifs' },
    { name: 'Lamine Diop', age: 19, position: 'Ailier', country: 'Sénégal', potential: 84, fee: 5200000, trend: 'Forme excellente' },
    { name: 'Koffi Kone', age: 20, position: 'Attaquant', country: 'Côte d’Ivoire', potential: 86, fee: 6100000, trend: 'Client premium' }
  ],
  leagueTable: [
    { club: 'Raja CA', points: 31, gp: 16, ga: 6 },
    { club: 'Wydad AC', points: 29, gp: 15, ga: 7 },
    { club: 'AS FAR', points: 27, gp: 13, ga: 8 },
    { club: 'RS Berkane', points: 25, gp: 11, ga: 9 },
    { club: 'FUS Rabat', points: 22, gp: 10, ga: 11 },
    { club: 'MAS Fès', points: 20, gp: 9, ga: 11 }
  ],
  leaderboard: [
    { rank: 1, club: 'Al Ahly SC', country: 'Égypte', points: 1905 },
    { rank: 2, club: 'Wydad AC', country: 'Maroc', points: 1856 },
    { rank: 3, club: 'Mamelodi Sundowns', country: 'Afrique du Sud', points: 1798 },
    { rank: 4, club: 'Raja CA', country: 'Maroc', points: 1760 },
    { rank: 5, club: 'TP Mazembe', country: 'RDC', points: 1710 }
  ],
  competitions: [
    { name: 'CAF Champions League', stage: 'Huitièmes', teams: '16 clubs', status: 'Qualifié' },
    { name: 'Coupe Nationale', stage: 'Demi-finale', teams: '8 clubs', status: 'En cours' },
    { name: 'Ligue des Nations Africaines', stage: 'Phase de groupes', teams: '12 nations', status: 'Actif' },
    { name: 'CAN U23', stage: 'Tour prélim.', teams: '24 nations', status: 'À suivre' }
  ],
  notifications: [
    'Le jeune talent Hamza El Aouad a reçu une offre de l’USM Alger.',
    'Un sponsor régional a prolongé son contrat de partenariat pour 2 ans.',
    'Le club a amélioré son centre de formation pour +8% d’efficacité.',
    'L’équipe nationale a convoqué deux joueurs du centre de formation.'
  ],
  agenda: [
    'Entraînement tactique de transition offensive.',
    'Rencontre de préparation contre le MAS Fès.',
    'Réunion avec les agents pour les prolongations.',
    'Déplacement en Afrique du Nord pour le tour de CAF.'
  ],
  finances: {
    revenues: { sponsors: 4300000, tv: 2800000, tickets: 2100000, transfers: 1500000 },
    expenses: { salaries: 6400000, training: 980000, transfers: 1300000, facilities: 820000 }
  },
  playerCareer: {
    name: 'Youssef El Amrani',
    age: 17,
    country: 'Maroc',
    role: 'Ailier / Attaquant',
    academy: 'Académie Mohammed VI',
    progress: 62,
    overall: 75,
    potential: 88
  },
  liveScore: '2 - 1',
  matchLog: [
    'Youssef En-Nesyri ouvre le score à la 17e minute.',
    'Le Wydad égalise par faute de main dans la surface.',
    'Azzedine Ounahi remet Raja devant à la 64e minute.'
  ]
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

let state = loadState();

const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value);
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderStats() {
  document.getElementById('budgetValue').textContent = formatCurrency(state.budget);
  document.getElementById('reputationValue').textContent = state.reputation;
  document.getElementById('teamValue').textContent = formatCurrency(state.teamValue);
  document.getElementById('formValue').textContent = state.form.toFixed(1);
  document.getElementById('clubName').textContent = state.clubName;
}

function renderAgenda() {
  const agendaList = document.getElementById('agendaList');
  agendaList.innerHTML = state.agenda.map(item => `<li>${item}</li>`).join('');
}

function renderNotifications() {
  const notificationsList = document.getElementById('notificationsList');
  notificationsList.innerHTML = state.notifications.map(item => `<li>${item}</li>`).join('');
}

function renderPlayers() {
  const playersList = document.getElementById('playersList');
  playersList.innerHTML = state.players.map(player => `
    <div class="player-card">
      <div class="player-header">
        <strong>${player.name}</strong>
        <span class="meta">${player.position} • ${player.age} ans</span>
      </div>
      <div>
        <div class="meta">Note globale</div>
        <strong>${player.ovr}</strong>
      </div>
      <div>
        <div class="meta">Potentiel</div>
        <strong>${player.potential}</strong>
      </div>
      <div>
        <div class="meta">Valeur</div>
        <strong>${formatCurrency(player.value)}</strong>
      </div>
      <span class="badge ${player.status.includes('Buteur') || player.status.includes('Tête') ? 'gold' : 'green'}">${player.status}</span>
    </div>
  `).join('');
}

function renderCareer() {
  const summary = document.getElementById('careerSummary');
  summary.innerHTML = `
    <div class="meta">Profil du joueur</div>
    <div class="player-name">${state.playerCareer.name}</div>
    <div class="meta">${state.playerCareer.age} ans • ${state.playerCareer.country}</div>
    <div class="meta">Rôle: ${state.playerCareer.role}</div>
    <div class="meta">Académie: ${state.playerCareer.academy}</div>
    <div class="metric-row"><span>Overall</span><strong>${state.playerCareer.overall}</strong></div>
    <div class="metric-row"><span>Potentiel</span><strong>${state.playerCareer.potential}</strong></div>
    <div class="metric-row"><span>Progression</span><strong>${state.playerCareer.progress}%</strong></div>
  `;
}

function renderLeaderboard() {
  const leaderboardTable = document.getElementById('leaderboardTable');
  const rows = state.leaderboard.map(item => `
    <tr>
      <td>${item.rank}</td>
      <td>${item.club}</td>
      <td>${item.country}</td>
      <td>${item.points}</td>
    </tr>
  `).join('');

  leaderboardTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Club</th>
          <th>Pays</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDatabase() {
  const databaseList = document.getElementById('databaseList');
  databaseList.innerHTML = DATA.nations.map(country => `
    <div class="database-card">
      <h4>${country.country}</h4>
      <div class="meta">${country.region} • ${country.league}</div>
      <div class="metric-row"><span>Fédération</span><strong>${country.federation}</strong></div>
      <div class="metric-row"><span>Sélectionneur</span><strong>${country.selector}</strong></div>
      <ul>
        ${country.clubs.map(club => `<li>${club}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderFinance() {
  const financePanel = document.getElementById('financePanel');
  const totalRevenues = Object.values(state.finances.revenues).reduce((a, b) => a + b, 0);
  const totalExpenses = Object.values(state.finances.expenses).reduce((a, b) => a + b, 0);

  financePanel.innerHTML = `
    <div class="finance-card">
      <h4>Revenus</h4>
      ${Object.entries(state.finances.revenues).map(([key, value]) => `
        <div class="metric-row"><span>${key}</span><strong>${formatCurrency(value)}</strong></div>
      `).join('')}
      <hr />
      <div class="metric-row"><span>Total</span><strong>${formatCurrency(totalRevenues)}</strong></div>
    </div>
    <div class="finance-card">
      <h4>Dépenses</h4>
      ${Object.entries(state.finances.expenses).map(([key, value]) => `
        <div class="metric-row"><span>${key}</span><strong>${formatCurrency(value)}</strong></div>
      `).join('')}
      <hr />
      <div class="metric-row"><span>Total</span><strong>${formatCurrency(totalExpenses)}</strong></div>
    </div>
    <div class="finance-card">
      <h4>Solde net</h4>
      <div class="stat-card" style="padding: 12px 0 0; background: transparent; border: none; box-shadow: none;">
        <strong style="font-size: 2rem;">${formatCurrency(totalRevenues - totalExpenses)}</strong>
        <small>Après coûts</small>
      </div>
    </div>
  `;
}

function renderMatch() {
  document.getElementById('liveScore').textContent = state.liveScore;
  document.getElementById('matchLog').innerHTML = state.matchLog.map(line => `<div>• ${line}</div>`).join('');
}

function renderAll() {
  renderStats();
  renderAgenda();
  renderNotifications();
  renderPlayers();
  renderCareer();
  renderLeaderboard();
  renderDatabase();
  renderFinance();
  renderMatch();
}

function simulateWeek() {
  state.week += 1;
  state.form = +(Math.random() * 1.8 + 7.1).toFixed(1);
  state.budget += Math.random() * 800000 + 250000;
  state.reputation = Math.min(99, state.reputation + 1);
  state.notifications.unshift(`Résultat du week-end : victoire 2-1 contre une équipe rivale, +${formatCurrency(600000)} de revenus publicitaires.`);
  state.notifications = state.notifications.slice(0, 6);
  state.agenda.push('Un club européen a demandé un entretien pour l’un de vos jeunes talents.');
  state.agenda = state.agenda.slice(-4);
  saveState();
  renderAll();
}

function advanceWeek() {
  simulateWeek();
}

function trainPlayers() {
  state.players = state.players.map(player => ({
    ...player,
    ovr: Math.min(96, player.ovr + 1),
    potential: Math.min(96, player.potential + 1)
  }));
  state.notifications.unshift('Le centre de formation a accéléré le développement des jeunes joueurs.');
  state.notifications = state.notifications.slice(0, 6);
  saveState();
  renderAll();
}

function playMatch() {
  const homeGoals = Math.floor(Math.random() * 3 + 1);
  const awayGoals = Math.floor(Math.random() * 2 + 0);
  state.liveScore = `${homeGoals} - ${awayGoals}`;
  state.matchLog = [
    `${homeGoals > awayGoals ? 'Raja CA' : 'Wydad AC'} domine l’échange technique et marque le point décisif.`,
    'Le public a vibré dans les derniers instants du match.',
    'Le club sécurise son avance avant la fin de la rencontre.'
  ];
  if (homeGoals >= awayGoals) {
    state.notifications.unshift('Victoire solide à domicile, le club gagne du prestige et des points.');
  } else {
    state.notifications.unshift('Match disputé mais le club repart avec un point précieux.');
  }
  state.notifications = state.notifications.slice(0, 6);
  saveState();
  renderAll();
}

function refreshLeaderboard() {
  state.leaderboard = state.leaderboard.map((entry, index) => ({
    ...entry,
    points: entry.points + (index === 0 ? 10 : 6),
    rank: index + 1
  })).sort((a, b) => b.points - a.points).map((entry, index) => ({ ...entry, rank: index + 1 }));
  state.notifications.unshift('Le classement mondial a été mis à jour en temps réel.');
  state.notifications = state.notifications.slice(0, 6);
  saveState();
  renderAll();
}

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const tab = button.dataset.tab;
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
  });
});

document.getElementById('simulateWeekBtn').addEventListener('click', simulateWeek);
document.getElementById('advanceWeekBtn').addEventListener('click', advanceWeek);
document.getElementById('trainPlayersBtn').addEventListener('click', trainPlayers);
document.getElementById('playMatchBtn').addEventListener('click', playMatch);
document.getElementById('refreshLeaderboardBtn').addEventListener('click', refreshLeaderboard);
document.getElementById('saveGameBtn').addEventListener('click', () => {
  saveState();
  state.notifications.unshift('Progression sauvegardée localement avec succès.');
  state.notifications = state.notifications.slice(0, 6);
  renderAll();
});

renderAll();
console.log('Foot CAF loaded.');
