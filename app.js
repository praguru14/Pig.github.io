/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/
alert("GAME RULES: \n1. The game has 2 players, playing in rounds.\n2.In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score. \n3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn. \n4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn. \n5. The first player to reach 20 points on GLOBAL score wins the game");
var scores,roundScores,activePlayer,lastScore;
init();
document.querySelector('.btn-roll').addEventListener('click',function () {
    if(gamePlaying)
        {
             // 1. Random Number 
    dice = Math.floor(Math.random() * 6) + 1;
    // 2.   Display the Score
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display= 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Updating the number and not printing if it is one
            if(dice===6 && lastScore ===6)
                {
                    scores[activePlayer] = 0;
                     document.querySelector('#current-' + activePlayer).textContent = 0;
                    nextPlayer();
                }
    else if (dice !== 1)     //add to score
        {
        roundScores +=dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
        }



    else    //next playe
        {
      nextPlayer();   
        }
            lastScore  = dice;
        }
  
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // add curent score to global one
    scores[activePlayer] +=roundScores;
    //chnage the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];  
    if(scores[activePlayer] >= 20)
        {
            document.querySelector('#name-' + activePlayer).textContent= 'Winner!';
            document.querySelector('.dice').style.display = 'none'; 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
        } 
else{
    nextPlayer();
    }
    }
    
});
function nextPlayer(){
       activePlayer ===0? activePlayer =1: activePlayer = 0;
             roundScores =0;
            document.getElementById('current-1').textContent = '0';
             document.getElementById('current-0').textContent = '0';
            
           // document.querySelector('.player-0-panel').classList.remove('active');
             //document.querySelector('.player-1-panel').classList.add('active');
             
            document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
            
} 

document.querySelector('.btn-new').addEventListener('click', init);


                                                   
function init(){
    scores =[0,0];
roundScores = 0;
activePlayer = 0;
    gamePlaying= true;


//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent= dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice +'</em>';
/*var a = document.querySelector('#score-0').textContent;
console.log(a);*/
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
      document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    
    
    
}