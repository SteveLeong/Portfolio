(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/css-loader/lib/css-base.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css); */\n/* @import url(./assets/css/font-awesome.min.css); */\n/* @import url(\"http://fonts.googleapis.com/css?family=Source+Sans+Pro:200\"); */\n\nhtml,\nbody,\nsection,\n.page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  transition: all 1s cubic-bezier(0.5, -0.005, 0.2, 1) !important;\n  -webkit-transition: all 1s cubic-bezier(0.5, -0.005, 0.2, 1) !important;\n  color: #fff;\n  /* background: #202020; */\n  overflow: hidden;\n}\n\nsection {\n  width: 400%;\n  display: flex;\n}\n\n.page {\n  position: absolute;\n  overflow: scroll;\n  margin: auto;\n}\n\n#p1 {\n  left: 0;\n}\n\n#p2 {\n  left: 100%;\n  background: #357266;\n}\n\n#p3 {\n  left: 200%;\n  background: #a3bbad;\n}\n\n#p4 {\n  left: 300%;\n  background: deeppink;\n}\n\n.sidebar {\n  position: fixed;\n  z-index: 1;\n}\n#t1:target .page#p1 {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n#t2:target .page#p2 {\n  -webkit-transform: translateX(-90%);\n          transform: translateX(-90%);\n}\n#t3:target .page#p3 {\n  -webkit-transform: translateX(-190%);\n          transform: translateX(-190%);\n}\n#t4:target .page#p4 {\n  -webkit-transform: translateX(-290%);\n          transform: translateX(-290%);\n}\n\n#t2:target .page#p1,\n#t3:target .page#p1,\n#t4:target .page#p1 {\n  background: #202020;\n}\n\n#t2:target .page#p1 #header,\n#t3:target .page#p1 #header,\n#t4:target .page#p1 #header {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n\n.symbol {\n  color: #fff;\n  font-size: 32px;\n  display: block;\n}\n\n.sidebar .symbol:hover {\n  opacity: 0.6;\n}\n\n#p1 .symbol .title {\n  margin-bottom: 20px;\n}\n\n#t2:target .sidebar .symbol,\n#t3:target .sidebar .symbol,\n#t4:target .sidebar .symbol {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  transition-delay: 0.1s;\n}\n\n#t2:target #dos {\n  -webkit-transform: scale(1.2) !important;\n          transform: scale(1.2) !important;\n}\n\n#t3:target #tres {\n  -webkit-transform: scale(1.2) !important;\n          transform: scale(1.2) !important;\n}\n\n#t4:target #cuatro {\n  -webkit-transform: scale(1.2) !important;\n          transform: scale(1.2) !important;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  /*right: 0;*/\n  margin: auto;\n  height: 280px;\n  width: 10%;\n  padding: 0;\n  text-align: center;\n}\n\nul li {\n  margin: 30px 0;\n}\n\na {\n  text-decoration: none;\n  font-family: open sans, sans-serif;\n}\n\n.title,\n.hint {\n  font-family: open sans, sans-serif;\n  display: block;\n}\n\n.title {\n  font-size: 38px;\n}\n\n.hint {\n  font-size: 13px;\n}\n\n.hint a {\n  color: #efff06;\n  transition: all 250ms easet-out;\n}\n\n.hint a:hover {\n  color: #fff;\n}\n\n.page .symbol {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 10%;\n  left: 0;\n  width: 270px;\n  height: 170px;\n  margin: auto;\n  text-align: center;\n  font-size: 80px;\n  -webkit-transform: translateX(360%);\n          transform: translateX(360%);\n  line-height: 1.3;\n}\n\n.page .content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 7%;\n  left: 0;\n  width: 90%;\n  height: 90%;\n  margin: auto;\n  text-align: center;\n  font-size: 80px;\n  -webkit-transform: translateX(360%);\n          transform: translateX(360%);\n  line-height: 1.3;\n}\n\n#t3:target .page#p3 .content {\n  -webkit-transform: translateX(0) !important;\n          transform: translateX(0) !important;\n}\n\n/* .page#p1 .symbol {\n  height: 220px;\n} */\n\n.page#p1 .symbol,\n#t2:target .page#p2 .symbol,\n#t3:target .page#p3 .symbol,\n#t4:target .page#p4 .symbol {\n  -webkit-transform: translateX(0) !important;\n          transform: translateX(0) !important;\n  /* transition-delay: 1s; */\n}\n\n/* Header */\n\n#header {\n  text-align: center;\n  padding: 6em 0 4em 0;\n}\n\n#header h1 {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n#header .avatar {\n  border-radius: 100%;\n  display: inline-block;\n  margin: 0 0 2em 0;\n  padding: 0.5em;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n#header .avatar img {\n  border-radius: 100%;\n  display: block;\n  width: 8em;\n}\n\n@media screen and (max-width: 1280px) {\n  #header {\n    padding: 4em 0 2em 0;\n  }\n}\n\n.credit {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 10px;\n}\n\n.credit a {\n  color: #fff;\n}\n\n.headTitle {\n  font-size: 38px;\n  position: absolute;\n  top: 0;\n  right: 10%;\n  left: 0;\n  width: 270px;\n  height: 170px;\n  margin: auto;\n  text-align: center;\n  color: black;\n}\n\n/* Icon */\n\n.icon {\n  text-decoration: none;\n  border-bottom: none;\n  position: relative;\n}\n\n.icon:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n\n.icon > .label {\n  display: none;\n}\n\n.icon.style2 {\n  transition: all 0.2s ease;\n  border-radius: 100%;\n  display: inline-block;\n  padding: 0.5em;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n.icon.style2:before {\n  display: block;\n  width: 1.25em;\n  height: 1.25em;\n  line-height: 1.25em;\n  font-size: 1.35em;\n}\n\n.icon.style2:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n\n@media screen and (max-width: 736px) {\n  .icon.style2:before {\n    font-size: 1em;\n  }\n}\n\n/* List */\n\nol {\n  list-style: decimal;\n  margin: 0 0 2em 0;\n  padding-left: 1.25em;\n}\n\nol li {\n  padding-left: 0.25em;\n}\n\nul {\n  list-style: disc;\n  margin: 0 0 2em 0;\n  padding-left: 1em;\n}\n\nul li {\n  padding-left: 0.5em;\n}\n\nul.alt {\n  list-style: none;\n  padding-left: 0;\n}\n\nul.alt li {\n  border-top: solid 1px rgba(255, 255, 255, 0.25);\n  padding: 0.5em 0;\n}\n\nul.alt li:first-child {\n  border-top: 0;\n  padding-top: 0;\n}\n\nul.icons {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\n\nul.icons li {\n  display: inline-block;\n  padding: 0 1em 0 0;\n}\n\nul.icons li:last-child {\n  padding-right: 0;\n}\n\nul.actions {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\n\nul.actions li {\n  display: inline-block;\n  padding: 0 1em 0 0;\n  vertical-align: middle;\n}\n\nul.actions li:last-child {\n  padding-right: 0;\n}\n\nul.actions.small li {\n  padding: 0 0.5em 0 0;\n}\n\nul.actions.vertical li {\n  display: block;\n  padding: 1em 0 0 0;\n}\n\nul.actions.vertical li:first-child {\n  padding-top: 0;\n}\n\nul.actions.vertical li > * {\n  margin-bottom: 0;\n}\n\nul.actions.vertical.small li {\n  padding: 0.5em 0 0 0;\n}\n\nul.actions.vertical.small li:first-child {\n  padding-top: 0;\n}\n\nul.actions.fit {\n  display: table;\n  margin-left: -1em;\n  padding: 0;\n  table-layout: fixed;\n  width: calc(100% + 1em);\n}\n\nul.actions.fit li {\n  display: table-cell;\n  padding: 0 0 0 1em;\n}\n\nul.actions.fit li > * {\n  margin-bottom: 0;\n}\n\nul.actions.fit.small {\n  margin-left: -0.5em;\n  width: calc(100% + 0.5em);\n}\n\nul.actions.fit.small li {\n  padding: 0 0 0 0.5em;\n}\n\n@media screen and (max-width: 480px) {\n  ul.actions {\n    margin: 0 0 2em 0;\n  }\n\n  ul.actions li {\n    padding: 1em 0 0 0;\n    display: block;\n    text-align: center;\n    width: 100%;\n  }\n\n  ul.actions li:first-child {\n    padding-top: 0;\n  }\n\n  ul.actions li > * {\n    width: 100%;\n    margin: 0 !important;\n  }\n\n  ul.actions li > *.icon:before {\n    margin-left: -2em;\n  }\n\n  ul.actions.small li {\n    padding: 0.5em 0 0 0;\n  }\n\n  ul.actions.small li:first-child {\n    padding-top: 0;\n  }\n}\n\ndl {\n  margin: 0 0 2em 0;\n}\n\ndl dt {\n  display: block;\n  font-weight: 200;\n  margin: 0 0 1em 0;\n}\n\ndl dd {\n  margin-left: 2em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/font-awesome.min.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/font-awesome.min.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/lib/url/escape.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/lib/css-base.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.eot?v=4.5.0 */ "./src/assets/fonts/fontawesome-webfont.eot?v=4.5.0")) + ");src:url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.eot */ "./src/assets/fonts/fontawesome-webfont.eot")) + "?#iefix&v=4.5.0) format('embedded-opentype'),url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.woff2?v=4.5.0 */ "./src/assets/fonts/fontawesome-webfont.woff2?v=4.5.0")) + ") format('woff2'),url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.woff?v=4.5.0 */ "./src/assets/fonts/fontawesome-webfont.woff?v=4.5.0")) + ") format('woff'),url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.ttf?v=4.5.0 */ "./src/assets/fonts/fontawesome-webfont.ttf?v=4.5.0")) + ") format('truetype'),url(" + escape(__webpack_require__(/*! ../fonts/fontawesome-webfont.svg?v=4.5.0 */ "./src/assets/fonts/fontawesome-webfont.svg?v=4.5.0")) + "#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-gear:before,.fa-cog:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\F0DD\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}.fa-euro:before,.fa-eur:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}.fa-won:before,.fa-krw:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\F19C\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\F1C5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\F1C6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-rebel:before{content:\"\\F1D0\"}.fa-ge:before,.fa-empire:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\F1D8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-hotel:before,.fa-bed:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-tv:before,.fa-television:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/main.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/lib/url/escape.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/lib/css-base.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./font-awesome.min.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/font-awesome.min.css"), "");
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:200);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*\n\tVisualize by TEMPLATED\n\ttemplated.co @templatedco\n\tReleased for free under the Creative Commons Attribution 3.0 license (templated.co/license)\n*/\n\n/* Reset */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  -webkit-text-size-adjust: none;\n}\n\n/* Box Model */\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n/* Grid */\n/* \n.row {\n  border-bottom: solid 1px transparent;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.row > * {\n  float: left;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.row:after,\n.row:before {\n  content: \"\";\n  display: block;\n  clear: both;\n  height: 0;\n}\n\n.row.uniform > * > :first-child {\n  margin-top: 0;\n}\n\n.row.uniform > * > :last-child {\n  margin-bottom: 0;\n}\n\n.row.\\30 \\25 > * {\n  padding: 0 0 0 0em;\n}\n\n.row.\\30 \\25 {\n  margin: 0 0 -1px 0em;\n}\n\n.row.uniform.\\30 \\25 > * {\n  padding: 0em 0 0 0em;\n}\n\n.row.uniform.\\30 \\25 {\n  margin: 0em 0 -1px 0em;\n}\n\n.row > * {\n  padding: 0 0 0 2em;\n}\n\n.row {\n  margin: 0 0 -1px -2em;\n}\n\n.row.uniform > * {\n  padding: 2em 0 0 2em;\n}\n\n.row.uniform {\n  margin: -2em 0 -1px -2em;\n}\n\n.row.\\32 00\\25 > * {\n  padding: 0 0 0 4em;\n}\n\n.row.\\32 00\\25 {\n  margin: 0 0 -1px -4em;\n}\n\n.row.uniform.\\32 00\\25 > * {\n  padding: 4em 0 0 4em;\n}\n\n.row.uniform.\\32 00\\25 {\n  margin: -4em 0 -1px -4em;\n}\n\n.row.\\31 50\\25 > * {\n  padding: 0 0 0 3em;\n}\n\n.row.\\31 50\\25 {\n  margin: 0 0 -1px -3em;\n}\n\n.row.uniform.\\31 50\\25 > * {\n  padding: 3em 0 0 3em;\n}\n\n.row.uniform.\\31 50\\25 {\n  margin: -3em 0 -1px -3em;\n}\n\n.row.\\35 0\\25 > * {\n  padding: 0 0 0 1em;\n}\n\n.row.\\35 0\\25 {\n  margin: 0 0 -1px -1em;\n}\n\n.row.uniform.\\35 0\\25 > * {\n  padding: 1em 0 0 1em;\n}\n\n.row.uniform.\\35 0\\25 {\n  margin: -1em 0 -1px -1em;\n}\n\n.row.\\32 5\\25 > * {\n  padding: 0 0 0 0.5em;\n}\n\n.row.\\32 5\\25 {\n  margin: 0 0 -1px -0.5em;\n}\n\n.row.uniform.\\32 5\\25 > * {\n  padding: 0.5em 0 0 0.5em;\n}\n\n.row.uniform.\\32 5\\25 {\n  margin: -0.5em 0 -1px -0.5em;\n}\n\n.\\31 2u,\n.\\31 2u\\24 {\n  width: 100%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\31 1u,\n.\\31 1u\\24 {\n  width: 91.6666666667%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\31 0u,\n.\\31 0u\\24 {\n  width: 83.3333333333%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\39 u,\n.\\39 u\\24 {\n  width: 75%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\38 u,\n.\\38 u\\24 {\n  width: 66.6666666667%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\37 u,\n.\\37 u\\24 {\n  width: 58.3333333333%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\36 u,\n.\\36 u\\24 {\n  width: 50%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\35 u,\n.\\35 u\\24 {\n  width: 41.6666666667%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\34 u,\n.\\34 u\\24 {\n  width: 33.3333333333%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\33 u,\n.\\33 u\\24 {\n  width: 25%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\32 u,\n.\\32 u\\24 {\n  width: 16.6666666667%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\31 u,\n.\\31 u\\24 {\n  width: 8.3333333333%;\n  clear: none;\n  margin-left: 0;\n}\n\n.\\31 2u\\24 + *,\n.\\31 1u\\24 + *,\n.\\31 0u\\24 + *,\n.\\39 u\\24 + *,\n.\\38 u\\24 + *,\n.\\37 u\\24 + *,\n.\\36 u\\24 + *,\n.\\35 u\\24 + *,\n.\\34 u\\24 + *,\n.\\33 u\\24 + *,\n.\\32 u\\24 + *,\n.\\31 u\\24 + * {\n  clear: left;\n}\n\n.\\-11u {\n  margin-left: 91.66667%;\n}\n\n.\\-10u {\n  margin-left: 83.33333%;\n}\n\n.\\-9u {\n  margin-left: 75%;\n}\n\n.\\-8u {\n  margin-left: 66.66667%;\n}\n\n.\\-7u {\n  margin-left: 58.33333%;\n}\n\n.\\-6u {\n  margin-left: 50%;\n}\n\n.\\-5u {\n  margin-left: 41.66667%;\n}\n\n.\\-4u {\n  margin-left: 33.33333%;\n}\n\n.\\-3u {\n  margin-left: 25%;\n}\n\n.\\-2u {\n  margin-left: 16.66667%;\n}\n\n.\\-1u {\n  margin-left: 8.33333%;\n}\n\n@media screen and (max-width: 1680px) {\n  .row > * {\n    padding: 0 0 0 2em;\n  }\n\n  .row {\n    margin: 0 0 -1px -2em;\n  }\n\n  .row.uniform > * {\n    padding: 2em 0 0 2em;\n  }\n\n  .row.uniform {\n    margin: -2em 0 -1px -2em;\n  }\n\n  .row.\\32 00\\25 > * {\n    padding: 0 0 0 4em;\n  }\n\n  .row.\\32 00\\25 {\n    margin: 0 0 -1px -4em;\n  }\n\n  .row.uniform.\\32 00\\25 > * {\n    padding: 4em 0 0 4em;\n  }\n\n  .row.uniform.\\32 00\\25 {\n    margin: -4em 0 -1px -4em;\n  }\n\n  .row.\\31 50\\25 > * {\n    padding: 0 0 0 3em;\n  }\n\n  .row.\\31 50\\25 {\n    margin: 0 0 -1px -3em;\n  }\n\n  .row.uniform.\\31 50\\25 > * {\n    padding: 3em 0 0 3em;\n  }\n\n  .row.uniform.\\31 50\\25 {\n    margin: -3em 0 -1px -3em;\n  }\n\n  .row.\\35 0\\25 > * {\n    padding: 0 0 0 1em;\n  }\n\n  .row.\\35 0\\25 {\n    margin: 0 0 -1px -1em;\n  }\n\n  .row.uniform.\\35 0\\25 > * {\n    padding: 1em 0 0 1em;\n  }\n\n  .row.uniform.\\35 0\\25 {\n    margin: -1em 0 -1px -1em;\n  }\n\n  .row.\\32 5\\25 > * {\n    padding: 0 0 0 0.5em;\n  }\n\n  .row.\\32 5\\25 {\n    margin: 0 0 -1px -0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 > * {\n    padding: 0.5em 0 0 0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 {\n    margin: -0.5em 0 -1px -0.5em;\n  }\n\n  .\\31 2u\\28xlarge\\29,\n  .\\31 2u\\24\\28xlarge\\29 {\n    width: 100%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 1u\\28xlarge\\29,\n  .\\31 1u\\24\\28xlarge\\29 {\n    width: 91.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 0u\\28xlarge\\29,\n  .\\31 0u\\24\\28xlarge\\29 {\n    width: 83.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\39 u\\28xlarge\\29,\n  .\\39 u\\24\\28xlarge\\29 {\n    width: 75%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\38 u\\28xlarge\\29,\n  .\\38 u\\24\\28xlarge\\29 {\n    width: 66.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\37 u\\28xlarge\\29,\n  .\\37 u\\24\\28xlarge\\29 {\n    width: 58.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\36 u\\28xlarge\\29,\n  .\\36 u\\24\\28xlarge\\29 {\n    width: 50%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\35 u\\28xlarge\\29,\n  .\\35 u\\24\\28xlarge\\29 {\n    width: 41.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\34 u\\28xlarge\\29,\n  .\\34 u\\24\\28xlarge\\29 {\n    width: 33.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\33 u\\28xlarge\\29,\n  .\\33 u\\24\\28xlarge\\29 {\n    width: 25%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\32 u\\28xlarge\\29,\n  .\\32 u\\24\\28xlarge\\29 {\n    width: 16.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 u\\28xlarge\\29,\n  .\\31 u\\24\\28xlarge\\29 {\n    width: 8.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 2u\\24\\28xlarge\\29 + *,\n  .\\31 1u\\24\\28xlarge\\29 + *,\n  .\\31 0u\\24\\28xlarge\\29 + *,\n  .\\39 u\\24\\28xlarge\\29 + *,\n  .\\38 u\\24\\28xlarge\\29 + *,\n  .\\37 u\\24\\28xlarge\\29 + *,\n  .\\36 u\\24\\28xlarge\\29 + *,\n  .\\35 u\\24\\28xlarge\\29 + *,\n  .\\34 u\\24\\28xlarge\\29 + *,\n  .\\33 u\\24\\28xlarge\\29 + *,\n  .\\32 u\\24\\28xlarge\\29 + *,\n  .\\31 u\\24\\28xlarge\\29 + * {\n    clear: left;\n  }\n\n  .\\-11u\\28xlarge\\29 {\n    margin-left: 91.66667%;\n  }\n\n  .\\-10u\\28xlarge\\29 {\n    margin-left: 83.33333%;\n  }\n\n  .\\-9u\\28xlarge\\29 {\n    margin-left: 75%;\n  }\n\n  .\\-8u\\28xlarge\\29 {\n    margin-left: 66.66667%;\n  }\n\n  .\\-7u\\28xlarge\\29 {\n    margin-left: 58.33333%;\n  }\n\n  .\\-6u\\28xlarge\\29 {\n    margin-left: 50%;\n  }\n\n  .\\-5u\\28xlarge\\29 {\n    margin-left: 41.66667%;\n  }\n\n  .\\-4u\\28xlarge\\29 {\n    margin-left: 33.33333%;\n  }\n\n  .\\-3u\\28xlarge\\29 {\n    margin-left: 25%;\n  }\n\n  .\\-2u\\28xlarge\\29 {\n    margin-left: 16.66667%;\n  }\n\n  .\\-1u\\28xlarge\\29 {\n    margin-left: 8.33333%;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .row > * {\n    padding: 0 0 0 2em;\n  }\n\n  .row {\n    margin: 0 0 -1px -2em;\n  }\n\n  .row.uniform > * {\n    padding: 2em 0 0 2em;\n  }\n\n  .row.uniform {\n    margin: -2em 0 -1px -2em;\n  }\n\n  .row.\\32 00\\25 > * {\n    padding: 0 0 0 4em;\n  }\n\n  .row.\\32 00\\25 {\n    margin: 0 0 -1px -4em;\n  }\n\n  .row.uniform.\\32 00\\25 > * {\n    padding: 4em 0 0 4em;\n  }\n\n  .row.uniform.\\32 00\\25 {\n    margin: -4em 0 -1px -4em;\n  }\n\n  .row.\\31 50\\25 > * {\n    padding: 0 0 0 3em;\n  }\n\n  .row.\\31 50\\25 {\n    margin: 0 0 -1px -3em;\n  }\n\n  .row.uniform.\\31 50\\25 > * {\n    padding: 3em 0 0 3em;\n  }\n\n  .row.uniform.\\31 50\\25 {\n    margin: -3em 0 -1px -3em;\n  }\n\n  .row.\\35 0\\25 > * {\n    padding: 0 0 0 1em;\n  }\n\n  .row.\\35 0\\25 {\n    margin: 0 0 -1px -1em;\n  }\n\n  .row.uniform.\\35 0\\25 > * {\n    padding: 1em 0 0 1em;\n  }\n\n  .row.uniform.\\35 0\\25 {\n    margin: -1em 0 -1px -1em;\n  }\n\n  .row.\\32 5\\25 > * {\n    padding: 0 0 0 0.5em;\n  }\n\n  .row.\\32 5\\25 {\n    margin: 0 0 -1px -0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 > * {\n    padding: 0.5em 0 0 0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 {\n    margin: -0.5em 0 -1px -0.5em;\n  }\n\n  .\\31 2u\\28large\\29,\n  .\\31 2u\\24\\28large\\29 {\n    width: 100%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 1u\\28large\\29,\n  .\\31 1u\\24\\28large\\29 {\n    width: 91.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 0u\\28large\\29,\n  .\\31 0u\\24\\28large\\29 {\n    width: 83.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\39 u\\28large\\29,\n  .\\39 u\\24\\28large\\29 {\n    width: 75%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\38 u\\28large\\29,\n  .\\38 u\\24\\28large\\29 {\n    width: 66.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\37 u\\28large\\29,\n  .\\37 u\\24\\28large\\29 {\n    width: 58.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\36 u\\28large\\29,\n  .\\36 u\\24\\28large\\29 {\n    width: 50%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\35 u\\28large\\29,\n  .\\35 u\\24\\28large\\29 {\n    width: 41.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\34 u\\28large\\29,\n  .\\34 u\\24\\28large\\29 {\n    width: 33.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\33 u\\28large\\29,\n  .\\33 u\\24\\28large\\29 {\n    width: 25%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\32 u\\28large\\29,\n  .\\32 u\\24\\28large\\29 {\n    width: 16.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 u\\28large\\29,\n  .\\31 u\\24\\28large\\29 {\n    width: 8.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 2u\\24\\28large\\29 + *,\n  .\\31 1u\\24\\28large\\29 + *,\n  .\\31 0u\\24\\28large\\29 + *,\n  .\\39 u\\24\\28large\\29 + *,\n  .\\38 u\\24\\28large\\29 + *,\n  .\\37 u\\24\\28large\\29 + *,\n  .\\36 u\\24\\28large\\29 + *,\n  .\\35 u\\24\\28large\\29 + *,\n  .\\34 u\\24\\28large\\29 + *,\n  .\\33 u\\24\\28large\\29 + *,\n  .\\32 u\\24\\28large\\29 + *,\n  .\\31 u\\24\\28large\\29 + * {\n    clear: left;\n  }\n\n  .\\-11u\\28large\\29 {\n    margin-left: 91.66667%;\n  }\n\n  .\\-10u\\28large\\29 {\n    margin-left: 83.33333%;\n  }\n\n  .\\-9u\\28large\\29 {\n    margin-left: 75%;\n  }\n\n  .\\-8u\\28large\\29 {\n    margin-left: 66.66667%;\n  }\n\n  .\\-7u\\28large\\29 {\n    margin-left: 58.33333%;\n  }\n\n  .\\-6u\\28large\\29 {\n    margin-left: 50%;\n  }\n\n  .\\-5u\\28large\\29 {\n    margin-left: 41.66667%;\n  }\n\n  .\\-4u\\28large\\29 {\n    margin-left: 33.33333%;\n  }\n\n  .\\-3u\\28large\\29 {\n    margin-left: 25%;\n  }\n\n  .\\-2u\\28large\\29 {\n    margin-left: 16.66667%;\n  }\n\n  .\\-1u\\28large\\29 {\n    margin-left: 8.33333%;\n  }\n}\n\n@media screen and (max-width: 980px) {\n  .row > * {\n    padding: 0 0 0 2em;\n  }\n\n  .row {\n    margin: 0 0 -1px -2em;\n  }\n\n  .row.uniform > * {\n    padding: 2em 0 0 2em;\n  }\n\n  .row.uniform {\n    margin: -2em 0 -1px -2em;\n  }\n\n  .row.\\32 00\\25 > * {\n    padding: 0 0 0 4em;\n  }\n\n  .row.\\32 00\\25 {\n    margin: 0 0 -1px -4em;\n  }\n\n  .row.uniform.\\32 00\\25 > * {\n    padding: 4em 0 0 4em;\n  }\n\n  .row.uniform.\\32 00\\25 {\n    margin: -4em 0 -1px -4em;\n  }\n\n  .row.\\31 50\\25 > * {\n    padding: 0 0 0 3em;\n  }\n\n  .row.\\31 50\\25 {\n    margin: 0 0 -1px -3em;\n  }\n\n  .row.uniform.\\31 50\\25 > * {\n    padding: 3em 0 0 3em;\n  }\n\n  .row.uniform.\\31 50\\25 {\n    margin: -3em 0 -1px -3em;\n  }\n\n  .row.\\35 0\\25 > * {\n    padding: 0 0 0 1em;\n  }\n\n  .row.\\35 0\\25 {\n    margin: 0 0 -1px -1em;\n  }\n\n  .row.uniform.\\35 0\\25 > * {\n    padding: 1em 0 0 1em;\n  }\n\n  .row.uniform.\\35 0\\25 {\n    margin: -1em 0 -1px -1em;\n  }\n\n  .row.\\32 5\\25 > * {\n    padding: 0 0 0 0.5em;\n  }\n\n  .row.\\32 5\\25 {\n    margin: 0 0 -1px -0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 > * {\n    padding: 0.5em 0 0 0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 {\n    margin: -0.5em 0 -1px -0.5em;\n  }\n\n  .\\31 2u\\28medium\\29,\n  .\\31 2u\\24\\28medium\\29 {\n    width: 100%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 1u\\28medium\\29,\n  .\\31 1u\\24\\28medium\\29 {\n    width: 91.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 0u\\28medium\\29,\n  .\\31 0u\\24\\28medium\\29 {\n    width: 83.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\39 u\\28medium\\29,\n  .\\39 u\\24\\28medium\\29 {\n    width: 75%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\38 u\\28medium\\29,\n  .\\38 u\\24\\28medium\\29 {\n    width: 66.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\37 u\\28medium\\29,\n  .\\37 u\\24\\28medium\\29 {\n    width: 58.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\36 u\\28medium\\29,\n  .\\36 u\\24\\28medium\\29 {\n    width: 50%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\35 u\\28medium\\29,\n  .\\35 u\\24\\28medium\\29 {\n    width: 41.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\34 u\\28medium\\29,\n  .\\34 u\\24\\28medium\\29 {\n    width: 33.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\33 u\\28medium\\29,\n  .\\33 u\\24\\28medium\\29 {\n    width: 25%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\32 u\\28medium\\29,\n  .\\32 u\\24\\28medium\\29 {\n    width: 16.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 u\\28medium\\29,\n  .\\31 u\\24\\28medium\\29 {\n    width: 8.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 2u\\24\\28medium\\29 + *,\n  .\\31 1u\\24\\28medium\\29 + *,\n  .\\31 0u\\24\\28medium\\29 + *,\n  .\\39 u\\24\\28medium\\29 + *,\n  .\\38 u\\24\\28medium\\29 + *,\n  .\\37 u\\24\\28medium\\29 + *,\n  .\\36 u\\24\\28medium\\29 + *,\n  .\\35 u\\24\\28medium\\29 + *,\n  .\\34 u\\24\\28medium\\29 + *,\n  .\\33 u\\24\\28medium\\29 + *,\n  .\\32 u\\24\\28medium\\29 + *,\n  .\\31 u\\24\\28medium\\29 + * {\n    clear: left;\n  }\n\n  .\\-11u\\28medium\\29 {\n    margin-left: 91.66667%;\n  }\n\n  .\\-10u\\28medium\\29 {\n    margin-left: 83.33333%;\n  }\n\n  .\\-9u\\28medium\\29 {\n    margin-left: 75%;\n  }\n\n  .\\-8u\\28medium\\29 {\n    margin-left: 66.66667%;\n  }\n\n  .\\-7u\\28medium\\29 {\n    margin-left: 58.33333%;\n  }\n\n  .\\-6u\\28medium\\29 {\n    margin-left: 50%;\n  }\n\n  .\\-5u\\28medium\\29 {\n    margin-left: 41.66667%;\n  }\n\n  .\\-4u\\28medium\\29 {\n    margin-left: 33.33333%;\n  }\n\n  .\\-3u\\28medium\\29 {\n    margin-left: 25%;\n  }\n\n  .\\-2u\\28medium\\29 {\n    margin-left: 16.66667%;\n  }\n\n  .\\-1u\\28medium\\29 {\n    margin-left: 8.33333%;\n  }\n}\n\n@media screen and (max-width: 736px) {\n  .row > * {\n    padding: 0 0 0 2em;\n  }\n\n  .row {\n    margin: 0 0 -1px -2em;\n  }\n\n  .row.uniform > * {\n    padding: 2em 0 0 2em;\n  }\n\n  .row.uniform {\n    margin: -2em 0 -1px -2em;\n  }\n\n  .row.\\32 00\\25 > * {\n    padding: 0 0 0 4em;\n  }\n\n  .row.\\32 00\\25 {\n    margin: 0 0 -1px -4em;\n  }\n\n  .row.uniform.\\32 00\\25 > * {\n    padding: 4em 0 0 4em;\n  }\n\n  .row.uniform.\\32 00\\25 {\n    margin: -4em 0 -1px -4em;\n  }\n\n  .row.\\31 50\\25 > * {\n    padding: 0 0 0 3em;\n  }\n\n  .row.\\31 50\\25 {\n    margin: 0 0 -1px -3em;\n  }\n\n  .row.uniform.\\31 50\\25 > * {\n    padding: 3em 0 0 3em;\n  }\n\n  .row.uniform.\\31 50\\25 {\n    margin: -3em 0 -1px -3em;\n  }\n\n  .row.\\35 0\\25 > * {\n    padding: 0 0 0 1em;\n  }\n\n  .row.\\35 0\\25 {\n    margin: 0 0 -1px -1em;\n  }\n\n  .row.uniform.\\35 0\\25 > * {\n    padding: 1em 0 0 1em;\n  }\n\n  .row.uniform.\\35 0\\25 {\n    margin: -1em 0 -1px -1em;\n  }\n\n  .row.\\32 5\\25 > * {\n    padding: 0 0 0 0.5em;\n  }\n\n  .row.\\32 5\\25 {\n    margin: 0 0 -1px -0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 > * {\n    padding: 0.5em 0 0 0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 {\n    margin: -0.5em 0 -1px -0.5em;\n  }\n\n  .\\31 2u\\28small\\29,\n  .\\31 2u\\24\\28small\\29 {\n    width: 100%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 1u\\28small\\29,\n  .\\31 1u\\24\\28small\\29 {\n    width: 91.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 0u\\28small\\29,\n  .\\31 0u\\24\\28small\\29 {\n    width: 83.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\39 u\\28small\\29,\n  .\\39 u\\24\\28small\\29 {\n    width: 75%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\38 u\\28small\\29,\n  .\\38 u\\24\\28small\\29 {\n    width: 66.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\37 u\\28small\\29,\n  .\\37 u\\24\\28small\\29 {\n    width: 58.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\36 u\\28small\\29,\n  .\\36 u\\24\\28small\\29 {\n    width: 50%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\35 u\\28small\\29,\n  .\\35 u\\24\\28small\\29 {\n    width: 41.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\34 u\\28small\\29,\n  .\\34 u\\24\\28small\\29 {\n    width: 33.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\33 u\\28small\\29,\n  .\\33 u\\24\\28small\\29 {\n    width: 25%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\32 u\\28small\\29,\n  .\\32 u\\24\\28small\\29 {\n    width: 16.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 u\\28small\\29,\n  .\\31 u\\24\\28small\\29 {\n    width: 8.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 2u\\24\\28small\\29 + *,\n  .\\31 1u\\24\\28small\\29 + *,\n  .\\31 0u\\24\\28small\\29 + *,\n  .\\39 u\\24\\28small\\29 + *,\n  .\\38 u\\24\\28small\\29 + *,\n  .\\37 u\\24\\28small\\29 + *,\n  .\\36 u\\24\\28small\\29 + *,\n  .\\35 u\\24\\28small\\29 + *,\n  .\\34 u\\24\\28small\\29 + *,\n  .\\33 u\\24\\28small\\29 + *,\n  .\\32 u\\24\\28small\\29 + *,\n  .\\31 u\\24\\28small\\29 + * {\n    clear: left;\n  }\n\n  .\\-11u\\28small\\29 {\n    margin-left: 91.66667%;\n  }\n\n  .\\-10u\\28small\\29 {\n    margin-left: 83.33333%;\n  }\n\n  .\\-9u\\28small\\29 {\n    margin-left: 75%;\n  }\n\n  .\\-8u\\28small\\29 {\n    margin-left: 66.66667%;\n  }\n\n  .\\-7u\\28small\\29 {\n    margin-left: 58.33333%;\n  }\n\n  .\\-6u\\28small\\29 {\n    margin-left: 50%;\n  }\n\n  .\\-5u\\28small\\29 {\n    margin-left: 41.66667%;\n  }\n\n  .\\-4u\\28small\\29 {\n    margin-left: 33.33333%;\n  }\n\n  .\\-3u\\28small\\29 {\n    margin-left: 25%;\n  }\n\n  .\\-2u\\28small\\29 {\n    margin-left: 16.66667%;\n  }\n\n  .\\-1u\\28small\\29 {\n    margin-left: 8.33333%;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .row > * {\n    padding: 0 0 0 2em;\n  }\n\n  .row {\n    margin: 0 0 -1px -2em;\n  }\n\n  .row.uniform > * {\n    padding: 2em 0 0 2em;\n  }\n\n  .row.uniform {\n    margin: -2em 0 -1px -2em;\n  }\n\n  .row.\\32 00\\25 > * {\n    padding: 0 0 0 4em;\n  }\n\n  .row.\\32 00\\25 {\n    margin: 0 0 -1px -4em;\n  }\n\n  .row.uniform.\\32 00\\25 > * {\n    padding: 4em 0 0 4em;\n  }\n\n  .row.uniform.\\32 00\\25 {\n    margin: -4em 0 -1px -4em;\n  }\n\n  .row.\\31 50\\25 > * {\n    padding: 0 0 0 3em;\n  }\n\n  .row.\\31 50\\25 {\n    margin: 0 0 -1px -3em;\n  }\n\n  .row.uniform.\\31 50\\25 > * {\n    padding: 3em 0 0 3em;\n  }\n\n  .row.uniform.\\31 50\\25 {\n    margin: -3em 0 -1px -3em;\n  }\n\n  .row.\\35 0\\25 > * {\n    padding: 0 0 0 1em;\n  }\n\n  .row.\\35 0\\25 {\n    margin: 0 0 -1px -1em;\n  }\n\n  .row.uniform.\\35 0\\25 > * {\n    padding: 1em 0 0 1em;\n  }\n\n  .row.uniform.\\35 0\\25 {\n    margin: -1em 0 -1px -1em;\n  }\n\n  .row.\\32 5\\25 > * {\n    padding: 0 0 0 0.5em;\n  }\n\n  .row.\\32 5\\25 {\n    margin: 0 0 -1px -0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 > * {\n    padding: 0.5em 0 0 0.5em;\n  }\n\n  .row.uniform.\\32 5\\25 {\n    margin: -0.5em 0 -1px -0.5em;\n  }\n\n  .\\31 2u\\28xsmall\\29,\n  .\\31 2u\\24\\28xsmall\\29 {\n    width: 100%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 1u\\28xsmall\\29,\n  .\\31 1u\\24\\28xsmall\\29 {\n    width: 91.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 0u\\28xsmall\\29,\n  .\\31 0u\\24\\28xsmall\\29 {\n    width: 83.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\39 u\\28xsmall\\29,\n  .\\39 u\\24\\28xsmall\\29 {\n    width: 75%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\38 u\\28xsmall\\29,\n  .\\38 u\\24\\28xsmall\\29 {\n    width: 66.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\37 u\\28xsmall\\29,\n  .\\37 u\\24\\28xsmall\\29 {\n    width: 58.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\36 u\\28xsmall\\29,\n  .\\36 u\\24\\28xsmall\\29 {\n    width: 50%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\35 u\\28xsmall\\29,\n  .\\35 u\\24\\28xsmall\\29 {\n    width: 41.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\34 u\\28xsmall\\29,\n  .\\34 u\\24\\28xsmall\\29 {\n    width: 33.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\33 u\\28xsmall\\29,\n  .\\33 u\\24\\28xsmall\\29 {\n    width: 25%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\32 u\\28xsmall\\29,\n  .\\32 u\\24\\28xsmall\\29 {\n    width: 16.6666666667%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 u\\28xsmall\\29,\n  .\\31 u\\24\\28xsmall\\29 {\n    width: 8.3333333333%;\n    clear: none;\n    margin-left: 0;\n  }\n\n  .\\31 2u\\24\\28xsmall\\29 + *,\n  .\\31 1u\\24\\28xsmall\\29 + *,\n  .\\31 0u\\24\\28xsmall\\29 + *,\n  .\\39 u\\24\\28xsmall\\29 + *,\n  .\\38 u\\24\\28xsmall\\29 + *,\n  .\\37 u\\24\\28xsmall\\29 + *,\n  .\\36 u\\24\\28xsmall\\29 + *,\n  .\\35 u\\24\\28xsmall\\29 + *,\n  .\\34 u\\24\\28xsmall\\29 + *,\n  .\\33 u\\24\\28xsmall\\29 + *,\n  .\\32 u\\24\\28xsmall\\29 + *,\n  .\\31 u\\24\\28xsmall\\29 + * {\n    clear: left;\n  }\n\n  .\\-11u\\28xsmall\\29 {\n    margin-left: 91.66667%;\n  }\n\n  .\\-10u\\28xsmall\\29 {\n    margin-left: 83.33333%;\n  }\n\n  .\\-9u\\28xsmall\\29 {\n    margin-left: 75%;\n  }\n\n  .\\-8u\\28xsmall\\29 {\n    margin-left: 66.66667%;\n  }\n\n  .\\-7u\\28xsmall\\29 {\n    margin-left: 58.33333%;\n  }\n\n  .\\-6u\\28xsmall\\29 {\n    margin-left: 50%;\n  }\n\n  .\\-5u\\28xsmall\\29 {\n    margin-left: 41.66667%;\n  }\n\n  .\\-4u\\28xsmall\\29 {\n    margin-left: 33.33333%;\n  }\n\n  .\\-3u\\28xsmall\\29 {\n    margin-left: 25%;\n  }\n\n  .\\-2u\\28xsmall\\29 {\n    margin-left: 16.66667%;\n  }\n\n  .\\-1u\\28xsmall\\29 {\n    margin-left: 8.33333%;\n  }\n} */\n\n/* Basic */\n\n@-ms-viewport {\n  width: device-width;\n}\n\nbody {\n  -ms-overflow-style: scrollbar;\n}\n\n@media screen and (max-width: 480px) {\n  html,\n  body {\n    min-width: 320px;\n  }\n}\n\nbody {\n  background-color: #000;\n  background-image: url(" + escape(__webpack_require__(/*! ../../images/dark.jpg */ "./src/images/dark.jpg")) + ");\n  background-size: cover;\n  background-position: top center;\n}\n\nbody.is-loading *,\nbody.is-loading *:before,\nbody.is-loading *:after {\n  -webkit-animation: none !important;\n  animation: none !important;\n  transition: none !important;\n}\n\n/* Type */\n\nbody,\ninput,\nselect,\ntextarea {\n  color: rgba(255, 255, 255, 0.65);\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-size: 13pt;\n  font-weight: 200;\n  line-height: 1.65;\n}\n\n@media screen and (max-width: 1280px) {\n  body,\n  input,\n  select,\n  textarea {\n    font-size: 12pt;\n  }\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  border-bottom: dotted 1px rgba(255, 255, 255, 0.35);\n  transition: border-bottom-color 0.2s ease-in-out, color 0.2s ease-in-out;\n}\n\na:hover {\n  color: #ffffff;\n  border-bottom-color: transparent;\n}\n\nstrong,\nb {\n  color: #ffffff;\n  font-weight: 200;\n}\n\nem,\ni {\n  font-style: italic;\n}\n\np {\n  margin: 0 0 2em 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #ffffff;\n  font-weight: 200;\n  line-height: 1.5;\n  margin: 0 0 1em 0;\n}\n\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 980px) {\n  h1 br,\n  h2 br,\n  h3 br,\n  h4 br,\n  h5 br,\n  h6 br {\n    display: none;\n  }\n}\n\nh1 {\n  font-size: 1.75em;\n}\n\n@media screen and (max-width: 980px) {\n  h1 {\n    font-size: 1.5em;\n  }\n}\n\n@media screen and (max-width: 736px) {\n  h1 {\n    font-size: 1.25em;\n  }\n}\n\nh2 {\n  font-size: 1.35em;\n}\n\n@media screen and (max-width: 736px) {\n  h2 {\n    font-size: 1em;\n  }\n}\n\nh3 {\n  font-size: 1em;\n}\n\nh4 {\n  font-size: 1em;\n}\n\nh5 {\n  font-size: 0.9em;\n}\n\nh6 {\n  font-size: 0.7em;\n}\n\nsub {\n  font-size: 0.8em;\n  position: relative;\n  top: 0.5em;\n}\n\nsup {\n  font-size: 0.8em;\n  position: relative;\n  top: -0.5em;\n}\n\nblockquote {\n  border-left: solid 4px rgba(255, 255, 255, 0.25);\n  font-style: italic;\n  margin: 0 0 2em 0;\n  padding: 0.5em 0 0.5em 2em;\n}\n\ncode {\n  background: rgba(255, 255, 255, 0.075);\n  border-radius: 4px;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9em;\n  margin: 0 0.25em;\n  padding: 0.25em 0.65em;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9em;\n  margin: 0 0 2em 0;\n}\n\npre code {\n  display: block;\n  line-height: 1.75;\n  padding: 1em 1.5em;\n  overflow-x: auto;\n}\n\nhr {\n  border: 0;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.25);\n  margin: 2em 0;\n}\n\nhr.major {\n  margin: 3em 0;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-right {\n  text-align: right;\n}\n\n/* Section/Article */\n\n/* section.special,\narticle.special {\n  text-align: center;\n}\n\nheader p {\n  color: rgba(255, 255, 255, 0.35);\n  position: relative;\n  margin: 0 0 1.5em 0;\n}\n\nheader h2 + p {\n  font-size: 1.25em;\n  margin-top: -1em;\n}\n\nheader h3 + p {\n  font-size: 1.1em;\n  margin-top: -0.8em;\n}\n\nheader h4 + p,\nheader h5 + p,\nheader h6 + p {\n  font-size: 0.9em;\n  margin-top: -0.6em;\n} */\n\n/* Form */\n/* \nform {\n  margin: 0 0 2em 0;\n}\n\nlabel {\n  color: #ffffff;\n  display: block;\n  font-size: 0.9em;\n  font-weight: 200;\n  margin: 0 0 1em 0;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\ninput[type=\"tel\"],\nselect,\ntextarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  background: rgba(255, 255, 255, 0.075);\n  border-radius: 4px;\n  border: none;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  color: inherit;\n  display: block;\n  outline: 0;\n  padding: 0 1em;\n  text-decoration: none;\n  width: 100%;\n}\n\ninput[type=\"text\"]:invalid,\ninput[type=\"password\"]:invalid,\ninput[type=\"email\"]:invalid,\ninput[type=\"tel\"]:invalid,\nselect:invalid,\ntextarea:invalid {\n  box-shadow: none;\n}\n\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"tel\"]:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #ff6382;\n  box-shadow: 0 0 0 1px #ff6382;\n}\n\n.select-wrapper {\n  text-decoration: none;\n  display: block;\n  position: relative;\n}\n\n.select-wrapper:before {\n  content: \"\";\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n\n.select-wrapper:before {\n  color: rgba(255, 255, 255, 0.25);\n  display: block;\n  height: 2.75em;\n  line-height: 2.75em;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 2.75em;\n}\n\n.select-wrapper select::-ms-expand {\n  display: none;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\nselect {\n  height: 2.75em;\n}\n\ntextarea {\n  padding: 0.75em 1em;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  display: block;\n  float: left;\n  margin-right: -2em;\n  opacity: 0;\n  width: 1em;\n  z-index: -1;\n}\n\ninput[type=\"checkbox\"] + label,\ninput[type=\"radio\"] + label {\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.65);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  font-weight: 200;\n  padding-left: 2.4em;\n  padding-right: 0.75em;\n  position: relative;\n}\n\ninput[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n\ninput[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n  background: rgba(255, 255, 255, 0.075);\n  border-radius: 4px;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  content: \"\";\n  display: inline-block;\n  height: 1.65em;\n  left: 0;\n  line-height: 1.58125em;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 1.65em;\n}\n\ninput[type=\"checkbox\"]:checked + label:before,\ninput[type=\"radio\"]:checked + label:before {\n  background: #ff6382;\n  border-color: #ff6382;\n  color: #ffffff;\n  content: \"\\f00c\";\n}\n\ninput[type=\"checkbox\"]:focus + label:before,\ninput[type=\"radio\"]:focus + label:before {\n  border-color: #ff6382;\n  box-shadow: 0 0 0 1px #ff6382;\n}\n\ninput[type=\"checkbox\"] + label:before {\n  border-radius: 4px;\n}\n\ninput[type=\"radio\"] + label:before {\n  border-radius: 100%;\n}\n\n::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.35) !important;\n  opacity: 1;\n}\n\n:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.35) !important;\n  opacity: 1;\n}\n\n::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.35) !important;\n  opacity: 1;\n}\n\n:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.35) !important;\n  opacity: 1;\n}\n\n.formerize-placeholder {\n  color: rgba(255, 255, 255, 0.35) !important;\n  opacity: 1;\n} */\n\n/* Box */\n/* \n.box {\n  border-radius: 4px;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  margin-bottom: 2em;\n  padding: 1.5em;\n}\n\n.box > :last-child,\n.box > :last-child > :last-child,\n.box > :last-child > :last-child > :last-child {\n  margin-bottom: 0;\n}\n\n.box.alt {\n  border: 0;\n  border-radius: 0;\n  padding: 0;\n} */\n\n/* Icon */\n/* \n.icon {\n  text-decoration: none;\n  border-bottom: none;\n  position: relative;\n}\n\n.icon:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n\n.icon > .label {\n  display: none;\n}\n\n.icon.style2 {\n  -moz-transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -ms-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  border-radius: 100%;\n  display: inline-block;\n  padding: 0.5em;\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n.icon.style2:before {\n  display: block;\n  width: 1.25em;\n  height: 1.25em;\n  line-height: 1.25em;\n  font-size: 1.35em;\n}\n\n.icon.style2:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n\n@media screen and (max-width: 736px) {\n  .icon.style2:before {\n    font-size: 1em;\n  }\n} */\n\n/* Image */\n/* \n.image {\n  border-radius: 4px;\n  border: 0;\n  display: inline-block;\n  position: relative;\n}\n\n.image img {\n  border-radius: 4px;\n  display: block;\n}\n\n.image.left,\n.image.right {\n  max-width: 40%;\n}\n\n.image.left img,\n.image.right img {\n  width: 100%;\n}\n\n.image.left {\n  float: left;\n  padding: 0 1.5em 1em 0;\n  top: 0.25em;\n}\n\n.image.right {\n  float: right;\n  padding: 0 0 1em 1.5em;\n  top: 0.25em;\n}\n\n.image.fit {\n  display: block;\n  margin: 0 0 2em 0;\n  width: 100%;\n}\n\n.image.fit img {\n  width: 100%;\n}\n\n.image.main {\n  display: block;\n  margin: 0 0 3em 0;\n  width: 100%;\n}\n\n.image.main img {\n  width: 100%;\n} */\n\n/* List */\n\n/* ol {\n  list-style: decimal;\n  margin: 0 0 2em 0;\n  padding-left: 1.25em;\n}\n\nol li {\n  padding-left: 0.25em;\n}\n\nul {\n  list-style: disc;\n  margin: 0 0 2em 0;\n  padding-left: 1em;\n}\n\nul li {\n  padding-left: 0.5em;\n}\n\nul.alt {\n  list-style: none;\n  padding-left: 0;\n}\n\nul.alt li {\n  border-top: solid 1px rgba(255, 255, 255, 0.25);\n  padding: 0.5em 0;\n}\n\nul.alt li:first-child {\n  border-top: 0;\n  padding-top: 0;\n}\n\nul.icons {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\n\nul.icons li {\n  display: inline-block;\n  padding: 0 1em 0 0;\n}\n\nul.icons li:last-child {\n  padding-right: 0;\n}\n\nul.actions {\n  cursor: default;\n  list-style: none;\n  padding-left: 0;\n}\n\nul.actions li {\n  display: inline-block;\n  padding: 0 1em 0 0;\n  vertical-align: middle;\n}\n\nul.actions li:last-child {\n  padding-right: 0;\n}\n\nul.actions.small li {\n  padding: 0 0.5em 0 0;\n}\n\nul.actions.vertical li {\n  display: block;\n  padding: 1em 0 0 0;\n}\n\nul.actions.vertical li:first-child {\n  padding-top: 0;\n}\n\nul.actions.vertical li > * {\n  margin-bottom: 0;\n}\n\nul.actions.vertical.small li {\n  padding: 0.5em 0 0 0;\n}\n\nul.actions.vertical.small li:first-child {\n  padding-top: 0;\n}\n\nul.actions.fit {\n  display: table;\n  margin-left: -1em;\n  padding: 0;\n  table-layout: fixed;\n  width: calc(100% + 1em);\n}\n\nul.actions.fit li {\n  display: table-cell;\n  padding: 0 0 0 1em;\n}\n\nul.actions.fit li > * {\n  margin-bottom: 0;\n}\n\nul.actions.fit.small {\n  margin-left: -0.5em;\n  width: calc(100% + 0.5em);\n}\n\nul.actions.fit.small li {\n  padding: 0 0 0 0.5em;\n}\n\n@media screen and (max-width: 480px) {\n  ul.actions {\n    margin: 0 0 2em 0;\n  }\n\n  ul.actions li {\n    padding: 1em 0 0 0;\n    display: block;\n    text-align: center;\n    width: 100%;\n  }\n\n  ul.actions li:first-child {\n    padding-top: 0;\n  }\n\n  ul.actions li > * {\n    width: 100%;\n    margin: 0 !important;\n  }\n\n  ul.actions li > *.icon:before {\n    margin-left: -2em;\n  }\n\n  ul.actions.small li {\n    padding: 0.5em 0 0 0;\n  }\n\n  ul.actions.small li:first-child {\n    padding-top: 0;\n  }\n}\n\ndl {\n  margin: 0 0 2em 0;\n}\n\ndl dt {\n  display: block;\n  font-weight: 200;\n  margin: 0 0 1em 0;\n}\n\ndl dd {\n  margin-left: 2em;\n} */\n\n/* Table */\n/* \n.table-wrapper {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n}\n\ntable {\n  margin: 0 0 2em 0;\n  width: 100%;\n}\n\ntable tbody tr {\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  border-left: 0;\n  border-right: 0;\n}\n\ntable tbody tr:nth-child(2n + 1) {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\ntable td {\n  padding: 0.75em 0.75em;\n}\n\ntable th {\n  color: #ffffff;\n  font-size: 0.9em;\n  font-weight: 200;\n  padding: 0 0.75em 0.75em 0.75em;\n  text-align: left;\n}\n\ntable thead {\n  border-bottom: solid 2px rgba(255, 255, 255, 0.25);\n}\n\ntable tfoot {\n  border-top: solid 2px rgba(255, 255, 255, 0.25);\n}\n\ntable.alt {\n  border-collapse: separate;\n}\n\ntable.alt tbody tr td {\n  border: solid 1px rgba(255, 255, 255, 0.25);\n  border-left-width: 0;\n  border-top-width: 0;\n}\n\ntable.alt tbody tr td:first-child {\n  border-left-width: 1px;\n}\n\ntable.alt tbody tr:first-child td {\n  border-top-width: 1px;\n}\n\ntable.alt thead {\n  border-bottom: 0;\n}\n\ntable.alt tfoot {\n  border-top: 0;\n} */\n\n/* Button */\n/* \ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  background-color: #ff6382;\n  border-radius: 4px;\n  border: 0;\n  color: !important;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 200;\n  height: 2.85em;\n  line-height: 2.95em;\n  padding: 0 1.5em;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\nbutton:hover,\n.button:hover {\n  background-color: #ff7c96;\n}\n\ninput[type=\"submit\"]:active,\ninput[type=\"reset\"]:active,\ninput[type=\"button\"]:active,\nbutton:active,\n.button:active {\n  background-color: #ff496e;\n}\n\ninput[type=\"submit\"].icon,\ninput[type=\"reset\"].icon,\ninput[type=\"button\"].icon,\nbutton.icon,\n.button.icon {\n  padding-left: 1.35em;\n}\n\ninput[type=\"submit\"].icon:before,\ninput[type=\"reset\"].icon:before,\ninput[type=\"button\"].icon:before,\nbutton.icon:before,\n.button.icon:before {\n  margin-right: 0.5em;\n}\n\ninput[type=\"submit\"].fit,\ninput[type=\"reset\"].fit,\ninput[type=\"button\"].fit,\nbutton.fit,\n.button.fit {\n  display: block;\n  margin: 0 0 1em 0;\n  width: 100%;\n}\n\ninput[type=\"submit\"].small,\ninput[type=\"reset\"].small,\ninput[type=\"button\"].small,\nbutton.small,\n.button.small {\n  font-size: 0.8em;\n}\n\ninput[type=\"submit\"].big,\ninput[type=\"reset\"].big,\ninput[type=\"button\"].big,\nbutton.big,\n.button.big {\n  font-size: 1.35em;\n}\n\ninput[type=\"submit\"].alt,\ninput[type=\"reset\"].alt,\ninput[type=\"button\"].alt,\nbutton.alt,\n.button.alt {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);\n  color: #ffffff !important;\n}\n\ninput[type=\"submit\"].alt:hover,\ninput[type=\"reset\"].alt:hover,\ninput[type=\"button\"].alt:hover,\nbutton.alt:hover,\n.button.alt:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\ninput[type=\"submit\"].alt:active,\ninput[type=\"reset\"].alt:active,\ninput[type=\"button\"].alt:active,\nbutton.alt:active,\n.button.alt:active {\n  background-color: rgba(255, 0, 0, 0.2);\n}\n\ninput[type=\"submit\"].alt.icon:before,\ninput[type=\"reset\"].alt.icon:before,\ninput[type=\"button\"].alt.icon:before,\nbutton.alt.icon:before,\n.button.alt.icon:before {\n  color: rgba(255, 255, 255, 0.35);\n}\n\ninput[type=\"submit\"].special,\ninput[type=\"reset\"].special,\ninput[type=\"button\"].special,\nbutton.special,\n.button.special {\n  background-color: #ff6382;\n  color: !important;\n}\n\ninput[type=\"submit\"].special:hover,\ninput[type=\"reset\"].special:hover,\ninput[type=\"button\"].special:hover,\nbutton.special:hover,\n.button.special:hover {\n  background-color: #ff7c96;\n}\n\ninput[type=\"submit\"].special:active,\ninput[type=\"reset\"].special:active,\ninput[type=\"button\"].special:active,\nbutton.special:active,\n.button.special:active {\n  background-color: #ff496e;\n}\n\ninput[type=\"submit\"].disabled,\ninput[type=\"submit\"]:disabled,\ninput[type=\"reset\"].disabled,\ninput[type=\"reset\"]:disabled,\ninput[type=\"button\"].disabled,\ninput[type=\"button\"]:disabled,\nbutton.disabled,\nbutton:disabled,\n.button.disabled,\n.button:disabled {\n  background-color: rgba(255, 255, 255, 0.65) !important;\n  box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);\n  color: #000 !important;\n  cursor: default;\n  opacity: 0.25;\n}\n\n@media screen and (max-width: 480px) {\n  input[type=\"submit\"],\n  input[type=\"reset\"],\n  input[type=\"button\"],\n  button,\n  .button {\n    padding: 0;\n  }\n} */\n\n/* Thumbnails */\n/* \n.thumbnails {\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: row;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  position: relative;\n  margin: 0 0 2em -2em;\n}\n\n.thumbnails a {\n  -moz-transition: all 0.2s ease;\n  -webkit-transition: all 0.2s ease;\n  -ms-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  border-bottom: none;\n  display: block;\n  width: 100%;\n  margin: 0 0 2em 0;\n  text-align: center;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);\n  background-color: rgba(255, 255, 255, 0.075);\n  cursor: pointer;\n  outline: 0;\n  overflow: hidden;\n}\n\n.thumbnails a img {\n  display: block;\n  width: 100%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.thumbnails a h3 {\n  margin: 1em;\n}\n\n.thumbnails a:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 0 0.5em 0 #ff6382;\n}\n\n.thumbnails > div {\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: calc(100% / 3);\n  padding-left: 2em;\n}\n\n.thumbnails > div > :last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 1280px) {\n  .thumbnails {\n    margin: 0 0 2em -1.5em;\n  }\n\n  .thumbnails a {\n    margin: 0 0 1.5em 0;\n  }\n\n  .thumbnails > div {\n    padding-left: 1.5em;\n  }\n}\n\n@media screen and (max-width: 980px) {\n  .thumbnails h3 {\n    font-size: 0.8em;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .thumbnails {\n    display: block;\n  }\n\n  .thumbnails a {\n    margin: 0 0 2em 0 !important;\n  }\n\n  .thumbnails > div {\n    display: block;\n    width: 100%;\n  }\n\n  .thumbnails > div:last-child > :last-child {\n    margin-bottom: 0 !important;\n  }\n\n  .thumbnails h3 {\n    font-size: 1em;\n  }\n} */\n\n/* Poptrox */\n\n.poptrox-popup {\n  -ms-box-sizing: content-box;\n  box-sizing: content-box;\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 0.5em 3em 0 rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.poptrox-popup .closer {\n  transition: opacity 0.2s ease-in-out;\n  text-decoration: none;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 2;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  white-space: nowrap;\n  text-indent: 2.5em;\n  overflow: hidden;\n  width: 2.5em;\n  height: 2.5em;\n  display: block;\n}\n\n.poptrox-popup .closer:before {\n  content: \"\\F00D\";\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n}\n\n.poptrox-popup .closer:before {\n  display: block;\n  position: relative;\n  text-indent: 0;\n  border-radius: 100%;\n  box-shadow: inset 0 0 0 1px #ffffff;\n  color: #ffffff !important;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n}\n\n.poptrox-popup:hover .closer {\n  opacity: 0.5;\n}\n\n.poptrox-popup:hover .closer:hover {\n  opacity: 1;\n}\n\n/* Wrapper */\n\n#wrapper {\n  max-width: 68em;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2em;\n  opacity: 1;\n  -webkit-filter: none;\n          filter: none;\n  transition: opacity 1s ease, -webkit-filter 1s ease;\n  transition: opacity 1s ease, filter 1s ease;\n  transition: opacity 1s ease, filter 1s ease, -webkit-filter 1s ease;\n}\n\nbody.is-loading #wrapper {\n  opacity: 0;\n  -moz-filter: blur(1px);\n  -webkit-filter: blur(1px);\n  -ms-filter: blur(1px);\n  filter: blur(1px);\n}\n\nbody.is-covered #wrapper {\n  -moz-filter: blur(3px);\n  -webkit-filter: blur(3px);\n  -ms-filter: blur(3px);\n  filter: blur(3px);\n}\n\n/* Header */\n\n/* Footer */\n\n#footer {\n  text-align: center;\n  padding: 4em 0 4em 0;\n}\n\n#footer:before {\n  content: \"\";\n  border-top: solid 1px rgba(255, 255, 255, 0.25);\n  width: 10em;\n  display: block;\n  margin: 0 auto 3em auto;\n}\n\n@media screen and (max-width: 1280px) {\n  #footer {\n    padding: 2em 0 2em 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/css-loader/lib/css-base.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/projectCard.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/projectCard.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/css-loader/lib/css-base.js */ "./node_modules/react-scripts/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 100%;\n}\n\n.row {\n  height: 100%;\n}\n\n.col {\n  height: 100%;\n}\n\n#imageSpace {\n  background: #dce1de;\n}\n\n#infoSpace {\n  padding: 10px;\n  padding-top: 10%;\n}\n\n.projectInfo h2,\n.projectInfo h3 {\n  color: black;\n  margin: 0;\n}\n\n.projectInfo p {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.95);\n}\n\n.modal .ant-modal-header {\n  /* background: #dce1de; */\n  border-bottom: none;\n  width: 66.66666%;\n  text-align: center;\n  padding: 0;\n}\n\n.ant-carousel {\n  height: 100%;\n  margin: inherit;\n}\n\n.ant-carousel div,\n.ant-carousel img,\n.ant-carousel .slick-slider,\n.ant-carousel .slick-list,\n.ant-carousel .slick-track {\n  height: 100%;\n}\n\n.ant-carousel img {\n  max-width: 90%;\n  max-height: 100%;\n  object-fit: scale-down;\n  text-align: center;\n  margin: auto;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n\n.ant-card-cover {\n  height: 30vh;\n}\n\n.ant-card-cover img {\n  object-fit: cover;\n  height: 100%;\n}\n\n.ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.text-center {\n  text-align: center;\n}\n\n.btn {\n  /* text-align: center; */\n  width: 90%;\n  margin: auto;\n}\n\n.carouselContainer {\n  height: 100%;\n}\n\n.rightIcon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  color: rgba(0, 0, 0, 0.25);\n}\n\n.leftIcon {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  color: rgba(0, 0, 0, 0.25);\n}\n\n.innerCard {\n  background: #e8ebe4;\n  min-height: 30%;\n}\n\n.ant-card-body {\n  font-size: 1.1vw;\n}\n\n.ant-card-meta-title {\n  font-size: 1.5vw;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_projectCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projectCard */ "./src/components/projectCard.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/css/main.css */ "./src/assets/css/main.css");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/Steven/Documents/GitHub/Portfolio/portfolio/src/App.js";







var test = __webpack_require__(/*! ./data/projectInfo.json */ "./src/data/projectInfo.json");

console.log(test.projects[0]);

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.showProjects = function (props) {
      return props.projects.map(function (project) {
        console.log(project);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_projectCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          projectInfo: project,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }));
      });
    };

    return _this;
  }

  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ct",
        id: "t1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ct",
        id: "t2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ct",
        id: "t3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ct",
        id: "t4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page",
        id: "p1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ./images/profile.jpg */ "./src/images/profile.jpg"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Steven Leong"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "hint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Web Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Passionate"), " about building", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "excellent"), " software that ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), " improves the lives of those around me."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/SteveLeong",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "icon style2 fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Github"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/steven-leong-348600154/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "icon style2 fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "mailto:steveleong8@gmail.com",
        email: true,
        className: "icon style2 fa-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Email")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page",
        id: "p2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "symbol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "About Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "hint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page",
        id: "p3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "headTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "My Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.showProjects(test)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page",
        id: "p4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "symbol fa fa-dribbble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Dribbble"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "hint",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "credit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.eot":
