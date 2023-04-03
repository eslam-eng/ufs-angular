(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/components/area/area.component.html":
/*!**************************************************************!*\
  !*** ./src/app/settings/components/area/area.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'search' | trans }}</label>\r\n      <br>\r\n      <input type=\"text\"\r\n      [(ngModel)]=\"filter.search\"\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n      placeholder=\"{{ 'search' | trans }}\" >\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'filter with city' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.city_id\" >\r\n        <option value=\"\">{{ \"select all\" | trans }}</option>\r\n        <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'filter with country' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.country_id\" >\r\n        <option value=\"\">{{ \"select all\" | trans }}</option>\r\n        <option *ngFor=\"let row of countries\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n      <tr class=\"w3-light-gray\" >\r\n        <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"city\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n      </tr>\r\n      <tr *ngIf=\"loading\"  >\r\n        <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n          <i class=\"fa fa-spin fa-spinner\"></i>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngFor=\"let item of data index as i\" >\r\n        <tr  *ngIf=\"!loading && customSearch(item)\"\r\n        class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n          <td>\r\n            <div class=\"w3-center text-center hidden\" >\r\n              <mat-slide-toggle\r\n              [checked]=\"selectedResources.has(item.id)\"\r\n              (change)=\"toggle(item)\"\r\n              ></mat-slide-toggle>\r\n            </div>\r\n            <mat-checkbox\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            class=\"w3-block w3-border-0  text-center\"\r\n            readonly\r\n            [(ngModel)]=\"item.id\"  >\r\n            <span style=\"display: none;\" >{{ item.id }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            style=\"min-width: 200px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.name\" >\r\n            <span style=\"display: none;\" >{{ item.name }}</span>\r\n          </td>\r\n          <td>\r\n            <select\r\n            style=\"min-width: 200px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.city_id\" >\r\n            <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n          </select>\r\n            <span style=\"display: none;\" >{{ item.country_id }}</span>\r\n          </td>\r\n          <td>\r\n            <button\r\n            class=\"fa fa-trash w3-button\"\r\n            *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n\r\n    </table>\r\n  </div>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/area/area.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/components/area/area.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive {\n  height: 300px;\n}\n\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n\n.more-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9hcmVhL0U6XFxwcm9qZWN0c1xcdXNmLWZyb250L3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xcYXJlYVxcYXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9hcmVhL2FyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9jb21wb25lbnRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9yZS1vcHRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLnRhYmxlLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xufVxuXG4ubW9yZS1vcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/components/area/area.component.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/components/area/area.component.ts ***!
  \************************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var AreaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AreaComponent, _super);
    function AreaComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.cities = [];
        _this.countries = [];
        _this.title = "areas";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('area_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('area_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('area_remove');
        //
        _this.baseApiUrl = "areas";
        _this.displayCreate = true;
        _this.displayImport = true;
        return _this;
    }
    AreaComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AreaComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities())
            this.cities = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
                _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCities(res);
            });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries())
            this.countries = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries();
        else
            this.service.get("countries").subscribe(function (res) {
                _this.countries = res;
                _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCountries(res);
            });
    };
    AreaComponent.prototype.customSearch = function (item) {
        var condition = this.search(item) &&
            (item.city_id == this.filter.city_id || !this.filter.city_id) &&
            (item.country_id == this.filter.country_id || !this.filter.country_id);
        return condition;
    };
    AreaComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadSettings();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas();
        else
            this.get();
    };
    AreaComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setAreas(res);
    };
    AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-area',
            template: __webpack_require__(/*! ./area.component.html */ "./src/app/settings/components/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/settings/components/area/area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], AreaComponent);
    return AreaComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/category/category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/category/category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"fixed_number\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"has_many_dimension\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr\r\n      *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.fixed\" >\r\n          <span style=\"display: none;\" >{{ item.fixed }}</span>\r\n        </td>\r\n        <td>\r\n          <mat-checkbox\r\n          (change)=\"send(item)\"\r\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.has_many\"\r\n          ></mat-checkbox>\r\n          <span style=\"display: none;\" >{{ item.has_many }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/components/category/category.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/category/category.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/category/category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/category/category.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var CategoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryComponent, _super);
    function CategoryComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "awb categories";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('awb_category_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('awb_category_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('awb_category_remove');
        //
        _this.baseApiUrl = "awb-categories";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    CategoryComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].categories())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].categories();
        else
            this.get();
    };
    CategoryComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCategories(res);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/settings/components/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/settings/components/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CategoryComponent);
    return CategoryComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/city/city.component.html":
