/* global $ */
//Lesson 14: Working with Classes 


$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper"); //> means directly under, the direct child under the header 


//Use Vanilla JS to toggle the button to open and close 
var button = $("#lead-banner a"); 

button[0].onclick = function() {
  $("#points-of-sale").toggleClass("open");
  return false; 
    
};

/* 

removeClass() - remves a class from the matched elements
addClass() - adds a class to the matched elements 
toggleClass - toggles the class on and off on their matched elements 
*/