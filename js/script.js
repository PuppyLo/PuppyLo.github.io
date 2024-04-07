$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.footer__burger').click(function (event) {
        $('.footer__burger, .footer__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('index');

    });
});