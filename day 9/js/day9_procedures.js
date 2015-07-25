
 /*
Brock West
Section 00
25JUL15
procedures
 */

//alert("testing to see if this work!");

// This is a normal function

function calcArea(w,h){
 var area=w*h;
 return area;
}
 //function call to calcArea
 // catch the return value

 var results1= calcArea(10,20);

 console.log("the area is "+results1)

 // this is a procedure
 // a list of steps to do
 // returns nothing

function calcPeri(w,h){
 var peri=2*w+2*h;
 console.log(peri)
}
 //function call for our procedure
 // does not catch anything!
 calcPeri(10,20);
