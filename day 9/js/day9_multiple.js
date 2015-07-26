
 /*
Brock West
Section 00
25JUL15
multiple
 */

//alert("testing to see if this work!");

 // create variables for height and width
 var height=8;
 var width=6;

 //create another variable for a base of a triangle
 var base=5;


 var resultsArea=calcArea(height,width);
 console.log(resultsArea);
 // create a function to calculate the perimeter of a rectangle

 var calcPeri=function(h,w){
  var periTotal=2*h+2*w;
  return periTotal;
 };

 var resultsPeri=calcPeri(height,width);
 console.log(resultsPeri);

 // create a function to calculate the area of a rectangle

 function calcArea (h,w) {
  var area = h * w;
  return area;
 }
 // create a procedure that will console.log the rectangle perimeter and area

 function printOut (p,a){
  console.log("The perimeter is "+p);
  console.log("the area of the rectangle is "+a)
 }

 //function call for printouts

 printOut(resultsPeri,resultsArea);

 //create a function to calculate the area of a triangle



 var userPrompt=prompt("would you like to calculate the area of a triangle?\nPlease answer yes or no");
 while(userPrompt.toLowerCase()!="yes" && userPrompt.toLowerCase()!="no"){
  userPrompt=prompt("Please only answer yes or no.\nWould you like to calculate the area of a triangle? ");
 }
 // conditional to see if we should run the anon function

 if(userPrompt.toLowerCase()==="yes") {
  var triArea = function (b, h) {
   var area = .5 * b * h;
   return area;
  };
    //function call triangle area
   var triAreaTotal=triArea(base,height);
   console.log(triAreaTotal);

 }





