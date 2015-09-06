function Keyboard() {
    var _t = this;

    this.keys = {
        isPressed: {}
    }

    this.onKeyDown = function (e) {
        if (!_t.keys.isPressed[e.keyCode]) {
            _t.keys.isPressed[e.keyCode] = true;

            switch (e.keyCode) {
                case 82:
                    $.g *= -1;
                    Shoot();
                    break;
            }
        }
    }
    this.onKeyUp = function (e) {
        _t.keys.isPressed[e.keyCode] = false;
        switch (e.keyCode) {
            case 82:
                $.g *= -1;
                Shoot();
                break;
        }
    }
    function Shoot() {
        if ($.player.isActive) {
            $.utils.PlaySound([2, , 0.1377, 0.1855, 0.2461, 0.6816, 0.0768, -0.3795, , , , , , 0.1207, 0.0623, , , , 1, , , , , 0.21]);
            var i = 0;
            while ($.laserbeams[i] != null && $.laserbeams[i].isActive && i < $.laserbeamsLength) {
                i++
            }
            if (i < $.laserbeamsLength) {
                $.laserbeams[i].x = $.player.x + $.player.width;
                $.laserbeams[i].y = $.player.y + $.player.height / 2;
                $.laserbeams[i].isActive = true;
                $.laserbeams[i].isRendered = true;
            }
        }
    }
}
function playSound(params) {
    try {
        var soundURL = jsfxr(params);
        var player = new Audio();
        player.src = soundURL;
        player.play();
    } catch (e) {
        console.log(e.message);
    }
}