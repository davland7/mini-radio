import Storage from './storage.js'

const trackEvent = (ea, el) => {
  const GA_TRACKING_ID = chrome.i18n.getMessage('googleAnalyticsTrackingId')
  const GA_EVENT_CATEGORY = chrome.i18n.getMessage('name')
  const GA_USER_LANGUAGE = chrome.i18n.getUILanguage()
  const GA_LOCAL_STORAGE_KEY = 'ga:clientId';

  let cid = null;

  Storage.get(GA_LOCAL_STORAGE_KEY, (err, clientId) => {
    if (!err && clientId) {
	  cid = clientId
    } else {
      cid = Math.floor(Math.random() * 0x7FFFFFFF) + '.' + Math.floor(Date.now() / 1000);

      Storage.set(GA_LOCAL_STORAGE_KEY, cid)
    }

    fetch('https://www.google-analytics.com/collect', {
      method: 'POST',
      body: `v=1&tid=${GA_TRACKING_ID}&cid=${cid}&ul=${GA_USER_LANGUAGE}&t=event&ec=${GA_EVENT_CATEGORY}&ea=${ea}&el=${el}`
  	})
  })
}

export default {trackEvent}
