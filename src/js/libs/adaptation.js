var adaptation = (function() {
    function r(resizeNum, callback) {
        //核心适配代码
        var winW = window.innerWidth;
        document.getElementsByTagName("html")[0].style.fontSize = winW * 0.15625 + "px";
        //核心适配代码
        if (winW > window.screen.width && resizeNum <= 10) {
            setTimeout(function() {
                r(++resizeNum)
            }, 100);
        } else {
            callback();
            document.getElementsByTagName("body")[0].style.opacity = 1;
        }
    }
    return {
        init: function(callback) {
            window.onresize = r.bind(null, 0, callback);
            setTimeout(function() {
                r(0, callback)
            }, 100);
        }
    }
})();
export {
    adaptation
};