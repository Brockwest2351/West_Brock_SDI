
 /*
Brock West
Section 00
18JUL15
validation prompts with loops
 */

//alert("testing to see if this work!");

 // isNaN(item to test)
 //true if not a number
 //false if it is a number

 // to test blank we test (item ==="")

 // to test text strings
 // (item.toLowerCase (!="yes") && item.toLowerCase (item != "no")

 // for validation we use a while loop

 // use a while loop because we dont know how many times the user will get it wrong

 // Ask the user for a number
 var userNum= prompt("Please enter a number.");
 // directly after we enter the prompt validate for that prompt
 while(isNaN(userNum) || userNum===""){
  //repromt the user
  userNum=prompt("Please only user numbers and dont leave blank.\nPlease type in a number.")

 }
console.log("After the while loop.");

 // ask the user for either red or black

 var color= prompt("Please choose red or black:");
 while(color.toLowerCase()!="red"&& color.toLowerCase()!= "black"){
  // reprompt the user using same variable
  color=prompt ("Please only type in red or black")
 }