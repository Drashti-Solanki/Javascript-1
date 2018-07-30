var start;
var btn_right=document.getElementById("right")
var btn_stop=document.getElementById("stop")
var btn_left=document.getElementById("left")

btn_right.addEventListener("click", function () {
    clearInterval(start);
    start = setInterval(right, 1000);
});

btn_stop.addEventListener("click", function () {
    clearInterval(start);
});

btn_left.addEventListener("click", function () {
    clearInterval(start);
    start = setInterval(left, 1000);
});


function right() {
    var Text_left = document.getElementById("leftText").value;
    var Text_right= document.getElementById("rightText").value;
    document.getElementById("rightText").value = Text_right+Text_left.charAt(0);
    document.getElementById("leftText").value = Text_left.slice(1);
}

function left() {
    var Text_left = document.getElementById("leftText").value;
    var Text_right = document.getElementById("rightText").value;
    document.getElementById("leftText").value = Text_right.charAt(Text_right.length-1)+Text_left;
    document.getElementById("rightText").value = Text_right.slice(0,Text_right.length-1);
}