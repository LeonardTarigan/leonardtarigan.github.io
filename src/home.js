var typed = new Typed('.hello', {
    strings: ["Hello World!", "こんにちは!", "Bonjour!", "Hola!", "Ciao!", "你 好!"],
    typeSpeed: 150,
    backSpeed: 90,
    backDelay: 2000,
    loop: true,
});

//loader
$(window).on('load', function () {
    $(".loader").fadeOut(300);
    $(".content").fadeIn(700);
});




