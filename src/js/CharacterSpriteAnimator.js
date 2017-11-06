import {
    SpriteAnimator
} from './libs/spriteAnimator';
class CharacterSpriteAnimator extends SpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(undefined, elapsedCallback);
        if (elapsedCallback) {
            this.elapsedCallback = elapsedCallback;
        }
        this.sprite = sprite;
        this.isRunning = false;
    }
    end(sprite) {
        sprite.animating = false;
        if (this.elapsedCallback) {
            this.elapsedCallback(sprite);
        }
    }
    start() {
        this.isRunning = true;
    }

    execute() {
        let animator = this;
        if (animator.isRunning) {
            this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
            this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
            if (this.sprite.top < this.sprite.initialTop) {
                this.sprite.isJump = true;
            } else {
                this.sprite.top = this.sprite.initialTop;
                this.sprite.isJump = false;
                animator.isRunning = false;
                animator.end(this.sprite); //一定要放到isRunning = false;下面
            }
        }
    }
}
export default CharacterSpriteAnimator;