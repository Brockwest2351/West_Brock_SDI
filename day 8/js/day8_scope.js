
 /*
Brock West
Section 00
23 JUL 15
function scope
 */

//alert("testing to see if this work!");

// variable scope
 // variables that are inside and outside of a function

// create a variable called width in our main code
 // this variable is scoped outside of the function to the main code

 var width=5;
 console.log("starting width is "+width);
 var changeMe=7;
 console.log("This starting value of change me is "+ changeMe);
 // create a function that calculates the perimeter of a rectangle

 function calcPeri (){
  // create variables for width and height and perimeter
  // try not to reuse variable names
  // but this is going to be impossible for larger files

  // this variable is scoped to the function calcPeri
  var width=10;
  console.log("width inside of function is "+width);
  var height=20;
  var perimeter=width*2+height*2
  // console.log the perimeter
  console.log("The perimeter is "+perimeter)
  // change the value of changeMe
  changeMe=15;
  console.log("Inside of the function changeMe is "+ changeMe)

 }
 console.log("before the function call width is "+width);
 console.log("before the function call changMe is "+changeMe);
 calcPeri();

 // createa a variable called changeMe
 // this will be scoped to the main code


 console.log("After the function call width is "+width);
 console.log("after the function call changeme is"+changeMe);

// this will not work main code can not see inside of function
 //console.log("the value of height is "+height);



