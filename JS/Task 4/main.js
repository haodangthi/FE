var min = 1;
var max = 100;
var myNum=prompt(`Write your number from ${min} to ${max}`);


var compGuess;
var attempt = 0;
var middleNum;

while (compGuess!=myNum){
    attempt++;
    compGuess=getRandomArbitrary(min,max);
    console.log(compGuess);
    
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }