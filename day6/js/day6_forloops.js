
 /*
Brock West
Section 00
18JUL15
for loops
 */

//alert("testing to see if this work!");

// basic for loop
 // for (intialize counter; condition; increment of change)

for (var i=10;i>0;i--){
 console.log("the value of I is "+i);
}


 // breaks - if this command is run, your loop will stop

for(var j=-10; j<5;j--){
 console.log("the value of J is "+j);

 // if the value of j is 3 stop my loop
 if(j<-10000){
  break;
 }
}
 