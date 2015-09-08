function GUI() {
    this.score = 0;
    this.ammo = 31;
    this.lives = 3;
}
GUI.prototype.update = function () {
    this.score += $.dt;
}
GUI.prototype.render = function () {
    //score
    $.ctxgui.font = "20px Arial";
    $.ctxgui.fillStyle = "red";
    $.ctxgui.textAlign = "center";
    $.ctxgui.fillText(Math.floor(this.score), 20, 30);

    //tips
    if (this.score < 3) {
        $.ctxgui.font = "18px Arial";
        $.ctxgui.fillStyle = "red";
        $.ctxgui.fillText("'R'/touch to reverse and shoot", 200, 30);
        $.ctxgui.fillText("Hold to see", 180, 50);
    }

    //ammo
    $.ctxgui.beginPath();
    $.ctxgui.strokeStyle = "red";
    $.ctxgui.lineWidth = 2;
    var startHeight = ($.height / 2) - ((this.ammo * 5) / 2);
    $.ctxgui.moveTo(10, startHeight);
    $.ctxgui.lineTo(10, startHeight + this.ammo * 5);
    $.ctxgui.stroke();

    //lives
    if (this.lives > 0) {
        for (var i = 0; i < this.lives; i++) {
            $.ctxgui.beginPath();
            $.ctxgui.fillStyle = 'yellow';
            $.ctxgui.fillRect((i + 1) * 10, 40, 5, 5);
        }
    } else {
        if ($.timeDeath <= 0) {
            $.timeDeath = $.timeNow;
        }

        $.ctxgui.font = "25px Arial";
        $.ctxgui.fillStyle = "white";
        $.ctxgui.fillText("Game Over", $.width / 2 - 50, $.height / 2 - 25);

        if ($.timeNow - $.timeDeath > 1500) {
            $.ctxgui.font = "18px Arial";
            $.ctxgui.fillText("'R'/touch to restart", $.width / 2 - 50, $.height / 2 + 25);
        }
    }

    //author
    $.ctxgui.font = "10px Arial";
    $.ctxgui.fillStyle = "silver";
    $.ctxgui.fillText("Created by Avdeev Andrew for js13kgames 2015", $.width/5, $.height);
}

GUI.prototype.restart = function () {
    this.lives = 3;
    this.ammo = 31;
    this.score = 0;
    $.g = 9.8

    $.player.refresh();
}