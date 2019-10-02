$(document).ready(function() {


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    (function ($) {
        'use strict';

        // Tilføjer plugin til fn så det kan bruges normalt
        $.fn.optsHead = function (options) {

            // Options
            // Sætter default options, hvis der ikke sendes noget med
            const defaultOptions = {
                colors: {
                    bgColor: 'lightgrey',
                    txtColor: 'white'
                },
                font: {
                    fontType: 'Helvetica Bold',
                    fontSize: '24px',
                    fontWeight: '600',
                }
            };

            const opts = $.extend(true, {}, defaultOptions, options);

            // Går gennem alle elementer der matcher selector = idx=index, el=element
            return this.each(function (idx, el) {
                $(el).css('background-color', opts.colors.bgColor);
                $(el).css('color', opts.colors.txtColor);
            });
        };

        // Tilføjer plugin til fn så det kan bruges normalt
        $.fn.optsBody = function (options) {

            // Options
            // Sætter default options, hvis der ikke sendes noget med
            const defaultOptions = {
                colors: {
                    bgColor: 'white',
                    txtColor: 'black'
                },
                font: {
                    fontType: 'Helvetica',
                    fontSize: '16px',
                    fontWeight: '400',
                }
            };

            const opts = $.extend(true, {}, defaultOptions, options);

            // Går gennem alle elementer der matcher selector = idx=index, el=element
            return this.each(function (idx, el) {
                $(el).css('background-color', opts.colors.bgColor);
                $(el).css('color', opts.colors.txtColor);
            });
        };

        // Tilføjer plugin til fn så det kan bruges normalt
        $.fn.optsFoot = function (options) {

            // Options
            // Sætter default options, hvis der ikke sendes noget med
            const defaultOptions = {
                colors: {
                    bgColor: 'lightgrey',
                    txtColor: 'white'
                },
                font: {
                    fontType: 'Helvetica',
                    fontSize: '20px',
                    fontWeight: '500'
                }
            };

            const opts = $.extend(true, {}, defaultOptions, options);

            // Går gennem alle elementer der matcher selector = idx=index, el=element
            return this.each(function (idx, el) {
                $(el).css('background-color', opts.colors.bgColor);
                $(el).css('color', opts.colors.txtColor);
            });
        };
    })(jQuery);
});