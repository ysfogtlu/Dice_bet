var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var newImg1 = "images/dice" + randomNumber1 + ".png";
var newImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", newImg1);
document.querySelector(".dice .img2").setAttribute("src", newImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player1 Win!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player2 Win!";
}
else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
