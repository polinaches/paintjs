const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");

ctx.lineWight = 2.5;
ctx.StrokeStyle = "rgb(5, 5, 5)";

canvas.height = 600; // обязательно задать размер и тут, иначе мышь-линия не совпадают
canvas.width = 800;

let painting = false;  // рисуем или нет - по умолчанию нет

function startPainting() {
    painting = true;
}

function onMouseMove(event) { // функция которая отвечает за отслеживание курсора
    x = event.offsetX;
    y = event.offsetY; //offset - позиция курсора внутри canvasa (самого окна рисования) 
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) { // отслеживание нажатие курсора
    painting = true;
}
function onMouseUp(event) { // отслеживание "отпускания" курсора
    painting = false;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
}

console.log(colors)