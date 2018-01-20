class individual {

  getAliveNeighboursByPerson(person) {
    return person.neighbors.filter(neighbor => {
      return neighbor.isAlive;
    }).length;
  }

}

module.exports = new individual();
