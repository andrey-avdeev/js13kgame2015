function BaseObject(params) {
    this.x = params.x;
    this.y = params.y;

    this.vx = params.vx;
    this.vy = params.vy;

    this.isActive = true;
    this.isRendered = true;
}