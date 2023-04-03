(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/admin/helpers/autoloader.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/helpers/autoloader.ts ***!
  \*********************************************/
/*! exports provided: Autoloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autoloader", function() { return Autoloader; });
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application */ "./src/app/admin/helpers/application.ts");



var Autoloader = /** @class */ (function () {
    function Autoloader() {
    }
    Autoloader.autoload = function (service) {
        if (!src_app_shared_auth__WEBPACK_IMPORTED_MODULE_0__["Auth"].getApiToken())
            return;
        // load companies
        if (!Autoloader.COMPANIES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('companies', { paging: '0' }),
                action: function (res) { Autoloader.COMPANIES = res; }
            });
        // load branches
        if (!Autoloader.BRANCHES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('branches'),
                action: function (res) { Autoloader.BRANCHES = res; }
            });
        // load payment-types
        if (!Autoloader.PAYMENT_TYPES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('payment-types'),
                action: function (res) { Autoloader.PAYMENT_TYPES = res; }
            });
        // load departments
        if (!Autoloader.DEPARTMENTS)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('departments'),
                action: function (res) { Autoloader.DEPARTMENTS = res; }
            });
        // load categories
        if (!Autoloader.CATEGORIES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('awb-categories'),
                action: function (res) { Autoloader.CATEGORIES = res; }
            });
        // load services
        if (!Autoloader.SERVICES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('services'),
                action: function (res) { Autoloader.SERVICES = res; }
            });
        // load cities
        if (!Autoloader.CITIES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('cities'),
                action: function (res) { Autoloader.CITIES = res; }
            });
        // load areas
        if (!Autoloader.AREAS)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('areas'),
                action: function (res) { Autoloader.AREAS = res; }
            });
        // load countries
        if (!Autoloader.COUNTRIES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('countries'),
                action: function (res) { Autoloader.COUNTRIES = res; }
            });
        // load expense-types
        if (!Autoloader.EXPENSES_TYPES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('expense-types'),
                action: function (res) { Autoloader.EXPENSES_TYPES = res; }
            });
        // load load status
        if (!Autoloader.STATUS)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('status'),
                action: function (res) { Autoloader.STATUS = res; }
            });
        // load load TRANS_TYPES
        if (!Autoloader.TRANS_TYPES)
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].addToQueue({
                observer: service.get('trans-types'),
                action: function (res) { Autoloader.TRANS_TYPES = res; }
            });
        // start load the queue
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_1__["Request"].fire(function () {
            _application__WEBPACK_IMPORTED_MODULE_2__["Application"].endLoading();
        });
    };
    //****  setter  */
    Autoloader.setCompanies = function (res) {
        Autoloader.COMPANIES = res;
    };
    Autoloader.setBranches = function (res) {
        Autoloader.BRANCHES = res;
    };
    Autoloader.setPaymentTypes = function (res) {
        Autoloader.PAYMENT_TYPES = res;
    };
    Autoloader.setDepartments = function (res) {
        Autoloader.DEPARTMENTS = res;
    };
    Autoloader.setCategories = function (res) {
        Autoloader.CATEGORIES = res;
    };
    Autoloader.setServices = function (res) {
        Autoloader.SERVICES = res;
    };
    Autoloader.setCities = function (res) {
        Autoloader.CITIES = res;
    };
    Autoloader.setAreas = function (res) {
        Autoloader.AREAS = res;
    };
    Autoloader.setCountries = function (res) {
        Autoloader.COUNTRIES = res;
    };
    Autoloader.setExpenses = function (res) {
        Autoloader.EXPENSES_TYPES = res;
    };
    Autoloader.setStatus = function (res) {
        Autoloader.STATUS = res;
    };
    Autoloader.setTransTypes = function (res) {
        Autoloader.TRANS_TYPES = res;
    };
    /***  getters */
    Autoloader.companies = function () {
        return Autoloader.COMPANIES;
    };
    Autoloader.branches = function () {
        return Autoloader.BRANCHES;
    };
    Autoloader.paymentTypes = function () {
        return Autoloader.PAYMENT_TYPES;
    };
    Autoloader.departments = function () {
        return Autoloader.DEPARTMENTS;
    };
    Autoloader.categories = function () {
        return Autoloader.CATEGORIES;
    };
    Autoloader.services = function () {
        return Autoloader.SERVICES;
    };
    Autoloader.cities = function () {
        return Autoloader.CITIES;
    };
    Autoloader.areas = function () {
        return Autoloader.AREAS;
    };
    Autoloader.countries = function () {
        return Autoloader.COUNTRIES;
    };
    Autoloader.expenses = function () {
        return Autoloader.EXPENSES_TYPES;
    };
    Autoloader.status = function () {
        return Autoloader.STATUS;
    };
    Autoloader.transTypes = function () {
        return Autoloader.TRANS_TYPES;
    };
    return Autoloader;
}());



