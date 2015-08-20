window.onload = function () {
    var $d = document;
    //canvas initialization
    var canvas = $d.getElementById("canvas")
    var ctx = canvas.getContext("2d");

    //custom events initialization
    var events = new Events();

    //controls initialization
    var mouse = new Mouse($d, events, canvas);
    var keyboard = new Keyboard($d, events);

    //physics initialization
    var physics = new Physics($d);
    var gui = new GUI($d);

    //objects initialization
    var asteroids = new Array();
    var explosions = new Array();
    var laserbeams = new Array();
    var player = null
    var stars = new Array();
    var walls = new Array();

    //game looper e.t.c
    var game = new Game($d, canvas, ctx, physics, asteroids, explosions, laserbeams, player, stars, walls);

    function addAsteroid(e) {
        asteroids.push(new Asteroid());
    }
    function addExplosion(e) {
        explosions.push(new Explosion());
    }
    function addLaserBeam(e) {
        laserbeams.push(new LaserBeam());
    }
    function addPlayer(e) {
        player = new Player();
    }
    function addStar(e) {
        stars.push(new Star());
    }
    function addWall(e) {
        walls.push(new Wall());
    }

    //listeners initialization
    $d.addEventListener('asteroidCreate', addAsteroid);
    $d.addEventListener('explosionCreate', addExplosion);
    $d.addEventListener('laserbeamCreate', addLaserBeam);
    $d.addEventListener('playerCreate', addPlayer);
    $d.addEventListener('starCreate', addStar);
    $d.addEventListener('wallCreate', addWall);
}

