
 /*
Brock West
Section 00
25JUl15
anonymous functions
 */

//alert("testing to see if this work!");

// basic anonymous function
// var functionName = function(){};

// extremely popular in JS and Jquery
// important in object oriented programming
// for now it is a matter of style choice between anon and regular functions.

// create an anon function to calculate the area of a triangle

var triArea = function(b,h){
 var area=.5*b*h;
 return area;

};

 // function call for anon function
 // function call must be after the definition
 var results=triArea(10,20);
 console.log(results);

