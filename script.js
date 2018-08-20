/* global $ */
//Lesson 12: Changing Atributes

$("#contact img").removeAttr("alt");
$("#contact img").attr("alt", "location"); //sets the attribute 
console.log($("#contact img").alt("alt")); //Reads the attribute 

/*

.removeAttr() - removes an attibute completely 
.attr() - can read or set any attribute 

*/