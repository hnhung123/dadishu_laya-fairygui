var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("hitMole", "back").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
    }
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map