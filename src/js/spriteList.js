import {BG} from './ground.js';

var spriteList = {       
      init:function(){
        this.background= new BG({
        name: "BG",       
        top: 20,
        left: 0
    });
      }
  // groundList: {
  //   smallTree: new Sprite('sky1', new ImagePainter('./image/tree/smalltree.png'), [new behaviorList.moveLeftToRight()]),
  //   twotrunksTree: new Sprite('sky1', new ImagePainter('./image/tree/tree-twotrunks.png'), [new behaviorList.moveLeftToRight()]),
  // },
  // grassList: {
  //   grass: new Sprite('grass1', new GrassImagePainter('./image/grass/grass.png'), [new behaviorList.moveLeftToRight()]),
  //   GRASS_VELOCITX: 0,
  //   grassOffset: 0
  // },
  // SpriteSheetPainter:new PeopleSpriteSheetPainter(config.runnerCells,'./image/runpeople.png', true),
  // bird: new Sprite('runner', peopleSpriteSheetPainter),
  // spriteInit: function() {
  //   this.skySprite.width = game.mycanvas.width;
  //   this.skySprite.height = 500;
  //   this.skySprite.velocityX = 8 * gameControl.speed;
  //   this.skySprite.top = 0;
  //   this.skySprite.left = 0;
  //   //treeinit
  //   this.treeList.smallTree.width = 137;
  //   this.treeList.smallTree.height = 165;
  //   this.treeList.smallTree.top = 232;
  //   this.treeList.smallTree.left = 0;
  //   this.treeList.smallTree.initialVelocitX = 20 * gameControl.speed;

  //   //bigtreeinit
  //   this.treeList.twotrunksTree.width = 224;
  //   this.treeList.twotrunksTree.height = 224;
  //   this.treeList.twotrunksTree.top = 185;
  //   this.treeList.twotrunksTree.left = 0;
  //   this.treeList.twotrunksTree.initialVelocitX = 40 * gameControl.speed;

  //   //grass
  //   this.grassList.initialGRASS_VELOCITX = -75 * gameControl.speed;
  //   this.grassList.grass.width = game.mycanvas.width;
  //   this.grassList.grass.height = 52;
  //   this.grassList.grass.top = game.mycanvas.height - spriteList.grassList.grass.height;

  //   //people
  //   var size = 2;
  //   this.peopleSprite.velocityX = 50;
  //   //this.peopleSprite.velocityY = 50;
  //   this.peopleSprite.width = 35 * size;
  //   this.peopleSprite.height = 64 * size;
  //   this.peopleSprite.top = game.mycanvas.height - this.peopleSprite.height;
  //   this.peopleSprite.left = game.mycanvas.width / 2 - this.peopleSprite.width / 2;
  //   // this.peopleSprite.behaviors = [behaviorList.jump];
  //   behaviorList.jump.initialTop = this.peopleSprite.top;
  //   spriteList.peopleSprite.behaviors = [behaviorList.runInPlace];
  // }
};
export {spriteList}