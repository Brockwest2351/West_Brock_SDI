
 /*
Brock West
Section 00
14 JUL 15
Logical Operators
 */

//alert("testing to see if this work!");

 //check price of an item. scooter

 var scooterCost = 1000;
 var budget = 800;
 var paycheck = 500;

//if the price of the scooter is less than our budget than we can buy it

 // and if our paycheck is over 400;

 if(scooterCost<budget){
  console.log("we can buy the scooter");
 } else {
  console.log("the cost is too high for our budget");
 }

 if (paycheck>400){
  console.log("we can buy the scooter!")
 } else{
  console.log ("our paycheck is too small to buy the scooter")
 }

 // use the and logical operator to test both conditions at one time

 if(scooterCost<budget && paycheck>400){
  console.log("both the scooter is in our budget and the paycheck is high enough")
 } else {
  console.log("sorry you can not buy the scooter")
 }

 // OR logial operator
 // Either one must be true in order to be true.

 // If the scooter is less than or equal too our budget or if we won the lottery than we can buy the scooter

 var wonLottery = false;

 if(scooterCost<=budget || wonLottery){
console.log ("you have enough money to buy the scooter or you won the lottery!")
 } else{
  console.log ("you dont have enough money to buy the scooter and you didnt win the lottery sorry no scooter for you\n keep playing the lottery")
 }
