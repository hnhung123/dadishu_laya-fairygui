class Mole{
    private _normalState:fairygui.GLoader;
    private _hitState:fairygui.GLoader;
    private _score:fairygui.GLoader;
    private _downY:number;
    private _upY:number;
    private _scoreY:number;
    private isAction: boolean;
    private isHit: boolean;
    private isShow: boolean;
    private type: number;
    private hitCallBack:Laya.Handler;

    constructor(normalState:fairygui.GLoader,hitState:fairygui.GLoader,downY:number,score:fairygui.GLoader,hitCallBack:Laya.Handler){
        this._normalState=normalState;
        this._hitState=hitState;
        this._score=score;
        this._downY=downY;
        this._upY=normalState.y;
        this._scoreY=score.y;
        this.hitCallBack=hitCallBack;
        this.reset();
        this._normalState.on(Laya.Event.MOUSE_DOWN,this,this.hit);
    }
    reset():void{
        this._normalState.visible=false;
        this._hitState.visible=false;
        this._score.visible=false;
        this.isAction=false;
        this.isShow=false;
        this.isHit=false;
    }
    show():void{
        if(this.isAction) return;
        this.isShow=true;
        this.isAction=true;
        this.type=Math.random()>0.3?1:2;
        this._normalState.url="img/mouse_normal_"+this.type+".png";
        this._hitState.url="img/mouse_hit_"+this.type+".png";
        this._score.url="img/score_"+this.type+".png";
        this._normalState.y=this._downY;
        this._normalState.visible=true;
        Laya.Tween.to(this._normalState,{y:this._upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete));
    }
    showComplete():void{
        if(this.isShow && !this.isHit){
            Laya.timer.once(2000,this,this.hide);
        }
    }
    hide():void{
        if(this.isShow && !this.isHit){
            this.isShow=false;
            Laya.Tween.to(this._normalState,{y:this._downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset))
        }
    }
    hit():void{
         if(this.isShow && !this.isHit){
            this.isHit=true;
            this.isShow=false;
            this._normalState.visible=false;
            this._hitState.visible=true;
            Laya.timer.once(500,this,this.reset);
            this.showScore();
            this.hitCallBack.runWith(this.type);
        }
    }
    showScore():void{
        this._score.visible=true;
        this._score.y=this._scoreY+30;
        this._score.scaleX=0;
        this._score.scaleY=0;
        Laya.Tween.to(this._score,{y:this._scoreY,scaleX:1,scaleY:1},300,Laya.Ease.backOut)       
    }
}