/***/ }),

/***/ "./src/app/shared/request.ts":
/*!***********************************!*\
  !*** ./src/app/shared/request.ts ***!
  \***********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var Request = /** @class */ (function () {
    function Request() {
    }
    /**
     * add to queue
     * @param object {observer: any, action: function()}
     */
    Request.addToQueue = function (object) {
        if (!object.key)
            object.key = new Date().getMilliseconds();
        if (!object.times)
            object.times = 1;
        else
            object.times += 1;
        Request.queue.push(object);
        Request.isFired = true;
    };
    /**
     * start the queue
     *
     */
    Request.fire = function (action, asnc) {
        if (action === void 0) { action = null; }
        if (asnc === void 0) { asnc = false; }
        //if (Request.isFired)
        //  return;
        var object = Request.queue.pop();
        if (object) {
            object.observer.subscribe(function (res) {
                object.action(res);
            }, function (error) {
                console.log("errors : " + error.statusText);
                if (object.times <= 10 || error.status == 429)
                    Request.queue.push(object);
            }, function () {
                if (!asnc) {
                    console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
                    Request.fire(action, asnc);
                }
            });
            if (asnc) {
                console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
                Request.fire(action, asnc);
            }
        }
        else {
            Request.isFired = false;
            if (action)
                action();
            return;
        }
    };
    Request.queue = [];
    Request.isFired = false;
    return Request;
}());



/***/ }),

/***/ "./src/app/user/components/permission-group/permission-group.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/user/components/permission-group/permission-group.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block\" *ngIf=\"password == enterPassword\" >\r\n  <div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n\r\n    <div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n      <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n        <button\r\n        style=\"margin: 5px;padding: 7px\"\r\n          class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n          *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n          {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n    \r\n        <button\r\n        style=\"margin: 5px;padding: 7px\"\r\n        (click)=\"excel()\"\r\n          class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n          {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n        </button>\r\n    \r\n        <button\r\n        style=\"margin: 5px;padding: 7px\"\r\n        (click)=\"pdf()\"\r\n          class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n          {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n        </button>\r\n    \r\n        <button\r\n        style=\"margin: 5px;padding: 7px\"\r\n        (click)=\"print()\"\r\n          class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n          {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n        </button>\r\n    \r\n      </div>\r\n    \r\n    \r\n      <div class=\"w3-padding w3-display-topright\"    >\r\n        <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n      </div>\r\n    \r\n      <div class=\"text-center w3-padding\">\r\n        <b>\r\n          {{ title | trans }}\r\n        </b>\r\n        <br>\r\n        <br>\r\n      </div>\r\n    \r\n      <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n    \r\n        <tr class=\"w3-light-gray\" >\r\n          <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n          <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n          <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n          <th class=\"w3-padding\" >{{ \"sort\" | trans }}</th>\r\n          <th class=\"w3-padding\" >{{ \"is_admin\" | trans }}</th>\r\n          <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n        </tr>\r\n        <tr *ngIf=\"loading\"  >\r\n          <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n            <i class=\"fa fa-spin fa-spinner\"></i>\r\n          </td>\r\n        </tr>\r\n        <ng-container *ngFor=\"let item of data index as i\" >\r\n          <tr  *ngIf=\"!loading && search(item)\" >\r\n            <td>\r\n              <div class=\"w3-center text-center hidden\" >\r\n                <mat-slide-toggle\r\n                [checked]=\"selectedResources.has(item.id)\"\r\n                (change)=\"toggle(item)\"\r\n                ></mat-slide-toggle>\r\n              </div>\r\n              <mat-checkbox\r\n              [checked]=\"selectedResources.has(item.id)\"\r\n              (change)=\"toggle(item)\"></mat-checkbox>\r\n            </td>\r\n            <td>\r\n              <input\r\n              type=\"text\"\r\n              class=\"w3-block w3-border-0  text-center\"\r\n              readonly\r\n              [(ngModel)]=\"item.id\"  >\r\n              <span style=\"display: none;\" >{{ item.id }}</span>\r\n            </td>\r\n            <td>\r\n              <input\r\n              type=\"text\"\r\n              style=\"min-width: 200px;\"\r\n              class=\"w3-block w3-border-0 text-center\"\r\n              (change)=\"send(item)\"\r\n              [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n              [(ngModel)]=\"item.name\" >\r\n              <span style=\"display: none;\" >{{ item.name }}</span>\r\n            </td>\r\n            <td>\r\n              <input\r\n              type=\"number\"\r\n              style=\"min-width: 100px;\"\r\n              class=\"w3-block w3-border-0 text-center\"\r\n              (change)=\"send(item)\"\r\n              [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n              [(ngModel)]=\"item.sort\" >\r\n              <span style=\"display: none;\" >{{ item.sort }}</span>\r\n            </td>\r\n            <td>\r\n              <mat-checkbox\r\n              [checked]=\"item.is_admin\"\r\n              (change)=\"send(item)\"\r\n              [(ngModel)]=\"item.is_admin\"></mat-checkbox>\r\n            </td>\r\n            <td>\r\n              <button\r\n              class=\"fa fa-trash w3-button\"\r\n              *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n    \r\n      </table>\r\n    </div>\r\n    <br>\r\n    <button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n    \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"w3-block w3-white w3-padding material-shadow\" *ngIf=\"password != enterPassword\" >\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <div class=\"form-group w3-xlarge\">\r\n    <label for=\"\" class=\"text-capitalize\" >enter permission password</label>\r\n    <input type=\"password\" class=\"form-control\" placeholder=\"enter permission password\" [(ngModel)]=\"enterPassword\" >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/components/permission-group/permission-group.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/user/components/permission-group/permission-group.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wZXJtaXNzaW9uLWdyb3VwL3Blcm1pc3Npb24tZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/permission-group/permission-group.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user/components/permission-group/permission-group.component.ts ***!
  \********************************************************************************/
