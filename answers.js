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
//The indexing of number should start at 0. Test your function on a few inputs, including the empty string.//
var wordNumber = function(a,b) {
    return a[(b-1)];
    //a = string, b = number//
};
console.log(wordNumber("Mark", 2));
console.log(wordNumber("Jessie", 5));
console.log(wordNumber("",5));
//4. Write a function that takes two numbers and adds them together. Test your function on a few inputs.// 
//Write in the comments what happens when you pass something other than a number to your function.//
var addTwo = function(one,two) {
    return (one + two);
};
console.log(addTwo(3,4));
console.log(addTwo(17,101));
console.log(addTwo("Banana", "Phone"));
//When I passed some strings to the function it put them together as BananaPhone.//
//5. Write a function that takes two numbers and multiplies them together. Test your function on a few inputs.//
//Write in your comments what happens when you pass something other than a number to your function.//
var product = function(n1,n2) {
    return n1*n2;
};
console.log(product(3,4));
console.log(product(20,10));
console.log(product("Face", "Book"));
//When I passed some strings it puts out NaN - not a number.//
//6. Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers.//
//If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product.//
//If the string is ‘div’, return the ratio. Otherwise return 0.//
var arithmetic = function(x,y,operator) {
    if (operator === "add") {
        return x+y;
    }
    else if (operator === "subtract") {
        return Math.abs(x-y);
    }
    else if (operator === "mult") {
        return x*y;
    }
    else if (operator === "div") {
        return x/y;
    }
    else {
        return 0;
    }
};
console.log(arithmetic(3,7,"add"));
console.log(arithmetic(4,5,"subtract"));
console.log(arithmetic(5,7,"mult"));
console.log(arithmetic(10,5,"div"));
console.log(arithmetic(3,6,"bagels"));
//7. Write a function that takes a string and a number, and returns the string repeated that many number of times.// 
//Test your function with various inputs.//
var repeatStuff = function(repeats, stuff) {
    var outPut = "";
    for(var i=0; i<repeats; i++) {
        outPut = outPut + " " + stuff;
}
return outPut;
}
console.log(repeatStuff(5,"Chinese Checkers"));
console.log(repeatStuff(7,"Magic Man"));
console.log(repeatStuff("super", "man"));
//8. Write a function that uses a for loop to print the numbers from 1 to 10 inclusively.//
var printTen = function() {
    for(var i=1; i<=10; i++) {
        console.log(i);
    }
}
printTen();