/*!**************************************************************!*\
  !*** ./src/app/settings/components/city/city.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'search' | trans }}</label>\r\n      <br>\r\n      <input type=\"text\"\r\n      [(ngModel)]=\"filter.search\"\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n      placeholder=\"{{ 'search' | trans }}\" >\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'filter with country' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.country_id\" >\r\n        <option value=\"\">{{ \"select all\" | trans }}</option>\r\n        <option *ngFor=\"let row of countries\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n    \r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"country\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item) && (item.country_id == filter.country_id || !filter.country_id)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <select\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.country_id\" >\r\n          <option *ngFor=\"let row of countries\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n        </select>\r\n          <span style=\"display: none;\" >{{ item.country_id }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/city/city.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/components/city/city.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/city/city.component.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/components/city/city.component.ts ***!
  \************************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var CityComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CityComponent, _super);
    function CityComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.countries = [];
        _this.title = "cities";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('city_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('city_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('city_remove');
        //
        _this.baseApiUrl = "cities";
        _this.displayCreate = true;
        return _this;
    }
    CityComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CityComponent.prototype.loadCountries = function () {
        var _this = this;
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries())
            this.countries = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries();
        else
            this.service.get("countries").subscribe(function (res) {
                _this.countries = res;
                // set countries after loading
                _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCountries(res);
            });
    };
    CityComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadCountries();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities();
        else
            this.get();
    };
    CityComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCities(res);
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/settings/components/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/settings/components/city/city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CityComponent);
    return CityComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/country/country.component.html":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr\r\n      *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/country/country.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/country/country.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/components/country/country.component.ts ***!
  \******************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var CountryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CountryComponent, _super);
    function CountryComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "countries";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('country_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('country_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('country_remove');
        //
        _this.baseApiUrl = "countries";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    CountryComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CountryComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].countries();
        else
            this.get();
    };
    CountryComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCountries(res);
    };
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/settings/components/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.scss */ "./src/app/settings/components/country/country.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CountryComponent);
    return CountryComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/courier-commision/courier-commision.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/settings/components/courier-commision/courier-commision.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with service_id' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.city_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of services\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with courier' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.courier_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of couriers\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      (click)=\"removeSelected()\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"import()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.create()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"courier\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"service\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"commission\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr  *ngIf=\"!loading && search(item)\"\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.courier_id\" >\n            <option *ngFor=\"let row of couriers\" value=\"{{ row.id }}\">{{ row.name }}</option>\n          </select>\n          <span style=\"display: none;\" >{{ item.courier? item.courier.name : '' }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.service_id\" >\n            <option *ngFor=\"let row of services\" value=\"{{ row.id }}\">{{ row.name }}</option>\n          </select>\n          <span style=\"display: none;\" >{{ item.service? item.service.name : '' }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.commission\" >\n          <span style=\"display: none;\" >{{ item.commission }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/settings/components/courier-commision/courier-commision.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/settings/components/courier-commision/courier-commision.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY291cmllci1jb21taXNpb24vY291cmllci1jb21taXNpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/courier-commision/courier-commision.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/settings/components/courier-commision/courier-commision.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CourierCommisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierCommisionComponent", function() { return CourierCommisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var CourierCommisionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierCommisionComponent, _super);
    function CourierCommisionComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.services = [];
        _this.couriers = [];
        _this.countries = [];
        _this.title = "courier commisions";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_commission_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_commission_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_commission_remove');
        //
        _this.baseApiUrl = "courier-commissions";
        _this.displayCreate = true;
        _this.displayImport = true;
        _this.displayError = true;
        return _this;
    }
    CourierCommisionComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierCommisionComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.get("couriers").subscribe(function (res) {
            _this.couriers = res;
        });
        this.service.get("services").subscribe(function (res) {
            _this.services = res;
        });
    };
    CourierCommisionComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadSettings();
        this.get(true);
    };
    CourierCommisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-commision',
            template: __webpack_require__(/*! ./courier-commision.component.html */ "./src/app/settings/components/courier-commision/courier-commision.component.html"),
            styles: [__webpack_require__(/*! ./courier-commision.component.scss */ "./src/app/settings/components/courier-commision/courier-commision.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CourierCommisionComponent);
    return CourierCommisionComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/courier-daily/courier-daily.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/courier-daily/courier-daily.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with courier' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.courier_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of couriers\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      (click)=\"removeSelected()\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"import()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.create()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"courier\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"date\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"discount\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"discount_reason\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"additional\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"additional_reason\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"notes\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr  *ngIf=\"!loading && search(item)\"\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.courier_id\" >\n            <option *ngFor=\"let row of couriers\" value=\"{{ row.id }}\">{{ row.name }}</option>\n          </select>\n          <span style=\"display: none;\" >{{ item.courier? item.courier.name : '' }}</span>\n        </td>\n        <td>\n          <input\n          type=\"date\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.date\" >\n          <span style=\"display: none;\" >{{ item.date }}</span>\n        </td>\n        <td>\n          <input\n          type=\"number\"\n          style=\"min-width: 100px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.discount\" >\n          <span style=\"display: none;\" >{{ item.discount }}</span>\n        </td>\n        <td>\n          <select\n          style=\"min-width: 100px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.discount_expense_id\" >\n          <option *ngFor=\"let row of expenseTypes\" value=\"{{ row.id }}\">{{ row.name }}</option>\n          </select>\n\n          <span style=\"display: none;\" >{{ item.discountExpense? item.discountExpense.name : '' }}</span>\n        </td>\n        <td>\n          <input\n            type=\"number\"\n            style=\"min-width: 100px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.additional\" >\n          <span style=\"display: none;\" >{{ item.additional }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 100px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.additional_expense_id\" >\n            <option *ngFor=\"let row of expenseTypes\" value=\"{{ row.id }}\">{{ row.name }}</option>\n          </select>\n\n          <span style=\"display: none;\" >{{ item.additionalExpense? item.additionalExpense.name : '' }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 100px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.notes\" >\n          <span style=\"display: none;\" >{{ item.notes }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/settings/components/courier-daily/courier-daily.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/courier-daily/courier-daily.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvY291cmllci1kYWlseS9jb3VyaWVyLWRhaWx5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/courier-daily/courier-daily.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/courier-daily/courier-daily.component.ts ***!
  \******************************************************************************/
/*! exports provided: CourierDailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierDailyComponent", function() { return CourierDailyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");








var CourierDailyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierDailyComponent, _super);
    function CourierDailyComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.couriers = [];
        _this.expenseTypes = [];
        _this.title = "courier dailies";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_daily_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_daily_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_daily_remove');
        //
        _this.baseApiUrl = "courier-dailies";
        _this.displayCreate = true;
        _this.displayImport = true;
        _this.displayError = true;
        return _this;
    }
    CourierDailyComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierDailyComponent.prototype.send = function (item) {
        if (!item.discount && !item.additional) {
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('please write additional or discount'));
        }
        _super.prototype.send.call(this, item);
    };
    CourierDailyComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.get("couriers").subscribe(function (res) {
            _this.couriers = res;
        });
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].expenses()) {
            this.expenseTypes = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].expenses();
        }
        else {
            this.service.get("expense-types").subscribe(function (res) {
                _this.expenseTypes = res;
            });
        }
    };
    CourierDailyComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadSettings();
        this.get(true);
    };
    CourierDailyComponent.prototype.create = function (date) {
        if (date === void 0) { date = {}; }
        var item = {};
        item.date = new Date().toISOString().substring(0, 10);
        _super.prototype.create.call(this, item);
    };
    CourierDailyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-daily',
            template: __webpack_require__(/*! ./courier-daily.component.html */ "./src/app/settings/components/courier-daily/courier-daily.component.html"),
            styles: [__webpack_require__(/*! ./courier-daily.component.scss */ "./src/app/settings/components/courier-daily/courier-daily.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CourierDailyComponent);
    return CourierDailyComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/department/department.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/department/department.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'search' | trans }}</label>\r\n      <br>\r\n      <input type=\"text\"\r\n      [(ngModel)]=\"filter.search\"\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n      placeholder=\"{{ 'search' | trans }}\" >\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <label>{{ 'filter with company' | trans }}</label>\r\n      <br>\r\n      <select\r\n      class=\"form-control input-sm w3-block\"\r\n      style=\"border-radius: 8px;\"\r\n        [(ngModel)]=\"filter.company_id\" >\r\n        <option value=\"\">{{ \"select all\" | trans }}</option>\r\n        <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n    \r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"company\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item) && (item.company_id == filter.company_id || !filter.company_id)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <select\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.company_id\" >\r\n          <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\r\n        </select>\r\n          <span style=\"display: none;\" >{{ item.company_id }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/department/department.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/department/department.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/department/department.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/components/department/department.component.ts ***!
  \************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var DepartmentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DepartmentComponent, _super);
    function DepartmentComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "departments";
        _this.companies = [];
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('department_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('department_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('department_remove');
        //
        _this.baseApiUrl = "departments";
        _this.displayCreate = true;
        return _this;
    }
    DepartmentComponent.prototype.loadCompanies = function () {
        var _this = this;
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
    };
    DepartmentComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    DepartmentComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadCompanies();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments();
        else
            this.get();
    };
    DepartmentComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setDepartments(res);
    };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/settings/components/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.scss */ "./src/app/settings/components/department/department.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/expense-type/expense-type.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/expense-type/expense-type.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >\r\n        <mat-checkbox\r\n          [checked]=\"selectedAllToggle\"\r\n          (change)=\"selectAll()\"\r\n        ></mat-checkbox>\r\n      </th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr\r\n      *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/expense-type/expense-type.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/expense-type/expense-type.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvZXhwZW5zZS10eXBlL2V4cGVuc2UtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/components/expense-type/expense-type.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/settings/components/expense-type/expense-type.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExpenseTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTypeComponent", function() { return ExpenseTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var ExpenseTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExpenseTypeComponent, _super);
    function ExpenseTypeComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "expenses types";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('expense_type_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('expense_type_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('expense_type_remove');
        //
        _this.baseApiUrl = "expense-types";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    ExpenseTypeComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    ExpenseTypeComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses();
        else
            this.get();
    };
    ExpenseTypeComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setExpenses(res);
    };
    ExpenseTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense-type',
            template: __webpack_require__(/*! ./expense-type.component.html */ "./src/app/settings/components/expense-type/expense-type.component.html"),
            styles: [__webpack_require__(/*! ./expense-type.component.scss */ "./src/app/settings/components/expense-type/expense-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], ExpenseTypeComponent);
    return ExpenseTypeComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/payment-type/payment-type.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/payment-type/payment-type.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/payment-type/payment-type.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/payment-type/payment-type.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/components/payment-type/payment-type.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/settings/components/payment-type/payment-type.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypeComponent", function() { return PaymentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var PaymentTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentTypeComponent, _super);
    function PaymentTypeComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "payment types";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('payment_type_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('payment_type_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('payment_type_remove');
        //
        _this.baseApiUrl = "payment-types";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    PaymentTypeComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PaymentTypeComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].paymentTypes())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].paymentTypes();
        else
            this.get();
    };
    PaymentTypeComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setPaymentTypes(res);
    };
    PaymentTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-type',
            template: __webpack_require__(/*! ./payment-type.component.html */ "./src/app/settings/components/payment-type/payment-type.component.html"),
            styles: [__webpack_require__(/*! ./payment-type.component.scss */ "./src/app/settings/components/payment-type/payment-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], PaymentTypeComponent);
    return PaymentTypeComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/permission/permission.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/permission/permission.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block\" permission=\"permission\">\r\n  <div class=\"w3-white material-shadow safe-box\">\r\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n      {{ \"permissions & groups\" | trans }}\r\n    </div>\r\n    <div class=\"border-bottom-dashed\"></div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-5  col-md-5 col-sm-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n          <div class=\"custom-panel-title\">\r\n            {{ \"permission_groups\" | trans }}\r\n          </div>\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\r\n            <table class=\" table-bordered\" >\r\n              <thead>\r\n                <th>#</th>\r\n                <th>{{ \"name\" | trans }}</th>\r\n                <th>{{ \"sort\" | trans }}</th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of data index as i\" >\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.sort\" >\r\n                  </td>\r\n                  <td>\r\n                   <div style=\"width: 80px\" >\r\n                    <button class=\"btn btn-success\"\r\n                    [disabled]=\"isSubmitted\"\r\n                    (click)=\"send(item, i)\" >\r\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\r\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                  </button>\r\n                    <button class=\"btn btn-danger\"\r\n                    *ngIf=\"item.can_delete\"\r\n                    [disabled]=\"isSubmitted\"\r\n                    (click)=\"destroy(item, i)\" >\r\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\r\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                    </button>\r\n                   </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-7  col-md-7 col-sm-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n          <div class=\"custom-panel-title\">\r\n            {{ \"permissions\" | trans }}\r\n          </div>\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\r\n            <table class=\" table-bordered\" >\r\n              <thead>\r\n                <th>#</th>\r\n                <th>{{ \"name_en\" | trans }}</th>\r\n                <th>{{ \"display_name\" | trans }}</th>\r\n                <th>{{ \"group\" | trans }}</th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of permissions.data index as i\">\r\n                  <tr  >\r\n                    <td>{{ i + 1 }}</td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.display_name\" >\r\n                    </td>\r\n                    <td>\r\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"item.group_id\"  >\r\n                        <option *ngFor=\"let item of data\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                      </select>\r\n                    </td>\r\n                    <td>\r\n                    <div style=\"width: 90px\" >\r\n                      <button class=\"btn btn-success\"\r\n                      [disabled]=\"permissions.isSubmitted\"\r\n                      (click)=\"permissions.send(item, i)\" >\r\n                      <i *ngIf=\"!permissions.isSubmitted\" class=\"fa fa-check\" ></i>\r\n                      <i *ngIf=\"permissions.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                    </button>\r\n                      <button class=\"btn btn-danger hidden\"\r\n                      [disabled]=\"permissions.isSubmitted\"\r\n                      (click)=\"permissions.destroy(item, i)\" >\r\n                        <i *ngIf=\"!permissions.isSubmitted\" class=\"fa fa-trash\" ></i>\r\n                        <i *ngIf=\"permissions.isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                      </button>\r\n                    </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n                <tr>\r\n                  <td></td>\r\n                  <td colspan=\"2\" >\r\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"permissions.add()\" ></button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/components/permission/permission.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/permission/permission.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px;\n}\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important;\n}\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important;\n}\n\n.border-dashed {\n  border: 2px dashed lightgray !important;\n}\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important;\n}\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important;\n}\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  z-index: 9999999;\n}\n\n.custom-panel-body {\n  padding: 5px;\n}\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important;\n}\n\n.search-input {\n  min-width: 70% !important;\n}\n\n.border-gray {\n  border: 1px solid gray !important;\n}\n\n.custom-input {\n  min-width: 120px;\n}\n\n.modal {\n  overflow: auto !important;\n}\n\n/*\n  custom button style\n*/\n\nselect, input[type=file] {\n  padding: 0px !important;\n}\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto;\n}\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto;\n}\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important;\n}\n\n.number_input {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9wZXJtaXNzaW9uL0U6XFxwcm9qZWN0c1xcdXNmLWZyb250L3NyY1xcYXBwXFxzZXR0aW5nc1xcY29tcG9uZW50c1xccGVybWlzc2lvblxccGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9wZXJtaXNzaW9uL3Blcm1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsdURBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FERUE7O0NBQUE7O0FBSUE7RUFDRSx1QkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tcmVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG59XG5cbi5jdXN0b20tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuXG4vKlxuICBjdXN0b20gYnV0dG9uIHN0eWxlXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWx0ZXItdG9wIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbHRlci1zaWRlIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubnVtYmVyX2lucHV0IHtcbiAgd2lkdGg6IDQ1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/components/permission/permission.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/components/permission/permission.component.ts ***!
  \************************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var _setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../setting-template */ "./src/app/settings/setting-template.ts");




var PermissionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PermissionComponent, _super);
    function PermissionComponent(settingService, permissionService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        _this.permissionService = permissionService;
        _this.permissions = null;
        _this.baseUrl = "permission_groups";
        _this.settingService.baseUrl = "permission_groups";
        _this.requiredFields = ['name'];
        _this.get();
        // init level
        _this.permissions = new _setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"](_this.permissionService);
        _this.permissions.requiredFields = ['name', 'group_id'];
        _this.permissions.baseUrl = "permissions";
        _this.permissions.get();
        return _this;
    }
    PermissionComponent.prototype.ngOnInit = function () {
    };
    PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/settings/components/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/settings/components/permission/permission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], PermissionComponent);
    return PermissionComponent;
}(_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/settings/components/service/service.component.html":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/service/service.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr  *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/service/service.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/service/service.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/service/service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/components/service/service.component.ts ***!
  \******************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var ServiceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServiceComponent, _super);
    function ServiceComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "services";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('service_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('service_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('service_remove');
        //
        _this.baseApiUrl = "services";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    ServiceComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    ServiceComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].services())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].services();
        else
            this.get();
    };
    ServiceComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setServices(res);
    };
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/settings/components/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/settings/components/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], ServiceComponent);
    return ServiceComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/status/status.component.html":
