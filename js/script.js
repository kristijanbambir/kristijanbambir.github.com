$(document).ready(function() {
    
    function adjustVerticalAlign(fix) {
        var documentHeight = $(document).height();
        var bodyHeight = $('body').height();
        var marginTop = Math.round((documentHeight - bodyHeight) / 2) - 10 - fix;
        $('body').css('margin-top', marginTop);
    }
    
    adjustVerticalAlign(0);
    
    $(window).resize(function() {
        adjustVerticalAlign(0);
    });
    
    $('a').hover(
        function() {
            $(this).stop().fadeTo(200, 0.5);
        },
        function() {
            $(this).stop().fadeTo(200, 1);
        }
    );
    
});