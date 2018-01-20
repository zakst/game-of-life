const individual = require('./individual');
const config = require('../config.json');

class populationControl {

  update() {
    this.underPopulation();
    this.stayingAlive();
    this.overCrowding();
    this.comingToLife();
  }

  underPopulation() {
    __population.filter(person => {
      if (individual.getAliveNeighboursByPerson(person) < 3) {
        console.log(`Killing Citizen ${__population[person.lat + person.lng * config.width].fullName} due to under population`);
        return person.isAlive = !person.isAlive;
      }
    })
  }

  stayingAlive() {
    __population.filter(person => {
      let aliveNeighbours = individual.getAliveNeighboursByPerson(person);
      if (aliveNeighbours === 2 || aliveNeighbours === 3) {
        console.log(`Keeping Citizen ${__population[person.lat + person.lng * config.width].fullName} Alive`);
        return person.isAlive = !!person.isAlive;
      }
    })
  }

  overCrowding() {
    __population.filter(person => {
      if (individual.getAliveNeighboursByPerson(person) > 3) {
        console.log(`Killing Citizen ${__population[person.lat + person.lng * config.width].fullName} due to over crowding`);
        return person.isAlive = !person.isAlive;
      }
    })
  }

  comingToLife() {
    __population.filter(person => {
      if (individual.getAliveNeighboursByPerson(person) === 3) {
        console.log(`Giving Birth to Citizen ${__population[person.lat + person.lng * config.width].fullName}`);
        return person.isAlive = !!person.isAlive;
      }
    })
  }

  makePersonLiveByPosition(lat, lng){
    return __population[lat + lng*config.width].isAlive = true;
  }

}

module.exports = new populationControl();