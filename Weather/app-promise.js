const yargs = require('yargs');
const argv = yargs.options({a: {demand: true, alias: 'address', describe: 'address to fetch weather for', string: true}}).help().alias('help', 'h').argv;
const axios = require('axios');

let url = `http://www.mapquestapi.com/geocoding/v1/address?key=YFEBTdxILG6mk4NytHKh1aWKAot0d9IU&location=${encodeURIComponent(argv.address)}`;

axios.get(url).then((response) => {
    if(response.data.status === 'undefined')
        throw new Error('invalid address');

    return axios.get(`https://api.darksky.net/forecast/675ddd45fee6817c1f02c621c497c382/${response.data.results[0].locations[0].latLng.lat},${response.data.results[0].locations[0].latLng.lng}`);
}).then((response) => {
    console.log(`It's: ${response.data.currently.temperature}, but feels like ${response.data.currently.apparentTemperature}.`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND')
        console.log('Unable to connect to API');
    else
        console.log(e.message);
});