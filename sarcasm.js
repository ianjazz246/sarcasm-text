(function () {
	// Loop through each text node
	const walker = document.createTreeWalker(
		document.getRootNode(), NodeFilter.SHOW_TEXT,
		{acceptNode: (node) => {
			// Empty string is false, so !empty string is true
			// Trimming a entirely whitespace string makes it empty
			if (node.parentNode.nodeName === "SCRIPT" || node.parentNode.nodeName === "STYLE" ||
				!node.nodeValue || !node.nodeValue.trim()
			) {
				return NodeFilter.FILTER_REJECT;
			} else {
				return NodeFilter.FILTER_ACCEPT;
			}
		}}
	);
	while (walker.nextNode()) {
		let node = walker.currentNode;
		node.nodeValue = makeSarcastic(node.nodeValue);
	}

	function makeSarcastic(text) {
		newText = [];
		// Loop through each character, capitalizing randomly
		for (let i in text) {
			if (Math.random() > 0.5) {
				newText.push(text[i].toUpperCase());
			} else {
				newText.push(text[i].toLowerCase());
			}
		}
		return newText.join("");
	}
})();