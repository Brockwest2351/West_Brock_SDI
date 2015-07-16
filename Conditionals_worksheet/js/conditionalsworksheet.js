
 /*
Brock West
Section 00
14JUL15
conditionals
 */

//alert("testing to see if this work!");

// last stop for gas
var miles=200;

 var mpg= prompt ("how many miles per gallon does your car get?");
 console.log ("you get mpg "+mpg);

 var percentGas = percentGas/100
 var prompt= ("what percent is your gas gauge reading?");
 console.log ("you have percent gas left" +percentGas/100);

 var tankGallons = prompt ("how many gallons does your tank hold?");
 console.log ("your tank holds " +tankGallons+ "gallons");

 var milesPerTank;
 milesPerTank = mpg * tankGallons;
 console.log ("you get "+milesPerTank+ " miles per tank");

 var milesLeft =(milesPerTank*percentGas);
 console.log("you have "+milesLeft+" gas left in your tank");

 var gallonsLeft= (milesLeft/tankGallons);
 console.log("you have "+gallonsLeft+ " gallons left in your tank");

if (milesLeft>=200){
 console.log("You can make it!");}
 else {console.log("You only have "+gallonsLeft+" You better stop for gas while you can")
}

