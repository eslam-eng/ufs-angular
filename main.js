(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"default~admin-admin-module~settings-settings-module",
		"admin-admin-module"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"default~admin-admin-module~settings-settings-module",
		"settings-settings-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/helpers/application.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/helpers/application.ts ***!
  \**********************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.start = function () {
        Application.startLoading();
    };
    Application.startLoading = function () {
        if (document.getElementById('apploading'))
            document.getElementById('apploading').style.display = "block";
    };
    Application.endLoading = function () {
        if (document.getElementById('apploading'))
            document.getElementById('apploading').style.display = "none";
    };
    return Application;
}());



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
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/layout.component */ "./src/app/core/layout.component.ts");
/* harmony import */ var _shared_middlewares_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/middlewares/auth-guard.service */ "./src/app/shared/middlewares/auth-guard.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");







var routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: _core_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        canActivate: [_shared_middlewares_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        children: [
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule'
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
            },
            {
                path: 'users',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: '',
                loadChildren: './admin/admin.module#AdminModule'
            },
        ]
    },
    {
        path: '**',
        component: _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"],
        // redirectTo: 'admin',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    scrollPositionRestoration: 'enabled'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors */ "./src/app/shared/interceptors/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _core_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/layout.component */ "./src/app/core/layout.component.ts");
/* harmony import */ var _core_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/app.component */ "./src/app/core/app.component.ts");
/* harmony import */ var _core_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth.component */ "./src/app/core/auth.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _core_components_system_label_system_label_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/components/system-label/system-label.component */ "./src/app/core/components/system-label/system-label.component.ts");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _user_services_role_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/services/role.service */ "./src/app/user/services/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _admin_helpers_application__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/helpers/application */ "./src/app/admin/helpers/application.ts");
/* harmony import */ var _components_message_message_index_message_index_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/message/message-index/message-index.component */ "./src/app/components/message/message-index/message-index.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule(router, translationService) {
        var _this = this;
        this.router = router;
        this.translationService = translationService;
        _admin_helpers_application__WEBPACK_IMPORTED_MODULE_31__["Application"].start();
        // check on ssl
        //this.activeSSL();
        if (!_shared_auth__WEBPACK_IMPORTED_MODULE_27__["Auth"].getApiToken())
            this.router.navigate(['/auth/login'], {}).then().catch();
        // load local translations
        _shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_DATA = _shared_cache__WEBPACK_IMPORTED_MODULE_29__["Cache"].has(_shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_CACHE_KEY) ? _shared_cache__WEBPACK_IMPORTED_MODULE_29__["Cache"].get(_shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_CACHE_KEY) : {};
        // load online translations
        this.translationService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_29__["Cache"].remove(_shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_CACHE_KEY);
            _shared_cache__WEBPACK_IMPORTED_MODULE_29__["Cache"].set(_shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_CACHE_KEY, r);
            _shared_translation__WEBPACK_IMPORTED_MODULE_28__["Translation"].TRANSLATION_DATA = r;
            //
            // console.log('translation loaded');
            _shared_helper__WEBPACK_IMPORTED_MODULE_30__["Helper"].refreshComponent(_this.router, window.location.pathname);
        });
        // prevent context menu
        this.preventClickJection();
    }
    // prevent context menu
    AppModule.prototype.preventClickJection = function () {
        if (window.location.host.indexOf('localhost') >= 0)
            return;
        document.oncontextmenu = function (e) { e.preventDefault(); };
    };
    AppModule.prototype.activeSSL = function () {
        var canActivateSSL = true;
        if (window.location.host.indexOf('localhost') >= 0)
            canActivateSSL = false;
        if (window.location.protocol.indexOf('https') >= 0)
            canActivateSSL = false;
        if (canActivateSSL)
            window.location.href = window.location.href.replace("http", "https");
    };
    AppModule.prototype.reloadIfConsoleOpen = function () {
        if (this.isConsoleOpen()) {
            window.location.href = "https://www.youtube.com/watch?v=6YCq549gdT0";
        }
        ;
    };
    AppModule.prototype.isConsoleOpen = function () {
        var startTime = new Date();
        debugger;
        var endTime = new Date();
        return endTime - startTime > 100;
    };
    AppModule.doc = document;
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _core_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"],
                _core_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
                _core_components_system_label_system_label_component__WEBPACK_IMPORTED_MODULE_23__["SystemLabelComponent"],
                _components_message_message_index_message_index_component__WEBPACK_IMPORTED_MODULE_32__["MessageIndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: false,
                    progressBar: true,
                    closeButton: true,
                    enableHtml: true,
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_22__["DataTablesModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            ],
            providers: [
                _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__["httpInterceptorProviders"],
                _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__["TranslationService"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuestService"],
                _user_services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"],
                _user_services_role_service__WEBPACK_IMPORTED_MODULE_25__["RoleService"],
                { provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' }
            ],
            bootstrap: [_core_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"],
            _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_15__["TranslationService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/message/message-index/message-index.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/message/message-index/message-index.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message-index works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/message/message-index/message-index.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/message/message-index/message-index.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLWluZGV4L21lc3NhZ2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/message/message-index/message-index.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/message/message-index/message-index.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MessageIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageIndexComponent", function() { return MessageIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageIndexComponent = /** @class */ (function () {
    function MessageIndexComponent() {
    }
    MessageIndexComponent.prototype.ngOnInit = function () {
    };
    MessageIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-index',
            template: __webpack_require__(/*! ./message-index.component.html */ "./src/app/components/message/message-index/message-index.component.html"),
            styles: [__webpack_require__(/*! ./message-index.component.scss */ "./src/app/components/message/message-index/message-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageIndexComponent);
    return MessageIndexComponent;
}());



/***/ }),

/***/ "./src/app/core/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/core/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<!--\n<ng-template appConfirm>\n  <app-confirm-modal [withDetails]=\"false\"></app-confirm-modal>\n</ng-template>\n-->\n"

/***/ }),

/***/ "./src/app/core/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/core/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //let html = '<app-root></app-root>';
        //var myWindow = window.open(window.location.href, "MsgWindow", "width=200,height=100");
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isClosed = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/loading/loading.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/loading/loading.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal w3-indigo\" style=\"background-color: #161f4f!important;\" id=\"apploading\" >\n\n  <div class=\"w3-display-container\" style=\"margin: auto;top: 30%;max-width: 600px\" >\n    <div class=\"w3-block text-center\">\n      <img [src]=\"user.company? user.company.logo_url : ''\" class=\"w3-circle material-shadow\" width=\"80px;\" height=\"80px\" >\n      <br>\n      <b>{{ user.company? user.company.name : '' }}</b>\n    </div>\n    <br>\n    <br>\n    <div class=\"truck\">\n      <span class=\"cab\"></span>\n      <span class=\"smoke\"></span>\n    </div>\n    <hr>\n    <div class=\"w3-large text-center\">\n      <b>{{ \"A Right World Time To Take You On\" | trans }}</b>\n      <br>\n      <br>\n      <i class=\"fa fa-spin fa-spinner\" ></i>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/loading/loading.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/components/loading/loading.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#apploading {\n  z-index: 100000000000000020;\n}\n\nbody {\n  margin: 10%;\n  padding-top: 30%;\n}\n\n.truck {\n  width: 15em;\n  height: 5em;\n  font-size: 10px;\n  background-color: #444;\n  border-radius: 0.4em;\n  position: relative;\n  -webkit-animation: put-put 2s infinite, move 10s infinite;\n          animation: put-put 2s infinite, move 10s infinite;\n}\n\n@-webkit-keyframes put-put {\n  0% {\n    margin-top: 0;\n    height: 5em;\n  }\n  5% {\n    margin-top: -0.2em;\n    height: 5.2em;\n  }\n  20% {\n    margin-top: -0.1em;\n    height: 5em;\n  }\n  35% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n  40% {\n    margin-top: -0.1em;\n    height: 5.1em;\n  }\n  60% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n  75% {\n    margin-top: 0;\n    height: 5em;\n  }\n  80% {\n    margin-top: -0.4em;\n    height: 5.2em;\n  }\n  100% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n}\n\n@keyframes put-put {\n  0% {\n    margin-top: 0;\n    height: 5em;\n  }\n  5% {\n    margin-top: -0.2em;\n    height: 5.2em;\n  }\n  20% {\n    margin-top: -0.1em;\n    height: 5em;\n  }\n  35% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n  40% {\n    margin-top: -0.1em;\n    height: 5.1em;\n  }\n  60% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n  75% {\n    margin-top: 0;\n    height: 5em;\n  }\n  80% {\n    margin-top: -0.4em;\n    height: 5.2em;\n  }\n  100% {\n    margin-top: 0.1em;\n    height: 4.9em;\n  }\n}\n\n@-webkit-keyframes move {\n  0% {\n    margin-left: 90%;\n  }\n  50% {\n    margin-left: 45%;\n  }\n  100% {\n    margin-left: 0;\n  }\n  0%, 100% {\n    filter: opacity(0);\n  }\n  10%, 90% {\n    filter: opacity(1);\n  }\n}\n\n@keyframes move {\n  0% {\n    margin-left: 90%;\n  }\n  50% {\n    margin-left: 45%;\n  }\n  100% {\n    margin-left: 0;\n  }\n  0%, 100% {\n    filter: opacity(0);\n  }\n  10%, 90% {\n    filter: opacity(1);\n  }\n}\n\n.truck::before,\n.truck::after,\n.cab::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: border-box;\n  width: 2em;\n  height: 2em;\n  background-color: #444;\n  border: 0.1em solid white;\n  border-radius: 50%;\n  bottom: -1em;\n}\n\n.truck::before {\n  left: 0.6em;\n}\n\n.truck::after {\n  right: 0.6em;\n}\n\n.cab {\n  position: absolute;\n  width: 3.3em;\n  height: 2.5em;\n  background-color: #333;\n  left: -3.5em;\n  bottom: 0;\n  border-radius: 40% 0 0.4em 0.4em;\n}\n\n.cab::before {\n  content: \"\";\n  position: absolute;\n  width: 2em;\n  height: 1.5em;\n  background-color: #333;\n  top: -1.5em;\n  right: 0;\n  border-radius: 100% 0 0 0;\n}\n\n.cab::after {\n  left: 0.5em;\n}\n\n.smoke,\n.smoke::before,\n.smoke::after {\n  content: \"\";\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  background-color: #333;\n  right: -0.1em;\n  bottom: -0.5em;\n  border-radius: 50%;\n}\n\n.smoke {\n  -webkit-animation: drift 2s infinite, smoke-1 2s infinite;\n          animation: drift 2s infinite, smoke-1 2s infinite;\n}\n\n.smoke::before {\n  -webkit-animation: drift 3s infinite, smoke-2 3s infinite;\n          animation: drift 3s infinite, smoke-2 3s infinite;\n}\n\n.smoke::after {\n  -webkit-animation: drift 4s infinite, smoke-3 4s infinite;\n          animation: drift 4s infinite, smoke-3 4s infinite;\n}\n\n@-webkit-keyframes drift {\n  0%, 100% {\n    filter: opacity(0);\n  }\n  15% {\n    filter: opacity(0.9);\n  }\n}\n\n@keyframes drift {\n  0%, 100% {\n    filter: opacity(0);\n  }\n  15% {\n    filter: opacity(0.9);\n  }\n}\n\n@-webkit-keyframes smoke-1 {\n  to {\n    width: 3em;\n    height: 3em;\n    right: -3em;\n    bottom: 0.5em;\n  }\n}\n\n@keyframes smoke-1 {\n  to {\n    width: 3em;\n    height: 3em;\n    right: -3em;\n    bottom: 0.5em;\n  }\n}\n\n@-webkit-keyframes smoke-2 {\n  to {\n    width: 2.5em;\n    height: 2.5em;\n    right: -6em;\n    bottom: 0.8em;\n  }\n}\n\n@keyframes smoke-2 {\n  to {\n    width: 2.5em;\n    height: 2.5em;\n    right: -6em;\n    bottom: 0.8em;\n  }\n}\n\n@-webkit-keyframes smoke-3 {\n  to {\n    width: 3.5em;\n    height: 3.5em;\n    right: -4em;\n    bottom: 0.2em;\n  }\n}\n\n@keyframes smoke-3 {\n  to {\n    width: 3.5em;\n    height: 3.5em;\n    right: -4em;\n    bottom: 0.2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvYWRpbmcvQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFDSTtVQURKLGlEQUNJO0FDQU47O0FESUE7RUFDRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDREo7RURJQTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQ0ZKO0VES0E7SUFDSSxrQkFBQTtJQUNBLFdBQUE7RUNISjtFRE1BO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VDSko7RURPQTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQ0xKO0VEUUE7SUFDSSxpQkFBQTtJQUNBLGFBQUE7RUNOSjtFRFNBO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUNQSjtFRFVBO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0VDUko7RURXQTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtFQ1RKO0FBQ0Y7O0FEbkNBO0VBQ0U7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ0RKO0VESUE7SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUNGSjtFREtBO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VDSEo7RURNQTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtFQ0pKO0VET0E7SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUNMSjtFRFFBO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VDTko7RURTQTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDUEo7RURVQTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQ1JKO0VEV0E7SUFDSSxpQkFBQTtJQUNBLGFBQUE7RUNUSjtBQUNGOztBRFlBO0VBQ0U7SUFDSSxnQkFBQTtFQ1ZKO0VEYUE7SUFDSSxnQkFBQTtFQ1hKO0VEY0E7SUFDSSxjQUFBO0VDWko7RURlQTtJQUNJLGtCQUFBO0VDYko7RURnQkE7SUFDSSxrQkFBQTtFQ2RKO0FBQ0Y7O0FETEE7RUFDRTtJQUNJLGdCQUFBO0VDVko7RURhQTtJQUNJLGdCQUFBO0VDWEo7RURjQTtJQUNJLGNBQUE7RUNaSjtFRGVBO0lBQ0ksa0JBQUE7RUNiSjtFRGdCQTtJQUNJLGtCQUFBO0VDZEo7QUFDRjs7QURpQkE7OztFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtBQ2ZGOztBRGtCQTtFQUNFLFlBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUNmRjs7QURrQkE7RUFDRSxXQUFBO0FDZkY7O0FEa0JBOzs7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHlEQUNJO1VBREosaURBQ0k7QUNoQk47O0FEb0JBO0VBQ0UseURBQ0k7VUFESixpREFDSTtBQ2xCTjs7QURzQkE7RUFDRSx5REFDSTtVQURKLGlEQUNJO0FDcEJOOztBRHdCQTtFQUNFO0lBQ0ksa0JBQUE7RUNyQko7RUR3QkE7SUFDSSxvQkFBQTtFQ3RCSjtBQUNGOztBRGVBO0VBQ0U7SUFDSSxrQkFBQTtFQ3JCSjtFRHdCQTtJQUNJLG9CQUFBO0VDdEJKO0FBQ0Y7O0FEeUJBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDdkJKO0FBQ0Y7O0FEaUJBO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDdkJKO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDeEJKO0FBQ0Y7O0FEa0JBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDeEJKO0FBQ0Y7O0FEMkJBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDekJKO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDekJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcGxvYWRpbmcge1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk5OTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMTAlO1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4udHJ1Y2sge1xuICB3aWR0aDogMTVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOlxuICAgICAgcHV0LXB1dCAycyBpbmZpbml0ZSxcbiAgICAgIG1vdmUgMTBzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1dC1wdXQge1xuICAwJSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgaGVpZ2h0OiA1ZW07XG4gIH1cblxuICA1JSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMC4yZW07XG4gICAgICBoZWlnaHQ6IDUuMmVtO1xuICB9XG5cbiAgMjAlIHtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjFlbTtcbiAgICAgIGhlaWdodDogNWVtO1xuICB9XG5cbiAgMzUlIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgICAgaGVpZ2h0OiA0LjllbTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMC4xZW07XG4gICAgICBoZWlnaHQ6IDUuMWVtO1xuICB9XG5cbiAgNjAlIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgICAgaGVpZ2h0OiA0LjllbTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgaGVpZ2h0OiA1ZW07XG4gIH1cblxuICA4MCUge1xuICAgICAgbWFyZ2luLXRvcDogLTAuNGVtO1xuICAgICAgaGVpZ2h0OiA1LjJlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgICAgbWFyZ2luLXRvcDogMC4xZW07XG4gICAgICBoZWlnaHQ6IDQuOWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MCU7XG4gIH1cblxuICA1MCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgfVxuXG4gIDEwMCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAwJSwgMTAwJSB7XG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoMCk7XG4gIH1cblxuICAxMCUsIDkwJSB7XG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gIH1cbn1cblxuLnRydWNrOjpiZWZvcmUsXG4udHJ1Y2s6OmFmdGVyLFxuLmNhYjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IC0xZW07XG59XG5cbi50cnVjazo6YmVmb3JlIHtcbiAgbGVmdDogMC42ZW07XG59XG5cbi50cnVjazo6YWZ0ZXIge1xuICByaWdodDogMC42ZW07XG59XG5cbi5jYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzLjNlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbGVmdDogLTMuNWVtO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDQwJSAwIDAuNGVtIDAuNGVtO1xufVxuXG4uY2FiOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB0b3A6IC0xLjVlbTtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG59XG5cbi5jYWI6OmFmdGVyIHtcbiAgbGVmdDogMC41ZW07XG59XG5cbi5zbW9rZSxcbi5zbW9rZTo6YmVmb3JlLFxuLnNtb2tlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICByaWdodDogLTAuMWVtO1xuICBib3R0b206IC0wLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc21va2Uge1xuICBhbmltYXRpb246XG4gICAgICBkcmlmdCAycyBpbmZpbml0ZSxcbiAgICAgIHNtb2tlLTEgMnMgaW5maW5pdGU7XG59XG5cbi5zbW9rZTo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOlxuICAgICAgZHJpZnQgM3MgaW5maW5pdGUsXG4gICAgICBzbW9rZS0yIDNzIGluZmluaXRlO1xufVxuXG4uc21va2U6OmFmdGVyIHtcbiAgYW5pbWF0aW9uOlxuICAgICAgZHJpZnQgNHMgaW5maW5pdGUsXG4gICAgICBzbW9rZS0zIDRzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGRyaWZ0IHtcbiAgMCUsIDEwMCUge1xuICAgICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICB9XG5cbiAgMTUlIHtcbiAgICAgIGZpbHRlcjogb3BhY2l0eSgwLjkpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc21va2UtMSB7XG4gIHRvIHtcbiAgICAgIHdpZHRoOiAzZW07XG4gICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgIHJpZ2h0OiAtM2VtO1xuICAgICAgYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNtb2tlLTIge1xuICB0byB7XG4gICAgICB3aWR0aDogMi41ZW07XG4gICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgcmlnaHQ6IC02ZW07XG4gICAgICBib3R0b206IDAuOGVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc21va2UtMyB7XG4gIHRvIHtcbiAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICByaWdodDogLTRlbTtcbiAgICAgIGJvdHRvbTogMC4yZW07XG4gIH1cbn1cbiIsIiNhcHBsb2FkaW5nIHtcbiAgei1pbmRleDogMTAwMDAwMDAwMDAwMDAwMDIwO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAxMCU7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi50cnVjayB7XG4gIHdpZHRoOiAxNWVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IHB1dC1wdXQgMnMgaW5maW5pdGUsIG1vdmUgMTBzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1dC1wdXQge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgfVxuICA1JSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMmVtO1xuICAgIGhlaWdodDogNS4yZW07XG4gIH1cbiAgMjAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4xZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gIH1cbiAgMzUlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTtcbiAgICBoZWlnaHQ6IDQuOWVtO1xuICB9XG4gIDQwJSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMWVtO1xuICAgIGhlaWdodDogNS4xZW07XG4gIH1cbiAgNjAlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTtcbiAgICBoZWlnaHQ6IDQuOWVtO1xuICB9XG4gIDc1JSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgfVxuICA4MCUge1xuICAgIG1hcmdpbi10b3A6IC0wLjRlbTtcbiAgICBoZWlnaHQ6IDUuMmVtO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgIGhlaWdodDogNC45ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAwJSwgMTAwJSB7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICB9XG4gIDEwJSwgOTAlIHtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMSk7XG4gIH1cbn1cbi50cnVjazo6YmVmb3JlLFxuLnRydWNrOjphZnRlcixcbi5jYWI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IC0xZW07XG59XG5cbi50cnVjazo6YmVmb3JlIHtcbiAgbGVmdDogMC42ZW07XG59XG5cbi50cnVjazo6YWZ0ZXIge1xuICByaWdodDogMC42ZW07XG59XG5cbi5jYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzLjNlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgbGVmdDogLTMuNWVtO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDQwJSAwIDAuNGVtIDAuNGVtO1xufVxuXG4uY2FiOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMS41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIHRvcDogLTEuNWVtO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcbn1cblxuLmNhYjo6YWZ0ZXIge1xuICBsZWZ0OiAwLjVlbTtcbn1cblxuLnNtb2tlLFxuLnNtb2tlOjpiZWZvcmUsXG4uc21va2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgcmlnaHQ6IC0wLjFlbTtcbiAgYm90dG9tOiAtMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNtb2tlIHtcbiAgYW5pbWF0aW9uOiBkcmlmdCAycyBpbmZpbml0ZSwgc21va2UtMSAycyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlOjpiZWZvcmUge1xuICBhbmltYXRpb246IGRyaWZ0IDNzIGluZmluaXRlLCBzbW9rZS0yIDNzIGluZmluaXRlO1xufVxuXG4uc21va2U6OmFmdGVyIHtcbiAgYW5pbWF0aW9uOiBkcmlmdCA0cyBpbmZpbml0ZSwgc21va2UtMyA0cyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBkcmlmdCB7XG4gIDAlLCAxMDAlIHtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCk7XG4gIH1cbiAgMTUlIHtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC45KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbW9rZS0xIHtcbiAgdG8ge1xuICAgIHdpZHRoOiAzZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgcmlnaHQ6IC0zZW07XG4gICAgYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbW9rZS0yIHtcbiAgdG8ge1xuICAgIHdpZHRoOiAyLjVlbTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHJpZ2h0OiAtNmVtO1xuICAgIGJvdHRvbTogMC44ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc21va2UtMyB7XG4gIHRvIHtcbiAgICB3aWR0aDogMy41ZW07XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICByaWdodDogLTRlbTtcbiAgICBib3R0b206IDAuMmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/loading/loading.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/loading/loading.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.user = {};
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user();
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/core/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/core/components/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/main-page/main-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/main-page/main-page.component.ts ***!
  \******************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/core/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/core/components/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/nav-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"#\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>{{ user.company? user.company.name : '' }}</b></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>{{ user.company? user.company.name : '' }}</b></span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\" *ngIf=\"1 == 2\" >\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Developers\n                      <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n\n\n        <!-- font setting -->\n        <li (click)=\"$('#fontResizerModal').modal('show')\" >\n          <a   ><i class=\"fa fa-font\"></i></a>\n        </li>\n\n\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">{{ notifications.length }}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">{{ message }}</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li *ngFor=\"let item of notifications\" >\n                  <a href=\"#\">\n                    <i class=\"{{ item.icon }}\"></i> {{ item.body }}\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\" *ngIf=\"1 == 2\" >\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Create a nice theme\n                      <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Some task I need to do\n                      <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Make beautiful transitions\n                      <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img [src]=\"user.photo_url\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">{{ user.name }}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img  [src]=\"user.photo_url\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                {{ user.name }}\n                <small>{{ user.company? user.company.name : '' }}</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body hidden\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\" routerLink=\"/user/profile\" >\n                <a href=\"#\" class=\"btn btn-default btn-flat\">{{ \"profile\" | trans }}</a>\n              </div>\n              <div class=\"pull-right\" style=\"cursor: pointer;\" (click)=\"logout()\" >\n                <a  class=\"btn btn-default btn-flat\">{{ \"logout\" | trans }}</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li *ngIf=\"1 == 2\" >\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>\n\n\n<app-font-resizer></app-font-resizer>\n"

/***/ }),

/***/ "./src/app/core/components/navbar/nav-bar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/components/navbar/nav-bar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _services_system_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/system-setting.service */ "./src/app/core/services/system-setting.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");










var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(config, authService, router, systemSettingService) {
        this.authService = authService;
        this.router = router;
        this.systemSettingService = systemSettingService;
        this.doc = document;
        this.sidebarOpened = false;
        this.user = {};
        this.notifications = [];
        this.$ = $;
        this.notify = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(this.doc.notify);
        config.placement = 'bottom-right';
        // console.log(this.user);
    }
    NavBarComponent.prototype.initMessage = function (arr) {
        this.message = _shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans("You have {n} notifications").replace("{n}", arr.length);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        if (_shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user())
            this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user();
        this.initMessage(this.notifications);
        this.loadNotifications();
        //this.observeNotifications();
    };
    NavBarComponent.prototype.observeNotifications = function () {
        var _this_1 = this;
        setInterval(function () {
            if (_this_1.doc.notify == 1)
                _this_1.loadNotifications();
        }, 5000);
    }; //
    NavBarComponent.prototype.loadNotifications = function () {
        var _this_1 = this;
        this.systemSettingService.getNotifications().subscribe(function (res) {
            res.forEach(function (element) {
                _this_1.notifications.push(element);
            });
            _this_1.notifications.reverse();
            //
            if (res.length > 0) {
                _this_1.initMessage(res);
                _this_1.doc.playSound('ios_notification');
            }
            _this_1.doc.notify = 0;
        });
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_9__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans('are you want to logout'), function () {
            _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].logout();
            _this.router.navigate(['/auth/login']).then().catch();
        });
    };
    NavBarComponent.prototype.canAccessStudentAffair = function () {
        var permissions = ["application_add", "applicattion_edit", "application_remove", "application_read", "student_read", "student_edit", "student_add", "student_remove", "required_document_read", "required_document_edit", "required_document_add", "required_document_remove", "application_required", "application_setting"];
        return _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].canOr(permissions);
    };
    /**
     * observe time to load notifications
     * 2 minuties
     */
    NavBarComponent.OBSERVE_TIME = 2 * 60 * 1000;
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/components/navbar/nav-bar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/components/navbar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_system_setting_service__WEBPACK_IMPORTED_MODULE_6__["SystemSettingService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Page Wrapper -->\n  <div id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n      <!-- Sidebar - Brand -->\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n        <div class=\"sidebar-brand-icon rotate-n-15\">\n          <i class=\"fas fa-laugh-wink\"></i>\n        </div>\n        <div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div>\n      </a>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider my-0\">\n\n      <!-- Nav Item - Dashboard -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"index.html\">\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n          <span>Dashboard</span></a>\n      </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider\">\n\n      <!-- Heading -->\n      <div class=\"sidebar-heading\">\n        Interface\n      </div>\n\n      <!-- Nav Item - Pages Collapse Menu -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n          <i class=\"fas fa-fw fa-cog\"></i>\n          <span>Components</span>\n        </a>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Custom Components:</h6>\n            <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\n            <a class=\"collapse-item\" href=\"cards.html\">Cards</a>\n          </div>\n        </div>\n      </li>\n\n      <!-- Nav Item - Utilities Collapse Menu -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\n          <i class=\"fas fa-fw fa-wrench\"></i>\n          <span>Utilities</span>\n        </a>\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Custom Utilities:</h6>\n            <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\n            <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\n            <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\n            <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\n          </div>\n        </div>\n      </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider\">\n\n      <!-- Heading -->\n      <div class=\"sidebar-heading\">\n        Addons\n      </div>\n\n      <!-- Nav Item - Pages Collapse Menu -->\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n          <i class=\"fas fa-fw fa-folder\"></i>\n          <span>Pages</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse show\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Login Screens:</h6>\n            <a class=\"collapse-item\" href=\"login.html\">Login</a>\n            <a class=\"collapse-item\" href=\"register.html\">Register</a>\n            <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\n            <div class=\"collapse-divider\"></div>\n            <h6 class=\"collapse-header\">Other Pages:</h6>\n            <a class=\"collapse-item active\" href=\"404.html\">404 Page</a>\n            <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\n          </div>\n        </div>\n      </li>\n\n      <!-- Nav Item - Charts -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"charts.html\">\n          <i class=\"fas fa-fw fa-chart-area\"></i>\n          <span>Charts</span></a>\n      </li>\n\n      <!-- Nav Item - Tables -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"tables.html\">\n          <i class=\"fas fa-fw fa-table\"></i>\n          <span>Tables</span></a>\n      </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider d-none d-md-block\">\n\n      <!-- Sidebar Toggler (Sidebar) -->\n      <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n      </div>\n\n    </ul>\n    <!-- End of Sidebar -->\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n      <!-- Main Content -->\n      <div id=\"content\">\n\n        <!-- Topbar -->\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n          <!-- Sidebar Toggle (Topbar) -->\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n\n          <!-- Topbar Search -->\n          <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" type=\"button\">\n                  <i class=\"fas fa-search fa-sm\"></i>\n                </button>\n              </div>\n            </div>\n          </form>\n\n        </nav>\n        <!-- End of Topbar -->\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n          <!-- 404 Error Text -->\n          <div class=\"text-center\">\n            <div class=\"error mx-auto\" data-text=\"404\">404</div>\n            <p class=\"lead text-gray-800 mb-5\">Page Not Found</p>\n            <p class=\"text-gray-500 mb-0\">It looks like you found a glitch in the matrix...</p>\n            <a href=\"index.html\">&larr; Back to Dashboard</a>\n          </div>\n\n        </div>\n        <!-- /.container-fluid -->\n\n      </div>\n      <!-- End of Main Content -->\n\n      <!-- Footer -->\n      <footer class=\"sticky-footer bg-white\">\n        <div class=\"container my-auto\">\n          <div class=\"copyright text-center my-auto\">\n            <span>Copyright &copy; Your Website 2019</span>\n          </div>\n        </div>\n      </footer>\n      <!-- End of Footer -->\n\n    </div>\n    <!-- End of Content Wrapper -->\n\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <!-- Scroll to Top Button-->\n  <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n    <i class=\"fas fa-angle-up\"></i>\n  </a>\n\n  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n          <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/core/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/sidebar/side-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/sidebar/side-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar material-shadow\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\" style=\"height: auto;\">\n        <!-- Sidebar user panel -->\n        <div class=\"user-panel\">\n            <div class=\"pull-left image\">\n                <img [src]=\"user.photo_url\" class=\"img-circle\" alt=\"User Image\">\n            </div>\n            <div class=\"pull-left info\">\n                <p>{{ user.name }}</p>\n                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n            </div>\n        </div>\n        <!-- sidebar menu: : style can be found in sidebar.less -->\n        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n            <li class=\"header\">MAIN NAVIGATION</li>\n\n            <li permission=\"website_read\" appAuth>\n                <a href=\"{{ website }}\" target=\"_blank\">\n                    <i class=\"fa fa-globe\"></i> <span>{{ \"to go website\" | trans }}</span>\n                </a>\n            </li>\n\n            <li class=\" treeview \" _permission=\"awb_read\">\n                <a href=\"#\">\n                    <i class=\"fa fa-newspaper-o\"></i> <span>{{ \"awb\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"awb_add\">\n                        <a routerLink=\"/awb-create\" href=\"#\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"prepare shipment\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"awb_read\">\n                        <a href=\"#\" routerLink=\"/awb\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"awb_change_status\">\n                        <a href=\"#\" routerLink=\"/awb-pod\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb pod\" | trans }}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li class=\" treeview \" appAuth>\n                <a href=\"#\">\n                    <i class=\"fa fa-calculator\"></i> <span>{{ \"accounting\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"price_table_read\">\n                        <a href=\"#\" routerLink=\"/price-table\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"price table\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"out_receipt_read\">\n                        <a href=\"#\" routerLink=\"/out-receipt\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"out receipt\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"in_receipt_read\">\n                        <a href=\"#\" routerLink=\"/in-receipt\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"in receipt\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"update_account_courier_sheet\">\n                        <a href=\"#\" routerLink=\"/update-account-courier-sheet\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"collect courier sheets\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"awb_customer_review\">\n                        <a href=\"#\" routerLink=\"/awb-customer-review\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb customer review\" | trans }}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li permission=\"pickup_read\" appAuth>\n                <a href=\"#\" routerLink=\"/pickup\">\n                    <i class=\"fa fa-address-book\"></i> <span>{{ \"pickups\" | trans }}</span>\n                </a>\n            </li>\n            <li class=\" treeview \" *ngIf=\"can(['courier_sheet_read', 'courier_read', 'courier_sheet_add'])\">\n                <a href=\"#\">\n                    <i class=\"fa fa-newspaper-o\"></i> <span>{{ \"courier sheets\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"courier_read\">\n                        <a href=\"#\" routerLink=\"/courier\">\n                            <i class=\"fa fa-angle-double-right\"></i> <span>{{ \"couriers\" | trans }}</span>\n                        </a>\n                    </li>\n                    <li permission=\"courier_sheet_add\">\n                        <a href=\"#\" routerLink=\"/courier-sheet-create\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"add courier sheets\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"courier_sheet_read\">\n                        <a href=\"#\" routerLink=\"/courier-sheet\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"courier sheets\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"update_courier_sheet\">\n                        <a href=\"#\" routerLink=\"/update-courier-sheet\">\n                            <i class=\"fa fa-angle-double-right\"></i> <span>{{ \"update courier sheet\" | trans }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li class=\" treeview \" *ngIf=\"can(['company_read', 'receiver_read', 'company_branch_read'])\">\n                <a href=\"#\">\n                    <i class=\"fa fa-users\"></i> <span>{{ \"companies & receivers\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"company_read\">\n                        <a href=\"#\" routerLink=\"/company\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"companies\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"company_branch_read\">\n                        <a href=\"#\" routerLink=\"/company-branch\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"company branches\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"receiver_read\">\n                        <a href=\"#\" routerLink=\"/receiver\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"receivers\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"department_read\">\n                        <a href=\"#\" routerLink=\"/settings/department\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"departments\" | trans }}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li class=\" treeview \" *ngIf=\"can(['user_read', 'role_read', 'permission_group_read', 'permission_read'])\">\n                <a href=\"#\">\n                    <i class=\"fa fa-users\"></i> <span>{{ \"users & roles\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"user_read\">\n                        <a href=\"#\" routerLink=\"/users/user\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"users\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"role_read\">\n                        <a href=\"#\" routerLink=\"/users/role\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"roles\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"permission_group_read\" *ngIf=\"user.company_id == 1\">\n                        <a href=\"#\" routerLink=\"/users/permission-group\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"permission groups\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"permission_read\" *ngIf=\"user.company_id == 1\">\n                        <a href=\"#\" routerLink=\"/users/permission\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"permissions\" | trans }}\n                        </a>\n                    </li>\n\n                </ul>\n            </li>\n            <li appAuth=\"admin\" *ngIf=\"can(['country_read', 'city_read', 'area_read', 'service_read', 'payment_type_read', 'status_read', 'department_read', 'translation_read']) && user.company_id == 1\" class=\" treeview \">\n                <a href=\"#\">\n                    <i class=\"fa fa-cogs\"></i> <span>{{ \"settings\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"courier_commission_read\">\n                        <a href=\"#\" routerLink=\"/settings/courier-commission\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"courier commisions\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"courier_daily_read\">\n                        <a href=\"#\" routerLink=\"/settings/courier-daily\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"courier dailies\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"country_read\">\n                        <a href=\"#\" routerLink=\"/settings/store\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"stores\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"country_read\">\n                        <a href=\"#\" routerLink=\"/settings/expense-type\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"expenses types\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"country_read\">\n                        <a href=\"#\" routerLink=\"/settings/awb-category\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb categories\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"country_read\">\n                        <a href=\"#\" routerLink=\"/settings/country\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"countries\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"city_read\">\n                        <a href=\"#\" routerLink=\"/settings/city\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"cities\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"area_read\">\n                        <a href=\"#\" routerLink=\"/settings/area\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"areas\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"service_read\">\n                        <a href=\"#\" routerLink=\"/settings/service\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"services\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"payment_type_read\">\n                        <a href=\"#\" routerLink=\"/settings/payment-type\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"payment types\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"status_read\">\n                        <a href=\"#\" routerLink=\"/settings/status\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"status\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"trans_type_read\">\n                        <a href=\"#\" routerLink=\"/settings/trans-type\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"trans types\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"translation_read\">\n                        <a href=\"#\" routerLink=\"/settings/translations\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"translation\" | trans }}\n                        </a>\n                    </li>\n\n                </ul>\n            </li>\n            <li class=\" treeview \" *ngIf=\"can(['report_awb_price'])\">\n                <a href=\"#\">\n                    <i class=\"fa fa-line-chart\"></i> <span>{{ \"Reports\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"report_awb_price\">\n                        <a href=\"#\" routerLink=\"/report/awb-prices\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb prices\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_awb_price\">\n                        <a href=\"#\" routerLink=\"/report/invoice-cover\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"invoice cover\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_awb_price\">\n                        <a href=\"#\" routerLink=\"/report/awb-prices2\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"awb prices2\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_awb_price\">\n                        <a href=\"#\" routerLink=\"/report/awb-prices3\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"postal invoices\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_store_transaction\">\n                        <a href=\"#\" routerLink=\"/report/store-transactions\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"store transactions\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_customer_awb\">\n                        <a href=\"#\" routerLink=\"/report/customer-awb\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"customers awb\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_one_customer_awb_status\">\n                        <a href=\"#\" routerLink=\"/report/one-customer-awb-status\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"one_customer_awb_status\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"report_one_customer_awb_city\">\n                        <a href=\"#\" routerLink=\"/report/one-customer-awb-city\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"one_customer_awb_city\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"one_courier_awb_status_report\">\n                        <a href=\"#\" routerLink=\"/report/one-courier-awb-status\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"one_courier_awb_status\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"courier_commission_report\">\n                        <a href=\"#\" routerLink=\"/report/courier-commission\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"courier commissions\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"pricetable_report\">\n                        <a href=\"#\" routerLink=\"/report/pricetable\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"pricetable report\" | trans }}\n                        </a>\n                    </li>\n\n\n                </ul>\n            </li>\n            <li class=\" treeview \" *ngIf=\"can(['read_mailbox', 'edit_website_about', 'edit_website_service'])\">\n                <a href=\"#\">\n                    <i class=\"fa fa-line-chart\"></i> <span>{{ \"Website\" | trans }}</span>\n                    <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li permission=\"read_mailbox\">\n                        <a href=\"#\" routerLink=\"/mailbox\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"mailbox\" | trans }}\n                        </a>\n                    </li>\n                    <li permission=\"edit_website_about\">\n                        <a href=\"#\" routerLink=\"/website/about\">\n                            <i class=\"fa fa-angle-double-right\"></i> {{ \"edit about us\" | trans }}\n                        </a>\n                    </li>\n                    <!--\n          <li permission=\"edit_website_service\" >\n            <a href=\"#\" routerLink=\"/website/our-service\" >\n              <i class=\"fa fa-angle-double-right\"></i>\n              {{ \"edit our services\" | trans }}\n            </a>\n          </li>\n          -->\n\n\n\n                </ul>\n            </li>\n            <!--\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-th\"></i> <span>new link</span>\n        </a>\n      </li>\n      -->\n        </ul>\n    </section>\n    <!-- /.sidebar -->\n</aside>"

/***/ }),

