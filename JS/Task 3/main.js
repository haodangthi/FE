function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
var min=1;
var max=100;
// var randomNum=Math.round(Math.random()*max+min);
var randomNum;
// var guess=prompt(`Guess a number from ${min} to ${max}`);

 var attempt=0;

var middleNum;

for (let i = 0; true; i++) {
    attempt++;
    randomNum=getRandomArbitrary(min,max);
    guess=prompt(`Guess a number from ${min} to ${max}`);
    if (guess!=randomNum){
       middleNum=Math.round((max-min)/2+min);
       if (guess>middleNum){
           min=middleNum;
           
       }
       else if (guess<=middleNum){
           max=middleNum;
       }
    }

    else {
        alert(`Congrats! You made ${attempt} attemps`);
        break;
    }

}