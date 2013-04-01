$(function() {

    $('a[rel="tooltip"]').tooltip();

    setInterval(function() {
        var cursor = $('#cursor');
        var delay = 500;
        cursor.fadeTo(0, 0).delay(delay);
        cursor.fadeTo(0, 1).delay(delay);
    }, 0);

});