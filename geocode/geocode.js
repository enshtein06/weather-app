const request = require('request');
const weather = require('../weather/weather');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, responce, body) => {
		if(error) {
			//error exist
			callback('Unable to connect to Google servers.');
		} else if(body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address')
		} else if(body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})
			/*console.log( `Address: ${body.results[0].formatted_address}`);
			console.log( `latitude: ${body.results[0].geometry.location.lat}`);
			console.log( `Longitude: ${body.results[0].geometry.location.lng}`);*/

			
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;