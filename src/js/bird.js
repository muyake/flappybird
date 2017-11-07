import {
    config
} from './config.js';
//预加载图片
import gameSourceUrl from './gameSource.js';
import SceneSprite from './SceneSprite.js';
import SceneImagePainter from './SceneImagePainter.js';
import behaviorList from './behaviorList.js';
import CharacterRunSpriteSheetPainter from './CharacterRunSpriteSheetPainter.js';
import sourceConfig from './sourceConfig.js';
import {
    Sprite
} from './libs/sprite.js'
import CharacterSpriteAnimator from './CharacterSpriteAnimator.js';
import {
    audioControl
}
from './audioControl';
class Bird extends Sprite {
    constructor(setting) {
        super(setting.name);
        this.painters = {
            run: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.hconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.hconfig.totalCount),
            up: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.uconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.uconfig.totalCount),
            down: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.dconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.dconfig.totalCount),
            die: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.dieconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.dieconfig.totalCount),

        };
        this.isDie = false;
        this.name = 'bird';
        this.translateLeft = 0;
        this.width = setting.width || sourceConfig.birdConfig.width;
        this.height = setting.height || sourceConfig.birdConfig.height;
        this.top = 200;
        this.left = 50;
        this.velocityY = -config.velocityY;
        this.GRAVITY_FORCE = config.GRAVITY_FORCE; //重力             
        this.upColliding = null; //下面的墙或管道等 
        this.initialTop = config.canvasHeight - this.height - config.groundHeight;
        this.behaviorStatus = {
            runInPlace: new behaviorList.runInPlace({
                PAGEFLIP_INTERVAL: 100
            }),
        };
        this.behaviors = [this.behaviorStatus.runInPlace];
        this.painter = this.painters.up;
        var self = this;
        this.monsterSpriteAnimatorJump = new CharacterSpriteAnimator(function die() {
            if (!self.isDie) {
                audioControl.audioPlay(config.gameSourceObj.audioList.hit);
            }
            self.isDie = true;
            console.log('die');
            self.painter = self.painters.die;

            setting.dieCallback();
        }, this);
        this.monsterSpriteAnimatorJump.start();
    }
    draw(ctx, time, fpsNum) {
        this.fpsNum = fpsNum; //给monsterSpriteAnimator传递fpsnumbehaviors     
        this.monsterSpriteAnimatorJump.execute();
        this.update(ctx, time, fpsNum);
        this.paint(ctx);
        if (!this.isDie) {
            if (this.velocityY <= 0) {
                this.painter = this.painters.up;
            } else {
                this.painter = this.painters.down;
            }
        }

    }
}

export default Bird;