
 /*
Brock West
Section 00
21JUL15
Array Loop Worksheet
 */

//alert("testing to see if this work!");

 //

 var pointsGame1 = parseInt(prompt("How many points did you score in game 1?"));
 while(isNaN(pointsGame1)|| pointsGame1===""){
pointsGame1= parseInt(prompt ("Please dont leave this blank and only enter a number.\nHow many points did you score in game 1?"));
 }
 var pointsGame2 = parseInt(prompt("How many points did you score in game 2 "));
 while(isNaN(pointsGame2)||pointsGame2===""){
  pointsGame2= parseInt(prompt("Please dont leave this blank and only enter a number.\n How Many points did you score in game 2?"));
 }

 var pointsGame3= parseInt(prompt("How many points did you score in game3"));
 while(isNaN(pointsGame3)|| pointsGame3===""){
  pointsGame3= parseInt(prompt("Please dont leave this blank and only enter a number.\n How many points did you score in game 3"));
 }

 pointsScored=[pointsGame1,pointsGame2,pointsGame3];
 total=0;

for (var i=0;i<pointsScored.length;i++){
 if (pointsScored[i]>10){
  total+=pointsScored[i];
 }
}

 console.log("The total number of points you scored is that are greater than 10 equals "+total);