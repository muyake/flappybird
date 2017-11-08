//var BG = require(require('.../images/background2.png');


//所有游戏需要加载的外部资源
const gameSourceUrl = {
    imageList: {
        //背景
        // flappybird: require('../Images/ico/flappybird.ico'),
        BG: require('../Images/background.png'),
        birds: require('../Images/birds.png'),
        allbird: require('../Images/allbird2.png'),
        btns: require('../Images/btns.png'),
        gameWords: require('../Images/gameWords.png'),
        ground: require('../Images/ground.png'),
        pipdown: require('../Images/pipdown.png'),
        pipup: require('../Images/pipup.png'),
        //scordbord: require('../Images/scordbord.png'),
        score: require('../Images/score.png'),

    },
    audioList: {
        hitdie: require("../Sounds/mp3/hitdie.mp3"),
        //  die: require("../Sounds/mp3/Die.mp3"),
        hit: require("../Sounds/mp3/hit.mp3"),
        point: require("../Sounds/mp3/point.mp3"),
        swooshing: require("../Sounds/mp3/swooshing.mp3"),
        wing: require("../Sounds/mp3/wing.mp3"), //

    }
}
export default gameSourceUrl;