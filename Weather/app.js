const yargs = require('yargs');
const argv = yargs.options({a: {demand: true, alias: 'address', describe: 'address to fetch weather for', string: true}}).help().alias('help', 'h').argv;
const geocode = require('./geocode');
const weather = require('./weather');

geocode.getAddress(argv.address, (error, results) => {
    if(error)
        console.log(error);
    else
    {
        weather.getWeather(results.lat, results.lon, (error, weatherResults) => {
            if(error)
                console.log(error)
            else
                console.log(`It's ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
        });
    }
});