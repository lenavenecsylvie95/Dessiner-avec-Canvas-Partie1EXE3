var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(90, 60, 280, 80);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(30,130, 400, 70);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(40, 230, 30, 0, Math.PI*2, false);
ctx.fillStyle = "#aaa2a2";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(420, 230, 30, 0, Math.PI*2, false);
ctx.fillStyle = "#aaa2a2";
ctx.fill();
ctx.closePath();
