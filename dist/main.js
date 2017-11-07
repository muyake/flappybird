/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var config = {
	canvasWidth: 0,
	canvasHeight: 0,
	groundHeight: 0,
	grade: 1,

	GRAVITY_FORCE: 90 * 6 * 1.5,
	velocityX: 100,
	//velocityX: 500,
	velocityY: 150 * 1.5,
	initVelocityX: 100 * 1.5
};
exports.config = config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//var BG = require(require('.../images/background2.png');


//所有游戏需要加载的外部资源
var gameSourceUrl = {
    imageList: {
        //背景
        // flappybird: require('../Images/ico/flappybird.ico'),
        BG: __webpack_require__(10),
        birds: __webpack_require__(11),
        allbird: __webpack_require__(12),
        btns: __webpack_require__(13),
        gameWords: __webpack_require__(14),
        ground: __webpack_require__(15),
        pipdown: __webpack_require__(16),
        pipup: __webpack_require__(17),
        scordbord: __webpack_require__(18),
        score: __webpack_require__(19)
        // scorenum: require('../Images/scorenum.png'),
        // score0: require('../Images/0.jpg'),
        // score1: require('../Images/1.jpg'),
        // score2: require('../Images/2.jpg'),
        // score3: require('../Images/3.jpg'),
        // score4: require('../Images/4.jpg'),
        // score5: require('../Images/5.jpg'),
        // score6: require('../Images/6.jpg'),
        // score7: require('../Images/7.jpg'),
        // score8: require('../Images/8.jpg'),
        // score9: require('../Images/9.jpg'),

    },
    audioList: {
        hitdie: __webpack_require__(50),
        //  die: require("../Sounds/mp3/Die.mp3"),
        hit: __webpack_require__(52),
        point: __webpack_require__(53),
        swooshing: __webpack_require__(54),
        wing: __webpack_require__(55) //

    }
};
exports.default = gameSourceUrl;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var lib = {
	$: function $(selector) {
		return document.querySelector(selector);
	},
	getRandom: function getRandom(num1, num2) {
		return num1 + Math.random() * (num2 - num1);
	}
};
exports.lib = lib;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneSprite = function (_Sprite) {
    _inherits(SceneSprite, _Sprite);

    function SceneSprite(name, painter, behaviors) {
        _classCallCheck(this, SceneSprite);

        return _possibleConstructorReturn(this, (SceneSprite.__proto__ || Object.getPrototypeOf(SceneSprite)).call(this, name, painter, behaviors));
    }

    _createClass(SceneSprite, [{
        key: 'update',
        value: function update(context, time, fpsNum) {
            for (var i = this.behaviors.length; i > 0; --i) {
                this.behaviors[i - 1].execute(this, context, time, fpsNum);
            }
        }
    }]);

    return SceneSprite;
}(_sprite.Sprite);

exports.default = SceneSprite;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _imagePainter = __webpack_require__(34);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneImagePainter = function (_ImagePainter) {
    _inherits(SceneImagePainter, _ImagePainter);

    function SceneImagePainter(imageUrl) {
        _classCallCheck(this, SceneImagePainter);

        return _possibleConstructorReturn(this, (SceneImagePainter.__proto__ || Object.getPrototypeOf(SceneImagePainter)).call(this, imageUrl));
    }

    _createClass(SceneImagePainter, [{
        key: 'paint',
        value: function paint(sprite, context) {
            if (!!this.image) {
                if (sprite.imgwidth) {
                    context.drawImage(this.image, sprite.imgleft, sprite.imgtop, sprite.imgwidth, sprite.imgheight, sprite.left, sprite.top, sprite.width, sprite.height);
                } else {
                    context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
                }
            }
        }
    }]);

    return SceneImagePainter;
}(_imagePainter.ImagePainter);

exports.default = SceneImagePainter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

