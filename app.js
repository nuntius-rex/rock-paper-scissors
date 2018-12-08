
/*
  There are several examples available online of the
  rock-papper-scissors logic using an if, elseif
  means to score the game. However, an arguably more
  efficient way is to use modulus.

*/

var userChoice = prompt("Choose rock, paper or scissors:");

function Character(id,name,userChoice){
    this.id=id;
    this.name=name;
    this.num="";
    this.move=["rock", "paper", "scissors"];
    this.valid=false;
    this.action=userChoice;
	  this.gesture = function(){
        console.log("ACTION: "+this.action);
      	if(this.action!=""){
            //Get the index of the move from the array using the user entry:
            this.num = this.move.indexOf(this.action);
            if(this.num != -1){
              this.valid=true;
              console.log("Player "+this.id+" ("+this.name+"): "+this.move[this.num]);
            }else{
              this.valid=false;
              console.log("Player "+this.id+" ("+this.name+"),"
              +" is disqualified for making and invalid request!");
            }
        }else{
            this.valid=true;
            this.num = Math.floor(Math.random() * this.move.length);
          	console.log("Player "+this.id+" ("+this.name+"): "+this.move[this.num]);
        }
    }

 }

function score(p1, p2){

    if(p1.valid!=true){
      return console.log("Player 1 is disqualified");
      //return ""; //Exit early
    }

    if(p2.valid!=true){
      return console.log("Player 2 is disqualified");
      //return ""; //Exit early
    }
    /*
    Score explanation: The scoring algorithm uses a triad math construct.
    The construct, corresponds with the rules of rock-paper-scissors
    1.) Working from the inside-out in PEMDAS order, the difference of the
    two player scores is first calculated (p1.num - p2.num)
    2.) 3 is added (3+ to force at least one positive division remainder greater than or equal to 0
    3.) modulus )%3 lastly divides the result by 3 and returns the remainder
    The remainder will directly correspond to the winner, with 0 = tie.

    WHY? The relationship of the win iteration of traingular scoring,
    which itself is cyclical:
    0 rock beats 2 scissors
    1 paper beats 0 rock
    2 scissors beats 1 paper

    Calculating a score example:
    (3+(p1.num-p2.num))%3
    (3+(0-1))%3
    Explanation: (3+(player1 ROCK- player2 PAPER))%3
    (3+(-1))%3
    (2)%3
    2
    Player 2 wins!
    */
  	var score = (3+(p1.num-p2.num))%3;
    switch(score){
      case 0:
        return console.log("Tie!");
      break;
      case 1:
        return console.log("Player 1 Wins!");
      break;
      case 2:
       return console.log("Player 2 Wins!");
      break;
    }
}

Player1 = new Character(1, "Computer", "");
Player1.gesture();
Player2 = new Character(2, "Human",userChoice);
Player2.gesture();
score(Player1, Player2);
