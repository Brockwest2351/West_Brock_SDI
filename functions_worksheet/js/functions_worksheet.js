
 /*
Brock West
Section 00
23JUL15
funtion worksheet
 */

//alert("testing to see if this work!");

//calculate the circumference of a circle

 // ask the user for the input of the radius
var radius= parseInt(prompt("Lets calculate the circumference of a circle.\nWhat is the radius of the circle?"));
 // validate the prompt
 while(isNaN(radius)||radius===""){
  radius=prompt("Please enter a number and do not leave this blank\nWhat is the radius of the circle?");
// set variable for 2nd calculation of 2nd circle radius
  var calc2=10;

 }
 //run a function for calculation of circumference
function calcCircumference(radius){
 //perform the calculation
var calcCirc = 2*radius*3.14;
 return calcCirc;
 //log the to the console
}
 var circumference=calcCircumference(radius);
// log to console the circumfrence of circle 1
 console.log("The circumference of the circle is with the radius of "+radius+" is "+circumference);
// set variable for 2nd circle
 var results=calcCircumference(calc2);
// calculate the total of circle 1 and circle 2
 var total=circumference+results;
// log to console the total of circle 1 and circle 2
 console.log("The total of the circumfrence with the radius "+radius+" and a radius of "+calc2+" is "+total);

 // calculate how many bee stings it will take for a victim to die

 var victimWeight=parseInt(prompt("Lets calculate the number of bee stings it will take to kill an animal\nWhat is the victims weight?"));
 // validate user prompt
 while(isNaN(victimWeight)||victimWeight===""){
  //reprompt user
  vitcimWeight=("Please dont leave this blank and only enter numbers.\nWhat is the victims weight?");
  // set variable for 2nd weight
  victim2=100;
 }
// perform calculation to figure out number of bees
 function beeStings(victimweight){
 var bees=victimweight*8.66666667;
  return bees;
 }

var numBees= beeStings(victimWeight);
 // log to console how many bees it will take
 console.log("The total number of bees it will take to kill a victim that weighs "+victimWeight+"lb is "+numBees);

 // set a variable for number of bees it will take for victim 2
 var results=beeStings(victim2);

 // calculate a total for victim 2 and victim 1
 var total2=numBees+results;
 // log to console the total
 console.log("The total number of bees it will take to kill a victim that weighs "+victimWeight+"lb and a victim that weighs "+victim2+"lb is "+total2)