//所有行为
var behaviorList = {
    //背景图片用的这个行为
    moveLeftToRight: function moveLeftToRight() {
        this.behaviorName = 'moveLeftToRight';
        this.lastMove = 0;
        this.fpsNum = 60;
        this.execute = function (sprite, context, time, fpsNum) {
            this.fpsNum = fpsNum == 0 ? 0 : fpsNum || this.fpsNum;
            sprite.left -= _config.config.velocityX / this.fpsNum;
            this.lastMove = time;
        };
    },

    //小人跑动动画
    runInPlace: function runInPlace(setting) {
        var defaultSetting = {
            lastAdvance: 0,
            PAGEFLIP_INTERVAL: 30,
            behaviorName: 'runInPlace'
        };
        defaultSetting = Object.assign({}, defaultSetting, setting);
        this.lastAdvance = defaultSetting.lastAdvance;
        this.PAGEFLIP_INTERVAL = defaultSetting.PAGEFLIP_INTERVAL;
        this.behaviorName = defaultSetting.behaviorName;
        this.execute = function (sprite, context, time) {
            if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
                sprite.painter.advance(sprite);
                this.lastAdvance = time;
            }
        };
    }
    //坏花
    // upInPlace: function(setting) {
    //     let defaultSetting = {
    //         lastAdvance: 0,
    //         PAGEFLIP_INTERVAL: 30,
    //         behaviorName: 'runInPlace',
    //     };
    //     lib.jQueryExtend(defaultSetting, setting);
    //     this.lastAdvance = defaultSetting.lastAdvance;
    //     this.PAGEFLIP_INTERVAL = defaultSetting.PAGEFLIP_INTERVAL;
    //     this.behaviorName = defaultSetting.behaviorName;
    //     this.execute = function(sprite, context, time) {
    //         if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {

    //             sprite.painter.advance(sprite);
    //             this.lastAdvance = time;
    //         }
    //     }
    // },
    //小人跳动
    // jump: function(setting) {
    //     let defaultSetting = {
    //         lastAdvance: 0,
    //         isJump: false,
    //         behaviorName: 'jump',
    //         jumpOverCallback: function() {},
    //         status: 0, //0是不跳，1是小跳，2是大跳。
    //     };
    //     lib.jQueryExtend(defaultSetting, setting);
    //     this.lastAdvance = defaultSetting.lastAdvance;
    //     this.behaviorName = defaultSetting.behaviorName;
    //     this.fpsNum = 60;
    //     this.status = defaultSetting.status;
    //     this.jumpOverCallback = defaultSetting.jumpOverCallback;
    //     this.execute = function(sprite, context, time, fpsNum) {
    //         if (this.lastAdvance !== 0) {
    //             if (sprite.velocityY < sprite.startVelocityY) {
    //                 this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
    //                 sprite.velocityY = sprite.velocityY + sprite.GRAVITY_FORCE / this.fpsNum;
    //                 sprite.top += sprite.velocityY / this.fpsNum;
    //                 if (sprite.top < sprite.initialTop) {
    //                     sprite.isJump = true;
    //                 } else {
    //                     sprite.top = sprite.initialTop;
    //                     sprite.isJump = false;
    //                     this.jumpOverCallback();
    //                 }
    //             } else {
    //                 sprite.isJump = false;
    //             }
    //         }
    //         this.lastAdvance = time;
    //     }
    // },
}; //游戏所有元素的动作对象
exports.default = behaviorList;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// 图片大小参数
var sourceConfig = {
	pipConfig: {
		width: 52,
		height: 420
	},
	ground: {
		width: 336,
		height: 112
	},
	birdConfig: {
		width: 40,
		height: 30,
		hconfig: {
			totalCount: 2,
			sprite_0: {
				width: 40,
				height: 26,
				left: 0,
				top: 121
			},

			sprite_1: {
				width: 40,
				height: 26,
				left: 0,
				top: 156
			}
		},
		uconfig: {
			totalCount: 2,
			sprite_0: {
				width: 40,
				height: 29,
				left: 0,
				top: 41
			},

			sprite_1: {
				width: 40,
				height: 29,
				left: 0,
				top: 80
			}
		},
		dconfig: {
			totalCount: 2,
			sprite_0: {
				width: 40,
				height: 30,
				left: 0,
				top: 191
			},
			sprite_1: {
				width: 40,
				height: 30,
				left: 0,
				top: 0
			}
		},
		dieconfig: {
			totalCount: 1,
			sprite_0: {
				width: 40,
				height: 30,
				left: 0,
				top: 191
			}
		}

	}

};
exports.default = sourceConfig;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
    function Sprite() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var painter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var behaviors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, Sprite);

        this.name = name;
        this.painter = painter;
        this.behaviors = behaviors;
        this.left = 0;
        this.top = 0;
        this.width = 10;
        this.height = 10;
        this.visible = true;
        this.velocityX = 0;
        this.velocityY = 0;
        this.initialVelocity = 0;
    }

    _createClass(Sprite, [{
        key: 'paint',
        value: function paint(context) {
            if (this.painter !== undefined && this.visible) {
                this.painter.paint(this, context);
            }
        }
    }, {
        key: 'update',
        value: function update(context, time) {
            for (var i = this.behaviors.length; i > 0; --i) {
                this.behaviors[i - 1].execute(this, context, time);
            }
        }
    }]);

    return Sprite;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(2);

var _adaptation = __webpack_require__(9);

var _gameSource = __webpack_require__(1);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _preload = __webpack_require__(25);

var _gameEngine = __webpack_require__(30);

var _config = __webpack_require__(0);

var _spriteList = __webpack_require__(32);

var _cutscenes = __webpack_require__(42);

var _audioControl = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//html样式
__webpack_require__(43);
//加载公共函数

//加载适配方案

//预加载图片

//预加载图片

//预加载图片


// import {
// 	updateScore
// } from './updateScore.js';

var gameControl = new _gameEngine.Game('flappybird', 'mycanvas');

