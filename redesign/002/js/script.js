﻿$(document).ready(function() {
    
    /*
    function adjustVerticalAlign() {
        var documentHeight = $(document).height();
        var bodyHeight = $('body').height();
        var marginTop = Math.round((documentHeight - bodyHeight) / 2) - 90;
        $('body').css('margin-top', marginTop);
    }
    
    adjustVerticalAlign();
    
    $(window).resize(function() {
        adjustVerticalAlign();
    });
    */
    
    var documentWidth = $(document).width();
    var windowWidth = $(window).width();
    
    $('#test').html("Document width: " + documentWidth + "<br/>Window width: " + windowWidth);
    
});