/*!**************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.eot ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.32400f4e.eot";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.eot?v=4.5.0":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.eot?v=4.5.0 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.32400f4e.eot";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.svg?v=4.5.0":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.svg?v=4.5.0 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.f775f9cc.svg";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.ttf?v=4.5.0":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.ttf?v=4.5.0 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.a3de2170.ttf";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.woff2?v=4.5.0":
/*!************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.woff2?v=4.5.0 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.db812d8a.woff2";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-webfont.woff?v=4.5.0":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/fontawesome-webfont.woff?v=4.5.0 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fontawesome-webfont.a35720c2.woff";

/***/ }),

/***/ "./src/components/projectCard.js":
/*!***************************************!*\
  !*** ./src/components/projectCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_projectCard_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/projectCard.css */ "./src/styles/projectCard.css");
/* harmony import */ var _styles_projectCard_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_projectCard_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/Steven/Documents/GitHub/Portfolio/portfolio/src/components/projectCard.js";



 // import "../App.css";

var Meta = antd__WEBPACK_IMPORTED_MODULE_6__["Card"].Meta;
var modalStyle = {
  height: "75vh",
  padding: "0"
};

var ProjectCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectCard, _Component);

  function ProjectCard(_props) {
    var _this;

    Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectCard);

    _this = Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectCard).call(this, _props));
    _this.state = {
      visible: false
    };

    _this.next = function () {
      _this.carousel.next();
    };

    _this.previous = function () {
      _this.carousel.prev();
    };

    _this.showModal = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleCancel = function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    };

    _this.displayImages = function (props) {
      return props.map(function (image) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: __webpack_require__("./src/images/projectImages sync recursive ^\\.\\/.*\\.jpg$")("./" + image + ".jpg"),
          alt: "blah",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
      });
    };

    _this.carousel = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var projectInfo = this.props.projectInfo;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        bordered: false,
        style: {
          background: "transparent",
          padding: "5%",
          marginBottom: "10%",
          width: "90%"
        },
        hoverable: true,
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "innerCard",
        hoverable: true,
        bordered: false,
        cover: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          alt: "example",
          src: __webpack_require__("./src/images/projectImages sync recursive ^\\.\\/.*\\.jpg$")("./" + projectInfo.images[0] + ".jpg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Meta, {
        title: projectInfo.title,
        description: projectInfo.shortdesc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        centered: true,
        visible: this.state.visible,
        footer: null,
        onCancel: this.handleCancel,
        width: "65%",
        style: {
          borderRadius: "40px"
        },
        bodyStyle: modalStyle,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        span: 16,
        className: "col",
        id: "imageSpace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "carouselContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "left",
        onClick: this.previous,
        className: "leftIcon",
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
        ref: function ref(node) {
          return _this2.carousel = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.displayImages(projectInfo.images)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "right",
        onClick: this.next,
        className: "rightIcon",
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        span: 8,
        className: "col",
        id: "infoSpace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "projectInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, projectInfo.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, projectInfo.shortdesc), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Technologies"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, projectInfo.technologies), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        size: "large",
        className: "btn",
        href: projectInfo.github,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Github"))))))));
    }
  }]);

  return ProjectCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "/Users/Steven/Documents/GitHub/Portfolio/portfolio/src/components/sidebar.js";




var Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar, _Component);

  function Sidebar() {
    Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    return Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).apply(this, arguments));
  }

  Object(_Users_Steven_Documents_GitHub_Portfolio_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#t1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "symbol",
        id: "uno",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#t2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "symbol",
        id: "dos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "idcard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#t3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "symbol",
        id: "tres",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/data/projectInfo.json":
/*!***********************************!*\
  !*** ./src/data/projectInfo.json ***!
  \***********************************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = {"projects":[{"id":1,"title":"LeafBank","shortdesc":"An iOS Application for logging and surveying medical marijuana usage among U.S. Veterans to aid in the research of cannabis","description":"","technologies":"Swift, Xcode, Firebase, Sketch","github":"","images":["LeafBank1","LeafBank2","LeafBank3","LeafBank4"],"demo":""},{"id":2,"title":"MatrixVision","shortdesc":"A Web Application that takes a users webcam video and manipulated the pixels to create a matrix-like filter","description":"","technologies":"React, Javascript, HTML5, CSS","github":"https://github.com/SteveLeong/MatrixVision","images":["Matrix1"],"demo":"https://steveleong.github.io/MatrixVision/"},{"id":3,"title":"Critix","shortdesc":"A Web Application that allows photographers and digital illustrators to share and critic works of other content creators","description":"","technologies":"EJS, HTML5, CSS, MongoDB","github":"https://github.com/joshquines/Critix","images":["mid-image"],"demo":""},{"id":4,"title":"Library Kiosk Application","shortdesc":"A Windows Application to replace the current outdated systems libraries use today.","description":"","technologies":"XAML, Visual Studio","github":"https://github.com/jglem/HCILibrary","images":["Library1","Library2","Library3","Library4"],"demo":""},{"id":5,"title":"Import Car Database","shortdesc":"A database designed and implemented from scratch","description":"","technologies":"MySQL, PHP, Javascript, CSS, HTML","github":"https://github.com/SteveLeong/ImportCarsDB","images":["ImportCar1","ImportCar2","ImportCar3"],"demo":""}]};

/***/ }),

