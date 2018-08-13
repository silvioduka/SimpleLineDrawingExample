// Simple line drawing example using Canvas and Javascript by Silvio Duka
//
// Last modified date: 2018-02-01

var canvas;
var context;

function init() {
  canvas = document.getElementById('canvas');

  //canvas.width = window.innerWidth * 0.9;
  //canvas.height = window.innerHeight * 0.9;

  context = canvas.getContext('2d');

  run();
}

function Line(
  x0,
  y0,
  x1,
  y1,
  color // start point x0,y0 - end point x1,y1
) {
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
  this.color = color;

  context.strokeStyle = color;
  context.lineWidth = 1;
  context.lineCap = 'round';

  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.stroke();
}

function run() {
  var lineQty = 50;
  var maxX = canvas.width;
  var maxY = canvas.height;
  var stepX = maxX / lineQty;
  var stepY = maxY / lineQty;

  var pX = 0;
  var pY = 0;

  for (var i = 0; i <= lineQty; i++) {
    pX = i * stepX;
    pY = i * stepY;

    Line(0, pY, pX, maxY, 'red');
    Line(pX, maxY, maxX, maxY - pY, 'green');
    Line(maxX, maxY - pY, maxX - pX, 0, 'blue');
    Line(maxX - pX, 0, 0, pY, 'yellow');
  }
}

window.addEventListener('load', init, false);
