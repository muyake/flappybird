import {
    SpriteSheetPainter
} from './libs/spriteSheetPainter';
import {
    config
} from './config.js';
class CharacterRunSpriteSheetPainter extends SpriteSheetPainter {
    constructor(cells, spritesheeturl, imgcount) {
        super(cells, spritesheeturl);
        this.imgcount = imgcount;
    }
    paint(sprite, context) {
        let cell = this.cells['sprite_' + this.cellIndex];
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);

        // if (sprite.isReverse) {
        //     context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
        // } else {
        //     context.translate(config.canvasWidth, 0);
        //     context.scale(-1, 1)
        //     context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, config.canvasWidth - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
        //     context.translate(config.canvasWidth, 0);
        //     context.scale(-1, 1);
        // }
    }
    advance(sprite, context) {
        this.cellIndex++;
        if (this.cellIndex == this.imgcount) {
            this.cellIndex = 0;
        }
    }
}
export default CharacterRunSpriteSheetPainter;