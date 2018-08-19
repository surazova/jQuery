/* global $ */
//Lesson 10: Wrap and Unwrap elements using jQuery

//$("section").wrap("<div>");
//$("section").unwrap();
//$("section").wrapAll("<div>");


/*
wrap() - wraps all matched elements individually 
unwrap() - unwraps all matched elements 
wrapAll() - wraps all elements combined with 1 single element 
*/

//Examples 

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

//Vanilla JS
button[0].onclick = function() {
    
    if(wrapped){
        $("section").unwrap();
        wrapped = false; 
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrap");
    }
};

//You can use this to make a video full screen on your website. 