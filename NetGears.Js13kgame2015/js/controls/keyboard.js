var keys = {
    down: {},
    isPressed: {}
}

function onKeyUp(e) {
    console.log("e.keyup");

    keys.down[e.keyCode] = false;
    keys.isPressed[e.keyCode] = false;
}
function onKeyDown(e) {
    console.log("e.keydown");

    if (!keys.down[e.keyCode]) {
        keys.down[e.keyCode] = true;
        keys.isPressed[e.keyCode] = true;
    }
}