var $d = document;

var canvas, ctx,
    mouse, keyboard;

window.onload = function () {
    canvas = $d.getElementById("canvas")
    ctx = canvas.getContext("2d");

    mouse = new Mouse($d, canvas, ctx);
    keyboard = new Keyboard($d);
}