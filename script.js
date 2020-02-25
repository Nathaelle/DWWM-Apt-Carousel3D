var carousel = document.querySelector('.carousel');
var position = 0;

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener("click", function () {
    rotate(60);
});

next.addEventListener("click", function () {
    rotate(-60);
});

function rotate(direction) {
    position += direction;
    carousel.style.transform = "rotateY(" + position + "deg)"
}

console.log(prev);
console.log(next);
