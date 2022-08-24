const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Round', function() {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck(card1, card2, card3);
    round = new Round(deck);
  });

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should track the card at the top of the deck', function() {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should track the number of turns taken', function() {
    expect(round.turns).to.be.a('number');
  });

  it('should be able to track cards guessed incorrectly', function() {
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should give feedback for when a guess is made', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.takeTurn('playing with bubble wrap')).to.equal('Correct!');
  });

  it('should increase turn count when a turn is taken', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.turns).to.equal(2);
  });

  it('should only track incorrectly guessed cards', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should move to the next card in the deck after a turn is taken', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.returnCurrentCard()).to.deep.equal(round.deck[2]);
  });

  it('should calculate correct percentage', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should let user know correct percentage when round is over', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  });
});