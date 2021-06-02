"use strict";
const playground = document.getElementById("playground");
const pixel = document.querySelectorAll(".pixel");
let move = true;
for (let i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener("click", function () {
    if (move === true) {
      pixel[i].innerHTML = "X";
      pixel[i].style.pointerEvents = "none";
      victory();
      move = false;
    } else if (move === false) {
      pixel[i].innerHTML = "O";
      pixel[i].style.pointerEvents = "none";
      victory();
      move = true;
    }
  });
}
function victory() {
  for (let i = 0; i <= 2; i++) {
    if (
      pixel[0 + 3 * i].innerHTML === "X" &&
      pixel[1 + 3 * i].innerHTML === "X" &&
      pixel[2 + 3 * i].innerHTML === "X"
    ) {
      pixel[0 + 3 * i].classList.add("red");
      pixel[1 + 3 * i].classList.add("red");
      pixel[2 + 3 * i].classList.add("red");
      notUse();
    }
    if (
      pixel[0 + i].innerHTML === "X" &&
      pixel[3 + i].innerHTML === "X" &&
      pixel[6 + i].innerHTML === "X"
    ) {
      pixel[0 + i].classList.add("red");
      pixel[3 + i].classList.add("red");
      pixel[6 + i].classList.add("red");
      notUse();
    }
    if (
      pixel[0 + i].innerHTML === "O" &&
      pixel[3 + i].innerHTML === "O" &&
      pixel[6 + i].innerHTML === "O"
    ) {
      pixel[0 + i].classList.add("red");
      pixel[3 + i].classList.add("red");
      pixel[6 + i].classList.add("red");
      notUse();
    }
    if (
      pixel[0 + 3 * i].innerHTML === "O" &&
      pixel[1 + 3 * i].innerHTML === "O" &&
      pixel[2 + 3 * i].innerHTML === "O"
    ) {
      pixel[0 + 3 * i].classList.add("red");
      pixel[1 + 3 * i].classList.add("red");
      pixel[2 + 3 * i].classList.add("red");
      notUse();
    }
  }
  if (
    pixel[0].innerHTML === "X" &&
    pixel[4].innerHTML === "X" &&
    pixel[8].innerHTML === "X"
  ) {
    pixel[0].classList.add("red");
    pixel[4].classList.add("red");
    pixel[8].classList.add("red");
    notUse();
  }
  if (
    pixel[2].innerHTML === "X" &&
    pixel[4].innerHTML === "X" &&
    pixel[6].innerHTML === "X"
  ) {
    pixel[2].classList.add("red");
    pixel[4].classList.add("red");
    pixel[6].classList.add("red");
    notUse();
  }
  if (
    pixel[0].innerHTML === "O" &&
    pixel[4].innerHTML === "O" &&
    pixel[8].innerHTML === "O"
  ) {
    pixel[0].classList.add("red");
    pixel[4].classList.add("red");
    pixel[8].classList.add("red");
    notUse();
  }
  if (
    pixel[2].innerHTML === "O" &&
    pixel[4].innerHTML === "O" &&
    pixel[6].innerHTML === "O"
  ) {
    pixel[2].classList.add("red");
    pixel[4].classList.add("red");
    pixel[6].classList.add("red");
    notUse();
  }
}
function notUse() {
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].style.pointerEvents = "none";
  }
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  for (let i = 0; i < pixel.length; i++) {
    move = true;
    pixel[i].innerHTML = "";
    pixel[i].classList.remove("red");
    pixel[i].style.pointerEvents = "auto";
  }
});
