function Linkedlist() {
  var length = 1;

  var Node = function(elem) {
    this.elem = elem;
    this.next = null;
  };

  var head = new Node(null);

  this.size = function() {
    return length;
  };
  this.head = function() {
    return head;
  };
  this.add = function(node) {
    if (head.elem === null) {
      head.elem = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(node);
      length++;
    }
  };
  this.lastNode = function(node) {
    if (!head.next) {
      return head;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      return currentNode;
    }
  };
  this.changeHead = function(list) {
    //console.log(list.head());
    //console.log(head);
    if (!head.elem) {
      head.elem = list.head().elem;
      head.next = list.head().next;
    }
    //console.log(head);
  };
  //   this.remove = function(elem) {
  //     var currentNode = head;
  //     var prevNode;

  //     if (currentNode.elem === elem) {
  //       head = currentNode.next;
  //     } else {
  //       while (currentNode.elem !== elem) {
  //         prevNode = currentNode;
  //         currentNode = currentNode.next;
  //       }
  //     }

  //     prevNode.next = currentNode.next;
  //     length--;
  //   };

  this.nextNode = function(elem) {
    var currentNode = head;
    var prevNode;
    if (currentNode.elem === elem) {
      return currentNode.next;
    } else {
      while (currentNode.elem != elem) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      return currentNode.next;
    }
  };
}

var array = [];
array = turnToBit(array, 12, 4, 2);

function turnToBit(array, startNum, n, bit) {
  for (let i = 0; i < n; i++) {
    array[i] = startNum.toString(bit);
    startNum++;
  }
  return array;
}

var zero = new Linkedlist();
var one = new Linkedlist();
for (let i = 0; i < array.length; i++) {
  if (array[i][array[i].length - 1] === "0") {
    zero.add(array[i]);
    //console.log(`add: ${array[i]}`);
  }
}
console.log(zero.head());

for (let i = 0; i < array.length; i++) {
  if (array[i][array[i].length - 1] === "1") {
    one.add(array[i]);
    //console.log(`add: ${array[i]}`);
  }
}
//joining 2 linked lists
zero.lastNode().next = one.head();

var array1 = [];
var currentElem = zero.head();
var prevElem;
while (currentElem.next) {
  array1.push(currentElem.elem);
  prevElem = currentElem;
  currentElem = currentElem.next;
}
array1.push(currentElem.elem);
console.log(array1);

var array5 = [9, 8, 12, 13];
array5 = turnArrayToBit(array5, 2);
console.log(`array bit ${array5}`);

// var list5= makelist(array5,"0",1);
// var list6= makelist(array5,"1",1);
// list5.lastNode().next = list6.head();
// var array2 = [];
// var currentElem = list5.head();
// var prevElem;
// while (currentElem.next) {
//   array2.push(currentElem.elem);
//   prevElem = currentElem;
//   currentElem = currentElem.next;
// }
// array2.push(currentElem.elem);
// console.log(array2);

function makelist(array, letter, index) {
  let list = new Linkedlist();
  for (let i = 0; i < array.length; i++) {
    if (array[i][array[i].length - index] === letter) {
      list.add(array[i]);

      console.log(`add: ${array[i]}`);
    }
  }
  console.log(list.head());
  return list;
}

// function radix(array) {
//   console.log(`first array:${array}`);
//   var array1=[];
//   for (let index = 1; index < 5; index++) {
//     var array2 = [];
//     console.log(`index:${index}`);
//     let list5 = makelist(array1, "0", index);
//     let list6 = makelist(array1, "1", index);
    
    
//     if (list5.head() && list6.head()) {
      
//       list5.lastNode().next = list6.head();
      
      
//       let currentElem = list5.head();
//       console.log("current ",currentElem);
//     } else if (list6.head()===null) {
//       console.log("list 5 ONLY",list5.head());
      
//       let currentElem = list5.head();
//       console.log("current ",currentElem);
//     } else if (list5.head()===null)  {
//       console.log("list 5 ONLY",list5.head());
//       console.log("current ",currentElem);
//       let currentElem = list6.head();
//     }

    
//     let prevElem;
//     while (currentElem.next) {
//       //console.log("current ",currentElem.elem);
//       array2.push(currentElem.elem);
//       prevElem = currentElem;
//       currentElem = currentElem.next;
      

//     }array2.push(currentElem.elem);
//     console.log(array2);
//     array1= array2;
      
//   }
//   console.log(array1);
//   return array1;
// }

function turnArrayToBit(array, bit) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toString(bit);
    // if(array[i].length<4){
    //   array[i]="0"+array[i];
    // }
  }
  return array;
}

// var ar = radix(array5);
// console.log(ar);
//list5.changeHead();

// function sortUp(array) {
//   let zero = new Linkedlist();
//   let one = new Linkedlist();
//   for (let index = 1; index < array.length + 1; index++) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i][array[i].length - index] === "0") {
//         zero.add(array[i]);
//         console.log(`add: ${array[i]}`);
//       }
//       if (array[i][array[i].length - index] === "0") {
//         zero.add(array[i]);
//         console.log(`add: ${array[i]}`);
//       }
//     }
//   }
//   zero.lastNode().next = one.head();

// let sortedArray= [];
// let currentElem = zero.head();
// let prevElem;
// while (currentElem.next) {
//   array1.push(currentElem.elem);
//   prevElem = currentElem;
//   currentElem = currentElem.next;
// }
// array1.push(currentElem.elem);
// console.log(array1);

// }

//var num = new Linkedlist();

// for (let i = 0; i < 10; i++) {
//   num.add(i);
// }

// var list= new Linkedlist();

// list.add(1);

// list.add(2);
// undefine
// list.nextNode(1);

// list.size()
