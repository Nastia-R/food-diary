(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dish_dish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dish/dish.component */ "./src/app/dish/dish.component.ts");
/* harmony import */ var _dish_store_epic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dish/store/epic */ "./src/app/dish/store/epic.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _dish_dish_component__WEBPACK_IMPORTED_MODULE_6__["DishComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [_dish_store_epic__WEBPACK_IMPORTED_MODULE_7__["DishEpics"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.fetch = function (path, parameters) {
        if (parameters === void 0) { parameters = null; }
        var options = {};
        if (parameters) {
            options.params = parameters.reduce(function (httpParams, value, key) { return httpParams.append(key, JSON.stringify(value)); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]);
        }
        return this.http.get(path, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.data; }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/store/helpers/action.ts":
/*!**********************************************!*\
  !*** ./src/app/core/store/helpers/action.ts ***!
  \**********************************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
function createAction(type, payload) {
    return payload === undefined ? { type: type } : { type: type, payload: payload };
}


/***/ }),

/***/ "./src/app/core/store/helpers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/store/helpers/index.ts ***!
  \*********************************************/
/*! exports provided: createAction, createSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/app/core/store/helpers/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["createAction"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./src/app/core/store/helpers/selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return _selector__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });





/***/ }),

/***/ "./src/app/core/store/helpers/selector.ts":
/*!************************************************!*\
  !*** ./src/app/core/store/helpers/selector.ts ***!
  \************************************************/
/*! exports provided: createSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var createSelector = function (callback) {
    var streams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        streams[_i - 1] = arguments[_i];
    }
    return function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var parametersAsObservable = parameters.map(function (parameter) { return parameter instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? parameter : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(parameter); });
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"].apply(void 0, streams.concat(parametersAsObservable)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(callback), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    };
};


/***/ }),

/***/ "./src/app/core/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: Store, createAction, createSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/app/core/store/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["createAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["createSelector"]; });

/* harmony import */ var _store_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.model */ "./src/app/core/store/store.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store_model__WEBPACK_IMPORTED_MODULE_1__["Store"]; });





/***/ }),

/***/ "./src/app/core/store/root.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/core/store/root.reducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dish_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dish/store/reducer */ "./src/app/dish/store/reducer.ts");


var rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    dish: _dish_store_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);


/***/ }),

/***/ "./src/app/core/store/store.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/store/store.model.ts ***!
  \*******************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var storeRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])({
    dishes: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(),
});
var Store = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Store, _super);
    function Store() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Store;
}(storeRecord));



/***/ }),

/***/ "./src/app/core/store/store.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/store/store.service.ts ***!
  \*********************************************/
/*! exports provided: AppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root.reducer */ "./src/app/core/store/root.reducer.ts");
/* harmony import */ var _store_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.model */ "./src/app/core/store/store.model.ts");









var state$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
var action$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"];
var epic$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]();
var rootEpic = function (action$, store) { return epic$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (epic) { return epic(action$, store); })); };
var AppStore = /** @class */ (function () {
    function AppStore() {
        var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_4__["createEpicMiddleware"])();
        var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_7__["default"], new _store_model__WEBPACK_IMPORTED_MODULE_8__["Store"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(epicMiddleware)));
        epicMiddleware.run(rootEpic);
        store.subscribe(function () { return state$.next(store.getState()); });
        action$.subscribe(store.dispatch);
    }
    AppStore_1 = AppStore;
    AppStore.dispatch = function (action) {
        return action$.next(action);
    };
    AppStore.select = function (selector) {
        return selector(AppStore_1.state$);
    };
    AppStore.addEpics = function () {
        var epics = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            epics[_i] = arguments[_i];
        }
        epics.map(function (epic) { return epic$.next(epic); });
    };
    var AppStore_1;
    AppStore.state$ = state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) { return state !== null; }));
    AppStore = AppStore_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppStore);
    return AppStore;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Dashboard\n</h3>\n\n<div *ngFor=\"let dish of dishes$ | async\">\n  <span>{{ dish.get('id') }}</span>\n  <span>{{ dish.get('name') }}</span>\n  <span>{{ dish.get('calories') }}</span>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dish_model_dish_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dish/model/dish.model */ "./src/app/dish/model/dish.model.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.dishes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])([
            new _dish_model_dish_model__WEBPACK_IMPORTED_MODULE_3__["Dish"]({ id: 1, name: 'test', 'calories': 123 }),
            new _dish_model_dish_model__WEBPACK_IMPORTED_MODULE_3__["Dish"]({ id: 2, name: 'test2', 'calories': 456 })
        ]));
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dish/dish.component.css":
/*!*****************************************!*\
  !*** ./src/app/dish/dish.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2gvZGlzaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dish/dish.component.html":
/*!******************************************!*\
  !*** ./src/app/dish/dish.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dish works!\n</p>\n"

/***/ }),

