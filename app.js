const team = {
  _players: [
    {firstName: 'Thomas', lastName: 'de Jong', age: 15},
    {firstName: 'Marco', lastName: 'Boers', age: 24},
    {firstName: 'Bas', lastName: 'Konings', age: 36}
  ],
  _games: [
    {opponent: 'Mark', teamPoints: 35, opponentPoints: 63},
    {opponent: 'Dirk', teamPoints: 13, opponentPoints: 35},
    {opponent: 'Freek', teamPoints: 45, opponentPoinst: 89}
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName, 
      lastName: newLastName, 
      age: newAge
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

// team.addPlayer('Bugs', 'Bunny', 76);
// console.log(team.players);
// team.addGame('Titans', 100, 98)
// console.log(team.games);
