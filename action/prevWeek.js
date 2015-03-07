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
