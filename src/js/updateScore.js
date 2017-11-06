//加载公共函数
import {
	lib
} from './libs/lib.js';
import gameSourceUrl from './gameSource.js';
var updateScore = {
	changeScore: function(num) {
		var str = new String(num);
		var arr = str.split('');
		var length = arr.length;
		var overNume = length > 4 ? 4 : length;
		for (var i = 1; i <= overNume; i++) {
			switch (i) {
				case 1:
					lib.$('.count').style.backgroundImage = "url(" + gameSourceUrl.imageList['score' + arr[length - i]] + ")";
					break;
				case 2:
					lib.$('.ten').style.backgroundImage = "url(" + gameSourceUrl.imageList['score' + arr[length - i]] + ")";
					break;
				case 3:
					lib.$('.h').style.backgroundImage = "url(" + gameSourceUrl.imageList['score' + arr[length - i]] + ")";
					break;
				case 4:
					lib.$('.th').style.backgroundImage = "url(" + gameSourceUrl.imageList['score' + arr[length - i]] + ")";
					break;
			}

		}

	}
}
export {
	updateScore
}