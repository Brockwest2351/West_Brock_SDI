
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
pizzaRadius=Number(pizzaRadius);

var pizzaCost= prompt("How much does your pizza cost in total?");
 while(isNaN(pizzaCost)||pizzaCost===""){
     pizzaCost=prompt("Please enter a number and do not leave blank.\nPlease enter pizza cost?");
 }
pizzaCost=Number(pizzaCost);

var pizzaSlices= prompt("How many slices of pizza are there?");
 while(isNaN(pizzaSlices)||pizzaSlices===""){
     pizzaSlices=prompt("please enter a number and do not leave this blank\nPlease enter total number of slices?");
 }
pizzaSlices=Number(pizzaSlices);



 // create a function to calculate the area of pizza

function pizzaArea1(r){
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
// create a function that launches all of the other functions
 function masterPizza(rad,cost,slices){
     var pizzaArea= pizzaArea1(rad);

     var sqInchCost= pizzaSqInchCost(cost,pizzaArea);

     var slicePrice=costPerSlice(slices,cost);

     return[sqInchCost,slicePrice]
 }


// function call to the master function
 var master= masterPizza(pizzaRadius,pizzaCost,pizzaSlices);


// print out results

 console.log("Your cost $"+master[0]+"per sq inch of pizza or $"+master[1]+"per slice");



