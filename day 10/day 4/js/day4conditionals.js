/*
 Brock West
 Section 00
 14 JUL 15
 Conditionals
 */

//alert("testing to see if this work!");

// basic conditional if statement

// if (condition to test){code to run if true}

// create a boolean variable

var oldEnough = true;

// if the child is old enough, tell him he can ride the coaster
// else {this will run if the IF statement does not run}
if(oldEnough){
    //code inside of the {} will run if oldEnough is a boolean of true
    console.log("you can ride the coaster!!")
} else {
    // this code will run IF the IF block does not run
    // if old enough evaluates to a boolean of false
    console.log("sorry you are too young to ride.")
}

// relational expressions or operators
console.log("testing");
// test the kids height to see if he can ride the ride

var kidHeight = prompt("how tall are you in inches?");
var sneakerLift=2;
var minHeight=48

// if the child is 48 inches or taller they can ride the ride

if(kidHeight >=48){
    //code inside of here will run if child is 48 inches or taller
    console.log("congrats you are tall enough to ride the coaster!!");
} else if (Number(kidHeight)+sneakerLift >=minHeight){
    // this code will run if the child is tall enough while wearing sneakers
    console.log("you are tall enough to ride the coaster if you wear your sneaker!\n cheater!")
} else{
    console.log ("sorry you are too short");
}
