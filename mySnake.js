const btn = document.querySelector("h1");
const canvas = document.querySelector("canvas");
console.log(canvas);
var ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
ctx.beginPath();
ctx.arc(95, 75, 5, 0, 2 * Math.PI);
ctx.stroke();
// ctx.fillRect(x, y, 30, 10);
let key;
let downInt;
let rightInt;
let leftInt;
let upInt;

function down(e) {
  console.log(e.key);
  downInt = setInterval(() => {
    ctx.clearRect(x, y, 10, 10);
    y += 10;
    ctx.fillRect(x, y, 10, 30);

    console.log({ x, y });
  }, 100);
}

function right(e) {
  console.log(e.key);
  rightInt = setInterval(() => {
    ctx.clearRect(x, y, 10, 10);
    x += 10;
    ctx.fillRect(x, y, 30, 10);
    console.log({ x, y });
  }, 100);
}
function up(e) {
  console.log(e.key);
  upInt = setInterval(() => {
    ctx.clearRect(x, y, 10, 10);
    y -= 10;
    ctx.fillRect(x, y, 10, -30);
    console.log({ x, y });
  }, 100);
}
function left(e) {
  console.log(e.key);
  leftInt = setInterval(() => {
    ctx.clearRect(x, y, 10, 10);
    x -= 10;
    ctx.fillRect(x, y, -30, 10);
    console.log({ x, y });
  }, 100);
}
function snakemove(e) {
  key = e.key;
  clearInterval(downInt);
  clearInterval(rightInt);
  clearInterval(upInt);
  clearInterval(leftInt);
  if (key === "ArrowDown") {
    down(e);
  }
  if (key === "ArrowRight") {
    right(e);
  }
  if (key === "ArrowUp") {
    up(e);
  }
  if (key === "ArrowLeft") {
    left(e);
  }
  //   console.log(key);
}

// window.addEventListener("keydown", snakemove);

//   ctx.clearRect(x - 20, y, 10, 10);
