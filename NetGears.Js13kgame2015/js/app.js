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

    //game looper e.t.c
    var game = new Game($d, events, canvas, ctx);
}

