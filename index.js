// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");
let buttonEl = document.getElementById("submitBtn");

function addBookMark() {
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    let listItem = document.createElement("li");
    bookmarksListEl.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteUrl;
    bookmarkUrl.href = siteUrl;
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
}

siteNameInputEl.addEventListener("change", function() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Requried *";
        siteNameErrMsgEl.style.color = "red";
        // console.log("empty")
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("change", function() {
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Requried *";
        siteUrlErrMsgEl.textContent = "Requried *";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookMark();
})
