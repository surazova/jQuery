/* global $ */
//Lesson 15: Event Binding 

var myLis = $("#points-of-sale li");

myLis.on("click", function() {
   $(this).css({"background" : "pink"}); 
   
   myLis.off("click");
});

/* 

on() - binds an event to matched elements 
off() - unbinds event from matched elements 

*/ 