/***/ "./src/app/core/components/sidebar/side-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/sidebar/side-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(refElement) {
        this.refElement = refElement;
        this.user = {};
        this.isSuperAdmin = true;
        this.$ = $;
        this.website = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].website;
        if (src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user())
            this.user = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.role = localStorage.getItem('AdminRole');
        if (this.role != 'super_admin')
            this.isSuperAdmin = false;
        var self = this;
        setTimeout(function () {
            self.$('.sidebar').slimScroll({ height: (window.innerHeight - 60) + "px" });
            self.$('ul').tree({});
        }, 500);
    };
    SidebarComponent.prototype.menuClicked = function (el) {
        var others = this.refElement.nativeElement.querySelectorAll('#sidebar .nav-item .dropdown-menu.show');
        if (others != null && others.length > 0) {
            others.forEach(function (element) {
                element.classList.remove('show');
            });
        }
        document.getElementById(el.getAttributeNode('aria-controls').value).classList.toggle('show');
    };
    Object.defineProperty(SidebarComponent.prototype, "name", {
        get: function () {
            return localStorage.getItem('AdminName');
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.can = function (arr) {
        return src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].canOr(arr);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/core/components/sidebar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/core/components/sidebar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"w3-display-topleft w3-padding sidebar-settings\"  style=\"position: fixed;\">\n\n  <div class=\"w3-card-2 w3-round w3-white\" style=\"width: 80px\" >\n    <ul class=\"w3-ul\" >\n      <li class=\"text-center w3-large w3-hover-light-gray\" style=\"cursor: pointer;\" (click)=\"toggle()\" >\n        <b class=\"fa  {{ isClosed? 'fa-angle-up' : 'fa-angle-down' }}\" ></b>\n      </li>\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important\" *ngIf=\"setting.current_academic_year\" >\n         <i class=\"fa fa-calendar w3-larger w3-text-indigo\" ></i>\n         <br>\n         <span class=\"w3-tiny\" style=\"font-family: 'Roboto';\" >{{ setting.current_academic_year.name }}</span>\n      </li>\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important\" *ngIf=\"setting.current_term\" >\n         <i class=\"fa fa-graduation-cap w3-larger w3-text-indigo\" ></i>\n         <br>\n         <span class=\"w3-tiny\" >{{ setting.current_term.name }}</span>\n      </li>\n      <li class=\"text-center setting-list-item w3-hover-light-gray\" style=\"padding: 3px!important;cursor: pointer;\" (click)=\"resize()\" >\n        <div *ngIf=\"!resizable\" >\n          <i class=\"fa fa-arrows w3-larger w3-text-\" ></i>\n          <br>\n          <span class=\"w3-tiny\" >{{ \"resize\" | trans }}</span>\n        </div>\n        <div *ngIf=\"resizable\" >\n          <i class=\"fa fa-arrows w3-larger w3-text-indigo\" ></i>\n          <br>\n          <b class=\"w3-tiny\" >{{ \"resize\" | trans }}</b>\n        </div>\n      </li>\n      <li class=\"text-center setting-list-item w3-hover-light-gray\"\n      style=\"padding: 3px!important;cursor: pointer;\" (click)=\"viewThemeDialog()\" >\n        <div  >\n          <i class=\"fa fa-paint-brush w3-larger w3-text-indigo\" ></i>\n          <br>\n          <span class=\"w3-tiny\"  >{{ \"theme\" | trans }}</span>\n        </div>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n\n\n<div class=\"modal fade\"  id=\"themeModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"change application theme\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"w3-display-container w3-row\">\n          <div *ngFor=\"let color of colors index as i\"\n          (click)=\"changeColor(color)\"\n          class=\"w3-center\" style=\"width: 40px;float: right;cursor: pointer;\" >\n            <i class=\"fa fa-circle w3-xxlarge\" [ngStyle]=\"{color: color.color}\"  ></i>\n            <br>\n            <i class=\"fa fa-check-circle {{ selectedTheme.color == color.color? 'w3-text-green' : 'w3-text-gray' }}\" ></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default w3-block small-shadow\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-academic-year {\n  position: fixed;\n  top: 5px;\n  width: 100px;\n  z-index: 999999999999;\n}\n\n.sidebar-settings {\n  z-index: 999999;\n  top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3N5c3RlbS1sYWJlbC9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcc3lzdGVtLWxhYmVsXFxzeXN0ZW0tbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zeXN0ZW0tbGFiZWwvc3lzdGVtLWxhYmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvc3lzdGVtLWxhYmVsL3N5c3RlbS1sYWJlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY3VycmVudC1hY2FkZW1pYy15ZWFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbn1cblxuLnNpZGViYXItc2V0dGluZ3Mge1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogNTBweDtcbn1cbiIsIi5jdXJyZW50LWFjYWRlbWljLXllYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbn1cblxuLnNpZGViYXItc2V0dGluZ3Mge1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHRvcDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/system-label/system-label.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/system-label/system-label.component.ts ***!
  \************************************************************************/
/*! exports provided: SystemLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLabelComponent", function() { return SystemLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/theme */ "./src/app/shared/helpers/theme.ts");
/* harmony import */ var _services_system_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/system-setting.service */ "./src/app/core/services/system-setting.service.ts");




var SystemLabelComponent = /** @class */ (function () {
    function SystemLabelComponent(systemSettingService) {
        this.systemSettingService = systemSettingService;
        this.setting = {};
        this.$ = $;
        this.resizable = false;
        this.isClosed = false;
        this.isThemeOpen = false;
        this.selectedTheme = {};
        this.colors = [];
        src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].load();
        this.loadTheme();
    }
    SystemLabelComponent.prototype.loadTheme = function () {
        this.selectedTheme = src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].get();
        // console.log(this.selectedTheme);
        this.colors = src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].COLORS;
        // console.log(this.colors);
    };
    SystemLabelComponent.prototype.changeColor = function (color) {
        this.selectedTheme = color;
        src_app_shared_helpers_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].change(color);
    };
    SystemLabelComponent.prototype.viewThemeDialog = function () {
        this.$('#themeModal').modal('show');
    };
    SystemLabelComponent.prototype.loadSettings = function () {
        var _this = this;
        this.systemSettingService.getSystemSetting().subscribe(function (res) {
            _this.setting = res;
        });
    };
    SystemLabelComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    SystemLabelComponent.prototype.toggle = function () {
        if (this.isClosed) {
            this.$('.setting-list-item').slideDown(300);
            this.isClosed = false;
        }
        else {
            this.$('.setting-list-item').slideUp(300);
            this.isClosed = true;
        }
    };
    SystemLabelComponent.prototype.resize = function () {
        if (this.resizable) {
            $('.safe-box').css('overflow', 'auto');
            $('.safe-box').css('resize', 'none');
            this.resizable = false;
        }
        else {
            $('.safe-box').css('overflow', 'auto');
            $('.safe-box').css('resize', 'both');
            this.resizable = true;
        }
    };
    SystemLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-label',
            template: __webpack_require__(/*! ./system-label.component.html */ "./src/app/core/components/system-label/system-label.component.html"),
            styles: [__webpack_require__(/*! ./system-label.component.scss */ "./src/app/core/components/system-label/system-label.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_system_setting_service__WEBPACK_IMPORTED_MODULE_3__["SystemSettingService"]])
    ], SystemLabelComponent);
    return SystemLabelComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/core/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/core/components/main-page/main-page.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/core/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/core/components/loading/loading.component.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/layout.component.html":