/*! exports provided: PermissionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGroupComponent", function() { return PermissionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var PermissionGroupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PermissionGroupComponent, _super);
    function PermissionGroupComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "permission groups";
        // permission password
        _this.password = "yuri200525";
        _this.enterPassword = "";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_group_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_group_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_group_remove');
        //
        _this.baseApiUrl = "permission-groups";
        _this.displayCreate = true;
        if (window.location.host.indexOf('localhost') >= 0) {
            _this.enterPassword = _this.password;
        }
        return _this;
    }
    PermissionGroupComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PermissionGroupComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.get();
    };
    PermissionGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permission-group',
            template: __webpack_require__(/*! ./permission-group.component.html */ "./src/app/user/components/permission-group/permission-group.component.html"),
            styles: [__webpack_require__(/*! ./permission-group.component.scss */ "./src/app/user/components/permission-group/permission-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], PermissionGroupComponent);
    return PermissionGroupComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/user/components/permission/permission.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user/components/permission/permission.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"col-lg-12 col-md-12  \" \r\n*ngIf=\"password == enterPassword\"\r\nstyle=\"padding: 0px!important\">\r\n  \r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'search' | trans }}</label>\r\n      <br>\r\n      <input type=\"text\"\r\n      [(ngModel)]=\"filter.search\"\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n      placeholder=\"{{ 'search' | trans }}\" >\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'filter with group' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.group_id\" >\r\n        <option *ngFor=\"let row of permissionGroups\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"display_name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"group\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item) && (item.group_id == filter.group_id || !filter.group_id)\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.display_name\" >\r\n          <span style=\"display: none;\" >{{ item.display_name }}</span>\r\n        </td>\r\n        <td>\r\n          <select\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.group_id\" >\r\n          <option *ngFor=\"let row of permissionGroups\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n        </select>\r\n          <span style=\"display: none;\" >{{ item.group_id }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<div class=\"w3-block w3-white w3-padding material-shadow\" *ngIf=\"password != enterPassword\" >\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <div class=\"form-group w3-xlarge\">\r\n    <label for=\"\" class=\"text-capitalize\" >enter permission password</label>\r\n    <input type=\"password\" class=\"form-control\" placeholder=\"enter permission password\" [(ngModel)]=\"enterPassword\" >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/components/permission/permission.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user/components/permission/permission.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wZXJtaXNzaW9uL3Blcm1pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/permission/permission.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/components/permission/permission.component.ts ***!
  \********************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var PermissionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PermissionComponent, _super);
    function PermissionComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.permissionGroups = [];
        _this.title = "permissions";
        // permission password
        _this.password = "yuri200525";
        _this.enterPassword = "";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('permission_remove');
        //
        _this.baseApiUrl = "permissions";
        _this.displayCreate = true;
        if (window.location.host.indexOf('localhost') >= 0) {
            _this.enterPassword = _this.password;
        }
        return _this;
    }
    PermissionComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PermissionComponent.prototype.loadGroups = function () {
        var _this = this;
        this.service.get("permission-groups").subscribe(function (res) {
            _this.permissionGroups = res;
        });
    };
    PermissionComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadGroups();
        this.get();
    };
    PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/user/components/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/user/components/permission/permission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], PermissionComponent);
    return PermissionComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/user/components/role/permission/permissions.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permissions.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"w3-block\">\r\n  <div class=\"w3-white material-shadow safe-box\">\r\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n      {{ \"permissions\" | trans }} <i class=\"fa fa-angle-left\" ></i> {{ role.name }}\r\n    </div>\r\n    <div class=\"border-bottom-dashed\"></div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4\" *ngFor=\"let group of groups\" >\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel group-{{ group.id }}\">\r\n          <div class=\"custom-panel-title\">\r\n            <mat-slide-toggle\r\n                      #selectAllMatSlider\r\n                      (change)=\"selectAll(group, selectAllMatSlider.checked)\" ></mat-slide-toggle>\r\n                      {{ group.name }}\r\n          </div>\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 250px;\" >\r\n            <br>\r\n            <ul class=\"w3-ul\">\r\n              <li *ngFor=\"let item of group.permissions\" >\r\n                <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                    <mat-slide-toggle\r\n                      [checked]=\"permissionId.has(item.id)\"\r\n                      (change)=\"togglePermissions(item.id)\" ></mat-slide-toggle>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <div class=\"media-heading text-right \">{{ item.display_name }}</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n             </ul>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"box-footer\">\r\n      <button [disabled]=\"isSubmitted\" (click)=\"updatePermissions()\" type=\"submit\" class=\"btn btn-primary\">\r\n        <i *ngIf=\"!isSubmitted\" >{{ \"add\" | trans }}</i>\r\n        <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n      </button>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/components/role/permission/permissions.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permissions.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px;\n}\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important;\n}\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important;\n}\n\n.border-dashed {\n  border: 2px dashed lightgray !important;\n}\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important;\n}\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important;\n}\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999;\n}\n\n.custom-panel-body {\n  padding: 5px;\n}\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important;\n}\n\n.search-input {\n  min-width: 70% !important;\n}\n\n.border-gray {\n  border: 1px solid gray !important;\n}\n\n.custom-input {\n  min-width: 120px;\n}\n\n.modal {\n  overflow: auto !important;\n}\n\n/*\n  custom button style\n*/\n\nselect, input[type=file] {\n  padding: 0px !important;\n}\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto;\n}\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto;\n}\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important;\n}\n\n.number_input {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcGVybWlzc2lvbi9FOlxccHJvamVjdHNcXHVzZi1mcm9udCAtIENvcHkvc3JjXFxhcHBcXHVzZXJcXGNvbXBvbmVudHNcXHJvbGVcXHBlcm1pc3Npb25cXHBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvcm9sZS9wZXJtaXNzaW9uL3Blcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURHQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVEQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBOztDQUFBOztBQUlBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvcm9sZS9wZXJtaXNzaW9uL3Blcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG59XG5cbi5jdXN0b20tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG4vKlxuICBjdXN0b20gYnV0dG9uIHN0eWxlXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWx0ZXItdG9wIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbHRlci1zaWRlIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubnVtYmVyX2lucHV0IHtcbiAgd2lkdGg6IDQ1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/components/role/permission/permissions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permissions.component.ts ***!
  \**************************************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");





