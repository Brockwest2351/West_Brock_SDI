
 /*
Brock West
Section 00
18JUL15
day 6 math class
 */

//alert("testing to see if this work!");

 //round () - normal rounding .5 and up rounds up and .499 and lower goes down

 var num1= 9.744;
 num1= Math.round(num1);
 console.log (num1);
 console.log(Math.round(num1));
 console.log(num1);
 // does not permantly change variable value
 // to permantly change the variable assign it back to the variable name

 //floor()- rounds down to nearest interger

 var num2=6.8;
 console.log(num2);
 console.log(Math.floor(num2));

//ceil ()- rounds up to the nearest interger
 var num3=4.8;
 console.log(num3);
 console.log(Math.ceil(num3));

 //random()- returns a number between 0 and almost 1
 var num4=Math.random();
 console.log(num4);

 // number between 0 and 10
 var num5= Math.random()*100;
 console.log(num5);

 // number between two other numbers NOT zero
 // Math.random()*(max-min)+min

 // number between 50 and 80
 var num6= Math.random()*(80-50)+50;
 console.log(num6);

 // an INTERGER between 100-1000
 var num7=Math.round(Math.random()*(1000-100)+100);
 console.log(num7);

 //.toFixed(x)- Rounds to decimal place- x decimal place
 var num8= 12.123456;
 console.log(num8);
 console.log(num8.toFixed(2));

 // math constants
 //pi-3.14159
 //Math.PI


 // circumfrence of a circle
 var radius=7
 var circleCumfre = 2*radius*Math.PI;
 console.log(circleCumfre);

