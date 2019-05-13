$(document).ready(function(){
    $("#click").click(function(){
        $("#row").slideToggle();
    });

    $("#ru").click(function(){
        $("#rules").slideToggle();
    });
});
//  function Player(turn) {
//   this.turn = turn;
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
//  }
//  function rollDice(){
//   return Math.floor(6 * Math.random())+1;
//  }
//  Player.prototype.startGame = function() {
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
//   this.playerName = "";
//  }
//  Player.prototype.roll1 = function() {
//   if (this.roll === 1) {
//     this.turnScore = 0;
//     alert("Next Player");
//   } else {
//     this.turnScore += this.roll;
//   }
//  }
//  Player.prototype.hold = function() {
//   this.totalScore += this.turnScore;
//   this.turnScore = 0;
//   alert("Next Player");
//  }
//  Player.prototype.winnerCheck = function() {
//   if (this.totalScore >= 100) {
//     alert(" congratulations You won");
//   }
 
 
//   $("#hold1").click(function(){
//   player1.hold();
//   $("#score1").text(player1.totalScore);
//   $("#points1").empty();
//   $("#poi1").empty();
//   player1.winnerCheck();
//   });
//   $("#hold2").click(function(){
//   player2.hold();
//   $("#score2").text(player2.totalScore);
//   $("#points2").empty();
//   $("#poi2").empty();
//   player2.winnerCheck();
//   });
