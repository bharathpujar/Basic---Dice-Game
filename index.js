var playerName1 = prompt("Hello! , Enter 1st Player's Name : ");
var playerName2 = prompt("Enter 2nd Player's name : ");

document.querySelector(".p1").innerHTML = playerName1;
document.querySelector(".p2").innerHTML = playerName2;

var player1Number = Math.floor(Math.random() * 6) + 1;

if (player1Number == 1) {
  document.querySelector(".img1").setAttribute("src", "dice1.png");
} else if (player1Number == 2) {
  document.querySelector(".img1").setAttribute("src", "dice2.png");
} else if (player1Number == 3) {
  document.querySelector(".img1").setAttribute("src", "dice3.png");
} else if (player1Number == 4) {
  document.querySelector(".img1").setAttribute("src", "dice4.png");
} else if (player1Number == 5) {
  document.querySelector(".img1").setAttribute("src", "dice5.png");
} else if (player1Number == 6) {
  document.querySelector(".img1").setAttribute("src", "dice6.png");
}

var player2Number = Math.floor(Math.random() * 6) + 1;

if (player2Number == 1) {
  document.querySelector(".img2").setAttribute("src", "dice1.png");
} else if (player2Number == 2) {
  document.querySelector(".img2").setAttribute("src", "dice2.png");
} else if (player2Number == 3) {
  document.querySelector(".img2").setAttribute("src", "dice3.png");
} else if (player2Number == 4) {
  document.querySelector(".img2").setAttribute("src", "dice4.png");
} else if (player2Number == 5) {
  document.querySelector(".img2").setAttribute("src", "dice5.png");
} else if (player2Number == 6) {
  document.querySelector(".img2").setAttribute("src", "dice6.png");
}

if (player1Number == player2Number) {
  document.querySelector(".ourh1").innerHTML = "Its a Draw !!";
} else if (player1Number > player2Number) {
  document.querySelector(".ourh1").innerHTML =
    "🚩" + playerName1 + " has Won!!";
} else if (player1Number < player2Number) {
  document.querySelector(".ourh1").innerHTML = playerName2 + " has Won!!🚩";
}

// function number() {
//   console.log("player 1 dice is : " + player1Number);
//   console.log("Player 2 dice is : " + player2Number);
// }
