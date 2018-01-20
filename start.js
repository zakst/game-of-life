const config = require('./config.json');
const populationControl = require('./services/populationControl');
const theWorld = require('./services/theWorld');
global.__population = [];

theWorld.initNonLivingWorld();
console.log(`Giving birth to ${config.initPopulation.length} people`)
config.initPopulation.forEach(person => {
  populationControl.makePersonLiveByPosition(person.lat, person.lng);
});


setInterval(function() {
  populationControl.update();
}, 3000);
