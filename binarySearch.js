 //Picks the middle number, rounded down, within the range

function binarySearch(max) {
 var stat;
 var min = 0;
 var guessCount = 1;
 var guess = average(min, max); 
 var num = randomFromRange(min, max)

 function average(min, max) {
   return Math.floor((max + min) / 2 );
 }
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
     guess = average(min, max);
     guessCount++;
  } 
  stat = 2;
  print(message(guessCount, guess, stat));
}

binarySearch(3000);


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
