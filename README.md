# rock-paper-scissors
Rock Paper Scissors in JavaScript

There are several examples available online of the rock-papper-scissors logic using an if, elseif to score the game. 
However, an arguably more efficient way is to use modulus. Additionally, using an object oriented scructure can produce
a more efficient reusable Player structure. I would love to hear your feedback.

Score explanation: The scoring algorithm uses a triad math construct:

The construct, corresponds with the rules of rock-paper-scissors<br/>
1.) Working from the inside-out in PEMDAS order, the difference of the two player scores is first calculated (p1.num - p2.num)<br/>
2.) 3 is added (3+ to force at least one positive division remainder greater than or equal to 0<br/>
3.) modulus %3 lastly divides the result by 3 and returns the remainder. The remainder will directly correspond to the winner:<br/>
<br/>
0 = tie<br/> 
1 = Player1 wins<br/>
2 = Player2 wins<br/>

WHY? The relationship of the win iteration of traingular scoring,
which itself is cyclical:<br/>
0 rock beats 2 scissors<br/>
1 paper beats 0 rock<br/>
2 scissors beats 1 paper<br/>

Calculating a score example:<br/>
(3+(p1.num-p2.num))%3<br/>
(3+(0-1))%3 <br/>
Explanation: (3+(player1 ROCK- player2 PAPER))%3 <br/>
(3+(-1))%3 <br/>
(2)%3 <br/>
2 <br/>
Player 2 wins! <br/>

