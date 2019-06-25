class MainPanel{
    private _view:fairygui.GComponent;
    constructor(){
        this._view=fairygui.UIPackage.createObject("hitMole","back").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view)
    }
}