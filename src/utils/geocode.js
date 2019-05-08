const request = require('request');

const getGeocode = (address, callback) => {
    const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYnVpY2hpaG9hIiwiYSI6ImNqdmRocnl5bTAzNzg0ZXM3MmwzZWd6NjkifQ.deg77cf_O40pjJUZlP38pw&limit=1";

    request({
        url: geoUrl,
        json: true
    }, (error, response) => {
        if(error) {
            callback('Unable to connect to location service.', undefined)
        } else if (response.body.features.length == 0) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, {longitude: response.body.features[0].center[0], latitude: response.body.features[0].center[1]});
        }
    });
};

module.exports = getGeocode;

