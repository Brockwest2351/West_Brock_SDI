
 /*
Brock West
Section 00
25JUL15
Functions Assignment
 */

//alert("testing to see if this work!");
// calculate the total and average touchdown passes over the last three games

// prompt the user
 var tdGame1=parseInt(prompt("we are going to calculate how many touchdowns you threw per game over 3 games.\nHow many touchdowns did you throw in game 1"));
// reprompt user
 while(isNaN(tdGame1) || tdGame1===""){
  if (isNaN(tdGame1)) {
   tdGame1 = parseInt( prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:"))
  }else{
   tdGame1= parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:"))
  }
 }
 // prompt user
 var tdGame2=parseInt(prompt("How many touchdowns did you throw in game 2?"));
 //reprompt user
 while(isNaN(tdGame2) || tdGame2===""){
  if (isNaN(tdGame2)) {
   tdGame2 = parseInt(prompt("Please enter a number.\nHow many touchdowns did you throw in game 2:"))
  }else{
   tdGame2= parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 2:"))
  }
 }
//prompt user
 var tdGame3=parseInt(prompt("How many touchdowns did you throw in game 3)"));
//reprompt user
 while(isNaN(tdGame3) || tdGame3===""){
  if (isNaN(tdGame3)) {
   tdGame3 =parseInt( prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:"))
  }else{
   tdGame3=parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:"))
  }
 }

// use an anon function to calculate the total touchdowns
 var calcTotalTD=function (game1,game2,game3){
  // create formula for total touchdowns
  var total= game1+game2+game3;
  //return total touchdowns
  return total;
 };
 // calculate the total touchdowns from the formula in the function
 var results= calcTotalTD(tdGame1,tdGame2,tdGame3);
 // log to console the total touchdowns
 console.log("the total touchdowns you threw is "+results);

// use a function to calculate the average touchdowns over the 3 games
function averageTD(game1,game2,game3){
 //create formula for the average touchdowns
 var average=(game1+game2+game3)/3;
 // return the average formula
 return average;
}
 // calculate the average touchdowns from the fomula in the function
 var results2=averageTD(tdGame1,tdGame2,tdGame3);
 //log to the console the average touchdowns
 console.log("the average touchdowns over 3 games is "+results2);

 // test: tdGame1=1 tdGame2=2 tdGame5=3 total=6 average=2