/*!******************************************************************!*\
  !*** ./src/app/settings/components/status/status.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n  <div class=\"w3-block material-shadow safe-box w3-display-container alert alert-warning\">\r\n    <ul  >\r\n      <li>\r\n        1\t=>\t{{ \"prepare\" | trans }}\r\n      </li>\r\n      <li>\r\n        2\t=> \t{{ \"delivered\" | trans }}\r\n      </li>\r\n      <li>\r\n        3\t=>\t{{ \"return_paid\" | trans }}\r\n      </li>\r\n      <li>\r\n        4\t=>\t{{ \"return_non_paid\" | trans }}\r\n      </li>\r\n      <li>\r\n        5\t=>\t{{ \"closed\" | trans }}\r\n      </li>\r\n      <li>\r\n        6\t=>\t{{ \"out for delivery\" | trans }}\r\n      </li>\r\n      <li>\r\n        7\t=>\t{{ \"collected\" | trans }}\r\n      </li>\r\n      <li>\r\n        8\t=>\t{{ \"paid_to_customer\" | trans }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"import()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.toggleOption()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-purple\"   >\r\n      <i class=\"fa {{ moreOptionShow? 'fa-circle-o' : 'fa-circle' }}\"></i> {{ \"more options\" | trans }}\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n      <tr class=\"w3-light-gray\" >\r\n        <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"status_code\" | trans }}</th>\r\n        <th class=\"w3-padding more-option\" >{{ \"sms\" | trans }}</th>\r\n        <th class=\"w3-padding more-option\" >{{ \"is_collection\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"type\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"steper\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n      </tr>\r\n      <tr *ngIf=\"loading\"  >\r\n        <td class=\"w3-text-indigo text-center\" colspan=\"13\" >\r\n          <i class=\"fa fa-spin fa-spinner\"></i>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngFor=\"let item of data index as i\" >\r\n        <tr  *ngIf=\" search(item)\"\r\n        class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n          <td>\r\n            <div class=\"w3-center text-center hidden\" >\r\n              <mat-slide-toggle\r\n              [checked]=\"selectedResources.has(item.id)\"\r\n              (change)=\"toggle(item)\"\r\n              ></mat-slide-toggle>\r\n            </div>\r\n            <mat-checkbox\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            class=\"w3-block w3-border-0  text-center\"\r\n            readonly\r\n            [(ngModel)]=\"item.id\"  >\r\n            <span style=\"display: none;\" >{{ item.id }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            style=\"min-width: 200px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.name\" >\r\n            <span style=\"display: none;\" >{{ item.name }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"number\"\r\n            style=\"min-width: 200px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.code\" >\r\n            <span style=\"display: none;\" >{{ item.code }}</span>\r\n          </td>\r\n          <td class=\"more-option\" >\r\n            <input\r\n            type=\"text\"\r\n            style=\"min-width: 200px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.sms\" >\r\n            <span style=\"display: none;\" >{{ item.sms }}</span>\r\n          </td>\r\n          <td class=\"more-option\" >\r\n            <mat-checkbox\r\n            (change)=\"send(item)\"\r\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.is_final\"\r\n            ></mat-checkbox>\r\n            <span style=\"display: none;\" >{{ item.is_final }}</span>\r\n          </td>\r\n          <td>\r\n            <select\r\n            style=\"min-width: 100px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.type\">\r\n              <option *ngFor=\"let row of types\" value=\"{{ row }}\">{{ row }}</option>\r\n            </select>\r\n            <span style=\"display: none;\" >{{ item.type }}</span>\r\n          </td>\r\n          <td>\r\n            <select\r\n            style=\"min-width: 100px;\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            (change)=\"send(item)\"\r\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n            [(ngModel)]=\"item.steper\">\r\n              <option *ngFor=\"let row of steper\" value=\"{{ row }}\">{{ row }}</option>\r\n            </select>\r\n            <span style=\"display: none;\" >{{ item.steper }}</span>\r\n          </td>\r\n          <td>\r\n            <button\r\n            class=\"fa fa-trash w3-button\"\r\n            *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n\r\n    </table>\r\n  </div>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\r\n"

/***/ }),

