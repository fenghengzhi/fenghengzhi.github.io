webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-game-engine></app-game-engine>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.0.3@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_engine_game_engine_component__ = __webpack_require__("../../../../../src/app/game-engine/game-engine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_graph_engine_dom_graph_engine_component__ = __webpack_require__("../../../../../src/app/dom-graph-engine/dom-graph-engine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_graph_engine_canvas_graph_engine_component__ = __webpack_require__("../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__threejs_graph_engine_threejs_graph_engine_component__ = __webpack_require__("../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__game_engine_game_engine_component__["a" /* GameEngineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dom_graph_engine_dom_graph_engine_component__["a" /* DomGraphEngineComponent */],
                __WEBPACK_IMPORTED_MODULE_5__canvas_graph_engine_canvas_graph_engine_component__["a" /* CanvasGraphEngineComponent */],
                __WEBPACK_IMPORTED_MODULE_6__threejs_graph_engine_threejs_graph_engine_component__["a" /* ThreejsGraphEngineComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  待开发\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasGraphEngineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasGraphEngineComponent = (function () {
    function CanvasGraphEngineComponent() {
    }
    CanvasGraphEngineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], CanvasGraphEngineComponent.prototype, "gameArea", void 0);
    CanvasGraphEngineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-canvas-graph-engine',
            template: __webpack_require__("../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas-graph-engine/canvas-graph-engine.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasGraphEngineComponent);
    return CanvasGraphEngineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dom-graph-engine/dom-graph-engine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game-box\">\n  <div *ngFor=\"let col of gameArea;trackBy: trackByFn\" class=\"col\">\n    <div *ngFor=\"let block of col;trackBy: trackByFn\" [class.visible]=\"block\" class=\"block\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dom-graph-engine/dom-graph-engine.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-box {\n  border: 3px solid blue;\n  padding: 3px;\n  display: inline-block;\n}\n.game-box .col {\n  display: inline-block;\n}\n.game-box .col .block {\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: 1px;\n  border-radius: 5px;\n  border: 3px solid red;\n  background-color: green;\n  visibility: hidden;\n}\n.game-box .col .block.visible {\n  visibility: visible;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dom-graph-engine/dom-graph-engine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomGraphEngineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomGraphEngineComponent = (function () {
    function DomGraphEngineComponent() {
    }
    DomGraphEngineComponent.prototype.trackByFn = function (index, value) {
        return index;
    };
    DomGraphEngineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Array)
    ], DomGraphEngineComponent.prototype, "gameArea", void 0);
    DomGraphEngineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dom-graph-engine',
            template: __webpack_require__("../../../../../src/app/dom-graph-engine/dom-graph-engine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dom-graph-engine/dom-graph-engine.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DomGraphEngineComponent);
    return DomGraphEngineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-engine/game-engine.component.html":
/***/ (function(module, exports) {

module.exports = "<div>图形引擎<select name=\"\" id=\"\" (change)=\"currentEngine=$event.target.value;\" (keypress)=\"$event.preventDefault()\"\n                 (keydown)=\"$event.preventDefault()\">\n  <option value=\"dom\">dom</option>\n  <option value=\"canvas\">canvas</option>\n  <option value=\"threejs\">threejs</option>\n</select>\n</div>\n<app-dom-graph-engine *ngIf=\"currentEngine==='dom'\" [gameArea]=\"gameShowArea\"></app-dom-graph-engine>\n<app-canvas-graph-engine *ngIf=\"currentEngine==='canvas'\" [gameArea]=\"gameShowArea\"></app-canvas-graph-engine>\n<app-threejs-graph-engine *ngIf=\"currentEngine==='threejs'\" [gameArea]=\"gameShowArea\"></app-threejs-graph-engine>\n"

/***/ }),

/***/ "../../../../../src/app/game-engine/game-engine.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-engine/game-engine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameEngineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameEngineComponent = (function () {
    function GameEngineComponent() {
        var _this = this;
        this.currentEngine = 'dom';
        this.size = { width: 10, height: 20 };
        this.shapePosition = { x: 3, y: -4 };
        this.shapes = [];
        this.checkShape = {
            Right: function () {
                return _this.currentShape.every(function (arr, i) {
                    return arr.every(function (value, j) {
                        if (_this.currentShape[i][j] === true && i + _this.shapePosition.x >= _this.size.width) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                });
            },
            Left: function () {
                return _this.currentShape.every(function (arr, i) {
                    return arr.every(function (value, j) {
                        if (_this.currentShape[i][j] === true && i + _this.shapePosition.x < 0) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                });
            },
            LR: function () {
                return _this.checkShape.Left() && _this.checkShape.Right();
            },
            Top: function () {
                return _this.currentShape.every(function (arr, i) {
                    return arr.every(function (value, j) {
                        if (_this.currentShape[i][j] === true && j + _this.shapePosition.y < 0) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                });
            },
            Bottom: function () {
                return _this.currentShape.every(function (arr, i) {
                    return arr.every(function (value, j) {
                        if (_this.currentShape[i][j] === true && j + _this.shapePosition.y >= _this.size.height) {
                            // console.log(i, j, value);
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                });
            },
            Block: function () {
                return _this.currentShape.every(function (arr, i) {
                    return arr.every(function (value, j) {
                        if (value === false) {
                            return true;
                        }
                        else if (!_this.currentArea[_this.shapePosition.x + i][_this.shapePosition.y + j]) {
                            return true;
                        }
                        else {
                            // console.log(i, j, value);
                            return false;
                        }
                    });
                });
            }
        };
        this.shapes[0] = [
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false]
        ];
        this.shapes[1] = [
            [false, true, false, false],
            [false, true, true, false],
            [false, true, false, false],
            [false, false, false, false]
        ];
        this.shapes[2] = [
            [false, true, false, false],
            [false, true, false, false],
            [false, true, true, false],
            [false, false, false, false]
        ];
        this.shapes[3] = [
            [false, true, false, false],
            [false, true, true, false],
            [false, false, true, false],
            [false, false, false, false]
        ];
        this.shapes[4] = [
            [false, false, true, false],
            [false, true, true, false],
            [false, true, false, false],
            [false, false, false, false]
        ];
        this.shapes[5] = [
            [false, false, true, false],
            [false, false, true, false],
            [false, true, true, false],
            [false, false, false, false]
        ];
        this.shapes[6] = [
            [false, false, false, false],
            [false, true, true, false],
            [false, true, true, false],
            [false, false, false, false]
        ];
    }
    GameEngineComponent.prototype.initArea = function () {
        var area = new Array(this.size.width);
        for (var i = 0; i < this.size.width; ++i) {
            area[i] = new Array(this.size.height);
            for (var j = 0; j < this.size.height; ++j) {
                area[i][j] = false;
            }
        }
        return area;
    };
    GameEngineComponent.prototype.goNextShape = function () {
        for (var i = 0; i < 4; ++i) {
            for (var j = 0; j < 4; ++j) {
                if (this.currentShape[i][j] === true) {
                    this.currentArea[this.shapePosition.x + i][this.shapePosition.y + j] = true;
                }
            }
        }
        this.currentShape = this.nextShape;
        this.nextShape = this.genNextShape();
        this.shapePosition.x = 3;
        this.shapePosition.y = -4;
    };
    GameEngineComponent.prototype.genNextShape = function () {
        var i = Math.floor(Math.random() * this.shapes.length);
        return this.shapes[i];
    };
    GameEngineComponent.prototype.initGame = function () {
        this.currentArea = this.initArea();
        this.gameShowArea = this.initArea();
        this.currentShape = this.genNextShape();
        this.nextShape = this.genNextShape();
    };
    GameEngineComponent.prototype.genShowArea = function () {
        // this.gameShowArea = this.currentArea;
        for (var i = 0; i < this.size.width; ++i) {
            for (var j = 0; j < this.size.height; ++j) {
                this.gameShowArea[i][j] = this.currentArea[i][j];
            }
        }
        for (var i = 0; i < 4; ++i) {
            for (var j = 0; j < 4; ++j) {
                if (j + this.shapePosition.y >= 0 && this.currentShape[i][j] === true) {
                    this.gameShowArea[i + this.shapePosition.x][j + this.shapePosition.y] = true;
                }
            }
        }
    };
    GameEngineComponent.prototype.rotateShape = function () {
        var originShape = this.currentShape;
        var rotatedShape = [new Array(4), new Array(4), new Array(4), new Array(4)];
        for (var i = 0; i < 4; ++i) {
            for (var j = 0; j < 4; ++j) {
                rotatedShape[i][j] = this.currentShape[j][3 - i];
            }
        }
        this.currentShape = rotatedShape;
        if (!(this.checkShape.Block() && this.checkShape.LR())) {
            this.checkShape = originShape;
        }
    };
    GameEngineComponent.prototype.eliminateRow = function () {
        var eliminatedRowCount = 0;
        for (var j = 0; j < this.size.height; ++j) {
            var flag = true;
            for (var i = 0; i < this.size.width; ++i) {
                if (!this.currentArea[i][j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                ++eliminatedRowCount;
                for (var k = j; k > 0; --k) {
                    for (var i = 0; i < this.size.width; ++i) {
                        this.currentArea[i][k] = this.currentArea[i][k - 1];
                    }
                }
                for (var i = 0; i < this.size.width; ++i) {
                    this.currentArea[i][0] = false;
                }
            }
        }
    };
    GameEngineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initGame();
        this.timer = window.setInterval(function () {
            ++_this.shapePosition.y;
            if (!(_this.checkShape.Block() && _this.checkShape.Bottom())) {
                --_this.shapePosition.y;
                if (!_this.checkShape.Top()) {
                    window.clearInterval(_this.timer);
                    alert('fail');
                }
                _this.goNextShape();
                _this.eliminateRow();
            }
            _this.genShowArea();
        }, 400);
    };
    GameEngineComponent.prototype.keydownHandler = function (event) {
        // console.log(event);
        switch (event.which) {
            case 38:
                this.rotateShape();
                break;
            case 40:
                ++this.shapePosition.y;
                if (!(this.checkShape.Bottom() && this.checkShape.Block())) {
                    --this.shapePosition.y;
                }
                break;
            case 37:
                --this.shapePosition.x;
                if (!(this.checkShape.Left() && this.checkShape.Block())) {
                    ++this.shapePosition.x;
                }
                break;
            case 39:
                ++this.shapePosition.x;
                if (!(this.checkShape.Right() && this.checkShape.Block())) {
                    --this.shapePosition.x;
                }
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GameEngineComponent.prototype, "keydownHandler", null);
    GameEngineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-engine',
            template: __webpack_require__("../../../../../src/app/game-engine/game-engine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-engine/game-engine.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], GameEngineComponent);
    return GameEngineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n学习中\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreejsGraphEngineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreejsGraphEngineComponent = (function () {
    function ThreejsGraphEngineComponent() {
    }
    ThreejsGraphEngineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], ThreejsGraphEngineComponent.prototype, "gameArea", void 0);
    ThreejsGraphEngineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-threejs-graph-engine',
            template: __webpack_require__("../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/threejs-graph-engine/threejs-graph-engine.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreejsGraphEngineComponent);
    return ThreejsGraphEngineComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.0.3@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map