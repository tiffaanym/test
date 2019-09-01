var $ = require('jquery');
window.$ = $;
require('bootstrap');

$(document).ready(function () {

    // Activate Carousel
    $("#carousel").carousel({interval: 5000});

    // Functions applied when scrolling the window
    $(window).on('scroll', function () {

        const scrollTop = $(this).scrollTop();
        // console.log(scrollTop);

        // Parallax effect
        $('.parallax-1').find('img').css('top', scrollTop - $('.parallax-1').offset().top + 100);
        $('.parallax-2').find('img').css('top', scrollTop - $('.parallax-2').offset().top + 50);


        // Apparition effect
        const elemStory = $('.item-story-effect');

        $(elemStory).each(function () {
            // Current position (vertical position from top) of my div in the variable
            let elemStoryTop = $(this).offset().top - 200;

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