/*!********************************************!*\
  !*** ./src/app/core/layout.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n\n<div class=\"wrapper\" style=\"height: auto; min-height: 100%;\">\n\n\n  <app-nav-bar></app-nav-bar>\n\n  <app-side-bar></app-side-bar>\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\" style=\"min-height: 926px;\">\n\n    <!-- loading -->\n    <div class=\"w3-modal app-loader\"  style=\"z-index: 999999999;background-color: rgba(0,0,0,0.5)!important;\" >\n      <div class=\"w3-modal-content w3-xlarge w3-text-white text-center\" style=\"background-color: transparent!important;\" >\n        <i class=\"fa fa-spinner fa-spin w3-jumbo\"></i>\n        <br>\n        <b class=\"w3-large w3-xxlarge\" >{{ \"please wait\" | trans }}</b>\n      </div>\n    </div>\n\n    <!-- remove selected -->\n    <div class=\"modal app-remove-selected\" id=\"removeSelectedModal\"  >\n      <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">{{ \"please wait while remove selected\" | trans }}</h4>\n          </div>\n          <div class=\"modal-body text-center\">\n              <i class=\"fa fa-spin fa-spinner w3-xxlarge w3-text-indigo\"></i>\n              <br>\n              <div class=\"w3-large w3-center\">\n                <br>\n                <b class=\"w3-text-red\" id=\"removedSelectedItem\" ></b> /\n                <b class=\"w3-text-indigo\" id=\"totalSelectedItem\" ></b>\n              </div>\n              <br>\n              <div class=\"w3-padding w3-border w3-border-gray w3-round result\" id=\"resultRemoveSelected\" >\n\n              </div>\n              <br>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <router-outlet></router-outlet>\n    </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/layout.component.ts":
/*!******************************************!*\
  !*** ./src/app/core/layout.component.ts ***!
  \******************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_helpers_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/helpers/application */ "./src/app/admin/helpers/application.ts");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router) {
        this.router = router;
        //
    }
    LayoutComponent.prototype.watchUser = function () {
        // console.log(Auth.getApiToken());
        if (!_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].getApiToken())
            this.router.navigate(['/auth/login'], {}).then().catch();
    };
    LayoutComponent.prototype.ngOnInit = function () {
        _admin_helpers_application__WEBPACK_IMPORTED_MODULE_4__["Application"].start();
    };
    LayoutComponent.prototype.init = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/core/layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/services/system-setting.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/system-setting.service.ts ***!
  \*********************************************************/
/*! exports provided: SystemSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSettingService", function() { return SystemSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");




var SystemSettingService = /** @class */ (function () {
    function SystemSettingService(http, service) {
        this.http = http;
        this.service = service;
    }
    SystemSettingService.prototype.getSystemSetting = function () {
        return this.service.get('system-setting');
    };
    SystemSettingService.prototype.getNotifications = function () {
        return this.service.get('notifications');
    };
    SystemSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], SystemSettingService);
    return SystemSettingService;
}());



/***/ }),

