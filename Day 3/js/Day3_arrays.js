/*
Brock West
Section 00
11 Jul 15
Arrays
 */

//alert("day 3 arrays");

// Create a basic array
// Picking Oranges
var orangeBins = [30,500,10002];

//How many oranges did we pick?
var totalOranges = orangeBins [0] + orangeBins [1] + orangeBins [2];
console.log[totalOranges + " Oranges were picked in 3 days. "];

//Average number of oranges picked

var averageOranges = totalOranges/orangeBins.length;
console.log(" The average number of oranges picked is " + averageOranges);

// Length property of arrays
console.log(orangeBins.length);

// Create an array of avengers
var avengerNames = ["ironMan", "captainAmerica","hawkEye","incredibleHulk"];

console.log(avengerNames);

//access a specific item in the array

console.log(avengerNames[1]);

//Use a variable as an index number
var num = 2;
console.log (avengerNames[num]);

//set a specific item
avengerNames [3]= "Thor";

console.log(avengerNames);

//Add a new item in our array
avengerNames[4]="falcon";

console.log(avengerNames);

//add a new item again

avengerNames[avengerNames.length]="black widow";
console.log(avengerNames);

// create new array for fruits
var fruitArray = ["bannana","pear","peach","strawberry"];
console.log(fruitArray);

//push- method or a function of arrays
// adds it to the end of the array

fruitArray.push("pineapple");
console.log(fruitArray);
console.log (fruitArray[4]);

fruitArray.push("date");
console.log(fruitArray);

//pop method - removes the last item in the array and returns it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log (caught);

//splice - used for adding and removing items in an array
// splice (position, # of items to remove, items to put in)

fruitArray.splice(0,0,"lemon","cherry");
console.log(fruitArray);