var PermissionsComponent = /** @class */ (function () {
    function PermissionsComponent(service) {
        this.service = service;
        this.role = {};
        this.updateMode = false;
        this.loadResources = false;
        this.doc = document;
        this.$ = $;
        this.permissions = [];
        this.permissionId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.groups = [];
        this.isSubmitted = false;
    }
    PermissionsComponent.prototype.setPermission = function () {
        var _this = this;
        this.permissionId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (!this.role)
            return;
        if (!this.role.permissions)
            return;
        this.role.permissions.forEach(function (element) {
            _this.permissionId.put(element.id, element.id);
        });
    };
    PermissionsComponent.prototype.updatePermissions = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = {
            permissions: this.permissionId.getKeys()
        };
        this.service.updatePermission(this.role.id, data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
                _this.loadResources();
            }
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            _this.isSubmitted = false;
        });
    };
    PermissionsComponent.prototype.togglePermissions = function (id) {
        if (this.permissionId.has(id))
            this.permissionId.remove(id);
        else
            this.permissionId.put(id, id);
        //this.updatePermissions();
    };
    PermissionsComponent.prototype.loadPermissions = function () {
        var _this = this;
        this.service.permissions().subscribe(function (res) {
            _this.permissions = res;
        });
    };
    PermissionsComponent.prototype.loadGroups = function () {
        var _this = this;
        this.service.groups().subscribe(function (res) {
            _this.groups = res;
        });
    };
    PermissionsComponent.prototype.ngOnInit = function () {
        this.loadPermissions();
        this.loadGroups();
    };
    PermissionsComponent.prototype.ngOnChanges = function () {
        this.setPermission();
    };
    PermissionsComponent.prototype.selectAll = function (group, checked) {
        var _this = this;
        group.permissions.forEach(function (element) {
            if (checked)
                _this.permissionId.put(element.id, element.id);
            else if (_this.permissionId.has(element.id))
                _this.permissionId.remove(element.id);
        });
        //this.updatePermissions();
    };
    PermissionsComponent.prototype.changeMode = function () {
        this.updateMode = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionsComponent.prototype, "role", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionsComponent.prototype, "updateMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionsComponent.prototype, "loadResources", void 0);
    PermissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permissions',
            template: __webpack_require__(/*! ./permissions.component.html */ "./src/app/user/components/role/permission/permissions.component.html"),
            styles: [__webpack_require__(/*! ./permissions.component.scss */ "./src/app/user/components/role/permission/permissions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], PermissionsComponent);
    return PermissionsComponent;
}());



/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- form modal -->\r\n<div class=\"modal fade\" id=\"{{ isUpdate? 'update' : 'create' }}Modal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">\r\n          <span *ngIf=\"isUpdate\" >{{ \"edit role\" | trans }}</span>\r\n          <span *ngIf=\"!isUpdate\" >{{ \"add role\" | trans }}</span>\r\n\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>{{ \"name\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\" >{{ \"close\" | trans }}</button>\r\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"send()\" >{{ \"add\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3JvbGUtZm9ybS9yb2xlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");






