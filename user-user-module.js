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
                // console.log("errors : " + error.statusText);
                if (object.times <= 10 || error.status == 429)
                    Request.queue.push(object);
            }, function () {
                if (!asnc) {
                    // console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
                    Request.fire(action, asnc);
                }
            });
            if (asnc) {
                // console.log("queue size : " + (Request.queue.length) + ", key : " + object.key + ", times : " + object.times);
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

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n<div class=\"w3-block\" *ngIf=\"password == enterPassword\" >\n  <div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n\n    <div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n      <div class=\"w3-block w3-padding w3-display-topright\"   >\n        <button\n        style=\"margin: 5px;padding: 7px\"\n          class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n          *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n          {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n        </button>\n    \n        <button\n        style=\"margin: 5px;padding: 7px\"\n        (click)=\"excel()\"\n          class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n          {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n        </button>\n    \n        <button\n        style=\"margin: 5px;padding: 7px\"\n        (click)=\"pdf()\"\n          class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n          {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n        </button>\n    \n        <button\n        style=\"margin: 5px;padding: 7px\"\n        (click)=\"print()\"\n          class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n          {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n        </button>\n    \n      </div>\n    \n    \n      <div class=\"w3-padding w3-display-topright\"    >\n        <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\n      </div>\n    \n      <div class=\"text-center w3-padding\">\n        <b>\n          {{ title | trans }}\n        </b>\n        <br>\n        <br>\n      </div>\n    \n      <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n    \n        <tr class=\"w3-light-gray\" >\n          <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n          <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n          <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\n          <th class=\"w3-padding\" >{{ \"sort\" | trans }}</th>\n          <th class=\"w3-padding\" >{{ \"is_admin\" | trans }}</th>\n          <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n        </tr>\n        <tr *ngIf=\"loading\"  >\n          <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n            <i class=\"fa fa-spin fa-spinner\"></i>\n          </td>\n        </tr>\n        <ng-container *ngFor=\"let item of data index as i\" >\n          <tr  *ngIf=\"!loading && search(item)\" >\n            <td>\n              <div class=\"w3-center text-center hidden\" >\n                <mat-slide-toggle\n                [checked]=\"selectedResources.has(item.id)\"\n                (change)=\"toggle(item)\"\n                ></mat-slide-toggle>\n              </div>\n              <mat-checkbox\n              [checked]=\"selectedResources.has(item.id)\"\n              (change)=\"toggle(item)\"></mat-checkbox>\n            </td>\n            <td>\n              <input\n              type=\"text\"\n              class=\"w3-block w3-border-0  text-center\"\n              readonly\n              [(ngModel)]=\"item.id\"  >\n              <span style=\"display: none;\" >{{ item.id }}</span>\n            </td>\n            <td>\n              <input\n              type=\"text\"\n              style=\"min-width: 200px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.name\" >\n              <span style=\"display: none;\" >{{ item.name }}</span>\n            </td>\n            <td>\n              <input\n              type=\"number\"\n              style=\"min-width: 100px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.sort\" >\n              <span style=\"display: none;\" >{{ item.sort }}</span>\n            </td>\n            <td>\n              <mat-checkbox\n              [checked]=\"item.is_admin\"\n              (change)=\"send(item)\"\n              [(ngModel)]=\"item.is_admin\"></mat-checkbox>\n            </td>\n            <td>\n              <button\n              class=\"fa fa-trash w3-button\"\n              *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\n            </td>\n          </tr>\n        </ng-container>\n    \n      </table>\n    </div>\n    <br>\n    <button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n      <i class=\"fa fa-plus\"></i>\n    </button>\n    \n    </div>\n</div>\n\n\n\n<div class=\"w3-block w3-white w3-padding material-shadow\" *ngIf=\"password != enterPassword\" >\n  <br>\n  <br>\n  <br>\n  <div class=\"form-group w3-xlarge\">\n    <label for=\"\" class=\"text-capitalize\" >enter permission password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"enter permission password\" [(ngModel)]=\"enterPassword\" >\n  </div>\n</div>\n"

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

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n<div class=\"col-lg-12 col-md-12  \" \n*ngIf=\"password == enterPassword\"\nstyle=\"padding: 0px!important\">\n  \n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with group' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.group_id\" >\n        <option *ngFor=\"let row of permissionGroups\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"display_name\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"group\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr  *ngIf=\"!loading && search(item) && (item.group_id == filter.group_id || !filter.group_id)\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.name\" >\n          <span style=\"display: none;\" >{{ item.name }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.display_name\" >\n          <span style=\"display: none;\" >{{ item.display_name }}</span>\n        </td>\n        <td>\n          <select\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.group_id\" >\n          <option *ngFor=\"let row of permissionGroups\" value=\"{{ row.id }}\">{{ row.name }}</option>\n        </select>\n          <span style=\"display: none;\" >{{ item.group_id }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n<div class=\"w3-block w3-white w3-padding material-shadow\" *ngIf=\"password != enterPassword\" >\n  <br>\n  <br>\n  <br>\n  <div class=\"form-group w3-xlarge\">\n    <label for=\"\" class=\"text-capitalize\" >enter permission password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"enter permission password\" [(ngModel)]=\"enterPassword\" >\n  </div>\n</div>\n"

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

module.exports = "\n<div class=\"w3-block\">\n  <div class=\"w3-white material-shadow safe-box\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"permissions\" | trans }} <i class=\"fa fa-angle-left\" ></i> {{ role.name }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4\" *ngFor=\"let group of groups\" >\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel group-{{ group.id }}\">\n          <div class=\"custom-panel-title\">\n            <mat-slide-toggle\n                      #selectAllMatSlider\n                      (change)=\"selectAll(group, selectAllMatSlider.checked)\" ></mat-slide-toggle>\n                      {{ group.name }}\n          </div>\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 250px;\" >\n            <br>\n            <ul class=\"w3-ul\">\n              <li *ngFor=\"let item of group.permissions\" >\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <mat-slide-toggle\n                      [checked]=\"permissionId.has(item.id)\"\n                      (change)=\"togglePermissions(item.id)\" ></mat-slide-toggle>\n                  </div>\n                  <div class=\"media-body\">\n                    <div class=\"media-heading text-right \">{{ item.display_name }}</div>\n                  </div>\n                </div>\n              </li>\n             </ul>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"box-footer\">\n      <button [disabled]=\"isSubmitted\" (click)=\"updatePermissions()\" type=\"submit\" class=\"btn btn-primary\">\n        <i *ngIf=\"!isSubmitted\" >{{ \"add\" | trans }}</i>\n        <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n      </button>\n\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/components/role/permission/permissions.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permissions.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px;\n}\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important;\n}\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important;\n}\n\n.border-dashed {\n  border: 2px dashed lightgray !important;\n}\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important;\n}\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important;\n}\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999;\n}\n\n.custom-panel-body {\n  padding: 5px;\n}\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important;\n}\n\n.search-input {\n  min-width: 70% !important;\n}\n\n.border-gray {\n  border: 1px solid gray !important;\n}\n\n.custom-input {\n  min-width: 120px;\n}\n\n.modal {\n  overflow: auto !important;\n}\n\n/*\n  custom button style\n*/\n\nselect, input[type=file] {\n  padding: 0px !important;\n}\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto;\n}\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto;\n}\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important;\n}\n\n.number_input {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcGVybWlzc2lvbi9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcdXNlclxcY29tcG9uZW50c1xccm9sZVxccGVybWlzc2lvblxccGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3Blcm1pc3Npb24vcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdURBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FERUE7O0NBQUE7O0FBSUE7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3Blcm1pc3Npb24vcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4XG59XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1kYXNoZWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcbn1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcbn1cblxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4IWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTk5O1xufVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweFxufVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XG59XG4vKlxuICBjdXN0b20gYnV0dG9uIHN0eWxlXG4qL1xuXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyLXRvcCB7XG4gIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbHRlci1zaWRlIHtcbiAgaGVpZ2h0OiA0MDBweCFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbi53My11bCBsaSB7XG4gIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweFxufVxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTk5OTtcbn1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc21hbGwtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcbiovXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmlsdGVyLXNpZGUge1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udzMtdWwgbGkge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDtcbn0iXX0= */"

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

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"{{ isUpdate? 'update' : 'create' }}Modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit role\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add role\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"send()\" >{{ \"add\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

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

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" *ngIf=\"!updateMode\"></app-breadcrumb>\n\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList2\" *ngIf=\"updateMode\" ></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" *ngIf=\"!updateMode\" >\n  <div class=\"box-header\">\n    <button mat-raised-button color=\"primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  >\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button>\n  </div>\n\n  <br>\n\n</div>\n\n<div class=\"mat-elevation-z8 w3-white\" style=\"padding: 7px\" *ngIf=\"!updateMode\" >\n  <input  class=\"form-control\"\n  (keyup)=\"search($event.target.value)\" placeholder=\"{{ 'search' | trans }}\">\n  <br>\n  <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"name\" sticky>\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"name\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"w3-margin-right\">\n              {{element.name}}\n          </span>\n        </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let element\">\n              <button mat-button color=\"info\"  (click)=\"edit(element)\" >\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button mat-button color=\"info\"  (click)=\"permission(element)\" >\n                <i class=\"fa fa-th-list\"></i>\n              </button>\n              <button mat-button color=\"warn\" *ngIf=\"element.can_delete\" (click)=\"destroy(element.id)\" >\n                <i class=\"fa fa-trash\"></i>\n              </button>\n          </td>\n     </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n<div class=\"w3-white\" *ngIf=\"updateMode\" >\n  <button (click)=\"updateMode=false\" class=\"w3-white shadow w3-margin w3-large btn\"  >\n    <i class=\"fa fa-angle-right\" ></i> {{ \"back\" | trans }}\n </button>\n  <app-permissions [role]=\"permissionItem\" [updateMode]=\"updateMode\" [loadResources]=\"updateResources\" ></app-permissions>\n</div>\n\n\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"updateItem\" [isUpdate]=\"true\" ></app-role-form>\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"{}\" [isUpdate]=\"false\" ></app-role-form>\n\n"

/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n\n.mat-elevation-z8 {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcm9sZS1pbmRleC9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcdXNlclxcY29tcG9uZW50c1xccm9sZVxccm9sZS1pbmRleFxccm9sZS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcm9sZS1pbmRleC9yb2xlLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcm9sZS1pbmRleC9yb2xlLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

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

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n  </div>\n\n\n  <div class=\"w3-padding w3-display-topright\"    >\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" *ngIf=\"!updateMode\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"name_en\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"display_name\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"company\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n      <th class=\"w3-padding\" >{{ \"permissions\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr  *ngIf=\"!loading && search(item)\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.name\" >\n          <span style=\"display: none;\" >{{ item.name }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.display_name\" >\n          <span style=\"display: none;\" >{{ item.display_name }}</span>\n        </td>\n        <td>\n          <select\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.company_id\" >\n          <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n        </select>\n          <span style=\"display: none;\" >{{ item.group_id }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-th-list w3-button\"\n           (click)=\"permission(item)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n\n  <div class=\"w3-white\" *ngIf=\"updateMode\" >\n    <button (click)=\"updateMode=false\" class=\"w3-white shadow w3-margin w3-large btn\"  >\n      <i class=\"fa fa-angle-right\" ></i> {{ \"back\" | trans }}\n  </button>\n    <app-permissions [role]=\"permissionItem\" [updateMode]=\"updateMode\" [loadResources]=\"loadResources\" ></app-permissions>\n  </div>\n\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd && !updateMode\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n\n\n"

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

module.exports = "<div class=\"w3-block w3-row\">\n  <div class=\"w3-white material-shadow safe-box col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\n      {{ \"users history\" | trans }}\n    </div>\n    <div class=\"border-bottom-dashed\"></div>\n    <br>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\n            <table class=\"table-bordered\" >\n              <thead>\n                <th>#</th>\n                <th>{{ \"name\" | trans }}</th>\n                <th>{{ \"start_date\" | trans }}</th>\n                <th>{{ \"end_date\" | trans }}</th>\n                <th></th>\n              </thead>\n              <tbody>\n\n                <tr>\n                  <td></td>\n                  <td>\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" ></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n"

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

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"userModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light-gray w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit user\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add user\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div class=\"w3-center\">\n          <img src=\"{{ resource.photo_url }}\" alt=\"\" style=\"width: 100px;\" class=\"w3-round\" >\n        </div>\n        <br>\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"photo\" | trans }} </th>\n            <td>\n              <input type=\"file\"\n              (change)=\"loadFile($event, 'photo', resource)\"\n              class=\"form-control input-sm\"  [(ngModel)]=\"resource.photo\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"username\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.username\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"password\" | trans }} *</th>\n            <td>\n              <input type=\"password\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.password\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"address\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"phone\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"email\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"company\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.company_id\"  >\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"branch\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.branch_id\"  >\n                <ng-container *ngFor=\"let item of branches\">\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"department\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.department_id\"  >\n                <ng-container *ngFor=\"let item of departments\">\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"role\" | trans }}</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.role_id\"  >\n                <ng-container *ngFor=\"let item of roles\">\n                  <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"notes\" | trans }}</th>\n            <td>\n              <textarea  class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" ></textarea>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"active\" | trans }} </th>\n            <td>\n              <mat-slide-toggle\n              [(ngModel)]=\"resource.active\"\n              ></mat-slide-toggle>\n            </td>\n          </tr>\n\n        </table>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource, true)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

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

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get(true)\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with department' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.deparmtent_id\" >\n        <option *ngFor=\"let row of departments\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with branch' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.branch_id\" >\n        <ng-container *ngFor=\"let row of branches\" >\n          <option *ngIf=\"row.company_id == filter.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"this\" ></app-table>\n</div>\n\n</div>\n<app-user-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" ></app-user-form>\n"

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

module.exports = "<div class=\"row\">\n\n  <!-- /.col -->\n  <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>\n"

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