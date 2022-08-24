const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should have an array of card object instances', function() {
    expect(deck.cards.every(card => card instanceof Card)).to.equal(true);
  });

  it('should be able to count the number of cards in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});