const request = require('request');

const getForcast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/e6a922d978471822a6d7f40b9856cd56/" + longitude + ', ' + latitude;

    request({
        url: url,
        json: true
    }, (error, response) => {
        if(error) {
            callback('Unable to connect to the forecase system.', undefined);
        } else if (response.body.error) {
            callback(response.body.error, undefined);
        } else {
            callback(undefined, response.body.currently.temperature);
        }
    });
};

module.exports = getForcast;
