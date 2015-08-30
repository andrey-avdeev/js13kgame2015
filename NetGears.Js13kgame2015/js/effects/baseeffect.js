function BaseEffect(params) {
    this.x = params.x;
    this.y = params.y;

    this.time = 0;
    this.timeMax = params.timeMax;

    this.isActive = true;
    this.isRendered = true;
}