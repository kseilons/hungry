$(document).ready(function () {
    $("input").on("change", function () {
        this.setAttribute(
            "data-date",
            moment(this.value, "YYYY-MM-DD")
                .format(this.getAttribute("data-date-format"))
        )
    }).trigger("change")

    // $(".form__input").on('focus', function() {
    //     $(this).parent().$('.form__label').addClass('form__label--active')
    // })

    let swiper = new Swiper(".swiper--type-pagination", {
        pagination: {
            el: ".swiper-pagination",
            dinamicBullets: true,
            clickable: true,
        },
    });

    $('.tabs-trigers__link').click( function(e) {
        e.preventDefault();
        $('.tabs-trigers__link--active').removeClass('tabs-trigers__link--active');
        $('.tabs-content__item--active').removeClass('tabs-content__item--active');
        
        $(this).addClass('tabs-trigers__link--active');
        $($(this).attr('href')).addClass('tabs-content__item--active')
    });
    $('.tabs-trigers__link').click();
});