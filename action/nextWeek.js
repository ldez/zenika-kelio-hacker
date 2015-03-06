(function () {
    'use strict';

    // Semaine 11 du 09/03/2015 au 15/03/2015
    var weekTitle = document.querySelector('#tableContainer td.filtre').innerText;

    // Split title to extract date fields
    var match = /Semaine[\s][\d]+[\s]du[\s]([\d]{2})\/([\d]{2})\/([\d]{4})[\s]au[\s].*/gi.exec(weekTitle);

    // Create current start week date
    var currentStartWeek = new Date(match[3], match[2] - 1, match[1]);

    // Create next start week date
    var nextStartWeek = new Date(currentStartWeek);
    nextStartWeek.setDate(currentStartWeek.getDate() + 8);

    // Create code to execute
    var code = 'fcSelectionnerDate(\'' + nextStartWeek.toISOString().split('T')[0].replace(/-/gi, '') + '\')';

    // Execute code
    var script = document.createElement('script');
    script.textContent = code;
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

})();
