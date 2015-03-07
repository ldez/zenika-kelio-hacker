(function () {
    'use strict';

    function registerAction(elementId, script) {
        document.getElementById(elementId).addEventListener('click', function () {

            chrome.tabs.getSelected(null, function () {
                chrome.tabs.executeScript({
                    file: script
                });

            });
        }, true);
    }

    registerAction('zenhacker-kelio-show', 'action/showAll.js');
    registerAction('zenhacker-kelio-next-week', 'action/nextWeek.js');
    registerAction('zenhacker-kelio-prev-week', 'action/prevWeek.js');

})();
