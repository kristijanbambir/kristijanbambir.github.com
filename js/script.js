/*
** @author Kristijan Bambir
*/

$(document).ready(function() {

    function adjustTypeface() {
        if ($(window).width() > 1450) {
            $('body').css('font-size','120%');
            $('body').css('line-height','150%');
        } else {
            $('body').css('font-size','105%');
            $('body').css('line-height','140%');
        }
    }
    
    adjustTypeface();

    $(window).resize(function() {
        adjustTypeface();
    });

});