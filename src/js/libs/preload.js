var Promise = require('es6-promise').Promise;

var preLoadObj = {
    //Object.prototype.toString.call(o)能直接返回对象的类属性，形如"[object class]"的字符串，我们通过截取class，并能知道传入的对象是什么类型
    isClass: function(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    },
    Regexs: {
        img: (/\.jpg$|\.jpeg$|\.png$|\.gif$/i), //图片格式  
        audio: (/\.mp3$|\.wmv$/i), //图片格式              
    },
    chkFormat: function(str, ftype) {
        let nReg = this.Regexs[ftype];
        if (str == null || str == "") return false; //输入为空，认为是验证不通过    
        if (ftype == 'num') {
            if (!nReg.test(str) && !this.chkChinese(str)) { //10.23 tenfy 必须为数字且不能有中文    
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
    progressCallback: function() {},
    //图片加载完成
    progressOverCallback: function() {},
    preloadImage: function(src, result, key) {
        var self = this;
        this.promiseArr.push(new Promise((resolve, reject) => {
            result[key] = new Image();
            result[key].onload = () => {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
            result[key].onerror = () => {
                self.currentNum++;
                self.addProgress();
                resolve(); //如果加载失败，可以设置游戏未开始。
            };
            result[key].src = src;
        }));
    },
    preloadAudio: function(src, result, key) {
        var self = this;
        this.promiseArr.push(new Promise((resolve, reject) => {
            result[key] = new Audio(src);
            result[key].onloadedmetadata = () => {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
            result[key].onerror = () => {
                self.currentNum++;
                self.addProgress();
                resolve();
            };
        }));
    },
    preLoad: function(src, result, key) {
        if (this.chkFormat(src, 'img')) {
            this.preloadImage(src, result, key);
        } else if (this.chkFormat(src, 'audio')) {
            this.preloadAudio(src, result, key);
        } else {
            result[key] = src;
        }
    },
    getSouceCount: function(obj) {
        var self = this;
        for (let key in obj) {
            let copy = obj[key];
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
    convertToObject: function(obj) {
        let self = this;
        let result, oClass = this.isClass(obj);
        if (oClass === "Object") {
            result = {};
        } else if (oClass === "Array") {
            result = [];
        } else {
            return obj;
        }
        for (let key in obj) {
            let copy = obj[key];
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
    addProgress: function() {},
    setProgress: function() {
        var count = 0;
        var self = this;
        Promise.all(this.promiseArr).then(function(posts) {
            self.progressOverCallback();
            console.log(self.totalCount);
        }).catch(function(reason) {
            console.log('图片加载错误');
        });
    },
    init: function(option) {
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
        this.addProgress = function() {
            var percent = self.currentNum / self.totalCount;
            self.progressCallback(percent);
        }
        var sourceObj = self.convertToObject(option.gameSourceUrl);
        this.setProgress();
        return sourceObj;
    },
}
export {
    preLoadObj
}
//preLoadObj.init(option);