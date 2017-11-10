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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
	GRAVITY_FORCE: 90 * 6 * 1.2,
	velocityX: 100,
	velocityY: 150 * 1.2,
	initVelocityX: 100 * 1.2,
	adaptation: false
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
        BG: __webpack_require__(12),
        birds: __webpack_require__(13),
        allbird: __webpack_require__(14),
        btns: __webpack_require__(15),
        gameWords: __webpack_require__(16),
        ground: __webpack_require__(17),
        pipdown: __webpack_require__(18),
        pipup: __webpack_require__(19),
        //scordbord: require('../Images/scordbord.png'),
        score: __webpack_require__(20)

    },
    audioList: {
        hitdie: __webpack_require__(21),
        //  die: require("../Sounds/mp3/Die.mp3"),
        hit: __webpack_require__(22),
        point: __webpack_require__(23),
        swooshing: __webpack_require__(24),
        wing: __webpack_require__(25) //

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

var _sprite = __webpack_require__(8);

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

var _imagePainter = __webpack_require__(35);

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
				top: 88
			},

			sprite_1: {
				width: 40,
				height: 26,
				left: 0,
				top: 114
			}
		},
		uconfig: {
			totalCount: 2,
			sprite_0: {
				width: 40,
				height: 29,
				left: 0,
				top: 30
			},

			sprite_1: {
				width: 40,
				height: 29,
				left: 0,
				top: 59
			}
		},
		dconfig: {
			totalCount: 2,
			sprite_0: {
				width: 40,
				height: 30,
				left: 0,
				top: 140
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
				top: 0
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
/* 8 */
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
/* 9 */
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
        _lib.lib.$('.over-screen').className = 'over-screen fadeIn animated';
        _lib.lib.$('.get-over').className = 'get-over animated bounce';
        _lib.lib.$('.score-board').className = 'score-board animated bounceInUp';
        _lib.lib.$('.restart-btn').className = 'restart-btn zoomIn animated';
    }
}; //加载公共函数
exports.cutscenes = cutscenes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(2);

var _adaptation = __webpack_require__(11);

var _gameSource = __webpack_require__(1);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _preload = __webpack_require__(26);

var _gameEngine = __webpack_require__(31);

var _config = __webpack_require__(0);

var _spriteList = __webpack_require__(33);

var _cutscenes = __webpack_require__(9);

var _audioControl = __webpack_require__(7);

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
	//适配时会执行多次，这样就执行一次。
	if (!_config.config.adaptation) {
		_config.config.adaptation = true;
		_config.config.gameSourceObj = _preload.preLoadObj.init(option);
		console.log(_config.config.gameSourceObj);
	}
});

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/background.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/birds.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/allbird2.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/btns.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/gameWords.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/ground.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipdown.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipup.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/score.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,SUQzAwAAAAAAI1RTU0UAAAAPAAAATGF2ZjU3LjQxLjEwMAAAAAAAAAAAAAAA//uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAoAABC7wAMDBISGBgYHx8lJSUrKzExMTg4Pj4+RERKSkpRUVdXV11dY2NjampwcHB2dnx8fIODiYmJj4+VlZWcnKKioqiorq6utbW7u7vBwcfHx87O1NTU2trg4ODn5+3t7fPz+fn5//8AAAAATGF2YzU3LjQ4AAAAAAAAAAAAAAAAJAAAAAAAAAAAQu9qikjSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uSZECP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVL9Xs86kIIPQSxUNhfB6CEIw/x6zzHwAQgIaC7pARBywfOHZCtpukbgMNAoQEdK+JKYIqIA2ntwSEU0hlL9OtmBhCl2mgWkWYX3NLQNdJw63OI2JAQhmICgM0gNr7iTkTcuRugoAuiUqkZZSu279HKH8llvVJSclb/xeILvce1DDn/+5JkQI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAAQO5Dl6G2cPxNuW78/KIcqv5DmNPG6fsAP4AGRCIe04A6Hj+j//oBm0AYGf/7+AIiEQ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YGAYNiRgnYabCw/scv/7kkQSAIJ8RUrwPaswUOipzQO1WApVFSmI9pCBNiKneA7RaEZaPs7fzf9zUZYMXAYbSYBwxGaLqSKX//1FKRAFi6Wn///56sMHL////pngAAPQAIAAAB+qCrQXeX4yAQfHgAXeXMMCQlAx4npq6DRNp4QstH2dq//s5qK2BvYDFK1AGIIsoipeRS//+ojnHACh5LT///89WCYAX////TPDgAFgAwAA6//WgmyzAi4HutdwF5hYDDAkqD0wyDFwAwgBlcu9DtNZ76SPWh60DMhgcWNgDhTQRXxsFtnb//6iaJIIBQFoqD///83qBvL////llogAAwAQ/cdpI3RfhKy0rT30ZmIAIMAyYO/i2MTgJDACWq70tprPfS/9aBmTAe2N4DdQQRUyEPs///6iaJIGgYETk0///9OoL4////5ZagADAQDLHLLGAh0ImpQhk5awxrQ837psxFCYwIANIpiL/Rmm56L/9nYrjRBoBQMGOADCIAFykWLqSP//2LwsQREQDQJLy///+aUwbWP////zFwAAAAgAAIAAHCmlMa7jWJT/+5JEMISCiEVJQB2rQFHImc8DtWgJtRUn4PaOgTMipvAO0WAMe6QOugAMTTXNmYXMLweAwArGcmNUuXPRf/3Y3HkM5AwMsACgcOaXkUl///YvDSCIWCzJl///6GFwz////zF//6QgAABAAAQNL/5gPmc4imrxd5fwwJBkyGH44JjgwZBdbD6k0YpL0v/UswI8McE7AcsYC3EYRVNmf//9MaQQmAs2bI///9OgFzLf///zA/OADACD/1NxCn/OWJ1rUXeXAMCwbMjiKOI5QMGQXWw+pNGKS9//UmYEeGOCPgOiMCnUYRVNmf//9MaQNTQFgZeR///6dQN4T3///8wP1QOAAwAYAGff/AMG6krQxdtlCAswABwxdEw+QNsoKwiAJtSJFU2Z6v/smXBxhkwNFiF+SHGKS///1mZEgaggFBeVm///6rhvz////zn+sAAABoAAMAAP/cYjcg3UlacrtsoQFmAQQGMYrH2xzlBgjwBM1HcTpsz1f+6CZOC4w1gQLsG9SHGKSKv//rMx3A1BQLDM2b///quG/f///5xAO45Z//uSRFCJgmxFSeA9q6BPiJm+A7VYCcDdIKB6jRFBHCa0DtFoYzSOjvQCwogADMA0Uc0Y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"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Promise = __webpack_require__(27).Promise;

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
                console.log(key);
                resolve();
            };
            result[key].onerror = function () {
                self.currentNum++;
                self.addProgress();
                resolve(); //如果加载失败，可以设置游戏未开始。
            };
            resolve();
            result[key].src = src;
        }));
    },
    preloadAudio: function preloadAudio(src, result, key) {
        var self = this;
        console.log(key);
        this.promiseArr.push(new Promise(function (resolve, reject) {
            result[key] = new Audio();
            result[key].onloadedmetadata = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + '成功');
                resolve();
            };
            result[key].onerror = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + '失败');
                resolve();
            };
            result[key].oncanplaythrough = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + '：oncanplaythrough');
                resolve();
            };
            result[key].oncanplay = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + 'oncanplay)');
                resolve();
            };
            result[key].ondurationchange = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + 'ondurationchange)');
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
            console.log('资源加载完成');
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
/* 27 */
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
    var vertx = __webpack_require__(30);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28), __webpack_require__(29)))

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Game = undefined;