var RoleFormComponent = /** @class */ (function () {
    function RoleFormComponent(roleService) {
        this.roleService = roleService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.isSubmitted = false;
        this.requiredFields = [
            'name'
        ];
        this.resource = {};
        this.isUpdate = false;
    }
    RoleFormComponent.prototype.ngOnInit = function () {
    };
    RoleFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.resource[element])
                valid = false;
        });
        return valid;
    };
    RoleFormComponent.prototype.send = function () {
        if (!this.isUpdate)
            this.store();
        else
            this.update();
    };
    RoleFormComponent.prototype.store = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.roleService.store(this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.resource = {};
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    RoleFormComponent.prototype.update = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.roleService.update(this.resource.id, this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    /**
     * convert object to form data
     *
     */
    RoleFormComponent.prototype.toFormData = function () {
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.resource); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.resource[key])
                data.append(key, this.resource[key]);
        }
        return data;
    };
    /**
     * close modal
     */
    RoleFormComponent.prototype.closeModal = function () {
        var id = this.isUpdate ? '#updateModal' : '#createModal';
        this.doc.jquery(id).modal('hide');
    };
    /**
     * load personal image
     */
    RoleFormComponent.prototype.viewImage = function (event) {
        _shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loadImage(event, 'image', this.resource);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "updateResources", void 0);
    RoleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-form',
            template: __webpack_require__(/*! ./role-form.component.html */ "./src/app/user/components/role/role-form/role-form.component.html"),
            styles: [__webpack_require__(/*! ./role-form.component.scss */ "./src/app/user/components/role/role-form/role-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], RoleFormComponent);
    return RoleFormComponent;
}());



