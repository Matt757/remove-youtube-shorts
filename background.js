chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        // read changeInfo data and do something with it (like read the url)
        if (changeInfo.url.includes("youtube.com/shorts")) {
            console.log(changeInfo);
            chrome.tabs.update(tabId, { url: changeInfo.url.replace("shorts", "watch") });
        }
    }
);
