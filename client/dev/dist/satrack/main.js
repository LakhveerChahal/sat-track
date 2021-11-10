(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/cesium/Source/Core sync recursive":
/*!**********************************************!*\
  !*** ./node_modules/cesium/Source/Core sync ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/cesium/Source/Core sync recursive";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_earth_earth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/earth/earth.component */ "./src/app/components/earth/earth.component.ts");





const routes = [
    { path: '', component: _features_earth_earth_component__WEBPACK_IMPORTED_MODULE_2__["EarthComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_features_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _features_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _features_earth_earth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/earth/earth.component */ "./src/app/components/earth/earth.component.ts");
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loading-overlay/loading-overlay.component */ "./src/app/shared/loading-overlay/loading-overlay.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _features_earth_earth_component__WEBPACK_IMPORTED_MODULE_7__["EarthComponent"],
        _features_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
        _shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_10__["LoadingOverlayComponent"],
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _features_earth_earth_component__WEBPACK_IMPORTED_MODULE_7__["EarthComponent"],
                    _features_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                    _shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_10__["LoadingOverlayComponent"],
                    _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/earth/earth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/earth/earth.component.ts ***!
  \*****************************************************/
/*! exports provided: EarthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthComponent", function() { return EarthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cesium */ "./node_modules/cesium/Source/Cesium.js");
/* harmony import */ var tle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tle.js */ "./node_modules/tle.js/dist/tlejs.umd.js");
/* harmony import */ var tle_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tle_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_satellite_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/satellite.model */ "./src/app/models/satellite.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");









