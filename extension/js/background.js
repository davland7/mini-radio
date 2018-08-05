var audio = new Audio();
var hls = null;

function play(station) {
  var src = station.src;

  stop();

  if (Hls.isSupported() && src.search('.m3u8') > 0) {
    hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(audio);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      audio.play();
    });
  } else {
    audio.src = src;
    audio.load();
    audio.play();
  }

  chrome.storage.local.set({'station': station});
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
  audio.src = '';

  if (hls) {
    hls.destroy();
    hls = null;
  }
}

function setVolume(value) {
  chrome.storage.local.set({'volume': audio.volume = value});
}

function stopped() {
  return audio.paused;
}


function volume() {
  return audio.volume;
}

function mute() {
  return audio.muted = !audio.muted;
}

function muted() {
  return audio.muted;
}

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'play-stop' && stopped()) {
    chrome.storage.local.get('station', function(items) {
      if (typeof items.station !== 'undefined') {
        play(items.station);
      }
    });
  } else {
    stop();
  }

  // Close Popup if open
  var views = chrome.extension.getViews({type: 'popup'})[0];
  if (views) views.close();
});

chrome.storage.local.get(['volume'], function(items) {
  var volume = items.volume;

  if (/^(0(\.[0-9]{1})?|1(\.0)?)$/.test(volume)) {
    audio.volume = volume;
  } else {
    setVolume(0.7);
  }
});
