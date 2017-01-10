//this is a comment//
//1. Write a function that takes a string and returns the first character of the string.// 
//Test your function on a few inputs, including the empty string.//
var firstChar = function(word) {
    return word[0];
};
console.log(firstChar("Hello"));
console.log(firstChar("anything"));
console.log(firstChar(""));
//2. Write a function that takes a string and returns the last character of a string.//
//Test your function on a few inputs, including the empty string.//
var lastChar = function(otherWord) {
    return otherWord[(otherWord.length - 1)];
};
console.log(lastChar("GoodBye"));
console.log(lastChar("nothing"));
console.log(lastChar(""));