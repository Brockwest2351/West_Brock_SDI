
 /*
Brock West
Section 00
14JUL15
conditionals
 */

//alert("testing to see if this work!");

// last stop for gas
var miles=200;
 var mpg;
 var mpg= prompt ("how many miles per gallon does your car get?");
 console.log ("you get mpg "+mpg);

 var percentGas;
 var percentGas = prompt ("what percent is your gas gauge reading?");
 console.log ("you have percent gas left" +percentGas/100);

 var tankGallons;
 var tankGallons = prompt ("how many gallons does your tank hold?");
 console.log ("your tank holds " +tankGallons);

 var milesPerTank= (mpg*=tankGallons);
 console.log ("you get "+milesPerTank+ "miles per tank");

 var milesLeft =(milesPerTank*=tankGallons)/percentGas;
 console.log("you have "+milesLeft+" miles left in your tank");

 var gallonsLeft= (milesLeft/tankGallons);
 console.log("you have "+gallonsLeft+ "gallons left in your tank");

 var currentGas=
 console.log ("you can go "+currentGas);

 if (milesPerTank>=200){
  console.log("You can make it without stopping for gas!")
 }else (milesPerTank<=200)
// username and password

 var username= prompt("what is your username?");
 var password= prompt("what is your password?");
 var correctUsername = ("brockwest");
 var correctPassword =("password");

 if (correctUsername + correctPassword){
  console.log("Welcome "+username);
 } else (correctUsername)(username);
 console.log("Username not found try again!");

// ticket price

var time=prompt ("what time are you attending the movie?");
var age = prompt ("what is your age");

var regularTicket= 12;
var ageDiscount=7;
var timeDiscount=-3;

 if (regularTicket) {
  console.log("the price of your ticket is 12");
 } else if(age>10<55);
