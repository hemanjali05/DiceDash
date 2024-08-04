var btn = document.getElementById('new');
var text = document.querySelectorAll('h1');
var player1 = prompt("Enter the name of player 1: ");
var player2 = prompt("Enter the name of player 2: ");
var audio = new Audio('sounds/dice.mp3');

document.getElementById('player1').innerText = player1;
document.getElementById('player2').innerText = player2;

btn.addEventListener("click", function() {
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    audio.play();
    var randomDiceImage = "images/dice" + randomNumber1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        text[0].innerHTML = player1+ " Wins!🎉🎊";
    } else if (randomNumber2 > randomNumber1) {
        text[0].innerHTML = player2+ " Wins!🎉🎊";
    } else if (randomNumber1 === randomNumber2) {
        text[0].innerHTML = "Draw! Play again!";
    }
});
