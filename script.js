
/* global $ */
//Lesson 22: Sliding Elements 

$(document).ready(function() {
    
    $(".slide-button-up").on("click", function() {
        
        $("#lead-banner").slideup(100);
    });
    $(document).ready(function() {
    
    $(".slide-button-up").on("click", function() {
        
        $("#lead-banner").slidedown(4000, function() {
            alert("animation complete");
        });
    });

});

//Slide toggle is also a way that we can do this 
$(document).ready(function() {
    
    $(".slide-button-up").on("click", function() {
        
        $("#lead-banner").slideToggle(1000, function() {
            alert("animation complete");
        });
    });