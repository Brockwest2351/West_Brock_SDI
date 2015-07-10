/**
 * Brock West
 * 7/9/15
 *SDI
 *  00
 *  Expressions
 */

//Slices of Pie

// slices of pizza
var slices = 7;
// number of people
var people = 9;
// number of pizzas
var pizzas = 6;

// number of slices ate per persons
var spp = slices*pizzas/people;

console.log ("slices ate per person "+ spp);

// number of pieces sparky will get

var sparky = pizzas*slices%people;

console.log ("slices sparky ate " + sparky);

//Average shopping bill

// Total amount spent 1000

var total = 1000;
var weeks = 5;
var average = total/weeks;

console.log("Average grocery bill over 5 weeks" average);