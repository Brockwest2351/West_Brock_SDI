
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

 var max=prompt("What is the maximum value:");
 while((isNaN(max)|| max==="") || max<=min){
   if(isNaN(max)) {
    max = prompt("Please enter a number\NWhat is the maximum value:")
   }else if(max<=min && min!=""){
    max=prompt("Please make sure the max value is greater than the min value of "+min+".\nWhat is the maximum value:")
   }
   else{
    max=prompt("Please do not leave blank.\nWhat is the max value:")
   }

 }

 max=Number(max);

 // test to check values of max and min
 console.log("The min value is "+min);
 console.log("The max value is "+max);

 //15 random numbes to prit the console.log
 for(var i=0;i<15;i++){
  var tempNum=randomizer(min,max);
  console.log(tempNum);
 }




 // function call
 var results1=randomizer(min,max);
console.log("your random number is "+results1);

 // create a random function
 function randomizer(mn,mx){
  // generate the random number
  var randomNum= Math.round(Math.random()*(mx-mn)+mn);
  //console.log(randomNum)
  // return random number to the main code

  return randomNum;

 }
