var $ = require('jquery');
window.$ = $;
require('bootstrap');

$(document).ready(function () {

    // Activate Carousel
    $("#carousel").carousel({interval: 5000});

    // Function applied when scrolling the window
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);

        // Parallax effect
        $('.parallax-1').each(function (index, elem) {
            var $elem = $(elem);
            $elem.find('img').css('top', scrollTop - $elem.offset().top + 100);
        });

        $('.parallax-2').each(function (index, elem) {
            var $elem = $(elem);
            $elem.find('img').css('top', scrollTop - $elem.offset().top + 50);
        });

        // Apparition effect
        var elemStory = $('.item-story-effect');

        $(elemStory).each(function () {
            // Take the current position (vertical position from top) of my div in the variable
            var elemStoryTop = $(this).offset().top - 200;

            if (elemStoryTop < scrollTop) {
                $(this).animate({opacity: '1'}, "100");
            }
        });
    });


    // Hover block offer
    $(".item-offer-link").hover(
        function () {
            console.log($(this));
            $(this).parent().parent().siblings().children('.item-offer-img-mask').animate({opacity: '1'}, "150");
        }, function () {
            $(this).parent().parent().siblings().children('.item-offer-img-mask').animate({opacity: '0'}, "200"); //remove property
        }
    );

});

