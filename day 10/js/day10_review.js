
 /*
Brock West
Section 00
28 JUL 15
Review
 */

//alert("testing to see if this work!");

// figure out how much pizza cost per sq inch

// calculate how much pizza is per slice

// prompt the user for: radius of pizza, cost of pizza, # of slices

var pizzaRadius= prompt("Lets figure how much the pizza cost.\nWhat is the radius of the pizza?");
while(isNaN(pizzaRadius)||pizzaRadius===""){
    pizzaRadius=prompt("Please enter a number and do not leave blank.\nWhat is the radius of the pizza?");
}

var pizzaCost= prompt("How much does your pizza cost in total?");
 while(isNaN(pizzaCost)||pizzaCost===""){
     pizzaCost=prompt("Please enter a number and do not leave blank.\nPlease enter pizza cost?");
 }

var pizzaSlices= prompt("How many slices of pizza are there?");
 while(isNaN(pizzaSlices)||pizzaSlices===""){
     pizzaSlices=prompt("please enter a number and do not leave this blank\nPlease enter total number of slices?");
 }

 // create a function to calculate the area of pizza

function pizzaArea(r){
    // radius of circle r*r*PI
    var area= Math.pow(r,2)*Math.PI;
    return area;
}

//create a function that calculates a price per sq inch

function pizzaSqInchCost(p,a){
    // cost per inch= price/area
    var costPerInch= p/a;
    // since this is money round to two decimal places
    costPerInch=costPerInch.toFixed(2);
    return costPerInch;
}

 // create a function that calculates cost per slice

function costPerSlice (price,slice){
    var cost=price/slice;
    cost=cost.toFixed(2);
    return cost;

}

 
