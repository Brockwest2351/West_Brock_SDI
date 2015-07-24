
 /*
Brock West
Section 00
23JUL15
returns
 */

//alert("testing to see if this work!");

 // create a function are aof the retangle

 function calcArea(w,h){
  var area=w*h;

  console.log("the area is "+area);

  //in order to use results in main code
  // use return "whatever you want to return";
  return area;

 }
// catch the returned value in a variable
 var results=calcArea(10,30);

 // access the area in main code
 console.log(results);

 // calculate w 40 and h 60

 var results2=calcArea(40,60);

 console.log(results2);

 // what is the total area of both rectangles

 var total=results+results2;
 console.log("The combined area of both is "+total);
