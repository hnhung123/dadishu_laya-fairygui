var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("hitMole", "back").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._progressBar = this._view.getChild("progressBar").asProgress;
        this._progressBar.value = 10;
        Laya.timer.loop(1000, this, this.onLoop);
    }
    MainPanel.prototype.onLoop = function () {
        this._progressBar.value -= 1;
        console.log('countdown time:', this._progressBar.value);
        if (this._progressBar.value <= 0) {
            this.gameOver();
        }
    };
    MainPanel.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        console.log("GameOver");
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map