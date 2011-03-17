$(document).ready(function() {
    
    $('img.flag').hover(
        function() {
            $(this).stop().animate({
                top: "0px"
            }, 300);
        },
        function() {
            $(this).stop().animate({
                top: "-10px"
            }, 300);
        }
	);
    
    $("#yoxview_picasa").yoxview({ 
        dataUrl: 'http://picasaweb.google.com/kristijan.bambir/LaBellaCasa',
        dataSourceOptions: {
           thumbsize: 150
        }
    });
    
});