/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" *ngIf=\"!updateMode\"></app-breadcrumb>\r\n\r\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList2\" *ngIf=\"updateMode\" ></app-breadcrumb>\r\n\r\n<div class=\"box box-primary material-shadow w3-white table-responsive\" *ngIf=\"!updateMode\" >\r\n  <div class=\"box-header\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  >\r\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n  <br>\r\n\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8 w3-white\" style=\"padding: 7px\" *ngIf=\"!updateMode\" >\r\n  <input  class=\"form-control\"\r\n  (keyup)=\"search($event.target.value)\" placeholder=\"{{ 'search' | trans }}\">\r\n  <br>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"name\" sticky>\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"name\" | trans }}</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <span class=\"w3-margin-right\">\r\n              {{element.name}}\r\n          </span>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n              <button mat-button color=\"info\"  (click)=\"edit(element)\" >\r\n                <i class=\"fa fa-edit\"></i>\r\n              </button>\r\n              <button mat-button color=\"info\"  (click)=\"permission(element)\" >\r\n                <i class=\"fa fa-th-list\"></i>\r\n              </button>\r\n              <button mat-button color=\"warn\" *ngIf=\"element.can_delete\" (click)=\"destroy(element.id)\" >\r\n                <i class=\"fa fa-trash\"></i>\r\n              </button>\r\n          </td>\r\n     </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n\r\n<div class=\"w3-white\" *ngIf=\"updateMode\" >\r\n  <button (click)=\"updateMode=false\" class=\"w3-white shadow w3-margin w3-large btn\"  >\r\n    <i class=\"fa fa-angle-right\" ></i> {{ \"back\" | trans }}\r\n </button>\r\n  <app-permissions [role]=\"permissionItem\" [updateMode]=\"updateMode\" [loadResources]=\"updateResources\" ></app-permissions>\r\n</div>\r\n\r\n\r\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"updateItem\" [isUpdate]=\"true\" ></app-role-form>\r\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"{}\" [isUpdate]=\"false\" ></app-role-form>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.mat-elevation-z8 {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcm9sZS1pbmRleC9FOlxccHJvamVjdHNcXHVzZi1mcm9udCAtIENvcHkvc3JjXFxhcHBcXHVzZXJcXGNvbXBvbmVudHNcXHJvbGVcXHJvbGUtaW5kZXhcXHJvbGUtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3JvbGUtaW5kZXgvcm9sZS1pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3JvbGUtaW5kZXgvcm9sZS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoleIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleIndexComponent", function() { return RoleIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");









var RoleIndexComponent = /** @class */ (function () {
    function RoleIndexComponent(roleService, router) {
        var _this = this;
        this.roleService = roleService;
        this.router = router;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        // Resources list
        this.resources = null;
        this.updateMode = false;
        // init breadcrum
        this.breadcrumbList = [];
        this.breadcrumbList2 = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.removed = [];
        // update
        this.updateItem = {};
        this.permissionItem = {};
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.resources);
        // init breadcrum
        this.initBreadcrumb();
        this.initDisplayColumns();
        this.initMatDatatable();
        this.updateResources = function () {
            _this.loadResources();
        };
    }
    RoleIndexComponent.prototype.initMatDatatable = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    RoleIndexComponent.prototype.initBreadcrumb = function () {
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'roles' }
        ];
    };
    RoleIndexComponent.prototype.initDisplayColumns = function () {
        this.displayedColumns = [
            'name', 'action'
        ];
    };
    RoleIndexComponent.prototype.refreshDataSource = function (data) {
        this.resources = data;
        this.dataSource.data = data;
    };
    RoleIndexComponent.prototype.destroy = function (id) {
        var _this = this;
        this.doc.swal.confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            _this.roleService.destroy(id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].success(res.message);
                    _this.loadResources();
                }
                else
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].error(res.message);
            });
        });
    };
    RoleIndexComponent.prototype.loadResources = function () {
        var _this = this;
        this.roleService.get().subscribe(function (res) {
            _this.resources = res;
            _this.dataSource.data = res;
            //
            _this.refreshDataSource(res);
        });
    };
    RoleIndexComponent.prototype.edit = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    RoleIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
        this.searchKey = "";
    };
    RoleIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
    };
    RoleIndexComponent.prototype.search = function (filterValue) {
        if (this.dataSource)
            this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    RoleIndexComponent.prototype.permission = function (item) {
        this.breadcrumbList2 = [
            { name: 'home', url: '/' },
            { name: 'roles', url: '/users/role' },
            { name: item.name }
        ];
        this.updateMode = true;
        this.permissionItem = item;
        this.doc.jquery('#permissionModal').modal('show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], RoleIndexComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], RoleIndexComponent.prototype, "sort", void 0);
    RoleIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-index',
            template: __webpack_require__(/*! ./role-index.component.html */ "./src/app/user/components/role/role-index/role-index.component.html"),
            styles: [__webpack_require__(/*! ./role-index.component.scss */ "./src/app/user/components/role/role-index/role-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoleIndexComponent);
    return RoleIndexComponent;
}());



/***/ }),

/***/ "./src/app/user/components/role/role.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user/components/role/role.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" *ngIf=\"!updateMode\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name_en\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"display_name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"company\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"permissions\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item)\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.display_name\" >\r\n          <span style=\"display: none;\" >{{ item.display_name }}</span>\r\n        </td>\r\n        <td>\r\n          <select\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.company_id\" >\r\n          <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n        </select>\r\n          <span style=\"display: none;\" >{{ item.group_id }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-th-list w3-button\"\r\n           (click)=\"permission(item)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n\r\n  <div class=\"w3-white\" *ngIf=\"updateMode\" >\r\n    <button (click)=\"updateMode=false\" class=\"w3-white shadow w3-margin w3-large btn\"  >\r\n      <i class=\"fa fa-angle-right\" ></i> {{ \"back\" | trans }}\r\n  </button>\r\n    <app-permissions [role]=\"permissionItem\" [updateMode]=\"updateMode\" [loadResources]=\"loadResources\" ></app-permissions>\r\n  </div>\r\n\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd && !updateMode\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/components/role/role.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/components/role/role.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3JvbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/role/role.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/role/role.component.ts ***!
  \********************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "roles";
        _this.updateMode = false;
        _this.permissionItem = {};
        _this.doc = document;
        _this.companies = [];
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('role_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('role_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('role_remove');
        //
        _this.baseApiUrl = "roles";
        _this.loadResources = function () {
            _this.get();
        };
        return _this;
    }
    RoleComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get('companies').subscribe(function (res) {
            _this.companies = res;
        });
        this.initBreadCrumb();
        this.get();
    };
    RoleComponent.prototype.permission = function (item) {
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'roles', url: '/users/role' },
            { name: item.name }
        ];
        this.updateMode = true;
        this.permissionItem = item;
        this.doc.jquery('#permissionModal').modal('show');
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/user/components/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.scss */ "./src/app/user/components/role/role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], RoleComponent);
    return RoleComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/user/components/user-history/user-history.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/components/user-history/user-history.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block w3-row\">\r\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\r\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n      {{ \"users history\" | trans }}\r\n    </div>\r\n    <div class=\"border-bottom-dashed\"></div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\r\n            <table class=\"table-bordered\" >\r\n              <thead>\r\n                <th>#</th>\r\n                <th>{{ \"name\" | trans }}</th>\r\n                <th>{{ \"start_date\" | trans }}</th>\r\n                <th>{{ \"end_date\" | trans }}</th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" ></button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/components/user-history/user-history.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/components/user-history/user-history.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyLWhpc3RvcnkvdXNlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/components/user-history/user-history.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/components/user-history/user-history.component.ts ***!
  \************************************************************************/
