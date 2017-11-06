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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(28);

var _adaptation = __webpack_require__(1);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _preload = __webpack_require__(18);

var _gameEngine = __webpack_require__(30);

var _config = __webpack_require__(29);

var _spriteList = __webpack_require__(32);

var _cutscenes = __webpack_require__(39);

var _updateScore = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//html样式
__webpack_require__(23);
//加载公共函数

//加载适配方案

//预加载图片

//预加载图片

//预加载图片


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
		_cutscenes.cutscenes.start();
		gameControl.start();
		_lib.lib.$('.start-btn').addEventListener('click', function () {
			_cutscenes.cutscenes.start();
			gameControl.start();
		});
		_lib.lib.$('#mycanvas').addEventListener('touchstart', function () {
			_spriteList.spriteList.pop();
		});
		gameControl.startAnimate = function (time) {
			_spriteList.spriteList.draw(gameControl.context, time, gameControl.fps.num, _updateScore.updateScore.changeScore);
		};
	}
};
_adaptation.adaptation.init(function () {
	var gameSourceObj = _preload.preLoadObj.init(option);
	console.log(gameSourceObj);
});

/***/ }),
/* 1 */
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
        BG: __webpack_require__(3),
        birds: __webpack_require__(4),
        allbird: __webpack_require__(43),
        btns: __webpack_require__(5),
        gameWords: __webpack_require__(6),
        ground: __webpack_require__(7),
        pipdown: __webpack_require__(8),
        pipup: __webpack_require__(9),
        scordbord: __webpack_require__(10),
        score: __webpack_require__(11),
        // scorenum: require('../Images/scorenum.png'),
        score0: __webpack_require__(50),
        score1: __webpack_require__(53),
        score2: __webpack_require__(51),
        score3: __webpack_require__(52),
        score4: __webpack_require__(54),
        score5: __webpack_require__(55),
        score6: __webpack_require__(56),
        score7: __webpack_require__(57),
        score8: __webpack_require__(58),
        score9: __webpack_require__(59)

    },
    audioList: {
        die: __webpack_require__(13),
        hit: __webpack_require__(14),
        point: __webpack_require__(15),
        swooshing: __webpack_require__(16),
        wing: __webpack_require__(17) //

    }
};
exports.default = gameSourceUrl;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/background.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/birds.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/btns.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/gameWords.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/ground.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipdown.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/pipup.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/scordbord.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/score.png";

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/Die.mp3";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/point.mp3";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/mp3/swooshing.mp3";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:audio/mpeg;base64,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"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Promise = __webpack_require__(19).Promise;

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
/* 19 */
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
    var vertx = __webpack_require__(22);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(21)))

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
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
/* 29 */
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
	GRAVITY_FORCE: 90 * 6

};
exports.config = config;

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
				key = 'space';break;
			case 68:
				key = 'd';break;
			case 75:
				key = 'k';break;
			case 83:
				key = 's';break;
			case 80:
				key = 'p';break;
			case 37:
				key = 'left arrow';break;
			case 39:
				key = 'right arrow';break;
			case 38:
				key = 'up arrow';break;
			case 40:
				key = 'down arrow';break;
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

var _lib = __webpack_require__(28);

var _Pipeline = __webpack_require__(40);

var _config = __webpack_require__(29);

var _sourceConfig = __webpack_require__(41);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _grade = __webpack_require__(42);

var _grade2 = _interopRequireDefault(_grade);

var _bird = __webpack_require__(44);

