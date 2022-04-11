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

const hobbies = [
    {
        id: 0,
        name: "Music",
        desc: ""
    }
];


var modal = document.getElementById("myModal");
var btn = document.getElementById("music");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}