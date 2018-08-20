/* global $ */
//Lesson 13: Controlling CSS

console.log($("#social-nav").css("position")); //checks the value of a certain property already given to that element 
$("#social-nav").css("top", "200px").css("left", "100px"); //Chaining the values, but it gets messy. Another method is to pass an object 

$("#social-nav").css({
    "top" : "-400px",
    "left" : "150px",
    "opacity" : "0.5",
    "border-top" : "4px solid red"
});