var option = {
	gameSourceUrl: _gameSource2.default,
	progressCallback: function progressCallback(progress) {
		//console.log(progress);
		var barSelector = _lib.lib.$('.progress-bar');
		barSelector.style.width = progress * 100 + '%';
	},
	progressOverCallback: function progressOverCallback() {
		var groundHeight = window.getComputedStyle(_lib.lib.$('.scroll-ground1'), null).height;
		_cutscenes.cutscenes.ready();
		var canvasWidth = document.body.clientWidth;
		var clientHeight = document.body.clientHeight;
		_config.config.canvasWidth = canvasWidth;
		_config.config.canvasHeight = clientHeight;
		_config.config.ctx = gameControl.context;
		//获取地面高度
		_config.config.groundHeight = parseInt(groundHeight);
		_lib.lib.$('#mycanvas').setAttribute('width', canvasWidth);
		_lib.lib.$('#mycanvas').setAttribute('height', clientHeight);
		_spriteList.spriteList.init();
		// cutscenes.start();
		// gameControl.start();
		_lib.lib.$('.start-btn').addEventListener('click', function () {

			_cutscenes.cutscenes.start();
			gameControl.start();
			_audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.swooshing);
		});
		_lib.lib.$('.restart-btn').addEventListener('click', function () {
			_spriteList.spriteList.reset();
		});
		_lib.lib.$('#mycanvas').addEventListener('touchstart', function () {
			_spriteList.spriteList.pop();
		});
		gameControl.startAnimate = function (time) {
			_spriteList.spriteList.draw(gameControl.context, time, gameControl.fps.num);
		};
	}
};
_adaptation.adaptation.init(function () {
	_config.config.gameSourceObj = _preload.preLoadObj.init(option);
	console.log(_config.config.gameSourceObj);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var adaptation = function () {
    function r(resizeNum, callback) {
        //核心适配代码
        var winW = window.innerWidth;
        document.getElementsByTagName("html")[0].style.fontSize = winW * 0.15625 + "px";
        //核心适配代码
        if (winW > window.screen.width && resizeNum <= 10) {
            setTimeout(function () {
                r(++resizeNum);
            }, 100);
        } else {
            callback();
            document.getElementsByTagName("body")[0].style.opacity = 1;
        }
    }
    return {
        init: function init(callback) {
            window.onresize = r.bind(null, 0, callback);
            setTimeout(function () {
                r(0, callback);
            }, 100);
        }
    };
}();
exports.adaptation = adaptation;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/background.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/birds.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/allbird.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/btns.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/gameWords.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/ground.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipdown.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipup.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/scordbord.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/score.png";

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Promise = __webpack_require__(26).Promise;

var preLoadObj = {
    //Object.prototype.toString.call(o)能直接返回对象的类属性，形如"[object class]"的字符串，我们通过截取class，并能知道传入的对象是什么类型
    isClass: function isClass(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    },
    Regexs: {
        img: /\.jpg$|\.jpeg$|\.png$|\.gif$/i, //图片格式  
        audio: /\.mp3$|\.wmv$/i //图片格式              
    },
    chkFormat: function chkFormat(str, ftype) {
        var nReg = this.Regexs[ftype];
        if (str == null || str == "") return false; //输入为空，认为是验证不通过    
        if (ftype == 'num') {
            if (!nReg.test(str) && !this.chkChinese(str)) {
                //10.23 tenfy 必须为数字且不能有中文    
                return true;
            } else {
                return false;
            }
        }
        if (!nReg.test(str)) {
            return false;
        } else {
            return true;
        }
    },
    gameSourceUrl: null,
    //这里可以改正map对象http://www.cnblogs.com/sker/p/5520392.html
    imgObjList: {},
    totalCount: 0,
    currentNum: 0,
    promiseArr: [],
    //图片加载进行中
    progressCallback: function progressCallback() {},
    //图片加载完成
    progressOverCallback: function progressOverCallback() {},
    preloadImage: function preloadImage(src, result, key) {
        var self = this;
        this.promiseArr.push(new Promise(function (resolve, reject) {
            result[key] = new Image();
            result[key].onload = function () {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
            result[key].onerror = function () {
                self.currentNum++;
                self.addProgress();
                resolve(); //如果加载失败，可以设置游戏未开始。
            };
            result[key].src = src;
        }));
    },
    preloadAudio: function preloadAudio(src, result, key) {
        var self = this;
        this.promiseArr.push(new Promise(function (resolve, reject) {
            result[key] = new Audio(src);
            result[key].onloadedmetadata = function () {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
            result[key].onerror = function () {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
        }));
    },
    preLoad: function preLoad(src, result, key) {
        if (this.chkFormat(src, 'img')) {
            this.preloadImage(src, result, key);
        } else if (this.chkFormat(src, 'audio')) {
            this.preloadAudio(src, result, key);
        } else {
            result[key] = src;
        }
    },
    getSouceCount: function getSouceCount(obj) {
        var self = this;
        for (var key in obj) {
            var copy = obj[key];
            if (this.isClass(copy) == "Object") {
                self.getSouceCount(copy); //递归调用
            } else if (this.isClass(copy) == "Array") {
                self.getSouceCount(copy);
            } else {
                self.totalCount++;
            }
        }
    },
    //将图片或音频转为对象。
    convertToObject: function convertToObject(obj) {
        var self = this;
        var result = void 0,
            oClass = this.isClass(obj);
        if (oClass === "Object") {
            result = {};
        } else if (oClass === "Array") {
            result = [];
        } else {
            return obj;
        }
        for (var key in obj) {
            var copy = obj[key];
            if (this.isClass(copy) == "Object") {
                result[key] = self.convertToObject(copy); //递归调用
            } else if (this.isClass(copy) == "Array") {
                result[key] = self.convertToObject(copy);
            } else {
                self.preLoad(copy, result, key);
            }
        }
        return result;
    },
    //进度条
    addProgress: function addProgress() {},
    setProgress: function setProgress() {
        var count = 0;
        var self = this;
        Promise.all(this.promiseArr).then(function (posts) {
            self.progressOverCallback();
            console.log(self.totalCount);
        }).catch(function (reason) {
            console.log(reason);
            console.log('图片加载错误');
        });
    },
    init: function init(option) {
        var self = this;
        if (typeof option.gameSourceUrl != 'undefined') {
            this.imgUrlArr = option.gameSourceUrl;
        }
        if (typeof option.progressCallback != 'undefined') {
            this.progressCallback = option.progressCallback;
        }
        if (typeof option.progressOverCallback != 'undefined') {
            this.progressOverCallback = option.progressOverCallback;
        }
        self.getSouceCount(option.gameSourceUrl);
        this.addProgress = function () {
            var percent = self.currentNum / self.totalCount;
            self.progressCallback(percent);
        };
        var sourceObj = self.convertToObject(option.gameSourceUrl);
        this.setProgress();
        return sourceObj;
    }
};
exports.preLoadObj = preLoadObj;
//preLoadObj.init(option);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(29);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27), __webpack_require__(28)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Game = undefined;

__webpack_require__(31);

var getTimeNow = function getTimeNow() {
	return +new Date();
};
var Game = function Game(gameName, canvasId) {
	var canvas = document.getElementById(canvasId),
	    self = this; // Used by key event handlers below
	this.speed = 1;
	// General

	this.context = canvas.getContext('2d');
	this.gameName = gameName;
	this.sprites = [];
	this.keyListeners = [];

	// Time

	this.startTime = 0;
	this.lastTime = 0;
	this.gameTime = 0;
	this.fps = {
		num: 0,
		interval: 1000,
		lastTime: 0
	};
	this.STARTING_FPS = 60;

	this.paused = false;
	this.isStart = false;
	this.startedPauseAt = 0;
	this.PAUSE_TIMEOUT = 100;

	window.onkeypress = function (e) {
		self.activeEvent(e, 1);
	};
	window.onkeydown = function (e) {
		self.activeEvent(e, 1);
	};
	window.onkeyup = function (e) {
		self.activeEvent(e, 0);
	};
	return this;
};
Game.prototype = {
	start: function start() {
		var self = this;
		this.startTime = getTimeNow();
		this.isStart = true;
		window.requestNextAnimationFrame(function (time) {
			self.animate.call(self, time);
		});
	},
	animate: function animate(time) {
		var self = this;
		//this.updateFrameRate(time);
		if (this.paused) {
			//每隔100ms，看看是否还处于暂停状态，不需要太频繁。
			setTimeout(function () {
				window.requestNextAnimationFrame(function (time) {
					self.animate.call(self, time);
				});
			}, this.PAUSE_TIMEOUT);
		} else {
			this.tick(time);
			this.clearScreen();
			this.startAnimate(time);
			this.lastTime = time;
			window.requestNextAnimationFrame(function (time) {
				self.animate.call(self, time);
			});
		}
	},
	clearScreen: function clearScreen() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	},
	tick: function tick(time) {
		this.updateFrameRate(time);
		this.gameTime = getTimeNow() - this.startTime;
	},
	updateFrameRate: function updateFrameRate(time) {
		if (this.lastTime === 0) {
			this.fps.num = this.STARTING_FPS;
		} else {
			if (time - this.fps.lastTime > this.fps.interval) {
				//this.fps.num = 1000 / (time - this.lastTime);
				this.fps.num = 60;
				this.fps.lastTime = time;;
			}
		}
	},
	paintUnderSprites: function paintUnderSprites(time) {},

	//监听事件
	addKeyListener: function addKeyListener(keyAndListener) {
		this.keyListeners.push(keyAndListener);
	},
	findKeyListener: function findKeyListener(key) {
		var listener = undefined;
		for (var i = 0; i < this.keyListeners.length; i++) {
			var keyAndListener = this.keyListeners[i];
			var currentKey = keyAndListener.key;
			if (currentKey === key) {
				listener = keyAndListener.listener;
			}
		}
		return listener;
	},
	mapKey: {
		// 38: false,
		// 40: false,
		37: false, //left
		39: false, //right
		32: false
	},
	activeEventCallback: function activeEventCallback(mapKeyArr) {},

	activeEvent: function activeEvent(e, status) {
		var listener = undefined;
		var key = undefined;
		switch (e.keyCode) {
			case 32:
				key = 'space';
				break;
			case 68:
				key = 'd';
				break;
			case 75:
				key = 'k';
				break;
			case 83:
				key = 's';
				break;
			case 80:
				key = 'p';
				break;
			case 37:
				key = 'left arrow';
				break;
			case 39:
				key = 'right arrow';
				break;
			case 38:
				key = 'up arrow';
				break;
			case 40:
				key = 'down arrow';
				break;
		}
		listener = this.findKeyListener(key);
		if (listener) {
			listener(status);
		}
		//this.activeEventCallback(this.mapKey,status);
	},
	togglePaused: function togglePaused() {
		var now = getTimeNow();
		this.paused = !this.paused;
		if (this.paused) {
			this.startedPauseAt = now;
			this.fps.lastTime = now;;
		} else {
			this.startTime = this.startTime + now - this.startedPauseAt;
			this.lastTime = now;
		}
	},
	startAnimate: function startAnimate(time) {}
};
exports.Game = Game;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
window.requestNextAnimationFrame = function () {
  var originalWebkitRequestAnimationFrame = undefined,
      wrapper = undefined,
      callback = undefined,
      geckoVersion = 0,
      userAgent = navigator.userAgent,
      index = 0,
      self = window;
  // Workaround for Chrome 10 bug where Chrome
  // does not pass the time to the animation function

  if (window.webkitRequestAnimationFrame) {
    // Define the wrapper

    wrapper = function wrapper(time) {
      if (time === undefined) {
        time = +new Date();
      }
      self.callback(time);
    };

    // Make the switch

    originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;

    window.webkitRequestAnimationFrame = function (callback, element) {
      self.callback = callback;

      // Browser calls the wrapper and wrapper calls the callback

      originalWebkitRequestAnimationFrame(wrapper, element);
    };
  }

  //解决requestAnimationFrame回调函数的参数不是时间戳，而是时间间隔的问题
  //

  if (window.requestAnimationFrame) {
    // Define the wrapper

    wrapper = function wrapper(time) {
      if (time === undefined) {
        time = +new Date();
      }
      self.callback(time);
    };

    // Make the switch

    originalWebkitRequestAnimationFrame = window.requestAnimationFrame;

    window.requestAnimationFrame = function (callback, element) {
      self.callback = callback;

      // Browser calls the wrapper and wrapper calls the callback

      originalWebkitRequestAnimationFrame(wrapper, element);
    };
  }

  // Workaround for Gecko 2.0, which has a bug in
  // mozRequestAnimationFrame() that restricts animations
  // to 30-40 fps.

  if (window.mozRequestAnimationFrame) {
    // Check the Gecko version. Gecko is used by browsers
    // other than Firefox. Gecko 2.0 corresponds to
    // Firefox 4.0.

    index = userAgent.indexOf('rv:');

    if (userAgent.indexOf('Gecko') != -1) {
      geckoVersion = userAgent.substr(index + 3, 3);

      if (geckoVersion === '2.0') {
        // Forces the return statement to fall through
        // to the setTimeout() function.

        window.mozRequestAnimationFrame = undefined;
      }
    }
  }

  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
    var start, finish;

    window.setTimeout(function () {
      start = +new Date();
      callback(start);
      finish = +new Date();

      self.timeout = 1000 / 60 - (finish - start);
    }, self.timeout);
  };
}();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spriteList = undefined;

var _ground = __webpack_require__(33);

var _lib = __webpack_require__(2);

var _Pipeline = __webpack_require__(35);

var _config = __webpack_require__(0);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _grade = __webpack_require__(36);

var _grade2 = _interopRequireDefault(_grade);

var _bird = __webpack_require__(37);

var _bird2 = _interopRequireDefault(_bird);

var _audioControl = __webpack_require__(49);

var _cutscenes = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//加载公共函数
var spriteList = {
    pipelineList: [],
    intervalArr: [{
        mid: 210,
        height: 100
    }, {
        mid: 150,
        height: 80
    }, {
        mid: 180,
        height: 90
    }],
    totalScore: 0,
    flag: false,
    init: function init() {
        this.background = new _ground.BG({
            name: "BG",
            top: 20,
            left: 0
        });
        this.bird = new _bird2.default({
            name: 'bird',
            width: _sourceConfig2.default.birdConfig.width,
            height: _sourceConfig2.default.birdConfig.height,
            dieCallback: function dieCallback() {
                _config.config.velocityX = 0;
                _lib.lib.$('.scoreNum').innerHTML = spriteList.totalScore;
                var maxNum;
                var local = localStorage.getItem('maxNum');
                if (local) {
                    maxNum = parseInt(local);
                } else {
                    maxNum = 0;
                }
                if (spriteList.totalScore > maxNum) {
                    maxNum = spriteList.totalScore;
                    localStorage.setItem('maxNum', spriteList.totalScore);
                }
                _lib.lib.$('.maxscoreNum').innerHTML = maxNum;
                _cutscenes.cutscenes.stop();
            }
        });
        var startleft = _config.config.canvasWidth - _sourceConfig2.default.pipConfig.width;
        var interval = _config.config.canvasWidth / 2;
        var self = this;
        this.intervalArr.forEach(function (item, index) {
            var num = _config.config.canvasHeight - _config.config.groundHeight;
            var intervalH = _lib.lib.getRandom(num * 0.2, num * 0.25);
            item.left = startleft + interval * index;
            item.width = _sourceConfig2.default.pipConfig.width;
            self.pipelineList.push(new _Pipeline.Pipeline({
                isDown: true,
                name: "pipeline",
                left: startleft + interval * index,
                height: item.mid - intervalH / 2
            }));
            self.pipelineList.push(new _Pipeline.Pipeline({
                isDown: false,
                name: "pipeline",
                left: startleft + interval * index,
                height: num - item.mid - item.height / 2
            }));
        });
    },
    update: function update() {
        var length = this.pipelineList.length;
        for (var i = 0; i < length; i = i + 2) {
            var item = this.pipelineList[i];
            var downitem = this.pipelineList[i + 1];
            var intervalObjIndex = i / 2;
            var currentIntervalObj = this.intervalArr[intervalObjIndex];
            currentIntervalObj.left = item.left;
            if (item.left < -item.width) {
                item.left += _config.config.canvasWidth * 3 / 2;
                downitem.left += _config.config.canvasWidth * 3 / 2;
                var preIndex = intervalObjIndex - 1 < 0 ? this.intervalArr.length - 1 : intervalObjIndex - 1;
                var mid = this.intervalArr[preIndex].mid;
                var sign = Math.random() > 0.5 ? 1 : -1;
                mid += sign * _lib.lib.getRandom(_grade2.default.interval[0], _grade2.default.interval[1]);
                var intervalObjHeight = _lib.lib.getRandom(_grade2.default.height[0], _grade2.default.height[1]);
                currentIntervalObj.mid = mid;
                currentIntervalObj.height = intervalObjHeight;
                var num = _config.config.canvasHeight - _config.config.groundHeight;
                if (currentIntervalObj.mid - currentIntervalObj.height / 2 > _sourceConfig2.default.pipConfig.height * 3 / 4) {
                    currentIntervalObj.mid = _sourceConfig2.default.pipConfig.height * 3 / 4 + currentIntervalObj.height / 2;
                }
                if (num - currentIntervalObj.mid - currentIntervalObj.height / 2 > _sourceConfig2.default.pipConfig.height * 3 / 4) {
                    currentIntervalObj.mid = num - currentIntervalObj.height / 2 - _sourceConfig2.default.pipConfig.height * 3 / 4;
                }
                item.height = currentIntervalObj.mid - currentIntervalObj.height / 2;
                item.imgtop = _sourceConfig2.default.pipConfig.height - item.height;
                item.imgheight = item.height;
                downitem.height = num - currentIntervalObj.mid - currentIntervalObj.height / 2;
                downitem.top = _config.config.canvasHeight - downitem.height - _config.config.groundHeight;
                downitem.imgheight = downitem.height;
            }
        }
    },
    CD: function CD() {
        var flag = true;
        var self = this;
        this.intervalArr.forEach(function (item) {
            if (item.left < self.bird.left + self.bird.width && item.left + item.width > self.bird.left) {
                if (self.bird.top < item.mid - item.height / 2 - 17) {
                    self.bird.isDie = true;

                    //audioControl.audioPlay(config.gameSourceObj.audioList.hit);
                    _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.hitdie);
                    console.log('碰到上边');

                    // self.bird.painter = self.bird.painters.die;
                }
                if (self.bird.top + self.bird.height > item.mid + item.height / 2) {
                    self.bird.isDie = true;
                    // audioControl.audioPlay(config.gameSourceObj.audioList.hit);
                    _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.hitdie);
                    console.log('碰到下边');
                    // self.bird.painter = self.bird.painters.die;
                }
            }
        });
    },
    drawScore: function drawScore(ctx) {
        ctx.font = 'bold 30px arial';
        ctx.fillStyle = 'red';
        var left = _config.config.canvasWidth - 60;
        ctx.fillText(this.totalScore, left, 40);
    },
    updateScore: function updateScore(ctx) {
        var length = this.pipelineList.length;
        if (!this.bird.isDie) {
            for (var i = 0; i < length; i = i + 2) {
                var item = this.pipelineList[i];
                var left1 = item.left;
                var left2 = item.left + item.width;
                if (left1 < this.bird.left + this.bird.width && left2 > this.bird.left) {
                    this.flag = true;
                }
                if (this.flag == true && left2 <= this.bird.left) {
                    this.flag = false;
                    this.totalScore++;
                    _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.point, 0.15);
                }
            }
            _config.config.grade = parseInt(this.totalScore / _grade2.default.itemgrade);
            _grade2.default.height[0] = _grade2.default.initheight[0] - _config.config.grade * _grade2.default.heightChangeNum;
            _grade2.default.height[1] = _grade2.default.initheight[1] - _config.config.grade * _grade2.default.heightChangeNum;
            _grade2.default.initinterval[0] = _grade2.default.initinterval[0] + _config.config.grade * _grade2.default.intervalChangeNum;
            _grade2.default.initinterval[1] = _grade2.default.initinterval[1] + _config.config.grade * _grade2.default.intervalChangeNum;
            _config.config.velocityX = _config.config.initVelocityX + _config.config.grade * _grade2.default.velocityXChangeNum;
        }
        this.drawScore(ctx);
    },
    draw: function draw(ctx, time, fpsNum) {
        if (!this.bird.isDie) {
            this.CD();
        }
        this.pipelineList.forEach(function (item) {
            item.draw(ctx, time, fpsNum);
        });
        this.bird.draw(ctx, time, fpsNum);
        this.background.draw(ctx, time, fpsNum);
        this.update();
        this.updateScore(ctx);
    },
    pop: function pop() {
        if (!this.bird.isDie) {
            this.bird.velocityY = -_config.config.velocityY;
            _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.wing);
        }
    },
    reset: function reset() {
        _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.swooshing);
        this.totalScore = 0;
        this.pipelineList = [];
        this.intervalArr = [{
            mid: 210,
            height: 100
        }, {
            mid: 150,
            height: 80
        }, {
            mid: 180,
            height: 90
        }];
        this.init();
        _cutscenes.cutscenes.restart();
    }

};
exports.spriteList = spriteList;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BG = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(1);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite2 = __webpack_require__(3);

