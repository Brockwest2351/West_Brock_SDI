
 /*
Brock West
Section 00
21JUl15
zombies
 */

//alert("testing to see if this work!");

 // we have 1 zombie here at full sail
 // it can bite four people a day and turn them into zombies by the next day
 // the CDC wants to know how many zombies there will be in 8 days

 // create the givens

 // how many zombies we have
 var numZombies=1;

 // number of bites a zombie can make each day
 var numBites=4;

 // what is our timeline
 var days=8;

 /*for(var i=1;i<=days;i++){
  // how many people get infect everyday
  var infectedPeople = numZombies*numBites;

  // how many zombies will we have at the end of a day?
  numZombies+=infectedPeople;

  console.log("on day #"+i+" there will be "+numZombies+" zombies!");

 }
 */

 // CDC wants to know how many days it will take to make a million zombies

// var to count the number of days

 var numDays=1;

 while (numZombies<=1000000){
  // how many people get infect everyday
  var infectedPeople = numZombies*numBites;

  // how many zombies will we have at the end of a day?
  numZombies+=infectedPeople;

  // report out each day
  console.log("on day #"+numDays+" there will be "+numZombies+" zombies!");

  //increment the day
  numDays++;

 }

 console.log("it will take "+(numDays-1)+ " days to make a million zombies");