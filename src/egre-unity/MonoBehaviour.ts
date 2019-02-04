export class MonoBehaviour<T extends egret.DisplayObject> 
{ 
    private started : boolean = false;
    protected $egretDisplayObject : T;

    isStarted(): boolean {
        return this.started;
    }

    setStarted() : void {
        if(this.started !== false) {
            throw new Error("MonoBehaviour has been started already");
        }
        this.started = true;
    }

    egretDisplayObject() : T {
        return this.$egretDisplayObject;
    }

    async Start() : Promise<void> {};

    Update() : void {}
}