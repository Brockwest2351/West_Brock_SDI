/*
Brock West
Section 00
11 Jul 15
Expressions
 */

//alert("testing to see if this work!");

// calculating my basketball shooting percentage over 5 games

var gameOneAttempts= prompt (" Let's calculate your shooting average over the last 3 basketball games.\nHow many shooting attempts did you have for game one? ");
console.log (gameOneAttempts);

var gameOneMade= prompt (" How many shots did you make in game one?");
console.log (gameOneMade);

var gameTwoAttempts= prompt (" How many shots did you attempt in game two? ");
console.log (gameTwoAttempts);

var gameTwoMade= prompt (" How many shots did you make in game two? ");
console.log (gameTwoMade);

var gameThreeAttempts= prompt (" How many shots did you attempt in game three? ");
console.log (gameThreeAttempts);

var gameThreeMade= prompt (" How many shots did you make in game three? ");
console.log (gameThreeMade);

// adding shots attempted over all three games

var totalAttempted= (Number (gameOneAttempts)+ Number (gameTwoAttempts)+ Number (gameThreeAttempts));
alert (" total shots attempted over 3 games " + totalAttempted);

var totalMade =(Number (gameOneMade)+ Number (gameTwoMade)+ Number (gameThreeMade))
alert ("total shots made over 3 games" + totalMade)