/***/ "./src/app/settings/components/status/status.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/settings/components/status/status.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive {\n  height: 60%;\n}\n\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 9999999;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9zdGF0dXMvRTpcXHByb2plY3RzXFx1c2YtZnJvbnQvc3JjXFxhcHBcXHNldHRpbmdzXFxjb21wb25lbnRzXFxzdGF0dXNcXHN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQ0FGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHRoIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIiwiLnRhYmxlLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/settings/components/status/status.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/components/status/status.component.ts ***!
  \****************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var StatusComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StatusComponent, _super);
    function StatusComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "status";
        _this.steper = ['in_company', 'processing', 'hold', 'delivered'];
        _this.types = ['awb', 'pickup'];
        _this.moreOptionShow = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('status_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('status_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('status_remove');
        //
        _this.baseApiUrl = "status";
        _this.displayCreate = true;
        return _this;
    }
    StatusComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    StatusComponent.prototype.ngOnInit = function () {
        var self = this;
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].status())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].status();
        else
            this.get();
    };
    StatusComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setStatus(res);
    };
    StatusComponent.prototype.toggleOption = function () {
        this.$('.more-option').toggle();
        //
        this.moreOptionShow = !this.moreOptionShow;
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/settings/components/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/settings/components/status/status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], StatusComponent);
    return StatusComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/store/store.component.html":
