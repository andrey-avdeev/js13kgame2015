function Vec2(x, y) {
    this.x = x;
    this.y = y;
}

Vec2.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
}
Vec2.prototype.plus = function (v) {
    this.x += v.x;
    this.y += v.y;
}
Vec2.prototype.minus = function (v) {
    this.x -= v.x;
    this.y -= v.y;
}
Vec2.prototype.scale = function (k) {
    this.x *= k;
    this.y *= k;
}
Vec2.prototype.distance = function (v) {
    return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
}