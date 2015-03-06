(function () {
    'use strict';

    document.getElementById('zenhacker-kelio-show').addEventListener('click', function () {

        chrome.tabs.getSelected(null, function () {
            chrome.tabs.executeScript({
                file: 'action/showAll.js'
            });

        });
    }, true);

    document.getElementById('zenhacker-kelio-next-week').addEventListener('click', function () {

        chrome.tabs.getSelected(null, function () {
            chrome.tabs.executeScript({
                file: 'action/nextWeek.js'
            });
        });
    }, true);

    document.getElementById('zenhacker-kelio-prev-week').addEventListener('click', function () {

        chrome.tabs.getSelected(null, function () {
            chrome.tabs.executeScript({
                file: 'action/prevWeek.js'
            });
        });
    }, true);

})();
