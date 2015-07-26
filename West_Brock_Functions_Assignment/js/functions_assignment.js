
 /*
Brock West
Section 00
25JUL15
Functions Assignment
 */

//alert("testing to see if this work!");


 var touchdownPasses;

 var tdGame1=prompt("we are going to calculate how many touchdowns you threw per game over 3 games.\nHow many touchdowns did you throw in game 1)")
 while(isNaN()||tdGame1===""){
  if (isNaN(tdGame1)) {
   tdGame1 = prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:")
  }else{
   tdGame1=prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:")
  }
 }
 var tdGame2=prompt("How many touchdowns did you throw in game 2?");
 while(isNaN()||tdGame2===""){
  if (isNaN(tdGame2)) {
   tdGame2 = prompt("Please enter a number.\nHow many touchdowns did you throw in game 2:")
  }else{
   tdGame2=prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 2:")
  }
 }

 var tdGame3=prompt("How many touchdowns did you throw in game 3)");
 while(isNaN()||tdGame3===""){
  if (isNaN(tdGame3)) {
   tdGame3 = prompt("Please enter a number.\nHow many touchdowns did you throw in game 1:")
  }else{
   tdGame3=prompt("Please do not leave blank.\nHow many touchdowns did you throw in game 1:")
  }
 }



