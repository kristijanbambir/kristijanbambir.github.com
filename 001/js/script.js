/* Kristijan Bambir © 2010 All rights reserved.
*/


$(document).ready(function() {

    $('div#hide').hide().delay(500);
    
    $(document).mousemove(function() {
        $('div#hide').fadeIn("slow");
    });

    $.scrollTo($('#home'), 500, {axis:'x'});
    
    $('a.menubutton, a.contlink').click(function() {
        $.scrollTo($(this).attr('href'), 500, {axis:'x'});
    });
    
    $('a').hover(
        function() {
            $(this).stop().fadeTo("fast", 0.5);
        },
        function() {
            if ($(this).attr('class')=='selected') {
                $(this).stop().fadeTo("fast", 0.7);
            }
            else {
                $(this).stop().fadeTo("fast", 1);
            }
        }
    );
    
    $('a.selected').stop().fadeTo("slow", 0.7);
    
    
    $('span#aboutcroatian').hide();
    $('span#aboutmacedonian').hide();
    
    $('a#buttoncroatian').click(function() {
        $('span#aboutmacedonian').fadeOut(400);
        $('span#aboutenglish').fadeOut(400);
        $('span#aboutcroatian').delay(500).fadeIn("slow");
        $('img#buttonimagecroatian').attr('src','img/buttondown.png');
        $('img#buttonimagemacedonian').attr('src','img/buttonup.png');
        $('img#buttonimageenglish').attr('src','img/buttonup.png');
    });
    
    $('a#buttonmacedonian').click(function() {
        $('span#aboutcroatian').fadeOut(400);
        $('span#aboutenglish').fadeOut(400);
        $('span#aboutmacedonian').delay(500).fadeIn("slow");
        $('img#buttonimagecroatian').attr('src','img/buttonup.png');
        $('img#buttonimagemacedonian').attr('src','img/buttondown.png');
        $('img#buttonimageenglish').attr('src','img/buttonup.png');
    });
    
    $('a#buttonenglish').click(function() {
        $('span#aboutcroatian').fadeOut(400);
        $('span#aboutmacedonian').fadeOut(400);
        $('span#aboutenglish').delay(500).fadeIn("slow");
        $('img#buttonimagecroatian').attr('src','img/buttonup.png');
        $('img#buttonimagemacedonian').attr('src','img/buttonup.png');
        $('img#buttonimageenglish').attr('src','img/buttondown.png');
    });
    
    $('div#languagebuttonstext').stop().fadeTo("fast", 0.2);
    
    $('div#msntext').hide();
    $('div#msn').hover(
        function() {
            $('div#msntext').fadeIn(200);
        },
        function() {
            $('div#msntext').fadeOut(200);
        }
    );

});