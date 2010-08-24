/**
 * Kristijan Bambir Copyright (c) 2010 All rights reserved. 
 *
 * @author Kristijan Bambir
 * 
 */


$(document).ready(function() {
	
	$('a').hover(
        function () {
            $(this).stop().animate({
                'text-decoration': 'underline'
            }, 300);
        }, 
        function () {
            $(this).stop().animate({
                'text-decoration': 'none'
            }, 300);
        }
    );
    
    // ------------------------------------ arrows
    
    $('img.nextimg').hover(
        function() {
            $(this).attr('src','img/next2.png');
        },
        function() {
            $(this).attr('src','img/next.png');
        }
    );
    
    $('img.previousimg').hover(
        function() {
            $(this).attr('src','img/previous2.png');
        },
        function() {
            $(this).attr('src','img/previous.png');
        }
    );
    
    
    // ------------------------------------ slider
	
	$('div#profile').css('right','-100%');
	$('div#contact').css('right','-200%');
	$('div#credits').css('right','-300%');
    
    $('a.navigation').click(function() {
        $.scrollTo($(this).attr('href'), 500, {axis:'x'});
    });
	
    
    // ------------------------------------ social & contact
    
    $('img.social').hover(
	   function() {
	       var text = $(this).attr('alt');
		   $('div#social_text').html(text);
	   },
	   function() {
	       $('div#social_text').html(' ');
	   }
	);
	
	$('img.contact').hover(
       function() {
           var text = $(this).attr('alt');
           $('div#contact_text').html(text);
       },
       function() {
           $('div#contact_text').html(' ');
       }
    );
    
});
