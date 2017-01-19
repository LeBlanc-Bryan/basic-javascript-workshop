var sample = "a string";
//
function firstChar(str) {
  return str.substring(0, 1);
}
console.log(firstChar(sample));
//
function lastChar(str) {
  return str.substring(str.length - 1, str.length);
}
console.log(lastChar(sample));
//
function numStr(num, str) {
  return str.substring(num, num + 1);
}
console.log(numStr(2, sample));
//
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));
//
function mult(a, b) {
  return a * b;
}
console.log(mult(2, 4));
//
function mathifier(a, b, str) {
  if (str === "add") {
    return a + b;
  }
  else if (str === "subtract") {
    return a - b;
  }
  else if (str === "div") {
    return a / b;
  }
  else if (str === "mult") {
    return a * b;
  }
  else {
    return 0
  }
}
console.log(mathifier(3, 4, "subtract"));
//
function repeat(str, num) {
  for (var i = 0; i < num; i++) {
    console.log(str);
  }
}
console.log(repeat(sample, 5));
//
function looper() {
  for (var i = 1; i < 11; i++) {
    console.log(i);
  }
}
looper();
//
function numNames() {
  for (var i = 1; i < 11; i++) {
    if (i == 1) {
      console.log("one");
    }
    else if (i == 2) {
      console.log("two");
    }
    else if (i == 3) {
      console.log("three");
    }
    else if (i == 4) {
      console.log("four");
    }
    else if (i == 5) {
      console.log('five');
    }
    else if (i == 6) {
      console.log('six');
    }
    else if (i == 7) {
      console.log('seven');
    }
    else if (i == 8) {
      console.log('eight');
    }
    else if (i == 9) {
      console.log('nine');
    }
    else {
      console.log('ten');
    }
  }
}
numNames();
//
function numNums() {
  for (var i = 1; i < 11; i++) {
    for (var j = 0; j < i; j++) {
      console.log(i);
    }
  }
}
numNums();
//
function reverser(str) {
  var charArray = str.split("");
  for (var i = 0; i <= charArray.length; i++) {
    console.log(charArray[charArray.length - i]);
  }
}
console.log(reverser(sample));
//
function factoreal(num) {
  if (num < 0) {
    return undefined;
  }
  else {
    var product = 1;
    for (var i = num; i > 0; i--) {
      product = product * i;
    }
  }
  return product;
}
console.log(factoreal(5));
//
var phrase = "this is an example of";

function longestWord(str) {
  var wordArray = str.split(" ");
  var longest = 0;
  var word = "";
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
      word = wordArray[i];
    }
  }
  return word;
}
console.log(longestWord(phrase));
// 
function capitalize(str) {
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split('');
    for (var j = 0; j < letters.length; j++) {
      letters[0] = letters[0].toUpperCase();
    }
    words[i] = letters.join("");
  }
  return words.join(" ");
}
console.log(capitalize(phrase));
//Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
var numArray = [1, 2, 3, 4, 5, 6, 7, 50, 9];

function largest(arr) {
  var biggest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}
console.log(largest(numArray));
//
function filterArray(arr) {
  return arr.filter(function(arrData) {
    if (arrData) {
      return arrData;
    }
  });
}
console.log(filterArray(numArray));
//
function sumArray(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
}
console.log(sumArray(numArray));
//
var bigArray = [1, 2, 3, 4, 5, 6, 7, 8];
var smallArray = [3, 2, 1, 5, 6, 7, 9];

function uniqueElements(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

console.log(uniqueElements(bigArray, smallArray));
