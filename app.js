const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

//call address

//1301 lombard street 

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if(errorMessage) {
				console.log(errorMessage);
			} else {
				console.log('Its feeling like: ', weatherResults.temp);
				console.log('but in fact its: ', weatherResults.actualTemp);
			}
		})
	}
});

//key 827de728ee896bb4c240c49d287d4e67

