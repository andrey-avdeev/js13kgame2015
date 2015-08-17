
var $d = document;

var canvas, ctx,
    events,
    mouse, keyboard,
    physics,
    player,
    asteroids, laserbeams,
    game;

window.onload = function () {
    //canvas initialization
    canvas = $d.getElementById("canvas")
    ctx = canvas.getContext("2d");

    //custom events initialization
    events = new Events();

    //controls initialization
    mouse = new Mouse($d, canvas, ctx, events);
    keyboard = new Keyboard($d, events);

    //physics initialization
    physics = new Physics($d);

    //objects initialization
    player = new Player($d);

    asteroids = new Array();
    laserbeams = new Array();

    //game looper e.t.c
    game = new Game(physics, canvas, ctx);
}