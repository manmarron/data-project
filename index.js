const data = require('./data');

const eLocation = (town) => {
    const locations = data;
    town = town.trim().toLowerCase();
    return data.filter(e => e.venue.town.toLowerCase().includes(town)).map(e => e.eventName);
};

console.log(eLocation('  MAN'))