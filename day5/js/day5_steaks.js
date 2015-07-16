
 /*
Brock West
Section 00
16JUL15
conditionals for steaks
 */

//alert("testing to see if this work!");

//Test a steak temperature to see if it is done

 /*Extra-rare or Blue (bleu)	very red and cold		115–120 °F
  Rare (saignant)	cold red center; soft		120–130 °F
  Medium rare (à point)	warm red center; firmer		130–140 °F
  Medium (demi-anglais)	pink and firm		140–150 °F	145 °F and rest for at least 3 minutes
  Medium well (cuit)	small amount of pink in the center		150–160 °F
  Well done (bien cuit)	gray-brown throughout; firm	160 °F+	160 °F for ground beef
     */

 var steakTemp= prompt("what is the temperature in F of your steak?");

/* // validate to test for blank input
 if(steakTemp===""){
  // this code will run if the user leaves the prompt blank
  // reprompt the user
  steakTemp=prompt("Please do not leave blank.\nWhat is the tempature of your steak?")
 }

 //validate the user prompt

 if (isNaN(steakTemp)){
  // code will run if steakTemp is not a number
  //reprompt using the same var for the user
  steakTemp= prompt("please only type in numbers.\nwhat is the tempature in F of your steak?")
 }
*/

 //combine both validation questions
 if(isNaN(steakTemp)|| steakTemp===""){
  if(isNaN(steakTemp)){
   steakTemp=prompt("Please only use numbers.\n Enter steak temp in F:")

  } else steakTemp=prompt("Please do not leave blank.\n Enter steak temp in F:")

 }

 if(steakTemp<=115){
  console.log("This steak is raw, do not eat it!");
 }else if (steakTemp<=120){
  console.log("This steak is extra rare!");
 } else if(steakTemp<=130){
  console.log("This steak is rare!")
 } else if (steakTemp<=140)
 console.log("This steak is medium rare!");
 else if (steakTemp<=150){
  console.log("this steak is medium");
 }
 else if (steakTemp<=160){
  console.log("this steak is medium well");
 }
 else {
  console.log("This steak is well done");
 }