var _SceneSprite3 = _interopRequireDefault(_SceneSprite2);

var _SceneImagePainter = __webpack_require__(4);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(5);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//预加载图片


var BG = function (_SceneSprite) {
    _inherits(BG, _SceneSprite);

    function BG(setting) {
        _classCallCheck(this, BG);

        var _this = _possibleConstructorReturn(this, (BG.__proto__ || Object.getPrototypeOf(BG)).call(this, setting.name, new _SceneImagePainter2.default(_gameSource2.default.imageList.ground), [new _behaviorList2.default.moveLeftToRight()]));

        _this.width = _config.config.canvasWidth;
        _this.height = _config.config.groundHeight;
        console.log(_config.config.clientHeight);
        _this.top = _config.config.canvasHeight - _config.config.groundHeight;
        console.log(_this.top);
        _this.left = setting.left || 0;
        // this.velocityX = -config.velocityX;
        return _this;
    }

    _createClass(BG, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.update(ctx, time, fpsNum);
            var left = this.left;
            left = left > -_config.config.canvasWidth ? left : 0;
            this.left = left;
            this.paint(ctx);
            this.left = left + this.width;
            this.paint(ctx);
            this.left = left;
        }
    }]);

    return BG;
}(_SceneSprite3.default);

exports.BG = BG;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//画笔对象
var ImagePainter = function () {
    function ImagePainter(imageUrl) {
        _classCallCheck(this, ImagePainter);

        if (!!imageUrl) {
            this.image = new Image();
            this.image.src = imageUrl;
        }
    }

    _createClass(ImagePainter, [{
        key: "paint",
        value: function paint(sprite, context) {
            if (!!this.image) {
                context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
            }
        }
    }]);

    return ImagePainter;
}();