/***/ "./src/app/dish/dish.component.ts":
/*!****************************************!*\
  !*** ./src/app/dish/dish.component.ts ***!
  \****************************************/
/*! exports provided: DishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishComponent", function() { return DishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DishComponent = /** @class */ (function () {
    function DishComponent() {
    }
    DishComponent.prototype.ngOnInit = function () {
    };
    DishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dish',
            template: __webpack_require__(/*! ./dish.component.html */ "./src/app/dish/dish.component.html"),
            styles: [__webpack_require__(/*! ./dish.component.css */ "./src/app/dish/dish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DishComponent);
    return DishComponent;
}());



/***/ }),

/***/ "./src/app/dish/model/dish.model.ts":
/*!******************************************!*\
  !*** ./src/app/dish/model/dish.model.ts ***!
  \******************************************/
/*! exports provided: Dish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");


var dishRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])({
    id: null,
    name: '',
    calories: null
});
var Dish = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dish, _super);
    function Dish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dish;
}(dishRecord));



/***/ }),

/***/ "./src/app/dish/store/action.ts":
/*!**************************************!*\
  !*** ./src/app/dish/store/action.ts ***!
  \**************************************/
/*! exports provided: DishActionType, DishActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishActionType", function() { return DishActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishActions", function() { return DishActions; });
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/store */ "./src/app/core/store/index.ts");

var DishActionType;
(function (DishActionType) {
    DishActionType["LOAD_DISHES"] = "LOAD_DISHES";
    DishActionType["SET_DISHES"] = "SET_DISHES";
    DishActionType["CREATE_DISH"] = "CREATE_DISH";
    DishActionType["UPDATE_DISH"] = "UPDATE_DISH";
    DishActionType["DELETE_DISH"] = "DELETE_DISH";
})(DishActionType || (DishActionType = {}));
;
var DishActions = {
    loadDishes: function () { return Object(_core_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DishActionType.LOAD_DISHES); },
    setDishes: function (dishes) { return Object(_core_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DishActionType.SET_DISHES, { dishes: dishes }); },
    createDish: function (value) { return Object(_core_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DishActionType.CREATE_DISH, { value: value }); },
    updateDish: function (path, value) { return Object(_core_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DishActionType.UPDATE_DISH, { path: path, value: value }); },
    deleteDish: function (path) { return Object(_core_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DishActionType.DELETE_DISH, path); },
};


/***/ }),

/***/ "./src/app/dish/store/epic.ts":
/*!************************************!*\
  !*** ./src/app/dish/store/epic.ts ***!
  \************************************/
/*! exports provided: DishEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishEpics", function() { return DishEpics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./src/app/dish/store/action.ts");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _core_store_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/store/store.service */ "./src/app/core/store/store.service.ts");







var DishEpics = /** @class */ (function () {
    function DishEpics(api) {
        var _this = this;
        this.api = api;
        this.loadDishes = function (action$, state$) { return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_action__WEBPACK_IMPORTED_MODULE_4__["DishActionType"].LOAD_DISHES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
            return _this.api.fetch('/dishes').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_action__WEBPACK_IMPORTED_MODULE_4__["DishActions"].setDishes));
        })); };
        _core_store_store_service__WEBPACK_IMPORTED_MODULE_6__["AppStore"].addEpics(this.loadDishes);
    }
    DishEpics = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], DishEpics);
    return DishEpics;
}());



/***/ }),

/***/ "./src/app/dish/store/reducer.ts":
/*!***************************************!*\
  !*** ./src/app/dish/store/reducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dish; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/app/dish/store/action.ts");


function dish(state, action) {
    switch (action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_1__["DishActionType"].SET_DISHES:
            return action.payload.dishes;
        case _action__WEBPACK_IMPORTED_MODULE_1__["DishActionType"].UPDATE_DISH:
            return state.setIn(asArray(action.payload.path).slice(), Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(action.payload.value));
        case _action__WEBPACK_IMPORTED_MODULE_1__["DishActionType"].CREATE_DISH:
            return state.unshift(action.payload.value);
        case _action__WEBPACK_IMPORTED_MODULE_1__["DishActionType"].DELETE_DISH:
            return state.deleteIn(asArray(action.payload).slice());
    }
    return state;
}
function asArray(data) {
    return Array.isArray(data) ? data : [data];
}


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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/sources/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map