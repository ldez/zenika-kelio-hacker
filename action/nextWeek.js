(function () {
    'use strict';

    /**
     * Create beginning date of the next week
     *
     * @param   {String} title Week title
     * @returns {Date}   beginning date of the next week
     */
    function createNextWeekStart(title) {

        // Split week title to extract date fields
        var match = /Semaine[\s][\d]+[\s]du[\s]([\d]{2})\/([\d]{2})\/([\d]{4})[\s]au[\s].*/gi.exec(title);

        // Create beginning date of the current week
        var currentWeekStart = new Date(match[3], match[2] - 1, match[1]);

        // Create beginning date of the next week
        var nextWeekStart = new Date(currentWeekStart);
        nextWeekStart.setDate(currentWeekStart.getDate() + 8);

        return nextWeekStart;
    }

    /**
     * Create code to execute
     *
     * @param   {Date}   date beginning date of the next week
     * @returns {String} code to execute
     */
    function createScript(date) {

        // Create formated date : ISO string -> remove time -> remove character '-'
        var formatedDate = date.toISOString().split('T')[0].replace(/-/gi, '');

        // create function call
        return 'fcSelectionnerDate(\'' + formatedDate + '\')';
    }

    /*
     * Extract week title
     *
     * ex : Semaine 11 du 09/03/2015 au 15/03/2015
     */
    var weekTitle = document.querySelector('#tableContainer td.filtre').innerText;

    // Create beginning date of the next week
    var nextWeekStart = createNextWeekStart(weekTitle);

    // Execute code
    var script = document.createElement('script');
    script.textContent = createScript(nextWeekStart);

    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

})();
