const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a users guess', function() {
    expect(turn.userGuess).to.equal('object');
  });

  it('should store a card', function() {
    expect(turn.card).to.deep.equal(card);
  });

  it('should return users guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', function() {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should know if the users guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback when answer is correct', function() {
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should know if the users guess is incorrect', function() {
    turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback when answer is incorrect', function() {
    turn = new Turn('array', card);

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});