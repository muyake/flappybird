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
//预加载图片
import {
	Game
} from './libs/gameEngine.js';
import {
	config
} from './config.js';
import {
	spriteList
} from './spriteList.js';
import {
	cutscenes
} from './cutscenes.js';
import {
	updateScore
} from './updateScore.js';

var gameControl = new Game('flappybird', 'mycanvas');


var option = {
	gameSourceUrl: gameSourceUrl,
	progressCallback: function(progress) {
		//console.log(progress);
		var barSelector = lib.$('.progress-bar');
		barSelector.style.width = (progress * 100) + '%';
	},
	progressOverCallback: function() {
		var groundHeight = window.getComputedStyle(lib.$('.scroll-ground1'), null).height;
		cutscenes.ready();
		var canvasWidth = document.body.clientWidth;
		var clientHeight = document.body.clientHeight;
		config.canvasWidth = canvasWidth;
		config.canvasHeight = clientHeight;
		config.ctx = gameControl.context;
		//获取地面高度
		config.groundHeight = parseInt(groundHeight);
		lib.$('#mycanvas').setAttribute('width', canvasWidth);
		lib.$('#mycanvas').setAttribute('height', clientHeight);
		spriteList.init();
		cutscenes.start();
		gameControl.start();
		lib.$('.start-btn').addEventListener('click', function() {
			cutscenes.start();
			gameControl.start();
		});
		lib.$('#mycanvas').addEventListener('touchstart', function() {
			spriteList.pop();
		});
		gameControl.startAnimate = function(time) {
			spriteList.draw(gameControl.context, time, gameControl.fps.num, updateScore.changeScore);
		};
	},
};
adaptation.init(function() {
	var gameSourceObj = preLoadObj.init(option);
	console.log(gameSourceObj);
})