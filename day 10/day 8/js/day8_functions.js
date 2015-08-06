
 /*
Brock West
Section 00
23JUL15
Functions
 */
calcArea();
//alert("testing to see if this work!");

// basic function structure

// function functionName(){ Code to run}

 // create a function that will console.log something
printHello();

function printHello(){
 // This code will run when the function runs.
 console.log("This function is working.");
}

// create a function call that will start our print hello function
// go button to the factory
printHello();
 printMore();

printHello();

 // create a function that console.log a different string

 function printMore (){
  console.log("This is a different text");

 }
 //function call print more
 printMore();
 // create a function that calculates the area of a rectangle

 function calcArea(){
  // create variable for width height and area
  var width=20;
  var height= 30;
  var area= width*height;
  console.log("The area of a rectangle is "+area)
 }

calcArea();
