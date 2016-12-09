const chai = require('chai');

chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  let item = Zombies.item;

  it('should be a class', () => {
    it.should.be.a.function;
  });

  it('should have a name', () => {
    item.should.have.property('name');
  });

});