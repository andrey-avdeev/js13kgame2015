function Settings() {
    //
    //STARS
    //
    this.star.length = 70;
    this.star.width = 2;
    this.star.height = 2;

    //
    //EXPLOSIONS
    //
    this.explosion.length = 31;
    this.explosion.timeFactor = 8;

    //
    //ASTEROIDS
    //
    this.asteroid.length = 70;
    //this.asteroid.

    //
    //WALLS
    //
    this.wall.length = 44;
    this.wall.width = 20;
    this.wall.height = 100;

    //
    //LASERBEAMS
    //
    this.laserbeam.length = 30;
    this.laserbeam.width = 6;
    this.laserbeam.height = 2;

    //
    //POWERUPS
    //
    this.powerup.length = 5;
    this.powerup.width = 10;
    this.powerup.height = 10;
    this.powerup.types = ["small","slow","ammo","shield","combo"];

    //
    //Player
    //
    this.player.width = 10;
    this.player.height = 10;
}