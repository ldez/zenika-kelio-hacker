(function () {
    'use strict';

    var elts = document.querySelectorAll('.scrollPane input[type="text"]');

    Array.prototype.forEach.call(elts, function (input) {
        input.readOnly = false;
        input.disabled = false;
        input.removeAttribute('style');
    });

})();