const _c0 = ["mapContainer"];
class EarthComponent {
    constructor(mapService, dataSharingService) {
        this.mapService = mapService;
        this.dataSharingService = dataSharingService;
        this.satellites = [];
        this.globalRefreshCounter = 0;
        this.satelliteAsset = null;
        this.stopTimer = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshDataEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isTimerStopped = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.satellites = this.dataSharingService.satellites;
        this.satellites.push(new _models_satellite_model__WEBPACK_IMPORTED_MODULE_3__["SatelliteModel"](44943, null, false, false, null));
        this.satellites.push(new _models_satellite_model__WEBPACK_IMPORTED_MODULE_3__["SatelliteModel"](47799, null, false, false, null));
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.viewer = this.renderEarth(this.mapContainer);
        this.registerSubscriptions();
    }
    ngOnDestroy() {
        this.stopTimer.next();
        this.subscription.unsubscribe();
    }
    registerSubscriptions() {
        this.subscription.add(this.refreshDataEvent.subscribe(() => {
            this.refreshData();
        }));
        this.subscription.add(this.dataSharingService.getToggleSelectedSatellite()
            .subscribe((selectedSatellite) => {
            const findIndex = this.satellites.findIndex((satellite) => satellite.satId == selectedSatellite.satId);
            if (findIndex == -1) {
                this.satellites.push(selectedSatellite);
                this.stopTimer.next();
                this.isTimerStopped = true;
                this.refreshDataEvent.next();
            }
            else {
                this.satellites.splice(findIndex, 1);
                this.removeSatelliteAndOrbit(selectedSatellite);
            }
        }));
        this.startTimer();
    }
    startTimer() {
        this.isTimerStopped = false;
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 3000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.stopTimer))
            .subscribe(() => {
            this.refreshDataEvent.next();
        }));
    }
    refreshData() {
        this.globalRefreshCounter++;
        this.satellites.forEach((satellite) => {
            if (this.needToUpdateTle(satellite)) {
                this.getAllSatData(satellite);
            }
            else {
                const satInfo = Object(tle_js__WEBPACK_IMPORTED_MODULE_2__["getSatelliteInfo"])(satellite.tleData);
                this.renderSatellite(satInfo, satellite, this.satelliteAsset);
                if (this.globalRefreshCounter > 180) {
                    this.globalRefreshCounter = 0;
                    this.getAndPlotOrbit(satellite.tleData, satInfo, satellite);
                }
            }
        });
    }
    needToUpdateTle(satellite) {
        if (!satellite.tleData) {
            return true;
        }
        // check if 8 hours have passed since last update
        const lastUpdatedTime = Object(tle_js__WEBPACK_IMPORTED_MODULE_2__["getEpochTimestamp"])(satellite.tleData);
        let lastUpdated = new Date(lastUpdatedTime + (8 * 60 * 60 * 1000));
        // return lastUpdated < new Date();
        return false;
    }
    renderEarth(el) {
        return new cesium__WEBPACK_IMPORTED_MODULE_1__["Viewer"](el.nativeElement, {
            timeline: false
        });
    }
    getAllSatData(satellite) {
        this.mapService.getTle(satellite.satId).subscribe((res) => {
            satellite.satName = res.info.satname;
            const satInfo = Object(tle_js__WEBPACK_IMPORTED_MODULE_2__["getSatelliteInfo"])(res.tle);
            const tle = res.info.satname + "\n" + res.tle;
            satellite.tleData = tle;
            this.getAndPlotOrbit(tle, satInfo, satellite);
            if (this.satelliteAsset) {
                this.renderSatellite(satInfo, satellite, this.satelliteAsset);
            }
            else {
                this.getSatelliteAssetAndRender(satInfo, satellite);
            }
        });
    }
    getAndPlotOrbit(tle, satInfo, satellite) {
        Object(tle_js__WEBPACK_IMPORTED_MODULE_2__["getGroundTracks"])({
            tle: tle,
            startTimeMS: Date.now(),
            stepMS: 30000,
            isLngLatFormat: true,
        }).then((threeOrbitsArr) => {
            let currentOrbit = threeOrbitsArr[1];
            let latLngHeight = [];
            currentOrbit.forEach((latLng) => {
                latLngHeight.push(latLng[0], latLng[1], satInfo.height * 1000);
            });
            const coords = cesium__WEBPACK_IMPORTED_MODULE_1__["Cartesian3"].fromDegreesArrayHeights(latLngHeight);
            this.plotOrbit(coords, satellite);
        });
    }
    renderSatellite(satInfo, satellite, satelliteAsset) {
        const entity = this.viewer.entities.getById(satellite.satId.toString());
        if (!entity) {
            this.viewer.entities.add({
                description: satellite.satName,
                position: cesium__WEBPACK_IMPORTED_MODULE_1__["Cartesian3"].fromDegrees(satInfo.lng, satInfo.lat, satInfo.height * 1000),
                model: {
                    uri: satelliteAsset,
                },
                id: satellite.satId.toString(),
                show: true,
                label: {
                    text: satellite.satName,
                    fillColor: satellite.orbitColor
                }
            });
        }
        else {
            entity.position = cesium__WEBPACK_IMPORTED_MODULE_1__["Cartesian3"].fromDegrees(satInfo.lng, satInfo.lat, satInfo.height * 1000);
        }
        satellite.isRendered = true;
        if (this.isTimerStopped) {
            this.startTimer();
        }
    }
    getSatelliteAssetAndRender(satInfo, satellite) {
        cesium__WEBPACK_IMPORTED_MODULE_1__["IonResource"].fromAssetId(163159).then((resource) => {
            this.satelliteAsset = resource;
            this.renderSatellite(satInfo, satellite, this.satelliteAsset);
        });
    }
    plotOrbit(latlngs, satellite) {
        this.viewer.entities.removeById(satellite.satId.toString() + 'orbit');
        const en = this.viewer.entities.add({
            polyline: {
                positions: latlngs,
                width: 3,
                material: satellite.orbitColor
            },
            id: satellite.satId.toString() + 'orbit'
        });
        satellite.isOrbitRendered = true;
    }
    removeSatelliteAndOrbit(satellite) {
        this.viewer.entities.removeById(satellite.satId.toString());
        this.viewer.entities.removeById(satellite.satId.toString() + 'orbit');
    }
}
EarthComponent.ɵfac = function EarthComponent_Factory(t) { return new (t || EarthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_7__["DataSharingService"])); };
EarthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EarthComponent, selectors: [["app-earth"]], viewQuery: function EarthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapContainer = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "map-container"], ["mapContainer", ""]], template: function EarthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["#map-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYXJ0aC9DOi9Vc2Vycy9sczI0NzQxL0RvY3VtZW50cy9QcmFjdGljZSBBcmVhL3NhdHJhY2svY2xpZW50L2Rldi9zcmMvYXBwL2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lYXJ0aC9lYXJ0aC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSIsIiNtYXAtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EarthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-earth',
                templateUrl: './earth.component.html',
                styleUrls: ['./earth.component.less']
            }]
    }], function () { return [{ type: _services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] }, { type: _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_7__["DataSharingService"] }]; }, { mapContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapContainer', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ "./src/app/components/search/search.component.ts");



class NavbarComponent {
    constructor() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 0, consts: [[1, "navbar-wrapper"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], styles: [".navbar-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 3em;\n  width: 25%;\n  z-index: 2;\n  left: 2em;\n  top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzovVXNlcnMvbHMyNDc0MS9Eb2N1bWVudHMvUHJhY3RpY2UgQXJlYS9zYXRyYWNrL2NsaWVudC9kZXYvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogMjUlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMmVtO1xuICAgIHRvcDogMmVtO1xufSIsIi5uYXZiYXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAyNSU7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDJlbTtcbiAgdG9wOiAyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/search-result/search-result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_satellite_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/satellite.model */ "./src/app/models/satellite.model.ts");
/* harmony import */ var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-overlay/loading-overlay.component */ "./src/app/shared/loading-overlay/loading-overlay.component.ts");






function SearchResultComponent_app_loading_overlay_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-overlay", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "Loading Results")("borderRadius", "0.5em");
} }
function SearchResultComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " satellite_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchResultComponent_ng_container_3_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const result_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSatellite(result_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r2.satelliteName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", result_r2.isRendered);
} }
class SearchResultComponent {
    constructor(dataSharingService) {
        this.dataSharingService = dataSharingService;
        this.searchResults = [];
        this.isSearching = false;
    }
    ngOnInit() {
    }
    toggleSatellite(satellite) {
        const selectedSatellite = new _models_satellite_model__WEBPACK_IMPORTED_MODULE_1__["SatelliteModel"](+satellite.noradId, satellite.satelliteName, false, false, null);
        this.dataSharingService.setToggleSelectedSatellite(selectedSatellite);
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"])); };
SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], inputs: { searchResults: "searchResults", isSearching: "isSearching" }, decls: 4, vars: 2, consts: [[1, "result-wrapper"], [3, "message", "borderRadius", 4, "ngIf"], [1, "result-body"], [4, "ngFor", "ngForOf"], [3, "message", "borderRadius"], [1, "result"], [1, "result-name"], [1, "result-link"], [1, "material-icons"], [1, "checkbox-wrapper"], [1, "toggle-body"], ["type", "checkbox", 1, "actual-checkbox", 3, "checked", "change"], [1, "ball"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultComponent_app_loading_overlay_1_Template, 1, 2, "app-loading-overlay", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchResultComponent_ng_container_3_Template, 12, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_4__["LoadingOverlayComponent"]], styles: [".result-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1em;\n  background-color: white;\n  box-sizing: border-box;\n  border-radius: 0.5em;\n  transition: height 1s;\n  opacity: 0.6;\n  animation: animate-height 0.5s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%] {\n  height: inherit;\n  overflow-y: auto;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5em;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-left: auto;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .actual-checkbox[_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  margin: 0;\n  opacity: 0;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .toggle-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20px;\n  width: 40px;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .toggle-body[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20px;\n  width: 40px;\n  background-color: gray;\n  border-radius: 10px;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 3px;\n  left: 3px;\n  background-color: white;\n  height: 14px;\n  width: 14px;\n  border-radius: 7px;\n  transition: 0.2s;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .actual-checkbox[_ngcontent-%COMP%]:checked    + .ball[_ngcontent-%COMP%] {\n  background-color: teal;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   .actual-checkbox[_ngcontent-%COMP%]:checked    + .ball[_ngcontent-%COMP%]::before {\n  left: 23px;\n}\n.result-wrapper[_ngcontent-%COMP%]   .result-body[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   .result-name[_ngcontent-%COMP%]   .result-link[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0.5em;\n}\n@keyframes animate-height {\n  from {\n    height: 0px;\n    width: 0px;\n  }\n  to {\n    height: calc(100vh - 15em);\n    width: 30vw;\n  }\n}\n.result-wrapper[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  box-shadow: 0px 0px 5px 3px lightgray;\n  transition: 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L0M6L1VzZXJzL2xzMjQ3NDEvRG9jdW1lbnRzL1ByYWN0aWNlIEFyZWEvc2F0cmFjay9jbGllbnQvZGV2L3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ0NKO0FEYkE7RUFjTSxlQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBRGpCQTtFQWlCUSxhQUFBO0VBQ0EsY0FBQTtBQ0dSO0FEckJBO0VBb0JVLFdBQUE7RUFDQSxpQkFBQTtBQ0lWO0FEekJBO0VBdUJZLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNLWjtBRC9CQTtFQTZCWSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDS1o7QURwQ0E7RUFrQ1ksZUFBQTtBQ0taO0FEdkNBO0VBcUNZLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDS1o7QUQ5Q0E7RUE0Q1ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0taO0FEekRBO0VBdURZLHNCQUFBO0FDS1o7QUQ1REE7RUEwRFksVUFBQTtBQ0taO0FEL0RBO0VBK0RZLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FER0k7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDRE47RURHSTtJQUNFLDBCQUFBO0lBQ0EsV0FBQTtFQ0ROO0FBQ0Y7QURLQTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1oZWlnaHQgMC41cztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC5yZXN1bHQtYm9keSB7XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgLnJlc3VsdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICAuY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgLmFjdHVhbC1jaGVja2JveHtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvZ2dsZS1ib2R5e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2dnbGUtYm9keTpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbGx7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFsbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0dWFsLWNoZWNrYm94OmNoZWNrZWQgKyAuYmFsbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0dWFsLWNoZWNrYm94OmNoZWNrZWQgKyAuYmFsbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDIzcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQtbmFtZXtcbiAgICAgICAgICAucmVzdWx0LWxpbmt7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGUtaGVpZ2h0IHtcbiAgICAgIGZyb20ge1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVlbSk7XG4gICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgfVxuICAgIH1cbn1cblxuLnJlc3VsdC13cmFwcGVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4IGxpZ2h0Z3JheTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn0iLCIucmVzdWx0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIHRyYW5zaXRpb246IGhlaWdodCAxcztcbiAgb3BhY2l0eTogMC42O1xuICBhbmltYXRpb246IGFuaW1hdGUtaGVpZ2h0IDAuNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG4ucmVzdWx0LXdyYXBwZXIgLnJlc3VsdC1ib2R5IHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtYm9keSAucmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41ZW07XG59XG4ucmVzdWx0LXdyYXBwZXIgLnJlc3VsdC1ib2R5IC5yZXN1bHQgLmNoZWNrYm94LXdyYXBwZXIge1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucmVzdWx0LXdyYXBwZXIgLnJlc3VsdC1ib2R5IC5yZXN1bHQgLmNoZWNrYm94LXdyYXBwZXIgLmFjdHVhbC1jaGVja2JveCB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5yZXN1bHQtd3JhcHBlciAucmVzdWx0LWJvZHkgLnJlc3VsdCAuY2hlY2tib3gtd3JhcHBlciAudG9nZ2xlLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG4ucmVzdWx0LXdyYXBwZXIgLnJlc3VsdC1ib2R5IC5yZXN1bHQgLmNoZWNrYm94LXdyYXBwZXIgLnRvZ2dsZS1ib2R5OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtYm9keSAucmVzdWx0IC5jaGVja2JveC13cmFwcGVyIC5iYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtYm9keSAucmVzdWx0IC5jaGVja2JveC13cmFwcGVyIC5iYWxsOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4ucmVzdWx0LXdyYXBwZXIgLnJlc3VsdC1ib2R5IC5yZXN1bHQgLmNoZWNrYm94LXdyYXBwZXIgLmFjdHVhbC1jaGVja2JveDpjaGVja2VkICsgLmJhbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtYm9keSAucmVzdWx0IC5jaGVja2JveC13cmFwcGVyIC5hY3R1YWwtY2hlY2tib3g6Y2hlY2tlZCArIC5iYWxsOjpiZWZvcmUge1xuICBsZWZ0OiAyM3B4O1xufVxuLnJlc3VsdC13cmFwcGVyIC5yZXN1bHQtYm9keSAucmVzdWx0IC5yZXN1bHQtbmFtZSAucmVzdWx0LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xufVxuQGtleWZyYW1lcyBhbmltYXRlLWhlaWdodCB7XG4gIGZyb20ge1xuICAgIGhlaWdodDogMHB4O1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cbiAgdG8ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1ZW0pO1xuICAgIHdpZHRoOiAzMHZ3O1xuICB9XG59XG4ucmVzdWx0LXdyYXBwZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggbGlnaHRncmF5O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-result',
                templateUrl: './search-result.component.html',
                styleUrls: ['./search-result.component.less']
            }]
    }], function () { return [{ type: _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] }]; }, { searchResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['searchResults']
        }], isSearching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isSearching']
        }] }); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/data-sharing.service */ "./src/app/services/data-sharing.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-result/search-result.component */ "./src/app/components/search-result/search-result.component.ts");








