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
//3. Write a function that takes a string and a number, and returns the character at the position represented by the number.//
//The indexing of number should start at 0. Test your function on a few inputs, including the empty string//
var wordNumber = function(a,b) {
    return a[(b-1)];
    //a = string, b = number//
};
console.log(wordNumber("Mark", 2));
console.log(wordNumber("Jessie", 5));
console.log(wordNumber("",5));