$(function() {

    $('a[rel="tooltip"]').tooltip();

    var centerContainer = function () {
        var main = $('.container-fluid.main');

        if ($(document).width() > 480) {
            var mainHeight = main.height();
            var documentHeight = $(document).height();
            var margin = '20px';

            if (documentHeight > mainHeight) {
                margin = (documentHeight - mainHeight) / 2;
            }

            main.css('margin-top', margin);
        } else {
            main.css('margin-top', 0);
        }
    }

    centerContainer();
    $(window).resize(centerContainer);

    setInterval(function() {
        var cursor = $('#cursor');
        var delay = 500;
        cursor.fadeTo(0, 0).delay(delay);
        cursor.fadeTo(0, 1).delay(delay);
    }, 0);

});