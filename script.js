
/* global $ */
//Lesson 24: Sliding Animation Example

$(document).ready(function() {
    
    var items = $("#points of sale li");
    
    items.on("click", function() {
        $(this).find("p").slideToggle(500);
    });
});
 