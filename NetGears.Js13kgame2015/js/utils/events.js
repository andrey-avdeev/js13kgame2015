
//
function Events() {
    //
    this.gravityReverse = function () {
        return new CustomEvent("gravityReverse");
    };

    //
    this.playerShoot = function () {
        return new CustomEvent("playerShoot");
    };

    //
    this.playerExplode = function () {
        return new CustomEvent("playerExplode");
    };

    //
    this.laserbeamExplode = function () {
        return new CustomEvent("laserbeamExplode", {
            detail: {

            },
            bubbles: true,
            cancelable: false
        });
    };

    //
    this.asteroidExplode = function () {
        return new CustomEvent("asteroidExplode", {
            detail: {

            },
            bubbles: true,
            cancelable: false
        });
    }
}