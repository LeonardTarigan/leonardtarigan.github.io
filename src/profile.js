const text = $("#desc");
let words = ["Frontend enthusiast", "Ambivert", "Student"];
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