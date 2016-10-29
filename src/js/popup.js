chrome.runtime.getBackgroundPage((page) => {
	new Vue({
	  el: '#app',
	  data: {
	  	currentTab: 0,
      stationsPerTab: 5,
	    stations: stations,
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
