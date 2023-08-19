var widht=screen.widht;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    
// creamos primero el lienzo
canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    

    color = "black";
    width_of_line = 2;


new_widht=screen.widht-70;
new_height=screen.height-300;

if(widht<992){
    document.getElementById("myCanvas").widht=new_widht;
    document.getElementById("myCanvas").height=new_height;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("my_touchMove");
    current_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates=  ");
        console.log("x= "+last_position_of_x +"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);


        console.log("current position of x and y coordinates=  ");
        console.log("x= "+current_position_of_x +"y= "+current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

        last_position_of_x=current_position_of_x;
        last_position_of_y=current_position_of_y;
}

 