exports.ImagePainter = ImagePainter;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pipeline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(1);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite2 = __webpack_require__(3);

var _SceneSprite3 = _interopRequireDefault(_SceneSprite2);

var _SceneImagePainter = __webpack_require__(4);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(5);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//预加载图片


var Pipeline = function (_SceneSprite) {
    _inherits(Pipeline, _SceneSprite);

    function Pipeline(setting) {
        _classCallCheck(this, Pipeline);

        if (setting.isDown) {
            var _this = _possibleConstructorReturn(this, (Pipeline.__proto__ || Object.getPrototypeOf(Pipeline)).call(this, setting.name, new _SceneImagePainter2.default(_gameSource2.default.imageList.pipdown), [new _behaviorList2.default.moveLeftToRight()]));

            _this.top = 0;
            _this.imgtop = _sourceConfig2.default.pipConfig.height - setting.height;
        } else {
            var _this = _possibleConstructorReturn(this, (Pipeline.__proto__ || Object.getPrototypeOf(Pipeline)).call(this, setting.name, new _SceneImagePainter2.default(_gameSource2.default.imageList.pipup), [new _behaviorList2.default.moveLeftToRight()]));

            _this.top = _config.config.canvasHeight - setting.height - _config.config.groundHeight;
            _this.imgtop = 0;
        }
        _this.width = _sourceConfig2.default.pipConfig.width;
        _this.height = setting.height;
        _this.left = setting.left || 0;
        _this.velocityX = -_config.config.velocityX;
        _this.imgwidth = _this.width;
        _this.imgheight = setting.height;
        _this.imgleft = 0;
        return _possibleConstructorReturn(_this);
    }

    _createClass(Pipeline, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.update(ctx, time, fpsNum);
            this.paint(ctx);
        }
    }]);

    return Pipeline;
}(_SceneSprite3.default);

