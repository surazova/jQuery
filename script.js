/* global $ */
//lesson 7 

//next
$("#contact-methods").next().css({border: "3px solid red"});

//previous
$("#social-nav").prev().css({border: "3px solid blue"}); //Makes the map image border blue 

//parent
$(".banner-title").parent().css({border: "3px solid pink"}); //Grabs and element and grabs its parent
                                                            //You can add "parents" to make it plural and affect all the parents of that element

//children
$("#social-nav").children().css({border: "3px solid green"});

//find 
$("#contact").find(".facebook").css({border: "3px solid purple"}); //if facebook exists there, bring it 

//closest
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});