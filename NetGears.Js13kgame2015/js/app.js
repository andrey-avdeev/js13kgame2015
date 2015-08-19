
var $d = document;

var canvas, ctx,
    events,
    mouse, keyboard,
    physics,
    player,
    asteroids, laserbeams, explosions,
    walls,
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
    player = new Player($d, new Vec2(0, 0), events);

    asteroids = new Array();
    laserbeams = new Array();
    explosions = new Array();

    walls = new Array();

    //game looper e.t.c
    game = new Game(canvas, ctx, physics);
}

function addLaserBeam(e) {
    laserbeams.push(new LaserBeam($d, e.detail.position));
}
function addAsteroid(e) {
    asteroids.push(new Asteroid());
}
function addExplosion(e) {
    explosions.push(new Explosion());
}
function addWall(e) {
    walls.push(new Wall());
}

//listeners initialization
$d.addEventListener('laserbeamCreate', addLaserBeam);
$d.addEventListener('asteroidCreate', addAsteroid);
$d.addEventListener('explosionCreate', addExplosion);
$d.addEventListener('wallCreate', addWall);