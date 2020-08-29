const DEBUG = true

function parseQuery(query) {
    let webSite = query.split(" ", 1)[0]
    let searchWord = query.slice(webSite.length+1)  // +1 to remove the whitespace
    if(DEBUG) {
        console.log(webSite)
        console.log(searchWord)
    }

    if(isInCustom(webSite)) {

    }
    else if(isValidOnDDG(webSite)) {
        if(DEBUG) {
            console.log("Redirecting to DDG")
        }
        return "https://www.duckduckgo.com/?q=!" + encodeURIComponent(query)
    }
    else {
        console.log("Did not find any valid !Bang shortcuts. Searching raw query.")
        // TODO: Use the user defined browser search engine not just google
        return "https://www.google.com/search?q=" + encodeURIComponent(query)
    }
}

function isInCustom(site) {

}

function isValidOnDDG(site) {
    // TODO: Find out how to retrieve a valid keyword
    return true;
}

chrome.omnibox.onInputEntered.addListener(
    (text) => {
        console.log("Received query:", text);
        let newSearchRequest = parseQuery(text);

        chrome.tabs.update({ url: newSearchRequest });
    }
);