/***/ "./src/images/dark.jpg":
/*!*****************************!*\
  !*** ./src/images/dark.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dark.acd303ca.jpg";

/***/ }),

/***/ "./src/images/profile.jpg":
/*!********************************!*\
  !*** ./src/images/profile.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile.a99cd454.jpg";

/***/ }),

/***/ "./src/images/projectImages sync recursive ^\\.\\/.*\\.jpg$":
/*!*****************************************************!*\
  !*** ./src/images/projectImages sync ^\.\/.*\.jpg$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ImportCar1.jpg": "./src/images/projectImages/ImportCar1.jpg",
	"./ImportCar2.jpg": "./src/images/projectImages/ImportCar2.jpg",
	"./ImportCar3.jpg": "./src/images/projectImages/ImportCar3.jpg",
	"./LeafBank1.jpg": "./src/images/projectImages/LeafBank1.jpg",
	"./LeafBank2.jpg": "./src/images/projectImages/LeafBank2.jpg",
	"./LeafBank3.jpg": "./src/images/projectImages/LeafBank3.jpg",
	"./LeafBank4.jpg": "./src/images/projectImages/LeafBank4.jpg",
	"./Library1.jpg": "./src/images/projectImages/Library1.jpg",
	"./Library2.jpg": "./src/images/projectImages/Library2.jpg",
	"./Library3.jpg": "./src/images/projectImages/Library3.jpg",
	"./Library4.jpg": "./src/images/projectImages/Library4.jpg",
	"./Matrix1.jpg": "./src/images/projectImages/Matrix1.jpg",
	"./mid-image.jpg": "./src/images/projectImages/mid-image.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/projectImages sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/images/projectImages/ImportCar1.jpg":
/*!*************************************************!*\
  !*** ./src/images/projectImages/ImportCar1.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ImportCar1.d99b6b19.jpg";

/***/ }),

