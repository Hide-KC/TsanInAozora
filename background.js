chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.sendMessage(tab.id, {
      command: "summon",
      url: tab.url
    },
    function(msg) {
      console.log("result message:", msg);
    });
});