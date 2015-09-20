//Picks a random number within the range

function randomSearch(max) { 
 var stat = 0;
 var min = 0;
 var guessCount = 1;
 var guess = randomFromRange(min, max);
 var num = randomFromRange(min, max)

 function randomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
 }

   while(guess !== num) {
     if(num < guess) {
       stat = 1;
       max = guess -1;
     }
     else {
       stat = 0;
       min = guess + 1;
     }
     
     print(message(guessCount, guess, stat));
     guess = randomFromRange(min, max);
     guessCount++;
  } 
  stat = 2;
 print(message(guessCount, guess, stat));
 
}
randomSearch(300);


function message(gn, g, s) { 
  var statuses = {
    0: "Too Low",
    1: "Too High",
    2: "You Found It!"
  }
  return "Guess " + gn + " Guessed: " + g + " Status: " + statuses[s]; 
}

function print(str) {
  console.log(str)
}
