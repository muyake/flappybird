//var BG = require(require('.../images/background2.png');


//所有游戏需要加载的外部资源
const gameSourceUrl = {
    imageList: {
        //背景
        // flappybird: require('../Images/ico/flappybird.ico'),
        BG: require('../Images/background.png'),
        birds: require('../Images/birds.png'),
        allbird: require('../Images/allbird.png'),
        btns: require('../Images/btns.png'),
        gameWords: require('../Images/gameWords.png'),
        ground: require('../Images/ground.png'),
        pipdown: require('../Images/pipdown.png'),
        pipup: require('../Images/pipup.png'),
        scordbord: require('../Images/scordbord.png'),
        score: require('../Images/score.png'),
        scorenum: require('../Images/scorenum.png'),

    },
    audioList: {
        die: require("../Sounds/Die.mp3"),
        hit: require("../Sounds/hit.mp3"),
        point: require("../Sounds/point.mp3"),
        swooshing: require("../Sounds/swooshing.mp3"),
        wing: require("../Sounds/wing.mp3"), //

    }
}
export default gameSourceUrl;