const API = chrome || browser;

API.action.onClicked.addListener(function() {
  API.windows.getAll(function(windows) {
    API.storage.local.get('windowId', function(popup) {
      if (windows.find(element => element.id === popup.windowId)) {
        API.windows.update(popup.windowId, { 'focused': true });
      } else {
        chrome.runtime.getPlatformInfo(function(info) {
          let width = 336;
          let height = 512;

          API.windows.getCurrent(function(tab) {
            if (info.os === 'mac') {
              width = 320;
              height = 484;
            }

            const top = Math.round((tab.height - height) * 0.5 + tab.top);
            const left = Math.round((tab.width - width) * 0.5 + tab.left);

            API.storage.local.remove(['windowId'], function() {
              API.windows.create({
                url: 'popup/index.html',
                type: 'popup',
                width: width,
                height: height,
                top: top,
                left: left
              }, function(event) {
                API.storage.local.set({'windowId': event.id});
              });
            });
          });
        });
      }
    });
  });
});