/*! exports provided: UserHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryComponent", function() { return UserHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHistoryComponent = /** @class */ (function () {
    function UserHistoryComponent() {
    }
    UserHistoryComponent.prototype.ngOnInit = function () {
    };
    UserHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-history',
            template: __webpack_require__(/*! ./user-history.component.html */ "./src/app/user/components/user-history/user-history.component.html"),
            styles: [__webpack_require__(/*! ./user-history.component.scss */ "./src/app/user/components/user-history/user-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHistoryComponent);
    return UserHistoryComponent;
}());



/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- form modal -->\r\n<div class=\"modal fade\" id=\"userModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content light-gray w3-animate-top\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">\r\n          <span *ngIf=\"isUpdate\" >{{ \"edit user\" | trans }}</span>\r\n          <span *ngIf=\"!isUpdate\" >{{ \"add user\" | trans }}</span>\r\n\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <div class=\"w3-center\">\r\n          <img src=\"{{ resource.photo_url }}\" alt=\"\" style=\"width: 100px;\" class=\"w3-round\" >\r\n        </div>\r\n        <br>\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>{{ \"photo\" | trans }} </th>\r\n            <td>\r\n              <input type=\"file\"\r\n              (change)=\"loadFile($event, 'photo', resource)\"\r\n              class=\"form-control input-sm\"  [(ngModel)]=\"resource.photo\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"name\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"username\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.username\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"password\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"password\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.password\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"address\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"phone\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"email\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"company\" | trans }} *</th>\r\n            <td>\r\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.company_id\"  >\r\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"branch\" | trans }} *</th>\r\n            <td>\r\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.branch_id\"  >\r\n                <ng-container *ngFor=\"let item of branches\">\r\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                </ng-container>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"department\" | trans }} *</th>\r\n            <td>\r\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.department_id\"  >\r\n                <ng-container *ngFor=\"let item of departments\">\r\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                </ng-container>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"role\" | trans }}</th>\r\n            <td>\r\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.role_id\"  >\r\n                <ng-container *ngFor=\"let item of roles\">\r\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                </ng-container>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"notes\" | trans }}</th>\r\n            <td>\r\n              <textarea  class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" ></textarea>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"active\" | trans }} </th>\r\n            <td>\r\n              <mat-slide-toggle\r\n              [(ngModel)]=\"resource.active\"\r\n              ></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer text-center w3-center\">\r\n\r\n          <button type=\"button\"\r\n          class=\"\"\r\n          style=\"margin: 5px\"\r\n          mat-raised-button\r\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\r\n\r\n          <button class=\"w3-indigo\"\r\n          [disabled]=\"isSubmit\"\r\n          style=\"margin: 5px\"\r\n          mat-raised-button\r\n          (click)=\"send(resource, true)\" >\r\n          <span *ngIf=\"!isSubmit\" >\r\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\r\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\r\n          </span>\r\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\r\n        </button>\r\n\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");





var UserFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserFormComponent, _super);
    function UserFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add user";
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.roles = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "users";
        if (_this.isUpdate)
            _this.title = "update user";
        _this.requiredFields = [
            'name', 'password', 'username', 'address', 'phone', 'email', 'company_id', 'branch_id', 'department_id'
        ];
        return _this;
    }
    UserFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'users', url: '/user' },
            { name: this.title, url: '#', active: true },
        ];
    };
    UserFormComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches())
            this.branches = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches();
        else
            this.service.get("branches").subscribe(function (res) {
                _this.branches = res;
            });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].departments())
            this.departments = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].departments();
        else
            this.service.get("departments").subscribe(function (res) {
                _this.departments = res;
            });
        this.service.get("roles").subscribe(function (res) {
            _this.roles = res;
        });
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
    };
    UserFormComponent.prototype.updateAction = function (res) {
        this.$('#userModal').modal('hide');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "action", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user/components/user/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/user/components/user/user-form/user-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], UserFormComponent);
    return UserFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/user/components/user/user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user/components/user/user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-3 col-md-3\">\r\n      <label>{{ 'search' | trans }}</label>\r\n      <br>\r\n      <input type=\"text\"\r\n      [(ngModel)]=\"filter.search\"\r\n      (change)=\"get(true)\"\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n      placeholder=\"{{ 'search' | trans }}\" >\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-3\">\r\n      <label>{{ 'filter with department' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      (change)=\"get(true)\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.deparmtent_id\" >\r\n        <option *ngFor=\"let row of departments\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-3\">\r\n      <label>{{ 'filter with company' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      (change)=\"get(true)\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.company_id\" >\r\n        <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-3\">\r\n      <label>{{ 'filter with branch' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      (change)=\"get(true)\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.branch_id\" >\r\n        <ng-container *ngFor=\"let row of branches\" >\r\n          <option *ngIf=\"row.company_id == filter.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n        </ng-container>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n\r\n  <app-table [crud]=\"this\" ></app-table>\r\n</div>\r\n\r\n</div>\r\n<app-user-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" ></app-user-form>\r\n"

