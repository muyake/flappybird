import {
    config
} from './config.js';
//预加载图片
import gameSourceUrl from './gameSource.js';
import SceneSprite from './SceneSprite.js';
import SceneImagePainter from './SceneImagePainter.js';
import behaviorList from './behaviorList.js';
import sourceConfig from './sourceConfig.js';
class Pipeline extends SceneSprite {
    constructor(setting) {
        if (setting.isDown) {
            super(setting.name, new SceneImagePainter(gameSourceUrl.imageList.pipdown), [new behaviorList.moveLeftToRight()]);
            this.top = 0;
            this.imgtop = sourceConfig.pipConfig.height - setting.height;
        } else {
            super(setting.name, new SceneImagePainter(gameSourceUrl.imageList.pipup), [new behaviorList.moveLeftToRight()]);
            this.top = config.canvasHeight - setting.height - config.groundHeight;
            this.imgtop = 0;
        }
        this.width = sourceConfig.pipConfig.width;
        this.height = setting.height;
        this.left = setting.left || 0;
        this.velocityX = -100;
        this.imgwidth = this.width;
        this.imgheight = setting.height;
        this.imgleft = 0;
    }
    draw(ctx, time, fpsNum) {
        this.update(ctx, time, fpsNum);
        this.paint(ctx);
    }
}
export {
    Pipeline
}