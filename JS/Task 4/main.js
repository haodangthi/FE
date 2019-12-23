// Computer's variables
var min = 1;
var max = 100;
var myNum = prompt(`Write your number from ${min} to ${max}`);
myNum = +myNum;
var compGuess;
var attempt = 0;
var middleNum;

// User's variables
var min2 = 1;
var max2 = 100;
var attempt2 = 0;
var middleNum2;

randomNum = getRandomArbitrary(min2, max2);



while (compGuess != myNum) {
  attempt++;
  compGuess = getRandomArbitrary(min, max);
  console.log(compGuess);
  middleNum = Math.round((max - min) / 2 + min);
  if (myNum > middleNum) {
    min = middleNum;
  } else if (myNum <= middleNum) {
    max = middleNum;
  }

  guess = prompt(`Guess a number from ${min2} to ${max2}`);
  if (guess != randomNum) {
    middleNum2 = Math.round((max2 - min2) / 2 + min2);
    if (guess > middleNum2) {
      min2 = middleNum2;
    } else if (guess <= middleNum2) {
      max2 = middleNum2;
    }
  } else {
    alert(`Congrats! You made ${attempt2} attemps`);
    break;
  }
}
if (guess != randomNum) {
  console.log("The computer has won");
} else {
  console.log("You have won");
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
