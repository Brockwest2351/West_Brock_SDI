
 /*
Brock West
Section 00
16JUL15
Nesting If Statements
 */

//alert("testing to see if this work!");
 // some decisions affect other decisions
 // if it is warm outside lets go to the beach
 //if it is not warm outside lets go to the movies

 // lets get temperature as a var

 var temp=76;
 var waterTemp=74;

 //test the temperature
 // warm is 80 and above

 if (temp>=80){
  console.log("go to the beach");
  // if the water is above 75 lets go swimming
  // if not lets get a tan
    if (waterTemp>75){
     console.log("lets go swimming")
    }else{
     console.log("get a tan")
    }
 } else {
  console.log("go to the movies");


//ask if kids are going with
  //.toLowercase()

  var kids = prompt("Are you bringing children?\nPlease type in yes or no.");
  //validate the kids prompt
  if(kids.toLowerCase()!="yes"&& kids.toLowerCase()!="no")
  //reprompt the user
  kids=prompt("Please only type in yes or no\nAre you brining children");


  console.log(kids.toLowerCase());
  //permantly changes the value

  //kids=kids.toLowerCase();
  console.log(kids);
  if(kids.toLowerCase()==="yes") {
   console.log("go see the minions movie!");
  }
   else{
    console.log("go see antman!");
   }

 }


