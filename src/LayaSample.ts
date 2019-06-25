import WebGL = Laya.WebGL;
import Handler=laya.utils.Handler;
import Loader = laya.net.Loader;

class GameMain{
    constructor(){
        Laya.init(750,650,Laya.WebGL);
        laya.utils.Stat.show(0,0);
        Laya.stage.scaleMode="showall";
        Laya.stage.alignH="left";
        Laya.stage.alignV="top";
        Laya.stage.screenMode="horizontal";
        var resArray:Array<any>=[
            {url:"res/hitMole_atlas0.png",type:Loader.IMAGE},
            {url:"res/hitMole.fui",type:Loader.BUFFER}
        ]
        Laya.loader.load(resArray,Handler.create(this,this.onLoaded))
    }
    onLoaded():void{
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/hitMole");
        fairygui.UIConfig.defaultFont="宋体";
        fairygui.UIConfig.verticalScrollBar = "ui://hitMole/ScrollBar_VT";
        fairygui.UIConfig.horizontalScrollBar = "ui://Basic/ScrollBar_HZ";
        fairygui.UIConfig.popupMenu = "ui://hitMole/PopupMenu";
        fairygui.UIConfig.buttonSound = "ui://hitMole/click";

        new MainPanel()
    }
}

new GameMain();