//html样式
require('../css/main.css');

//加载公共函数
import {
	lib
} from './libs/lib.js';
//加载适配方案
import {
	adaptation
} from './libs/adaptation.js';
//预加载图片
import gameSourceUrl from './gameSource.js';
//预加载图片
import {
	preLoadObj
} from './libs/preload.js';
var option = {
	gameSourceUrl: gameSourceUrl,
	progressCallback: function(progress) {
		//console.log(progress);
		var barSelector = lib.$('.progress-bar');
		barSelector.style.width = (progress * 100) + '%';
	},
	progressOverCallback: function() {
		// console.log(preLoadObj.imgObjList['http://www.muyake.site/web/pubuliu/1.jpg'].src);
		// var barSelector = lib.$('.progress-box');
		// barSelector.style.display = 'none';
	},
};
adaptation.init(function() {
	var gameSourceObj = preLoadObj.init(option);
	console.log(gameSourceObj);
})