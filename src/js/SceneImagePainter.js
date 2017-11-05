import {ImagePainter} from './libs/imagePainter.js'
class SceneImagePainter extends ImagePainter {
    constructor(imageUrl) {
        super(imageUrl);
    }
    paint(sprite, context) {
        if (!!this.image) {
            if (sprite.imgwidth) {               
                context.drawImage(this.image, sprite.imgleft, sprite.imgtop, sprite.imgwidth, sprite.imgheight, sprite.left, sprite.top,
                    sprite.width, sprite.height);
            } else {
                context.drawImage(this.image, sprite.left, sprite.top,
                    sprite.width, sprite.height);
            }
        }
    }
}
export default SceneImagePainter;