exports.Pipeline = Pipeline;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var grade = {
	initheight: [80, 120],
	//间隙高度变换范围
	height: [80, 120],
	//等级高度减小数额
	heightChangeNum: 5,
	initinterval: [50, 100],
	//间隙变换浮动范围
	interval: [50, 100],
	//等级差距增大数额
	intervalChangeNum: 5,
	//速度增加数值
	velocityXChangeNum: 10,
	//没得20分，难度增加一级
	itemgrade: 20
};
exports.default = grade;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(1);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite = __webpack_require__(3);

var _SceneSprite2 = _interopRequireDefault(_SceneSprite);

var _SceneImagePainter = __webpack_require__(4);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(5);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

var _CharacterRunSpriteSheetPainter = __webpack_require__(38);

var _CharacterRunSpriteSheetPainter2 = _interopRequireDefault(_CharacterRunSpriteSheetPainter);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _sprite = __webpack_require__(7);

var _CharacterSpriteAnimator = __webpack_require__(40);

var _CharacterSpriteAnimator2 = _interopRequireDefault(_CharacterSpriteAnimator);

var _audioControl = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//预加载图片


var Bird = function (_Sprite) {
    _inherits(Bird, _Sprite);

    function Bird(setting) {
        _classCallCheck(this, Bird);

        var _this = _possibleConstructorReturn(this, (Bird.__proto__ || Object.getPrototypeOf(Bird)).call(this, setting.name));

        _this.painters = {
            run: new _CharacterRunSpriteSheetPainter2.default(_sourceConfig2.default.birdConfig.hconfig, _gameSource2.default.imageList.allbird, _sourceConfig2.default.birdConfig.hconfig.totalCount),
            up: new _CharacterRunSpriteSheetPainter2.default(_sourceConfig2.default.birdConfig.uconfig, _gameSource2.default.imageList.allbird, _sourceConfig2.default.birdConfig.uconfig.totalCount),
            down: new _CharacterRunSpriteSheetPainter2.default(_sourceConfig2.default.birdConfig.dconfig, _gameSource2.default.imageList.allbird, _sourceConfig2.default.birdConfig.dconfig.totalCount),
            die: new _CharacterRunSpriteSheetPainter2.default(_sourceConfig2.default.birdConfig.dieconfig, _gameSource2.default.imageList.allbird, _sourceConfig2.default.birdConfig.dieconfig.totalCount)

        };
        _this.isDie = false;
        _this.name = 'bird';
        _this.translateLeft = 0;
        _this.width = setting.width || _sourceConfig2.default.birdConfig.width;
        _this.height = setting.height || _sourceConfig2.default.birdConfig.height;
        _this.top = 200;
        _this.left = 50;
        _this.velocityY = -_config.config.velocityY;
        _this.GRAVITY_FORCE = _config.config.GRAVITY_FORCE; //重力             
        _this.upColliding = null; //下面的墙或管道等 
        _this.initialTop = _config.config.canvasHeight - _this.height - _config.config.groundHeight;
        _this.behaviorStatus = {
            runInPlace: new _behaviorList2.default.runInPlace({
                PAGEFLIP_INTERVAL: 100
            })
        };
        _this.behaviors = [_this.behaviorStatus.runInPlace];
        _this.painter = _this.painters.up;
        var self = _this;
        _this.monsterSpriteAnimatorJump = new _CharacterSpriteAnimator2.default(function die() {
            if (!self.isDie) {
                _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.hit);
            }
            self.isDie = true;
            console.log('die');
            self.painter = self.painters.die;

            setting.dieCallback();
        }, _this);
        _this.monsterSpriteAnimatorJump.start();
        return _this;
    }

    _createClass(Bird, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
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
    }]);

    return Bird;
}(_sprite.Sprite);

