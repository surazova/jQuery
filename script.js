/* global $ */
//Lesson 19: jQuery Animations 


//We can only animate properties that have a numerical value 
//We can't change the font color, etc. 
$(document).ready(function() {
    
    function complete() {
        alert("Animation Complete");
    }
    $("section > h2").on("click", function(){
      
      $(this).animate({"width" : "500px", "height" : "100px"}, 100, "linear", complete); //the 100 is the second parameter, tells you how fast to animate something. The third parameter, linear sets the swing of the animation. The fourth is a c
      //callback function, that fires when something is complete. 
    });
});

//Might be useful if you have a shopping website, you can animate the object to the cart and give an alert that the item was added 