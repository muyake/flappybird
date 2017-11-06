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
    height: 100
  }, {
    mid: 100,
    height: 80
  }, {
    mid: 150,
    height: 90
  }],
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
    var startleft = 30;
    var interval = config.canvasWidth / 2;
    var self = this;
    this.intervalArr.forEach(function(item, index) {
      var num = config.canvasHeight - config.groundHeight;
      var intervalH = lib.getRandom(num * 0.2, num * 0.25);
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
      var downitem = this.pipelineList[i + 1]
      if (item.left < -item.width) {
        item.left += config.canvasWidth * 3 / 2;
        downitem.left += config.canvasWidth * 3 / 2;
        var intervalObjIndex = i / 2;
        var currentIntervalObj = this.intervalArr[intervalObjIndex];
        var preIndex = (intervalObjIndex - 1) < 0 ? this.intervalArr.length - 1 : intervalObjIndex - 1;
        var mid = this.intervalArr[preIndex].mid;
        var sign = Math.random() > 0.5 ? 1 : -1;
        mid += (sign * lib.getRandom(-grade['grade' + config.grade].interval[0], grade['grade' + config.grade].interval[1]));
        var intervalObjHeight = lib.getRandom(grade['grade' + config.grade].height[0], grade['grade' + config.grade].height[1]);
        currentIntervalObj.mid = mid;
        currentIntervalObj.height = intervalObjHeight;
        var num = config.canvasHeight - config.groundHeight;
        if (currentIntervalObj.mid - currentIntervalObj.height / 2 > sourceConfig.pipConfig.height) {
          currentIntervalObj.mid = sourceConfig.pipConfig.height - currentIntervalObj.height / 3;
        }
        if ((num - currentIntervalObj.mid - currentIntervalObj.height / 2) > sourceConfig.pipConfig.height) {
          currentIntervalObj.mid = num + currentIntervalObj.height - sourceConfig.pipConfig.height;
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
  draw: function(ctx, time, fpsNum) {
    this.pipelineList.forEach(function(item) {
      item.draw(ctx, time, fpsNum);
    });
    this.bird.draw(ctx, time, fpsNum);
    this.background.draw(ctx, time, fpsNum);
    this.update();
  }
};
export {
  spriteList
}