
 /*
Brock West
Section 00
25JUL15
Functions Assignment
 */

//alert("testing to see if this work!");


 var touchdownPasses;

 var tdGame1=parseInt(prompt("we are going to calculate how many touchdowns you threw per game over 3 games.\nHow many touchdowns did you throw in game 1"));
 while(isNaN(tdGame1) || tdGame1===""){
  if (isNaN(tdGame1)) {
   tdGame1 = parseInt( prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:"))
  }else{
   tdGame1= parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:"))
  }
 }
 var tdGame2=parseInt(prompt("How many touchdowns did you throw in game 2?"));
 while(isNaN(tdGame2) || tdGame2===""){
  if (isNaN(tdGame2)) {
   tdGame2 = parseInt(prompt("Please enter a number.\nHow many touchdowns did you throw in game 2:"))
  }else{
   tdGame2= parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 2:"))
  }
 }

 var tdGame3=parseInt(prompt("How many touchdowns did you throw in game 3)"));
 while(isNaN(tdGame3) || tdGame3===""){
  if (isNaN(tdGame3)) {
   tdGame3 =parseInt( prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:"))
  }else{
   tdGame3=parseInt(prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:"))
  }
 }


 var calcTotalTD=function (game1,game2,game3){
  var total= game1+game2+game3;
  return total;
 };
 var results= calcTotalTD(tdGame1,tdGame2,tdGame3);
 console.log("the total touchdowns you threw is "+results);


function averageTD(game1,game2,game3){
 var average=(game1+game2+game3)/3;
 return average;
}
 var results2=averageTD(tdGame1,tdGame2,tdGame3);
 console.log("the average touchdowns over 3 games is "+results2);