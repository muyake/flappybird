//audioControl
let audioControl = {
    //如果isplay不传，则总是播放，如果传了则只播放一次，例如人物死亡
    audioPlay: function(audioObj, startTime = 0) {
        audioObj.currentTime = startTime;
        audioObj.play();
    },
    BGMPlay: function(audioObj) {
        audioObj.loop = true;
        audioObj.volume = 0.2;
        audioObj.play();
    },
    BGMPause: function(audioObj) {
        audioObj.pause();
    },

    timeupdateAddEventListener: function(audioObj) {
        audioObj.addEventListener('timeupdate', function() {
            if (this.currentTime > this.endTime) {
                this.pause();
            }
        }, false);
    }
}
export {
    audioControl
};