/*!****************************************************************!*\
  !*** ./src/app/settings/components/store/store.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\r\n      (click)=\"removeSelected()\"\r\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\r\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"excel()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\r\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"pdf()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\r\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    (click)=\"print()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\r\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\r\n    </button>\r\n\r\n    <button\r\n    style=\"margin: 5px;padding: 7px\"\r\n    *ngIf=\"this.canAdd\"\r\n    (click)=\"this.create()\"\r\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\r\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"w3-padding w3-display-topright\"    >\r\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n  </div>\r\n\r\n  <div class=\"text-center w3-padding\">\r\n    <b>\r\n      {{ title | trans }}\r\n    </b>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n    <tr class=\"w3-light-gray\" >\r\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"init_value\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"value\" | trans }}</th>\r\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\r\n    </tr>\r\n    <tr *ngIf=\"loading\"  >\r\n      <td class=\"w3-text-indigo text-center\" colspan=\"6\" >\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngFor=\"let item of data index as i\" >\r\n      <tr\r\n      *ngIf=\"!loading && search(item)\"\r\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\r\n        <td>\r\n          <div class=\"w3-center text-center hidden\" >\r\n            <mat-slide-toggle\r\n            [checked]=\"selectedResources.has(item.id)\"\r\n            (change)=\"toggle(item)\"\r\n            ></mat-slide-toggle>\r\n          </div>\r\n          <mat-checkbox\r\n          [checked]=\"selectedResources.has(item.id)\"\r\n          (change)=\"toggle(item)\"></mat-checkbox>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          class=\"w3-block w3-border-0  text-center\"\r\n          readonly\r\n          [(ngModel)]=\"item.id\"  >\r\n          <span style=\"display: none;\" >{{ item.id }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"text\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\r\n          [(ngModel)]=\"item.name\" >\r\n          <span style=\"display: none;\" >{{ item.name }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"number\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [autofocus]=\"!item.id\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd || item.id\"\r\n          [(ngModel)]=\"item.init_value\" >\r\n          <span style=\"display: none;\" >{{ item.init_value }}</span>\r\n        </td>\r\n        <td>\r\n          <input\r\n          type=\"number\"\r\n          style=\"min-width: 200px;\"\r\n          class=\"w3-block w3-border-0 text-center\"\r\n          (change)=\"send(item)\"\r\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd || item.id\"\r\n          [(ngModel)]=\"item.value\" >\r\n          <span style=\"display: none;\" >{{ item.value }}</span>\r\n        </td>\r\n        <td>\r\n          <button\r\n          class=\"fa fa-trash w3-button\"\r\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n<br>\r\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\r\n  <i class=\"fa fa-plus\"></i>\r\n</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/components/store/store.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/settings/components/store/store.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/components/store/store.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/components/store/store.component.ts ***!
  \**************************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var StoreComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StoreComponent, _super);
    function StoreComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "stores";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('store_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('store_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('store_remove');
        //
        _this.baseApiUrl = "stores";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    StoreComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    StoreComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.get();
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/settings/components/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/settings/components/store/store.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], StoreComponent);
    return StoreComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/components/trans-type/trans-type.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/trans-type/trans-type.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      (click)=\"removeSelected()\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.create()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n  </div>\n\n\n  <div class=\"w3-padding w3-display-topright\"    >\n    <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr\n      *ngIf=\"!loading && search(item)\"\n      class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [autofocus]=\"!item.id\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.name\" >\n          <span style=\"display: none;\" >{{ item.name }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/settings/components/trans-type/trans-type.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/trans-type/trans-type.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvdHJhbnMtdHlwZS90cmFucy10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/components/trans-type/trans-type.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/components/trans-type/trans-type.component.ts ***!
  \************************************************************************/
