const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=YFEBTdxILG6mk4NytHKh1aWKAot0d9IU&location=${encodeURIComponent(address)}`, json: true },
            (error, response, body) => {
                if(error)
                    reject('Unable to connect to location server.');
                else if(body === undefined)
                    reject('address does not exist');
                else
                    resolve({lon: body.results[0].locations[0].latLng.lng, lat: body.results[0].locations[0].latLng.lat})
            });
    });
};

geocodeAddress('Auckland New Zealand').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
});