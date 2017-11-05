//加载公共函数
import {
    lib
} from './libs/lib.js';
//过场动画
var cutscenes = {
	ready: function() {
        var barSelector = lib.$('.progress-box');
        barSelector.style.display = 'none';
        var barSelector = lib.$('.start-screen');
        barSelector.style.display = 'block';
	},
    start:function(){
 var barSelector = lib.$('.start-screen');
        barSelector.style.display = 'none';
    },
	stop: function() {

	}
}
export {cutscenes};