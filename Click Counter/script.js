var box = document.getElementById("outer");
var text = document.getElementById("change");
var count = 0;
box.addEventListener('click', function(){
    count++;
    text.innerText = count + " ";
});