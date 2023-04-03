(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");




var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <!-- /.login-logo -->\n    <div class=\"login-box-body material-shadow w3-animate-zoom\">\n        <div class=\"login-logo w3-animate-top\">\n            <img src=\"/assets/img/logo.png\" alt=\"\" style=\"width: 90px\">\n            <br>\n            <a href=\"#\" class=\"w3-text-gray text-capitalize w3-xxxlarge w3-text-dark\"><b> UFS  </b></a>\n        </div>\n        <p class=\"login-box-msg\"><b>{{ 'login with account' | trans }}</b></p>\n\n        <div class=\"form-group has-feedback\">\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"userAuth.email\" placeholder=\"{{ 'email' | trans }}\">\n            <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userAuth.password\" (keyup.enter)=\"login()\" placeholder=\"{{ 'password' | trans }}\">\n            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n                <div class=\"checkbox icheck\">\n                    <!--\n              <label class=\"\">\n                <div class=\"icheckbox_square-blue\" aria-checked=\"false\" aria-disabled=\"false\" style=\"position: relative;\"><input type=\"checkbox\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"><ins class=\"iCheck-helper\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins></div>\n                Remember Me\n              </label>\n              -->\n                </div>\n            </div>\n            <!-- /.col -->\n            <div class=\"col-xs-4\">\n                <button type=\"button\" (click)=\"login()\" [disabled]=\"isSubmitted\" class=\"btn btn-primary btn-block btn-flat\">{{ 'Sign In' | trans }}</button>\n            </div>\n            <!-- /.col -->\n        </div>\n\n        <!-- /.social-auth-links\n\n      <a href=\"#\">I forgot my password</a><br>\n      <a href=\"register.html\" class=\"text-center\">Register a new membership</a>\n  -->\n    </div>\n    <!-- /.login-box-body -->\n</div>"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route, service, router) {
        this.authService = authService;
        this.route = route;
        this.service = service;
        this.router = router;
        this.userAuth = {};
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        this.isSubmitted = false;
        if (src_app_shared_auth__WEBPACK_IMPORTED_MODULE_7__["Auth"].getApiToken())
            this.router.navigate(['/dashboard'], {}).then().catch();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.doc.jquery('body').addClass('login-background');
        this.route.queryParams.subscribe(function (params) {
            // noinspection TsLint
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isSubmitted = true;
        this.authService.login(this.userAuth).subscribe(function (result) {
            var data = result;
            if (data.status == 1) {
                // cache user
                _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].USER_PRFIX, data.data);
                // cache api token
                _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].set(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"].API_TOKEN_PRFIX, data.data.api_token);
                // start autoloader
                window.location.href = "/dashboard";
                /*setTimeout(() => {
                  Autoloader.autoload(this.service);
                }, 1000);*/
                //this.router.navigate(['/dashboard']).then().catch();
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            }
            _this.isSubmitted = false;
        }, function (e) {
            _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(e);
            _this.isSubmitted = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map