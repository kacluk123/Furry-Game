/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n}\n\nfunction Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\nfunction Game() {\n    var self = this;\n\n    this.board = document.querySelectorAll('#board div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n\n    this.hideVisibleFurry = function () {\n        for (var i = 0; i < this.board.length; i++) {\n            this.board[i].classList.remove('furry');\n        }\n    };\n\n    this.hideVisibleCoin = function () {\n        for (var i = 0; i < this.board.length; i++) {\n            this.board[i].classList.remove('coin');\n        }\n    };\n\n    this.index = function (x, y) {\n        return x + (y * 10);\n    };\n\n    this.showFurry = function () {\n        this.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n\n    this.moveFurry = function () {\n        if (self.furry.direction === \"right\") {\n            self.furry.x++;\n        } else if (self.furry.direction === \"left\") {\n            self.furry.x--;\n        } else if (self.furry.direction === \"up\") {\n            self.furry.y++;\n        }\n        else if (self.furry.direction === \"down\") {\n            self.furry.y--;\n        }\n\n        if (self.furry.x < 0 || self.furry.x > 9 || self.furry.y < 0 || self.furry.y > 9) {\n            self.gameOver();\n        } else {\n            console.log(self.furry.x, self.furry.y)\n            self.showFurry();\n            self.checkCoinCollision();\n        }\n\n    };\n\n    this.turnFurry = function (event) {\n        switch (event.which) {\n            case 37:\n                self.furry.direction = 'left';\n                break;\n            case 39:\n                self.furry.direction = 'right';\n                break;\n            case 40:\n                self.furry.direction = 'up';\n                break;\n            case 38:\n                self.furry.direction = 'down';\n                break;\n\n        }\n\n    };\n\n    // this.checkCoinCollision = function(){\n    //\n    //     if (this.furry.x === this.coin.x || this.furry.y === this.coin.y ){\n    //\n    //         this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('furry');\n    //         this.score++;\n    //         this.coin = new Coin();\n    //\n    //     }\n    // }\n\n    this.checkCoinCollision = function () {\n        this.xx = document.querySelector('#score div strong')\n        for (k = 0; k < this.board.length; k++) {\n            if (this.board[k].className === 'coin furry') {\n                this.board[k].classList.remove('coin');\n                this.score++;\n                this.coin = new Coin()\n                this.showCoin()\n                this.xx.innerText = this.score;\n            }\n        }\n    };\n\n    this.startGame = function () {\n        this.idSetInterval = setInterval(this.moveFurry, 250);\n    };\n\n    this.gameOver = function () {\n        this.hideVisibleFurry();\n        this.hideVisibleCoin();\n        clearInterval(this.idSetInterval);\n        alert('Przegrałeś, twój wynik to ' + this.score);\n        this.score = 0;\n        this.xx.innerText = this.score;\n    }\n\n}\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var btn = document.querySelector('.start-game');\n    btn.addEventListener('click', function () {\n\n        var gm = new Game();\n\n        gm.startGame();\n        gm.showCoin();\n\n        document.addEventListener('keydown', function (event) {\n            gm.turnFurry(event);\n        });\n    });\n\n\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGdXJyeSgpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIENvaW4oKSB7XG4gICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2JvYXJkIGRpdicpO1xuICAgIHRoaXMuZnVycnkgPSBuZXcgRnVycnkoKTtcbiAgICB0aGlzLmNvaW4gPSBuZXcgQ29pbigpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuXG4gICAgdGhpcy5oaWRlVmlzaWJsZUZ1cnJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZnVycnknKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmhpZGVWaXNpYmxlQ29pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmluZGV4ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHggKyAoeSAqIDEwKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zaG93RnVycnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGlkZVZpc2libGVGdXJyeSgpO1xuICAgICAgICB0aGlzLmJvYXJkW3RoaXMuaW5kZXgodGhpcy5mdXJyeS54LCB0aGlzLmZ1cnJ5LnkpXS5jbGFzc0xpc3QuYWRkKCdmdXJyeScpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuc2hvd0NvaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbdGhpcy5pbmRleCh0aGlzLmNvaW4ueCwgdGhpcy5jb2luLnkpXS5jbGFzc0xpc3QuYWRkKCdjb2luJyk7XG4gICAgfTtcblxuXG4gICAgdGhpcy5tb3ZlRnVycnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBzZWxmLmZ1cnJ5LngrKztcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIHNlbGYuZnVycnkueC0tO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuZnVycnkuZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgICAgIHNlbGYuZnVycnkueSsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuZnVycnkuZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgc2VsZi5mdXJyeS55LS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5mdXJyeS54IDwgMCB8fCBzZWxmLmZ1cnJ5LnggPiA5IHx8IHNlbGYuZnVycnkueSA8IDAgfHwgc2VsZi5mdXJyeS55ID4gOSkge1xuICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5mdXJyeS54LCBzZWxmLmZ1cnJ5LnkpXG4gICAgICAgICAgICBzZWxmLnNob3dGdXJyeSgpO1xuICAgICAgICAgICAgc2VsZi5jaGVja0NvaW5Db2xsaXNpb24oKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMudHVybkZ1cnJ5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgc2VsZi5mdXJyeS5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHNlbGYuZnVycnkuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgc2VsZi5mdXJyeS5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBzZWxmLmZ1cnJ5LmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gdGhpcy5jaGVja0NvaW5Db2xsaXNpb24gPSBmdW5jdGlvbigpe1xuICAgIC8vXG4gICAgLy8gICAgIGlmICh0aGlzLmZ1cnJ5LnggPT09IHRoaXMuY29pbi54IHx8IHRoaXMuZnVycnkueSA9PT0gdGhpcy5jb2luLnkgKXtcbiAgICAvL1xuICAgIC8vICAgICAgICAgdGhpcy5ib2FyZFsgdGhpcy5pbmRleCh0aGlzLmNvaW4ueCx0aGlzLmNvaW4ueSkgXS5jbGFzc0xpc3QucmVtb3ZlKCdmdXJyeScpO1xuICAgIC8vICAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgIC8vICAgICAgICAgdGhpcy5jb2luID0gbmV3IENvaW4oKTtcbiAgICAvL1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgdGhpcy5jaGVja0NvaW5Db2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUgZGl2IHN0cm9uZycpXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtrXS5jbGFzc05hbWUgPT09ICdjb2luIGZ1cnJ5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRba10uY2xhc3NMaXN0LnJlbW92ZSgnY29pbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW4gPSBuZXcgQ29pbigpXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pbigpXG4gICAgICAgICAgICAgICAgdGhpcy54eC5pbm5lclRleHQgPSB0aGlzLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlkU2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLm1vdmVGdXJyeSwgMjUwKTtcbiAgICB9O1xuXG4gICAgdGhpcy5nYW1lT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaWRlVmlzaWJsZUZ1cnJ5KCk7XG4gICAgICAgIHRoaXMuaGlkZVZpc2libGVDb2luKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZFNldEludGVydmFsKTtcbiAgICAgICAgYWxlcnQoJ1ByemVncmHFgmXFmywgdHfDs2ogd3luaWsgdG8gJyArIHRoaXMuc2NvcmUpO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy54eC5pbm5lclRleHQgPSB0aGlzLnNjb3JlO1xuICAgIH1cblxufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBnbSA9IG5ldyBHYW1lKCk7XG5cbiAgICAgICAgZ20uc3RhcnRHYW1lKCk7XG4gICAgICAgIGdtLnNob3dDb2luKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZ20udHVybkZ1cnJ5KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxufSk7XG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ })

/******/ });