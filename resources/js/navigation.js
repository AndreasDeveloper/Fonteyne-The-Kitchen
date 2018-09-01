/* ------------------------------------------- */
/* NAVIGATION | SCROLL/FIXED SETUP
/* ------------------------------------------- */

$(document).ready(function() {

    /*
    $(window).bind('scroll', function(){

        var navHeight = $(window).height() - 70;
            if($(window).scrollTop() > navHeight) {
                $('nav').addClass('fixed');
            }

            else {
                $('nav').removeClass('fixed');
            }
    }); */

     // NAVIGATION ON SCROLL SETUP \\
     $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('scroll');
        }

        else {
            $('nav').removeClass('scroll');
        }
    })
    
    // MAKES BUTTON TO WORK AND DISPLAYS MOBILE NAVIGATION \\
    $(".navigation__menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});