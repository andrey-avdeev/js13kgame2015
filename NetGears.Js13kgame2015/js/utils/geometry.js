
//x - vector coordinate, y - vector coordinate
function Vec2(x, y) {
    this.x = x;
    this.y = y;
}

//x - vector coordinate, y - vector coordinate
Vec2.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
}
//v - vector
Vec2.prototype.plus = function (v) {
    this.x += v.x;
    this.y += v.y;
}
//v - vector
Vec2.prototype.minus = function (v) {
    this.x -= v.x;
    this.y -= v.y;
}
//k - scale coefficient
Vec2.prototype.scale = function (k) {
    this.x *= k;
    this.y *= k;
}
//a - vector, b - vector
Vec2.prototype.distance = function (a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}