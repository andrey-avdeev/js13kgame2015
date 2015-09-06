function GUI(d, ev) {
    var _this = this;

    //parameters
    this.score = 0;
    this.lives = 3;

    this.width = 100;

}
GUI.prototype.update = function () {
    this.score += $.dt;
}
GUI.prototype.render = function () {
    $.ctxgui.font = "20px Arial";
    $.ctxgui.fillStyle = "red";
    $.ctxgui.textAlign = "center";
    $.ctxgui.fillText(Math.floor(this.score), 20, 30);

    if (this.score < 5) {
        $.ctxgui.font = "20px Arial";
        $.ctxgui.fillStyle = "red";
        $.ctxgui.fillText("'R'/touch to reverse and shoot", 200, 30);
    }
}