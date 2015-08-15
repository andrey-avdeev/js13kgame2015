var $d = document;

var target, canvas;

window.onload = function () {
    canvas = $d.getElementById("canvas")

    init(canvas);
}

function init(c) {
    $d.addEventListener('mousedown', onMouseDown);
    $d.addEventListener('mousemove', onMouseMove);
    $d.addEventListener('mouseup', onMouseUp);

    $d.addEventListener('keydown', onKeyDown);
    $d.addEventListener('keyup', onKeyUp);
}