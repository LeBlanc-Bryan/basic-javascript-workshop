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
//9.Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, but as words ("one", "two", …).//
//As an extra challenge, try to find a solution that does not use an if/else//
var wordNums = ["one","two","three" ,"four","five","six","seven","eight","nine","ten"]
var printTenAgain = function() {
    for(var i=0; i<=9; i++) {
        console.log(wordNums[i]);
    }
}
printTenAgain();
//10. Write a function that uses a for loop to print the numbers from 1 to 10 inclusively,//
//but for each number, print it that many number of times.//
var numberTimes = function() {
    for (var i=1;i<=10;i++) {
        for (var j=1;j<=i;j++) {
            console.log(i);
        }
    }
}
numberTimes();
//11. Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function//
//the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.//
var reverso = function(word) {
    var Switch = "";
    for (var i=(word.length-1);i>=0;i--) {
        Switch = Switch + word[i];
    }
    console.log(Switch);
}
reverso("bizarro");
reverso("");
reverso("flame");
//12. Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1.//
//The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.//
var factorial = function(x) {
    if( x < 0 ) {
        return undefined;
    }
    else {
    }
    var multi = 1;
    for(var i=x; i>=1;i--) {
        multi = multi * i;
    }
    return multi;
}
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(13));
console.log(factorial(-20));