const request = require('request')

var geocodeAddress = (address) => {
	var encodedAddress = encodeURIComponent(address);
	return new Promise((resolve, reject) => {
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, responce, body) => {
			if(!error && body.status === 'OK') {
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				})
			} else {
				reject('Unable to fetch address');
			}
		});
	})
	
}

geocodeAddress('110').then((res) => {
	console.log('Address: ', res.address);
}).catch(error => {
	console.log(error);
})