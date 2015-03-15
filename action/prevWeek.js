(function (window, document, undefined) {
    'use strict';

    // extract the current code from the previous week button
    var prevWeekCode = document.querySelector('.tableContainer .filtre a').href;

    /**
     * Extract valid javascript code from anchor code
     *
     * @param   {String} rawCode Anchor code
     * @returns {String} valid javascript code
     */
    function extractCode(rawCode) {

        // parse code to extract function call
        var match = /javascript:(fcSelectionnerDate\('[\d]{8}'\))/ig.exec(rawCode);

        // Create code to execute
        return match[1];
    }

    // Execute code
    var script = document.createElement('script');
    script.textContent = extractCode(prevWeekCode);

    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

})(window, document);
