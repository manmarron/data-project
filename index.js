const data = require('./data');

const eLocation = (town) => {
    const locations = data;

     return data.filter(e => e.venue.town.includes(town)).map(e => e);

};

console.log(eLocation('Manc'))