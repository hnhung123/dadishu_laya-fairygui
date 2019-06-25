var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this.moleNum = 9;
        this._view = fairygui.UIPackage.createObject("hitMole", "back").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._progressBar = this._view.getChild("progressBar").asProgress;
        this._progressBar.value = 10;
        Laya.timer.loop(1000, this, this.onLoop);
        this.moles = new Array();
        for (var i = 0; i < this.moleNum; i++) {
            this._coms = this._view.getChild("Mole" + i).asCom;
            var mole = new Mole(this._coms.getChild("normal").asLoader, this._coms.getChild("hit").asLoader, 24);
            this.moles.push(mole);
        }
    }
    MainPanel.prototype.onLoop = function () {
        this._progressBar.value -= 1;
        console.log('countdown time:', this._progressBar.value);
        if (this._progressBar.value <= 0) {
            this.gameOver();
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    MainPanel.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        console.log("GameOver");
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map