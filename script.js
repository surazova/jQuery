/* global $ */
//Lesson 16: Event Helpers 


//Double click, the same way of saying .on (better to use .om for performance)
$("#lead-banner").dblclick(function(){
  alert("you clicked me");  
});

//Another method 
$("#lead-banner").dblclick(function(){
    alert("you clicked me");
    $("#lead banner").off("dblclick");
});
/* 

on() - binds an event to matched elements 
off() - unbinds event from matched elements 

*/