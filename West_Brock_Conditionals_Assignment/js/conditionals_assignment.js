
 /*
Brock West
Section 00
16JUL15
Conditionals Assignment
 */

//alert("testing to see if this work!");

// calculate if you can afford a dog on a payment plan up to 12 months

 var allowedPuppy= prompt ("Can you have a puppy where you live?\n Please type yes or no.");

 // validate user input
 if(allowedPuppy.toLowerCase()!="yes" && allowedPuppy.toLowerCase()!="no") {
  //reprompt user
  allowedPuppy = prompt("Please enter yes or no. Can you have a puppy where you live?");
 }


 var puppyCost = prompt ("How much does the puppy cost?");

 //validate the user input
 if (isNaN(puppyCost)|| puppyCost===""){
  //reprompt the user
   puppyCost= prompt ("Please don't leave this blank and enter a number.\n How much does the puppy cost?")
 }

 var monthlyBudget = prompt ("How much your monthly budget allow you to spend?");
 if (isNaN(monthlyBudget)|| monthlyBudget===""){
  //reprompt the user
  monthlyBudget=prompt ("Please only enter a number and don't leave this blank.\n How much does your monthly budget allow you to spend?")
 }


var months = prompt ("How many months will you need to pay off the puppy?\n Please enter a number between 0-12");
 console.log("Months is "+months);
 if ((months<=0 || months>12)||(isNaN(months)||months==="")) {
  //reprompt the user
  months = prompt("Please only enter a number between 0 and 12.\n How many months will you need to pay off the puppy?");
 }

var monthlyPayment= puppyCost/months
 
