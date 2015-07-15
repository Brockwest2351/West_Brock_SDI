
 /*
Brock West
Section 00
14JUL15
conditionals
 */

//alert("testing to see if this work!");

// last stop for gas
var miles=200
 var mpg;
 var mpg= prompt ("how many miles per gallon does your car get?");
 console.log (mpg);

 var percentGas;
 var percentGas = prompt ("what percent is your gas gauge reading?");
 console.log (percentGas);

 var tankGallons;
 var tankGallons = prompt ("how many gallons does your tank hold?");
 console.log (tankGallons);

 var milesPerTank= mpg*=tankGallons;
 console.log (milesPerTank);

 if (milesPerTank>=200 && percentGas>= 50){
  console.log("You can make it without stopping for gas!")
 } else if (milesPerTank>200 && percentGas<=100){
  console.log ("you only have "+mpg+" of gas in your car you better stop for gas");
 }