__webpack_require__(32);

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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spriteList = undefined;

var _ground = __webpack_require__(34);

var _lib = __webpack_require__(2);

var _Pipeline = __webpack_require__(36);

var _config = __webpack_require__(0);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _grade = __webpack_require__(37);

var _grade2 = _interopRequireDefault(_grade);

var _bird = __webpack_require__(38);

var _bird2 = _interopRequireDefault(_bird);

var _audioControl = __webpack_require__(7);

var _cutscenes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//加载公共函数
var spriteList = {
    pipelineList: [],
    intervalArr: [{
        mid: 210,
        height: 100
    }, {
        mid: 160,
        height: 95
    }, {
        mid: 180,
        height: 90
    }],
    totalScore: 0,
    flag: false,
    init: function init() {
        console.log('init');
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
            item.left = startleft + interval * index;
            item.width = _sourceConfig2.default.pipConfig.width;
            self.pipelineList.push(new _Pipeline.Pipeline({
                isDown: true,
                name: "pipeline",
                left: startleft + interval * index,
                height: item.mid - item.height / 2
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
                if (self.bird.top + 2 <= item.mid - item.height / 2) {
                    self.bird.isDie = true;
                    self.bird.velocityY = 0;

                    //audioControl.audioPlay(config.gameSourceObj.audioList.hit);
                    _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.hitdie, 0.2);
                    // console.log('碰到上边');
                    _config.config.velocityX = 0;

                    // self.bird.painter = self.bird.painters.die;
                }
                if (self.bird.top + self.bird.height - 2 >= item.mid + item.height / 2) {
                    self.bird.isDie = true;
                    // audioControl.audioPlay(config.gameSourceObj.audioList.hit);
                    _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.hitdie, 0.2);
                    //console.log('碰到下边');
                    _config.config.velocityX = 0;
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
        this.update();
        this.pipelineList.forEach(function (item) {
            item.draw(ctx, time, fpsNum);
        });
        if (!this.bird.isDie) {
            this.CD();
        }
        this.bird.draw(ctx, time, fpsNum);
        this.background.draw(ctx, time, fpsNum);
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
            mid: 160,
            height: 95
        }, {
            mid: 180,
            height: 90
        }];
        _config.config.velocityX = 100;
        this.init();
        _cutscenes.cutscenes.restart();
    }

};
exports.spriteList = spriteList;

/***/ }),
/* 34 */
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
        // console.log(config.clientHeight);
        _this.top = _config.config.canvasHeight - _config.config.groundHeight;
        // console.log(this.top);
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var grade = {
	initheight: [100, 150],
	//间隙高度变换范围
	height: [100, 150],
	//等级高度减小数额
	heightChangeNum: 5,
	initinterval: [50, 80],
	//间隙变换浮动范围
	interval: [50, 80],
	//等级差距增大数额
	intervalChangeNum: 5,
	//速度增加数值
	velocityXChangeNum: 10,
	//没得20分，难度增加一级
	itemgrade: 20
};
exports.default = grade;

/***/ }),
/* 38 */
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

var _CharacterRunSpriteSheetPainter = __webpack_require__(39);

var _CharacterRunSpriteSheetPainter2 = _interopRequireDefault(_CharacterRunSpriteSheetPainter);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _sprite = __webpack_require__(8);

var _CharacterSpriteAnimator = __webpack_require__(41);

var _CharacterSpriteAnimator2 = _interopRequireDefault(_CharacterSpriteAnimator);

var _audioControl = __webpack_require__(7);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(40);

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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(42);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);