!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={canvasWidth:0,canvasHeight:0,groundHeight:0,grade:1,GRAVITY_FORCE:540,velocityX:100,velocityY:165,initVelocityX:100,adaptation:!1};e.config=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(n),r=0,a=o.length;r<a;r++){var s=o[r],c=Object.getOwnPropertyDescriptor(n,s);void 0!==c&&c.enumerable&&(e[s]=n[s])}}}return e}}),console.log("Object.assign兼容性处理");var n={$:function(t){return document.querySelector(t)},getRandom:function(t,e){return t+Math.random()*(e-t)},is_weixin:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}};e.lib=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={imageList:{flappybird:i(12),BG:i(13),birds:i(14),allbird:i(15),btns:i(16),gameWords:i(17),ground:i(18),pipdown:i(19),pipup:i(20),score:i(21),flappybirdpub:i(22)},audioList:{hitdie:i(23),hit:i(24),point:i(25),swooshing:i(26),wing:i(27)}};e.default=n},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(8),c=function(t){function e(t,i,r){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r))}return r(e,t),a(e,[{key:"update",value:function(t,e,i){for(var n=this.behaviors.length;n>0;--n)this.behaviors[n-1].execute(this,t,e,i)}}]),e}(s.Sprite);e.default=c},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(33),c=function(t){function e(t){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return r(e,t),a(e,[{key:"paint",value:function(t,e){this.image&&(t.imgwidth?e.drawImage(this.image,t.imgleft,t.imgtop,t.imgwidth,t.imgheight,t.left,t.top,t.width,t.height):e.drawImage(this.image,t.left,t.top,t.width,t.height))}}]),e}(s.ImagePainter);e.default=c},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),o={moveLeftToRight:function(){this.behaviorName="moveLeftToRight",this.lastMove=0,this.fpsNum=60,this.execute=function(t,e,i,o){this.fpsNum=0==o?0:o||this.fpsNum,t.left-=n.config.velocityX/this.fpsNum,this.lastMove=i}},runInPlace:function(t){var e={lastAdvance:0,PAGEFLIP_INTERVAL:30,behaviorName:"runInPlace"};e=Object.assign({},e,t),this.lastAdvance=e.lastAdvance,this.PAGEFLIP_INTERVAL=e.PAGEFLIP_INTERVAL,this.behaviorName=e.behaviorName,this.execute=function(t,e,i){i-this.lastAdvance>this.PAGEFLIP_INTERVAL&&(t.painter.advance(t),this.lastAdvance=i)}}};e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={pipConfig:{width:52,height:420},ground:{width:336,height:112},birdConfig:{width:40,height:30,hconfig:{totalCount:2,sprite_0:{width:40,height:26,left:0,top:88},sprite_1:{width:40,height:26,left:0,top:114}},uconfig:{totalCount:2,sprite_0:{width:40,height:29,left:0,top:30},sprite_1:{width:40,height:29,left:0,top:59}},dconfig:{totalCount:2,sprite_0:{width:40,height:30,left:0,top:140},sprite_1:{width:40,height:30,left:0,top:0}},dieconfig:{totalCount:1,sprite_0:{width:40,height:30,left:0,top:0}}}};e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={audioPlay:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.currentTime=e,t.play()},BGMPlay:function(t){t.loop=!0,t.volume=.2,t.play()},BGMPause:function(t){t.pause()},timeupdateAddEventListener:function(t){t.addEventListener("timeupdate",function(){this.currentTime>this.endTime&&this.pause()},!1)}};e.audioControl=n},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();e.Sprite=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n(this,t),this.name=e,this.painter=i,this.behaviors=o,this.left=0,this.top=0,this.width=10,this.height=10,this.visible=!0,this.velocityX=0,this.velocityY=0,this.initialVelocity=0}return o(t,[{key:"paint",value:function(t){void 0!==this.painter&&this.visible&&this.painter.paint(this,t)}},{key:"update",value:function(t,e){for(var i=this.behaviors.length;i>0;--i)this.behaviors[i-1].execute(this,t,e)}}]),t}()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cutscenes=void 0;var n=i(1),o={ready:function(){var t=n.lib.$(".progress-box");t.style.display="none";var t=n.lib.$(".start-screen");t.style.display="block"},start:function(){n.lib.$(".start-screen").style.display="none",n.lib.$(".main").style.display="block"},restart:function(){n.lib.$(".over-screen").style.display="none",n.lib.$(".over-screen").className="over-screen",n.lib.$(".get-over").className="get-over",n.lib.$(".score-board").className="score-board",n.lib.$(".restart-btn").className="restart-btn"},stop:function(){n.lib.$(".over-screen").style.display="block",n.lib.$(".over-screen").className="over-screen fadeIn animated",n.lib.$(".get-over").className="get-over animated bounce",n.lib.$(".score-board").className="score-board animated bounceInUp",n.lib.$(".restart-btn").className="restart-btn zoomIn animated"}};e.cutscenes=o},function(t,e,i){"use strict";var n=i(1),o=i(11),r=i(2),a=function(t){return t&&t.__esModule?t:{default:t}}(r),s=i(28),c=i(29),u=i(0),l=i(31),f=i(9),h=i(7);i(41);var d=new c.Game("flappybird","mycanvas"),p={gameSourceUrl:a.default,progressCallback:function(t){n.lib.$(".progress-bar").style.width=100*t+"%"},progressOverCallback:function(){var t=window.getComputedStyle(n.lib.$(".scroll-ground1"),null).height;f.cutscenes.ready();var e=document.body.clientWidth,i=document.body.clientHeight;u.config.canvasWidth=e,u.config.canvasHeight=i,u.config.ctx=d.context,u.config.groundHeight=parseInt(t),n.lib.$("#mycanvas").setAttribute("width",e),n.lib.$("#mycanvas").setAttribute("height",i),l.spriteList.init(),n.lib.$(".start-btn").style.backgroundPosition="left top",n.lib.$(".start-btn").addEventListener("click",function(){f.cutscenes.start(),d.start(),h.audioControl.audioPlay(u.config.gameSourceObj.audioList.swooshing)}),n.lib.$(".restart-btn").addEventListener("click",function(){l.spriteList.reset()}),n.lib.$("#mycanvas").addEventListener("touchstart",function(){l.spriteList.pop()}),d.startAnimate=function(t){l.spriteList.draw(d.context,t,d.fps.num)}}};o.adaptation.init(function(){u.config.adaptation||(u.config.adaptation=!0,u.config.gameSourceObj=s.preLoadObj.init(p),console.log(u.config.gameSourceObj))})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(e,i){var n=window.innerWidth;document.getElementsByTagName("html")[0].style.fontSize=.15625*n+"px",n>window.screen.width&&e<=10?setTimeout(function(){t(++e)},100):(i(),document.getElementsByTagName("body")[0].style.opacity=1)}return{init:function(e){window.onresize=t.bind(null,0,e),setTimeout(function(){t(0,e)},100)}}}();e.adaptation=n},function(t,e,i){t.exports=i.p+"./static/img/da171cd04ac3d634a652dc39d859029e.ico"},function(t,e,i){t.exports=i.p+"./static/img/e8172b6d9ada506ca86fbc1fa0771df8.png"},function(t,e,i){t.exports=i.p+"./static/img/056dddf19d3a9a9bd7da2e71024217a8.png"},function(t,e,i){t.exports=i.p+"./static/img/394b87940719ded8227d8288ab59c7e5.png"},function(t,e,i){t.exports=i.p+"./static/img/a8b648ee180a9b16b0f3bff452db5152.png"},function(t,e,i){t.exports=i.p+"./static/img/df6039f174683da04f3fbd1e0354e952.png"},function(t,e,i){t.exports=i.p+"./static/img/1f1febf75c45b9192e6b69816cc1da92.png"},function(t,e,i){t.exports=i.p+"./static/img/5428e6da1071422eaadb1c963fc3c345.png"},function(t,e,i){t.exports=i.p+"./static/img/e7dea01b6fdace1047bf57eb6b6f1055.png"},function(t,e,i){t.exports=i.p+"./static/img/f929fedec0b6fb68d77db8d5f10f3a23.png"},function(t,e,i){t.exports=i.p+"./static/img/7d3282b3c36969c1b3922fa93c81675d.jpeg"},function(t,e,i){t.exports=i.p+"./static/mp3/9a11461838d0ab38f66ee657fb66cdf4.mp3"},function(t,e,i){t.exports=i.p+"./static/mp3/e85e87662872cf36b68274a81c6c75d0.mp3"},function(t,e,i){t.exports=i.p+"./static/mp3/cd9e738999d14de5489688b865944cf6.mp3"},function(t,e,i){t.exports=i.p+"./static/mp3/023ea8b79008f032743b4a3779ce2c64.mp3"},function(t,e,i){t.exports=i.p+"./static/mp3/5763edbf9742a598e67e5e11dd682a7a.mp3"},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.preLoadObj=void 0;var n=i(1),o={isClass:function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)},Regexs:{img:/\.jpg$|\.jpeg$|\.png$|\.gif$/i,audio:/\.mp3$|\.wmv$/i},chkFormat:function(t,e){var i=this.Regexs[e];return null!=t&&""!=t&&("num"==e?!i.test(t)&&!this.chkChinese(t):!!i.test(t))},gameSourceUrl:null,imgObjList:{},totalCount:0,currentNum:0,promiseArr:[],progressCallback:function(){},progressOverCallback:function(){},preloadImage:function(t,e,i){var n=this;e[i]=new Image,e[i].onload=function(){n.currentNum++,n.addProgress(),console.log(i)},e[i].onerror=function(){n.currentNum++,n.addProgress()},e[i].src=t},preloadAudio:function(t,e,i){var o=this;e[i]=new Audio;var r=navigator.userAgent.toLowerCase().indexOf("wifi");n.lib.is_weixin()&&r<0?(o.currentNum++,o.addProgress(),console.log(i+"微信中打开)"),e[i].src=t):(e[i].onloadedmetadata=function(){o.currentNum++,o.addProgress(),console.log(i+"成功")},e[i].onerror=function(){o.currentNum++,o.addProgress(),console.log(i+"失败")},e[i].src=t)},preLoad:function(t,e,i){this.chkFormat(t,"img")?this.preloadImage(t,e,i):this.chkFormat(t,"audio")?this.preloadAudio(t,e,i):e[i]=t},getSouceCount:function(t){var e=this;for(var i in t){var n=t[i];"Object"==this.isClass(n)?e.getSouceCount(n):"Array"==this.isClass(n)?e.getSouceCount(n):e.totalCount++}},convertToObject:function(t){var e=this,i=void 0,n=this.isClass(t);if("Object"===n)i={};else{if("Array"!==n)return t;i=[]}for(var o in t){var r=t[o];"Object"==this.isClass(r)?i[o]=e.convertToObject(r):"Array"==this.isClass(r)?i[o]=e.convertToObject(r):e.preLoad(r,i,o)}return i},addProgress:function(){},checkFullProgress:function(){var t=this;t.totalCount==t.currentNum&&t.progressOverCallback()},init:function(t){var e=this;return void 0!==t.gameSourceUrl&&(this.imgUrlArr=t.gameSourceUrl),void 0!==t.progressCallback&&(this.progressCallback=t.progressCallback),void 0!==t.progressOverCallback&&(this.progressOverCallback=t.progressOverCallback),e.getSouceCount(t.gameSourceUrl),this.addProgress=function(){var t=e.currentNum/e.totalCount;e.progressCallback(t),e.checkFullProgress()},e.convertToObject(t.gameSourceUrl)}};e.preLoadObj=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0,i(30);var n=function(){return+new Date},o=function(t,e){var i=document.getElementById(e),n=this;return this.speed=1,this.context=i.getContext("2d"),this.gameName=t,this.sprites=[],this.keyListeners=[],this.startTime=0,this.lastTime=0,this.gameTime=0,this.fps={num:0,interval:1e3,lastTime:0},this.STARTING_FPS=60,this.paused=!1,this.isStart=!1,this.startedPauseAt=0,this.PAUSE_TIMEOUT=100,window.onkeypress=function(t){n.activeEvent(t,1)},window.onkeydown=function(t){n.activeEvent(t,1)},window.onkeyup=function(t){n.activeEvent(t,0)},this};o.prototype={start:function(){var t=this;this.startTime=n(),this.isStart=!0,window.requestNextAnimationFrame(function(e){t.animate.call(t,e)})},animate:function(t){var e=this;this.paused?setTimeout(function(){window.requestNextAnimationFrame(function(t){e.animate.call(e,t)})},this.PAUSE_TIMEOUT):(this.tick(t),this.clearScreen(),this.startAnimate(t),this.lastTime=t,window.requestNextAnimationFrame(function(t){e.animate.call(e,t)}))},clearScreen:function(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height)},tick:function(t){this.updateFrameRate(t),this.gameTime=n()-this.startTime},updateFrameRate:function(t){0===this.lastTime?this.fps.num=this.STARTING_FPS:t-this.fps.lastTime>this.fps.interval&&(this.fps.num=60,this.fps.lastTime=t)},paintUnderSprites:function(t){},addKeyListener:function(t){this.keyListeners.push(t)},findKeyListener:function(t){for(var e=void 0,i=0;i<this.keyListeners.length;i++){var n=this.keyListeners[i];n.key===t&&(e=n.listener)}return e},mapKey:{37:!1,39:!1,32:!1},activeEventCallback:function(t){},activeEvent:function(t,e){var i=void 0,n=void 0;switch(t.keyCode){case 32:n="space";break;case 68:n="d";break;case 75:n="k";break;case 83:n="s";break;case 80:n="p";break;case 37:n="left arrow";break;case 39:n="right arrow";break;case 38:n="up arrow";break;case 40:n="down arrow"}(i=this.findKeyListener(n))&&i(e)},togglePaused:function(){var t=n();this.paused=!this.paused,this.paused?(this.startedPauseAt=t,this.fps.lastTime=t):(this.startTime=this.startTime+t-this.startedPauseAt,this.lastTime=t)},startAnimate:function(t){}},e.Game=o},function(t,e,i){"use strict";window.requestNextAnimationFrame=function(){var t=void 0,e=void 0,i=navigator.userAgent,n=0,o=window;return window.webkitRequestAnimationFrame&&(e=function(t){void 0===t&&(t=+new Date),o.callback(t)},t=window.webkitRequestAnimationFrame,window.webkitRequestAnimationFrame=function(i,n){o.callback=i,t(e,n)}),window.requestAnimationFrame&&(e=function(t){void 0===t&&(t=+new Date),o.callback(t)},t=window.requestAnimationFrame,window.requestAnimationFrame=function(i,n){o.callback=i,t(e,n)}),window.mozRequestAnimationFrame&&(n=i.indexOf("rv:"),-1!=i.indexOf("Gecko")&&"2.0"===i.substr(n+3,3)&&(window.mozRequestAnimationFrame=void 0)),window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){var i,n;window.setTimeout(function(){i=+new Date,t(i),n=+new Date,o.timeout=1e3/60-(n-i)},o.timeout)}}()},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.spriteList=void 0;var o=i(32),r=i(1),a=i(34),s=i(0),c=i(6),u=n(c),l=i(35),f=n(l),h=i(36),d=n(h),p=i(7),g=i(9),b={pipelineList:[],intervalArr:[{mid:210,height:100},{mid:160,height:95},{mid:180,height:90}],totalScore:0,flag:!1,init:function(){console.log("init"),this.background=new o.BG({name:"BG",top:20,left:0}),this.bird=new d.default({name:"bird",width:u.default.birdConfig.width,height:u.default.birdConfig.height,dieCallback:function(){s.config.velocityX=0,r.lib.$(".scoreNum").innerHTML=b.totalScore;var t,e=localStorage.getItem("maxNum");t=e?parseInt(e):0,b.totalScore>t&&(t=b.totalScore,localStorage.setItem("maxNum",b.totalScore)),r.lib.$(".maxscoreNum").innerHTML=t,g.cutscenes.stop()}});var t=s.config.canvasWidth-u.default.pipConfig.width,e=s.config.canvasWidth/2,i=this;this.intervalArr.forEach(function(n,o){var r=s.config.canvasHeight-s.config.groundHeight;n.left=t+e*o,n.width=u.default.pipConfig.width,i.pipelineList.push(new a.Pipeline({isDown:!0,name:"pipeline",left:t+e*o,height:n.mid-n.height/2})),i.pipelineList.push(new a.Pipeline({isDown:!1,name:"pipeline",left:t+e*o,height:r-n.mid-n.height/2}))})},update:function(){for(var t=this.pipelineList.length,e=0;e<t;e+=2){var i=this.pipelineList[e],n=this.pipelineList[e+1],o=e/2,a=this.intervalArr[o];if(a.left=i.left,i.left<-i.width){i.left+=3*s.config.canvasWidth/2,n.left+=3*s.config.canvasWidth/2;var c=o-1<0?this.intervalArr.length-1:o-1,l=this.intervalArr[c].mid;l+=(Math.random()>.5?1:-1)*r.lib.getRandom(f.default.interval[0],f.default.interval[1]);var h=r.lib.getRandom(f.default.height[0],f.default.height[1]);a.mid=l,a.height=h;var d=s.config.canvasHeight-s.config.groundHeight,p=Math.min(3*u.default.pipConfig.height/4,4*d/5),g=Math.min(1*u.default.pipConfig.height/5,1*d/5);a.mid-a.height/2>p&&(a.mid=p+a.height/2),a.mid-a.height/2<g&&(a.mid=g+a.height/2),d-a.mid-a.height/2>p&&(a.mid=d-a.height/2-p),d-a.mid-a.height/2<g&&(a.mid=d-a.height/2-g),i.height=a.mid-a.height/2,i.imgtop=u.default.pipConfig.height-i.height,i.imgheight=i.height,n.height=d-a.mid-a.height/2,n.top=s.config.canvasHeight-n.height-s.config.groundHeight,n.imgheight=n.height}}},CD:function(){var t=this;this.intervalArr.forEach(function(e){e.left<t.bird.left+t.bird.width&&e.left+e.width>t.bird.left&&(t.bird.top+2<=e.mid-e.height/2&&(t.bird.isDie=!0,t.bird.velocityY=0,p.audioControl.audioPlay(s.config.gameSourceObj.audioList.hitdie,.2),s.config.velocityX=0),t.bird.top+t.bird.height-2>=e.mid+e.height/2&&(t.bird.isDie=!0,p.audioControl.audioPlay(s.config.gameSourceObj.audioList.hitdie,.2),s.config.velocityX=0))})},drawScore:function(t){t.font="bold 30px arial",t.fillStyle="red";var e=s.config.canvasWidth-60;t.fillText(this.totalScore,e,40)},updateScore:function(t){var e=this.pipelineList.length;if(!this.bird.isDie){for(var i=0;i<e;i+=2){var n=this.pipelineList[i],o=n.left,r=n.left+n.width;o<this.bird.left+this.bird.width&&r>this.bird.left&&(this.flag=!0),1==this.flag&&r<=this.bird.left&&(this.flag=!1,this.totalScore++,p.audioControl.audioPlay(s.config.gameSourceObj.audioList.point,.15))}s.config.grade=parseInt(this.totalScore/f.default.itemgrade),f.default.height[0]=f.default.initheight[0]-s.config.grade*f.default.heightChangeNum,f.default.height[1]=f.default.initheight[1]-s.config.grade*f.default.heightChangeNum,f.default.initinterval[0]=f.default.initinterval[0]+s.config.grade*f.default.intervalChangeNum,f.default.initinterval[1]=f.default.initinterval[1]+s.config.grade*f.default.intervalChangeNum,s.config.velocityX=s.config.initVelocityX+s.config.grade*f.default.velocityXChangeNum}this.drawScore(t)},draw:function(t,e,i){this.update(),this.pipelineList.forEach(function(n){n.draw(t,e,i)}),this.bird.isDie||this.CD(),this.bird.draw(t,e,i),this.background.draw(t,e,i),this.updateScore(t)},pop:function(){this.bird.isDie||(this.bird.velocityY=-s.config.velocityY,p.audioControl.audioPlay(s.config.gameSourceObj.audioList.wing))},reset:function(){p.audioControl.audioPlay(s.config.gameSourceObj.audioList.swooshing),this.totalScore=0,this.pipelineList=[],this.intervalArr=[{mid:210,height:100},{mid:160,height:95},{mid:180,height:90}],s.config.velocityX=100,this.init(),g.cutscenes.restart()}};e.spriteList=b},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.BG=void 0;var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(0),u=i(2),l=n(u),f=i(3),h=n(f),d=i(4),p=n(d),g=i(5),b=n(g),m=function(t){function e(t){o(this,e);var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.name,new p.default(l.default.imageList.ground),[new b.default.moveLeftToRight]));return i.width=c.config.canvasWidth,i.height=c.config.groundHeight,i.top=c.config.canvasHeight-c.config.groundHeight,i.left=t.left||0,i}return a(e,t),s(e,[{key:"draw",value:function(t,e,i){this.update(t,e,i);var n=this.left;n=n>-c.config.canvasWidth?n:0,this.left=n,this.paint(t),this.left=n+this.width,this.paint(t),this.left=n}}]),e}(h.default);e.BG=m},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e){n(this,t),e&&(this.image=new Image,this.image.src=e)}return o(t,[{key:"paint",value:function(t,e){this.image&&e.drawImage(this.image,t.left,t.top,t.width,t.height)}}]),t}();e.ImagePainter=r},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Pipeline=void 0;var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(0),u=i(2),l=n(u),f=i(3),h=n(f),d=i(4),p=n(d),g=i(5),b=n(g),m=i(6),v=n(m),y=function(t){function e(t){if(o(this,e),t.isDown){var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.name,new p.default(l.default.imageList.pipdown),[new b.default.moveLeftToRight]));i.top=0,i.imgtop=v.default.pipConfig.height-t.height}else{var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.name,new p.default(l.default.imageList.pipup),[new b.default.moveLeftToRight]));i.top=c.config.canvasHeight-t.height-c.config.groundHeight,i.imgtop=0}return i.width=v.default.pipConfig.width,i.height=t.height,i.left=t.left||0,i.velocityX=-c.config.velocityX,i.imgwidth=i.width,i.imgheight=t.height,i.imgleft=0,r(i)}return a(e,t),s(e,[{key:"draw",value:function(t,e,i){this.update(t,e,i),this.paint(t)}}]),e}(h.default);e.Pipeline=y},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={initheight:[100,150],height:[100,150],heightChangeNum:5,initinterval:[50,80],interval:[50,80],intervalChangeNum:5,velocityXChangeNum:10,itemgrade:20};e.default=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(0),u=i(2),l=n(u),f=i(3),h=(n(f),i(4)),d=(n(h),i(5)),p=n(d),g=i(37),b=n(g),m=i(6),v=n(m),y=i(8),w=i(39),_=n(w),O=i(7),P=function(t){function e(t){o(this,e);var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.name));i.painters={run:new b.default(v.default.birdConfig.hconfig,l.default.imageList.allbird,v.default.birdConfig.hconfig.totalCount),up:new b.default(v.default.birdConfig.uconfig,l.default.imageList.allbird,v.default.birdConfig.uconfig.totalCount),down:new b.default(v.default.birdConfig.dconfig,l.default.imageList.allbird,v.default.birdConfig.dconfig.totalCount),die:new b.default(v.default.birdConfig.dieconfig,l.default.imageList.allbird,v.default.birdConfig.dieconfig.totalCount)},i.isDie=!1,i.name="bird",i.translateLeft=0,i.width=t.width||v.default.birdConfig.width,i.height=t.height||v.default.birdConfig.height,i.top=200,i.left=50,i.velocityY=-c.config.velocityY,i.GRAVITY_FORCE=c.config.GRAVITY_FORCE,i.upColliding=null,i.initialTop=c.config.canvasHeight-i.height-c.config.groundHeight,i.behaviorStatus={runInPlace:new p.default.runInPlace({PAGEFLIP_INTERVAL:100})},i.behaviors=[i.behaviorStatus.runInPlace],i.painter=i.painters.up;var n=i;return i.monsterSpriteAnimatorJump=new _.default(function(){n.isDie||O.audioControl.audioPlay(c.config.gameSourceObj.audioList.hit),n.isDie=!0,console.log("die"),n.painter=n.painters.die,t.dieCallback()},i),i.monsterSpriteAnimatorJump.start(),i}return a(e,t),s(e,[{key:"draw",value:function(t,e,i){this.fpsNum=i,this.monsterSpriteAnimatorJump.execute(),this.update(t,e,i),this.paint(t),this.isDie||(this.velocityY<=0?this.painter=this.painters.up:this.painter=this.painters.down)}}]),e}(y.Sprite);e.default=P},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(38),c=(i(0),function(t){function e(t,i,r){n(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return a.imgcount=r,a}return r(e,t),a(e,[{key:"paint",value:function(t,e){var i=this.cells["sprite_"+this.cellIndex];e.drawImage(this.spritesheet,i.left,i.top,i.width,i.height,t.left,t.top,t.width,t.height)}},{key:"advance",value:function(t,e){++this.cellIndex==this.imgcount&&(this.cellIndex=0)}}]),e}(s.SpriteSheetPainter));e.default=c},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments[1];n(this,t),this.cells=e,this.spritesheet=new Image,this.spritesheet.src=i,this.cellIndex=0}return o(t,[{key:"advance",value:function(){this.cellIndex==this.cells.length-1?this.cellIndex=0:this.cellIndex++}},{key:"paint",value:function(t,e){var i=this.cells[this.cellIndex];e.drawImage(this.spritesheet.cell.left,i.top,i.width,i.heightsprite.left,t.top,i.width,i.height)}}]),t}();e.SpriteSheetPainter=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(40),c=function(t){function e(t,i){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,void 0,t));return t&&(r.elapsedCallback=t),r.sprite=i,r.isRunning=!1,r}return r(e,t),a(e,[{key:"end",value:function(t){t.animating=!1,this.elapsedCallback&&this.elapsedCallback(t)}},{key:"start",value:function(){this.isRunning=!0}},{key:"execute",value:function(){var t=this;t.isRunning&&(this.sprite.velocityY=this.sprite.velocityY+this.sprite.GRAVITY_FORCE/this.sprite.fpsNum,this.sprite.top+=this.sprite.velocityY/this.sprite.fpsNum,this.sprite.top<this.sprite.initialTop?this.sprite.isJump=!0:(this.sprite.top=this.sprite.initialTop,this.sprite.isJump=!1,t.isRunning=!1,t.end(this.sprite)))}}]),e}(s.SpriteAnimator);e.default=c},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments[1];n(this,t),this.painters=e,i&&(this.elapsedCallback=i),this.duration=1e3,this.startTime=0,this.index=0,this.elapsedCallback=void 0}return o(t,[{key:"end",value:function(t,e){t.animating=!1,this.elapsedCallback?this.elapsedCallback(t):t.painter=e}},{key:"start",value:function(t,e){var i=+new Date+e,n=(this.painters.length,void 0),o=this,r=t.painters;this.index=0,t.animating=!0,t.painter=this.painters[this.index],n=setInterval(function(){+new Date<i?t.painter=o.painters[++o.index]:(o.end(t,r),clearInterval(n))},period)}}]),t}();e.SpriteAnimator=r},function(t,e){}]);