/***/ "./src/app/shared/auth.ts":
/*!********************************!*\
  !*** ./src/app/shared/auth.ts ***!
  \********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * return api token of user
     *
     */
    Auth.getApiToken = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].API_TOKEN_PRFIX);
    };
    /**
     * return user
     *
     */
    Auth.user = function () {
        return _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].USER_PRFIX);
    };
    Auth.isAdmin = function () {
        return (Auth.user().company_id == 1);
    };
    /**
     * remove user object from cache
     */
    Auth.logout = function () {
        _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].API_TOKEN_PRFIX);
        _cache__WEBPACK_IMPORTED_MODULE_1__["Cache"].remove(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"].USER_PRFIX);
        return false;
    };
    Auth.canOr = function (permissions) {
        //return true;
        var valid = false;
        permissions.forEach(function (element) {
            if (Auth.can(element))
                valid = Auth.can(element);
        });
        return valid;
    };
    Auth.canAnd = function (permissions) {
        //return true;
        permissions.forEach(function (element) {
            if (!Auth.can(element))
                return false;
        });
    };
    Auth.can = function (permission) {
        //return true;
        if (!Auth.user())
            return false;
        var permissions = Auth.user().permissions;
        if (permissions[permission])
            return true;
        return false;
    };
    /**
     * create canActivate instance from condition
     * @param condition
     */
    Auth.gaurd = function (condition) {
        return new Gaurd(condition);
    };
    return Auth;
}());

var Gaurd = /** @class */ (function () {
    function Gaurd(condition) {
        this.condition = false;
        this.condition = condition;
    }
    Gaurd.prototype.canActivate = function (route, state) {
        return this.condition;
    };
    Gaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Gaurd);
    return Gaurd;
}());


/***/ }),

/***/ "./src/app/shared/cache.ts":
/*!*********************************!*\
  !*** ./src/app/shared/cache.ts ***!
  \*********************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryption */ "./src/app/shared/encryption.ts");

var Cache = /** @class */ (function () {
    function Cache() {
    }
    /**
     * store data in locale storage
     *
     * @param key name
     * @param data
     */
    Cache.set = function (key, data, crypt) {
        if (crypt === void 0) { crypt = false; }
        data = JSON.stringify(data);
        // check if crypt
        if (crypt) {
            // encrypt the data
            data = _encryption__WEBPACK_IMPORTED_MODULE_0__["Encryption"].encrypt(data);
        }
        localStorage.setItem(Cache.CACHE_KEY + key, data);
    };
    /**
     * remove key with its data from cache
     *
     * @param key
     */
    Cache.remove = function (key) {
        localStorage.removeItem(Cache.CACHE_KEY + key);
    };
    /**
     * get data from cache
     *
     * @param key
     */
    Cache.get = function (key, crypt) {
        if (crypt === void 0) { crypt = false; }
        var data = localStorage.getItem(Cache.CACHE_KEY + key);
        // check if crypt
        if (crypt) {
            // decrypt the data
            data = _encryption__WEBPACK_IMPORTED_MODULE_0__["Encryption"].decrypt(data);
        }
        return JSON.parse(data);
    };
    /**
     * check if the cache has value
     *
     * @param key
     */
    Cache.has = function (key) {
        var data = localStorage.getItem(Cache.CACHE_KEY + key);
        return (data != null) ? true : false;
    };
    Cache.CACHE_KEY = 'ufs_';
    return Cache;
}());



