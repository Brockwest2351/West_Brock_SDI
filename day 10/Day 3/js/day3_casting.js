
 /*
Brock West
Section 00
11 Jul 15
Casting
 */

//alert("testing to see if this work!");

// casting variables means tereating one variable like another

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log (results);

 //Number() - treats what is inside of () like a number if possible

 var castingResult = 7 + Number(stringVar);
 console.log(castingResult);

 //Cast Numbers as strings
 // String()
 var areaCode =407;
 var prefix = 555;
 var lineNumber= 1234;

 var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
 console.log ( phoneNumber);

 //all prompt () return text strings!!!

 var videoGamesCurrent = prompt ("How many video games do you currently own? ");
 var gamesBought = prompt("How many games did you buy today? ");

 var totalGames= Number(videoGamesCurrent)+Number(gamesBought);
 console.log(totalGames);

 //parsing intergers
 // looks through text string and returns the first interger
 // the first character in the text string must be the number
 // spaces arent counted
 // if it can not convert it, than it returns Nan- NOT A NUMBER
 var a = parseInt("40.88 years old");
 console.log(a);

 var b = parseInt("he is 40 years old");
 console.log(b);

 var c = Number("40 years old");
 console.log(c);


var d = parseFloat("40.67 years old");
console.log(d);

// parseFloat allows for decimal places INT does not



