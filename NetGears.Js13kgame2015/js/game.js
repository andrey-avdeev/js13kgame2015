function Game() {
    //time parameters
    this.dt = 0;
    this.timeNow = 0;

    this.GetTimeStamp = function() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }

    this.timeLast = this.GetTimeStamp();
    this.timeElapsed = 0;

    //physics parameters
    this.g = 9.8;

    //updating system
    this.effectsLength = 10;
    this.objectsLength = 100;
    this.boostsLength = 2;

    this.effects = new Array(this.effectsLength);
    this.objects = new Array(this.objectsLength);
    this.boosts = new Array(this.boostsLength);

    //rendering system
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d");

    //gui system
    this.lives = 3;

    //Frame start
    function Frame() {

        this.timeNow = GetTimeStamp();

        $.dt = ($.timeNow - $.timeLast) / 1000;
        $.timeElapsed += $.dt;

        Update();
        Render();

        $.timeLast = $.timeNow;
        console.log(Random(0, 10));
        requestAnimationFrame(Frame);
    }

    //function GetTimeStamp() {
    //    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    //}

    //function Update() {
    //    for (var i = 0; i < $.effectsLength; i++) {
    //        if ($.effects[i] != null && $.effects[i].isRendered) {
    //            $.effects[i].update();
    //        }
    //    }
    //    for (var i = 0; i < $.objectsLength; i++) {
    //        if ($.objects[i] != null && $.objects[i].isActive) {
    //            $.objects[i].update();
    //        }
    //    }
    //};
    //function Render() {
    //    ////saving context
    //    //ctx.save();
    //    ////clearing canvas
    //    //ctx.clearRect(0, 0, c.width, c.height);

    //    for (var i = 0; i < $.effectsLength; i++) {
    //        if ($.effects[i] != null && $.effects[i].isRendered) {
    //            $.effects[i].render();
    //        }
    //    }
    //    for (var i = 0; i < $.objectsLength; i++) {
    //        if ($.objects[i] != null && $.objects[i].isRendered) {
    //            $.objects[i].render();
    //        }

    //        ////restoring context
    //        //ctx.restore();
    //    };
    //    //frame end
    //}
    //function initialization() {
    //}


    //initialization();

    //function Random(min, max) {
    //    return Math.random() * (max - min) + min;
    //}

    this.Start = function () {
        requestAnimationFrame(Frame);
    }
}

//Game.prototype.GetTimeStamp = function () {
//    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
//}

//Game.prototype.Frame = function () {
//    this.timeNow = this.GetTimeStamp;

//    this.dt = (this.timeNow - this.timeLast) / 1000;
//    this.timeElapsed += this.dt;

//    //this.Update();
//    //this.Render();

//    this.timeLast = this.timeNow;

//    //function Random(min, max) {
//    //    return Math.random() * (max - min) + min;
//    //}
//    //console.log(Random(0, 10));
//    console.log(this.dt);
//    requestAnimationFrame(this.Frame);
//}

//Game.prototype.Update = function () {
//    for (var i = 0; i < this.effectsLength; i++) {
//        if (this.effects[i] != null && this.effects[i].isRendered) {
//            this.effects[i].update();
//        }
//    }
//    for (var i = 0; i < this.objectsLength; i++) {
//        if (this.objects[i] != null && this.objects[i].isActive) {
//            this.objects[i].update();
//        }
//    }
//};

//Game.prototype.Render = function () {
//    this.ctx.save();
//    this.ctx.clearRect(0, 0, c.width, c.height);

//    for (var i = 0; i < this.effectsLength; i++) {
//        if (this.effects[i] != null && this.effects[i].isRendered) {
//            this.effects[i].render();
//        }
//    }
//    for (var i = 0; i < this.objectsLength; i++) {
//        if (this.objects[i] != null && this.objects[i].isRendered) {
//            this.objects[i].render();
//        }
//    };

//    this.ctx.restore();
//}

//Game.prototype.Start = function () {
//    requestAnimationFrame(this.Frame);
//}