const request = require('request');

let getAddress = (address, callback) => {
    request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=YFEBTdxILG6mk4NytHKh1aWKAot0d9IU&location=${encodeURIComponent(address)}`, json: true },
    (error, response, body) => {
        if(error)
            callback('unable to connect to location server.');
        else if(body === undefined)
            callback('address does not exist');
        else
            callback(undefined, {lon: body.results[0].locations[0].latLng.lng, lat: body.results[0].locations[0].latLng.lat})
    });
}

module.exports = { getAddress }