/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\n  <ol class=\"breadcrumb breadcrumb-custom  w3-white material- w3-input\" style=\"border-radius: 5px!important;margin-bottom: 3px!important\" >\n    <li *ngFor=\"let item of breadcrumbList; let last = last;\" class=\"breadcrumb-item\">\n      <a *ngIf=\"!last\" routerLink=\"{{item.url}}\">\n        <span *ngIf=\"item.trans\" >{{item['name'] | trans}}</span>\n        <span *ngIf=\"!item.trans\" >{{item['name']}}</span>\n        </a>\n      <span *ngIf=\"last\">\n        <span *ngIf=\"item.trans\" >{{item['name'] | trans}}</span>\n        <span *ngIf=\"!item.trans\" >{{item['name']}}</span>\n      </span>\n    </li>\n  </ol>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.breadcrumbList = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbComponent.prototype, "breadcrumbList", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ options.title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"no()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<div class=\"modal-body\" [hidden]=\"!withDetails\">\n    <div class=\"form-group\">\n        <label for=\"details\">Details</label>\n        <textarea\n            #details=\"ngModel\"\n            class=\"form-control\"\n            rows=\"4\"\n            cols=\"3\"\n            name=\"details\"\n            id=\"details\"\n            title=\"details\"\n            required\n            ngModel\n            tabindex=\"1\"\n            [class.u-has-error-v3]=\"!details.valid && details.touched\">\n        </textarea>\n        <small *ngIf=\"!details.valid && details.touched\" class=\"g-font-weight-300 g-font-size-12 g-color-lightred-v3  g-pt-5\">\n            <span>Details is required</span>\n        </small>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <p style=\" display: block; width: 100%; margin: 6px 0; font-weight: bold; \">{{ options.message }}</p>\n    <button  [hidden]=\"!withDetails\" [disabled]=\"!details.valid\" type=\"button\" class=\"btn btn-danger\" (click)=\"yes(details.value)\">Yes</button>\n    <button  [hidden]=\"withDetails\" type=\"button\" class=\"btn btn-danger\" (click)=\"yes(details.value)\">Yes</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"no()\">No</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/confirm.service */ "./src/app/shared/services/confirm.service.ts");



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(state) {
        this.state = state;
        this.withDetails = false;
        this.options = state.options;
    }
    ConfirmModalComponent.prototype.yes = function (details) {
        this.state.modal.close(details);
    };
    ConfirmModalComponent.prototype.no = function () {
        this.state.modal.dismiss('not confirmed');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmModalComponent.prototype, "withDetails", void 0);
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/components/confirm-modal/confirm-modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmState"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/export-excel/export-excel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/export-excel/export-excel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exportExcelModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content \" style=\"background-color: #E6F5E6;\" >\n      <div class=\"modal-header w3-border-0\" >\n        <button type=\"button\" class=\"close w3-text-red\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ title | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <div *ngIf=\"step == 1\" >\n          <div class=\"text-center\">\n            <b>\n              اختر الحقول التى تود تصديرها\n            </b>\n          </div>\n          <br>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 \"   >\n              <div class=\"export-item\">\n                <mat-slide-toggle  [checked]=\"selectAll\" (change)=\"selectAllField()\" >\n                </mat-slide-toggle>\n                <b>{{ \"select all\" | trans }}</b>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6 \" *ngFor=\"let item of fields\" >\n              <div class=\"export-item\">\n                <mat-slide-toggle  [checked]=\"selectFields.has(item)\" (change)=\"toggleField(item)\" >\n                </mat-slide-toggle>\n                <b style=\"padding: 3px\" >{{ item | trans }}</b>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"modal-footer w3-center\">\n            <a role=\"button\" target=\"_blank\"  mat-raised-button\n            [disabled]=\"isSubmitted\"\n            (click)=\"downloadFile()\"\n            class=\"w3-large btn material-shadow w3-round circle\" >\n              <span class=\"fa fa-download\" *ngIf=\"!isSubmitted\" ></span>\n              <span class=\"fa fa-spin fa-spinner\" *ngIf=\"isSubmitted\" ></span>\n              {{ \"download file\" | trans }}\n            </a>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/export-excel/export-excel.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/export-excel/export-excel.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export-item {\n  border: 1px dashed gray;\n  margin: 5px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXhwb3J0LWV4Y2VsL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGV4cG9ydC1leGNlbFxcZXhwb3J0LWV4Y2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9leHBvcnQtZXhjZWwvZXhwb3J0LWV4Y2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2V4cG9ydC1leGNlbC9leHBvcnQtZXhjZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwb3J0LWl0ZW0ge1xuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbiIsIi5leHBvcnQtaXRlbSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/export-excel/export-excel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/export-excel/export-excel.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExportExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportExcelComponent", function() { return ExportExcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/shared/services/excel.service.ts");








var ExportExcelComponent = /** @class */ (function () {
    function ExportExcelComponent(excelService) {
        this.excelService = excelService;
        /**
         * title of modal
         *
         */
        this.title = "";
        /**
         * url of api to import excel file
         *
         */
        this.apiUrl = "";
        /**
         * resource object will be sent to server
         *
         */
        this.data = {};
        /**
         * resource object will be sent to server
         *
         */
        this.fields = [];
        /**
         * init jquery
         *
         */
        this.$ = $;
        /**
         * current step of import steps
         *
         */
        this.step = 1;
        /**
         * current step of import steps
         *
         */
        this.selectFields = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        /**
         * is the file uploading to server
         *
         */
        this.isSubmitted = false;
        /**
         * is the file uploading to server
         *
         */
        this.selectAll = false;
    }
    /**
     * reset all data
     */
    ExportExcelComponent.prototype.reset = function () {
        this.data = {};
        this.step = 1;
    };
    /**
     * go to current step
     */
    ExportExcelComponent.prototype.goto = function (step) {
        if (step == 2) {
            if (this.selectFields.getKeys().length <= 0)
                return _message__WEBPACK_IMPORTED_MODULE_6__["Message"].error('select fields');
        }
        this.step = step;
    };
    /**
     * toggle field from selectedFields
     *
     */
    ExportExcelComponent.prototype.toggleField = function (item) {
        if (this.selectFields.has(item))
            this.selectFields.remove(item);
        else
            this.selectFields.put(item, item);
        this.data.fields = this.selectFields.getKeys();
    };
    /**
     * select all fields
     *
     */
    ExportExcelComponent.prototype.selectAllField = function () {
        var _this = this;
        if (!this.selectAll) {
            this.fields.forEach(function (element) {
                _this.selectFields.put(element, element);
            });
            this.selectAll = true;
        }
        else {
            this.fields.forEach(function (element) {
                if (_this.selectFields.has(element))
                    _this.selectFields.remove(element);
            });
            this.selectAll = false;
        }
        this.data.fields = this.selectFields.getKeys();
    };
    /**
     * click on input file
     *
     */
    ExportExcelComponent.prototype.downloadFile = function () {
        if (this.selectFields.getKeys().length <= 0)
            return _message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('select fields'));
        var data = {
            fields: this.selectFields.getKeys()
        };
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/" + this.apiUrl + "?" + "api_token=" + _auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(data);
        window.open(url);
    };
    ExportExcelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExportExcelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExportExcelComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExportExcelComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExportExcelComponent.prototype, "fields", void 0);
    ExportExcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export-excel',
            template: __webpack_require__(/*! ./export-excel.component.html */ "./src/app/shared/components/export-excel/export-excel.component.html"),
            styles: [__webpack_require__(/*! ./export-excel.component.scss */ "./src/app/shared/components/export-excel/export-excel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])
    ], ExportExcelComponent);
    return ExportExcelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/font-resizer/font-resizer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/font-resizer/font-resizer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade \" id=\"fontResizerModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ \"font size resizer\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">{{ \"text font\" | trans }}</label>\n        <br>\n        <input type=\"text\" class=\"form-control\" value=\"{{ 'text font size' | trans }}\" >\n        <br>\n        <mat-slider\n          thumbLabel\n          [displayWith]=\"tickInterval\"\n          (change)=\"fontResizeAction()\"\n          [(ngModel)]=\"formFont\"\n          class=\"w3-block\"\n          [tickInterval]=\"formFont\"\n          min=\"12\"\n          max=\"30\"></mat-slider>\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-raised-button type=\"button\"  data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/font-resizer/font-resizer.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/font-resizer/font-resizer.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZvbnQtcmVzaXplci9mb250LXJlc2l6ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/font-resizer/font-resizer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/font-resizer/font-resizer.component.ts ***!
  \**************************************************************************/
/*! exports provided: FontResizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontResizerComponent", function() { return FontResizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cache */ "./src/app/shared/cache.ts");



var FontResizerComponent = /** @class */ (function () {
    function FontResizerComponent() {
        this.$ = $;
        this.styleSheet = document.getElementById('fontStyleSheet');
        if (!this.styleSheet)
            this.initFontStyleSheet();
        this.formFont = _cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get('form_font');
        this.fontResizeAction();
    }
    FontResizerComponent.prototype.ngOnInit = function () {
    };
    FontResizerComponent.prototype.initFontStyleSheet = function () {
        this.styleSheet = document.createElement('style');
        document.head.append(this.styleSheet);
    };
    FontResizerComponent.prototype.setFontSize = function () {
        var selectors = ".form-control, .w3-input, input, select, label, tr, th, table, li, li a, label ";
        this.styleSheet.innerHTML += selectors + " { font-size: " + this.formFont + "px!important }";
    };
    FontResizerComponent.prototype.fontResizeAction = function () {
        // cache form font size
        _cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].set('form_font', this.formFont);
        // assign style to document
        this.setFontSize();
    };
    FontResizerComponent.prototype.tickInterval = function (value) {
        return value;
    };
    FontResizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-font-resizer',
            template: __webpack_require__(/*! ./font-resizer.component.html */ "./src/app/shared/components/font-resizer/font-resizer.component.html"),
            styles: [__webpack_require__(/*! ./font-resizer.component.scss */ "./src/app/shared/components/font-resizer/font-resizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FontResizerComponent);
    return FontResizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"importExcelModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content \" style=\"background-color: #E6F5E6;\" >\n      <div class=\"modal-header w3-border-0\" >\n        <button type=\"button\" class=\"close w3-text-red\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ title | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <div *ngIf=\"step == 1\" >\n          <div class=\"text-center\">\n            <a role=\"button\" target=\"_blank\" [href]=\"templateUrl\" mat-raised-button\n            class=\"w3-large btn material-shadow w3-round circle\" >\n              <span class=\"fa fa-download\" ></span> {{ \"download template file\" | trans }}\n            </a>\n          </div>\n          <br>\n          <br>\n          <ul>\n            <li>\n              {{ \"download template file first\" | trans }}\n            </li>\n            <li>\n              {{ \"then fill exce file template\" | trans }}\n            </li>\n            <li>\n              {{ \"finally upload the file\" | trans }}\n            </li>\n          </ul>\n          <br>\n          <div class=\"modal-footer w3-center\">\n            <button mat-raised-button class=\"w3-\" (click)=\"goto(2)\" >{{ \"next\" | trans }}</button>\n          </div>\n        </div>\n\n        <div *ngIf=\"step == 2\" >\n          <div class=\"text-center\">\n            <button role=\"button\"  mat-raised-button\n            (click)=\"changeFileInput()\"\n            class=\"w3-large btn material-shadow w3-round circle\" >\n              <span class=\"fa fa-upload\" ></span> {{ \"upload your file\" | trans }}\n            </button>\n            <br>\n            <b>{{ resource.file? resource.file.name : '' }}</b>\n            <input type=\"file\" (change)=\"changeFile($event)\"  id=\"importExcelFileInput\" class=\"hidden\" accept=\".xlsx, .xls, .csv\" >\n          </div>\n          <br>\n          <ul>\n            <li>\n              {{ \"make sure the format of excel file is the same in template\" | trans }}\n            </li>\n          </ul>\n          <br>\n          <div class=\"w3-block w3-large w3-text-red hidden\" *ngIf=\"errors\" [innerHTML]=\"errors\" >\n\n          </div>\n          <br>\n          <button class=\"btn btn-sm w3-green w3-round material-shadow\" *ngIf=\"!isSubmitted\" (click)=\"exportExcel2()\" >{{ \"excel\" | trans }}</button>\n          <br>\n          <div class=\"table-responsive\" style=\"height: 150px;\" >\n            <table class=\"table table-bordered \" id=\"errorTable\" *ngIf=\"!isSubmitted\" >\n              <tr   class=\"\" >\n                <td  *ngFor=\"let col of header\" >\n                  {{ col }}\n                </td>\n                <td>\n                  {{ \"error\" | trans }}\n                </td> \n              </tr>\n              <tr *ngFor=\"let row of excelRows index as i\" class=\"w3-pale-red\" >\n                <td  *ngFor=\"let col of row\" >\n                  {{ col }}\n                </td>\n              </tr>\n            </table>\n          </div>\n          <br>\n\n          <div class=\"modal-footer w3-center\">\n            <button\n            mat-raised-button\n            [disabled]=\"isSubmitted\"\n            class=\"w3-indigo\" (click)=\"uploadFile()\" style=\"margin: 3px\" >\n              <span *ngIf=\"!isSubmitted\" >{{ \"submit\" | trans }}</span>\n              <span *ngIf=\"isSubmitted\" class=\"fa fa-spinner fa-spin\" ></span>\n            </button>\n            <button mat-raised-button class=\"w3-\" (click)=\"goto(1)\" style=\"margin: 3px\" >{{ \"back\" | trans }}</button>\n          </div>\n        </div>\n\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1wb3J0LWV4Y2VsL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGltcG9ydC1leGNlbFxcaW1wb3J0LWV4Y2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbXBvcnQtZXhjZWwvaW1wb3J0LWV4Y2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1wb3J0LWV4Y2VsL2ltcG9ydC1leGNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xufVxuIiwiLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/import-excel/import-excel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/import-excel/import-excel.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImportExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExcelComponent", function() { return ImportExcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/shared/services/excel.service.ts");





var ImportExcelComponent = /** @class */ (function () {
    function ImportExcelComponent(excelService) {
        this.excelService = excelService;
        /**
         * title of modal
         *
         */
        this.title = "";
        /**
         * url of api to import excel file
         *
         */
        this.apiUrl = "";
        /**
         * url of template of excel file
         *
         */
        this.templateUrl = "";
        /**
         * url of template of excel file
         *
         */
        this.data = {};
        /**
         * init jquery
         *
         */
        this.$ = $;
        /**
         * init jquery
         *
         */
        this.doc = document;
        /**
         * current step of import steps
         *
         */
        this.step = 1;
        /**
         * resource object will be sent to server
         *
         */
        this.resource = {};
        /**
         * is the file uploading to server
         *
         */
        this.isSubmitted = false;
        /**
         * is the file uploading to server
         *
         */
        this.excelRows = [];
        this.errors = "";
        this.header = [];
    }
    /**
     * reset all data
     */
    ImportExcelComponent.prototype.reset = function () {
        this.resource = {};
        this.step = 1;
    };
    /**
     * go to current step
     */
    ImportExcelComponent.prototype.goto = function (step) {
        this.step = step;
    };
    /**
     * click on input file
     *
     */
    ImportExcelComponent.prototype.changeFileInput = function () {
        this.$('#importExcelFileInput').click();
    };
    /**
     * click on input file
     *
     */
    ImportExcelComponent.prototype.changeFile = function (event) {
        if (!event.target.files[0])
            return;
        this.resource.file = event.target.files[0];
        //
        this.readExcelFile(event.target.files[0]);
        // console.log(event);
        _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].setFile(event, 'file', this.resource);
    };
    /**
     * read excel file
     */
    ImportExcelComponent.prototype.readExcelFile = function (file) {
        var _this = this;
        var self = this;
        this.doc.readXlsxFile(file).then(function (rows) {
            //self.excelRows = rows;
            if (rows[0])
                _this.header = rows[0];
            // this.excelRows.push(rows[0]);
        });
    };
    ImportExcelComponent.prototype.toExcelData = function (data) {
        if (!data)
            return;
        var excelData = [];
        data.forEach(function (element) {
            var row = [];
            Object.keys(element.values).forEach(function (key) {
                row.push(element.values[key]);
            });
            // store errors
            if (element['errors'])
                row.push(element['errors'][0]);
            excelData.push(row);
        });
        // console.log(excelData);
        return excelData;
    };
    ImportExcelComponent.prototype.exportExcel2 = function () {
        this.$("#errorTable").table2excel({
            exclude: ".noExl",
            name: "errors",
            filename: "errors",
            fileext: ".xls",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    };
    /**
     * click on input file
     *
     */
    ImportExcelComponent.prototype.uploadFile = function () {
        var _this = this;
        if (!this.resource.file)
            return _message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].trans("upload excel file"));
        var data = _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].toFormData(this.data);
        this.isSubmitted = true;
        data.append("file", this.resource.file);
        //
        this.errors = "";
        var errors = "";
        this.excelRows = [];
        this.excelService.upload(this.apiUrl, data).subscribe(function (r) {
            if (r.status == 1) {
                _message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(r.message);
                _this.reset();
            }
            else {
                // convert data error to excel data
                _this.excelRows = _this.toExcelData(r.data);
                // display errors
                _message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(r.message);
                if (r.data) {
                    r.data.forEach(function (element) {
                        errors += _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].trans("row number : ") + element['row'] + " => " + element['errors'][0] + "<br>";
                    });
                    _this.doc.swal.error(errors);
                    _this.errors = errors;
                }
            }
            if (_this.action)
                _this.action();
            _this.isSubmitted = false;
        });
    };
    ImportExcelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "apiUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "templateUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportExcelComponent.prototype, "data", void 0);
    ImportExcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-excel',
            template: __webpack_require__(/*! ./import-excel.component.html */ "./src/app/shared/components/import-excel/import-excel.component.html"),
            styles: [__webpack_require__(/*! ./import-excel.component.scss */ "./src/app/shared/components/import-excel/import-excel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]])
    ], ImportExcelComponent);
    return ImportExcelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/load-more/load-more.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/load-more/load-more.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [hidden]=\"isEnabled\" [disabled]=\"isClicked\"  class=\"btn btn-primary btn-user btn-block load-more-btn\">\n  <span>Load More </span>\n  <img *ngIf=\"isClicked\" src=\"assets/img/preloader-white.svg\">\n</button>\n"

/***/ }),

/***/ "./src/app/shared/components/load-more/load-more.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/load-more/load-more.component.ts ***!
  \********************************************************************/
/*! exports provided: LoadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function() { return LoadMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadMoreComponent = /** @class */ (function () {
    function LoadMoreComponent() {
    }
    LoadMoreComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadMoreComponent.prototype, "isClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoadMoreComponent.prototype, "isEnabled", void 0);
    LoadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-load-more', template: __webpack_require__(/*! ./load-more.component.html */ "./src/app/shared/components/load-more/load-more.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadMoreComponent);
    return LoadMoreComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-loader/main-loader.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-loader/main-loader.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-main-parent\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"loader\" style=\"position: relative;\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"loading\"></div>\n      </div>\n      <h4>Please Wait</h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/main-loader/main-loader.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-loader/main-loader.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLoaderComponent", function() { return MainLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainLoaderComponent = /** @class */ (function () {
    function MainLoaderComponent() {
    }
    MainLoaderComponent.prototype.ngOnInit = function () {
    };
    MainLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-loader',
            template: __webpack_require__(/*! ./main-loader.component.html */ "./src/app/shared/components/main-loader/main-loader.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainLoaderComponent);
    return MainLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/no-matching/app-no-matching.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/no-matching/app-no-matching.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"justify-content-center loader-main-parent\">\n  <div class=\"col-sm-12 commontop text-center\">\n    <div class=\"divider style-1 center\">\n      <span class=\"hr-simple left\"></span>\n      <i class=\"icofont icofont-ui-press hr-icon\"></i>\n      <span class=\"hr-simple right\"></span>\n    </div>\n    <div class=\"card card-statistics\">\n      <div class=\"card-body\">\n        <h2>No Data Found</h2>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/no-matching/app-no-matching.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/no-matching/app-no-matching.component.ts ***!
  \****************************************************************************/
/*! exports provided: NoMatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMatchingComponent", function() { return NoMatchingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoMatchingComponent = /** @class */ (function () {
    function NoMatchingComponent() {
    }
    NoMatchingComponent.prototype.ngOnInit = function () {
    };
    NoMatchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-matching',
            template: __webpack_require__(/*! ./app-no-matching.component.html */ "./src/app/shared/components/no-matching/app-no-matching.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoMatchingComponent);
    return NoMatchingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/paginator/paginator.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/paginator/paginator.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center w3-center\">\n  <nav aria-label=\"Page navigation\">\n    <ul class=\"pagination\">\n      <li>\n        <a class=\"btn\" [ngClass]=\"{'disabled': !response.prev_page}\" (click)=\"filter.page=response.prev_page;get()\"\n          aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <ng-container *ngFor=\"let item of pages index as i\" >\n        <li   >\n          <a class=\"btn\" [ngClass]=\"{'active w3-indigo': response.current_page == item}\"\n            (click)=\"filter.page=item;get()\">{{ item }}</a>\n        </li>\n      </ng-container>\n      <ng-container if=\"response.next_page > 0\" >\n        <li>\n          <a class=\"btn\" class=\"disabled\" >...</a>\n        </li>\n      </ng-container>\n      <li>\n        <a class=\"btn\" [ngClass]=\"{'disabled': !response.next_page}\" (click)=\"filter.page=response.next_page;get()\"\n          aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/paginator/paginator.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/paginator/paginator.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/paginator/paginator.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/paginator/paginator.component.ts ***!
  \********************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.response = { data: [] };
        this.pages = [];
        this.filter = {};
        this.get = function () { };
        this.pagesShown = 5;
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.response.pages_arr) {
            var pages_1 = [];
            var counter_1 = 0;
            var isStart_1 = false;
            this.response.pages_arr.forEach(function (page) {
                if (_this.response.current_page == page) {
                    isStart_1 = true;
                }
                if (counter_1 < _this.pagesShown && isStart_1) {
                    pages_1.push(page);
                    counter_1++;
                }
            });
            this.pages = pages_1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginatorComponent.prototype, "response", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginatorComponent.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginatorComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginatorComponent.prototype, "get", void 0);
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/shared/components/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/shared/components/paginator/paginator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/table/table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-display-container\">\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      (click)=\"crud.removeSelected()\"\n      *ngIf=\"crud.canRemove && crud.selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-teal\"\n      *ngIf=\"canPrintSelected && crud.selectedResources.size() > 0\"\n      (click)=\"printSelected()\"  >\n      {{ \"print selected\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.word()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-blue\"  >\n      {{ \"word\" | trans }} <i class=\"fa fa-file-word-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.filter = {};crud.get(true)\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"  >\n      {{ \"load\" | trans }} <i class=\"fa fa-refresh\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    *ngIf=\"crud.displayImport\"\n    (click)=\"crud.import()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    *ngIf=\"crud.displayLoadTrash\"\n    (click)=\"crud.loadTrash()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-deep-orange\"  >\n      {{ \"view trash\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <ng-content></ng-content>\n\n  </div>\n  <div class=\"w3-padding w3-display-topright\"  >\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.create()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"$('#colTable').modal('show')\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-teal\"   >\n      <i class=\"fa fa-filter\"></i> {{ \"toggle cols\" | trans }}\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"crud.$('.filter').slideToggle(500)\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-filter\"></i> {{ \"filter\" | trans }}\n    </button>\n\n\n    <input type=\"text\" [(ngModel)]=\"crud.filter.search\" class=\"form-control w3-round hidden\" placeholder=\"{{ 'search' | trans }}\" >\n\n\n  </div>\n\n    <div class=\"text-center w3-padding\">\n      <b>\n        {{ crud.title | trans }}\n      </b>\n      <br>\n      <br>\n    </div>\n  <div class=\"table-responsive\" style=\"height: 300px;\" >\n    <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" #table >\n\n      <tr class=\"w3-light-gray\" >\n        <th *ngIf=\"selectedCols.has('#')\" >\n          <div style=\"width: 60px;\" >\n            <mat-checkbox\n              [checked]=\"crud.selectedAllToggle\"\n              (change)=\"crud.selectAll()\"></mat-checkbox>\n          </div>\n        </th>\n        <ng-container  *ngFor=\"let col of crud.fillable\" >\n          <th class=\"w3-padding\" *ngIf=\"selectedCols.has(col.name)\" >\n\n            <span >\n              <span *ngIf=\"col.text\" >{{ col.text | trans }}</span>\n              <span *ngIf=\"!col.text\" >{{ col.name | trans }}</span>\n            </span>\n          </th>\n        </ng-container>\n      </tr>\n      <tr *ngIf=\"crud.loading\"  >\n        <td class=\"w3-text-indigo text-center\" [colSpan]=\"crud.fillable.length\" >\n          <i class=\"fa fa-spin fa-spinner\"></i>\n        </td>\n      </tr>\n      <ng-container *ngFor=\"let item of crud.data index as i\" >\n        <tr  *ngIf=\"!crud.loading\" class=\"{{ crud.selectedResources.has(item.id) || item.deleted_at? 'w3-pale-red' : '' }}\" >\n          <td  *ngIf=\"selectedCols.has('#')\" >\n            <div class=\"w3-center text-center hidden\" >\n              <mat-slide-toggle\n              [checked]=\"crud.selectedResources.has(item.id)\"\n              (change)=\"crud.toggle(item)\"\n              ></mat-slide-toggle>\n            </div>\n            <div style=\"width: 60px;\" >\n              <mat-checkbox\n                [checked]=\"crud.selectedResources.has(item.id)\"\n                (change)=\"crud.toggle(item)\"></mat-checkbox>\n            </div>\n          </td>\n          <ng-container *ngFor=\"let col of crud.fillable\" >\n\n            <td *ngIf=\"!col.action && col.type != 'image' && !col.object && selectedCols.has(col.name) && col.type != 'checkbox'\" >\n              {{ item[col.name] }}\n            </td>\n\n            <td *ngIf=\"!col.action && col.type == 'checkbox' && !col.object && selectedCols.has(col.name)\" >\n              <mat-slide-toggle\n              [disabled]=\"true\"\n              [(ngModel)]=\"item[col.name]\"\n              (change)=\"crud.update(item)\"\n              ></mat-slide-toggle>\n            </td>\n\n            <td *ngIf=\"!col.action && col.type != 'image' && col.object && selectedCols.has(col.name) && col.type != 'checkbox'\" >\n              {{ item[col.name]? item[col.name][col.data] : '' }}\n            </td>\n\n            <td *ngIf=\"col.type == 'image' && !col.action && selectedCols.has(col.name)\" >\n              <a *ngIf=\"item[col.name]\" [href]=\"item[col.name]\" target=\"_blank\"  >\n                <img [src]=\"item[col.name]\" class=\"w3-round\" height=\"20px\" style=\"margin: 3px\" >\n              </a>\n            </td>\n\n            <td *ngIf=\"col.action && selectedCols.has(col.name)\" >\n              <button\n              class=\"w3-button {{ col.class }}\"\n              *ngIf=\"col.permission\"  (click)=\"col.action(item, i)\" ></button>\n            </td>\n\n          </ng-container>\n        </tr>\n      </ng-container>\n\n    </table>\n  </div>\n  <br>\n  <div class=\"w3-padding\" permission=\"table_count\" >\n    <span *ngIf=\"crud.paging && crud.response\" >\n      <b>{{ \"count\" | trans }}</b> : {{ crud.response.total }}\n    </span>\n    <span *ngIf=\"!crud.paging && crud.data\" >\n      <b>{{ \"count\" | trans }}</b> : {{ crud.data.length }}\n    </span>\n  </div>\n\n  <app-paginator\n    *ngIf=\"crud.paging\"\n    [response]=\"crud.response\"\n    [filter]=\"crud.filter\"\n    [get]=\"crud.reload\" ></app-paginator>\n\n\n\n</div>\n\n\n<div class=\"modal fade\" id=\"colTable\" >\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content modal-sm w3-animate-top\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ \"table colmns\" }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          <tr *ngFor=\"let row of crud.fillable\" >\n            <th>\n              {{ row.name }}\n            </th>\n            <td>\n              <mat-checkbox\n              [checked]=\"selectedCols.has(row.name)\"\n              (change)=\"toggle(row.name)\"\n              ></mat-checkbox>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/table/table.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGFibGVcXHRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xufVxuIiwiLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/table/table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _helpers_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/crud */ "./src/app/shared/helpers/crud.ts");





var TableComponent = /** @class */ (function () {
    function TableComponent() {
        var _this = this;
        this.data = [];
        this.fillable = [];
        this.canPrintSelected = false;
        this.$ = $;
        this.selectedCols = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.key = location.pathname.replace('/', '');
        this.selectedCols.put('#', '#');
        var cols = _cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].get(this.key);
        //
        if (cols)
            cols.forEach(function (element) {
                _this.selectedCols.put(element, element);
            });
    }
    TableComponent.prototype.ngOnChanges = function () {
        if (this.selectedCols.size() < 2)
            this.setAll();
    };
    TableComponent.prototype.setAll = function () {
        var _this = this;
        if (this.crud)
            this.crud.fillable.forEach(function (element) {
                _this.toggle(element.name);
            });
    };
    TableComponent.prototype.toggle = function (col) {
        if (!this.selectedCols.has(col))
            this.selectedCols.put(col, col);
        else
            this.selectedCols.remove(col);
        // cache settings
        // console.log(this.selectedCols.getAll());
        _cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].set(this.key, this.selectedCols.getAll());
    };
    TableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _helpers_crud__WEBPACK_IMPORTED_MODULE_4__["Crud"])
    ], TableComponent.prototype, "crud", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "fillable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "canPrintSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "printSelected", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/shared/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/shared/components/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/toggle-col/toggle-col.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/toggle-col/toggle-col.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"colTable\" >\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content modal-sm w3-animate-top\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ \"table colmns\" }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          <tr *ngFor=\"let row of crud.fillable\" >\n            <th>\n              {{ row.name }}\n            </th>\n            <td>\n              <mat-checkbox\n              [checked]=\"selectedCols.has(row.name)\"\n              (change)=\"toggle(row.name)\"\n              ></mat-checkbox>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/shared/components/toggle-col/toggle-col.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/toggle-col/toggle-col.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvZ2dsZS1jb2wvdG9nZ2xlLWNvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/toggle-col/toggle-col.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/toggle-col/toggle-col.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToggleColComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleColComponent", function() { return ToggleColComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _helpers_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/crud */ "./src/app/shared/helpers/crud.ts");





var ToggleColComponent = /** @class */ (function () {
    function ToggleColComponent() {
        this.selectedCols = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.key = location.pathname.replace('/', '');
    }
    ToggleColComponent.prototype.loadCacheData = function () {
        var _this = this;
        this.key = window.location.pathname.replace('/', '');
        this.selectedCols.put('#', '#');
        var cols = _cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].get(this.key);
        //
        if (cols)
            cols.forEach(function (element) {
                _this.selectedCols.put(element, element);
            });
    };
    ToggleColComponent.prototype.ngOnInit = function () {
        this.loadCacheData();
    };
    ToggleColComponent.prototype.ngOnChanges = function () {
        this.loadCacheData();
    };
    ToggleColComponent.prototype.setAll = function () {
        var _this = this;
        if (this.crud)
            this.crud.fillable.forEach(function (element) {
                _this.toggle(element.name);
                //
            });
    };
    ToggleColComponent.prototype.toggle = function (col) {
        if (!this.selectedCols.has(col))
            this.selectedCols.put(col, col);
        else
            this.selectedCols.remove(col);
        // cache settings
        _cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].set(this.key, this.selectedCols.getAll());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _helpers_crud__WEBPACK_IMPORTED_MODULE_4__["Crud"])
    ], ToggleColComponent.prototype, "crud", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"])
    ], ToggleColComponent.prototype, "selectedCols", void 0);
    ToggleColComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-col',
            template: __webpack_require__(/*! ./toggle-col.component.html */ "./src/app/shared/components/toggle-col/toggle-col.component.html"),
            styles: [__webpack_require__(/*! ./toggle-col.component.scss */ "./src/app/shared/components/toggle-col/toggle-col.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleColComponent);
    return ToggleColComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/auth.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/directives/auth.directive.ts ***!
  \*****************************************************/
/*! exports provided: AuthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDirective", function() { return AuthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");



var AuthDirective = /** @class */ (function () {
    function AuthDirective(el) {
        this.el = el;
        var type = el.nativeElement.getAttribute('appAuth');
        //console.log(!Auth.can(this.permission));
        //if (type == 'admin') {
        // console.log(Auth.user().company_id, "condition", Auth.user().company_id != 1);
        if (_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company_id != 1)
            el.nativeElement.remove();
        //}
    }
    AuthDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAuth]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AuthDirective);
    return AuthDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button-clicked-directive.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/directives/button-clicked-directive.directive.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonClickedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonClickedDirective", function() { return ButtonClickedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonClickedDirective = /** @class */ (function () {
    function ButtonClickedDirective(el) {
        this.el = el;
        this.itemClassList = null;
    }
    ButtonClickedDirective.prototype.ngOnChanges = function () {
        if (this.itemClassList === null) {
            this.itemClassList = this.el.nativeElement.querySelector('.fa').classList;
        }
        if (this.loaderState === true) {
            this.el.nativeElement.setAttribute('disabled', true);
            this.itemClassList.add('fa-spin');
        }
        else {
            this.itemClassList.remove('fa-spin');
            this.el.nativeElement.removeAttribute('disabled');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonClickedDirective.prototype, "loaderState", void 0);
    ButtonClickedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appButtonClickedDirective]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonClickedDirective);
    return ButtonClickedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/permission.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/permission.directive.ts ***!
  \***********************************************************/
/*! exports provided: PermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return PermissionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");



var PermissionDirective = /** @class */ (function () {
    function PermissionDirective(el) {
        this.el = el;
        var permission = el.nativeElement.getAttribute('permission');
        //console.log(!Auth.can(this.permission));
        if (!_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can(permission))
            el.nativeElement.remove();
    }
    PermissionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[permission]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PermissionDirective);
    return PermissionDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/tables-loader.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/tables-loader.directive.ts ***!
  \**************************************************************/
/*! exports provided: TablesLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesLoaderDirective", function() { return TablesLoaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesLoaderDirective = /** @class */ (function () {
    function TablesLoaderDirective(elementRef) {
        this.elementRef = elementRef;
    }
    TablesLoaderDirective.prototype.ngOnInit = function () {
    };
    TablesLoaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTablesLoader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TablesLoaderDirective);
    return TablesLoaderDirective;
}());



/***/ }),

/***/ "./src/app/shared/encryption.ts":
/*!**************************************!*\
  !*** ./src/app/shared/encryption.ts ***!
  \**************************************/
/*! exports provided: Encryption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encryption", function() { return Encryption; });
var Encryption = /** @class */ (function () {
    function Encryption() {
    }
    /**
     * encrypt the text
     * @param text
     */
    Encryption.encrypt = function (text) {
        return Encryption.cipher(Encryption.CIPHER_KEY)(text);
    };
    /**
     * decrypt the text
     * @param text
     */
    Encryption.decrypt = function (text) {
        return Encryption.decipher(Encryption.CIPHER_KEY)(text);
    };
    // mySecretSalt
    Encryption.CIPHER_KEY = "aqarzelo";
    Encryption.cipher = function (salt) {
        var textToChars = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
        var byteHex = function (n) { return ("0" + Number(n).toString(16)).substr(-2); };
        var applySaltToChar = function (code) { return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code); };
        return function (text) { return text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join(''); };
    };
    Encryption.decipher = function (salt) {
        var textToChars = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
        var applySaltToChar = function (code) { return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code); };
        return function (encoded) { return encoded.match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(applySaltToChar)
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join(''); };
    };
    return Encryption;
}());



/***/ }),

/***/ "./src/app/shared/helper.ts":
/*!**********************************!*\
  !*** ./src/app/shared/helper.ts ***!
  \**********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation */ "./src/app/shared/translation.ts");

var Helper = /** @class */ (function () {
    function Helper() {
    }
    /**
     *  reload angular component
     * @param router
     * @param url
     */
    Helper.refreshComponent = function (router, url) {
        router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            router.navigate([url]);
        });
        setTimeout(function () {
            var doc = document;
            doc.jquery('.modal-backdrop fade in').remove();
        }, 1000);
    };
    /**
     * translate word
     *
     * @param word
     */
    Helper.trans = function (word) {
        word = word.replace(/\s/g, '_');
        word = word.toLocaleLowerCase();
        var key = word;
        // load translations from cache
        var transWord = _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].TRANSLATION_DATA[word]; //getTranslationsData()[word];
        if (transWord) {
            var translated = transWord['name_' + _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].getLang()];
            if (!translated)
                return key;
            return translated;
        }
        _translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].storeNewKey(word);
        return word;
    };
    /**
     * set file object to model from input file
     *
     */
    Helper.randColor = function () {
        var colors = [
            "w3-pink",
            "w3-green",
            "w3-blue",
            "w3-purple",
            "w3-deep-purple",
            "w3-indigo",
            "w3-light-blue",
            "w3-teal",
            "w3-orange",
            "w3-blue-gray",
            "w3-brown",
        ];
        var item = colors[Math.floor(Math.random() * colors.length)];
        return item;
    };
    /**
     * printi html table
     *
     */
    Helper.print = function () {
        var doc = document;
        doc.printJs();
    };
    /**
     * set file object to model from input file
     *
     */
    Helper.setFile = function (event, key, model) {
        model[key] = event.target.files[0];
    };
    /**
     * convert file object from input file
     * to image url
     *
     */
    Helper.loadImage = function (event, key, model) {
        Helper.setFile(event, key, model);
        var reader = new FileReader();
        reader.readAsDataURL(model[key]);
        reader.onload = function (_event) {
            model[key + "_url"] = reader.result;
        };
    };
    /**
     * validate on object from array of attributes
     *
     * @param model
     * @param requireds
     */
    Helper.validator = function (model, attributes) {
        var valid = true;
        attributes.forEach(function (element) {
            if (!model[element])
                valid = false;
        });
        return valid;
    };
    /**
     * open new window in the browser
     *
     * @param url: String url of the page
     */
    Helper.openWindow = function (url) {
        var options = "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=905,height=484";
        window.open(url, "_blank", options);
    };
    /**
     * convert javascript object to formData object
     * @param resource java script object
     * @returns FormData object
     */
    Helper.toFormData = function (resource) {
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(resource); _i < _a.length; _i++) {
            var key = _a[_i];
            if (resource[key])
                data.append(key, resource[key]);
        }
        return data;
    };
    /**
     * pre pagination
     *
     */
    Helper.prepagination = function (resources) {
        if (!resources.data)
            return;
        resources.prev_page = resources.prev_page_url ? resources.prev_page_url.replace(resources.path + '?page=', '') : null;
        resources.next_page = resources.next_page_url ? resources.next_page_url.replace(resources.path + '?page=', '') : null;
        resources.pages = Math.ceil(resources.total / resources.per_page);
        resources.pages_arr = [];
        for (var i = 0; i < resources.pages; i++)
            resources.pages_arr.push(i + 1);
    };
    /**
     * get over text if size bigger than text length
     */
    Helper.getOverText = function (text, size) {
        var overtext = "";
        if (text.length <= size) {
            overtext = text;
        }
        else {
            overtext = text.substring(0, size) + "...";
        }
        return overtext;
    };
    Helper.loader = function (action) {
        //let $: any = $;
        if (action)
            $('.app-loader').show(500);
        else
            $('.app-loader').hide(500);
    };
    Helper.SETTING = {};
    return Helper;
}());



