class MainPanel{
    private _view:fairygui.GComponent;
    private _progressBar:fairygui.GProgressBar;
    constructor(){
        this._view=fairygui.UIPackage.createObject("hitMole","back").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        this._progressBar=this._view.getChild("progressBar").asProgress;
        this._progressBar.value=10;
        Laya.timer.loop(1000,this,this.onLoop);
    }
    onLoop():void{
        this._progressBar.value-=1;
        console.log('countdown time:',this._progressBar.value)
        if(this._progressBar.value<=0){
            this.gameOver();
        }
    }
    gameOver():void{
        Laya.timer.clear(this,this.onLoop);
        console.log("GameOver")
    }
}