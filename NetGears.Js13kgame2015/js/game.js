
//p - physics, c - canvas, ctx - context
function Game(p, c, ctx) {
    var now,
        dt = 0,
        last = timeStamp(),
        step = 1 / 60;

    function frame() {
        now = timeStamp();
        dt = dt + Math.min(1, (now - last) / 1000);    // duration in seconds
        while (dt > step) {
            dt = dt - step;
            update();
        }
        render();

        last = now;
        requestAnimationFrame(frame);
    }

    function timeStamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }

    function update() {
        player.position.plus(p.gravity);
    }
    function render() {
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.fillRect(player.position.x, player.position.y, 10, 10);
        ctx.restore();
    }

    requestAnimationFrame(frame);
}