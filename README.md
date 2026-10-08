const state = {
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
  leaderBoard: [
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
  }
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
};

const renderStats = () => {
  document.getElementById('budgetValue').textContent = formatCurrency(state.budget);
  document.getElementById('reputationValue').textContent = state.reputation;
  document.getElementById('teamValue').textContent = formatCurrency(state.teamValue);
  document.getElementById('formValue').textContent = state.form.toFixed(1);
  document.getElementById('clubName').textContent = state.clubName;
};

const renderAgenda = () => {
  const agendaList = document.getElementById('agendaList');
  agendaList.innerHTML = state.agenda.map(item => `<li>${item}</li>`).join('');
};

const renderNotifications = () => {
  const notificationsList = document.getElementById('notificationsList');
  notificationsList.innerHTML = state.notifications.map(item => `<li>${item}</li>`).join('');
};

const renderPlayers = () => {
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
};

const renderRecruitment = () => {
  const recruitmentList = document.getElementById('recruitmentList');
  recruitmentList.innerHTML = state.recruitment.map(player => `
    <div class="recruit-card">
      <div class="section-head">
        <div>
          <strong>${player.name}</strong>
          <div class="meta">${player.position} • ${player.age} ans • ${player.country}</div>
        </div>
        <span class="badge blue">${player.trend}</span>
      </div>
      <div class="metric-row"><span>Potentiel</span><strong>${player.potential}</strong></div>
      <div class="metric-row"><span>Frais</span><strong>${formatCurrency(player.fee)}</strong></div>
      <button class="action-btn">Signer</button>
    </div>
  `).join('');
};

const renderLeague = () => {
  const leagueTable = document.getElementById('leagueTable');
  const rows = state.leagueTable.map((team, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${team.club}</td>
      <td>${team.points}</td>
      <td>${team.gp}</td>
      <td>${team.ga}</td>
    </tr>
  `).join('');

  leagueTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Club</th>
          <th>Pts</th>
          <th>Buts +</th>
          <th>Buts -</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
};

const renderCompetitions = () => {
  const cafCompetitions = document.getElementById('cafCompetitions');
  cafCompetitions.innerHTML = state.competitions.map(comp => `
    <div class="competition-card">
      <h4>${comp.name}</h4>
      <div class="meta">${comp.stage}</div>
      <div class="metric-row"><span>Participants</span><strong>${comp.teams}</strong></div>
      <span class="badge ${comp.status === 'Qualifié' ? 'green' : comp.status === 'Actif' ? 'blue' : 'gold'}">${comp.status}</span>
    </div>
  `).join('');
};

const renderFinance = () => {
  const financePanel = document.getElementById('financePanel');
  const totalRevenues = Object.values(state.finances.revenues).reduce((sum, value) => sum + value, 0);
  const totalExpenses = Object.values(state.finances.expenses).reduce((sum, value) => sum + value, 0);

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
};

const renderLeaderboard = () => {
  const leaderboardTable = document.getElementById('leaderboardTable');
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
      <tbody>
        ${state.leaderBoard.map(item => `
          <tr>
            <td>${item.rank}</td>
            <td>${item.club}</td>
            <td>${item.country}</td>
            <td>${item.points}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
};

const simulateWeek = () => {
  state.week += 1;
  state.form = +(Math.random() * 1.8 + 7.1).toFixed(1);
  state.budget += Math.random() * 800000 + 250000;
  state.reputation = Math.min(99, state.reputation + 1);
  state.notifications.unshift(`Résultat du week-end : victoire 2-1 contre une équipe rivale, +${formatCurrency(600000)} de revenus publicitaires.`);
  state.notifications = state.notifications.slice(0, 6);
  state.agenda.push('Un club européen a demandé un entretien pour l’un de vos jeunes talents.');
  state.agenda = state.agenda.slice(-4);
  renderAll();
};

const advanceWeek = () => {
  simulateWeek();
};

const trainPlayers = () => {
  state.players = state.players.map(player => ({
    ...player,
    ovr: Math.min(96, player.ovr + 1),
    potential: Math.min(96, player.potential + 1)
  }));
  state.notifications.unshift('Le centre de formation a accéléré le développement des jeunes joueurs.');
  state.notifications = state.notifications.slice(0, 6);
  renderAll();
};

const refreshScouts = () => {
  state.recruitment = state.recruitment.map(player => ({
    ...player,
    fee: Math.round(player.fee * (0.9 + Math.random() * 0.35))
  }));
  state.notifications.unshift('Les scouts ont repéré 3 nouveaux profils prometteurs en Afrique de l’Ouest.');
  state.notifications = state.notifications.slice(0, 6);
  renderAll();
};

const renderAll = () => {
  renderStats();
  renderAgenda();
  renderNotifications();
  renderPlayers();
  renderRecruitment();
  renderLeague();
  renderCompetitions();
  renderFinance();
  renderLeaderboard();
};

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const section = button.dataset.section;
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(section).classList.add('active');
  });
});

document.getElementById('simulateWeekBtn').addEventListener('click', simulateWeek);
document.getElementById('advanceWeekBtn').addEventListener('click', advanceWeek);
document.getElementById('trainPlayersBtn').addEventListener('click', trainPlayers);
document.getElementById('refreshScoutsBtn').addEventListener('click', refreshScouts);

renderAll();

console.log('Foot CAF prototype loaded successfully.');
