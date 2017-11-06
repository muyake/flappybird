import {
    config
} from './config.js';
//预加载图片
import gameSourceUrl from './gameSource.js';
import SceneSprite from './SceneSprite.js';
import SceneImagePainter from './SceneImagePainter.js';
import behaviorList from './behaviorList.js';
class BG extends SceneSprite {
    constructor(setting) {
        super(setting.name, new SceneImagePainter(gameSourceUrl.imageList.ground), [new behaviorList.moveLeftToRight()]);
        this.width = config.canvasWidth;
        this.height = config.groundHeight;
        console.log(config.clientHeight);
        this.top = config.canvasHeight - config.groundHeight;
        console.log(this.top);
        this.left = setting.left || 0;
        this.velocityX = -100;
    }
    draw(ctx, time, fpsNum) {
        this.update(ctx, time, fpsNum);
        let left = this.left;
        if (this.velocityX > 0) {
            left = left < config.canvasWidth ? left : 0;
        } else {
            left = left > -config.canvasWidth ? left : 0;
        }
        this.left = left;
        this.paint(ctx);
        this.left = left + this.width;
        this.paint(ctx);
        this.left = left;
    }
}
export {
    BG
}