document.querySelector(".btn").addEventListener("click", button);

function button() {

  dice();
}

function dice() {


  var random1 = Math.random() * 6 + 1;
  random1 = Math.floor(random1);
  var random2 = Math.random() * 6 + 1;
  random2 = Math.floor(random2);

  function rollDice1() {
    if (random1 === 1) {
      document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (random1 === 2) {
      document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (random1 === 3) {
      document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (random1 === 4) {
      document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (random1 === 5) {
      document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else {
      document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
  }

  function rollDice2() {

    if (random2 === 1) {
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (random2 === 2) {
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (random2 === 3) {
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (random2 === 4) {
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (random2 === 5) {
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else {
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
  }

  function name() {
    if (random1 < random2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if (random1 > random2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "Draw";
    }
  }
  rollDice1();
  rollDice2();
  name();

}
