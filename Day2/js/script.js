/*
this is going to be a multi lined comment
Brock West
7-9-15
SDI Section 00
Day 2 Coding Basics
 */
alert("This is making sure our js file is connected!");

//This is asing lined comment
// Usually will describe what comes right after

/*
Multi-lined comment
Anything between the stars and slashes is ignored by the browsers
 */

//Alert- gives the user information but returns nothing to us
alert("Welcome to SDI");

//Console Logging information
console.log("This is the console. Learn to love it!");

// Declare a variable
// Start with keyword var
var whatever; //Declartion of a variable
//Define the variable
Whatever = 45;
// create a storage container = value ;

var a=2;


// Send variable calue to the console so we can see it

console.log(a);
// Change the value of a variable
a=6;
console.log(a);

// add 3 to the current value of a
a=a+3;
console.log(a);

//createa another variable
var B;
b=a+3
console.log(a);
console.log("The Value of b is" + b);

// simple math
// find our age

// create variable for year born
var yearBorn = 1991;
var age=2015-yearBorn-1;
console.log(age);

// Math!!!!

// +.-,*,/
// find area of a triangle
var width=8;
var height=7;
var areaTriangle = width*height*.5;
console.log (areaTriangle);

//Modulo - %
// Gives you the remainder

var remainder = 31%3;
console.log(remainder);

// find out if even or odd
// modulo by 2
var evenOrOdd= 66%2
console.log(evenOrOdd);
// 0 means even
// 1 means odd

//Assignment operators
/*
= assignment operators - "is"
++ Adds 1 to current value of the variable
-- Subtract 1 from current value of the variable
+=ADDIDITION ASSIGNMENT OPERATOR- adds the value after it to the current value
-= subtraction assignment operator- subtracts the value after it from current value
/=division operator- divides by current value
*= multiplacation assignment multiplies the following currnet value.
 */

var tester = 5;
tester++; // tester = tester +1
tester--; // tester = tester-1
tester +=3; // tester = + 3
tester -=6;  // tester = - 6
tester /= 3; // tester = / 3
tester *= 6 // tester = * 6
console.log(tester)

// order of operations
// pemdas
// parenthesis, exponents, multiply, divide, add, subtract

// find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

// add up all of them and divide by the number of them

var average= (quiz1+quiz2+quiz3)/3;
console.log(average)

// strings- text for coding
// must have matching " or '
// needed to separate variable names from standard text

var kermit = "light green";
var frogName = kermit;
console.log (frogName)

// double or single quotes
// escape characeter \ back slash
var phrase = ' I don\'t know.\nYou never know!';
console.log(phrase);

// \ in New Line Character

//Booleans- true or false
// light switches of programming
var yes = true;
var no= "false";
var notCorrect= false;

// A string of "false" is not equal to a boolean of false

// simple math problem
// find perimeter of a rectangle
var side1 = 7;
var length1= 6;
var perimeter= (side1*2)+(length1*2);
console.log(perimeter);
//Are the parenthesis needed

//Concatenation - Combining Texts
var firstName= "Kermit";
var lastName = " The frog";
var fullName= firstName +" "+ lastName;
console.log (fullName+" is the color "+kermit);

// Anytime you use + with text it changes everything to text
var d = "6";
var e = 7;
var combine = d + e;
console.log(combine);