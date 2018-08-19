Lesson 4: 
-almost every jQuery statement starts with a $ sign 
-example: document.getElementById("main-heading");   <--regular JS
            $("#main-heading");                       <--jQuery 
-(instructions in the Console:
    $("#page-title");
    var heading = $("page-title");
    heading.css({position: "relative"});
    heading.animate({left: 100});  <--jQuery comes in a wrapper 
    heading[0]  <--unwrapped 
    heading[0].aninmate({left: 20}); <-- doesn't work because it's unwrapped 
-jQuery comes back as an array 


$(document).redy(function(){
    alert("jquery loaded");
});

Lesson 6: Adding filters to jQuery to select specific elements and refining selectors \
example: $("header nav li: first").css({border: "2px solid red"});

The DOM in Javascript 
a way to describe the relationship between elements on a page, and gives us a way to traverse them. 

HTML
BODY 
HEADER, DIV FOOTER 
HI 
ex: document.getElementsByTagName("header").getElementsByTagName("h1")