const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");
const range = document.getElementById("Jsrange");
const mode = document.getElementById("jsMode");
const DefaultColor = "rgb(5, 5, 5)"

ctx.lineWidth = 2.5;
ctx.strokeStyle = DefaultColor;
ctx.fillStyle = DefaultColor;

ctx.fillRect(0, 0, 800, 600)

canvas.height = 600; // обязательно задать размер и тут, иначе мышь-линия не совпадают
canvas.width = 800;

let painting = false;  // рисуем или нет - по умолчанию нет
let filling = false;

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

function ChangeColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function ChangeSize(event) {
    const Value = event.target.value;
    ctx.lineWidth = Value;
}

function ModeCkick() {
    if (filling) {
        filling = false;
        mode.innerText = "Заливка"; // меняет текст на кнопке
    } else {
        filling = true;
        mode.innerText = "Рисовать";
    }
}

function Fill() {
    if (filling) {
        ctx.fillRect(0, 0, 800, 600); // команда из/для канваса
    }

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("click", Fill);
}

Array.from(colors).forEach(color => color.addEventListener("click", ChangeColor)) // для каждогго цвета вызываем обработчик клика и там будет функция

if (range) {
    range.addEventListener("input", ChangeSize);
}

if (mode) {
    mode.addEventListener("click", ModeCkick)
}

