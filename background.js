const newReddit = "https://reddit.com";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl:
        newReddit + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
    };
  },
  {
    urls: [
      "*://old.reddit.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);
