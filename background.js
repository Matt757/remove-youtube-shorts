chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
    if (changeInfo.url.includes("youtube.com/shorts")) {
      chrome.tabs.update(tabId, {
        url: changeInfo.url.replace("shorts", "watch"),
      });
    }
  }
});
