
/* global $ */
//Lesson 21: Show, Hide, and Toggle 


//Hides and shows the section/button based on the time parameter that you set 
$(document).ready(function(){
    $("section > h2").on("click", function() {
        
        $(this).hide(1000).show(1000);
    });
});

//A more specific method is below. Does the show and hide functionality, depending on the state that it is in
$(document).ready(function(){
    $("img[alt-map]").on("click", function() {
        
        $("section > h2").toggle(1000);
    });
});