function Utils() {
    this.Random = function (min, max) {
        return Math.random() * (max - min) + min;
    }
}