(function () {

    document.getElementById('hack-kelio-show').addEventListener('click', function () {

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.executeScript({
                file: 'showAll.js'
            });

        });
    }, true);

    document.getElementById('hack-kelio-week').addEventListener('click', function () {

        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.executeScript({
                file: 'nextWeek.js'
            });
        });
    }, true);

})();