const _c0 = ["searchEl"];
function SearchComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_app_search_result_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-result", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSearching", ctx_r2.isSearching)("searchResults", ctx_r2.searchResults);
} }
class SearchComponent {
    constructor(mapService, dataSharingService) {
        this.mapService = mapService;
        this.dataSharingService = dataSharingService;
        this.searchObs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchResults = [];
        this.isSearching = false;
        this.showResultPanel = false;
    }
    ngOnInit() {
        this.searchObs
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((searchValue) => {
            this.isSearching = true;
            if (searchValue) {
                this.searchResults = [];
                return this.mapService.getSatelliteByName(searchValue);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            res.satellite.forEach((satellite) => {
                const findIndex = this.dataSharingService.satellites.findIndex((s) => s.satId == +satellite.noradId);
                satellite.isRendered = findIndex != -1;
            });
            return res;
        }))
            .subscribe((res) => {
            if (!res) {
                return;
            }
            this.searchResults = res.satellite;
            this.isSearching = false;
        }, () => { this.isSearching = false; });
    }
    ngAfterViewInit() {
        this.searchEl.nativeElement.onkeyup = (ev) => {
            this.searchString = this.searchEl.nativeElement.value;
            this.onSearchStringChange();
        };
    }
    onSearchStringChange() {
        if (this.searchString) {
            this.showResultPanel = true;
        }
        else {
            this.showResultPanel = false;
        }
        this.searchObs.next(this.searchString);
    }
    clearSearch() {
        this.searchEl.nativeElement.value = '';
        const keyUpEvent = new KeyboardEvent('keyup');
        this.searchEl.nativeElement.dispatchEvent(keyUpEvent);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchEl = _t.first);
    } }, decls: 5, vars: 2, consts: [[1, "search-wrapper"], ["type", "text", "name", "search", "id", "search-sat", "placeholder", "Search satellites", "autocomplete", "off"], ["searchEl", ""], ["class", "cancel-btn", 3, "click", 4, "ngIf"], [3, "isSearching", "searchResults", 4, "ngIf"], [1, "cancel-btn", 3, "click"], [1, "material-icons"], [3, "isSearching", "searchResults"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_a_3_Template, 3, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_app_search_result_4_Template, 1, 2, "app-search-result", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResultPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__["SearchResultComponent"]], styles: [".search-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.search-wrapper[_ngcontent-%COMP%]   #search-sat[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 80%;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  border-width: 0px;\n  font-size: large;\n  font-family: sans-serif;\n  box-sizing: border-box;\n  outline-width: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  align-self: center;\n  background: white;\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-family: sans-serif;\n}\n.search-wrapper[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n  transition: background-color 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzovVXNlcnMvbHMyNDc0MS9Eb2N1bWVudHMvUHJhY3RpY2UgQXJlYS9zYXRyYWNrL2NsaWVudC9kZXYvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKO0FESkE7RUFLUSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURmQTtFQWdCUSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNFUjtBRDVCQTtFQTZCUSwyQkFBQTtFQUNBLGlDQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICNzZWFyY2gtc2F0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIH1cbiAgICAuY2FuY2VsLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuY2FuY2VsLWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIH1cbn0iLCIuc2VhcmNoLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaC13cmFwcGVyICNzZWFyY2gtc2F0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuLnNlYXJjaC13cmFwcGVyIC5jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4uc2VhcmNoLXdyYXBwZXIgLmNhbmNlbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.less']
            }]
    }], function () { return [{ type: _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }, { type: _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"] }]; }, { searchEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchEl', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/models/satellite.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/satellite.model.ts ***!
  \*******************************************/
/*! exports provided: SatelliteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatelliteModel", function() { return SatelliteModel; });
/* harmony import */ var cesium__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cesium */ "./node_modules/cesium/Source/Cesium.js");

class SatelliteModel {
    constructor(satId, satName, isRendered, isOrbitRendered, tleData) {
        this.satId = satId;
        this.satName = satName;
        this.isRendered = isRendered;
        this.isOrbitRendered = isOrbitRendered;
        this.tleData = tleData;
        this.orbitColor = cesium__WEBPACK_IMPORTED_MODULE_0__["Color"].fromRandom();
    }
}


/***/ }),

