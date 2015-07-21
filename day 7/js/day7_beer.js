
 /*
Brock West
Section 00
21JUL15
beer
 */

//alert("testing to see if this work!");

 // create a loop that will write out the lyrics for the 99 bottles of beer song

// for(initizialation; condition; increment of change){}


 var numBeers =prompt("how many beers on the wall");
 // validate user prompts
 while(isNaN(numBeers) || numBeers===""){
  if(isNaN(numBeers)){
   numBeers=prompt ("Please only type in numbers.\n how many beers are on your wall?")
  }else
  numBeers=prompt("Please do not leave blank.\n How many beers are on your wall.")
 }

 // cast the variable as a number
 numBeers=Number(numBeers);

 for(var i=numBeers; i>0;i--){
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
