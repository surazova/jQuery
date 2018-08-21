/* global $ */
//Lesson 18: JQuery Event Object 

// * Universal selector
$(document).ready(function(){

    $("*").on("click", function(e){
        
        console.log(e.target);
        console.log("The event type is: " + e.type);
        console.log("X co-ordinate of the event is: " + e.pageX);
        console.log("Y co-ordinate of the event is: " + e.pageY);
       //X and Y is useful to see where users clicked on the page, might be helpful if you have a game
        e.stopProgation();
        
    });
});