exports.default = Bird;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(39);

var _config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterRunSpriteSheetPainter = function (_SpriteSheetPainter) {
    _inherits(CharacterRunSpriteSheetPainter, _SpriteSheetPainter);

    function CharacterRunSpriteSheetPainter(cells, spritesheeturl, imgcount) {
        _classCallCheck(this, CharacterRunSpriteSheetPainter);

        var _this = _possibleConstructorReturn(this, (CharacterRunSpriteSheetPainter.__proto__ || Object.getPrototypeOf(CharacterRunSpriteSheetPainter)).call(this, cells, spritesheeturl));

        _this.imgcount = imgcount;
        return _this;
    }

    _createClass(CharacterRunSpriteSheetPainter, [{
        key: 'paint',
        value: function paint(sprite, context) {
            var cell = this.cells['sprite_' + this.cellIndex];
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
    }, {
        key: 'advance',
        value: function advance(sprite, context) {
            this.cellIndex++;
            if (this.cellIndex == this.imgcount) {
                this.cellIndex = 0;
            }
        }
    }]);

    return CharacterRunSpriteSheetPainter;
}(_spriteSheetPainter.SpriteSheetPainter);

exports.default = CharacterRunSpriteSheetPainter;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//雪碧图的对象
var SpriteSheetPainter = function () {
    function SpriteSheetPainter() {
        var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var spritesheeturl = arguments[1];

        _classCallCheck(this, SpriteSheetPainter);

        this.cells = cells;
        this.spritesheet = new Image();
        this.spritesheet.src = spritesheeturl;
        this.cellIndex = 0;
        // this.mycanvas = mycanvas;
    }
    //雪碧图的轮播


    _createClass(SpriteSheetPainter, [{
        key: "advance",
        value: function advance() {
            if (this.cellIndex == this.cells.length - 1) {
                this.cellIndex = 0;
            } else {
                this.cellIndex++;
            }
        }
        //雪碧图的绘制

    }, {
        key: "paint",
        value: function paint(sprite, context) {
            var cell = this.cells[this.cellIndex];
            context.drawImage(this.spritesheet.cell.left, cell.top, cell.width, cell.heightsprite.left, sprite.top, cell.width, cell.height);
        }
    }]);

    return SpriteSheetPainter;
}();

exports.SpriteSheetPainter = SpriteSheetPainter;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterSpriteAnimator = function (_SpriteAnimator) {
    _inherits(CharacterSpriteAnimator, _SpriteAnimator);

    function CharacterSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, CharacterSpriteAnimator);

        var _this = _possibleConstructorReturn(this, (CharacterSpriteAnimator.__proto__ || Object.getPrototypeOf(CharacterSpriteAnimator)).call(this, undefined, elapsedCallback));

        if (elapsedCallback) {
            _this.elapsedCallback = elapsedCallback;
        }
        _this.sprite = sprite;
        _this.isRunning = false;
        return _this;
    }

    _createClass(CharacterSpriteAnimator, [{
        key: 'end',
        value: function end(sprite) {
            sprite.animating = false;
            if (this.elapsedCallback) {
                this.elapsedCallback(sprite);
            }
        }
    }, {
        key: 'start',
        value: function start() {
            this.isRunning = true;
        }
    }, {
        key: 'execute',
        value: function execute() {
            var animator = this;
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
    }]);

    return CharacterSpriteAnimator;
}(_spriteAnimator.SpriteAnimator);

