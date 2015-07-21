
 /*
Brock West
Section 00
21JUL15
loops array
 */

//alert("testing to see if this work!");

 // create an array of Scooby doo characters

 var scoobyGang = ["scooby","shaggy","Velma","Daphne"];
// push an array

 scoobyGang.push("fred");
 scoobyGang.push("Scooby Dum");
 scoobyGang.push ("Scrappy");


 // cycle through the array and tell each one of them they solved a case.

 console.log(scoobyGang.length);

 for (var i=0;i<scoobyGang.length;i++){
  console.log("You solved the case "+scoobyGang[i]);
 }

 // create an array of bills
 var bills=[50,10,5,20,10,40];

 // create a variable and define for total
 var total=0;
 // create a loop to add up all of our bills from dinner

 for (var j=0;j<bills.length;j++){

  // test to get each item in bills
  //console.log(bills[j])
  // only add up bills greater than or equal to  15

  if(bills[j]>=15){
  // add up the value of bills
   total+=bills[j];
  }

 }
 console.log("the total of your bills is $"+total)