const API = chrome || browser;

API.action.onClicked.addListener(function() {
  API.windows.getAll(function(windows) {
    API.storage.local.get("windowId", function(popup) {
      if (windows.find(element => element.id === popup.windowId)) {
        API.windows.update(popup.windowId, { "focused": true });
      } else {
        API.windows.getCurrent(function(tab) {
          const width = 332; // 320
          const height = 512; // 484
          const top = Math.round((tab.height - height) * 0.5 + tab.top);
          const left = Math.round((tab.width - width) * 0.5 + tab.left);

          API.storage.local.remove(["windowId"], function() {
            API.windows.create({
              "type": "popup",
              "url": "popup/index.html",
              "width": width,
              "height": height,
              "top": top,
              "left": left
            }, function(event) {
              API.storage.local.set({"windowId": event.id});
            });
          });
        });
      }
    });
  });
});