/***/ "./src/images/projectImages/ImportCar2.jpg":
/*!*************************************************!*\
  !*** ./src/images/projectImages/ImportCar2.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ImportCar2.266a2a25.jpg";

/***/ }),

/***/ "./src/images/projectImages/ImportCar3.jpg":
/*!*************************************************!*\
  !*** ./src/images/projectImages/ImportCar3.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ImportCar3.64d314a3.jpg";

/***/ }),

/***/ "./src/images/projectImages/LeafBank1.jpg":
/*!************************************************!*\
  !*** ./src/images/projectImages/LeafBank1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LeafBank1.a99cb713.jpg";

/***/ }),

/***/ "./src/images/projectImages/LeafBank2.jpg":
/*!************************************************!*\
  !*** ./src/images/projectImages/LeafBank2.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LeafBank2.535d9494.jpg";

/***/ }),

/***/ "./src/images/projectImages/LeafBank3.jpg":
/*!************************************************!*\
  !*** ./src/images/projectImages/LeafBank3.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LeafBank3.04db3532.jpg";

/***/ }),

/***/ "./src/images/projectImages/LeafBank4.jpg":
/*!************************************************!*\
  !*** ./src/images/projectImages/LeafBank4.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LeafBank4.38659d1d.jpg";

/***/ }),

