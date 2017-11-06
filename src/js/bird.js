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

class Bird extends Sprite {
    constructor(setting) {
        super(setting.name);
        this.painters = {
            run: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.hconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.hconfig.totalCount),
            up: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.uconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.uconfig.totalCount),
            down: new CharacterRunSpriteSheetPainter(sourceConfig.birdConfig.dconfig, gameSourceUrl.imageList.allbird, sourceConfig.birdConfig.dconfig.totalCount),
        };
        this.isDie = false;
        this.name = 'bird';
        this.translateLeft = 0;
        this.width = setting.width || sourceConfig.birdConfig.width;
        this.height = setting.height || sourceConfig.birdConfig.height;
        this.top = 200;
        this.left = 10;
        this.velocityY = -150;
        this.GRAVITY_FORCE = config.GRAVITY_FORCE; //重力             
        this.upColliding = null; //下面的墙或管道等 
        this.initialTop = config.canvasHeight - this.height - config.groundHeight;
        this.behaviorStatus = {
            runInPlace: new behaviorList.runInPlace({
                PAGEFLIP_INTERVAL: 100
            }),
        };
        this.behaviors = [this.behaviorStatus.runInPlace];
        this.painter = this.painters.down;
        this.monsterSpriteAnimatorJump = new CharacterSpriteAnimator(function die() {
            console.log('die');
        }, this);
        this.monsterSpriteAnimatorJump.start();
    }
    draw(ctx, time, fpsNum) {
        this.fpsNum = fpsNum; //给monsterSpriteAnimator传递fpsnumbehaviors
        // if (!gameControl.gamePause) {
        //     this.monsterSpriteAnimatorMove.execute();
        //     this.monsterSpriteAnimatorJump.execute();
        //     this.update(ctx, time, fpsNum);
        // }
        this.monsterSpriteAnimatorJump.execute();
        this.update(ctx, time, fpsNum);
        this.paint(ctx);
    }
}

export default Bird;