
var $d = document;

var canvas, ctx,
    mouse, keyboard,
    physics,
    player,
    asteroids, laserbeams,
    events,
    game;

window.onload = function () {
    //canvas initialization
    canvas = $d.getElementById("canvas")
    ctx = canvas.getContext("2d");

    //controls initialization
    mouse = new Mouse($d, canvas, ctx);
    keyboard = new Keyboard($d);

    //physics initialization
    physics = new Physics($d);

    //objects initialization
    player = new Player($d);

    asteroids = new Array();
    laserbeams = new Array();

    //custom events initialization
    events = new Events(mouse);

    //game looper e.t.c
    game = new Game(physics, canvas, ctx);
}