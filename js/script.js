$(document).ready(function() {
    
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
    
    $('a').hover(
        function() {
            $(this).stop().fadeTo(200, 0.5);
        },
        function() {
            $(this).stop().fadeTo(200, 1);
        }
    );
    
});