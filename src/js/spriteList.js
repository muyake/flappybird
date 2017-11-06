import {
    BG
} from './ground.js';
//加载公共函数
import {
    lib
} from './libs/lib.js';
import {
    Pipeline
} from './Pipeline.js';
import {
    config
} from './config.js';
import sourceConfig from './sourceConfig.js';
import grade from './grade.js';
import Bird from './bird.js';
var spriteList = {
    pipelineList: [],
    intervalArr: [{
        mid: 210,
        height: 100,       
    }, {
        mid: 100,
        height: 80
    }, {
        mid: 150,
        height: 90
    }],
    totalScore: 0,
    flag: false,
    init: function() {
        this.background = new BG({
            name: "BG",
            top: 20,
            left: 0
        });
        this.bird = new Bird({
            name: 'bird',
            width: sourceConfig.birdConfig.width,
            height: sourceConfig.birdConfig.height,
        });
        var startleft = 130;
        var interval = config.canvasWidth / 2;
        var self = this;
        this.intervalArr.forEach(function(item, index) {
            var num = config.canvasHeight - config.groundHeight;
            var intervalH = lib.getRandom(num * 0.2, num * 0.25);
            item.left=startleft + interval * index;
            item.width=sourceConfig.pipConfig.width;
            self.pipelineList.push(new Pipeline({
                isDown: true,
                name: "pipeline",
                left: startleft + interval * index,
                height: item.mid - intervalH / 2,
            }));
            self.pipelineList.push(new Pipeline({
                isDown: false,
                name: "pipeline",
                left: startleft + interval * index,
                height: num - item.mid - item.height / 2,
            }));
        });
    },
    update: function() {
        var length = this.pipelineList.length;
        for (var i = 0; i < length; i = i + 2) {
            var item = this.pipelineList[i];
            var downitem = this.pipelineList[i + 1];
            var intervalObjIndex = i / 2;
                var currentIntervalObj = this.intervalArr[intervalObjIndex];
             currentIntervalObj.left=item.left;
            if (item.left < -item.width) {
                item.left += config.canvasWidth * 3 / 2;
                downitem.left += config.canvasWidth * 3 / 2;                
                var preIndex = (intervalObjIndex - 1) < 0 ? this.intervalArr.length - 1 : intervalObjIndex - 1;
                var mid = this.intervalArr[preIndex].mid;
                var sign = Math.random() > 0.5 ? 1 : -1;
                mid += (sign * lib.getRandom(grade.interval[0], grade.interval[1]));
                var intervalObjHeight = lib.getRandom(grade.height[0], grade.height[1]);
                currentIntervalObj.mid = mid;
                currentIntervalObj.height = intervalObjHeight;
                var num = config.canvasHeight - config.groundHeight;
                if (currentIntervalObj.mid - currentIntervalObj.height / 2 > sourceConfig.pipConfig.height * 3 / 4) {
                    currentIntervalObj.mid = sourceConfig.pipConfig.height * 3 / 4 + currentIntervalObj.height / 2;
                }
                if ((num - currentIntervalObj.mid - currentIntervalObj.height / 2) > sourceConfig.pipConfig.height * 3 / 4) {
                    currentIntervalObj.mid = num - currentIntervalObj.height / 2 - sourceConfig.pipConfig.height * 3 / 4;
                }
                item.height = currentIntervalObj.mid - currentIntervalObj.height / 2;
                item.imgtop = sourceConfig.pipConfig.height - item.height;
                item.imgheight = item.height;
                downitem.height = num - currentIntervalObj.mid - currentIntervalObj.height / 2;
                downitem.top = config.canvasHeight - downitem.height - config.groundHeight;
                downitem.imgheight = downitem.height;
            }
        }
    },
    CD:function(){
        var flag=true;
        var self=this;
        this.intervalArr.forEach(function(item){
            if(item.left<(self.bird.left+self.bird.width)&&(item.left+item.width)>self.bird.left){
               if(self.bird.top<(item.mid-item.height/2)-17){
                    self.bird.isDie=true;
                    console.log('碰到上边');
               }
               if((self.bird.top+self.bird.height)>(item.mid+item.height/2)){
                    self.bird.isDie=true;
                    console.log('碰到下边');
               }
            }
        });
    },
    drawScore: function(ctx) {
        ctx.font = 'bold 30px arial';
        ctx.fillStyle = 'red';
        var left = config.canvasWidth - 60;
        ctx.fillText(this.totalScore, left, 40);
    },
    updateScore: function(ctx) {
        var length = this.pipelineList.length;
        if (!this.bird.isDie) {
            for (var i = 0; i < length; i = i + 2) {
                var item = this.pipelineList[i];
                var left1 = item.left;
                var left2 = item.left + item.width;
                if ((left1 < (this.bird.left + this.bird.width)) && left2 > this.bird.left) {
                    this.flag = true;
                }
                if (this.flag == true && left2 <= this.bird.left) {
                    this.flag = false;
                    this.totalScore++;
                }
            }
        }
        this.drawScore(ctx);
        config.grade=parseInt(this.totalScore/config.itemgrade);
       
    },


    draw: function(ctx, time, fpsNum) {
        if(!this.bird.isDie){
             this.CD();
         }       
        this.pipelineList.forEach(function(item) {
            item.draw(ctx, time, fpsNum);
        });
        this.bird.draw(ctx, time, fpsNum);
        this.background.draw(ctx, time, fpsNum);
        this.update();
        this.updateScore(ctx);
    },
    pop: function() {
        if (!this.bird.isDie) {
            this.bird.velocityY = -config.velocityY;
        }
    }
};
export {
    spriteList
}
