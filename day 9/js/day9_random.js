
 /*
Brock West
Section 00
25JUL15
Random
 */

//alert("testing to see if this work!");

 // create a function that will take a user prompted max and min value and return a random number between them.

 // create a variable for the min value

 var min=prompt("We are going to find a random number between two values\nWhat is the minimum value:");
 // validate that prompt
 while(isNaN(min)||min==="") {
  if (isNaN(min)) {
   min = prompt("Please enter a number.\nWhat is the minimum value:")
  }else{
   min=prompt("Please do not leave blank.\nWhat is the min value:")
  }
 }

// parseINT or number cast after the prompt

 min=Number(min);
 