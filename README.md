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
