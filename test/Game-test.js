const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Game = require('../src/Game.js');

describe('Game', function() {

  it.skip('should start a new Round with cards in a deck', function() {
    game = new Game();
    game.start();

    expect(game.currentRound).to.deep.an.instanceof(Round);
  });
});