/***/ }),

/***/ "./src/app/shared/helpers/crud.ts":
/*!****************************************!*\
  !*** ./src/app/shared/helpers/crud.ts ***!
  \****************************************/
/*! exports provided: Crud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud", function() { return Crud; });
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/shared/message.ts");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove */ "./src/app/shared/helpers/remove.ts");






var Crud = /** @class */ (function () {
    function Crud(service) {
        var _this = this;
        this.service = service;
        /**
         * document
         */
        this.doc = document;
        /**
         * jquery
         */
        this.$ = $;
        /**
         * filter params
         */
        this.filter = {};
        /**
         * response data of api if there is pagination
         */
        this.response = {};
        /**
         * resource
         */
        this.resource = {};
        /**
         * data of resources
         */
        this.data = [];
        /**
         * main base url of api
         *
         */
        this.title = "";
        /**
         * main base url of api
         *
         */
        this.baseApiUrl = "";
        /**
         * store api of insert
         *
         */
        this.storeApiUrl = "/store";
        /**
         * update api
         *
         */
        this.updateApiUrl = "/update";
        /**
         * update api
         *
         */
        this.destroyApiUrl = "/destroy";
        /**
         * update api
         *
         */
        this.loadResourceApiUrl = "";
        /**
         * required fields message
         *
         */
        this.requiredMessage = 'fill all required data';
        /**
         * permission controllers
         *
         */
        this.canAdd = true;
        this.canEdit = true;
        this.canRemove = true;
        this.isCreate = false;
        /**
         * load item
         */
        this.paging = false;
        /**
         * load item
         */
        this.loading = false;
        /**
         * load item
         */
        this.displayLoading = false;
        /**
         * load item
         */
        this.displayError = false;
        /**
         * load item
         */
        this.displayCreate = false;
        /**
         * load item
         */
        this.isSubmit = false;
        /**
         * load item
         */
        this.requiredFields = [];
        /**
         * all fields
         */
        this.fillable = [];
        /**
         * all breadcrumbs
         */
        this.breadcrumbList = [];
        /**
         * selecte records
         */
        this.selectedResources = new angular_hashtable__WEBPACK_IMPORTED_MODULE_0__["HashTable"]();
        this.displayLoadTrash = false;
        this.loadingTrash = false;
        this.displayImport = false;
        this.displayExport = false;
        this.selectedAllToggle = false;
        this.displayValidateMessage = true;
        this.removeInstance = new _remove__WEBPACK_IMPORTED_MODULE_5__["Remove"](service, this);
        this.reload = function () {
            _this.get();
            _this.selectedResources = new angular_hashtable__WEBPACK_IMPORTED_MODULE_0__["HashTable"]();
        };
        this.initBreadCrumb();
    }
    Crud.prototype.getExcelFileUrl = function () {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/" + this.baseApiUrl + "/excel/download?api_token=" + _auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].getApiToken();
    };
    Crud.prototype.getExcelFileApi = function () {
        return this.baseApiUrl + "/import";
    };
    /**
     * init breadcrumb
     *
     */
    Crud.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    /**
     * add or remove item from selected hashtable
     *
     */
    Crud.prototype.validate = function (item) {
        if (this.requiredFields.length <= 0)
            return true;
        return _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].validator(item, this.requiredFields);
    };
    /**
     * add or remove item from selected hashtable
     *
     */
    Crud.prototype.toggle = function (item) {
        if (this.selectedResources.has(item.id)) {
            // console.log(item);
            item.selected = 0;
            this.selectedResources.remove(item.id);
        }
        else {
            item.selected = 1;
            // console.log(item);
            this.selectedResources.put(item.id, item);
            // console.log(this.selectedResources);
        }
    };
    /**
     * load all the data of table
     */
    Crud.prototype.get = function (loading) {
        var _this = this;
        if (loading === void 0) { loading = false; }
        //this.loading = true;
        this.isCreate = false;
        this.loadingTrash = false;
        this.loading = loading;
        this.service.get(this.baseApiUrl, this.filter).subscribe(function (res) {
            // console.log(res);
            if (_this.paging) {
                _this.data = res.data;
                _this.response = res;
                _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].prepagination(_this.response);
            }
            else {
                _this.data = res;
                if (_this.canAdd && _this.displayCreate)
                    _this.create();
            }
            _this.loading = false;
            _this.getAction(res);
        });
    };
    /**
     * load all the one resource
     */
    Crud.prototype.load = function (id) {
        var _this = this;
        this.loading = true;
        this.service.get(this.baseApiUrl + this.loadResourceApiUrl + "/" + id, this.filter).subscribe(function (res) {
            _this.resource = res;
            _this.loading = false;
            _this.getAction(res);
        });
    };
    /**
     * new new row
     * @param data
     */
    Crud.prototype.create = function (data) {
        if (data === void 0) { data = {}; }
        if (this.isCreate)
            return _message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all fields of the row'));
        this.isCreate = true;
        var arr = [];
        arr.push(data);
        this.data.forEach(function (element) {
            arr.push(element);
        });
        this.data = arr;
    };
    /**
     * store or update object
     * if id update
     * ifnot store new one
     * @param data
     */
    Crud.prototype.send = function (data, isFormData) {
        if (isFormData === void 0) { isFormData = false; }
        if (data.id) {
            this.update(data, isFormData);
        }
        else {
            this.store(data, isFormData);
        }
    };
    /**
     * store new object
     * @param data
     */
    Crud.prototype.store = function (data, isFormData) {
        var _this = this;
        if (isFormData === void 0) { isFormData = false; }
        if (!this.canAdd)
            return;
        if (!this.validate(data)) {
            if (this.displayValidateMessage)
                _message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans(this.requiredMessage));
            return;
        }
        if (this.displayLoading)
            _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loader(true);
        this.isSubmit = true;
        if (isFormData)
            data = _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].toFormData(data);
        this.service.store(this.baseApiUrl + this.storeApiUrl, data).subscribe(function (res) {
            if (res.status == 1) {
                _message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                _this.reset(data);
                _this.isCreate = false;
                _this.get();
                _this.isSubmit = false;
            }
            else {
                _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loader(false);
                _this.isSubmit = false;
                if (_this.displayError)
                    _message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            }
            _this.storeAction(res);
            _this.action(res);
            _this.isSubmit = false;
            //if (this.displayLoading)
            _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loader(false);
        });
    };
    /**
     * update data of object
     * @param data
     */
    Crud.prototype.update = function (data, isFormData) {
        var _this = this;
        if (isFormData === void 0) { isFormData = false; }
        var object = data;
        if (!this.canEdit)
            return;
        if (!this.validate(data)) {
            if (this.displayValidateMessage)
                _message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans(this.requiredMessage));
            return;
        }
        if (this.displayLoading)
            _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loader(true);
        this.isSubmit = true;
        if (isFormData)
            object = _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].toFormData(data);
        this.service.store(this.baseApiUrl + this.updateApiUrl + "/" + data.id, object).subscribe(function (res) {
            if (res.status == 1) {
                _message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                _this.get();
            }
            else {
                _message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            }
            _this.updateAction(res);
            _this.action(res);
            _this.isSubmit = false;
            if (_this.displayLoading)
                _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loader(false);
        });
    };
    /**
     * remove data
     * @param data
     * @param index of item in array
     */
    Crud.prototype.destroy = function (data, index, action) {
        if (index === void 0) { index = 0; }
        if (action === void 0) { action = null; }
        return this.removeInstance.destroy(data, index, action);
    };
    /**
     * remove selected items
     */
    Crud.prototype.removeSelected = function () {
        return this.removeInstance.destroySelected();
    };
    /**
     * action method after load all data
     * @param response
     */
    Crud.prototype.getAction = function (response) {
        // no some thing
    };
    /**
     * action method after store
     * @param response
     */
    Crud.prototype.storeAction = function (response) {
        // no some thing
    };
    /**
     * action method after update
     * @param response
     */
    Crud.prototype.updateAction = function (response) {
        // no some thing
    };
    /**
     * action method after remove
     * @param response
     */
    Crud.prototype.destroyAction = function (response) {
        // no some thing
    };
    /**
     * action method after store, update and remove
     * @param response
     */
    Crud.prototype.action = function (response) {
        // no some thing
    };
    /**
     * search in fields
     * @param item
     */
    Crud.prototype.search = function (item) {
        if (!this.filter.search)
            return true;
        var values = [];
        Object.keys(item).forEach(function (key) {
            values.push(item[key]);
        });
        if (values.toString().toLowerCase().includes(this.filter.search.toString().toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    Crud.prototype.selectAll = function () {
        var _this = this;
        if (this.selectedAllToggle) {
            this.data.forEach(function (element) {
                if (_this.selectedResources.has(element.id))
                    _this.selectedResources.remove(element.id);
            });
            this.selectedAllToggle = false;
        }
        else {
            this.data.forEach(function (element) {
                _this.selectedResources.put(element.id, element);
            });
            this.selectedAllToggle = true;
        }
    };
    Crud.prototype.reset = function (item) {
        this.resource = { photo_url: "/assets/img/avatar.png" };
        item = {};
    };
    Crud.prototype.loadTrash = function () {
        this.loadingTrash = true;
    };
    Crud.prototype.print = function () {
        _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].print();
    };
    Crud.prototype.excel = function () {
        this.doc.exportExcel();
    };
    Crud.prototype.pdf = function () {
        this.doc.printPdf();
    };
    Crud.prototype.word = function () {
        this.doc.word();
    };
    Crud.prototype.import = function () {
        this.$('#importExcelModal').modal('show');
    };
    Crud.prototype.export = function () {
        this.$('#exportExcelModal').modal('show');
    };
    Crud.prototype.ngOnInit = function () {
    };
    /**
     * load file in model
     * @param evnt of the input
     * @param key attribute of object
     * @param model object
     */
    Crud.prototype.loadFile = function (evnt, key, model) {
        _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].loadImage(evnt, key, model);
    };
    return Crud;
}());



