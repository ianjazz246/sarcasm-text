function tabExecuteSarcasm() {
	browser.tabs.executeScript({
		file: "sarcasm.js"
	});
}

browser.browserAction.onClicked.addListener(tabExecuteSarcasm);