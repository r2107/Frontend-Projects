var block = document.getElementById("block");
var buttonColor = document.getElementById("color");
var buttonShape = document.getElementById("shape");

var shapes = ["square", "rectangle", "circle", "oval",
"triangle-up", "triangle-down", "triangle-right", 
"triangle-topleft", "triangle-bottomleft", "triangle-bottomright"];

var colors = ["red", "orange", "green", "maroon", "pink", "violet"];

buttonColor.addEventListener('click', function(){
    block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

var curShape = document.getElementById("square");
buttonShape.addEventListener('click', function(){
    curShape.id = shapes[Math.floor(Math.random() * shapes.length)];
    curShape = document.getElementById(curShape.id);
});