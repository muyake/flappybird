let lib = {
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
	//将图片或音频转为对象。
	convertToObject: function(obj, sourceLoadObj) {
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
				result[key] = lib.convertToObject(copy, sourceLoadObj); //递归调用
			} else if (this.isClass(copy) == "Array") {
				result[key] = lib.convertToObject(copy, sourceLoadObj);
			} else {
				if (this.chkFormat(obj[key], 'img')) {
					result[key] = new Image();
					result[key].src = obj[key];
					sourceLoadObj.sourceNum++;
					result[key].addEventListener('load',
						function(e) {
							sourceLoadObj.currentNum++;
							sourceLoadObj.loadedCallback(e);
						});
					result[key].addEventListener('error',
						function(e) {
							sourceLoadObj.currentNum++;
							sourceLoadObj.loadedCallback(e);
						});
				} else if (this.chkFormat(obj[key], 'audio')) {
					result[key] = new Audio(obj[key]);
					sourceLoadObj.sourceNum++;
					result[key].addEventListener('loadedmetadata',
						function(e) {
							sourceLoadObj.currentNum++;
							sourceLoadObj.loadedCallback(e);
						});
				} else {
					result[key] = obj[key];
				}
			}
		}
		return result;
	},
}
export {
	lib
};