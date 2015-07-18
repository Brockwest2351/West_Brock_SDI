
 /*
Brock West
Section 00
18JUL15
while loops
 */

//alert("testing to see if this work!");

 // intitialize a counter variable

 var counter=0;

 // while loop with condition
 // run as long as the condition is true
 while(counter<200){
  console.log("The current value is "+counter);
  // change the value of the counter variable
  counter+=5;
  // must change the value or you will loop forever

 }

 //do while loop
 // this loop will always run atleast one time before checking the condition

 /// create counting variable
 var i=20;

 do{
  //This code will always run at least once
  console.log("The value of I is "+i)
  //Increment of change
  i++;

 } while(i<10);
 console.log(i);