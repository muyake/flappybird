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
    start: function() {
        var barSelector = lib.$('.start-screen');
        barSelector.style.display = 'none';
    },
    restart: function() {
        lib.$('.over-screen').style.display = 'none';
        // lib.$('.over-screen').style.opacity = 0;
        lib.$('.over-screen').className = 'over-screen';
        // lib.$('.get-over').style.opacity = 0;
        lib.$('.get-over').className = 'get-over';
        //lib.$('.score-board').style.opacity = 0;
        lib.$('.score-board').className = 'score-board';
        //lib.$('.restart-btn').style.opacity = 0;
        lib.$('.restart-btn').className = 'restart-btn';
    },
    stop: function() {
        lib.$('.over-screen').style.display = 'block';
        lib.$('.over-screen').className = 'over-screen fadeIn animated';
        lib.$('.get-over').className = 'get-over animated bounce';
        lib.$('.score-board').className = 'score-board animated bounceInUp';
        lib.$('.restart-btn').className = 'restart-btn zoomIn animated';
    }
}
export {
    cutscenes
};