/*! exports provided: TransTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransTypeComponent", function() { return TransTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var TransTypeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransTypeComponent, _super);
    function TransTypeComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "trans types";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('trans_type_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('trans_type_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('trans_type_remove');
        //
        _this.baseApiUrl = "trans-types";
        _this.displayCreate = true;
        _this.displayError = true;
        return _this;
    }
    TransTypeComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    TransTypeComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        if (_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].transTypes())
            this.data = _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].transTypes();
        else
            this.get();
    };
    TransTypeComponent.prototype.getAction = function (res) {
        _admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setTransTypes(res);
    };
    TransTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trans-type',
            template: __webpack_require__(/*! ./trans-type.component.html */ "./src/app/settings/components/trans-type/trans-type.component.html"),
            styles: [__webpack_require__(/*! ./trans-type.component.scss */ "./src/app/settings/components/trans-type/trans-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], TransTypeComponent);
    return TransTypeComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/settings/services/setting.service.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/services/setting.service.ts ***!
  \******************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var SettingService = /** @class */ (function () {
    function SettingService(http) {
        this.http = http;
        this.baseUrl = "";
        this.get();
    }
    /**
     * get services from api
     *
     */
    SettingService.prototype.get = function () {
        return this.http.get(this.baseUrl + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    SettingService.prototype.store = function (data) {
        return this.http.post(this.baseUrl + '/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    SettingService.prototype.update = function (data) {
        return this.http.post(this.baseUrl + '/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    SettingService.prototype.destroy = function (id) {
        return this.http.post(this.baseUrl + '/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/settings/setting-template.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/setting-template.ts ***!
  \**********************************************/
/*! exports provided: SettingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTemplate", function() { return SettingTemplate; });
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/message */ "./src/app/shared/message.ts");


var SettingTemplate = /** @class */ (function () {
    function SettingTemplate(settingService) {
        this.settingService = settingService;
        this.item = {};
        this.isSubmitted = false;
        this.data = [];
        this.requiredFields = [];
        this.baseUrl = null;
        this.settingService.baseUrl = this.baseUrl;
    }
    SettingTemplate.prototype.action = function (res) {
    };
    SettingTemplate.prototype.get = function () {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        this.settingService.get().subscribe(function (res) {
            _this.data = res;
        });
    };
    SettingTemplate.prototype.add = function () {
        var item = {};
        this.data.push(item);
    };
    SettingTemplate.prototype.validate = function (item) {
        if (item === void 0) { item = this.item; }
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!item[element])
                valid = false;
        });
        return valid;
    };
    SettingTemplate.prototype.send = function (item, index) {
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        this.settingService.baseUrl = this.baseUrl;
        if (item.id)
            this.update(item, index = null);
        else
            this.store(item, index = null);
    };
    SettingTemplate.prototype.store = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.store(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.update = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.update(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.destroy = function (item, index) {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        var self = this;
        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('are you sure'), function () {
            if (item.id) {
                _this.isSubmitted = true;
                _this.settingService.destroy(item.id).subscribe(function (res) {
                    if (res.status == 1)
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                    else
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
                    _this.action(res);
                    _this.isSubmitted = false;
                });
            }
            // remove item from array
            _this.data.splice(index, index + 1);
            var arr = _this.data;
            _this.data = [];
            _this.data = arr;
        });
    };
    return SettingTemplate;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/settings/components/permission/permission.component.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/settings/components/city/city.component.ts");
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/country/country.component */ "./src/app/settings/components/country/country.component.ts");
/* harmony import */ var _components_area_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/area/area.component */ "./src/app/settings/components/area/area.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/settings/components/service/service.component.ts");
/* harmony import */ var _components_payment_type_payment_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/payment-type/payment-type.component */ "./src/app/settings/components/payment-type/payment-type.component.ts");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/status/status.component */ "./src/app/settings/components/status/status.component.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/settings/components/department/department.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/settings/components/category/category.component.ts");
/* harmony import */ var _components_expense_type_expense_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/expense-type/expense-type.component */ "./src/app/settings/components/expense-type/expense-type.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/settings/components/store/store.component.ts");
/* harmony import */ var _components_courier_commision_courier_commision_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/courier-commision/courier-commision.component */ "./src/app/settings/components/courier-commision/courier-commision.component.ts");
/* harmony import */ var _components_courier_daily_courier_daily_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/courier-daily/courier-daily.component */ "./src/app/settings/components/courier-daily/courier-daily.component.ts");
/* harmony import */ var _components_trans_type_trans_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/trans-type/trans-type.component */ "./src/app/settings/components/trans-type/trans-type.component.ts");





















var routes = [
    {
        // RegisterationMethodsModule
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: "country",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('country_read') },
                component: _components_country_country_component__WEBPACK_IMPORTED_MODULE_9__["CountryComponent"]
            },
            {
                path: "city",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('city_read') },
                component: _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"]
            },
            {
                path: "area",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('area_read') },
                component: _components_area_area_component__WEBPACK_IMPORTED_MODULE_10__["AreaComponent"]
            },
            {
                path: "service",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('service_read') },
                component: _components_service_service_component__WEBPACK_IMPORTED_MODULE_11__["ServiceComponent"]
            },
            {
                path: "payment-type",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('payment_type_read') },
                component: _components_payment_type_payment_type_component__WEBPACK_IMPORTED_MODULE_12__["PaymentTypeComponent"]
            },
            {
                path: "status",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('status_read') },
                component: _components_status_status_component__WEBPACK_IMPORTED_MODULE_13__["StatusComponent"]
            },
            {
                path: "department",
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('department_read') },
                component: _components_department_department_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentComponent"]
            },
            {
                path: "translations",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('translation_read') },
                component: _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__["TranslationComponent"]
            },
            {
                path: "permissions",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('permission_read') },
                component: _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_5__["PermissionComponent"]
            },
            {
                path: "awb-category",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('awb_category_read') },
                component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"]
            },
            {
                path: "expense-type",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('expense_type_read') },
                component: _components_expense_type_expense_type_component__WEBPACK_IMPORTED_MODULE_16__["ExpenseTypeComponent"]
            },
            {
                path: "store",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('store_read') },
                component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_17__["StoreComponent"]
            },
            {
                path: "courier-commission",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('courier_commission_read') },
                component: _components_courier_commision_courier_commision_component__WEBPACK_IMPORTED_MODULE_18__["CourierCommisionComponent"]
            },
            {
                path: "courier-daily",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('courier_daily_read') },
                component: _components_courier_daily_courier_daily_component__WEBPACK_IMPORTED_MODULE_19__["CourierDailyComponent"]
            },
            {
                path: "trans-type",
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_6__["Auth"].can('trans_type_read') },
                component: _components_trans_type_trans_type_component__WEBPACK_IMPORTED_MODULE_20__["TransTypeComponent"]
            },
        ]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--    <aside class=\"main-sidebar\">-->\r\n<!--      &lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->\r\n<!--      <section class=\"sidebar\">-->\r\n<!--        &lt;!&ndash; Sidebar user panel &ndash;&gt;-->\r\n<!--        <div class=\"user-panel\">-->\r\n<!--          <div class=\"pull-left image\">-->\r\n<!--            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">-->\r\n<!--          </div>-->\r\n<!--          <div class=\"pull-left info\">-->\r\n<!--            <p>Alexander Pierce</p>-->\r\n<!--            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>-->\r\n<!--          </div>-->\r\n<!--        </div>-->\r\n\r\n<!--        &lt;!&ndash; sidebar menu: : style can be found in sidebar.less &ndash;&gt;-->\r\n<!--        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">-->\r\n<!--          <li class=\"header\">الاعدادات الرئيسية</li>-->\r\n<!--          <li><a routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i> الدول </a></li>-->\r\n<!--          <li><a routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i> المدن </a></li>-->\r\n<!--        </ul>-->\r\n<!--      </section>-->\r\n<!--      &lt;!&ndash; /.sidebar &ndash;&gt;-->\r\n<!--    </aside>-->\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px;\n}\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important;\n}\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important;\n}\n\n.border-dashed {\n  border: 2px dashed lightgray !important;\n}\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important;\n}\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important;\n}\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.custom-panel-body {\n  padding: 5px;\n}\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important;\n}\n\n.search-input {\n  min-width: 70% !important;\n}\n\n.border-gray {\n  border: 1px solid gray !important;\n}\n\n.custom-input {\n  min-width: 120px;\n}\n\n.modal {\n  overflow: auto !important;\n}\n\n/*\n  custom button style\n*/\n\nselect, input[type=file] {\n  padding: 0px !important;\n}\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto;\n}\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto;\n}\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important;\n}\n\n.number_input {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRTpcXHByb2plY3RzXFx1c2YtZnJvbnQvc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHVEQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBOztDQUFBOztBQUlBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLXJlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWRhc2hlZCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc21hbGwtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ncmF5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgbWluLXdpZHRoOiAxMjBweFxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cclxuXHJcbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlci10b3Age1xyXG4gIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZmlsdGVyLXNpZGUge1xyXG4gIGhlaWdodDogNDAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnczLXVsIGxpIHtcclxuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1iZXJfaW5wdXQge1xyXG4gIHdpZHRoOiA0NXB4XHJcbn1cclxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc21hbGwtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcbiovXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmlsdGVyLXNpZGUge1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udzMtdWwgbGkge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.auth = _shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/settings/components/permission/permission.component.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/settings/components/city/city.component.ts");
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/country/country.component */ "./src/app/settings/components/country/country.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var _components_area_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/area/area.component */ "./src/app/settings/components/area/area.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/settings/components/service/service.component.ts");
/* harmony import */ var _components_payment_type_payment_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/payment-type/payment-type.component */ "./src/app/settings/components/payment-type/payment-type.component.ts");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/status/status.component */ "./src/app/settings/components/status/status.component.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/settings/components/department/department.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/settings/components/category/category.component.ts");
/* harmony import */ var _components_expense_type_expense_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/expense-type/expense-type.component */ "./src/app/settings/components/expense-type/expense-type.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/settings/components/store/store.component.ts");
/* harmony import */ var _components_courier_commision_courier_commision_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/courier-commision/courier-commision.component */ "./src/app/settings/components/courier-commision/courier-commision.component.ts");
/* harmony import */ var _components_courier_daily_courier_daily_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/courier-daily/courier-daily.component */ "./src/app/settings/components/courier-daily/courier-daily.component.ts");
/* harmony import */ var _components_trans_type_trans_type_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/trans-type/trans-type.component */ "./src/app/settings/components/trans-type/trans-type.component.ts");
























