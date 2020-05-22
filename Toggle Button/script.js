var body = document.body;
var btn = document.getElementById("outer");
var inner = document.getElementById("inner");
var h1 = document.getElementById("heading");

var white = true;
var count = 0;
btn.addEventListener('click', function(){
    count++;
    console.log(body);
    if(white){
        body.style.background = "black";
        h1.style.color = "white";
        btn.style.borderColor = "white";
        btn.style.flexDirection = "row-reverse";
        white = false;
    }
    else{
        body.style.background = "white";
        h1.style.color = "black";
        btn.style.borderColor = "black";
        btn.style.flexDirection = "row";
        white = true;
    }
    console.log(count);
});