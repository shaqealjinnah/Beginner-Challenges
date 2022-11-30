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
    return 2 * length + 2 * width
}

console.log(calcPerimeter(2,9))


// Calculate the Area of a Triangle

function calcTriangleArea(base, height) {
    return 0.5 * base * height
}

console.log(calcTriangleArea(20, 20))


// Write a function that accepts a string and adds 'Frontend' onto the end of instance of it.

function appendFrontend(fruit) {
    return fruit + 'Frontend'
}

console.log(appendFrontend('Banana'))


// Given two number, return true if the sum of both numbers is greater than 100. Otherwise, return false.

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(91, 10))

// Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))