exports.default = CharacterSpriteAnimator;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//这是过程动画，在本游戏中没有用到
var SpriteAnimator = function () {
    function SpriteAnimator() {
        var painters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var elapsedCallback = arguments[1];

        _classCallCheck(this, SpriteAnimator);

        this.painters = painters;
        if (elapsedCallback) {
            this.elapsedCallback = elapsedCallback;
        }
        // this.painters = [];
        this.duration = 1000;
        this.startTime = 0;
        this.index = 0;
        this.elapsedCallback = undefined;
    }

    _createClass(SpriteAnimator, [{
        key: "end",
        value: function end(sprite, originalPainter) {
            sprite.animating = false;
            if (this.elapsedCallback) {
                this.elapsedCallback(sprite);
            } else {
                sprite.painter = originalPainter;
            }
        }
    }, {
        key: "start",
        value: function start(sprite, duration) {
            var endTime = +new Date() + duration;
            var periond = duration / this.painters.length;
            var interval = undefined;
            var animator = this;
            var originalPainter = sprite.painters;
            this.index = 0;
            sprite.animating = true;
            sprite.painter = this.painters[this.index];
            interval = setInterval(function () {
                if (+new Date() < endTime) {
                    sprite.painter = animator.painters[++animator.index];
                } else {
                    animator.end(sprite, originalPainter);
                    clearInterval(interval);
                }
            }, period);
        }
    }]);

    return SpriteAnimator;
}();

exports.SpriteAnimator = SpriteAnimator;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cutscenes = undefined;

var _lib = __webpack_require__(2);

//过场动画
var cutscenes = {
    ready: function ready() {
        var barSelector = _lib.lib.$('.progress-box');
        barSelector.style.display = 'none';
        var barSelector = _lib.lib.$('.start-screen');
        barSelector.style.display = 'block';
    },
    start: function start() {
        var barSelector = _lib.lib.$('.start-screen');
        barSelector.style.display = 'none';
    },
    restart: function restart() {
        _lib.lib.$('.over-screen').style.display = 'none';
        // lib.$('.over-screen').style.opacity = 0;
        _lib.lib.$('.over-screen').className = 'over-screen';
        // lib.$('.get-over').style.opacity = 0;
        _lib.lib.$('.get-over').className = 'get-over';
        //lib.$('.score-board').style.opacity = 0;
        _lib.lib.$('.score-board').className = 'score-board';
        //lib.$('.restart-btn').style.opacity = 0;
        _lib.lib.$('.restart-btn').className = 'restart-btn';
    },
    stop: function stop() {
        _lib.lib.$('.over-screen').style.display = 'block';
        setTimeout(function () {
            //lib.$('.over-screen').style.opacity = 1;
            _lib.lib.$('.over-screen').className = 'over-screen fadeIn animated';
            console.log('.over-screen');
        }, 0);
        setTimeout(function () {
            //lib.$('.get-over').style.opacity = 1;
            _lib.lib.$('.get-over').className = 'get-over animated bounce';
            console.log('.get-over');
        }, 0);
        setTimeout(function () {
            //lib.$('.score-board').style.opacity = 1;
            _lib.lib.$('.score-board').className = 'score-board animated bounceInUp';
            console.log('.score-board');
        }, 0);
        setTimeout(function () {
            // lib.$('.restart-btn').style.opacity = 1;
            _lib.lib.$('.restart-btn').className = 'restart-btn zoomIn animated';
            console.log('.restart-btn');
        }, 0);
    }
}; //加载公共函数
exports.cutscenes = cutscenes;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//audioControl
var audioControl = {
    //如果isplay不传，则总是播放，如果传了则只播放一次，例如人物死亡
    audioPlay: function audioPlay(audioObj) {
        var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        audioObj.currentTime = startTime;
        audioObj.play();
    },
    BGMPlay: function BGMPlay(audioObj) {
        audioObj.loop = true;
        audioObj.volume = 0.2;
        audioObj.play();
    },
    BGMPause: function BGMPause(audioObj) {
        audioObj.pause();
    },

    timeupdateAddEventListener: function timeupdateAddEventListener(audioObj) {
        audioObj.addEventListener('timeupdate', function () {
            if (this.currentTime > this.endTime) {
                this.pause();
            }
        }, false);
    }
};
exports.audioControl = audioControl;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/hitdie.mp3";

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/hit.mp3";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/point.mp3";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/swooshing.mp3";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/wing.mp3";

/***/ })
/******/ ]);