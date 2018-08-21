/* global $ */
//Lesson 20: Fading Elements in and out 

$(document).ready(function(){
    
    $("section > h2").on("click", function() {
        
        $(this).animate({"opacity" : "0.5"});
    });
});

//The above method works, but ther eis a better one. 
$(document).ready(function(){
    
    $("section > h2").on("click", function() {
        
        $(this).fadeOut(2000).fadeIn(500);
    });
});

//A more specific way below: 
$(document).ready(function(){
    
    $("section > h2").on("click", function() {
        
        $(this).fadeTo(200, 0.2)
                .fadeTo(200, 0.8) //time and opacity, a value between 0 and 1
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.8)
                .fadeTo(200, 0.8);
        
        
    });
});