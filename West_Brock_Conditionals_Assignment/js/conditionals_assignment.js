
 /*
Brock West
Section 00
16JUL15
Conditionals Assignment
 */

//alert("testing to see if this work!");

// calculate if a customer can afford a dog on a payment plan

 //see if the user is allowed to have a puppy or not based on age
 var age;



 var allowedPuppy= prompt ("Can you have a puppy where you live?\n Please type yes or no.");
 // validate user input
 if((allowedPuppy.toLowerCase()!="yes" && allowedPuppy.toLowerCase()!="no")||allowedPuppy==="") {
  //reprompt user
  allowedPuppy = prompt("Please enter yes or no and dont leave this blank. Can you have a puppy where you live?");

 }

 var oldEnough;
 var oldEnough2;





 //determine if the user will get the puppy

 // determine if the user is allowed the puppy in their living conditions
if(allowedPuppy.toLowerCase()==="no") {
// this code will run if they are allowed to have the puppy in their living conditions
 console.log("sorry but you can not buy the puppy,your living situation wont allow it")
} else {

     //determine the cost of the puppy
     var puppyCost = prompt ("How much does the puppy cost?");

     //validate the user input
     if (isNaN(puppyCost)|| puppyCost===""){
      //reprompt the user
      puppyCost= prompt ("Please don't leave this blank and enter a number.\n How much does the puppy cost?")
     }


    //determine if the user will pay in full for the puppy
     paidFull= prompt("Can you cover the full cost of the puppy now?\nPlease answer yes or no?");
     //validate the user input
     if((paidFull.toLowerCase()!="yes" && paidFull.toLowerCase() !="no"||paidFull==="")) {
      //reprompt user
      paidFull= prompt ("Please enter yes or no. Can you cover the full cost of the puppy now?")
     }



     // test to see if paid in full
     if (paidFull.toLowerCase()=== "yes") {
      //this code will run if they do not pay in full
      console.log("You can buy the puppy, if your living situation and age allows it.");
      // test the users age
      age = prompt("what is your age?");
      //validate user input
      if (isNaN(age) || age === "") {
       //reprompt user
       age = prompt("Please don't leave this blank and enter a number.What is your age?");
      }
      // use a ternary to validate if the user is old enough to buy the puppy
      oldEnough = 18;
      // if the user is over 18 than you are old enough to buy the puppy will run if not old enough the you are too young will run
      oldEnough2 = (age < 18) ? "You are too young to buy the puppy." : "You are old enough to buy the puppy.";
      // log if the user is old enough
      console.log(oldEnough2);
     }
     // if they cant pay in full and are old enough it will move to else
      else {
      // if not true else statement will run
      console.log(" move on to monthly payment plan.");
     // ask monthly budget
      var monthlyBudget = prompt("What is your monthly budget?");
      if (isNaN(monthlyBudget) || monthlyBudget === "") {
       // reprompt the user
       monthlyBudget = prompt("Please enter a number and dont leave this blank.\nWhat is your monthly budget");
      }
      var monthsPayment = prompt("How many months would you like to pay?");
      if(isNaN(monthsPayment)|| monthsPayment===""){
        //reprompt the user
        monthsPayment= prompt ("Please enter a number and dont leave this blank.\n How many months would like to pay? ")
       }
      // calculate yearly budget
      var Budget = monthlyBudget * monthsPayment;
      if(Budget>puppyCost) {
       console.log("You can buy the puppy.");

       age = prompt("What is your age?");
       if (isNaN(age) || age === "") {
        //reprompt user
        age = prompt("Please enter a number and dont leave this blank.\nWhat is your age?")

       }
       oldEnough = 18;
       oldEnough2 = (age < 18) ? "You are too young to buy the puppy." : "You are old enough to buy the puppy.";
       console.log(oldEnough2);

       // calculate if they can afford the puppy on a 12 month plan
      } else if (paidFull.toLowerCase()==="no" && Budget<puppyCost) {
       console.log("Sorry you can't buy the puppy.");
       // ask age of the user

     }

 }
}
// test
 // allowedPuppy yes
 // puppyCost 1000
 // paidFull no
 // monthlyBudget 100
 // age 18
 // console "move on to monthly payment plan." "you can buy the puppy"


