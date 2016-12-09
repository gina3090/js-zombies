const chai = require('chai');

chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  let item = Zombies.item;

  it('should be a class', () => {
    item.should.be.a.function;
  });

  it('should have a name', () => {
    item.should.have.property('name');
  });

});

describe('Weapon', () => {

  let weapon = new Zombies.weapon;

  it('should be a class', () => {
    weapon.should.be.a.function;
  });

  it('should have a damage property', () => {
    weapon.should.have.property('damage');
  });

  it('should extend the item class', () => {
    weapon.should.be.an.instanceof(Zombies.item);
  });

});