/***/ "./src/images/projectImages/Library1.jpg":
/*!***********************************************!*\
  !*** ./src/images/projectImages/Library1.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Library1.925058dc.jpg";

/***/ }),

/***/ "./src/images/projectImages/Library2.jpg":
/*!***********************************************!*\
  !*** ./src/images/projectImages/Library2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Library2.e3e63080.jpg";

/***/ }),

/***/ "./src/images/projectImages/Library3.jpg":
/*!***********************************************!*\
  !*** ./src/images/projectImages/Library3.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Library3.93301704.jpg";

/***/ }),

/***/ "./src/images/projectImages/Library4.jpg":
/*!***********************************************!*\
  !*** ./src/images/projectImages/Library4.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Library4.84fec23d.jpg";

/***/ }),

/***/ "./src/images/projectImages/Matrix1.jpg":
/*!**********************************************!*\
  !*** ./src/images/projectImages/Matrix1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Matrix1.ad9c8b8d.jpg";

/***/ }),

/***/ "./src/images/projectImages/mid-image.jpg":
/*!************************************************!*\
  !*** ./src/images/projectImages/mid-image.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mid-image.bb9cdd23.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Steven/Documents/GitHub/Portfolio/portfolio/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styles/projectCard.css":
/*!************************************!*\
  !*** ./src/styles/projectCard.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./projectCard.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/projectCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js */ "./node_modules/react-scripts/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./projectCard.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/projectCard.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/react-scripts/node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./projectCard.css */ "./node_modules/react-scripts/node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/projectCard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Steven/Documents/GitHub/Portfolio/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Steven/Documents/GitHub/Portfolio/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map