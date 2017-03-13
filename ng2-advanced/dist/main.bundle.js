webpackJsonp([1,4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = (function () {
    function CardsComponent(router, route) {
        this.router = router;
        this.route = route;
        this.num = 0;
    }
    CardsComponent.prototype.GoHome = function () {
        this.router.navigateByUrl('/dashboard');
    };
    CardsComponent.prototype.GoChartsFlot = function () {
        this.router.navigate(['/charts', 'flot']);
    };
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('p1=' + this.route.snapshot.params['p1']);
        //this.num = this.route.snapshot.params['num'];
        this.route.params.subscribe(function (params) {
            _this.num = parseInt(params['num']);
            _this.p1 = _this.route.snapshot.params['p1'];
            _this.p2 = _this.route.snapshot.params['p2'];
            if (isNaN(_this.num))
                _this.num = 0;
        });
        // this.route.queryParams.subscribe((params: Params) => {
        //   this.q1 = params['q1']);
        //   this.q2 = params['q2'];
        // });
    };
    CardsComponent.prototype.IncrementNumForMatrix = function () {
        //this.router.navigate(['/cards', this.num+1]);
    };
    CardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__(523),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], CardsComponent);
    return CardsComponent;
    var _a, _b;
}());
//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlotComponent = (function () {
    function FlotComponent() {
    }
    FlotComponent.prototype.ngOnInit = function () {
        $(__WEBPACK_IMPORTED_MODULE_1__init__["a" /* FlotCharts */]);
    };
    FlotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-flot',
            template: __webpack_require__(524),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], FlotComponent);
    return FlotComponent;
}());
//# sourceMappingURL=flot.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        $(__WEBPACK_IMPORTED_MODULE_1__init__["a" /* initDashboard */]);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(525),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__(526),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(527),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(461);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true, enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(522),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_layout_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__["a" /* LayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FlotCharts;
function FlotCharts() {
    if (!$.fn.plot)
        return;
    // Dont run if charts page not loaded
    if (!$('#bar-flotchart').length)
        return;
    // BAR
    // -----------------------------------
    $.get('assets/server/chart/bar.json', function (data) {
        var barData = data;
        var barOptions = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.8
                            }, {
                                opacity: 0.5
                            }]
                    }
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                // position: (isRTL ? 'right' : 'left'),
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            shadowSize: 0
        };
        $('#bar-flotchart').plot(barData, barOptions);
    });
    // BAR STACKED
    // -----------------------------------
    $.get('assets/server/chart/barstacked.json', function (data) {
        var barStackeData = data;
        var barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 200,
                // position: (isRTL ? 'right' : 'left'),
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            shadowSize: 0
        };
        $('#barstacked-flotchart').plot(barStackeData, barStackedOptions);
    });
    // SPLINE
    // -----------------------------------
    $.get('assets/server/chart/spline.json', function (data) {
        var splineData = data;
        var splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 2
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 1
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                // position: (isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        $('#spline-flotchart').plot(splineData, splineOptions);
    });
    // AREA
    // -----------------------------------
    $.get('assets/server/chart/area.json', function (data) {
        var areaData = data;
        var areaOptions = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.5
                            }, {
                                opacity: 0.9
                            }]
                    }
                },
                points: {
                    show: false
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
            },
            shadowSize: 0
        };
        $('#area-flotchart').plot(areaData, areaOptions);
    });
    // LINE
    // -----------------------------------
    $.get('assets/server/chart/line.json', function (data) {
        var lineData = data;
        var lineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                // position: (isRTL ? 'right' : 'left'),
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            shadowSize: 0
        };
        $('#line-flotchart').plot(lineData, lineOptions);
    });
    // PIE
    // -----------------------------------
    var pieData = [{
            'label': 'CSS',
            'color': '#009688',
            'data': 40
        }, {
            'label': 'LESS',
            'color': '#FFC107',
            'data': 90
        }, {
            'label': 'SASS',
            'color': '#FF7043',
            'data': 75
        }];
    var pieOptions = {
        series: {
            pie: {
                show: true,
                innerRadius: 0,
                label: {
                    show: true,
                    radius: 0.8,
                    formatter: function (label, series) {
                        return '<div class="flot-pie-label">' +
                            //label + ' : ' +
                            Math.round(series.percent) +
                            '%</div>';
                    },
                    background: {
                        opacity: 0.8,
                        color: '#222'
                    }
                }
            }
        }
    };
    $('#pie-flotchart').plot(pieData, pieOptions);
    // DONUT
    // -----------------------------------
    var donutData = [{
            'color': '#4CAF50',
            'data': 60,
            'label': 'Coffee'
        }, {
            'color': '#009688',
            'data': 90,
            'label': 'CSS'
        }, {
            'color': '#FFC107',
            'data': 50,
            'label': 'LESS'
        }, {
            'color': '#FF7043',
            'data': 80,
            'label': 'Jade'
        }, {
            'color': '#3949AB',
            'data': 116,
            'label': 'AngularJS'
        }];
    var donutOptions = {
        series: {
            pie: {
                show: true,
                innerRadius: 0.5 // This makes the donut shape
            }
        }
    };
    $('#donut-flotchart').plot(donutData, donutOptions);
    // REALTIME
    // -----------------------------------
    var realTimeOptions = {
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: ['#3F51B5', '#3F51B5']
                }
            },
            shadowSize: 0 // Drawing is faster without shadows
        },
        grid: {
            show: false,
            borderWidth: 0,
            minBorderMargin: 20,
            labelMargin: 10
        },
        xaxis: {
            tickFormatter: function () {
                return '';
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        },
        colors: ['#3F51B5']
    };
    // Generate random data for realtime demo
    var data = [], totalPoints = 300;
    var realTimeData = getRandomData();
    update();
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);
        // Do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            }
            else if (y > 100) {
                y = 100;
            }
            data.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]]);
        }
        return [res];
    }
    function update() {
        realTimeData = getRandomData();
        $('#realtime-flotchart').plot(realTimeData, realTimeOptions);
        setTimeout(update, 30);
    }
    // end random data generation
}
//# sourceMappingURL=init.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initDashboard;
function initDashboard() {
    if (!$.fn.plot || !$.fn.easyPieChart)
        return;
    // Main Flot chart
    var splineData = [{
            'label': 'Clicks',
            'color': Colors.byName('purple-300'),
            data: [
                ['1', 40],
                ['2', 50],
                ['3', 40],
                ['4', 50],
                ['5', 66],
                ['6', 66],
                ['7', 76],
                ['8', 96],
                ['9', 90],
                ['10', 105],
                ['11', 125],
                ['12', 135]
            ]
        }, {
            'label': 'Unique',
            'color': Colors.byName('green-400'),
            data: [
                ['1', 30],
                ['2', 40],
                ['3', 20],
                ['4', 40],
                ['5', 80],
                ['6', 90],
                ['7', 70],
                ['8', 60],
                ['9', 90],
                ['10', 150],
                ['11', 130],
                ['12', 160]
            ]
        }, {
            'label': 'Recurrent',
            'color': Colors.byName('blue-500'),
            data: [
                ['1', 10],
                ['2', 20],
                ['3', 10],
                ['4', 20],
                ['5', 6],
                ['6', 10],
                ['7', 32],
                ['8', 26],
                ['9', 20],
                ['10', 35],
                ['11', 30],
                ['12', 56]
            ]
        }];
    var splineOptions = {
        series: {
            lines: {
                show: false
            },
            points: {
                show: false,
                radius: 3
            },
            splines: {
                show: true,
                tension: 0.39,
                lineWidth: 5,
                fill: 1,
                fillColor: Colors.byName('primary')
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 0,
            hoverable: true,
            backgroundColor: 'transparent'
        },
        tooltip: true,
        tooltipOpts: {
            content: function (label, x, y) {
                return x + ' : ' + y;
            }
        },
        xaxis: {
            tickColor: 'transparent',
            mode: 'categories',
            font: {
                color: Colors.byName('blueGrey-200')
            }
        },
        yaxis: {
            show: false,
            min: 0,
            max: 220,
            tickColor: 'transparent',
            font: {
                color: Colors.byName('blueGrey-200')
            },
            //position: 'right' or 'left',
            tickFormatter: function (v) {
                return v /* + ' visitors'*/;
            }
        },
        shadowSize: 0
    };
    $('#flot-main-spline').each(function () {
        var $el = $(this);
        if ($el.data('height'))
            $el.height($el.data('height'));
        $el.plot(splineData, splineOptions);
    });
    // Bar chart stacked
    // ------------------------
    var stackedChartData = [{
            data: [
                [1, 45],
                [2, 42],
                [3, 45],
                [4, 43],
                [5, 45],
                [6, 47],
                [7, 45],
                [8, 42],
                [9, 45],
                [10, 43]
            ]
        }, {
            data: [
                [1, 35],
                [2, 35],
                [3, 17],
                [4, 29],
                [5, 10],
                [6, 7],
                [7, 35],
                [8, 35],
                [9, 17],
                [10, 29]
            ]
        }];
    var stackedChartOptions = {
        bars: {
            show: true,
            fill: true,
            barWidth: 0.3,
            lineWidth: 1,
            align: 'center',
            // order : 1,
            fillColor: {
                colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
            }
        },
        colors: [Colors.byName('blue-100'), Colors.byName('blue-500')],
        series: {
            shadowSize: 3
        },
        xaxis: {
            show: true,
            position: 'bottom',
            ticks: 10,
            font: {
                color: Colors.byName('blueGrey-200')
            }
        },
        yaxis: {
            show: false,
            min: 0,
            max: 60,
            font: {
                color: Colors.byName('blueGrey-200')
            }
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: 'rgba(120,120,120,0.5)'
        },
        tooltip: true,
        tooltipOpts: {
            content: 'Value %x.0 is %y.0',
            defaultTheme: false,
            shifts: {
                x: 0,
                y: -20
            }
        }
    };
    $('#flot-stacked-chart').each(function () {
        var $el = $(this);
        if ($el.data('height'))
            $el.height($el.data('height'));
        $el.plot(stackedChartData, stackedChartOptions);
    });
    // Flot bar chart
    // ------------------
    var barChartOptions = {
        series: {
            bars: {
                show: true,
                fill: 1,
                barWidth: 0.2,
                lineWidth: 0,
                align: 'center'
            },
            highlightColor: 'rgba(255,255,255,0.2)'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            color: '#8394a9'
        },
        tooltip: true,
        tooltipOpts: {
            content: function getTooltip(label, x, y) {
                return 'Visitors for ' + x + ' was ' + (y * 1000);
            }
        },
        xaxis: {
            tickColor: 'transparent',
            mode: 'categories',
            font: {
                color: Colors.byName('blueGrey-200')
            }
        },
        yaxis: {
            tickColor: 'transparent',
            font: {
                color: Colors.byName('blueGrey-200')
            }
        },
        legend: {
            show: false
        },
        shadowSize: 0
    };
    var barChartData = [{
            'label': 'New',
            bars: {
                order: 0,
                fillColor: Colors.byName('primary')
            },
            data: [
                ['Jan', 20],
                ['Feb', 15],
                ['Mar', 25],
                ['Apr', 30],
                ['May', 40],
                ['Jun', 35]
            ]
        }, {
            'label': 'Recurrent',
            bars: {
                order: 1,
                fillColor: Colors.byName('green-400')
            },
            data: [
                ['Jan', 35],
                ['Feb', 25],
                ['Mar', 45],
                ['Apr', 25],
                ['May', 30],
                ['Jun', 15]
            ]
        }];
    $('#flot-bar-chart').each(function () {
        var $el = $(this);
        if ($el.data('height'))
            $el.height($el.data('height'));
        $el.plot(barChartData, barChartOptions);
    });
    // Small flot chart
    // ---------------------
    var chartTaskData = [{
            'label': 'Total',
            color: Colors.byName('primary'),
            data: [
                ['Jan', 14],
                ['Feb', 14],
                ['Mar', 12],
                ['Apr', 16],
                ['May', 13],
                ['Jun', 14],
                ['Jul', 19]
            ]
        }];
    var chartTaskOptions = {
        series: {
            lines: {
                show: false
            },
            points: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 3,
                fill: 1
            },
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
        },
        tooltip: true,
        tooltipOpts: {
            content: function (label, x, y) {
                return x + ' : ' + y;
            }
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            min: 0,
            max: 30,
            tickColor: '#eee',
            //position: 'right' or 'left',
            tickFormatter: function (v) {
                return v /* + ' visitors'*/;
            }
        },
        shadowSize: 0
    };
    $('#flot-task-chart').each(function () {
        var $el = $(this);
        if ($el.data('height'))
            $el.height($el.data('height'));
        $el.plot(chartTaskData, chartTaskOptions);
    });
    // Easy Pie charts
    // -----------------
    var pieOptionsTask = {
        lineWidth: 6,
        trackColor: 'transparent',
        barColor: Colors.byName('primary'),
        scaleColor: false,
        size: 90,
        lineCap: 'round',
        animate: {
            duration: 3000,
            enabled: true
        }
    };
    $('#dashboard-easypiechartTask').easyPieChart(pieOptionsTask);
    // Vector Map
    // -----------------
    // USA Map
    var usa_markers = [{
            latLng: [40.71, -74.00],
            name: 'New York'
        }, {
            latLng: [34.05, -118.24],
            name: 'Los Angeles'
        }, {
            latLng: [41.87, -87.62],
            name: 'Chicago',
            style: {
                fill: Colors.byName('pink-500'),
                r: 15
            }
        }, {
            latLng: [29.76, -95.36],
            name: 'Houston',
            style: {
                fill: Colors.byName('purple-500'),
                r: 10
            }
        }, {
            latLng: [39.95, -75.16],
            name: 'Philadelphia'
        }, {
            latLng: [38.90, -77.03],
            name: 'Washington'
        }, {
            latLng: [37.36, -122.03],
            name: 'Silicon Valley',
            style: {
                fill: Colors.byName('green-500'),
                r: 20
            }
        }];
    var usa_options = {
        map: 'us_mill_en',
        normalizeFunction: 'polynomial',
        backgroundColor: '#fff',
        regionsSelectable: false,
        markersSelectable: false,
        zoomButtons: false,
        zoomOnScroll: false,
        markers: usa_markers,
        regionStyle: {
            initial: {
                fill: Colors.byName('blueGrey-200')
            },
            hover: {
                fill: Colors.byName('gray-light'),
                stroke: '#fff'
            },
        },
        markerStyle: {
            initial: {
                fill: Colors.byName('blue-500'),
                stroke: '#fff',
                r: 10
            },
            hover: {
                fill: Colors.byName('orange-500'),
                stroke: '#fff'
            }
        }
    };
    $('#vector-map').vectorMap(usa_options);
    // Datepicker
    // -----------------
    $('#dashboard-datepicker').datepicker();
    // Sparklines
    // -----------------
    var sparkValue1 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
    var sparkValue2 = [2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5];
    var sparkValue3 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
    var sparkValue4 = [6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2];
    var sparkOpts = {
        type: 'line',
        height: 20,
        width: '70',
        lineWidth: 2,
        valueSpots: {
            '0:': Colors.byName('blue-700'),
        },
        lineColor: Colors.byName('blue-700'),
        spotColor: Colors.byName('blue-700'),
        fillColor: 'transparent',
        highlightLineColor: Colors.byName('blue-700'),
        spotRadius: 0
    };
    initSparkline($('#sparkline1'), sparkValue1, sparkOpts);
    initSparkline($('#sparkline2'), sparkValue2, sparkOpts);
    initSparkline($('#sparkline3'), sparkValue3, sparkOpts);
    initSparkline($('#sparkline4'), sparkValue4, sparkOpts);
    // call sparkline and mix options with data attributes
    function initSparkline(el, values, opts) {
        el.sparkline(values, $.extend(sparkOpts, el.data()));
    }
}
//# sourceMappingURL=init.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_flot_flot_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__["a" /* CardsComponent */] },
            {
                path: 'charts', children: [
                    { path: 'flot', component: __WEBPACK_IMPORTED_MODULE_0__charts_flot_flot_component__["a" /* FlotComponent */] }
                ]
            }
        ]
    }];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());
