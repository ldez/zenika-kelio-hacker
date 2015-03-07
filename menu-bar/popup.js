(function () {
    'use strict';

    /**
     * Bind action on button and script
     *
     * @param {String} elementId Button element id
     * @param {String} script    Relative path to execute script
     */
    function registerAction(elementId, script) {
        document.getElementById(elementId).addEventListener('click', function () {

            chrome.tabs.getSelected(null, function () {
                chrome.tabs.executeScript({
                    file: script
                });

            });
        }, true);
    }

    // Action 'ShowAll'
    registerAction('zenhacker-kelio-show', 'action/showAll.js');

    // Action 'NextWeek'
    registerAction('zenhacker-kelio-next-week', 'action/nextWeek.js');

    // Action 'PrevWeek'
    registerAction('zenhacker-kelio-prev-week', 'action/prevWeek.js');

})();
