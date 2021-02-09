function timer() {
	const comingYear = '1 Jan 2025';
	const totalMiliSeconds = new Date(comingYear) - new Date();
	const totalSeconds = (new Date(comingYear) - new Date()) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;
	document.getElementById('days').innerHTML = days;
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	// total date DOM
	document.getElementById('totalD').innerHTML = Math.floor(totalMiliSeconds / 1000 / 60 / 60 / 24);
	document.getElementById('totalH').innerHTML = Math.floor(totalMiliSeconds / 1000 / 60 / 60);
	document.getElementById('totalM').innerHTML = Math.floor(totalMiliSeconds / 1000 / 60);
	document.getElementById('totalS').innerHTML = Math.floor(totalMiliSeconds / 1000);
	document.getElementById('totalMS').innerHTML = totalMiliSeconds;
}
timer();
setInterval(timer, 1000);
