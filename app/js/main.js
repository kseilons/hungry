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

    window.dispatchEvent(new Event("scroll"));

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
        let paralacsBlock = document.querySelector('.page__paralacs');
        let scrollHeight = paralacsBlock.offsetHeight;
        let percent = scrollTop / scrollHeight;
        paralacsBlock.style.opacity = `${1 - percent }`;
    });


    function SmoothVerticalScrolling(e, time, where) {
        var eTop = e.getBoundingClientRect().top;
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }
    
    function SVS_B(eAmt, where) {
        if (where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
        if (where == "top") {
            window.scrollBy(0, eAmt);
            console.log(eAmt)

        }
    }

    $('.button--down').click( function() {
        let mainPage = document.querySelector('.page__wrapper');
        SmoothVerticalScrolling(mainPage, 500, "top")
    })
});