const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }

    this.turns++;
    this.currentCardCount++;
    
    let feedback = turn.giveFeedback();
    return feedback;
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }

  endRound() {
    let percentage = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`;
  }
}

module.exports = Round;