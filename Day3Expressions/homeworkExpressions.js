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

var weeks = 5;

var week1= 200;
var week2=210;
var week3=220;
var week4=230;
var week5=240;

var total= week1+week2+week3+week4+week5;
var average = total/weeks;
console.log("total amount spent " +total,"Average grocery bill over 5 weeks " + average);

// Discounts

var itemCost = 1000;
var discount = 20;
var discountPercent = discount / 100;
var salesTax =.05;

var discountOver = itemCost*discountPercent;
var noTax = itemCost-discountOver;


var Tax = noTax*salesTax;
var afterTax= Tax+noTax;

console.log ("Item cost "+ itemCost, "discount percentage "+discount,"with no sales tax "+noTax,"with sales tax "+afterTax);