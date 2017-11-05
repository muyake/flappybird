import {Sprite} from './libs/sprite.js'
class SceneSprite extends Sprite {
    constructor(name, painter, behaviors) {
        super(name, painter, behaviors);
    }
    update(context, time, fpsNum) {
        for (let i = this.behaviors.length; i > 0; --i) {
            this.behaviors[i - 1].execute(this, context, time, fpsNum);
        }
    }
}
export default SceneSprite;