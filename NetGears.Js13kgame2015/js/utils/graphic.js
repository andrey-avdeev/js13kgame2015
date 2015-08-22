function Graphic(ctx) {
    //objects rendering
    this.drawAsteroid = function (asteroid) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(asteroid.position.x, asteroid.position.y, asteroid.radius, asteroid.radius);
    }
    this.drawExplosion = function (explosion) {
        ctx.fillStyle = "red";
        ctx.fillRect(explosion.position.x, explosion.position.y, explosion.width, explosion.height);
    }
    this.drawLaserBeam = function (laserbeam) {
        ctx.fillStyle = "red";
        ctx.fillRect(laserbeam.position.x, laserbeam.position.y, laserbeam.width, laserbeam.height);
    }
    this.drawPlayer = function (player) {
        ctx.fillStyle = "green";
        ctx.fillRect(player.position.x, player.position.y, player.width, player.height);
    }
    this.drawStar = function (star) {
        ctx.fillStyle = "brown";
        ctx.fillRect(star.position.x, star.position.y, star.width, star.height);
    }
    this.drawWall = function (wall) {
        ctx.fillStyle = "black";
        ctx.fillRect(wall.position.x, wall.position.y, wall.width, wall.height);
    }
    //gui rendering
    this.drawGui = function (gui) {

    }
}