/***/ }),

/***/ "./src/app/user/components/user/user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/components/user/user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "users";
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('user_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('user_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('user_remove');
        //
        _this.baseApiUrl = "users";
        _this.requiredFields = [
            'name', 'username', 'address', 'phone', 'email', 'company_id', 'branch_id', 'department_id'
        ];
        _this.initFillable();
        return _this;
    }
    UserComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    UserComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'photo_url', type: 'image' },
            { name: 'name' },
            { name: 'username' },
            { name: 'email' },
            { name: 'address' },
            { name: 'department', object: true, data: 'name' },
            { name: 'branch', object: true, data: 'name' },
            { name: 'company', object: true, data: 'name' },
            { name: 'role', object: true, data: 'name' },
            { name: 'active', type: 'checkbox' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    UserComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches())
            this.branches = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches();
        else
            this.service.get("branches").subscribe(function (res) {
                _this.branches = res;
            });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments())
            this.departments = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments();
        else
            this.service.get("departments").subscribe(function (res) {
                _this.departments = res;
            });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
        this.filter = {};
    };
    UserComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1 };
        this.$('#userModal').modal('show');
    };
    UserComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#userModal').modal('show');
    };
    UserComponent.prototype.show = function (item) {
        this.edit(item);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/components/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], UserComponent);
    return UserComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");
/* harmony import */ var _components_permission_group_permission_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permission-group/permission-group.component */ "./src/app/user/components/permission-group/permission-group.component.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/user/components/permission/permission.component.ts");
/* harmony import */ var _components_role_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/role/role.component */ "./src/app/user/components/role/role.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/user/components/user/user.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");










var routes = [
    {
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        children: [
            {
                path: 'user',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('user_read') },
                component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"]
            },
            {
                path: 'role',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('role_read') },
                component: _components_role_role_component__WEBPACK_IMPORTED_MODULE_7__["RoleComponent"]
            },
            {
                path: 'permission',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('permission_read') },
                component: _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_6__["PermissionComponent"]
            },
            {
                path: 'permission-group',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('permission_group_read') },
                component: _components_permission_group_permission_group_component__WEBPACK_IMPORTED_MODULE_5__["PermissionGroupComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <!-- /.col -->\r\n  <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- /.col -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/user-form/user-form.component */ "./src/app/user/components/user/user-form/user-form.component.ts");
/* harmony import */ var _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/role/role-index/role-index.component */ "./src/app/user/components/role/role-index/role-index.component.ts");
/* harmony import */ var _components_role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/role/role-form/role-form.component */ "./src/app/user/components/role/role-form/role-form.component.ts");
/* harmony import */ var _components_role_permission_permissions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/role/permission/permissions.component */ "./src/app/user/components/role/permission/permissions.component.ts");
/* harmony import */ var _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-history/user-history.component */ "./src/app/user/components/user-history/user-history.component.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/user/components/permission/permission.component.ts");
/* harmony import */ var _components_role_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/role/role.component */ "./src/app/user/components/role/role.component.ts");
/* harmony import */ var _components_permission_group_permission_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/permission-group/permission-group.component */ "./src/app/user/components/permission-group/permission-group.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/user/components/user/user.component.ts");
















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"],
                _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
                _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_8__["RoleIndexComponent"],
                _components_role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_9__["RoleFormComponent"],
                _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_12__["PermissionComponent"],
                _components_role_permission_permissions_component__WEBPACK_IMPORTED_MODULE_10__["PermissionsComponent"],
                _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_11__["UserHistoryComponent"],
                _components_role_role_component__WEBPACK_IMPORTED_MODULE_13__["RoleComponent"],
                _components_permission_group_permission_group_component__WEBPACK_IMPORTED_MODULE_14__["PermissionGroupComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map