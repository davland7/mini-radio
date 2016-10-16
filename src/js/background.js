var audio = new Audio();
var hls;

function play(station) {
	var stream = station.stream;

	stop();

	if (Hls.isSupported() && (stream.indexOf('.m3u8') > 0)) {
		hls = new Hls();
		hls.loadSource(stream);
		hls.attachMedia(audio);
		hls.on(Hls.Events.MANIFEST_PARSED, function() {
			audio.play();
		});
	} else {
		audio.src = stream;
		audio.play();
	}

	setStation(station);
}

function stop() {
	audio.pause();
	audio.currentTime = 0;

	if (typeof(hls) === 'object') {
		hls.destroy();
	}
}

function volume(value) {
	audio.volume = value / 10;
	setVolume(value);
}

function mute() {
	if (audio.muted) {
		audio.muted = false;
	} else {
		audio.muted = true;
	}
}

function muted() {
	return audio.muted;
}

function paused() {
	return audio.paused;
}

function getStation() {
	return JSON.parse(localStorage.getItem('station'));
}

function setStation(value) {
	localStorage.setItem('station', JSON.stringify(value));
}

function getVolume() {
	return localStorage.getItem('volume');
}

function setVolume(value) {
	localStorage.setItem('volume', value);
}

function onCommand(command) {
	if (command === 'play-stop' && paused()) {
		play(getStation());
	} else {
		stop();
	}

	var views = chrome.extension.getViews({type: "popup"});

	if (views[0]) {
		views[0].close();
	}
};

chrome.commands.onCommand.addListener(onCommand);
