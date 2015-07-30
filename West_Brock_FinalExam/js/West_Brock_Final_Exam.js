
 /*
Brock West
Section 00
30JUL15
Final Exam
 */

//alert("testing to see if this work!");

 // prompt the user for an item cost
var itemCost= prompt("How much does the item cost?");
 // validate user input is a number and not left blank
 while(isNaN(itemCost)||itemCost===""){
     // reprompt user if validation is wrong
     itemCost=prompt("Please only enter numbers and do not leave blank.\nHow much does the item cost?")
 }
// prompt the user for a discount percentage
var discount=prompt("What is the discount percentage?");
 //validate user input is a number between 0-100 and not left blank
 while(isNaN(discount)||discount===""||discount<0 ||discount>100){
     // reprompt user if validationg is wrong
     discount=prompt("Please only enter numbers between 0-100 and do not leave blank.\nWhat is the discount percentage?")
 }
 // calculate the discounted price using a function
 function discountedCost (c,d){
     // formula for the discount
     var discount= c*(d/100);
     // formula to calculate the discounted price
     var discountedPrice= c-discount;
     // return the discounted price to the code
     return discountedPrice;
 }
 // function call for discounted price and add arguements
 var results=discountedCost(itemCost,discount);
 // log to console final results
 console.log("The final cost of an item that cost $"+itemCost+" with a discount of "+discount+"% is $"+results);

 /* item cost- 100
 discount- 50
 discounted cost-50

 item cost-100
 discount-25
 discounted cost-75
  */

