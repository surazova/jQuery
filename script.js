/* global $ */
//lesson 8: Chaining using the "dot" sequence

$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

//closest goes up the DOM to find the closest section 
//All of the statements are grouped together
//Disclamer: can get messy 
//Another way to organize: 
$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});