var _bird2 = _interopRequireDefault(_bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//加载公共函数
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
      height: _sourceConfig2.default.birdConfig.height
    });
    var startleft = 130;
    var interval = _config.config.canvasWidth / 2;
    var self = this;
    this.intervalArr.forEach(function (item, index) {
      var num = _config.config.canvasHeight - _config.config.groundHeight;
      var intervalH = _lib.lib.getRandom(num * 0.2, num * 0.25);
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
      if (item.left < -item.width) {
        item.left += _config.config.canvasWidth * 3 / 2;
        downitem.left += _config.config.canvasWidth * 3 / 2;
        var intervalObjIndex = i / 2;
        var currentIntervalObj = this.intervalArr[intervalObjIndex];
        var preIndex = intervalObjIndex - 1 < 0 ? this.intervalArr.length - 1 : intervalObjIndex - 1;
        var mid = this.intervalArr[preIndex].mid;
        var sign = Math.random() > 0.5 ? 1 : -1;
        mid += sign * _lib.lib.getRandom(-_grade2.default['grade' + _config.config.grade].interval[0], _grade2.default['grade' + _config.config.grade].interval[1]);
        var intervalObjHeight = _lib.lib.getRandom(_grade2.default['grade' + _config.config.grade].height[0], _grade2.default['grade' + _config.config.grade].height[1]);
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
  updateScore: function updateScore(callback) {
    var length = this.pipelineList.length;
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
        callback(this.totalScore);
        // console.log(this.totalScore);
      }
    }
  },

  draw: function draw(ctx, time, fpsNum, callback) {
    this.pipelineList.forEach(function (item) {
      item.draw(ctx, time, fpsNum);
    });
    this.bird.draw(ctx, time, fpsNum);
    this.background.draw(ctx, time, fpsNum);
    this.update();
    this.updateScore(callback);
  },
  pop: function pop() {
    if (!this.bird.idDie) {
      this.bird.velocityY = -150;
    }
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

var _config = __webpack_require__(29);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite2 = __webpack_require__(34);

var _SceneSprite3 = _interopRequireDefault(_SceneSprite2);

var _SceneImagePainter = __webpack_require__(36);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(38);

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
        _this.velocityX = -100;
        return _this;
    }

    _createClass(BG, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.update(ctx, time, fpsNum);
            var left = this.left;
            if (this.velocityX > 0) {
                left = left < _config.config.canvasWidth ? left : 0;
            } else {
                left = left > -_config.config.canvasWidth ? left : 0;
            }
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

var _sprite = __webpack_require__(35);

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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _imagePainter = __webpack_require__(37);

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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//游戏所有元素的动作对象

// import {
//     lib
// } from './public.js';

// import {
//     progressObj,
//     PJNum,
//     totalProgressSprite,
//     createFactory
// }
// from './gameProgress';
//所有行为
var behaviorList = {
    //背景图片用的这个行为
    moveLeftToRight: function moveLeftToRight() {
        this.behaviorName = 'moveLeftToRight';
        this.lastMove = 0;
        this.fpsNum = 60;
        this.execute = function (sprite, context, time, fpsNum) {
            this.fpsNum = fpsNum == 0 ? 0 : fpsNum || this.fpsNum;
            sprite.left += sprite.velocityX / this.fpsNum;
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
};
exports.default = behaviorList;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cutscenes = undefined;

var _lib = __webpack_require__(28);

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
  stop: function stop() {}
}; //加载公共函数
exports.cutscenes = cutscenes;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pipeline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(29);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite2 = __webpack_require__(34);

var _SceneSprite3 = _interopRequireDefault(_SceneSprite2);

var _SceneImagePainter = __webpack_require__(36);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(38);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

var _sourceConfig = __webpack_require__(41);

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
        _this.velocityX = -100;
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
/* 41 */
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
		}

	}

};
exports.default = sourceConfig;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _grade;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var grade = (_grade = {
	grade1: {
		height: [100, 150],
		interval: [20, 50]
	},
	grade2: {
		height: [100, 140],
		interval: [30, 60]
	}
}, _defineProperty(_grade, "grade2", []), _defineProperty(_grade, "grade3", []), _defineProperty(_grade, "grade4", []), _defineProperty(_grade, "grade5", []), _grade);
exports.default = grade;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/allbird.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(29);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _SceneSprite = __webpack_require__(34);

var _SceneSprite2 = _interopRequireDefault(_SceneSprite);

var _SceneImagePainter = __webpack_require__(36);

var _SceneImagePainter2 = _interopRequireDefault(_SceneImagePainter);

var _behaviorList = __webpack_require__(38);

var _behaviorList2 = _interopRequireDefault(_behaviorList);

var _CharacterRunSpriteSheetPainter = __webpack_require__(45);

var _CharacterRunSpriteSheetPainter2 = _interopRequireDefault(_CharacterRunSpriteSheetPainter);

var _sourceConfig = __webpack_require__(41);

var _sourceConfig2 = _interopRequireDefault(_sourceConfig);

var _sprite = __webpack_require__(35);

var _CharacterSpriteAnimator = __webpack_require__(47);

var _CharacterSpriteAnimator2 = _interopRequireDefault(_CharacterSpriteAnimator);

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
            down: new _CharacterRunSpriteSheetPainter2.default(_sourceConfig2.default.birdConfig.dconfig, _gameSource2.default.imageList.allbird, _sourceConfig2.default.birdConfig.dconfig.totalCount)
        };
        _this.isDie = false;
        _this.name = 'bird';
        _this.translateLeft = 0;
        _this.width = setting.width || _sourceConfig2.default.birdConfig.width;
        _this.height = setting.height || _sourceConfig2.default.birdConfig.height;
        _this.top = 200;
        _this.left = 50;
        _this.velocityY = -150;
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
        _this.monsterSpriteAnimatorJump = new _CharacterSpriteAnimator2.default(function die() {
            this.isDie = true;
            console.log('die');
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
            if (this.velocityY <= 0) {
                this.painter = this.painters.up;
            } else {
                this.painter = this.painters.down;
            }
        }
    }]);

    return Bird;
}(_sprite.Sprite);

exports.default = Bird;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(46);

var _config = __webpack_require__(29);

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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(48);

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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateScore = undefined;

var _lib = __webpack_require__(28);

var _gameSource = __webpack_require__(2);

var _gameSource2 = _interopRequireDefault(_gameSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//加载公共函数
var updateScore = {
	changeScore: function changeScore(num) {
		var str = new String(num);
		var arr = str.split('');
		var length = arr.length;
		var overNume = length > 4 ? 4 : length;
		for (var i = 1; i <= overNume; i++) {
			switch (i) {
				case 1:
					_lib.lib.$('.count').style.backgroundImage = "url(" + _gameSource2.default.imageList['score' + arr[length - i]] + ")";
					break;
				case 2:
					_lib.lib.$('.ten').style.backgroundImage = "url(" + _gameSource2.default.imageList['score' + arr[length - i]] + ")";
					break;
				case 3:
					_lib.lib.$('.h').style.backgroundImage = "url(" + _gameSource2.default.imageList['score' + arr[length - i]] + ")";
					break;
				case 4:
					_lib.lib.$('.th').style.backgroundImage = "url(" + _gameSource2.default.imageList['score' + arr[length - i]] + ")";
					break;
			}
		}
	}
};
exports.updateScore = updateScore;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/0.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/2.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/3.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/1.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/4.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/5.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/6.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/7.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/8.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./static/img/9.jpg";

/***/ })
/******/ ]);