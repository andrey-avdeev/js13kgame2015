
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

    //pos - position of shooting object
    this.laserbeamCreate = function (pos) {
        return new CustomEvent("laserbeamCreate", {
            detail: {
                position: pos
            },
            bubbles: true,
            cancelable: false
        });
    }
    //pos - position collision
    this.laserbeamExplode = function (pos) {
        return new CustomEvent("laserbeamExplode", {
            detail: {
                position:pos
            },
            bubbles: true,
            cancelable: false
        });
    };

    //pos - initial position of asteroid
    this.asteroidCreate = function (pos) {
        return new CustomEvent("asteroidCreate", {
            detail: {
                position: pos
            },
            bubbles: true,
            cancelable: false
        });
    }
    //pos - position collision
    this.asteroidExplode = function (pos) {
        return new CustomEvent("asteroidExplode", {
            detail: {
                position:pos
            },
            bubbles: true,
            cancelable: false
        });
    }

    //pos - initial position of explosion
    this.explosionCreate = function (pos) {
        return new CustomEvent("explosionCreate", {
            detail: {
                position: pos
            },
            bubbles: true,
            cancelable: false
        });
    }
}