var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__["TranslationComponent"],
                _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_9__["PermissionComponent"],
                _components_city_city_component__WEBPACK_IMPORTED_MODULE_10__["CityComponent"],
                _components_country_country_component__WEBPACK_IMPORTED_MODULE_11__["CountryComponent"],
                _components_area_area_component__WEBPACK_IMPORTED_MODULE_13__["AreaComponent"],
                _components_service_service_component__WEBPACK_IMPORTED_MODULE_14__["ServiceComponent"],
                _components_payment_type_payment_type_component__WEBPACK_IMPORTED_MODULE_15__["PaymentTypeComponent"],
                _components_status_status_component__WEBPACK_IMPORTED_MODULE_16__["StatusComponent"],
                _components_department_department_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_18__["CategoryComponent"],
                _components_expense_type_expense_type_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseTypeComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_20__["StoreComponent"],
                _components_courier_commision_courier_commision_component__WEBPACK_IMPORTED_MODULE_21__["CourierCommisionComponent"],
                _components_courier_daily_courier_daily_component__WEBPACK_IMPORTED_MODULE_22__["CourierDailyComponent"],
                _components_trans_type_trans_type_component__WEBPACK_IMPORTED_MODULE_23__["TransTypeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]
            ],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/translation/translation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"w3-block\">\r\n\r\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\r\n\r\n  <div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\r\n\r\n    <div class=\"w3-padding w3-display-topright\"    >\r\n      <input type=\"text\" [(ngModel)]=\"filter.search\" class=\"form-control w3-round\" placeholder=\"{{ 'search' | trans }}\" >\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"w3-padding w3-display-topleft\"    >\r\n      <button class=\"btn btn-primary\" [disabled]=\"isUpdate\" (click)=\"updateTranslation()\" >{{ \"save changes\" | trans }}</button>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"text-center w3-padding\">\r\n      <b>\r\n        {{ \"translations\" | trans }}\r\n      </b>\r\n      <br>\r\n      <br>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\"  style=\"height: 400px\" >\r\n\r\n    <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\r\n\r\n      <tr class=\"w3-light-gray\" >\r\n        <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"key\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"name_en\" | trans }}</th>\r\n        <th class=\"w3-padding\" >{{ \"name_ar\" | trans }}</th>\r\n      </tr>\r\n      <ng-container *ngFor=\"let item of response.data index as i\" >\r\n        <tr\r\n        *ngIf=\"search(item)\" >\r\n          <td>\r\n            <span>{{ i + 1 }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            class=\"w3-block w3-border-0  text-center\"\r\n            readonly\r\n            [(ngModel)]=\"item.key\"  >\r\n            <span style=\"display: none;\" >{{ item.key }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            style=\"min-width: 200px;\"\r\n            (change)=\"item.changed = 1\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            [(ngModel)]=\"item.name_en\" >\r\n            <span style=\"display: none;\" >{{ item.name_en }}</span>\r\n          </td>\r\n          <td>\r\n            <input\r\n            type=\"text\"\r\n            style=\"min-width: 200px;\"\r\n            (change)=\"item.changed = 1\"\r\n            class=\"w3-block w3-border-0 text-center\"\r\n            [(ngModel)]=\"item.name_ar\" >\r\n            <span style=\"display: none;\" >{{ item.name_ar }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n\r\n    </table>\r\n    </div>\r\n\r\n\r\n    <div class=\"text-center w3-center\">\r\n      <nav aria-label=\"Page navigation\">\r\n        <ul class=\"pagination\">\r\n          <li>\r\n            <a class=\"btn\" [ngClass]=\"{'disabled': !response.prev_page}\" (click)=\"loadPage(response.prev_page)\"\r\n              aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n            </a>\r\n          </li>\r\n          <li *ngFor=\"let item of response.pages_arr\">\r\n            <a class=\"btn\" [ngClass]=\"{'active w3-indigo': response.current_page == item}\"\r\n              (click)=\"loadPage(item)\">{{ item }}</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"btn\" [ngClass]=\"{'disabled': !response.next_page}\" (click)=\"loadPage(response.next_page)\"\r\n              aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvdHJhbnNsYXRpb24vRTpcXHByb2plY3RzXFx1c2YtZnJvbnQvc3JjXFxhcHBcXHNldHRpbmdzXFx0cmFuc2xhdGlvblxcdHJhbnNsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xyXG59XHJcbiIsIi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.ts ***!
  \***************************************************************/
