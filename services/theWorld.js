
const config = require('../config.json');

class theWorld {

  initNonLivingWorld(){
    for(let lat = 0; lat < config.width; lat++){
      for(let lng = 0; lng < config.height; lng++){
        __population.push({
          fullName: lat+lng*config.width,
          isAlive: false,
          lat: lat,
          lng: lng,
          neighbors: []
        })
      }
    }
    this.initNeighbours();
  }

  initNeighbours(){
    __population.map( (person) => {
      person.neighbors = __population.filter( neighbor => {
        let lat = Math.abs(neighbor.lat - person.lat);
        let lng = Math.abs(neighbor.lng - person.lng);
        return (lat === 1 && lng === 1 ) || (lat === 1 && lng === 0) || (lat === 0 && lng === 1);
      });
    });
  }
}

module.exports = new theWorld();
