
 /*
Brock West
Section 00
14JUL15
ternary
 */

//alert("testing to see if this work!");

 // see if your gpa is high enough to graduate

 var gpa = 2;

 // if your gpa is over 2.0 then you can graduate

 if (gpa>2){
  console.log ("you can graduate")
 } else {
  console.log("sorry your gpa is too low")
 }

 //convert this to a ternary

 //(condition to test)? true code : false code;

 (gpa>2)? console.log("graduate"): console.log("sorry you dont graduate");

 // test kids age verse what book they should read

 // if the kid is under 10 then they can read green eggs and ham otherwise they read the time machine

 var kidsAge = 6;

 var book;
var book2 = (kidsAge<=10)? "green ages and ham": "time machine";
 console.log(book2);
 book= (kidsAge>10)? "the time machine": "green ages and ham";
 console.log ("Your kid should read "+ book);

