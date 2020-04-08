$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon').toggleClass('open');
    });

    // Кнопка see more
    $('.btn-outline-secondary').click(function () {
        $("body,html").animate({
            scrollTop: $('.portfolio').offset().top
        }, 1000)
    });


    // Кнопка вверх
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#topArrow').fadeIn();
            } else {
                $('#topArrow').fadeOut();
            }
        });
        $('#topArrow').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 700);
        });
    });

    $('.header').height($(window).height());

    // плавное перемещение 
    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    })
});



