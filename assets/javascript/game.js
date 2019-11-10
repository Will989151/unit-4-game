$(document).ready(function() {
    var minTotal = 19; 
    var maxTotal = 120;  
    var randomNumber = Math.floor(Math.random() * (+maxTotal - +minTotal)) + +minTotal;
$("#winningNumber").text(randomNumber);
    

var num1 = Math.floor(Math.random() * 12)
var num2 = Math.floor(Math.random() * 12)
var num3 = Math.floor(Math.random() * 12)
var num4 = Math.floor(Math.random() * 12)

var playerScore = 0;
var wins = 0;
var losses = 0;

$("#victories").text(wins);
$("#losses").text(losses);

function newGame() {
    randomNumber = Math.floor(Math.random() * (+maxTotal - +minTotal) + +minTotal);
    console.log(randomNumber)
    $("#winningNumber").text(randomNumber);
    num1 = Math.floor(Math.random() * 12);
    num2 = Math.floor(Math.random() * 12);
    num3 = Math.floor(Math.random() * 12);
    num4 = Math.floor(Math.random() * 12);

    playerScore = 0;
    $("#totalScore").text(playerScore);
}

function win() {
    alert ("Victory!!");
    wins++;
    $("#victories").text(wins);
    newGame();
}

function lose() {
    alert ("Looooooser");
    losses++;
    $("#losses").text(losses);
    newGame();
}

$("#green").on ("click", function() {
    playerScore = playerScore + num1;
    console.log("New playerScore= " + playerScore);
    $("#totalScore").text(playerScore); 

        if (playerScore === randomNumber) {
        win();
        }
        else if ( playerScore > randomNumber) {
        lose();
        }   
    })

$("#red").on ("click", function() {
    playerScore = playerScore + num2;
    console.log("New playerScore= " + playerScore);
    $("#totalScore").text(playerScore); 

        if (playerScore === randomNumber) {
        win();
        }
        else if ( playerScore > randomNumber) {
        lose();
        }   
})

$("#blue").on ("click", function() {
    playerScore = playerScore + num3;
    console.log("New playerScore= " + playerScore);
    $("#totalScore").text(playerScore); 

        if (playerScore === randomNumber) {
        win();
        }
        else if ( playerScore > randomNumber) {
        lose();
        }   
})

$("#dark").on ("click", function() {
    playerScore = playerScore + num4;
    console.log("New playerScore= " + playerScore);
    $("#totalScore").text(playerScore); 

        if (playerScore === randomNumber) {
        win();
        }
        else if ( playerScore > randomNumber) {
        lose();
        }   
    });
});