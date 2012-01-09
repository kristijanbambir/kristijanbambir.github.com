$(function () {
    
    var socialicon = $(".socialicon");
    var weemee = $("#weemee");
    
    socialicon.fadeTo(0, 0.7);
    
    socialicon.hover(
        function () {
            $(this).stop().fadeTo(200, 1);
        }, 
        function () {
            $(this).stop().fadeTo(200, 0.7);
        }
    );
    
    socialicon.tipsy({fade: true, opacity: 0.6});
    weemee.tipsy({gravity: 'w', opacity: 0.6, weemee: true});
    
    /*function adjustVerticalAlign() {
        var documentHeight = $(document).height();
        var bodyHeight = $('body').height();
        var marginTop = Math.round((documentHeight - bodyHeight) / 2);
        $('body').css('margin-top', marginTop);
    }
    
    adjustVerticalAlign();
    
    $(window).resize(function() {
        adjustVerticalAlign();
    });*/

});