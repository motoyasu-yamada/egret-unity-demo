import { MonoBehaviour } from "./MonoBehaviour";

export class Scene {
    private egretDisplayObjectContainer : egret.DisplayObjectContainer;
    private monoBehaviours: MonoBehaviour<egret.DisplayObject>[] = [];

    constructor(egretDisplayObjectContainer: egret.DisplayObjectContainer) {
        this.egretDisplayObjectContainer = egretDisplayObjectContainer;
    }

    public remove(o : MonoBehaviour<egret.DisplayObject>) {
        this.egretDisplayObjectContainer.removeChild(o.egretDisplayObject());
        this.monoBehaviours = this.monoBehaviours.filter (e => e !== o);
    }

    public add(o: MonoBehaviour<egret.DisplayObject>) {
        this.egretDisplayObjectContainer.addChild(o.egretDisplayObject());
        this.monoBehaviours.push(o);
    }

    public doFrame() {
        const toBeStarted = this.monoBehaviours.filter(e => !e.isStarted());
        Promise.all(toBeStarted.map(e => e.Start()));
        toBeStarted.forEach(e => e.setStarted());

        this.monoBehaviours.forEach(e => e.Update());
    }
}