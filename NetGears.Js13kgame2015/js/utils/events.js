function Events() {
    this.gravityReverse = function () {
        return new CustomEvent("gravityReverse");
    };

    this.playerShoot = function () {
        return new CustomEvent("playerShoot");
    };
    this.playerExplode = function (x, y) {
        return new CustomEvent("playerExplode", {
            detail: {
                position: new Vec2(x, y)
            }
        });
    };

    this.laserbeamCreate = function (x, y) {
        return new CustomEvent("laserbeamCreate", {
            detail: {
                position: new Vec2(x, y)
            }
        });
    }
    this.laserbeamExplode = function (x, y) {
        return new CustomEvent("laserbeamExplode", {
            detail: {
                position: new Vec2(x, y)
            }
        });
    };

    this.asteroidCreate = function (x, y) {
        return new CustomEvent("asteroidCreate", {
            detail: {
                position: new Vec2(x, y)
            }
        });
    }
    this.asteroidExplode = function (x, y) {
        return new CustomEvent("asteroidExplode", {
            detail: {
                position: new Vec2(x, y)
            }
        });
    }
}