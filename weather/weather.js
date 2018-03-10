const request = require('request');

var getWeather = (lat, lng, callback) => {
	const key = '827de728ee896bb4c240c49d287d4e67';
	request({
		url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
		json: true
	}, (error, responce, body) => {
		if(!error && responce.statusCode === 200) {
			callback(undefined, {
				temp: body.currently.temperature,
				actualTemp: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather');
		}
	});
}

module.exports.getWeather = getWeather;