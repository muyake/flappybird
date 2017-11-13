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
	GRAVITY_FORCE: 90 * 6 * 1,
	velocityX: 100,
	velocityY: 150 * 1.1,
	initVelocityX: 100 * 1,
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

if (!Object.assign) {
  // 定义assign方法
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target) {
      // assign方法的第一个参数
      'use strict';
      // 第一个参数为空，则抛错

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      // 遍历剩余所有参数
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        // 参数为空，则跳过，继续下一个
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        // 获取改参数的所有key值，并遍历
        var keysArray = Object.keys(nextSource);
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          // 如果不为空且可枚举，则直接浅拷贝赋值
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}
console.log('Object.assign兼容性处理');
var lib = {
  $: function $(selector) {
    return document.querySelector(selector);
  },
  getRandom: function getRandom(num1, num2) {
    return num1 + Math.random() * (num2 - num1);
  },
  is_weixin: function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
};
exports.lib = lib;

/***/ }),
/* 2 */
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

var _imagePainter = __webpack_require__(31);

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

var _lib = __webpack_require__(1);

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

        var main = _lib.lib.$('.main');
        main.style.display = 'block';
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

//html样式

var _lib = __webpack_require__(1);

var _adaptation = __webpack_require__(11);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _preload = __webpack_require__(26);

var _gameEngine = __webpack_require__(27);

var _config = __webpack_require__(0);

var _spriteList = __webpack_require__(29);

var _cutscenes = __webpack_require__(9);

var _audioControl = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(39);
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
		_lib.lib.$('.start-btn').style.backgroundPosition = 'left top';
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/hitdie.mp3";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/hit.mp3";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/point.mp3";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/swooshing.mp3";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/wing.mp3";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preLoadObj = undefined;

var _lib = __webpack_require__(1);

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
        result[key] = new Image();
        result[key].onload = function () {
            self.currentNum++;
            self.addProgress();
            console.log(key);
            // resolve();
        };
        result[key].onerror = function () {
            self.currentNum++;
            self.addProgress();
            // resolve(); //如果加载失败，可以设置游戏未开始。
        };
        result[key].src = src;
    },
    preloadAudio: function preloadAudio(src, result, key) {
        var self = this;
        result[key] = new Audio();
        var WIFI = navigator.userAgent.toLowerCase().indexOf('wifi');
        //在微信中且不连接wifi
        if (_lib.lib.is_weixin() && WIFI < 0) {
            self.currentNum++;
            self.addProgress();
            console.log(key + '微信中打开)');
            //  resolve();
            result[key].src = src;
        } else {
            result[key].onloadedmetadata = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + '成功');
                // resolve();
            };
            result[key].onerror = function () {
                self.currentNum++;
                self.addProgress();
                console.log(key + '失败');
                // resolve();
            };
            result[key].src = src;
        }
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
    checkFullProgress: function checkFullProgress() {
        var count = 0;
        var self = this;
        if (self.totalCount == self.currentNum) {
            self.progressOverCallback();
        }
        // Promise.all(this.promiseArr).then(function(posts) {
        //     self.progressOverCallback();
        //     console.log('资源加载完成');
        //     console.log(self.totalCount);
        // }).catch(function(reason) {
        //     console.log(reason);
        //     console.log('图片加载错误');
        // });
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
            self.checkFullProgress();
        };
        var sourceObj = self.convertToObject(option.gameSourceUrl);

        return sourceObj;
    }
}; //加载公共函数
exports.preLoadObj = preLoadObj;
//preLoadObj.init(option);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Game = undefined;

__webpack_require__(28);

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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spriteList = undefined;

var _ground = __webpack_require__(30);

var _lib = __webpack_require__(1);

var _Pipeline = __webpack_require__(32);

var _config = __webpack_require__(0);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _grade = __webpack_require__(33);

var _grade2 = _interopRequireDefault(_grade);

var _bird = __webpack_require__(34);

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
                var min = Math.min(_sourceConfig2.default.pipConfig.height * 3 / 4, num * 4 / 5);
                var max = Math.min(_sourceConfig2.default.pipConfig.height * 1 / 5, num * 1 / 5);
                //上面太长
                if (currentIntervalObj.mid - currentIntervalObj.height / 2 > min) {
                    currentIntervalObj.mid = min + currentIntervalObj.height / 2;
                }
                //上面太短
                if (currentIntervalObj.mid - currentIntervalObj.height / 2 < max) {
                    currentIntervalObj.mid = max + currentIntervalObj.height / 2;
                }
                //下面太长
                if (num - currentIntervalObj.mid - currentIntervalObj.height / 2 > min) {
                    currentIntervalObj.mid = num - currentIntervalObj.height / 2 - min;
                }
                //下面太短
                if (num - currentIntervalObj.mid - currentIntervalObj.height / 2 < max) {
                    currentIntervalObj.mid = num - currentIntervalObj.height / 2 - max;
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
            _audioControl.audioControl.audioPlay(_config.config.gameSourceObj.audioList.swooshing);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BG = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(2);

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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pipeline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(2);

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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite = __webpack_require__(3);

var _SceneSprite2 = _interopRequireDefault(_SceneSprite);

var _SceneImagePainter = __webpack_require__(4);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(5);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

var _CharacterRunSpriteSheetPainter = __webpack_require__(35);

var _CharacterRunSpriteSheetPainter2 = _interopRequireDefault(_CharacterRunSpriteSheetPainter);

var _sourceConfig = __webpack_require__(6);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _sprite = __webpack_require__(8);

var _CharacterSpriteAnimator = __webpack_require__(37);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(36);

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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(38);

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
/* 38 */
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
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);