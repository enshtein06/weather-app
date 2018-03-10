console.log('starting app');

setTimeout(() => {
	console.log('Middle of app')
}, 2000);

setTimeout(() => {
	console.log('Second delay')
}, 0);

console.log('Finishing up');