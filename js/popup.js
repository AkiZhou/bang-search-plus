const setting = document.getElementById("setting");
setting.addEventListener("click", () => {
    chrome.tabs.create({ url: "./options.html" });
});

const feedback = document.getElementById("feedback");
feedback.addEventListener("click", () => {
    chrome.tabs.create({ url: "./options.html" });
});

const about = document.getElementById("about");
about.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://github.com/AkiZhou/bang-search-plus" });
});