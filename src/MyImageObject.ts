import { MonoBehaviour } from "./egre-unity/MonoBehaviour";

export　class MyImageObject extends  MonoBehaviour<egret.Bitmap> {

    private egretMoveFlag : boolean = false;

    
    async Start(): Promise<void> {
        this.$egretDisplayObject = this.createBitmapByName("egret_icon_png");
        this.egretMoveFlag = true;
        this.$egretDisplayObject.touchEnabled =true;
        this.$egretDisplayObject.x = 100;
        this.$egretDisplayObject.y = 100 + Math.floor( Math.random() * 300 );
        this.$egretDisplayObject.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.egretTouch, this );
    }

    Udate() : void {
        if(this.egretMoveFlag == true){
            this.$egretDisplayObject.x += 1;
            this.$egretDisplayObject.y += 0;
        }
    }

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private moveStop() : boolean{
        this.egretMoveFlag = false;
        this.$egretDisplayObject.touchEnabled = false;
        return false;
    }

    private egretTouch(evt:egret.TouchEvent){
        this.moveStop();
    }

};