/***/ }),

/***/ "./src/app/shared/helpers/remove.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/remove.ts ***!
  \******************************************/
/*! exports provided: Remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remove", function() { return Remove; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/app/shared/message.ts");


var Remove = /** @class */ (function () {
    function Remove(service, parent) {
        this.service = service;
        this.$ = $;
        this.popup = document.getElementById('removeSelectedModal');
        this.parent = parent;
    }
    Remove.prototype.reset = function () {
        // done
        _message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('done'));
        // empty div content
        document.getElementById('totalSelectedItem').innerHTML = "";
        document.getElementById('resultRemoveSelected').innerHTML = "";
        document.getElementById('removedSelectedItem').innerHTML = "";
        // hidden remove selected popup
        this.$(this.popup).modal('hide');
    };
    Remove.prototype.desplayRemoveResult = function (data, res) {
        if (res.status == 0) {
            document.getElementById('resultRemoveSelected').innerHTML += "<b class='w3-text-red' >" + _helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('item with id') + " : " + data.id + ", " + res.message + "</b><br>";
        }
        else {
            document.getElementById('resultRemoveSelected').innerHTML += "<b class='w3-text-green' >" + _helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('item with id') + " : " + data.id + ", " + res.message + "</b><br>";
        }
        // display total item
        document.getElementById('removedSelectedItem').innerHTML = this.parent.selectedResources.size() + "";
    };
    Remove.prototype.performDestroy = function (data, index, action, displayMessage) {
        if (action === void 0) { action = null; }
        if (displayMessage === void 0) { displayMessage = true; }
        var self = this.parent;
        self.isSubmit = true;
        self.service.store(self.baseApiUrl + self.destroyApiUrl + "/" + data.id, data).subscribe(function (res) {
            if (res.status == 1) {
                if (displayMessage)
                    _message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                self.get();
            }
            else {
                _message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            }
            self.destroyAction(res);
            self.action(res);
            self.isSubmit = true;
            if (action)
                action(res);
        });
    };
    Remove.prototype.performDestroySelcted = function () {
        var _this = this;
        var item = this.parent.selectedResources.getAll().pop();
        if (item) {
            if (!item.id) {
                return this.reset();
            }
            // remove from selected
            this.parent.selectedResources.remove(item.id);
            this.performDestroy(item, 0, function (res) {
                // display result
                _this.desplayRemoveResult(item, res);
                _this.performDestroySelcted();
            }, false);
        }
        else {
            return this.reset();
        }
    };
    /**
     * remove data
     * @param data
     * @param index of item in array
     */
    Remove.prototype.destroy = function (data, index, action) {
        if (action === void 0) { action = null; }
        if (!this.parent.canRemove)
            return;
        var self = this;
        _message__WEBPACK_IMPORTED_MODULE_1__["Message"].confirm(_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('are you sure'), function () {
            self.performDestroy(data, index, action);
        });
    };
    /**
     * remove selected items
     */
    Remove.prototype.destroySelected = function () {
        if (!this.parent.canRemove)
            return;
        var self = this;
        _message__WEBPACK_IMPORTED_MODULE_1__["Message"].confirm(_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('are you sure'), function () {
            // display remove selected popup
            self.$(self.popup).modal('show');
            // display total item
            document.getElementById('totalSelectedItem').innerHTML = self.parent.selectedResources.size() + "";
            self.performDestroySelcted();
        });
    };
    return Remove;
}());



/***/ }),

/***/ "./src/app/shared/helpers/theme.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/helpers/theme.ts ***!
  \*****************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache */ "./src/app/shared/cache.ts");

var Theme = /** @class */ (function () {
    function Theme() {
    }
    Theme.load = function () {
        var theme = Theme.get();
        Theme.change(theme);
    };
    Theme.get = function () {
        var theme = _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Theme.PREFIX);
        if (!theme)
            theme = Theme.DEFAULT;
        return theme;
    };
    Theme.change = function (object) {
        var element = document.getElementById('theme');
        element.innerHTML = '.w3-indigo, .btn-primary, .fixed-nav,.mat-primary { background-color: ' + object.color + '!important; }';
        element.innerHTML += '.w3-text-indigo { color: ' + object.color + '!important; }';
        _cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].set(Theme.PREFIX, object);
    };
    Theme.PREFIX = "THEME";
    Theme.COLORS = [
        { color: '#5c6bc0' },
        { color: '#333' },
        { color: '#009688' },
        { color: '#ff5722' },
        { color: '#29910d' },
        { color: '#795548' },
        { color: '#5f5f5f' },
        { color: '#e91e63' }
    ];
    Theme.DEFAULT = Theme.COLORS[0];
    return Theme;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/Auth.Interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/Auth.Interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = _auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].getApiToken();
        if (token) {
            var cloned = req.clone({
            //headers: req.headers.set("api_token", token)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");






var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router) {
        this.router = router;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                if (error.status == 401) {
                    _auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].logout();
                    _this.router.navigate(['/auth/login']);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.interceptor */ "./src/app/shared/interceptors/url.interceptor.ts");
/* harmony import */ var _Auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth.Interceptor */ "./src/app/shared/interceptors/Auth.Interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");




var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _url_interceptor__WEBPACK_IMPORTED_MODULE_1__["UrlInterceptor"] },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpErrorInterceptor"] },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], multi: true, useClass: _Auth_Interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"] }
];


/***/ }),

/***/ "./src/app/shared/interceptors/url.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/url.interceptor.ts ***!
  \********************************************************/
/*! exports provided: UrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlInterceptor", function() { return UrlInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var UrlInterceptor = /** @class */ (function () {
    function UrlInterceptor() {
    }
    UrlInterceptor.prototype.intercept = function (req, next) {
        var apiReq = req.clone({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/" + req.url
        });
        return next.handle(apiReq);
    };
    UrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UrlInterceptor);
    return UrlInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/message.ts":
/*!***********************************!*\
  !*** ./src/app/shared/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.success = function (message) {
        var doc = document;
        doc.playSound('not2');
        doc.swal.success(message);
        //
        //AppModule.doc.observeNotification();
    };
    Message.error = function (message) {
        var doc = document;
        doc.playSound('not2');
        doc.swal.error(message);
        //
        //AppModule.doc.observeNotification();
    };
    Message.confirm = function (message, action) {
        var doc = document;
        doc.swal.confirm(message, action);
    };
    return Message;
}());



/***/ }),

/***/ "./src/app/shared/middlewares/auth-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/middlewares/auth-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (!_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken()) {
            this.router.navigate(['/login'], {
                queryParams: { return: state.url }
            }).then().catch();
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/middlewares/auth-guest.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/middlewares/auth-guest.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuestService", function() { return AuthGuestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuestService = /** @class */ (function () {
    function AuthGuestService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuestService.prototype.canActivate = function (route, state) {
        return route.data.can;
    };
    AuthGuestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuestService);
    return AuthGuestService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/replace-underscore-with-space.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/pipes/replace-underscore-with-space.pipe.ts ***!
  \********************************************************************/
/*! exports provided: ReplaceUnderscoreWithSpacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceUnderscoreWithSpacePipe", function() { return ReplaceUnderscoreWithSpacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplaceUnderscoreWithSpacePipe = /** @class */ (function () {
    function ReplaceUnderscoreWithSpacePipe() {
    }
    ReplaceUnderscoreWithSpacePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/_/g, ' ');
    };
    ReplaceUnderscoreWithSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ReplaceUnderscoreWithSpace'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReplaceUnderscoreWithSpacePipe);
    return ReplaceUnderscoreWithSpacePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trans.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/trans.pipe.ts ***!
  \********************************************/
/*! exports provided: TransPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransPipe", function() { return TransPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TransPipe = /** @class */ (function () {
    function TransPipe() {
    }
    TransPipe.prototype.transform = function (value, args) {
        return _helper__WEBPACK_IMPORTED_MODULE_1__["Helper"].trans(value);
    };
    TransPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'trans',
        })
    ], TransPipe);
    return TransPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(route, http) {
        this.route = route;
        this.http = http;
        this.userStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.notifySubscribers = function (status) {
        this.userStatus$.next(status);
    };
    AuthService.prototype.login = function (userLogin) {
        return this.http.post('auth/login', userLogin);
    };
    AuthService.prototype.confirmEmail = function (confirmEmail) {
        return this.http.post('auth/confirmEmail', confirmEmail);
    };
    AuthService.prototype.isAuth = function () {
        return localStorage.getItem('AdminToken') !== null;
    };
    AuthService.prototype.logOut = function () {
        this.removeAdminLoalStorage();
    };
    AuthService.prototype.setAdminLoalStorage = function (AdminUser) {
        localStorage.setItem('AdminToken', AdminUser.token);
        localStorage.setItem('AdminEmail', AdminUser.email);
        localStorage.setItem('AdminRole', AdminUser.role);
        localStorage.setItem('AdminName', AdminUser.name);
    };
    AuthService.prototype.removeAdminLoalStorage = function () {
        localStorage.removeItem('AdminToken');
        localStorage.removeItem('AdminEmail');
        localStorage.removeItem('AdminRole');
        localStorage.removeItem('AdminName');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('AdminToken');
    };
    AuthService.USER_PRFIX = 'user';
    AuthService.API_TOKEN_PRFIX = 'api_token';
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/confirm.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/confirm.service.ts ***!
  \****************************************************/
/*! exports provided: ConfirmState, ConfirmService, ConfirmTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmState", function() { return ConfirmState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmTemplateDirective", function() { return ConfirmTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



/**
 * An internal service allowing to access, from the confirm modal component, the options and the modal reference.
 * It also allows registering the TemplateRef containing the confirm modal component.
 *
 * It must be declared in the providers of the NgModule, but is not supposed to be used in application code
 */
var ConfirmState = /** @class */ (function () {
    function ConfirmState() {
    }
    ConfirmState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ConfirmState);
    return ConfirmState;
}());

/**
 * A confirmation service, allowing to open a confirmation modal from anywhere and get back a promise.
 */
var ConfirmService = /** @class */ (function () {
    function ConfirmService(modalService, state) {
        this.modalService = modalService;
        this.state = state;
    }
    ConfirmService.prototype.confirm = function (options) {
        this.state.options = options;
        this.state.modal = this.modalService.open(this.state.template, { centered: true });
        return this.state.modal.result;
    };
    ConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ConfirmState])
    ], ConfirmService);
    return ConfirmService;
}());

var ConfirmTemplateDirective = /** @class */ (function () {
    function ConfirmTemplateDirective(confirmTemplate, state) {
        state.template = confirmTemplate;
    }
    ConfirmTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appConfirm]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], ConfirmState])
    ], ConfirmTemplateDirective);
    return ConfirmTemplateDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");




