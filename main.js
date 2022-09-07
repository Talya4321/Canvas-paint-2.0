var mouse_event = "empty";
var last_position_x,last_position_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";

canvas.addEventListener("mouseup", my_mouse_up)

function my_mouse_up(e){
    mouse_event = "mouseup";
}

canvas.addEventListener("mousedown", my_mouse_down)

function my_mouse_down(e){
    mouse_event = "mousedown";
    color = document.getElementById("color").value;
}

canvas.addEventListener("mouseleave", my_mouse_leave)

function my_mouse_leave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mouse_move)

function my_mouse_move(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;

        ctx.moveTo(last_position_x, last_position_y);

        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }

    last_position_x = current_position_x;
    last_position_y = current_position_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}