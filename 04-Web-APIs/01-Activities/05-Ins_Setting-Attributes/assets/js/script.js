// Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div"); // all elements by their names
 var pTags = document.querySelectorAll("p"); // all paragraphs
 var imgEl = document.querySelectorAll("img"); // all images

// Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2"); // elements via classes or ids
// var changepToo = document.getElementById("change2"); //more specific looking for change 2
// Sets first pTags to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");
 pTags[0].setAttribute("style", "font-color: black;");

// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
 divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }

 