//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_flot_flot_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_routing_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__layout_routing_module__["a" /* LayoutRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__["a" /* CardsComponent */], __WEBPACK_IMPORTED_MODULE_0__charts_flot_flot_component__["a" /* FlotComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutModule);
    return LayoutModule;
}());
//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 461:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, ".active {\r\n  background-color: yellow;\r\n}\r\n\r\n\r\n.myactive{\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container container-lg\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-xs-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-heading bg-pink-500\">\n                <!-- START dropdown-->\n                <div class=\"pull-right dropdown\">\n                  <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\n                  <ul role=\"menu\" class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\n                    <li><a href=\"#\">Option 1</a></li>\n                    <li><a href=\"#\">Option 2</a></li>\n                    <li><a href=\"#\">Option 3</a></li>\n                  </ul>\n                </div>\n                <!-- END dropdown-->\n              <div class=\"card-title\">Paracosm: {{num}},P1={{p1}},P2={{p2}}</div>\n              </div>\n              <div class=\"card-body\">\n                <p>Nulla egestas faucibus tincidunt.</p>\n                <p class=\"m0\"><a href=\"#\"><img src=\"assets/img/pic1.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a><a href=\"#\"><img src=\"assets/img/pic2.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a><a href=\"#\"><img src=\"assets/img/pic3.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a><a href=\"#\"><img src=\"assets/img/pic4.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a></p>\n              </div>\n              <div class=\"card-footer\">\n                <button type=\"button\" class=\"btn btn-flat btn-default\" (click)=\"GoHome()\" >GO HOME</button>\n                <button type=\"button\" class=\"btn btn-flat btn-default\" (click)=\"GoChartsFlot()\" >Go Charts Flot</button>\n                <button type=\"button\" class=\"btn btn-flat btn-default\" (click)=\"IncrementNumForMatrix()\" >+1</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-heading bg-primary\">\n                <div class=\"card-title\">Paracosm</div>\n              </div>\n              <div class=\"card-offset\">\n                <div class=\"card-offset-item text-right\">\n                  <button type=\"button\" class=\"btn-raised btn btn-info btn-circle btn-lg\"><em class=\"ion-android-add\"></em></button>\n                </div>\n              </div>\n              <div class=\"card-body pt0\">\n                <p class=\"mb-sm\">Cras rutrum scelerisque auctor. Donec ultricies blandit venenatis. Nulla facilisi. Praesent diam diam, venenatis lorem par.</p>\n              </div>\n              <div class=\"card-footer\">\n                <button type=\"button\" class=\"btn btn-flat btn-default\"\n                [routerLink]=\"['/dashboard']\"\n                >GO HOME</button>\n                <button type=\"button\" class=\"btn btn-flat btn-default\"\n                [routerLink]=\"['/charts/flot']\"\n                >Go Flot</button>\n                <button type=\"button\" class=\"btn btn-flat btn-default\"\n                  [routerLink]=\"['/cards',this.num+1, {p1:this.p1, p2:this.p2}]\"\n                  [queryParams]=\"{name:'will'}\"\n                >+1</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-item\"><img src=\"assets/img/pic5.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n                <div class=\"card-item-text text-right\">Paracosm</div>\n              </div>\n              <div class=\"card-offset\">\n                <div class=\"card-offset-item text-left\">\n                  <button type=\"button\" class=\"btn-raised btn btn-primary btn-circle btn-lg\">25</button>\n                </div>\n              </div>\n              <div class=\"card-body pt0\">\n                <h4 class=\"m0\">Sky red</h4>\n                <p class=\"m0\"><span class=\"mr-sm text-muted\">by</span><a href=\"#\">John</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-item\"><img src=\"assets/img/pic4.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n                <div class=\"card-item-text\">Paracosm</div>\n              </div>\n              <div class=\"card-offset\">\n                <div class=\"card-offset-item text-center\">\n                  <button type=\"button\" class=\"btn-raised btn btn-success btn-circle btn-lg\"><em class=\"ion-share\"></em></button>\n                </div>\n              </div>\n              <div class=\"card-body pt0\">\n                <h4 class=\"m0\">Peaceful view</h4>\n                <p class=\"m0\"><span class=\"mr-sm text-muted\">by</span><a href=\"#\">Zachary</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic1.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n            <div class=\"card-item-text bg-transparent\">\n              <h4 class=\"text-center\">Jill Howell</h4>\n            </div>\n          </div>\n          <div class=\"card-offset\">\n            <div class=\"card-offset-item text-right\">\n              <button type=\"button\" class=\"btn-raised btn btn-danger btn-circle btn-lg\"><em class=\"ion-ios-heart\"></em></button>\n            </div>\n          </div>\n          <div class=\"mda-list\">\n            <div class=\"mda-list-item\">\n              <div class=\"mda-list-item-icon\"><em class=\"ion-android-call icon-2x text-primary\"></em></div>\n              <div class=\"mda-list-item-text mda-2-line\">\n                <h3>(123) 456 789</h3>\n                <h4 class=\"text-muted\">Home</h4>\n              </div>\n              <div class=\"mda-list-item-icon pull-right\"><em class=\"ion-chatbubbles icon-lg text-muted\"></em></div>\n            </div>\n            <div class=\"mda-list-item\">\n              <div class=\"mda-list-item-icon\"></div>\n              <div class=\"mda-list-item-text mda-2-line\">\n                <h3>(123) +15 321 654</h3>\n                <h4 class=\"text-muted\">Mobile</h4>\n              </div>\n            </div>\n            <div class=\"mda-list-item\">\n              <div class=\"mda-list-item-icon\"><em class=\"ion-android-mail icon-2x text-primary\"></em></div>\n              <div class=\"mda-list-item-text mda-2-line\">\n                <h3>jill@personal.com</h3>\n                <h4 class=\"text-muted\">Personal</h4>\n              </div>\n              <div class=\"mda-list-item-icon pull-right\"><em class=\"ion-compose icon-lg text-muted\"></em></div>\n            </div>\n            <div class=\"mda-list-item\">\n              <div class=\"mda-list-item-icon\"></div>\n              <div class=\"mda-list-item-text mda-2-line\">\n                <h3>jill.howell@work.com</h3>\n                <h4 class=\"text-muted\">Work</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-xs-12\">\n        <div class=\"card bg-primary\">\n          <div class=\"card-body\">\n            <div class=\"pull-right\"><em class=\"ion-calendar icon-2x text-muted\"></em></div>\n            <h4 class=\"mv-sm\">New event</h4>\n            <h5>22 Aug, at 10 a.m.</h5>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"button\" class=\"btn btn-flat btn-primary text-white\">Add to Calendar</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-xs-12\">\n        <div class=\"card bg-success\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-xs-8\"><em class=\"ion-ios-musical-notes icon-2x pull-left\"></em>\n                <div class=\"pl-xl\">\n                  <h5 class=\"mv-sm\">Pellentesque vitae</h5>\n                  <h6 class=\"m0\">Aliquam non eros</h6>\n                </div>\n              </div>\n              <div class=\"col-xs-4\"><a href=\"#\"><img src=\"assets/img/user/05.jpg\" alt=\"Image\" class=\"img-responsive img-rounded\"></a></div>\n            </div>\n          </div>\n          <div class=\"card-footer clearfix\">\n            <div class=\"pull-left\">\n              <button type=\"button\" class=\"btn btn-flat btn-success text-white\">Play now</button>\n            </div>\n            <div class=\"pull-right\">\n              <button type=\"button\" class=\"btn btn-flat btn-success text-white\">Next</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-xs-12\">\n        <div class=\"card bg-info\">\n          <div class=\"card-body\">\n            <p class=\"lead m0\">A simple announce could be added here with any text for users who want to read this.</p>\n          </div>\n          <div class=\"card-footer text-right\">\n            <button type=\"button\" class=\"btn btn-flat btn-info text-white\">Ok, Let's Go!</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Large card-->\n    <div class=\"card\">\n      <div class=\"card-heading\">\n        <!-- START dropdown-->\n        <div class=\"pull-right dropdown\">\n          <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\n          <ul role=\"menu\" class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\n            <li><a href=\"#\">Option 1</a></li>\n            <li><a href=\"#\">Option 2</a></li>\n            <li><a href=\"#\">Option 3</a></li>\n          </ul>\n        </div>\n        <!-- END dropdown-->\n      </div>\n      <div class=\"card-body pt0\">\n        <h3 class=\"mt0\">Technology</h3>\n        <p>Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.</p>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-flat btn-primary\">Read More</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic3.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\"></div>\n          <div class=\"card-body\">\n            <h4 class=\"mt0\">Freedom in the air</h4>\n            <p class=\"m0\">Nunc vitae ipsum elit, non lacinia dui. Sed tempor lacinia tempus. Etiam eget congue nulla. Sed quis eros libero, a euismod nisl.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic2.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\"></div>\n          <div class=\"card-body\">\n            <h4 class=\"mt0\">Mountain lake</h4>\n            <p>Cras et dui non erat ornare ornare eget non sapien.</p>\n            <div class=\"text-right\">\n              <button type=\"button\" class=\"btn btn-flat btn-primary\">Share</button>\n              <button type=\"button\" class=\"btn btn-flat btn-primary\">More</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic1.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n            <div class=\"card-item-text\"><a href=\"#\" class=\"link-white\"><em class=\"ion-map mr icon-lg\"></em></a><a href=\"#\" class=\"link-white\"><em class=\"ion-ios-heart-outline mr icon-lg\"></em></a><a href=\"#\" class=\"link-white\"><em class=\"ion-image icon-lg\"></em></a></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"mt0\">Forest trip</h4>\n            <p>Nullam quis lorem a est auctor venenatis vel vitae ipsum.</p>\n            <hr>\n            <div class=\"clearfix\">\n              <div class=\"pull-left\"><span class=\"mr-sm text-muted\">by</span><a href=\"#\">Bonnie</a></div>\n              <div class=\"pull-right text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>a week ago</span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic4.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n            <p class=\"card-item-text\">Picture.png</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"card-item\"><img src=\"assets/img/pic1.jpg\" alt=\"MaterialImg\" class=\"fw img-responsive\">\n            <p class=\"card-item-text\">Image.jpg</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container-fluid\">\n    <!-- START row-->\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Area</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"area-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Area Spline</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"spline-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Bar</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"bar-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END row-->\n    <!-- START row-->\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Pie</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"pie-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Donut</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"donut-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Bar - Stacked</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"barstacked-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END row-->\n    <!-- START row-->\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Real Time</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"realtime-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">Line</div>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"line-flotchart\" class=\"flot-chart flot-chart-lg\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- END row-->\n  </div>\n</section>\n"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div class=\"content-heading bg-white\">\n    <div class=\"row\">\n      <div class=\"col-sm-9\">\n        <h4 class=\"m0 text-thin\">Welcome to Centric dashboard</h4><small>Bootstrap admin dashboard template</small>\n      </div>\n      <div class=\"col-sm-3 text-right hidden-xs\">\n        <button type=\"button\" class=\"mt-sm btn btn-labeled btn-default ripple\">Apps<span class=\"btn-label btn-label-right\"><i class=\"ion-plus-round\"></i></span></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-body pv\">\n            <div class=\"clearfix\">\n              <div class=\"pull-left\">\n                <h4 class=\"m0 text-thin\">350</h4><small class=\"m0 text-muted\"><em class=\"mr-sm ion-arrow-up-b\"></em>New visitors</small>\n              </div>\n              <div class=\"pull-right mt-lg\">\n                <div id=\"sparkline2\" data-line-color=\"#4caf50\" class=\"sparkline\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-lg-3\">\n        <div class=\"card\">\n          <div class=\"card-body pv\">\n            <div class=\"clearfix\">\n              <div class=\"pull-left\">\n                <h4 class=\"m0 text-thin\">10,200</h4><small class=\"m0 text-muted\"><em class=\"mr-sm ion-arrow-down-b\"></em>Page views</small>\n              </div>\n              <div class=\"pull-right mt-lg\">\n                <div id=\"sparkline1\" data-line-color=\"#03A9F4\" class=\"sparkline\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-lg-3 visible-lg\">\n        <div class=\"card\">\n          <div class=\"card-body pv\">\n            <div class=\"clearfix\">\n              <div class=\"pull-left\">\n                <h4 class=\"m0 text-thin\">880</h4><small class=\"m0 text-muted\"><em class=\"mr-sm ion-arrow-up-b\"></em>Last income</small>\n              </div>\n              <div class=\"pull-right mt-lg\">\n                <div id=\"sparkline3\" data-line-color=\"#ab47bc\" class=\"sparkline\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-lg-3 visible-lg\">\n        <div class=\"card\">\n          <div class=\"card-body pv\">\n            <div class=\"clearfix\">\n              <div class=\"pull-left\">\n                <h4 class=\"m0 text-thin\">780</h4><small class=\"m0 text-muted\"><em class=\"mr-sm ion-arrow-up-b\"></em>Reservations</small>\n              </div>\n              <div class=\"pull-right mt-lg\">\n                <div id=\"sparkline4\" data-line-color=\"#e91e63\" class=\"sparkline\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-9 col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-lg-8\">\n            <div class=\"card\">\n              <div class=\"card-heading\">\n                <!-- START dropdown-->\n                <div class=\"pull-right dropdown\">\n                  <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default btn-flat btn-flat-icon ripple\"><em class=\"ion-android-more-vertical\"></em></button>\n                  <ul role=\"menu\" class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\n                    <li><a href=\"\">Last 30 days</a></li>\n                    <li><a href=\"\">Last week</a></li>\n                    <li><a href=\"\">Last year</a></li>\n                  </ul>\n                </div>\n                <!-- END dropdown-->\n                <div class=\"card-title\">Analytic board</div><small>Nulla commodo blandit cursus.</small>\n              </div>\n              <div class=\"card-body\">\n                <div role=\"group\" aria-label=\"...\" class=\"pull-right pr-sm btn-group btn-group-sm\">\n                  <button type=\"button\" class=\"btn btn-default btn-xs btn-default\">Total</button>\n                  <button type=\"button\" class=\"btn btn-default btn-xs btn-default\">Average</button>\n                </div>\n                <div id=\"flot-main-spline\" class=\"flot-chart flot-chart-lg flot-legend-left\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card\">\n              <div class=\"card-heading\">\n                <div class=\"pull-right\">\n                  <p class=\"m0 text-muted\"><em class=\"mr-sm ion-arrow-up-b\"></em>20%</p>\n                </div>\n                <div class=\"card-title\">Earnings</div><small>Based on last month analytics.</small>\n              </div>\n              <div class=\"card-body\">\n                <div role=\"group\" aria-label=\"...\" class=\"btn-group btn-group-sm\">\n                  <button type=\"button\" class=\"btn btn-default btn-xs btn-default\">2015</button>\n                  <button type=\"button\" class=\"btn btn-default btn-xs btn-default\">2016</button>\n                </div>\n                <div id=\"flot-stacked-chart\" data-height=\"245px\" class=\"flot-chart\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-lg-4\">\n            <div class=\"card\">\n              <div class=\"card-heading\">\n                <div class=\"pull-right\"><span class=\"mr\"><em class=\"ion-record spr text-primary\"></em><small class=\"va-middle\">2016</small></span><span><em class=\"ion-record spr text-success\"></em><small class=\"va-middle\">2015</small></span></div>\n                <div class=\"card-title\">Sales</div>\n              </div>\n              <div class=\"card-body\">\n                <div id=\"flot-bar-chart\" data-height=\"235\" class=\"flot-chart flot-chart-md\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-lg-8\">\n            <div class=\"card\">\n              <!-- START table-responsive-->\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Project</th>\n                      <th>Completion</th>\n                      <th class=\"text-right\">Trend</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"va-middle\"><span class=\"badge bg-pink-500\">1</span></td>\n                      <td>\n                        <p class=\"m0\">Vestibulum<br><small class=\"text-thin\">Nunc posuere eleifend lobortis.</small></p>\n                      </td>\n                      <td class=\"va-middle\">50%</td>\n                      <td class=\"text-right va-middle\"><em class=\"ion-arrow-graph-up-right text-success\"></em></td>\n                    </tr>\n                    <tr>\n                      <td class=\"va-middle\"><span class=\"badge bg-purple-400\">2</span></td>\n                      <td>\n                        <p class=\"m0\">Runfaster<br><small class=\"text-thin\">Nunc posuere eleifend lobortis.</small></p>\n                      </td>\n                      <td class=\"va-middle\">30%</td>\n                      <td class=\"text-right va-middle\"><em class=\"ion-arrow-graph-down-right text-warning\"></em></td>\n                    </tr>\n                    <tr>\n                      <td class=\"va-middle\"><span class=\"badge bg-indigo-500\">3</span></td>\n                      <td>\n                        <p class=\"m0\">Medic Healthcare<br><small class=\"text-thin\">Nunc posuere eleifend lobortis.</small></p>\n                      </td>\n                      <td class=\"va-middle\">80%</td>\n                      <td class=\"text-right va-middle\"><em class=\"ion-arrow-graph-up-right text-success\"></em></td>\n                    </tr>\n                    <tr>\n                      <td class=\"va-middle\"><span class=\"badge bg-info\">4</span></td>\n                      <td>\n                        <p class=\"m0\">Videotubeyou<br><small class=\"text-thin\">Nunc posuere eleifend lobortis.</small></p>\n                      </td>\n                      <td class=\"va-middle\">50%</td>\n                      <td class=\"text-right va-middle\"><em class=\"ion-arrow-graph-down-right text-warning\"></em></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <!-- END table-responsive-->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-xs-12\">\n        <!-- Activity feed-->\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <!-- START dropdown-->\n            <div class=\"pull-right dropdown\">\n              <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\n              <ul role=\"menu\" class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\n                <li><a href=\"\">Last 30 days</a></li>\n                <li><a href=\"\">Last week</a></li>\n                <li><a href=\"\">Last year</a></li>\n              </ul>\n            </div>\n            <!-- END dropdown-->\n            <div class=\"card-title\">Activity</div><small>What's people doing right now</small>\n          </div>\n          <div class=\"card-body bb\">\n            <p class=\"pull-left mr\"><a href=\"\"><img src=\"assets/img/user/04.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a></p>\n            <div class=\"oh\">\n              <p><strong class=\"spr\">Adam</strong><span class=\"spr\">posted in</span><a href=\"\">Material</a></p>\n              <p class=\"bl pl\"><i>That's awesome!</i></p>\n              <div class=\"clearfix\">\n                <div class=\"pull-left text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>2 hours ago</span></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body bb\">\n            <p class=\"pull-left mr\"><a href=\"\"><img src=\"assets/img/user/06.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a></p>\n            <div class=\"oh\">\n              <p><strong class=\"spr\">Dora</strong><span>added a new task</span></p>\n              <p><em class=\"ion-calendar icon-fw\"></em><a href=\"\">Start migration</a></p>\n              <div class=\"clearfix\">\n                <div class=\"pull-left text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>3 hours ago</span></div>\n                <div class=\"pull-right\"><span>2</span><em class=\"ion-star ml-sm text-warning\"></em></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body bb\">\n            <p class=\"pull-left mr\"><a href=\"\"><img src=\"assets/img/user/07.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a></p>\n            <div class=\"oh\">\n              <p><strong class=\"spr\">Kathryn</strong><span class=\"spr\">published</span><a href=\"\">Trip</a></p>\n              <p><a href=\"\"><img src=\"assets/img/pic1.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a><a href=\"\"><img src=\"assets/img/pic2.jpg\" alt=\"Pic\" class=\"mr-sm thumb48\"></a></p>\n              <div class=\"clearfix\">\n                <div class=\"pull-left text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>4 hours ago</span></div>\n                <div class=\"pull-right\"><span>2</span><em class=\"ion-ios-heart ml-sm text-danger\"></em></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body bb\">\n            <p class=\"pull-left mr\"><a href=\"\"><img src=\"assets/img/user/02.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a></p>\n            <div class=\"oh\">\n              <p><strong class=\"spr\">Daniel</strong><span class=\"spr\">joined to</span><a href=\"\">Group</a></p>\n              <p><span class=\"image-list\"><a href=\"\"><img src=\"assets/img/user/03.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a><a href=\"\"><img src=\"assets/img/user/04.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a><a href=\"\"><img src=\"assets/img/user/05.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a><a href=\"\"><img src=\"assets/img/user/07.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a><strong><a href=\"\" class=\"ml-sm link-unstyled\">+3</a></strong></span></p>\n              <div class=\"clearfix\">\n                <div class=\"pull-left text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>yesterday</span></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body bb\">\n            <p class=\"pull-left mr\"><a href=\"\"><img src=\"assets/img/user/03.jpg\" alt=\"User\" class=\"img-circle thumb32\"></a></p>\n            <div class=\"oh\">\n              <p><strong class=\"spr\">Leroy Day</strong><span class=\"spr\">wakes up!</span></p>\n              <p class=\"bl pl\"><i>That's awesome!</i></p>\n              <div class=\"clearfix\">\n                <div class=\"pull-left text-muted\"><em class=\"ion-android-time mr-sm\"></em><span>2 weeks ago</span></div>\n              </div>\n            </div>\n          </div><a href=\"\" class=\"card-footer btn btn-flat btn-default\"><small class=\"text-center text-muted lh1\">See more activities</small></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-heading bg-pink-500 ripple ripple-block\">\n            <div class=\"card-title text-center\"><small>October</small>\n              <h4 class=\"mv-sm text-md\">12</h4><span>Monday</span>\n            </div>\n          </div>\n          <div class=\"ui-datepicker-responsive\">\n            <div id=\"dashboard-datepicker\" data-date=\"04/04/2016\" class=\"ui-datepicker\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">\n              <div class=\"pull-right\"><em class=\"ion-ios-people text-soft icon-lg\"></em></div>Resources distribution\n            </div>\n          </div>\n          <div class=\"card-body pt0\">\n            <div id=\"vector-map\" style=\"height:240px\" class=\"vector-map\"></div>\n          </div>\n          <ul class=\"list-group m0\">\n            <li class=\"list-group-item\"><span>Silicon Valley</span><span class=\"badge badge-xs bg-green-500\">15</span></li>\n            <li class=\"list-group-item\"><span>Chicago</span><span class=\"badge badge-xs bg-pink-500\">9</span></li>\n            <li class=\"list-group-item\"><span>Houston</span><span class=\"badge badge-xs bg-purple-500\">3</span></li>\n            <li class=\"list-group-item\"><span>Others</span><span class=\"badge badge-xs bg-blue-500\">25</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-heading\">\n            <div class=\"card-title\">\n              <div class=\"pull-right\"><a href=\"\"><em class=\"ion-plus-round text-soft\"></em></a></div>Tasks\n            </div>\n          </div>\n          <div class=\"card-body text-center pt0\">\n            <div id=\"dashboard-easypiechartTask\" data-percent=\"85\" class=\"easypie-chart block-center\"><small class=\"percentage\">Goal</small></div>\n            <p class=\"mv\">85% productivity</p>\n          </div>\n          <div class=\"list-group m0\"><a href=\"\" class=\"list-group-item bt0\"><span class=\"text-sm\">Work on project presentation</span><span class=\"pull-right\"><em class=\"ion-ios-arrow-right\"></em></span></a><a href=\"\" class=\"list-group-item\"><span class=\"text-sm\">Prepare a call with Robert</span><span class=\"pull-right\"><em class=\"ion-ios-arrow-right\"></em></span></a><a href=\"\" class=\"list-group-item\"><span class=\"text-sm\">Release a new version</span><span class=\"pull-right\"><em class=\"ion-ios-arrow-right\"></em></span></a><a href=\"\" class=\"list-group-item bb0\"><span class=\"text-sm\">Tell Houston there's no problem</span><span class=\"pull-right\"><em class=\"ion-ios-arrow-right\"></em></span></a></div>\n          <div id=\"flot-task-chart\" data-height=\"90\" class=\"flot-chart flot-chart-sm\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-container\">\n  <!-- top navbar-->\n  <header class=\"header-container\">\n    <nav>\n      <ul class=\"visible-xs visible-sm\">\n        <li><a id=\"sidebar-toggler\" href=\"#\" class=\"menu-link menu-link-slide\"><span><em></em></span></a></li>\n      </ul>\n      <ul class=\"hidden-xs\">\n        <li><a id=\"offcanvas-toggler\" href=\"#\" class=\"menu-link menu-link-slide\"><span><em></em></span></a></li>\n      </ul>\n      <h2 class=\"header-title\">Dashboard</h2>\n      <ul class=\"pull-right\">\n        <li><a id=\"header-search\" href=\"#\" class=\"ripple\"><em class=\"ion-ios-search-strong\"></em></a></li>\n        <li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle has-badge ripple\"><em class=\"ion-person\"></em><sup class=\"badge bg-danger\">3</sup></a>\n          <ul class=\"dropdown-menu dropdown-menu-right md-dropdown-menu\">\n            <li><a href=\"profile.html\"><em class=\"ion-home icon-fw\"></em>Profile</a></li>\n            <li><a href=\"messages.html\"><em class=\"ion-gear-a icon-fw\"></em>Messages</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li><a href=\"user.login.html\"><em class=\"ion-log-out icon-fw\"></em>Logout</a></li>\n          </ul>\n        </li>\n        <li><a id=\"header-settings\" href=\"#\" class=\"ripple\"><em class=\"ion-gear-b\"></em></a></li>\n      </ul>\n    </nav>\n  </header>\n  <!-- sidebar-->\n  <aside class=\"sidebar-container\">\n    <div class=\"sidebar-header\">\n      <div class=\"pull-right pt-lg text-muted hidden\"><em class=\"ion-close-round\"></em></div><a href=\"#\" class=\"sidebar-header-logo\"><img src=\"assets/img/logo.png\" data-svg-replace=\"assets/img/logo.svg\" alt=\"Logo\"><span class=\"sidebar-header-logo-text\">Centric</span></a>\n    </div>\n    <div class=\"sidebar-content\">\n      <div class=\"sidebar-toolbar text-center\"><a href=\"\"><img src=\"assets/img/user/01.jpg\" alt=\"Profile\" class=\"img-circle thumb64\"></a>\n        <div class=\"mt\">Welcome, Willie Webb</div>\n      </div>\n      <nav class=\"sidebar-nav\">\n        <ul>\n          <li routerLinkActive=\"myactive\"><a routerLink=\"/dashboard\" class=\"ripple\"><span class=\"pull-right nav-label\"><span class=\"badge bg-success\">2</span></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/aperture.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Dashboard</span></a></li>\n          <li routerLinkActive=\"myactive\"><a routerLink=\"/cards\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/radio-waves.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Cards</span></a></li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/connection-bars.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Charts</span></a>\n            <ul class=\"sidebar-subnav\">\n              <li routerLinkActive=\"myactive\"><a routerLink=\"/charts/flot\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Flot</span></a></li>\n              <li><a href=\"radial.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Radial</span></a></li>\n              <li><a href=\"rickshaw.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Rickshaw</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/clipboard.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Forms</span></a>\n            <ul class=\"sidebar-subnav\">\n              <li><a href=\"forms.classic.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Classic</span></a></li>\n              <li><a href=\"validation.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Validation</span></a></li>\n              <li><a href=\"forms.advanced.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Advanced</span></a></li>\n              <li><a href=\"material.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Material</span></a></li>\n              <li><a href=\"editor.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Editors</span></a></li>\n              <li><a href=\"dropzone.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Dropzone</span></a></li>\n              <li><a href=\"xeditable.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>xEditable</span></a></li>\n              <li><a href=\"wizard.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Wizard</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/navicon.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Tables</span></a>\n            <ul id=\"tables\" class=\"sidebar-subnav\">\n              <li><a href=\"tables.classic.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Classic</span></a></li>\n              <li><a href=\"datatable.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Datatable</span></a></li>\n              <li><a href=\"bootgrid.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Bootgrid</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/grid.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Layouts</span></a>\n            <ul id=\"layouts\" class=\"sidebar-subnav\">\n              <li><a href=\"layouts.columns.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Columns</span></a></li>\n              <li><a href=\"layouts.overlap.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Overlap</span></a></li>\n              <li><a href=\"layouts.boxed.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Boxed</span></a></li>\n              <li><a href=\"layouts.tabs.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Tabs</span></a></li>\n              <li><a href=\"layouts.containers.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Containers</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/levels.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Elements</span></a>\n            <ul id=\"elements\" class=\"sidebar-subnav\">\n              <li><a href=\"colors.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Colors</span></a></li>\n              <li><a href=\"whiteframes.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Whiteframes</span></a></li>\n              <li><a href=\"lists.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Lists</span></a></li>\n              <li><a href=\"bootstrapui.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Bootstrap</span></a></li>\n              <li><a href=\"buttons.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Buttons</span></a></li>\n              <li><a href=\"sweetalert.html\"><span class=\"pull-right nav-label\"></span><span>Sweet-alert</span></a></li>\n              <li><a href=\"spinners.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Spinners</span></a></li>\n              <li><a href=\"nestable.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Nestable</span></a></li>\n              <li><a href=\"grid.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Grid</span></a></li>\n              <li><a href=\"grid-masonry.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Grid Masonry</span></a></li>\n              <li><a href=\"typography.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Typography</span></a></li>\n              <li><a href=\"icons.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Icons</span></a></li>\n              <li><a href=\"utilities.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Utilities</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/planet.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Maps</span></a>\n            <ul id=\"maps\" class=\"sidebar-subnav\">\n              <li><a href=\"google-map-full.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Google Maps Full</span></a></li>\n              <li><a href=\"google-map.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Google Maps</span></a></li>\n              <li><a href=\"vector-map.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Vector Maps</span></a></li>\n              <li><a href=\"datamaps.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Datamaps</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/ios-browsers.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>Pages</span></a>\n            <ul id=\"pages\" class=\"sidebar-subnav\">\n              <li><a href=\"timeline.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Timeline</span></a></li>\n              <li><a href=\"invoice.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Invoice</span></a></li>\n              <li><a href=\"pricing.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Pricing</span></a></li>\n              <li><a href=\"contacts.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Contacts</span></a></li>\n              <li><a href=\"faq.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>FAQ</span></a></li>\n              <li><a href=\"projects.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Projects</span></a></li>\n              <li><a href=\"blog.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Blog</span></a></li>\n              <li><a href=\"blog.article.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Article</span></a></li>\n              <li><a href=\"profile.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Profile</span></a></li>\n              <li><a href=\"gallery.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Gallery</span></a></li>\n              <li><a href=\"wall.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Wall</span></a></li>\n              <li><a href=\"search.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Search</span></a></li>\n              <li><a href=\"messages.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Messages Board</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\" class=\"ripple\"><span class=\"pull-right nav-caret\"><em class=\"ion-ios-arrow-right\"></em></span><span class=\"pull-right nav-label\"></span><span class=\"nav-icon\"><img src=\"\" data-svg-replace=\"assets/img/icons/person-stalker.svg\" alt=\"MenuItem\" class=\"hidden\"></span><span>User</span></a>\n            <ul id=\"user\" class=\"sidebar-subnav\">\n              <li><a href=\"login.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Login</span></a></li>\n              <li><a href=\"signup.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Signup</span></a></li>\n              <li><a href=\"lock.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Lock</span></a></li>\n              <li><a href=\"recover.html\" class=\"ripple\"><span class=\"pull-right nav-label\"></span><span>Recover</span></a></li>\n            </ul>\n          </li>\n          <li><a href=\"../../angularjs/\" class=\"ripple\"><span class=\"nav-icon\"><em class=\"ion-android-open\"></em></span><span>AngularJS</span></a></li>\n        </ul>\n      </nav>\n    </div>\n  </aside>\n  <div class=\"sidebar-layout-obfuscator\"></div>\n  <!-- Main section-->\n  <main class=\"main-container\">\n    <!-- Page content-->\n    <router-outlet></router-outlet>\n    <!-- Page footer-->\n    <footer><span>2017 - Centric app.</span></footer>\n  </main>\n</div>\n<!-- Search template-->\n<div tabindex=\"-1\" role=\"dialog\" class=\"modal modal-top fade modal-search\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"pull-left\">\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-flat\"><em class=\"ion-arrow-left-c icon-24\"></em></button>\n        </div>\n        <div class=\"pull-right\">\n          <button type=\"button\" class=\"btn btn-flat\"><em class=\"ion-android-microphone icon-24\"></em></button>\n        </div>\n        <form action=\"#\" class=\"oh\">\n          <div class=\"mda-form-control pt0\">\n            <input type=\"text\" placeholder=\"Search..\" data-localize=\"header.SEARCH\" class=\"form-control header-input-search\">\n            <div class=\"mda-form-control-line\"></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-container\">\n  <div class=\"page-container bg-blue-grey-900\">\n    <div class=\"container-full\">\n      <div class=\"container container-xs\"><img src=\"assets/img/logo.png\" class=\"mv-lg block-center img-responsive thumb64\">\n        <form id=\"user-login\" action=\"\" name=\"loginForm\" novalidate=\"\" class=\"card b0 form-validate\">\n          <div class=\"card-offset pb0\">\n            <div class=\"card-offset-item text-right\"><a href=\"signup.html\" class=\"btn-raised btn btn-info btn-circle btn-lg\"><em class=\"ion-person-add\"></em></a></div>\n            <div class=\"card-offset-item text-right hidden\">\n              <div class=\"btn btn-success btn-circle btn-lg\"><em class=\"ion-checkmark-round\"></em></div>\n            </div>\n          </div>\n          <div class=\"card-heading\">\n            <div class=\"card-title text-center\">Login</div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"mda-form-group float-label mda-input-group\">\n              <div class=\"mda-form-control\">\n                <input type=\"email\" name=\"accountName\" required=\"\" class=\"form-control\">\n                <div class=\"mda-form-control-line\"></div>\n                <label>Email address</label>\n              </div><span class=\"mda-input-group-addon\"><em class=\"ion-ios-email-outline icon-lg\"></em></span>\n            </div>\n            <div class=\"mda-form-group float-label mda-input-group\">\n              <div class=\"mda-form-control\">\n                <input type=\"password\" name=\"accountPassword\" required=\"\" class=\"form-control\">\n                <div class=\"mda-form-control-line\"></div>\n                <label>Password</label>\n              </div><span class=\"mda-input-group-addon\"><em class=\"ion-ios-locked-outline icon-lg\"></em></span>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary btn-flat\">Authenticate</button>\n        </form>\n        <div class=\"text-center text-sm\"><a href=\"recover.html\" class=\"text-inherit\">Forgot password?</a></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[545]);
//# sourceMappingURL=main.bundle.js.map