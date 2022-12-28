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

// Q1. Given two values, return the first one if it is false, otherwise return the second one.

function filterOutFalse(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalse(null, 500))


// Q2. Return the length of any given array

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([3]));


// Q3. Given an array, return the first element.

function lastElem(elem) {
    return elem[elem.length - 1];
}

console.log(lastElem(['dog', 'cat', 'tomato']))

// Q4. Find the sum of an array

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([1, 2, 3]));


// Q5. Given a number, add up all the numbers from one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.

function progressiveSum(num) {
    let sum = 0
    for (i = 1; i <= num; ++i) {
        sum = sum + i;
        console.log(i)
    }
    return sum;
}

console.log(progressiveSum(3));


// Q6. Given a number in hoursIntoSeconds, return the number in mm:ss format.

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds

}

console.log(calcTime(50))


// Q7. Given an array of numbers, return the largest number of that array

function getMax(numero) {
    let max = numero[0]
    for (i = 0; i < numero.length; i++) {
        console.log(i)
        if (numero[i] > max) {
            max = numero[i];
        }
    }
    return max;
}

console.log(getMax([12, 19, -20]))


// Q8. Given a string, return the reversed string

function reverseString(string) {
    let reverse = "";
    for (i = 0; i < string.length; ++i) {
        reverse = string[i] + reverse;
    }
    return reverse;
}

console.log(reverseString('abc'))


// Q9. Given an array of elements, return the same length array filled with 0's.

function convertToZeros(zero) {
    return zero.map(elem => 0);
}

console.log(convertToZeros([5, 100, -5]))


// Q10. Filter out all the apples

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["", [], 0, null, "0", 7]))

function filterOutFalsy(arr) {
    let truthyArray = []
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (!!arr[i] === true) {
            truthyArray.push(arr[i])
        }
    }
    return truthyArray;
}

console.log(filterOutFalsy(["", [], 0, null, "0", 7]))


// Q11. Given an array of values, filter out all the falsy values and only return the truthy values.

function filterOutTruthy(arr) {
    let falsyValue = []
    for (i = 0; i < arr.length; i++) {
        if (!!arr[i] === false) {
            falsyValue.push(arr[i])
        }
    }
    return falsyValue;
}

console.log(filterOutTruthy(["", [], 0, null, undefined, "0", 5]))


Q11. Given an array of values, filter out all the falsy values and only return the truthy values.