/*! exports provided: TranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationComponent", function() { return TranslationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/message */ "./src/app/shared/message.ts");






var TranslationComponent = /** @class */ (function () {
    function TranslationComponent(translationService) {
        this.translationService = translationService;
        this.$ = $;
        this.datatable = null;
        this.isUpdate = false;
        this.response = {};
        this.currentPage = 1;
        this.breadcrumbList = [];
        this.filter = {};
    }
    TranslationComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: "translations", url: '#', active: true },
        ];
    };
    TranslationComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.submitNotExistTranslation();
        this.loadTranslations();
    };
    /**
     * search in fields
     * @param item
     */
    TranslationComponent.prototype.search = function (item) {
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
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadTranslations = function () {
        var _this = this;
        var data = {
            page: this.currentPage
        };
        this.translationService.getList(data).subscribe(function (r) {
            _this.response = r;
            _this.prePagniation();
        });
    };
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadِAppTranslations = function (keys) {
        if (keys === void 0) { keys = null; }
        //Translation.TRANSLATION_DATA = null;
        this.translationService.get().subscribe(function (r) {
            _shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_DATA = r;
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].remove(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_KEY);
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].set(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_KEY, r);
        });
    };
    /**
     * update keys not exists
     */
    TranslationComponent.prototype.submitNotExistTranslation = function () {
        var _this = this;
        if (!_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys())
            return;
        var data = {
            data: _shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys(),
            not_exist: 1
        };
        this.translationService.update(data).subscribe(function (r) {
            _this.loadTranslations();
            //
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].remove(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_NOT_EXISTS_KEY);
        });
    };
    /**
     * update new words
     */
    TranslationComponent.prototype.updateTranslation = function () {
        var _this = this;
        var changedWord = [];
        this.response.data.forEach(function (element) {
            if (element.changed == 1) {
                element.value = null;
                changedWord.push(element);
            }
        });
        var data = {
            data: changedWord
        };
        this.isUpdate = true;
        this.translationService.update(data).subscribe(function (r) {
            var data = r;
            if (data.status == 1)
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            _this.isUpdate = false;
            //this.loadTranslations();
            _this.loadِAppTranslations(changedWord);
        });
    };
    TranslationComponent.prototype.loadPage = function (page) {
        this.currentPage = page;
        this.loadTranslations();
    };
    TranslationComponent.prototype.prePagniation = function () {
        if (!this.response.data)
            return;
        this.response.prev_page = this.response.prev_page_url ? this.response.prev_page_url.replace(this.response.path + '?page=', '') : null;
        this.response.next_page = this.response.next_page_url ? this.response.next_page_url.replace(this.response.path + '?page=', '') : null;
        this.response.pages = Math.ceil(this.response.total / this.response.per_page);
        this.response.pages_arr = [];
        for (var i = 0; i < this.response.pages; i++)
            this.response.pages_arr.push(i + 1);
    };
    TranslationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translation',
            template: __webpack_require__(/*! ./translation.component.html */ "./src/app/settings/translation/translation.component.html"),
            styles: [__webpack_require__(/*! ./translation.component.scss */ "./src/app/settings/translation/translation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], TranslationComponent);
    return TranslationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map