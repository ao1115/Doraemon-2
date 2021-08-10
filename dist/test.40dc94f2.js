// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.doraemon * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .doraemon *::after,\n  .doraemon *::before {\n    box-sizing: border-box;\n  }\n  body {\n    background: #d4ecf9;\n  }\n  .doraemon {\n    position: relative;\n    margin-top: -50px;\n    animation: play linear 600ms infinite alternate;;\n  }\n \n  .mushroom {\n    border: 2px solid #555;\n    width: 6px;\n    height: 20px;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -6px;\n    background: #bd8d22;\n  }\n  .mushroom::before {\n    content: \"\";\n    display: block;\n    border: 2px solid #555;\n    background: #bd8d22;\n    width: 20px;\n    height: 20px;\n    margin-left: -9px;\n    border-radius: 20px 20px 0 0;\n    height: 10px;\n    margin-top: -3px;\n  }\n  .bamboo {\n    background: rgba(162, 171, 176, 0.8);\n    width: 100px;\n    height: 5px;\n    position: absolute;\n    left: 50%;\n    top: 105px;\n    margin-left: -50px;\n    border-radius: 30px;\n    animation: rotar linear 300ms infinite alternate;\n  }\n  \n  .header {\n    position: relative;\n  }\n  .header .face {\n    border: 2px solid black;\n    position: absolute;\n    top: 120px;\n    left: 50%;\n    margin-left: -100px;\n    width: 200px;\n    height: 200px;\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: inset 0px 0px 0 20px #35a1c9, inset 0px 0px 0 22px black; /*\u7ED9\u767D\u8272\u7684\u5706\u52A0\u4E24\u4E2A\u9634\u5F71\uFF0C\u4E00\u4E2A\u662F\u84DD\u8272\u7684\u8138\uFF0C\u4E00\u4E2A\u662F\u84DD\u8272\u7684\u8138\u7684\u8FB9\u6846*/\n  }\n  .eye {\n    border: 1px solid black;\n    width: 48px;\n    height: 48px;\n    background: white;\n    border-radius: 100%;\n    position: absolute;\n    left: 50%;\n    margin-left: -48px;\n    top: 144px;\n  }\n  .eye.right {\n        transform: translateX(48px);\n  }\n  .eye.left .yuan1 ,.eye.right .yuan1{\n    background: black;\n    width: 16px;\n    height: 24px;\n    border-radius: 100%;\n    position: absolute;\n    top: 14px;\n    left: 24px;\n  }\n  .eye.left .yuan1::before, .eye.right .yuan1::before{\n    content: \"\";\n    display: block;\n    background: white;\n    width: 3px;\n    height: 8px;\n    border-radius: 100%;\n    z-index: 2;\n    position: absolute;\n    top: 9px;\n    left: 7px;\n  }\n  .eye.right .yuan1{\n      position: absolute;\n      left: 6px;\n  }\n  .eye.right:hover{\n      height: 52px;\n  }\n  .eye.right:hover::after {\n    content: \"\";\n    display: block;\n    border: 2px solid black;\n    width: 15px;\n    height: 14px;\n    border-radius: 14px 15px 0 0;\n    height: 7px;\n    border-bottom: transparent;\n    position: absolute;\n    top: 43px;\n    left: 16px;\n  }\n  .eye.right:hover .yuan1{\n      display:none\n  }\n  .nose {\n    border: 1px solid black;\n    background: #b11735;\n    width: 34px;\n    height: 34px;\n    border-radius: 100%;\n    position: absolute;\n    left: 50%;\n    top: 186px;\n    margin-left: -20px;\n  }\n  .nose::before {\n    content: \"\";\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    background: white;\n    position: absolute;\n    left: 8px;\n    top: 7px;\n  }\n  .mustache > div {\n    width: 60px;\n    height: 2px;\n    position: absolute;\n    top: 86px;\n    left: 12px;\n    background: black;\n  }\n  .mustache .b1 {\n    margin-top: -6px;\n    transform: skewY(20deg);\n    transform-origin: bottom right;\n  }\n  .mustache .b3 {\n    margin-top: 8px;\n    transform: skewY(-8deg);\n    transform-origin: bottom right;\n  }\n  .mustache.right {\n    transform: rotateY(180deg);\n  }\n  .line {\n    background: black;\n    height: 20px;\n    width: 2px;\n    position: absolute;\n    left: 50%;\n    top: 33px;\n  }\n  .mouth {\n    width: 120px;\n    height: 120px;\n    border-radius: 0 0 120px 120px;\n    height: 60px;\n    background: #b11635;\n    position: absolute;\n    left: 50%;\n    margin-left: -60px;\n    top: 108px;\n    z-index: 3;\n    overflow: hidden;\n  }\n  .mouth::before,\n  .mouth::after {\n    content: \"\";\n    display: block;\n    width: 50px;\n    height: 80px;\n    background: #ca2533;\n    border-radius: 50px 50px 0 0;\n  }\n  .mouth::before {\n    position: absolute;\n    left: 56px;\n    top: 24px;\n    transform-origin: bottom left;\n    transform: rotate(-45deg);\n  }\n  .mouth::after {\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 24px;\n    transform-origin: bottom right;\n    transform: rotate(45deg);\n  }\n  /* \u8EAB\u4F53\u90E8\u5206 */\n  .main {\n    position: relative;\n    top: 320px;\n  }\n  .abdomen {\n    width: 156px;\n    height: 172px;\n    border: 2px solid black;\n    background: #35a1c9;\n    position: absolute;\n    left: 50%;\n    margin-left: -78px;\n    border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n    z-index: -3;\n    top: -80px;\n  }\n  .arm {\n    width: 50px;\n    height: 100px;\n    border: 2px solid black;\n    background: #35a1c9;\n    position: absolute;\n    left: 50%;\n    top: -78px;\n    border-radius: 55px / 85px;\n    z-index: -2;\n  }\n  .arm.left {\n    margin-left: -50px;\n    transform-origin: bottom left;\n    transform: rotate(-50deg);\n  }\n  .arm.right {\n    transform-origin: bottom right;\n    transform: rotate(50deg);\n  }\n  .arm::before {\n    content: \"\";\n    display: block;\n    width: 60px;\n    height: 60px;\n    border: 2px solid black;\n    background: white;\n    border-radius: 84px;\n    margin-left: -10px;\n    margin-top: -34px;\n  }\n  .bufanda {\n    width: 100px;\n    height: 50px;\n    background: #a1172e;\n    border-radius: 100px / 50px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: -42px;\n    z-index: -1;\n  }\n  .baidu {\n    width: 110px;\n    height: 70px;\n    margin: 0 auto;\n    background: white;\n    border-radius: 110px / 70px;\n    position: relative;\n    top: 3px;\n    z-index: -3;\n  }\n  .leg {\n    width: 55px;\n    height: 85px;\n    border: 2px solid black;\n    background: white;\n    position: absolute;\n    left: 50%;\n    top: 36px;\n    border-radius: 55px / 85px;\n    z-index: -4;\n  }\n  .leg.left {\n    margin-left: -50px;\n  }\n  .cesta {\n    width: 60px;\n    height: 30px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    margin-left: -30px;\n    top: -34px;\n    border-radius: 0 0 60px 60px;\n    z-index: 10;\n  }\n  .bell {\n    width: 34px;\n    height: 34px;\n    border: 2px solid black;\n    border-radius: 100%;\n    background: #f19629;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n    margin-left: -17px;\n  }\n  .bell::before {\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    background-color: black;\n    position: absolute;\n    right: 0;\n    top: 8px;\n    left: 0;\n    margin: auto;\n  }\n  .bell::after {\n    content: \"\";\n    display: block;\n    width: 15px;\n    height: 2px;\n    background-color: black;\n    margin: 0 auto;\n    position: relative;\n    top: 20px;\n  }\n  @keyframes rotar {\n    0% {\n      transform: rotate3D(0, 1, 0, 0deg);\n    }\n    100% {\n      transform: rotate3D(0, 1, 0, 360deg);\n    }\n  }\n  @keyframes play{\n    0%{\n        top:0px;\n    }\n    50%{\n        top:50px;\n    }\n    100%{\n        top:50px;\n    }\n}\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.40dc94f2.map