/***/ "./src/app/services/data-sharing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-sharing.service.ts ***!
  \**************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataSharingService {
    constructor() {
        this.toggleSelectedSatellite = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.satellites = [];
    }
    getToggleSelectedSatellite() {
        return this.toggleSelectedSatellite;
    }
    setToggleSelectedSatellite(satellite) {
        this.toggleSelectedSatellite.next(satellite);
    }
}
DataSharingService.ɵfac = function DataSharingService_Factory(t) { return new (t || DataSharingService)(); };
DataSharingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataSharingService, factory: DataSharingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataSharingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var cesium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cesium */ "./node_modules/cesium/Source/Cesium.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _url_formation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url-formation.service */ "./src/app/services/url-formation.service.ts");








class MapService {
    constructor(http, urlFormationService) {
        this.http = http;
        this.urlFormationService = urlFormationService;
        this.hasuraSecretKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hasura.hasuraSecretKey;
        cesium__WEBPACK_IMPORTED_MODULE_2__["Ion"].defaultAccessToken = src_constants__WEBPACK_IMPORTED_MODULE_3__["constants"].defaultAccessToken;
    }
    getTle(noradId) {
        return this.http.get(this.urlFormationService.getTleUrl(noradId.toString()));
    }
    getSatelliteByName(satname) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('x-hasura-admin-secret', this.hasuraSecretKey);
        return this.http.get(this.urlFormationService.getSatelliteByNameUrl(satname + '%25'), {
            headers: headers
        });
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_url_formation_service__WEBPACK_IMPORTED_MODULE_5__["UrlFormationService"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _url_formation_service__WEBPACK_IMPORTED_MODULE_5__["UrlFormationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/url-formation.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/url-formation.service.ts ***!
  \***************************************************/
/*! exports provided: UrlFormationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFormationService", function() { return UrlFormationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



class UrlFormationService {
    constructor() {
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
        this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey;
        this.dbBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hasura.hasuraBaseUrl;
    }
    getTleUrl(noradId) {
        return `${this.baseUrl}tle/` + noradId + `&apiKey=${this.apiKey}`;
    }
    getSatelliteByNameUrl(satname) {
        return `${this.dbBaseUrl}satellite/${satname}`;
    }
}
UrlFormationService.ɵfac = function UrlFormationService_Factory(t) { return new (t || UrlFormationService)(); };
UrlFormationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlFormationService, factory: UrlFormationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlFormationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 0, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid teal;\n  width: 50px;\n  height: 50px;\n  \n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOi9Vc2Vycy9sczI0NzQxL0RvY3VtZW50cy9QcmFjdGljZSBBcmVhL3NhdHJhY2svY2xpZW50L2Rldi9zcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VDRUEsV0FBVztFREFYLGtDQUFBO0FDRUY7QUFDQSxXQUFXO0FETVg7RUFDRTtJQUFLLHVCQUFBO0VDS0w7RURKQTtJQUFPLHlCQUFBO0VDT1A7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRlYWw7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi8qIFNhZmFyaSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59IiwiLmxvYWRlciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRlYWw7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLyogU2FmYXJpICovXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBTYWZhcmkgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading-overlay/loading-overlay.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-overlay/loading-overlay.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingOverlayComponent", function() { return LoadingOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/shared/loader/loader.component.ts");




const _c0 = function (a0) { return { "border-radius": a0 }; };
class LoadingOverlayComponent {
    constructor() {
        this.borderRadius = '0em';
    }
    ngOnInit() {
    }
}
LoadingOverlayComponent.ɵfac = function LoadingOverlayComponent_Factory(t) { return new (t || LoadingOverlayComponent)(); };
LoadingOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingOverlayComponent, selectors: [["app-loading-overlay"]], inputs: { message: "message", borderRadius: "borderRadius" }, decls: 2, vars: 3, consts: [[1, "loading-overlay", 3, "ngStyle"]], template: function LoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.borderRadius));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], styles: [".loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: lightslategray;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctb3ZlcmxheS9DOi9Vc2Vycy9sczI0NzQxL0RvY3VtZW50cy9QcmFjdGljZSBBcmVhL3NhdHJhY2svY2xpZW50L2Rldi9zcmMvYXBwL3NoYXJlZC9sb2FkaW5nLW92ZXJsYXkvbG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn0iLCIubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBvcGFjaXR5OiAwLjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-overlay',
                templateUrl: './loading-overlay.component.html',
                styleUrls: ['./loading-overlay.component.less']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['message']
        }], borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['borderRadius']
        }] }); })();


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
const constants = {
    defaultAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNDM0ZWYzZC0xODJjLTRhZWYtOWE3Ni1hOTRmYzFmNWViYjMiLCJpZCI6MjU1NDMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODYxNjY2NjJ9.uAT9pYPZ4RZrs5Aoj3jcymiFZ0QlpCyf5EslMk74AvY',
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// For n2yo API
const apiBaseUrl = 'https://api.n2yo.com/rest/v1/satellite/';
const apiKey = 'YC9DQJ-37AG2W-N5G4NY-4KM3';
// For hasura API
const hasuraSecretKey = 'R6jbMtmywtXzMGapRCwHXvb4D919KZrSsq3jz7RERjCi6jXv4XPcqQVcEShIrxZT';
const hasuraBaseUrl = 'https://satrack.hasura.app/api/rest/';
const environment = {
    production: false,
    apiBaseUrl: apiBaseUrl,
    apiKey: apiKey,
    hasura: {
        hasuraBaseUrl: hasuraBaseUrl,
        hasuraSecretKey: hasuraSecretKey
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var cesium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cesium */ "./node_modules/cesium/Source/Cesium.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
window['CESIUM_BASE_URL'] = "assets/Cesium";
cesium__WEBPACK_IMPORTED_MODULE_2__["Ion"].defaultAccessToken = _constants__WEBPACK_IMPORTED_MODULE_3__["constants"].defaultAccessToken;
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ls24741\Documents\Practice Area\satrack\client\dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map