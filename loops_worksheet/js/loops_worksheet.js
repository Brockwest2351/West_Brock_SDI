
 /*
Brock West
Section 00
20JUL15
Loops Worksheet
 */

//alert("testing to see if this work!");

 // calculate how many days until your next game


 var nextGame= prompt ("when in your next game? ");
 while(isNaN(nextGame)||nextGame===""){
  nextGame=prompt ("Please enter a number and do not leave this blank.\nWhen is your next game.")
 }

for (var i=0;i<nextGame;i++){

 } console.log ("your next game is in "+nextGame+ " days.");

 var playNext= prompt ("will you play next game?");
 while(playNext.toLowerCase()!=yes||playNext.toLowerCase()!=no){
  playNext=prompt ("Please only enter yes or no.\nWill you play next game?")
 }

 if(playNext === " no"){
  console.log(" Have a great day.")
 } else {




  // if your points scored is greater or equal to 10 you can start next game
  var pointsScored = prompt("How many points did you score in your last game?");
  while (isNaN(pointsScored) || pointsScored === "") {
   pointsScored = prompt("Please only enter a number and do not leave this blank. How many points did you score in your last game.");
  }
  do {
   console.log("you scored " + pointsScored)
  }
  while (pointsScored <= 10)
  {
   console.log("You wont start next game.");
   pointsScored++;
  }
 }




