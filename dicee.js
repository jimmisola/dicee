//alert("Working");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc = "images/dice" + randomNumber1 + ".png";

const FIRST = document.getElementsByClassName("img1")[0];

FIRST.setAttribute("src", randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

const SECOND = document.querySelectorAll("img")[1];

SECOND.setAttribute("src", randomImageSrc2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else {
  document.querySelector("h1").innerHTML = "It's A Draw!";
}
