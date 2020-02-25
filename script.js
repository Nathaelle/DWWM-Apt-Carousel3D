var carousel = document.querySelector(".carousel"), currdeg = 0;

document.querySelector(".next").addEventListener("click", (e) => {
    rotate({ d: "n" });
});
document.querySelector(".prev").addEventListener("click", (e) => {
    rotate({ d: "p" });
});

function rotate(dir) {
  if (dir.d == "n") {
    currdeg = currdeg - 60;
  }
  if (dir.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.style.transform = "rotateY(" + currdeg + "deg)";
}
