
 /*
Brock West
Section 00
21JUL15
beer
 */

//alert("testing to see if this work!");

 // create a loop that will write out the lyrics for the 99 bottles of beer song

// for(initizialation; condition; increment of change){}

 for(var i=99; i>0;i--){
  //verify that the loop works
  //console.log(i);
  if(i===2) {
   console.log(i + " bottle of beer on the wall." + i + " bottle of beer. You take one down and pass it around. " + (i - 1) + " bottle of beer on the wall.");
   } else if (i===1){
   console.log(i + " bottle of beer on the wall." + i + " bottle of beer. You take one down and pass it around. " + (i - 1) + " bottle of beer on the wall.\n The End!");
  }

    else {
   console.log(i + " bottles of beer on the wall." + i + " bottles of beer. You take one down and pass it around. " + (i - 1) + " bottles of beer on the wall.");
   }
  }