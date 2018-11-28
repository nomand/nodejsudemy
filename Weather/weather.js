const request = require('request');

let getWeather = (lat, lon, callback) => {
    request({
    url: `https://api.darksky.net/forecast/675ddd45fee6817c1f02c621c497c382/${lat},${lon}`, json: true },
    (error, response, body) => {
        if (!error && response.statusCode === 200)
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        else
            callback('Unable to fetch weather');
    });
}

module.exports.getWeather = getWeather;