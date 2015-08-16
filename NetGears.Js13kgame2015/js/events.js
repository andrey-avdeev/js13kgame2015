
//m - mouse
function Events(m) {
    this.gravityReverse = new CustomEvent("gravityReverse");
    this.laserbeamShot = new CustomEvent("laserbeamShot", {
        detail: {
            target: mouse.position
        },
        bubbles: true,
        cancelable: false
    });
    this.laserbeamBlow = new CustomEvent("laserbeamBlow", {
        detail: {

        },
        bubbles: true,
        cancelable: false
    })

    this.playerBlow = new CustomEvent("playerBlow");
    //this.laserbeamCreate = new CustomEvent("laserbeamCreate", {
    //    detail: {

    //    }
    //})
}