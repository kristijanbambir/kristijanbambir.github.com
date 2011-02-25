$(document).ready(function() {

    var size;
    
    function getSize() {
        var documentWidth = $(document).width();
        if (documentWidth > 1450) {
            size = 'big';
        }
        else {
            size = 'normal';
        }
    }
    
    function adjustVerticalAlign(fix) {
        var documentHeight = $(document).height();
        var bodyHeight = $('body').height();
        var marginTop = Math.round((documentHeight - bodyHeight) / 2) - 10 - fix;
        $('body').css('margin-top', marginTop);
    }
    
    function adjustFontSize() {
        if (size == 'big') {
            $('div#content').css('font-size', '2.5em');
        }
        else {
            $('div#content').css('font-size', '2em');
        }
    }
    
    getSize();
    
    /*if (size == 'big') {
        adjustVerticalAlign(125);
    }
    else {
        adjustVerticalAlign(60);
    }*/
    
    adjustFontSize();
    
    $(window).resize(function() {
        getSize();
        //adjustVerticalAlign(0);
        adjustFontSize();
    });
    
    //$('div#content').hide();
    
    /*$(window).mousemove(function() {
       $('div#content').delay(500).fadeIn('slow'); 
    });*/
    
    $('a').hover(
        function() {
            $(this).stop().fadeTo(200, 0.5);
        },
        function() {
            $(this).stop().fadeTo(200, 1);
        }
    );
    
});