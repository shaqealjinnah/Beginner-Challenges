// Create a function that takes two agruments as functions and return their sum

function addition(num1, num2) {
   return num1 + num2
}

console.log(addition(7, 3))


// Create a function that converts hours into seconds

function hoursIntoSeconds(hour) {
    return hour * 60 * 60 + " seconds";
}

console.log(hoursIntoSeconds(24))


// Create a function that takes length and width of a rectangle and return it's perimeter.

function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
}

console.log(calcPerimeter(2,9))


// Calculate the Area of a Triangle

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}

console.log(calcTriangleArea(20, 20))


// Write a function that accepts a string and adds 'Frontend' onto the end of instance of it.

function appendFrontend(fruit) {
    return fruit + 'Frontend';
}

console.log(appendFrontend('Banana'))


// Given two number, return true if the sum of both numbers is greater than 100. Otherwise, return false.

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(91, 10))

// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(-2))


// Given a boolean (true or false), return the opposite boolean

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))


// Given ANY element, return true if it is NOT the number 0.

function isNotZero(number) {
    return number !== 0;
}

console.log(isNotZero(''))


// Given two numbers, return their remainder when divided by each other.

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(9, 8))


// Given two numbers, return true if the number is odd.

function isOdd(num) {
    return num % 2 === 1;
}

console.log(isOdd(15))


// If a number is even, return 1 otherwise return -1

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(12))


// Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED' ? true : false;
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

// Medium challenges