const AFRICA_DATA = {
  nations: [
    {
      region: 'Afrique du Nord',
      country: 'Maroc',
      code: 'MAR',
      league: 'Botola Pro',
      clubs: ['Raja CA', 'Wydad AC', 'AS FAR', 'RS Berkane', 'FUS Rabat'],
      academies: ['Académie Mohammed VI', 'Moghreb Tétouan Academy', 'FUS Youth'],
      federation: 'FRMF',
      selector: 'Walid Regragui'
    },
    {
      region: 'Afrique du Nord',
      country: 'Algérie',
      code: 'ALG',
      league: 'Ligue 1 Mobilis',
      clubs: ['MC Alger', 'CR Belouizdad', 'JS Kabylie', 'USM Alger', 'ES Sétif'],
      academies: ['JSM Béjaïa Academy', 'USM Alger Academy', 'JS Saoura Youth'],
      federation: 'FAF',
      selector: 'Vladimir Petković'
    },
    {
      region: 'Afrique du Nord',
      country: 'Égypte',
      code: 'EGY',
      league: 'Egyptian Premier League',
      clubs: ['Al Ahly SC', 'Zamalek SC', 'Pyramids FC', 'Modern Sport FC', 'El Gouna'],
      academies: ['Al Ahly Youth', 'Zamalek Youth', 'Pyramids Academy'],
      federation: 'EFA',
      selector: 'Hossam Hassan'
    },
    {
      region: 'Afrique de l’Ouest',
      country: 'Sénégal',
      code: 'SEN',
      league: 'Ligue 1',
      clubs: ['Teungueth FC', 'ASC Jaraaf', 'Casa Sports', 'Génération Foot', 'US Gorée'],
      academies: ['Génération Foot', 'Institut Diambars', 'Mbour Academy'],
      federation: 'FSF',
      selector: 'Pape Thiaw'
    },
    {
      region: 'Afrique de l’Ouest',
      country: 'Nigéria',
      code: 'NGA',
      league: 'NPFL',
      clubs: ['Enyimba FC', 'Remo Stars', 'Rivers United', 'Enugu Rangers', 'Lobi Stars'],
      academies: ['Pepsi Football Academy', 'Super Stars Academy', 'Kano Pillars Academy'],
      federation: 'NFF',
      selector: 'Éric Chelle'
    },
    {
      region: 'Afrique de l’Ouest',
      country: 'Ghana',
      code: 'GHA',
      league: 'Ghana Premier League',
      clubs: ['Asante Kotoko', 'Hearts of Oak', 'Medeama SC', 'Berekum Chelsea', 'Legon Cities'],
      academies: ['Right to Dream Academy', 'Kumasi Academy', 'Tema Youth'],
      federation: 'GFA',
      selector: 'Otto Addo'
    },
    {
      region: 'Afrique de l’Ouest',
      country: 'Côte d’Ivoire',
      code: 'CIV',
      league: 'Ligue 1',
      clubs: ['ASEC Mimosas', 'Stade d’Abidjan', 'FC San Pédro', 'SOA', 'Lys Sassandra'],
      academies: ['ASEC MimoSifcom', 'JMG Académie', 'Abidjan Youth'],
      federation: 'FIF',
      selector: 'Emerse Faé'
    },
    {
      region: 'Afrique centrale',
      country: 'Cameroun',
      code: 'CMR',
      league: 'MTN Elite One',
      clubs: ['Coton Sport', 'Canon Yaoundé', 'Dynamo de Douala', 'PWD Bamenda', 'UMS de Loum'],
      academies: ['EFBC', 'Yaoundé Academy', 'Bamenda Academy'],
      federation: 'FECAFOOT',
      selector: 'Marc Brys'
    },
    {
      region: 'Afrique centrale',
      country: 'RDC',
      code: 'COD',
      league: 'Linafoot',
      clubs: ['TP Mazembe', 'AS Vita Club', 'DC Motema Pembe', 'Maniema Union', 'CS Don Bosco'],
      academies: ['Katumbi Football Academy', 'FC Lupopo Academy', 'Renaissance Academy'],
      federation: 'FECOFA',
      selector: 'Sébastien Desabre'
    },
    {
      region: 'Afrique australe',
      country: 'Afrique du Sud',
      code: 'RSA',
      league: 'Betway Premiership',
      clubs: ['Mamelodi Sundowns', 'Orlando Pirates', 'Kaizer Chiefs', 'Stellenbosch FC', 'Cape Town City'],
      academies: ['Mamelodi Sundowns Academy', 'Sundowns Youth', 'Cape Town City Academy'],
      federation: 'SAFA',
      selector: 'Hugo Broos'
    }
  ],
  academies: [
    { name: 'Génération Foot', country: 'Sénégal', specialization: 'Attaquants de rupture', output: ['Sadio Mané', 'Ismaïla Sarr', 'Pape Matar Sarr'] },
    { name: 'Institut Diambars', country: 'Sénégal', specialization: 'Milieux modernes et discipline tactique', output: ['Idrissa Gueye', 'Bamba Dieng'] },
    { name: 'Right to Dream', country: 'Ghana', specialization: 'Formation holistique', output: ['Mohammed Kudus', 'Kamaldeen Sulemana'] },
    { name: 'Académie Mohammed VI', country: 'Maroc', specialization: 'Latéraux et milieux techniques', output: ['Youssef En-Nesyri', 'Azzedine Ounahi'] },
    { name: 'ASEC MimoSifcom', country: 'Côte d’Ivoire', specialization: 'Créativité et polyvalence', output: ['Yaya Touré', 'Kolo Touré'] },
    { name: 'EFBC', country: 'Cameroun', specialization: 'Défense et puissance athlétique', output: ['Samuel Eto’o', 'Rigobert Song'] },
    { name: 'Katumbi Football Academy', country: 'RDC', specialization: 'Milieux offensifs', output: ['Jackson Muleka'] }
  ],
  tournaments: [
    { name: 'CAF Champions League', format: '16 clubs', status: 'Qualifié' },
    { name: 'Coupe d’Afrique des Nations', format: '24 nations', status: 'Sélections actives' },
    { name: 'CHAN', format: '17 nations', status: 'Joueurs locaux' },
    { name: 'Ligue des Nations Africaines', format: '12 nations', status: 'Phase de groupes' },
    { name: 'Coupe du Monde des Clubs', format: '8 clubs', status: 'Préparation' }
  ],
  referees: [
    'Dahane Beida (Mauritanie)',
    'Mustapha Ghorbal (Algérie)',
    'Amin Omar (Égypte)',
    'Bouchra Karboubi (Maroc)',
    'Bamlak Tessema Weyesa (Éthiopie)',
    'Abongile Tom (Afrique du Sud)'
  ],
  commentators: [
    'Charles Mbuya (Cameroun)',
    'Robert Marawa (Ghana)',
    'Issam Chaouali (Tunisie)',
    'Mark Gleeson (Afrique du Sud)',
    'Diomansy Kamara (Sénégal)'
  ]
};

if (typeof window !== 'undefined') {
  window.FOOTCAF = window.FOOTCAF || {};
  window.FOOTCAF.DATA = AFRICA_DATA;
}
