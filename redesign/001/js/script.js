$(document).ready(function() {
    
    function adjustVerticalAlign() {
        var documentHeight = $(document).height();
        var bodyHeight = $('body').height();
        var marginTop = Math.round((documentHeight - bodyHeight) / 2) - 10;
        $('body').css('padding-top', marginTop);
    }
    
    adjustVerticalAlign();
    
    $(window).resize(function() {
        adjustVerticalAlign();
    });
    
    $('div#content').hide();
    
    $(window).mousemove(function() {
       $('div#content').delay(500).fadeIn('slow'); 
    });
    
    $('a').hover(
        function() {
            $(this).stop().fadeTo('fast', 0.5);
        },
        function() {
            $(this).stop().fadeTo(200, 1);
        }
    );
    
});