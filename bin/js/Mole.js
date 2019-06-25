var Mole = /** @class */ (function () {
    function Mole(normalState, hitState, downY) {
        this._normalState = normalState;
        this._hitState = hitState;
        this._downY = downY;
        this._upY = normalState.y;
        this.reset();
    }
    Mole.prototype.reset = function () {
        this._normalState.visible = false;
        this._hitState.visible = false;
    };
    Mole.prototype.show = function () {
        if (this.isAction)
            return;
        this.isShow = true;
        this.isAction = true;
        this.type = Math.random() > 0.3 ? 1 : 2;
        this._normalState.url = "img/mouse_normal_" + this.type + ".png";
        this._hitState.url = "img/mouse_hit_" + this.type + ".png";
        this._normalState.y = this._downY;
        this._normalState.visible = true;
        Laya.Tween.to(this._normalState, { y: this._upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    };
    Mole.prototype.showComplete = function () {
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map