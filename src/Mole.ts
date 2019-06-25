class Mole{
    private _normalState:fairygui.GLoader;
    private _hitState:fairygui.GLoader;
    private _downY:number;
    private _upY:number;
    private isAction: boolean;
    private isHit: boolean;
    private isShow: boolean;
    private type: number;

    constructor(normalState:fairygui.GLoader,hitState:fairygui.GLoader,downY:number){
        this._normalState=normalState;
        this._hitState=hitState;
        this._downY=downY;
        this._upY=normalState.y;
        this.reset();
    }
    reset():void{
        this._normalState.visible=false;
        this._hitState.visible=false;
    }
    show():void{
        if(this.isAction) return;
        this.isShow=true;
        this.isAction=true;
        this.type=Math.random()>0.3?1:2;
        this._normalState.url="img/mouse_normal_"+this.type+".png";
        this._hitState.url="img/mouse_hit_"+this.type+".png";
        this._normalState.y=this._downY;
        this._normalState.visible=true;
        Laya.Tween.to(this._normalState,{y:this._upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete));
    }
    showComplete():void{

    }
}