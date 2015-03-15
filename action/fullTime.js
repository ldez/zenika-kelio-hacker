(function (window, document, undefined) {
    'use strict';

    /**
     * Change the visibility and fix the value of the element 'input'
     *
     * @param {Object} input HTML element 'input'
     */
    function fixValue(input) {
        // if the visibility of the input does need to be modified
        if (input.disabled || input.readOnly || input.style.border) {
            input.disabled = false;
            input.readOnly = false;
            input.removeAttribute('style');
        }
        // if the visibility of the input does not need to be modified
        else if (!input.classList.contains('fix-field') && !input.classList.contains('fix-visibility')) {
            input.classList.add('fix-visibility');
        }
        input.classList.add('fix-field');
        input.value = 100;
    }

    /**
     * Reset element 'input' value and state
     *
     * @param {Object} input HTML element 'input'
     */
    function resetValue(input) {
        // if the field is visible
        if (!input.readOnly) {
            // if the visibility of the input has not been modified or if the input does need to be modified
            if (input.classList.contains('fix-field') && !input.classList.contains('fix-visibility')) {
                input.readOnly = true;
                input.disabled = true;
                input.style.display = 'none';
                input.classList.remove('fix-field');
            }
            input.value = null;
        }
    }

    /**
     * Apply callback on each element 'input' of the line
     *
     * @param {Object}   cell     Cell HTML element
     * @param {Function} callback Action call on each element 'input'
     */
    function action(cell, callback) {
        // find line
        var line = cell.parentNode.parentNode.parentNode.parentNode.parentNode;

        // find all input type 'text' in the line
        var inputs = line.querySelectorAll('input[type="text"]');

        // apply change
        for (var i = 0; i < 5; i++) {
            callback(inputs[i]);
        }
    }

    /**
     * Create and append button to the cell
     *
     * @param {Object}   cell     Cell HTML element
     * @param {String}   btnClass Class to add on the button
     * @param {String}   btnText  Text to add to the button
     * @param {Function} callback Action call on each element 'input' relate of the button action
     */
    function appendActionButton(cell, btnClass, btnText, callback) {

        // create button
        var btn = document.createElement('button');
        btn.classList.add(btnClass);
        btn.innerText = btnText;

        // add button event
        btn.addEventListener('click', function () {
            action(cell, callback);
        }, true);

        // append button
        cell.appendChild(btn);
    }

    /**
     * Build actions buttons
     *
     * @param {Object} rootElement Significative HTML element (td)
     */
    function buildActionsButtons(rootElement) {

        // extract row
        var row = rootElement.parentNode;

        // try to find 'fulltime' cell
        var cell = row.querySelector('.fulltime-zone');
        if (!cell) {

            // create cell
            cell = document.createElement('td');
            cell.classList.add('fulltime-zone');

            // append cell to row
            row.insertBefore(cell, row.lastChild);

            // append 'full time' button
            appendActionButton(cell, 'btn-fulltime', '100', fixValue);

            // append 'full time reset' button
            appendActionButton(cell, 'btn-fulltime-reset', 'reset', resetValue);
        }
    }

    /**
     * Find significative HTML element and build action buttons
     */
    Array.prototype.forEach.call(document.querySelectorAll('#sactScrollTblBody>tbody>tr>td:nth-child(2)>table>tbody>tr>td:nth-child(5)'), buildActionsButtons);

})(window, document);
