canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
var mouseEvent = "empty";
var lastPositionofX, lastPositionofY;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var currentPositionofX = e.clientX - canvas.offsetLeft;
    var currentPositionofY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        console.log("lastPositionofX and lastPositionofY");
        console.log("x = " + lastPositionofX + "y = " + lastPositionofY);
        ctx.moveTo(lastPositionofX, lastPositionofY);
        console.log("currentPositionofX and currentPositionofY");
        console.log("x = " + currentPositionofX + "y = " + currentPositionofY);
        ctx.lineTo(currentPositionofX, currentPositionofY);
        ctx.stroke();
    }
    lastPositionofX = currentPositionofX;
    lastPositionofY = currentPositionofY;
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}