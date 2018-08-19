/* global $ */
//$("h3").css({border: "3px solid blue"});

//$(".wrapper").css({border: "3px solid red"});

//$("#clients").css({border: "3px solid yellow"});

$("#contact ul:first").css({border: "2px solid red"});

$("#contact ul:last").css({border: "2px solid red"});

$("header nav li:even").css({border: "2px solid blue"});
$("header nav li:odd").css({border: "2px solid yellow"});
$("section:not('#contact')").css({border: "2px solid green"}); //grabbing everything that is not the #contact 
$("#social-nav li:lt(3)").css({border: "2px solid blue"}); //Less than 
$("#social-nav li:gt(3)").css({border: "2px solid blue"}); //Greater than 
$("div[class]").css({border: "2px solid pink"}); //Any div with the class attribute will be solid pink 
$("img[alt quote]").css({border: "2px solid pink"});  //Check the jQuery selectors for more https://www.youtube.com/redirect?q=https%3A%2F%2Fapi.jquery.com%2Fcategory%2Fselectors%2F&v=jiOZCNY4gQM&redir_token=zxojA54H2FhBKbhceOp8p0yAHtt8MTUzNDc5NTI4N0AxNTM0NzA4ODg3&event=video_description
