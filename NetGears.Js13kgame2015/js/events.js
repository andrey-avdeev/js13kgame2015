
//m - mouse
function Events(m) {
    //
    this.gravityReverse = function () {
        return new CustomEvent("gravityReverse");
    };

    //
    this.laserbeamBlow = function () {
        return new CustomEvent("laserbeamBlow", {
            detail: {

            },
            bubbles: true,
            cancelable: false
        });
    };

    //p - mouse current position
    this.playerShot = function (p) {
        return new CustomEvent("playerShot", {
            detail: {
                target: p
            },
            bubbles: true,
            cancelable: false
        });
    };

    //
    this.playerBlow = function () {
        return new CustomEvent("playerBlow", {
            detail: {

            },
            bubbles: true,
            cancelable: false
        });
    };
}