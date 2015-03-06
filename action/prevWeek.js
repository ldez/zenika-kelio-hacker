(function () {
    'use strict';

    /*
     * How extract previous week link data (feature ?)
     */
    var oldHref = document.querySelector('.tableContainer .filtre a').href;

    var match = /javascript:(fcSelectionnerDate\('[\d]{8}'\))/ig.exec(oldHref);

    // Create code to execute
    var code = match[1];

    // Execute code
    var script = document.createElement('script');
    script.textContent = code;
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

})();


/*
 * How extract previous week link data (feature ?)
 */
//var oldHref = document.querySelector('.tableContainer .filtre a').href;
//
//var match = /javascript:fcSelectionnerDate\('([\d]{4})([\d]{2})([\d]{2})'\)/ig.exec(oldHref);
//
//var currentStartWeek = new Date(match[1], match[2], match[3]);
//
//console.log(currentStartWeek);
//
//var nextStartWeek = new Date(currentStartWeek);
//nextStartWeek.setDate(currentStartWeek.getDate() + 7)
//
//console.log(nextStartWeek.toISOString().split('T')[0].replace(/-/gi, ''));
