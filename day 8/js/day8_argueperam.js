
 /*
Brock West
Section 00
25JUL15
arguements and perameters
 */

//alert("testing to see if this work!");

 // arguements-goes in the function call -"specific values"
 // parameters- goes in the function defition "catch the agruements"

 //create variables for width and height
 var width=10;
 var height=20;

 // create a function to calculate the area of a rectangle


function calcArea (w,h){
    // create variables
     //width=10;
     //height=20;
    var area=w*h;
    console.log("The area of the rectangle with the width of "+w+" and a height of "+h+" is "+area);

}
 calcArea(width,height);



 calcArea(6,7);

 // lets ask the user

 var userWidth=prompt("Lets calculate the area of a rectangle\n What is the width of the rectangle?");

 // validate & number cast input

 var userHeight=prompt("Please enter a height?");

 calcArea(userWidth,userHeight);

 // create a function that will calculate dog years

 function dogYears(humanAge){
     // input a human year and spit out a dog year
     // human age times 7 gives dog age

     var dogAge=humanAge*7;
     // print out the results
     console.log("a dog who is "+humanAge+" is "+dogAge+" in dog years.")

 }


 //calculate how old a 4 year old dog is

 dogYears(4);

 //calculate a 7 year dog

 dogYears(7);

 //prompt the user for their dog age
 var userDog = prompt("Lets calculate your dogs age in dog years.\nHow old is your dog in human years.");

// validate and cast if needed

 dogYears(userDog);