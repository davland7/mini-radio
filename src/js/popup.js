chrome.runtime.getBackgroundPage((page) => {
	new Vue({
	  el: '#app',
	  data: {
	  	currentTab: 0,
      stationsPerTab: 5,
	    stations: [
        {'title': '92.5 The Beat', 'description': 'Montréal', 'stream': 'http://beat-lh.akamaihd.net/i/studioaudio_1@393656/master.m3u8', 'logo': 'ckbe-fm.png'},
        {'title': 'BLVD 102.1', 'description': 'Québec', 'stream': 'http://158.69.4.238:8000/cfel.mp3', 'logo': 'cfel-fm.png'},
        {'title': 'CHOI 98,1 Radio X', 'description': 'Québec', 'stream': 'http://icecast-choi.rncm.ca/choi.aac', 'logo': 'choi-fm.png'},
	    	{'title': 'FM93', 'description': 'Québec', 'stream': 'http://fm93-lh.akamaihd.net/i/studioaudio_1@393666/master.m3u8', 'logo': 'cjmf-fm.png'},
	    	{'title': 'ICI Radio-Canada Première', 'description': 'Montréal', 'stream': 'http://2qmtl0.akacast.akamaistream.net/7/953/177387/v1/rc.akacast.akamaistream.net/2QMTL0', 'logo': 'cbft-fm.png'},
        {'title': '98,5FM', 'description': 'Montréal', 'stream': 'http://985-lh.akamaihd.net/i/studioaudio_1@393647/master.m3u8', 'logo': 'chmp-fm.png'},
	    	{'title': 'CKOI', 'description': 'Montréal', 'stream': 'http://ckoi-lh.akamaihd.net/i/studioaudio_1@393649/master.m3u8', 'logo': 'ckoi-fm.png'},
	    	{'title': 'ROCK 100.9', 'description': 'Québec', 'stream': 'http://icecast-chxx.rncm.ca/chxx.mp3', 'logo': 'chxx-fm.png'},
        {'title': 'Radio Classique', 'description': 'Montréal', 'stream': 'http://38.100.101.72/CJPXFMAAC_SC', 'logo': 'cjpx-fm.png'},
        {'title': 'Énergie 98.9', 'description': 'Québec', 'stream': 'http://15133.live.streamtheworld.com/CHIKFMAAC.aac', 'logo': 'chik-fm.png'},
        {'title': '107,3 Rouge FM', 'description': 'Montréal', 'stream': 'http://6723.live.streamtheworld.com/CITEFMAAC.aac', 'logo': 'cite-fm.png'},
	    	{'title': '91.9 Sport', 'description': 'Montréal', 'stream': 'http://icecast-cklx.rncm.ca/cklx.aac', 'logo': 'cklx-fm.png'},
        {'title': 'CHOM', 'description': 'Montréal', 'stream': 'http://14213.live.streamtheworld.com/CHOMFMAAC.aac', 'logo': 'chom-fm.png'},
	    	{'title': 'M FM 102,9FM', 'description': 'Québec', 'stream': 'http://mfm-lh.akamaihd.net/i/studioaudio_1@393667/master.m3u8', 'logo': 'cfom-fm.png'},
        {'title': 'Rythme FM', 'description': 'Montréal', 'stream': 'http://rythmemtl-lh.akamaihd.net/i/studioaudio_1@393689/master.m3u8', 'logo': 'cfgl-fm.png'}
	    ],
	    player: {
	    	station: null,
		    paused: false
	    },
      messages: {
      	appName: chrome.i18n.getMessage('appName'),
      	play: chrome.i18n.getMessage('play'),
      	stop: chrome.i18n.getMessage('stop'),
      	version: chrome.runtime.getManifest().version,
      	homePageUrl: chrome.runtime.getManifest().homepage_url,
      	github: chrome.i18n.getMessage('github')
      }
	  },
	  filters: {
      paginate(stations) {
        let index = this.currentTab * this.stationsPerTab;
        return stations.slice(index, index + this.stationsPerTab);
      }
    },
	  methods: {
	  	toggleButton() {
	    	if (this.player.paused) {
	    		this.playButton(this.station);
	    	} else {
	    		this.stopButton();
	    	}
	    },
	    playButton(station) {
	      page.play(station);
	      this.player.station = station;
	      this.player.paused = false;

	      this.trackEvent(station.title, 'played');
	    },
	    stopButton() {
	    	page.stop();
	    	this.player.paused = true;
	    },
	    muteButton() {
	    	page.mute();
	    },
	    githubTrack() {
	    	this.trackEvent(this.messages.github, 'clicked');
	    },
	    volumeControl(value) {
	    	page.volume(value);
	    },
	    tab(tabNumber) {
        this.currentTab = tabNumber;
      },
      trackEvent(ec, ea) {
      	const GA_TRACKING_ID = 'UA-78180955-1';
				const GA_CLIENT_ID = '30682BF0-F552-4DD8-ABA4-D0842B561147';

      	fetch('https://www.google-analytics.com/collect', {
            method: 'POST',
            body: `v=1&tid=${GA_TRACKING_ID}&cid=${GA_CLIENT_ID}&t=event&ec=${ec}&ea=${ea}`
        });
      }
	  },
	  computed: {
	  	totalTabs() {
        return Math.ceil(this.stations.length / this.stationsPerTab);
      },
	    paused() {
	    	return page.paused();
	    },
	    muted() {
    		return page.muted();
	    },
			volume() {
	      return page.getVolume() || 7;
	    },
			station() {
	      return page.getStation() || this.stations[0];
	    }
	  },
	  ready() {
	  	this.player.station = this.station;
	  	this.player.paused = this.paused;
	  }
	})
});
