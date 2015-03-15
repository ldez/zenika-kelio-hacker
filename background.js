(function (window, document, chrome) {
    'use strict';

    /*
     * https://zenika.bodet-software.com/open/gta/sact
     */

    var kelioUrlRule = {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    urlContains: 'zenika.bodet-software.com'
                },
            })
                    ],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()]
    };

    // When the extension is installed or upgraded ...
    chrome.runtime.onInstalled.addListener(function () {
        // Replace all rules ...
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
            // With a new rule ...
            chrome.declarativeContent.onPageChanged.addRules([kelioUrlRule]);
        });
    });

})(window, document, window.chrome);
