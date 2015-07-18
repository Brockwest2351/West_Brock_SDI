
 /*
Brock West
Section 00
16JUL15
Conditionals Assignment
 */

//alert("testing to see if this work!");

// calculate if a customer can afford a dog on a payment plan for 12 months

 //see if the user is allowed to have a puppy or not based on age
 var age= prompt ("what is your age?");
 //validate user input
 if(isNaN(age)||age==="")
 //reprompt user
 age = prompt ("Please don't leave this blank and enter a number.What is your age?");

 var allowedPuppy= prompt ("Can you have a puppy where you live?\n Please type yes or no.");


 // validate user input
 if((allowedPuppy.toLowerCase()!="yes" && allowedPuppy.toLowerCase()!="no")||allowedPuppy==="") {
  //reprompt user
  allowedPuppy = prompt("Please enter yes or no and dont leave this blank. Can you have a puppy where you live?");
 }
 // log in my console if the user can have a puppy
 console.log(allowedPuppy+" allowed puppy");

 //determine the cost of the puppy
 var puppyCost = prompt ("How much does the puppy cost?");

 //validate the user input
 if (isNaN(puppyCost)|| puppyCost===""){
  //reprompt the user
   puppyCost= prompt ("Please don't leave this blank and enter a number.\n How much does the puppy cost?")
 }
 //log the puppy cost in the console
 console.log("the puppy cost "+puppyCost);

//determine if the user will pay in full for the puppy
 paidFull= prompt("Can you cover the full cost of the puppy now?\nPlease answer yes or no?");
 //validate the user input
 if((paidFull.toLowerCase()!="yes" && allowedPuppy.toLowerCase() !="no"||paidFull==="")) {
  //reprompt user
  paidFull= prompt ("Please enter yes or no. Can you cover the full cost of the puppy now?")
 }
 //log if the user will pay in full in the console
 console.log(paidFull+" paid in full");

//determine the users monthly budget for the puppy
 var monthlyBudget = prompt ("How much will your monthly budget allow you to pay for the puppy per month?");
 //validate the user input
 if (isNaN(monthlyBudget)|| monthlyBudget===""){
  //reprompt the user
  monthlyBudget=prompt ("Please only enter a number and don't leave this blank.\n How much does your monthly budget allow you to spend?")
 }
 //log the monthly budget in the console
console.log("your monthly budget is" + monthlyBudget);


 // calculate the user yearly budget
var yearlyBudget=monthlyBudget*12;

 //determine if the user will get the puppy

 // determine if the user is allowed the puppy in their living conditions
if(allowedPuppy.toLowerCase()==="no") {
// this code will run if they are allowed to have the puppy in their living conditions
 console.log("sorry but you can not buy the puppy,your living situation wont allow it")
} if (paidFull.toLowerCase()!= "yes") {
  //this code will run if they do not pay in full
  console.log("move on to financial decision, if your living situation and age allows it.");
 }
 if (puppyCost>yearlyBudget) {
  //this code will run if they can not afford to pay monthly for the puppy
  console.log("sorry you can not afford the puppy,you cant afford it");
 }
 //determine if they can pay monthly for the puppy
 else if( yearlyBudget>=puppyCost) {
  //this code will run if they can pay monthly for the puppy
  console.log("Yes you can buy the puppy, if your living situation and age allows it.");
 }
 else {
 //this code will run if they are not allowed to have the puppy in their living conditions
 console.log ("sorry but you can not buy the puppy, your living situation, financial situation or age wont allow it.");
}
 // determine if they are old enough to buy the puppy


 var oldenough=18;
 var oldEnough2=(age<=18)? "You are too young to buy the puppy.":"You are old enough to buy the puppy.";
 oldenough=(age>18)? "You are old enough to buy the puppy":"You are too young to buy the puppy";