var ExcelService = /** @class */ (function () {
    function ExcelService(http) {
        this.http = http;
        this.$ = $;
    }
    /**
     * store new service
     */
    ExcelService.prototype.upload = function (url, data) {
        return this.http.post(url + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * store new service
     */
    ExcelService.prototype.download = function (url, data) {
        return this.http.get(url + '?api_token=' + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&" + this.$.param(data));
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/shared/services/global.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/global.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "./src/app/shared/auth.ts");




var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.$ = $;
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Constent-Type': 'application/json',
            'api_token': _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
            'Authorization': "Bearer " + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
        });
    }
    /**
     * get services from api
     *
     */
    GlobalService.prototype.get = function (url, data) {
        if (data === void 0) { data = {}; }
        var requestParams = {};
        Object.keys(data).forEach(function (key) {
            if (data[key]) {
                requestParams[key] = data[key];
            }
        });
        var headerOptions = {
            headers: this.header,
            params: requestParams
        };
        return this.http.get(url, headerOptions);
    };
    /**
     * get services from api
     *
     */
    GlobalService.prototype.loadHtml = function (url, data) {
        if (data === void 0) { data = {}; }
        //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Constent-Type': 'text/plain; charset=utf-8',
            'api_token': _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
            'Authorization': "Bearer " + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
        });
        return this.http.get(url, { headers: headers, params: data, responseType: 'text' });
    };
    /**
     * get services from api
     *
     */
    GlobalService.prototype.loadHtmlPost = function (url, data) {
        if (data === void 0) { data = {}; }
        //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Constent-Type': 'text/plain; charset=utf-8',
            'api_token': _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
            'Authorization': "Bearer " + _auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
        });
        return this.http.post(url, data, { headers: headers, responseType: 'text' });
    };
    /**
     * store new service
     */
    GlobalService.prototype.store = function (url, data, option) {
        if (option === void 0) { option = {}; }
        var headerOptions = {
            headers: this.header
        };
        return this.http.post(url, data, headerOptions);
    };
    /**
     * update service
     */
    GlobalService.prototype.update = function (url, data) {
        var headerOptions = {
            headers: this.header
        };
        return this.http.post(url, data, headerOptions);
    };
    /**
     * remove service
     */
    GlobalService.prototype.destroy = function (url, id) {
        var headerOptions = {
            headers: this.header
        };
        return this.http.post(url + '/' + id, null, headerOptions);
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/shared/services/translation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/translation.service.ts ***!
  \********************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/shared/services/global.service.ts");




var TranslationService = /** @class */ (function () {
    function TranslationService(http, service) {
        this.http = http;
        this.service = service;
        this.$ = $;
    }
    /**
     * get services from api
     *
     */
    TranslationService.prototype.getList = function (data) {
        return this.service.get('translation/get', data);
    };
    /**
     * get services from api
     *
     */
    TranslationService.prototype.get = function () {
        return this.service.get('translation');
    };
    /**
     * store new service
     */
    TranslationService.prototype.update = function (data) {
        return this.service.store('translation/update', data);
    };
    TranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/esm5/ng2-flatpickr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-loader/main-loader.component */ "./src/app/shared/components/main-loader/main-loader.component.ts");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/confirm.service */ "./src/app/shared/services/confirm.service.ts");
/* harmony import */ var _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/tables-loader.directive */ "./src/app/shared/directives/tables-loader.directive.ts");
/* harmony import */ var _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/no-matching/app-no-matching.component */ "./src/app/shared/components/no-matching/app-no-matching.component.ts");
/* harmony import */ var _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/button-clicked-directive.directive */ "./src/app/shared/directives/button-clicked-directive.directive.ts");
/* harmony import */ var _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/load-more/load-more.component */ "./src/app/shared/components/load-more/load-more.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/replace-underscore-with-space.pipe */ "./src/app/shared/pipes/replace-underscore-with-space.pipe.ts");
/* harmony import */ var _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/trans.pipe */ "./src/app/shared/pipes/trans.pipe.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/permission.directive */ "./src/app/shared/directives/permission.directive.ts");
/* harmony import */ var _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/import-excel/import-excel.component */ "./src/app/shared/components/import-excel/import-excel.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/shared/components/table/table.component.ts");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/shared/components/paginator/paginator.component.ts");
/* harmony import */ var _components_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/export-excel/export-excel.component */ "./src/app/shared/components/export-excel/export-excel.component.ts");
/* harmony import */ var _components_font_resizer_font_resizer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/font-resizer/font-resizer.component */ "./src/app/shared/components/font-resizer/font-resizer.component.ts");
/* harmony import */ var _directives_auth_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/auth.directive */ "./src/app/shared/directives/auth.directive.ts");
/* harmony import */ var _components_toggle_col_toggle_col_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/toggle-col/toggle-col.component */ "./src/app/shared/components/toggle-col/toggle-col.component.ts");






























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmTemplateDirective"],
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"],
                _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__["TablesLoaderDirective"],
                _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__["LoadMoreComponent"],
                _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__["ReplaceUnderscoreWithSpacePipe"],
                _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__["NoMatchingComponent"],
                _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__["ButtonClickedDirective"],
                _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__["MainLoaderComponent"],
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_24__["TableComponent"],
                _components_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_26__["ExportExcelComponent"],
                _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__["ImportExcelComponent"],
                _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__["PaginatorComponent"],
                _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__["PermissionDirective"],
                _components_font_resizer_font_resizer_component__WEBPACK_IMPORTED_MODULE_27__["FontResizerComponent"],
                _directives_auth_directive__WEBPACK_IMPORTED_MODULE_28__["AuthDirective"],
                _components_toggle_col_toggle_col_component__WEBPACK_IMPORTED_MODULE_29__["ToggleColComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_20__["DataTablesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__["Ng2FlatpickrModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_1__["AngularFontAwesomeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_no_matching_app_no_matching_component__WEBPACK_IMPORTED_MODULE_14__["NoMatchingComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _directives_button_clicked_directive_directive__WEBPACK_IMPORTED_MODULE_15__["ButtonClickedDirective"],
                _components_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_16__["LoadMoreComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng2_flatpickr__WEBPACK_IMPORTED_MODULE_7__["Ng2FlatpickrModule"],
                _directives_tables_loader_directive__WEBPACK_IMPORTED_MODULE_13__["TablesLoaderDirective"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _services_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmTemplateDirective"],
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"],
                _components_main_loader_main_loader_component__WEBPACK_IMPORTED_MODULE_11__["MainLoaderComponent"],
                _pipes_replace_underscore_with_space_pipe__WEBPACK_IMPORTED_MODULE_18__["ReplaceUnderscoreWithSpacePipe"],
                _pipes_trans_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"],
                _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__["PaginatorComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_24__["TableComponent"],
                _components_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_26__["ExportExcelComponent"],
                _components_import_excel_import_excel_component__WEBPACK_IMPORTED_MODULE_22__["ImportExcelComponent"],
                _directives_auth_directive__WEBPACK_IMPORTED_MODULE_28__["AuthDirective"],
                _directives_permission_directive__WEBPACK_IMPORTED_MODULE_21__["PermissionDirective"],
                _components_font_resizer_font_resizer_component__WEBPACK_IMPORTED_MODULE_27__["FontResizerComponent"],
                _components_toggle_col_toggle_col_component__WEBPACK_IMPORTED_MODULE_29__["ToggleColComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/translation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/translation.ts ***!
  \***************************************/
/*! exports provided: Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");

var Translation = /** @class */ (function () {
    function Translation() {
    }
    /**
     * return application current language
     */
    Translation.getLang = function () {
        return 'en';
    };
    Translation.getTranslationsData = function () {
        var data = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_KEY);
        if (data)
            return data;
        else
            return {};
    };
    Translation.storeNewKey = function (key) {
        var data = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
        //console.log("data of translation: ", (data instanceof Object));
        if (!data) {
            data = [];
        }
        if (data) {
            data.push({
                key: key,
                name_ar: key,
                name_en: key
            });
        }
        else {
            data = [
                { key: key, name_ar: key, name_en: key }
            ];
        }
        // update translation cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].set(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY, data);
    };
    Translation.getNewKeys = function () {
        return src_app_shared_cache__WEBPACK_IMPORTED_MODULE_0__["Cache"].get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
    };
    Translation.TRANSLATION_DATA = {};
    Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY = 'translations_not_exists';
    Translation.TRANSLATION_CACHE_KEY = 'translations';
    return Translation;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n\n          <!-- Profile Image -->\n          <div class=\"box box-primary\">\n            <div class=\"box-body box-profile\">\n              <img class=\"profile-user-img img-responsive img-circle\" [src]=\"user.image_url\" alt=\"User profile picture\">\n\n              <h3 class=\"profile-username text-center\">{{ user.name }}</h3>\n\n              \n              <p class=\"text-muted text-center\">{{ user.role_id }}</p>\n \n              <ul class=\"list-group list-group-unbordered\">  \n                <li class=\"list-group-item w3-display-container\">\n                  <b class=\"\">\n                      <input \n                      type=\"file\"\n                      (change)=\"viewPersonalImage($event)\" \n                      accept=\"image/x-png,image/gif,image/jpeg\"  >\n                    </b> \n                    <a class=\"w3-display-topleft\">  \n                        <button mat-icon-button color=\"warn\" [disabled]=\"changeSettingLoad\" (click)=\"chanageProfileImage()\" >\n                            <i *ngIf=\"!changeSettingLoad\" class=\"fa fa-send-o\" > </i>\n                            <i *ngIf=\"changeSettingLoad\" class=\"fa fa-spin fa-spinner\" ></i>\n                          </button>   \n                    </a>\n                </li>  \n\n              </ul>\n\n              <a href=\"#\" class=\"btn btn-primary btn-block hidden\"><b>Follow</b></a>\n            </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n \n          <!-- About Me Box -->\n          <div class=\"box box-primary\">\n            <div class=\"box-header with-border\">\n              <h3 class=\"box-title\">{{ \"personal info\" | trans }}</h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"name\" | trans }}</strong> \n              <p class=\"text-muted\">\n                {{ user.name }}\n              </p>\n\n              <hr>\n \n              <strong><i class=\"fa fa-envelope margin-r-5\"></i> {{ \"email\" | trans  }}</strong> \n              <p class=\"text-muted\">\n                <a [href]=\"'mailto:' + user.email\">{{ user.email }}</a>  \n              </p>\n\n              <hr>\n               \n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"username\" | trans }}</strong> \n              <p class=\"text-muted\">\n                {{ user.username }}\n              </p>\n\n              <hr>\n               \n              <strong><i class=\"fa fa-book margin-r-5\"></i> {{ \"phone\" | trans }}</strong> \n              <p class=\"text-muted\">\n                {{ user.phone }}\n              </p>\n\n              <hr>\n\n\n              \n            </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-md-9\">\n\n          <div class=\"nav-tabs-custom\">\n            <ul class=\"nav nav-tabs\">\n              <li class=\"active\"><a href=\"#activity\" data-toggle=\"tab\">{{ \"Activities\" | trans }}</a></li>\n              <li class=\"\" ><a href=\"#loginHistory\" data-toggle=\"tab\">{{ \"login history\" | trans }}</a></li> \n              <li><a href=\"#timeline\" data-toggle=\"tab\">{{ \"setting\" | trans }}</a></li> \n               \n              <li><a href=\"#password\" data-toggle=\"tab\">{{ \"change password\" | trans }}</a></li>   \n            </ul>\n            <div class=\"tab-content\">\n              <div class=\"active tab-pane\" id=\"activity\"> \n                <!-- The timeline -->\n             <ul class=\"timeline timeline-inverse\">\n               <!-- timeline time label -->\n               \n                \n               <ng-container *ngFor=\"let item of profile.notifications\" > \n                <li class=\"time-label text-left\">\n                      <span class=\"bg-red\">\n                        {{ item.created_at | date: 'yyyy/m/d' }}\n                      </span>\n                </li> \n                <!-- timeline item -->\n                <li>\n                  <i class=\"{{ item.icon }}\"></i>\n \n                  <div class=\"timeline-item\">\n                    <span class=\"time\"><i class=\"fa fa-clock-o\"></i> {{ item.created_at | date: 'yyyy/m/d' }}</span>\n \n                    <h3 class=\"timeline-header\"><a href=\"#\">{{ item.title }}</a></h3>\n \n                    <div class=\"timeline-body\">\n                     {{ item.body }}\n                    </div> \n                  </div>\n                </li>\n                \n                   \n               </ng-container>\n                \n              \n             </ul>\n              </div> \n              <!-- /.tab-pane -->\n\n              \n          <div class=\"tab-pane  w3-white\" id=\"loginHistory\"> \n              <input class=\"form-control input-sm\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{ 'search' | trans }}\"> \n                \n              <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\n      \n                  <!-- Position Column -->\n                  <ng-container matColumnDef=\"created_at\"  >\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"datetime\" | trans }}</th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                       <span class=\"w3-margin-right\">\n                          {{element.created_at | date:'yyyy/m/d h:i:s'}} \n                      </span>\n                    </td>\n                  </ng-container>\n                    \n                  <!-- Position Column -->\n                  <ng-container matColumnDef=\"ip\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"ip\" | trans }}</th>\n                      <td mat-cell *matCellDef=\"let element\">  \n                        {{element.ip}} \n                      </td>\n                 </ng-container>\n                   \n                  <!-- Position Column -->\n                  <ng-container matColumnDef=\"phone_details\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"phone_details\" | trans }}</th>\n                      <td mat-cell *matCellDef=\"let element\">  \n                        <div [innerHTML]=\"element.phone_details\" > </div> \n                      </td>\n                 </ng-container>\n                  \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  \n            </div>\n \n            <div class=\"tab-pane\" id=\"password\">\n                <!-- The timeline -->   \n                    <div class=\"form-group has-feedback\">\n                        <label>{{ 'old password' | trans }}</label>\n                        <input required=\"\" type=\"password\" name=\"old_password\" [(ngModel)]=\"passwords.old_password\" autocomplete=\"off\"  class=\"form-control\" placeholder=\"{{ 'password' | trans }}\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <label>{{ 'new password' | trans }}</label>\n                        <input required=\"\" type=\"password\" name=\"new_password\" [(ngModel)]=\"passwords.new_password\"  autocomplete=\"off\" class=\"form-control\" placeholder=\"{{ 'confirm password' | trans }}\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <label>{{ 'confirm password' | trans }}</label>\n                        <input required=\"\" type=\"password\" name=\"confirm_password\" [(ngModel)]=\"passwords.confirm_password\"   autocomplete=\"off\" class=\"form-control\" placeholder=\"{{ 'confirm password' | trans }}\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <br>\n                    <div class=\"\">\n                        <!-- /.col -->\n                        <div class=\"form-group\">\n                            <button mat-raised-button color=\"primary\" [disabled]=\"changePasswordLoad\" (click)=\"changePassword()\" >\n                              <i *ngIf=\"!changePasswordLoad\">{{ 'submit' | trans }}</i>\n                              <i *ngIf=\"changePasswordLoad\" class=\"fa fa-spin fa-spinner\" ></i>\n                            </button> \n                        </div>\n                        <!-- /.col -->\n                    </div> \n              </div>\n\n              <div class=\"tab-pane\" id=\"timeline\">\n                  <!-- The timeline --> \n                    \n                      <div class=\"form-group has-feedback\">\n                          <label>{{ 'name' | trans }}</label>\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" placeholder=\"{{ 'name' | trans }}\"> \n                      </div>   \n                    \n                      <div class=\"form-group has-feedback\">\n                          <label>{{ 'phone' | trans }}</label>\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.phone\" placeholder=\"{{ 'name' | trans }}\"> \n                      </div>   \n                        \n                      <br>\n                      <div class=\"\">\n                          <!-- /.col -->\n                        <div class=\"form-group\">\n                            <button mat-raised-button color=\"primary\" [disabled]=\"changeSettingLoad\" (click)=\"chanageProfile()\" >\n                              <i *ngIf=\"!changeSettingLoad\">{{ 'submit' | trans }}</i>\n                              <i *ngIf=\"changeSettingLoad\" class=\"fa fa-spin fa-spinner\" ></i>\n                            </button> \n                        </div>\n                          <!-- /.col -->\n                      </div> \n                </div>\n                <!-- /.tab-pane -->\n   \n\n\n            </div>\n            <!-- /.tab-content -->\n          </div>\n\n\n\n\n\n\n          <!-- /.nav-tabs-custom -->\n        </div>\n        <!-- /.col -->\n      </div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.mat-elevation-z8 {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG5cbiAgdGggeyBcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejggeyBcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.service */ "./src/app/user-profile/user-profile.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service) {
        this.service = service;
        this.profile = {};
        this.login_historyies = [];
        this.user = {};
        this.passwords = {};
        this.changePasswordLoad = false;
        this.changeSettingLoad = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.login_historyies);
        this.initDisplayColumns();
    }
    UserProfileComponent.prototype.init = function () {
        this.initMatDatatable();
        this.user = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].user();
        this.loadProfile();
    };
    UserProfileComponent.prototype.initDisplayColumns = function () {
        this.displayedColumns = [
            "created_at", "ip", "phone_details"
        ];
    };
    UserProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.service.getProfile().subscribe(function (res) {
            _this.profile = res;
            _this.user = res.user;
            _this.login_historyies = res.loginHistory;
            _this.dataSource.data = res.loginHistory;
        });
    };
    UserProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.passwords.old_password || !this.passwords.new_password)
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all data'));
        if (this.passwords.new_password != this.passwords.confirm_password)
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('passwords not match'));
        this.changePasswordLoad = true;
        this.service.updatePassword(this.passwords).subscribe(function (res) {
            if (res.status == 1)
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changePasswordLoad = false;
        });
    };
    UserProfileComponent.prototype.chanageProfile = function () {
        var _this = this;
        this.changeSettingLoad = true;
        this.service.updateProfile(this.user).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
                _shared_cache__WEBPACK_IMPORTED_MODULE_7__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].USER_PRFIX, res.data);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changeSettingLoad = false;
        });
    };
    UserProfileComponent.prototype.chanageProfileImage = function () {
        var _this = this;
        this.changeSettingLoad = true;
        var data = new FormData();
        data.append('image', this.user.image);
        this.service.updateProfileImage(data).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
                _shared_cache__WEBPACK_IMPORTED_MODULE_7__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].USER_PRFIX, res.data);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.changeSettingLoad = false;
        });
    };
    UserProfileComponent.prototype.initMatDatatable = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    UserProfileComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserProfileComponent.prototype.setFile = function (event, key) {
        this.user[key] = event.target.files[0];
    };
    UserProfileComponent.prototype.viewPersonalImage = function (event) {
        var _this = this;
        this.setFile(event, 'image');
        var reader = new FileReader();
        reader.readAsDataURL(this.user.image);
        reader.onload = function (_event) {
            _this.user.image_url = reader.result;
        };
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.init();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserProfileComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UserProfileComponent.prototype, "sort", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-profile/user-profile.service.ts ***!
  \******************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");




var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
    }
    UserProfileService.prototype.getProfile = function () {
        return this.http.get("profile?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserProfileService.prototype.updateProfile = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update", data);
    };
    UserProfileService.prototype.updateProfileImage = function (data) {
        data.append('api_token', _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
        return this.http.post("profile/update", data);
    };
    UserProfileService.prototype.updatePassword = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update-password", data);
    };
    UserProfileService.prototype.updatePhone = function (data) {
        data.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        return this.http.post("profile/update-phone", data);
    };
    UserProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserProfileService);
    return UserProfileService;
}());



/***/ }),

/***/ "./src/app/user/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    RoleService.prototype.permissions = function () {
        return this.http.get('permissions?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * get services from api
     *
     */
    RoleService.prototype.groups = function () {
        return this.http.get('permission-groups?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * update permission new service
     */
    RoleService.prototype.updatePermission = function (id, data) {
        return this.http.post('roles/permission/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * get services from api
     *
     */
    RoleService.prototype.get = function () {
        return this.http.get('roles?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    RoleService.prototype.store = function (data) {
        return this.http.post('roles/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    RoleService.prototype.update = function (id, data) {
        return this.http.post('roles/update/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    RoleService.prototype.destroy = function (id) {
        return this.http.post('roles/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    UserService.prototype.get = function () {
        return this.http.get('users?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    UserService.prototype.store = function (data) {
        return this.http.post('users/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    UserService.prototype.update = function (id, data) {
        return this.http.post('users/update/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    UserService.prototype.destroy = function (id) {
        return this.http.post('users/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
    production: false,
    website: 'http://ufs.pixiagency.com/',
    //publicUrl   : window.location.origin,
    //apiUrl: window.location.origin + '/api',//'http://localhost/UFS-Back/public/api',
    publicUrl: 'http://localhost/UFS-Back/public',
    apiUrl: 'http://ufs.pixiagency.com/api',
    backEndPublicUrl: 'http://localhost:4000/',
    googleApiKey: 'AIzaSyAtCTUfmq6JOFrE9Ib_HPEPFhUE9VdwcEs'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elhar\Downloads\usf-front-main\usf-front-main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map