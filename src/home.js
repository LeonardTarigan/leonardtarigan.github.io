// const text = document.getElementById("greeting");
const text = $("#greeting");
let words = ["こんにちは!", "Bonjour!", "Hola!", "Ciao!", "你 好!", "Hello World!"];
let i = 0;

setInterval(function () {
    text.fadeOut(function () {
        text.html(words[i]);
        i++;
        if (i >= words.length) {
            i = 0;
        }
        text.fadeIn();
    });
}, 3000);

