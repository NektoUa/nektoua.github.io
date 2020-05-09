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

// Анимация текста
$('#anime-portfolio').typeIt({
    // strings: `cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    // proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    speed: 50, //скорость анимации
    autoStart: false /*если true то анимация начнется сразу после загрузки страницы, если false, то только когда блок будет в зоне видимости*/
});

// Анимация футер
$(".social li a").each(function (i) {
    $(this).hover(function () {
        $(".socialWrapper").toggleClass("socialActive" + (i + 1));
    });
});



