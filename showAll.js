(function () {

    var elts = document.querySelectorAll('.tabPair input,.tabImpair input');

    Array.prototype.forEach.call(elts, function (input) {
        input.readOnly = false;
        input.removeAttribute('style');
    });

})();