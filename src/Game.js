const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck.js');
const Round = require('./Round.js');


class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    this.currentRound = new Round(deck);

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;