
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


function calcArea (){
    // create variables
    // width=10;
     //height=20;
    var area=width*height;
    console.log("The area of the rectangle with the width of "+width+" and a height of "+height+" is "+area);

}
 calcArea();
 //change the variables
 width=50;
 height=10;

 calcArea();