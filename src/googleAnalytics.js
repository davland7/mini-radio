const trackEvent = (ec, ea) => {
  const GA_TRACKING_ID = 'UA-102067835-1'
  const GA_CLIENT_ID = '30682BF0-F552-4DD8-ABA4-D0842B561147'
  const USER_LANGUAGE = chrome.i18n.getUILanguage()

  fetch('https://www.google-analytics.com/collect', {
    method: 'POST',
    body: `v=1&tid=${GA_TRACKING_ID}&cid=${GA_CLIENT_ID}&ul=${USER_LANGUAGE}&t=event&ec=${ec}&ea=${ea}`
  })
}

module.exports = {trackEvent}
