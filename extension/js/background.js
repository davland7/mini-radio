var audio = new rPlayer();
var hls = null;

function play(station) {
  audio.play(station.src);

  chrome.storage.local.set({'station': station});
}

function stop() {
  audio.stop();
}

function setVolume(value) {
  audio.volume = value;
}

function stopped() {
  return !audio.playing;
}


function volume() {
  return audio.volume;
}

function mute() {
  return audio.mute();
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
