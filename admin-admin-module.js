(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js ***!
  \*******************************************************************************/
/*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function() { return AutocompleteLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function() { return AutocompleteLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteLibComponent = /** @class */ (function () {
    function AutocompleteLibComponent() {
    }
    /**
     * @return {?}
     */
    AutocompleteLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AutocompleteLibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-autocomplete-lib',
                    template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AutocompleteLibComponent.ctorParameters = function () { return []; };
    return AutocompleteLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Keyboard events
 * @type {?}
 */
var isArrowUp = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 38; });
var ɵ0 = isArrowUp;
/** @type {?} */
var isArrowDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 40; });
var ɵ1 = isArrowDown;
/** @type {?} */
var isArrowUpDown = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return isArrowUp(keyCode) || isArrowDown(keyCode); });
var ɵ2 = isArrowUpDown;
/** @type {?} */
var isEnter = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 13; });
var ɵ3 = isEnter;
/** @type {?} */
var isBackspace = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 8; });
var ɵ4 = isBackspace;
/** @type {?} */
var isDelete = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 46; });
var ɵ5 = isDelete;
/** @type {?} */
var isESC = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 27; });
var ɵ6 = isESC;
/** @type {?} */
var isTab = (/**
 * @param {?} keyCode
 * @return {?}
 */
function (keyCode) { return keyCode === 9; });
var ɵ7 = isTab;
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(elementRef, renderer) {
        this.renderer = renderer;
        this.query = ''; // search query
        // search query
        this.filteredList = []; // list of items
        // list of items
        this.historyList = []; // list of history items
        // list of history items
        this.isHistoryListVisible = true;
        this.selectedIdx = -1;
        this.toHighlight = '';
        this.notFound = false;
        this.isFocused = false;
        this.isOpen = false;
        this.isScrollToEnd = false;
        this.overlay = false;
        this.manualOpen = undefined;
        this.manualClose = undefined;
        // @Inputs
        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         */
        this.data = [];
        // keyword to filter the list
        this.placeholder = '';
        this.heading = '';
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         */
        this.historyHeading = 'Recently selected';
        this.historyListMaxNumber = 15; // maximum number of items in the history list.
        // maximum number of items in the history list.
        this.notFoundText = 'Not found'; // set custom text when filter returns empty result
        // input disable/enable
        /**
         * The minimum number of characters the user must type before a search is performed.
         */
        this.minQueryLength = 1;
        /**
         * Focus first item in the list
         */
        this.focusFirst = false;
        // @Output events
        /**
         * Event that is emitted whenever an item from the list is selected.
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is changed.
         */
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is focused.
         */
        this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is cleared.
         */
        this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when scrolled to the end of items.
         */
        this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Propagates new value when model changes
         */
        this.propagateChange = (/**
         * @return {?}
         */
        function () {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
        this.elementRef = elementRef;
    }
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     */
    /**
     * Writes a new value from the form model into the view,
     * Updates model
     * @param {?=} value
     * @return {?}
     */
    AutocompleteComponent.prototype.writeValue = /**
     * Writes a new value from the form model into the view,
     * Updates model
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this.query = value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
    };
    /**
     * Registers a handler that is called when something in the view has changed
     */
    /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */
    AutocompleteComponent.prototype.registerOnChange = /**
     * Registers a handler that is called when something in the view has changed
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a handler specifically for when a control receives a touch event
     */
    /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */
    AutocompleteComponent.prototype.registerOnTouched = /**
     * Registers a handler specifically for when a control receives a touch event
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Event that is called when the value of an input element is changed
     */
    /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */
    AutocompleteComponent.prototype.onChange = /**
     * Event that is called when the value of an input element is changed
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.propagateChange(event.target.value);
    };
    /**
     * Event that is called when the control status changes to or from DISABLED
     */
    /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */
    AutocompleteComponent.prototype.setDisabledState = /**
     * Event that is called when the control status changes to or from DISABLED
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initEventStream();
        this.handleScroll();
    };
    /**
     * Set initial value
     * @param value
     */
    /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */
    AutocompleteComponent.prototype.setInitialValue = /**
     * Set initial value
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.initialValue) {
            this.select(value);
        }
    };
    /**
     * Update search results
     */
    /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnChanges = /**
     * Update search results
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setInitialValue(this.initialValue);
        if (changes &&
            changes.data &&
            Array.isArray(changes.data.currentValue)) {
            this.handleItemsChange();
            if (!changes.data.firstChange && this.isFocused) {
                this.handleOpen();
            }
        }
    };
    /**
     * Items change
     */
    /**
     * Items change
     * @return {?}
     */
    AutocompleteComponent.prototype.handleItemsChange = /**
     * Items change
     * @return {?}
     */
    function () {
        this.isScrollToEnd = false;
        if (!this.isOpen) {
            return;
        }
        this.filteredList = this.data;
        this.notFound = !this.filteredList || this.filteredList.length === 0;
        // Filter list when updating data and panel is open
        if (this.isOpen) {
            this.filterList();
        }
    };
    /**
     * Filter data
     */
    /**
     * Filter data
     * @return {?}
     */
    AutocompleteComponent.prototype.filterList = /**
     * Filter data
     * @return {?}
     */
    function () {
        this.selectedIdx = -1;
        this.initSearchHistory();
        if (this.query != null && this.data) {
            this.toHighlight = this.query;
            this.filteredList = this.customFilter !== undefined ? this.customFilter(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this.data), this.query) : this.defaultFilterFunction();
            // If [focusFirst]="true" automatically focus the first match
            if (this.filteredList.length > 0 && this.focusFirst) {
                this.selectedIdx = 0;
            }
        }
        else {
            this.notFound = false;
        }
    };
    /**
     * Default filter function, used unless customFilter is provided
     */
    /**
     * Default filter function, used unless customFilter is provided
     * @return {?}
     */
    AutocompleteComponent.prototype.defaultFilterFunction = /**
     * Default filter function, used unless customFilter is provided
     * @return {?}
     */
    function () {
        var _this = this;
        return this.data.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
            }
            else if (typeof item === 'object' && item instanceof Object) {
                // object logic, check property equality
                return item[_this.searchKeyword].toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
            }
        }));
    };
    /**
     * Check if item is a string in the list.
     * @param item
     */
    /**
     * Check if item is a string in the list.
     * @param {?} item
     * @return {?}
     */
    AutocompleteComponent.prototype.isTypeString = /**
     * Check if item is a string in the list.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return typeof item === 'string';
    };
    /**
     * Select item in the list.
     * @param item
     */
    /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */
    AutocompleteComponent.prototype.select = /**
     * Select item in the list.
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
        this.isOpen = true;
        this.overlay = false;
        this.selected.emit(item);
        this.propagateChange(item);
        if (this.initialValue) {
            // check if history already exists in localStorage and then update
            /** @type {?} */
            var history_1 = window.localStorage.getItem("" + this.historyIdentifier);
            if (history_1) {
                /** @type {?} */
                var existingHistory = JSON.parse(localStorage["" + this.historyIdentifier]);
                if (!(existingHistory instanceof Array))
                    existingHistory = [];
                // check if selected item exists in existingHistory
                if (!existingHistory.some((/**
                 * @param {?} existingItem
                 * @return {?}
                 */
                function (existingItem) { return !_this.isTypeString(existingItem)
                    ? existingItem[_this.searchKeyword] == item[_this.searchKeyword] : existingItem == item; }))) {
                    existingHistory.unshift(item);
                    localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                    // check if items don't exceed max allowed number
                    if (existingHistory.length >= this.historyListMaxNumber) {
                        existingHistory.splice(existingHistory.length - 1, 1);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                    }
                }
                else {
                    // if selected item exists in existingHistory swap to top in array
                    if (!this.isTypeString(item)) {
                        // object logic
                        /** @type {?} */
                        var copiedExistingHistory = existingHistory.slice();
                        // copy original existingHistory array
                        /** @type {?} */
                        var selectedIndex = copiedExistingHistory.map((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return el[_this.searchKeyword]; })).indexOf(item[this.searchKeyword]);
                        copiedExistingHistory.splice(selectedIndex, 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                    }
                    else {
                        // string logic
                        /** @type {?} */
                        var copiedExistingHistory = existingHistory.slice();
                        copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
                        copiedExistingHistory.splice(0, 0, item);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                    }
                }
            }
            else {
                this.saveHistory(item);
            }
        }
        else {
            this.saveHistory(item);
        }
        this.handleClose();
    };
    /**
     * Document click
     * @param e event
     */
    /**
     * Document click
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.handleClick = /**
     * Document click
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var clickedComponent = e.target;
        /** @type {?} */
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
                if (this.filteredList.length) {
                    this.handleOpen();
                }
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.handleClose();
        }
    };
    /**
     * Handle body overlay
     */
    /**
     * Handle body overlay
     * @return {?}
     */
    AutocompleteComponent.prototype.handleOverlay = /**
     * Handle body overlay
     * @return {?}
     */
    function () {
        this.overlay = false;
    };
    /**
     * Scroll items
     */
    /**
     * Scroll items
     * @return {?}
     */
    AutocompleteComponent.prototype.handleScroll = /**
     * Scroll items
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', (/**
         * @return {?}
         */
        function () {
            _this.scrollToEnd();
        }));
    };
    /**
     * Define panel state
     */
    /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */
    AutocompleteComponent.prototype.setPanelState = /**
     * Define panel state
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.stopPropagation();
        }
        // If controls are untouched
        if (typeof this.manualOpen === 'undefined'
            && typeof this.manualClose === 'undefined') {
            this.isOpen = false;
            this.handleOpen();
        }
        // If one of the controls is untouched and other is deactivated
        if (typeof this.manualOpen === 'undefined'
            && this.manualClose === false
            || typeof this.manualClose === 'undefined'
                && this.manualOpen === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if controls are touched but both are deactivated
        if (this.manualOpen === false && this.manualClose === false) {
            this.isOpen = false;
            this.handleOpen();
        }
        // if open control is touched and activated
        if (this.manualOpen) {
            this.isOpen = false;
            this.handleOpen();
            this.manualOpen = false;
        }
        // if close control is touched and activated
        if (this.manualClose) {
            this.isOpen = true;
            this.handleClose();
            this.manualClose = false;
        }
    };
    /**
     * Manual controls
     */
    /**
     * Manual controls
     * @return {?}
     */
    AutocompleteComponent.prototype.open = /**
     * Manual controls
     * @return {?}
     */
    function () {
        this.manualOpen = true;
        this.isOpen = false;
        this.handleOpen();
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.manualClose = true;
        this.isOpen = true;
        this.handleClose();
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.handleFocus(event);
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.remove(event);
    };
    /**
     * Remove search query
     */
    /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */
    AutocompleteComponent.prototype.remove = /**
     * Remove search query
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.query = '';
        this.inputCleared.emit();
        this.propagateChange(this.query);
        this.setPanelState(e);
        if (this.data && !this.data.length) {
            this.notFound = false;
        }
    };
    /**
     * Initialize historyList search
     */
    /**
     * Initialize historyList search
     * @return {?}
     */
    AutocompleteComponent.prototype.initSearchHistory = /**
     * Initialize historyList search
     * @return {?}
     */
    function () {
        this.isHistoryListVisible = false;
        if (this.historyIdentifier && !this.query) {
            /** @type {?} */
            var history_2 = window.localStorage.getItem("" + this.historyIdentifier);
            if (history_2) {
                this.isHistoryListVisible = true;
                this.filteredList = [];
                this.historyList = history_2 ? JSON.parse(history_2) : [];
            }
            else {
                this.isHistoryListVisible = false;
            }
        }
        else {
            this.isHistoryListVisible = false;
        }
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.handleOpen = /**
     * @return {?}
     */
    function () {
        if (this.isOpen || this.isOpen && !this.isLoading) {
            return;
        }
        // If data exists
        if (this.data && this.data.length) {
            this.isOpen = true;
            this.overlay = true;
            this.filterList();
            this.opened.emit();
        }
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isFocused = false;
            return;
        }
        this.isOpen = false;
        this.overlay = false;
        this.filteredList = [];
        this.selectedIdx = -1;
        this.notFound = false;
        this.isHistoryListVisible = false;
        this.isFocused = false;
        this.closed.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AutocompleteComponent.prototype.handleFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.searchInput.nativeElement.focus();
        if (this.isFocused) {
            return;
        }
        this.inputFocused.emit(e);
        // if data exists then open
        if (this.data && this.data.length) {
            this.setPanelState(event);
        }
        this.isFocused = true;
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.scrollToEnd = /**
     * @return {?}
     */
    function () {
        if (this.isScrollToEnd) {
            return;
        }
        /** @type {?} */
        var scrollTop = this.filteredListElement.nativeElement
            .scrollTop;
        /** @type {?} */
        var scrollHeight = this.filteredListElement.nativeElement
            .scrollHeight;
        /** @type {?} */
        var elementHeight = this.filteredListElement.nativeElement
            .clientHeight;
        /** @type {?} */
        var atBottom = scrollHeight === scrollTop + elementHeight;
        if (atBottom) {
            this.scrolledToEnd.emit();
            this.isScrollToEnd = true;
        }
    };
    /**
     * Initialize keyboard events
     */
    /**
     * Initialize keyboard events
     * @return {?}
     */
    AutocompleteComponent.prototype.initEventStream = /**
     * Initialize keyboard events
     * @return {?}
     */
    function () {
        this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e; })));
        this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e; })));
        this.listenEventStream();
    };
    /**
     * Listen keyboard events
     */
    /**
     * Listen keyboard events
     * @return {?}
     */
    AutocompleteComponent.prototype.listenEventStream = /**
     * Listen keyboard events
     * @return {?}
     */
    function () {
        var _this = this;
        // key up event
        this.inputKeyUp$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            return !isArrowUpDown(e.keyCode) &&
                !isEnter(e.keyCode) &&
                !isESC(e.keyCode) &&
                !isTab(e.keyCode);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onKeyUp(e);
        }));
        // cursor up & down
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isArrowUpDown(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            _this.onFocusItem(e);
        }));
        // enter keyup
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isEnter(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            //this.onHandleEnter();
        }));
        // enter keydown
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isEnter(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onHandleEnter();
        }));
        // ESC
        this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isESC(e.keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onEsc();
        }));
        // TAB
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isTab(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onTab();
        }));
        // delete
        this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return isBackspace(e.keyCode) || isDelete(e.keyCode); }))).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onDelete();
        }));
    };
    /**
     * on keyup == when input changed
     * @param e event
     */
    /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.onKeyUp = /**
     * on keyup == when input changed
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        this.notFound = false; // search results are unknown while typing
        // if input is empty
        if (!this.query) {
            this.notFound = false;
            this.inputChanged.emit(e.target.value);
            this.inputCleared.emit();
            this.setPanelState(e);
        }
        // note that '' can be a valid query
        if (!this.query && this.query !== '') {
            return;
        }
        // if query >= to minQueryLength
        if (this.query.length >= this.minQueryLength) {
            this.inputChanged.emit(e.target.value);
            this.filterList();
            // If no results found
            if (!this.filteredList.length && !this.isLoading) {
                this.notFoundText ? this.notFound = true : this.notFound = false;
            }
            if (this.data && !this.data.length) {
                this.isOpen = true;
            }
        }
    };
    /**
     * Keyboard arrow top and arrow bottom
     * @param e event
     */
    /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.onFocusItem = /**
     * Keyboard arrow top and arrow bottom
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        // move arrow up and down on filteredList or historyList
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList
            /** @type {?} */
            var totalNumItem = this.filteredList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
        else {
            // historyList
            /** @type {?} */
            var totalNumItem = this.historyList.length;
            if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = (this.selectedIdx === null) ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
            else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                    this.selectedIdx = 0;
                }
                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
            }
        }
    };
    /**
     * Scroll to focused item
     * * @param index
     */
    /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */
    AutocompleteComponent.prototype.scrollToFocusedItem = /**
     * Scroll to focused item
     * * \@param index
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var listElement = null;
        // Define list element
        if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList element
            listElement = this.filteredListElement.nativeElement;
        }
        else {
            // historyList element
            listElement = this.historyListElement.nativeElement;
        }
        /** @type {?} */
        var items = Array.prototype.slice.call(listElement.childNodes).filter((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.nodeType === 1) {
                // if node is element
                return node.className.includes('item');
            }
            else {
                return false;
            }
        }));
        if (!items.length) {
            return;
        }
        /** @type {?} */
        var listHeight = listElement.offsetHeight;
        /** @type {?} */
        var itemHeight = items[index].offsetHeight;
        /** @type {?} */
        var visibleTop = listElement.scrollTop;
        /** @type {?} */
        var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
        /** @type {?} */
        var targetPosition = items[index].offsetTop;
        if (targetPosition < visibleTop) {
            listElement.scrollTop = targetPosition;
        }
        if (targetPosition > visibleBottom) {
            listElement.scrollTop = targetPosition - listHeight + itemHeight;
        }
    };
    /**
     * Select item on enter click
     */
    /**
     * Select item on enter click
     * @return {?}
     */
    AutocompleteComponent.prototype.onHandleEnter = /**
     * Select item on enter click
     * @return {?}
     */
    function () {
        // click enter to choose item from filteredList or historyList
        if (this.selectedIdx > -1) {
            if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                this.query = !this.isTypeString(this.filteredList[this.selectedIdx])
                    ? this.filteredList[this.selectedIdx][this.searchKeyword]
                    : this.filteredList[this.selectedIdx];
                this.saveHistory(this.filteredList[this.selectedIdx]);
                this.select(this.filteredList[this.selectedIdx]);
            }
            else {
                // historyList
                this.query = !this.isTypeString(this.historyList[this.selectedIdx])
                    ? this.historyList[this.selectedIdx][this.searchKeyword]
                    : this.historyList[this.selectedIdx];
                this.saveHistory(this.historyList[this.selectedIdx]);
                this.select(this.historyList[this.selectedIdx]);
            }
        }
        this.isHistoryListVisible = false;
        this.handleClose();
    };
    /**
     * Esc click
     */
    /**
     * Esc click
     * @return {?}
     */
    AutocompleteComponent.prototype.onEsc = /**
     * Esc click
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    };
    /**
     * Tab click
     */
    /**
     * Tab click
     * @return {?}
     */
    AutocompleteComponent.prototype.onTab = /**
     * Tab click
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
        this.handleClose();
    };
    /**
     * Delete click
     */
    /**
     * Delete click
     * @return {?}
     */
    AutocompleteComponent.prototype.onDelete = /**
     * Delete click
     * @return {?}
     */
    function () {
        this.isOpen = true;
    };
    /**
     * Select item to save in localStorage
     * @param selected
     */
    /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */
    AutocompleteComponent.prototype.saveHistory = /**
     * Select item to save in localStorage
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        var _this = this;
        if (this.historyIdentifier) {
            // check if selected item exists in historyList
            if (!this.historyList.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !_this.isTypeString(item)
                ? item[_this.searchKeyword] == selected[_this.searchKeyword] : item == selected; }))) {
                this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([selected], this.historyList));
                // check if items don't exceed max allowed number
                if (this.historyList.length >= this.historyListMaxNumber) {
                    this.historyList.splice(this.historyList.length - 1, 1);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([selected], this.historyList));
                }
            }
            else {
                // if selected item exists in historyList swap to top in array
                if (!this.isTypeString(selected)) {
                    // object logic
                    /** @type {?} */
                    var copiedHistoryList = this.historyList.slice();
                    // copy original historyList array
                    /** @type {?} */
                    var selectedIndex = copiedHistoryList.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item[_this.searchKeyword]; })).indexOf(selected[this.searchKeyword]);
                    copiedHistoryList.splice(selectedIndex, 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(copiedHistoryList));
                }
                else {
                    // string logic
                    /** @type {?} */
                    var copiedHistoryList = this.historyList.slice();
                    copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
                    copiedHistoryList.splice(0, 0, selected);
                    this.saveHistoryToLocalStorage(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(copiedHistoryList));
                }
            }
        }
    };
    /**
     * Save item in localStorage
     * @param selected
     */
    /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */
    AutocompleteComponent.prototype.saveHistoryToLocalStorage = /**
     * Save item in localStorage
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        window.localStorage.setItem("" + this.historyIdentifier, JSON.stringify(selected));
    };
    /**
     * Remove item from localStorage
     * @param index
     * @param e event
     */
    /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.removeHistoryItem = /**
     * Remove item from localStorage
     * @param {?} index
     * @param {?} e event
     * @return {?}
     */
    function (index, e) {
        e.stopPropagation();
        this.historyList = this.historyList.filter((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) { return i !== index; }));
        this.saveHistoryToLocalStorage(this.historyList);
        if (this.historyList.length == 0) {
            window.localStorage.removeItem("" + this.historyIdentifier);
            this.filterList();
        }
    };
    /**
     * Reset localStorage
     * @param e event
     */
    /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */
    AutocompleteComponent.prototype.resetHistoryList = /**
     * Reset localStorage
     * @param {?} e event
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.historyList = [];
        window.localStorage.removeItem("" + this.historyIdentifier);
        this.filterList();
    };
    AutocompleteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-autocomplete',
                    template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return AutocompleteComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    host: {
                        '(document:click)': 'handleClick($event)',
                        'class': 'ng-autocomplete'
                    },
                    styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    AutocompleteComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    AutocompleteComponent.propDecorators = {
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput',] }],
        filteredListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filteredListElement',] }],
        historyListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['historyListElement',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchKeyword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyIdentifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyHeading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        historyListMaxNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minQueryLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputFocused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputCleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scrolledToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return AutocompleteComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete/highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} search
     * @param {?=} searchKeyword
     * @return {?}
     */
    function (text, search, searchKeyword) {
        /** @type {?} */
        var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            return t.length > 0;
        })).join('|');
        /** @type {?} */
        var regex = new RegExp(pattern, 'gi');
        if (!search) {
            return text;
        }
        if (searchKeyword) {
            /** @type {?} */
            var name_1 = text[searchKeyword].replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            function (match) { return "<b>" + match + "</b>"; }));
            // copy original object
            /** @type {?} */
            var text2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, text);
            // set bold value into searchKeyword of copied object
            text2[searchKeyword] = name_1;
            return text2;
        }
        else {
            return search ? text.replace(regex, (/**
             * @param {?} match
             * @return {?}
             */
            function (match) { return "<b>" + match + "</b>"; })) : text;
        }
    };
    HighlightPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'highlight'
                },] }
    ];
    return HighlightPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteLibModule = /** @class */ (function () {
    function AutocompleteLibModule() {
    }
    AutocompleteLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ],
                    declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
                    exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
                },] }
    ];
    return AutocompleteLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-ng-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-ng-autocomplete.js.map


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_report_one_customer_city_awb_one_customer_city_awb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/report/one-customer-city-awb/one-customer-city-awb.component */ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/middlewares/auth-guest.service */ "./src/app/shared/middlewares/auth-guest.service.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/admin/components/company/company.component.ts");
/* harmony import */ var _components_branch_branch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/branch/branch.component */ "./src/app/admin/components/branch/branch.component.ts");
/* harmony import */ var _components_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/receiver/receiver.component */ "./src/app/admin/components/receiver/receiver.component.ts");
/* harmony import */ var _components_courier_courier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/courier/courier.component */ "./src/app/admin/components/courier/courier.component.ts");
/* harmony import */ var _components_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pickup/pickup.component */ "./src/app/admin/components/pickup/pickup.component.ts");
/* harmony import */ var _components_courier_sheet_courier_sheet_form_courier_sheet_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/courier-sheet/courier-sheet-form/courier-sheet-form.component */ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.ts");
/* harmony import */ var _components_awb_awb_form_awb_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/awb/awb-form/awb-form.component */ "./src/app/admin/components/awb/awb-form/awb-form.component.ts");
/* harmony import */ var _components_awb_awb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/awb/awb.component */ "./src/app/admin/components/awb/awb.component.ts");
/* harmony import */ var _components_courier_sheet_courier_sheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/courier-sheet/courier-sheet.component */ "./src/app/admin/components/courier-sheet/courier-sheet.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/admin/components/home/home.component.ts");
/* harmony import */ var _components_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/price-table/price-table.component */ "./src/app/admin/components/price-table/price-table.component.ts");
/* harmony import */ var _components_receipt_out_receipt_out_receipt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/receipt/out-receipt/out-receipt.component */ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.ts");
/* harmony import */ var _components_receipt_in_receipt_in_receipt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/receipt/in-receipt/in-receipt.component */ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.ts");
/* harmony import */ var _components_courier_sheet_update_courier_sheet_update_courier_sheet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/courier-sheet/update-courier-sheet/update-courier-sheet.component */ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.ts");
/* harmony import */ var _components_courier_sheet_update_accounting_courier_sheet_update_accounting_courier_sheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component */ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.ts");
/* harmony import */ var _components_accounting_awb_customer_review_awb_customer_review_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/accounting/awb-customer-review/awb-customer-review.component */ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.ts");
/* harmony import */ var _components_report_awb_prices_awb_prices_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/report/awb-prices/awb-prices.component */ "./src/app/admin/components/report/awb-prices/awb-prices.component.ts");
/* harmony import */ var _components_report_store_transaction_store_transaction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/report/store-transaction/store-transaction.component */ "./src/app/admin/components/report/store-transaction/store-transaction.component.ts");
/* harmony import */ var _components_awb_awb_pod_awb_pod_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/awb/awb-pod/awb-pod.component */ "./src/app/admin/components/awb/awb-pod/awb-pod.component.ts");
/* harmony import */ var _components_report_customer_awb_customer_awb_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/report/customer-awb/customer-awb.component */ "./src/app/admin/components/report/customer-awb/customer-awb.component.ts");
/* harmony import */ var _components_website_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/website/about-us/about-us.component */ "./src/app/admin/components/website/about-us/about-us.component.ts");
/* harmony import */ var _components_website_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/website/our-services/our-services.component */ "./src/app/admin/components/website/our-services/our-services.component.ts");
/* harmony import */ var _components_report_one_customer_status_awb_one_customer_status_awb_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/report/one-customer-status-awb/one-customer-status-awb.component */ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.ts");
/* harmony import */ var _components_mailbox_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/mailbox/mailbox/mailbox.component */ "./src/app/admin/components/mailbox/mailbox/mailbox.component.ts");
/* harmony import */ var _components_report_courier_awb_status_courier_awb_status_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/report/courier-awb-status/courier-awb-status.component */ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.ts");
/* harmony import */ var _components_report_courier_commission_courier_commission_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/report/courier-commission/courier-commission.component */ "./src/app/admin/components/report/courier-commission/courier-commission.component.ts");
/* harmony import */ var _components_report_awb_prices2_awb_prices2_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/report/awb-prices2/awb-prices2.component */ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.ts");
/* harmony import */ var _components_report_pricetable_report_pricetable_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/report/pricetable-report/pricetable-report.component */ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.ts");
/* harmony import */ var _components_report_postal_invoice_postal_invoice_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/report/postal-invoice/postal-invoice.component */ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.ts");
/* harmony import */ var _components_report_invoice_header_invoice_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/report/invoice-header/invoice-header.component */ "./src/app/admin/components/report/invoice-header/invoice-header.component.ts");





































var routes = [
    {
        path: 'dashboard',
        //canActivate: [AuthGuestService],
        //data: {can: Auth.can('pickup_read')},
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
    },
    {
        path: 'report/payment-details',
        //canActivate: [AuthGuestService],
        data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('payment_detail_report') },
        component: null
    },
    {
        path: "",
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            {
                path: '',
                //canActivate: [AuthGuestService],
                //data: {can: Auth.can('pickup_read')},
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            },
            {
                path: 'pickup',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('pickup_read') },
                component: _components_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_11__["PickupComponent"]
            },
            {
                path: 'company',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('company_read') },
                component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"]
            },
            {
                path: 'receiver',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('receiver_read') },
                component: _components_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_9__["ReceiverComponent"]
            },
            {
                path: 'courier',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('courier_read') },
                component: _components_courier_courier_component__WEBPACK_IMPORTED_MODULE_10__["CourierComponent"]
            },
            {
                path: 'courier-sheet',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('courier_sheet_read') },
                component: _components_courier_sheet_courier_sheet_component__WEBPACK_IMPORTED_MODULE_15__["CourierSheetComponent"]
            },
            {
                path: 'courier-sheet-create',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('courier_sheet_add') },
                component: _components_courier_sheet_courier_sheet_form_courier_sheet_form_component__WEBPACK_IMPORTED_MODULE_12__["CourierSheetFormComponent"]
            },
            {
                path: 'update-courier-sheet',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('update_courier_sheet') },
                component: _components_courier_sheet_update_courier_sheet_update_courier_sheet_component__WEBPACK_IMPORTED_MODULE_20__["UpdateCourierSheetComponent"]
            },
            {
                path: 'update-account-courier-sheet',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('update_account_courier_sheet') },
                component: _components_courier_sheet_update_accounting_courier_sheet_update_accounting_courier_sheet_component__WEBPACK_IMPORTED_MODULE_21__["UpdateAccountingCourierSheetComponent"]
            },
            {
                path: 'awb-customer-review',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('awb_customer_review') },
                component: _components_accounting_awb_customer_review_awb_customer_review_component__WEBPACK_IMPORTED_MODULE_22__["AwbCustomerReviewComponent"]
            },
            {
                path: 'courier-sheet-edit/:id',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('courier_sheet_edit') },
                component: _components_courier_sheet_courier_sheet_form_courier_sheet_form_component__WEBPACK_IMPORTED_MODULE_12__["CourierSheetFormComponent"]
            },
            {
                path: 'awb',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('awb_read') },
                component: _components_awb_awb_component__WEBPACK_IMPORTED_MODULE_14__["AwbComponent"]
            },
            {
                path: 'awb-create',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('awb_add') },
                component: _components_awb_awb_form_awb_form_component__WEBPACK_IMPORTED_MODULE_13__["AwbFormComponent"]
            },
            {
                path: 'awb-pod',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('awb_change_status') },
                component: _components_awb_awb_pod_awb_pod_component__WEBPACK_IMPORTED_MODULE_25__["AwbPodComponent"]
            },
            {
                path: 'awb-edit/:id',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('awb_add') },
                component: _components_awb_awb_form_awb_form_component__WEBPACK_IMPORTED_MODULE_13__["AwbFormComponent"]
            },
            {
                path: 'company-branch',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('company_branch_read') },
                component: _components_branch_branch_component__WEBPACK_IMPORTED_MODULE_8__["BranchComponent"]
            },
            {
                path: 'price-table',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('price_table_read') },
                component: _components_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_17__["PriceTableComponent"]
            },
            {
                path: 'out-receipt',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('out_receipt_read') },
                component: _components_receipt_out_receipt_out_receipt_component__WEBPACK_IMPORTED_MODULE_18__["OutReceiptComponent"]
            },
            {
                path: 'in-receipt',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('in_receipt_read') },
                component: _components_receipt_in_receipt_in_receipt_component__WEBPACK_IMPORTED_MODULE_19__["InReceiptComponent"]
            },
            {
                path: 'report/awb-prices',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_awb_price') },
                component: _components_report_awb_prices_awb_prices_component__WEBPACK_IMPORTED_MODULE_23__["AwbPricesComponent"]
            },
            {
                path: 'report/awb-prices2',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_awb_price') },
                component: _components_report_awb_prices2_awb_prices2_component__WEBPACK_IMPORTED_MODULE_33__["AwbPrices2Component"]
            },
            {
                path: 'report/awb-prices3',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_awb_price') },
                component: _components_report_postal_invoice_postal_invoice_component__WEBPACK_IMPORTED_MODULE_35__["PostalInvoiceComponent"]
            },
            {
                path: 'report/invoice-cover',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_awb_price') },
                component: _components_report_invoice_header_invoice_header_component__WEBPACK_IMPORTED_MODULE_36__["InvoiceHeaderComponent"]
            },
            {
                path: 'report/store-transactions',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_store_transaction') },
                component: _components_report_store_transaction_store_transaction_component__WEBPACK_IMPORTED_MODULE_24__["StoreTransactionComponent"]
            },
            {
                path: 'report/customer-awb',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_customer_awb') },
                component: _components_report_customer_awb_customer_awb_component__WEBPACK_IMPORTED_MODULE_26__["CustomerAwbComponent"]
            },
            {
                path: 'report/one-customer-awb-status',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_one_customer_awb_status') },
                component: _components_report_one_customer_status_awb_one_customer_status_awb_component__WEBPACK_IMPORTED_MODULE_29__["OneCustomerStatusAwbComponent"]
            },
            {
                path: 'report/one-customer-awb-city',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('report_one_customer_awb_city') },
                component: _components_report_one_customer_city_awb_one_customer_city_awb_component__WEBPACK_IMPORTED_MODULE_1__["OneCustomerCityAwbComponent"]
            },
            {
                path: 'report/one-courier-awb-status',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('one_courier_awb_status_report') },
                component: _components_report_courier_awb_status_courier_awb_status_component__WEBPACK_IMPORTED_MODULE_31__["CourierAwbStatusComponent"]
            },
            {
                path: 'report/courier-commission',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('courier_commission_report') },
                component: _components_report_courier_commission_courier_commission_component__WEBPACK_IMPORTED_MODULE_32__["CourierCommissionComponent"]
            },
            {
                path: 'report/pricetable',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('pricetable_report') },
                component: _components_report_pricetable_report_pricetable_report_component__WEBPACK_IMPORTED_MODULE_34__["PricetableReportComponent"]
            },
            {
                path: 'website/about',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('edit_website_about') },
                component: _components_website_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_27__["AboutUsComponent"]
            },
            {
                path: 'website/our-service',
                //canActivate: [AuthGuestService],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('edit_website_service') },
                component: _components_website_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_28__["OurServicesComponent"]
            },
            {
                path: 'mailbox',
                canActivate: [_shared_middlewares_auth_guest_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuestService"]],
                data: { can: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].can('read_mailbox') },
                component: _components_mailbox_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_30__["MailboxComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <!-- /.col -->\n  <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_report_awb_prices2_awb_prices2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/report/awb-prices2/awb-prices2.component */ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/admin/components/company/company.component.ts");
/* harmony import */ var _components_company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/company/company-form/company-form.component */ "./src/app/admin/components/company/company-form/company-form.component.ts");
/* harmony import */ var _components_branch_branch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/branch/branch.component */ "./src/app/admin/components/branch/branch.component.ts");
/* harmony import */ var _components_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/receiver/receiver.component */ "./src/app/admin/components/receiver/receiver.component.ts");
/* harmony import */ var _components_receiver_receiver_form_receiver_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/receiver/receiver-form/receiver-form.component */ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.ts");
/* harmony import */ var _components_courier_courier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/courier/courier.component */ "./src/app/admin/components/courier/courier.component.ts");
/* harmony import */ var _components_courier_courier_form_courier_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/courier/courier-form/courier-form.component */ "./src/app/admin/components/courier/courier-form/courier-form.component.ts");
/* harmony import */ var _components_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pickup/pickup.component */ "./src/app/admin/components/pickup/pickup.component.ts");
/* harmony import */ var _components_pickup_pickup_form_pickup_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pickup/pickup-form/pickup-form.component */ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.ts");
/* harmony import */ var _components_awb_awb_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/awb/awb.component */ "./src/app/admin/components/awb/awb.component.ts");
/* harmony import */ var _components_awb_awb_form_awb_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/awb/awb-form/awb-form.component */ "./src/app/admin/components/awb/awb-form/awb-form.component.ts");
/* harmony import */ var _components_courier_sheet_courier_sheet_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/courier-sheet/courier-sheet.component */ "./src/app/admin/components/courier-sheet/courier-sheet.component.ts");
/* harmony import */ var _components_courier_sheet_courier_sheet_form_courier_sheet_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/courier-sheet/courier-sheet-form/courier-sheet-form.component */ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.ts");
/* harmony import */ var _components_awb_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/awb/tracking/tracking.component */ "./src/app/admin/components/awb/tracking/tracking.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/admin/components/home/home.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _components_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/price-table/price-table.component */ "./src/app/admin/components/price-table/price-table.component.ts");
/* harmony import */ var _components_receipt_out_receipt_out_receipt_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/receipt/out-receipt/out-receipt.component */ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.ts");
/* harmony import */ var _components_receipt_receipt_form_receipt_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/receipt/receipt-form/receipt-form.component */ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.ts");
/* harmony import */ var _components_receipt_in_receipt_in_receipt_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/receipt/in-receipt/in-receipt.component */ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.ts");
/* harmony import */ var _components_courier_sheet_update_courier_sheet_update_courier_sheet_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/courier-sheet/update-courier-sheet/update-courier-sheet.component */ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.ts");
/* harmony import */ var _components_courier_sheet_update_accounting_courier_sheet_update_accounting_courier_sheet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component */ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.ts");
/* harmony import */ var _components_accounting_awb_customer_review_awb_customer_review_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/accounting/awb-customer-review/awb-customer-review.component */ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.ts");
/* harmony import */ var _components_report_awb_prices_awb_prices_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/report/awb-prices/awb-prices.component */ "./src/app/admin/components/report/awb-prices/awb-prices.component.ts");
/* harmony import */ var _components_report_store_transaction_store_transaction_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/report/store-transaction/store-transaction.component */ "./src/app/admin/components/report/store-transaction/store-transaction.component.ts");
/* harmony import */ var _components_awb_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/awb/change-status/change-status.component */ "./src/app/admin/components/awb/change-status/change-status.component.ts");
/* harmony import */ var _components_awb_awb_pod_awb_pod_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/awb/awb-pod/awb-pod.component */ "./src/app/admin/components/awb/awb-pod/awb-pod.component.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var _components_report_customer_awb_customer_awb_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/report/customer-awb/customer-awb.component */ "./src/app/admin/components/report/customer-awb/customer-awb.component.ts");
/* harmony import */ var _components_website_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/website/about-us/about-us.component */ "./src/app/admin/components/website/about-us/about-us.component.ts");
/* harmony import */ var _components_website_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/website/our-services/our-services.component */ "./src/app/admin/components/website/our-services/our-services.component.ts");
/* harmony import */ var _components_report_one_customer_status_awb_one_customer_status_awb_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/report/one-customer-status-awb/one-customer-status-awb.component */ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.ts");
/* harmony import */ var _components_report_one_customer_city_awb_one_customer_city_awb_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/report/one-customer-city-awb/one-customer-city-awb.component */ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.ts");
/* harmony import */ var _components_pickup_pickup_track_pickup_track_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/pickup/pickup-track/pickup-track.component */ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.ts");
/* harmony import */ var _components_mailbox_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/mailbox/mailbox/mailbox.component */ "./src/app/admin/components/mailbox/mailbox/mailbox.component.ts");
/* harmony import */ var _components_mailbox_mailbox_form_mailbox_form_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/mailbox/mailbox-form/mailbox-form.component */ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.ts");
/* harmony import */ var _components_report_courier_commission_courier_commission_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/report/courier-commission/courier-commission.component */ "./src/app/admin/components/report/courier-commission/courier-commission.component.ts");
/* harmony import */ var _components_report_courier_awb_status_courier_awb_status_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/report/courier-awb-status/courier-awb-status.component */ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.ts");
/* harmony import */ var _components_report_report_header_report_header_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/report/report-header/report-header.component */ "./src/app/admin/components/report/report-header/report-header.component.ts");
/* harmony import */ var _components_report_report_options_report_options_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/report/report-options/report-options.component */ "./src/app/admin/components/report/report-options/report-options.component.ts");
/* harmony import */ var _components_report_pricetable_report_pricetable_report_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/report/pricetable-report/pricetable-report.component */ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.ts");
/* harmony import */ var _components_report_postal_invoice_postal_invoice_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/report/postal-invoice/postal-invoice.component */ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.ts");
/* harmony import */ var _components_awb_awb_print_awb_print_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/awb/awb-print/awb-print.component */ "./src/app/admin/components/awb/awb-print/awb-print.component.ts");
/* harmony import */ var _components_report_invoice_header_invoice_header_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/report/invoice-header/invoice-header.component */ "./src/app/admin/components/report/invoice-header/invoice-header.component.ts");
/* harmony import */ var _components_awb_awb_edit_dialog_awb_edit_dialog_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/awb/awb-edit-dialog/awb-edit-dialog.component */ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.ts");




























































var AdminModule = /** @class */ (function () {
    function AdminModule(service) {
        this.service = service;
        // load main data
        _helpers_autoloader__WEBPACK_IMPORTED_MODULE_42__["Autoloader"].autoload(service);
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"],
                _components_company_company_form_company_form_component__WEBPACK_IMPORTED_MODULE_14__["CompanyFormComponent"],
                _components_branch_branch_component__WEBPACK_IMPORTED_MODULE_15__["BranchComponent"],
                _components_receiver_receiver_component__WEBPACK_IMPORTED_MODULE_16__["ReceiverComponent"],
                _components_receiver_receiver_form_receiver_form_component__WEBPACK_IMPORTED_MODULE_17__["ReceiverFormComponent"],
                _components_courier_courier_component__WEBPACK_IMPORTED_MODULE_18__["CourierComponent"],
                _components_courier_courier_form_courier_form_component__WEBPACK_IMPORTED_MODULE_19__["CourierFormComponent"],
                _components_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_20__["PickupComponent"],
                _components_pickup_pickup_form_pickup_form_component__WEBPACK_IMPORTED_MODULE_21__["PickupFormComponent"],
                _components_awb_awb_component__WEBPACK_IMPORTED_MODULE_22__["AwbComponent"],
                _components_awb_awb_form_awb_form_component__WEBPACK_IMPORTED_MODULE_23__["AwbFormComponent"],
                _components_courier_sheet_courier_sheet_component__WEBPACK_IMPORTED_MODULE_24__["CourierSheetComponent"],
                _components_courier_sheet_courier_sheet_form_courier_sheet_form_component__WEBPACK_IMPORTED_MODULE_25__["CourierSheetFormComponent"],
                _components_awb_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_26__["TrackingComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                _components_price_table_price_table_component__WEBPACK_IMPORTED_MODULE_30__["PriceTableComponent"],
                _components_receipt_out_receipt_out_receipt_component__WEBPACK_IMPORTED_MODULE_31__["OutReceiptComponent"],
                _components_receipt_receipt_form_receipt_form_component__WEBPACK_IMPORTED_MODULE_32__["ReceiptFormComponent"],
                _components_receipt_in_receipt_in_receipt_component__WEBPACK_IMPORTED_MODULE_33__["InReceiptComponent"],
                _components_courier_sheet_update_courier_sheet_update_courier_sheet_component__WEBPACK_IMPORTED_MODULE_34__["UpdateCourierSheetComponent"],
                _components_courier_sheet_update_accounting_courier_sheet_update_accounting_courier_sheet_component__WEBPACK_IMPORTED_MODULE_35__["UpdateAccountingCourierSheetComponent"],
                _components_accounting_awb_customer_review_awb_customer_review_component__WEBPACK_IMPORTED_MODULE_36__["AwbCustomerReviewComponent"],
                _components_report_awb_prices_awb_prices_component__WEBPACK_IMPORTED_MODULE_37__["AwbPricesComponent"],
                _components_report_store_transaction_store_transaction_component__WEBPACK_IMPORTED_MODULE_38__["StoreTransactionComponent"],
                _components_awb_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_39__["ChangeStatusComponent"],
                _components_awb_awb_pod_awb_pod_component__WEBPACK_IMPORTED_MODULE_40__["AwbPodComponent"],
                _components_report_customer_awb_customer_awb_component__WEBPACK_IMPORTED_MODULE_43__["CustomerAwbComponent"],
                _components_website_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_44__["AboutUsComponent"],
                _components_website_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_45__["OurServicesComponent"],
                _components_report_one_customer_status_awb_one_customer_status_awb_component__WEBPACK_IMPORTED_MODULE_46__["OneCustomerStatusAwbComponent"],
                _components_report_one_customer_city_awb_one_customer_city_awb_component__WEBPACK_IMPORTED_MODULE_47__["OneCustomerCityAwbComponent"],
                _components_pickup_pickup_track_pickup_track_component__WEBPACK_IMPORTED_MODULE_48__["PickupTrackComponent"],
                _components_mailbox_mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_49__["MailboxComponent"],
                _components_mailbox_mailbox_form_mailbox_form_component__WEBPACK_IMPORTED_MODULE_50__["MailboxFormComponent"],
                _components_report_courier_commission_courier_commission_component__WEBPACK_IMPORTED_MODULE_51__["CourierCommissionComponent"],
                _components_report_courier_awb_status_courier_awb_status_component__WEBPACK_IMPORTED_MODULE_52__["CourierAwbStatusComponent"],
                _components_report_report_header_report_header_component__WEBPACK_IMPORTED_MODULE_53__["ReportHeaderComponent"],
                _components_report_report_options_report_options_component__WEBPACK_IMPORTED_MODULE_54__["ReportOptionsComponent"],
                _components_report_awb_prices2_awb_prices2_component__WEBPACK_IMPORTED_MODULE_1__["AwbPrices2Component"],
                _components_report_pricetable_report_pricetable_report_component__WEBPACK_IMPORTED_MODULE_55__["PricetableReportComponent"],
                _components_report_postal_invoice_postal_invoice_component__WEBPACK_IMPORTED_MODULE_56__["PostalInvoiceComponent"],
                _components_awb_awb_print_awb_print_component__WEBPACK_IMPORTED_MODULE_57__["AwbPrintComponent"],
                _components_report_invoice_header_invoice_header_component__WEBPACK_IMPORTED_MODULE_58__["InvoiceHeaderComponent"],
                _components_awb_awb_edit_dialog_awb_edit_dialog_component__WEBPACK_IMPORTED_MODULE_59__["AwbEditDialogComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["AdminRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_28__["GoogleChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_29__["AutocompleteLibModule"],
                //MatFormFieldControl,
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"]
            ],
            exports: [],
            providers: [
                { provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerIntl"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_LABEL_GLOBAL_OPTIONS"], useValue: { float: 'always' } }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_41__["GlobalService"]])
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get(true)\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get(true)\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get(true)\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"sheet awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"table-\">\n            <table class=\"table\">\n              <tr>\n                <th>#</th>\n                <th>{{ \"code\" | trans }}</th>\n                <th>{{ \"date\" | trans }}</th>\n                <th>{{ \"company\" | trans }}</th>\n                <th>{{ \"receiver\" | trans }}</th>\n                <th>{{ \"collection\" | trans }}</th>\n                <th>{{ \"shiping_price\" | trans }}</th>\n                <th>{{ \"net_price\" | trans }}</th>\n                <th>{{ \"status\" | trans }}</th>\n                <th>{{ \"paid to customer\" | trans }}</th>\n                <th class=\"hidden\" >{{ \"notes\" | trans }}</th>\n              </tr>\n\n              <tr *ngIf=\"loading\" >\n                <td colspan=\"13\" class=\"w3-center\" >\n                  <i class=\"fa fa-spin fa-spinner w3-text-indigo\"></i>\n                </td>\n              </tr>\n\n              <ng-container *ngFor=\"let row of selectedAwb.getAll() index as i\">\n                <tr *ngIf=\"filterAwb(row)\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ row.code }}</td>\n                  <td>{{ row.date }}</td>\n                  <td>{{ row.company? row.company.name : '' }}</td>\n                  <td>{{ row.receiver? row.receiver.name : '' }}</td>\n                  <td>{{ row.collection }}</td>\n                  <td>{{ row.shiping_price }}</td>\n                  <td>{{ row.net_price }}</td>\n                  <td>{{ row.status? row.status.name : '' }}</td>\n                  <td>\n                    <mat-checkbox\n                      #checkbox\n                      (change)=\"collect(row, checkbox)\"\n                      [disabled]=\"row.status.code == '8'\"\n                      [checked]=\"row.status.code == '8'\" ></mat-checkbox>\n                  </td>\n                  <td class=\"hidden\" >\n                    <input class=\"w3-input app-form\" type=\"text\" [(ngModel)]=\"row.notes\" >\n                  </td>\n                </tr>\n              </ng-container>\n            </table>\n          </div>\n          <br>\n          <button\n            (click)=\"save()\"\n            *ngIf=\"showSaveBtn\"\n            [disabled]=\"isSubmit\"\n            mat-raised-button class=\"w3-indigo\" >\n            <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n            <span *ngIf=\"!isSubmit\" >{{ \"save\" | trans }}</span>\n          </button>\n        </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWNjb3VudGluZy9hd2ItY3VzdG9tZXItcmV2aWV3L2F3Yi1jdXN0b21lci1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AwbCustomerReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbCustomerReviewComponent", function() { return AwbCustomerReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");









var AwbCustomerReviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AwbCustomerReviewComponent, _super);
    function AwbCustomerReviewComponent(service, router, route) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.route = route;
        _this.baseApiUrl = "awbs";
        _this.status = [];
        _this.companies = [];
        _this.filter = {};
        _this.collectedStatus = {};
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.showSaveBtn = false;
        _this.title = "awb customer review";
        return _this;
    }
    AwbCustomerReviewComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AwbCustomerReviewComponent.prototype.getAction = function (res) {
        var _this = this;
        res.data.forEach(function (element) {
            _this.selectedAwb.put(element.id, element);
        });
    };
    AwbCustomerReviewComponent.prototype.loadStatus = function () {
        var _this = this;
        this.service.get('status').subscribe(function (res) {
            _this.status = res;
            res.forEach(function (element) {
                if (element.code == '8')
                    _this.collectedStatus = element;
            });
        });
        this.filter.status_id = this.collectedStatus.id;
    };
    AwbCustomerReviewComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('companies', { paging: '0' }).subscribe(function (res) {
            _this.companies = res;
        });
    };
    AwbCustomerReviewComponent.prototype.changeStatus = function () {
        this.showSaveBtn = true;
    };
    AwbCustomerReviewComponent.prototype.ngOnInit = function () {
        this.loadCompanies();
        this.loadStatus();
        this.initBreadCrumb();
    };
    AwbCustomerReviewComponent.prototype.filterAwb = function (awb) {
        return (awb.status.code == '7' || awb.status.code == '3' || awb.payment_type_id == 1) ? true : false;
    };
    AwbCustomerReviewComponent.prototype.collect = function (awb, checkbox) {
        if (!checkbox.checked)
            return;
        if (!this.collectedStatus.id)
            src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, window.location.pathname);
        awb.status_id = this.collectedStatus.id;
        this.changeStatus();
    };
    AwbCustomerReviewComponent.prototype.finish = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(false);
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('done'));
        this.isSubmit = false;
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, '/courier-sheet');
    };
    AwbCustomerReviewComponent.prototype.validate = function () {
        var valid = true;
        /*
            this.selectedAwb.getAll().forEach(element => {
              if (element.status_id != this.collectedStatus.id && this.filterAwb(element))
                valid = false;
            });
        */
        return valid;
    };
    AwbCustomerReviewComponent.prototype.save = function () {
        var _this = this;
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('change all awb status to paid to customer'));
        }
        this.isSubmit = true;
        var counter = 1;
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(true);
        var self = this;
        this.selectedAwb.getAll().forEach(function (element) {
            if (element.status_id == _this.collectedStatus.id) {
                var data = {
                    status_id: element.status_id
                };
                src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({
                    observer: _this.service.store('awbs/status/' + element.id, data),
                    action: function (res) { }
                });
                counter++;
            }
        });
        // fire requester
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].fire(function () {
            // console.log('finished ...............');
            self.finish();
        });
    };
    AwbCustomerReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-customer-review',
            template: __webpack_require__(/*! ./awb-customer-review.component.html */ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.html"),
            styles: [__webpack_require__(/*! ./awb-customer-review.component.scss */ "./src/app/admin/components/accounting/awb-customer-review/awb-customer-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AwbCustomerReviewComponent);
    return AwbCustomerReviewComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"editAwbModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"background-color: #fafafa;\" role=\"document\">\n    <div class=\"modal-content\" style=\"background-color: #fafafa!important;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"write awb code\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col-lg-12 w3-display-container\">\n          <label>{{ 'search with awb code' | trans }}</label>\n          <br>\n          <input type=\"text\"\n          [(ngModel)]=\"code\"\n          (change)=\"search()\"\n          class=\"app-form w3-round input-sm w3-block\"\n          placeholder=\"{{ 'search' | trans }}\" >\n\n          <div class=\"w3-display-topright w3-padding\" *ngIf=\"loading\" >\n            <br>\n            <span class=\"fa fa-spin fa-spinner w3-text-indigo w3-large\"></span>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" style=\"margin: 5px\" class=\"btn btn-default\" mat-raised-button data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\n\n        <button type=\"button\"\n        [disabled]=\"!canEdit\"\n        (click)=\"edit()\"\n        style=\"margin: 5px\" class=\"btn w3-indigo\" mat-raised-button >{{ \"edit awb\" | trans }}</button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXdiL2F3Yi1lZGl0LWRpYWxvZy9hd2ItZWRpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AwbEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbEditDialogComponent", function() { return AwbEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AwbEditDialogComponent = /** @class */ (function () {
    function AwbEditDialogComponent(service, router) {
        this.service = service;
        this.router = router;
        this.canEdit = false;
        this.awb = {};
        this.$ = $;
        this.loading = false;
    }
    AwbEditDialogComponent.prototype.ngOnInit = function () {
    };
    AwbEditDialogComponent.prototype.edit = function () {
        _shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.router, "/awb-edit/" + this.awb.id);
    };
    AwbEditDialogComponent.prototype.search = function () {
        var _this = this;
        this.loading = true;
        this.service.get('awbs', { code: this.code }).subscribe(function (res) {
            if (res.data.length > 0) {
                _this.awb = res.data[0];
                _this.canEdit = true;
                _this.$('#editAwbModal').modal('hide');
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('awb with code {code} found').replace('{code}', _this.code));
                _this.edit();
                _this.code = null;
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter valid awb code'));
            }
            _this.loading = false;
        });
    };
    AwbEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-edit-dialog',
            template: __webpack_require__(/*! ./awb-edit-dialog.component.html */ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./awb-edit-dialog.component.scss */ "./src/app/admin/components/awb/awb-edit-dialog/awb-edit-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AwbEditDialogComponent);
    return AwbEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/awb/awb-form/awb-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-form/awb-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n<div class=\"w3-block header-image\">\n\n</div>\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\"  >\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"company info\" | trans }}</div>\n        <div class=\"custom-panel-body row\"  >\n\n\n          <div class=\"col-lg-12\">\n            <label>{{ \"company\" | trans }} *</label>\n            <select (change)=\"changeListner(changeEnumType.COMPANY);resource.branch_id=null\"\n            [disabled]=\"!user.isAdmin()\"\n            class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.company_id\" >\n            <ng-container  *ngFor=\"let row of companies\" >\n              <option *ngIf=\"row.active == '1'\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"department\" | trans }} *</label>\n            <select\n            class=\"form-control input-sm w3-round\"\n            [disabled]=\"!user.isAdmin()\"\n            [(ngModel)]=\"resource.department_id\" >\n              <ng-container *ngFor=\"let row of departments\">\n                <option *ngIf=\"row.company_id == resource.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"branch\" | trans }} *</label>\n            <select  class=\"form-control input-sm w3-round\"\n            (change)=\"loadBranchInfo()\"\n            [disabled]=\"!user.isAdmin()\"\n            [(ngModel)]=\"resource.branch_id\" >\n              <ng-container *ngFor=\"let row of branches\">\n                <option *ngIf=\"row.company_id == resource.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"phone\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedBranch.phone\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"address\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedBranch.address\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"city\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedBranch.city.name\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"area\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedBranch.area.name\">\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >\n          {{ \"receiver info\" | trans }}\n          <span class=\"fa fa-refresh btn btn-primary w3-right btn-sm hidden\" style=\"margin: 4px\" (click)=\"reloadReceivers()\" ></span>\n        </div>\n        <div class=\"custom-panel-body row\"  >\n\n          <div class=\"col-lg-12 col-md-12 w3-display-container\">\n            <button mat-mini-fab class=\"w3-indigo\" style=\"margin: 5px\" (click)=\"createReceiver()\" >\n              <i class=\"fa fa-plus\"></i>\n            </button>\n\n            <label>{{ \"reciever\" | trans }} *</label>\n\n\n            <div>\n              <ng-autocomplete\n                [searchKeyword]=\"'search'\"\n                [data]=\"receivers\"\n                (selected)='selectItem($event, \"receiver_id\")'\n                (inputChanged)=\"reloadReceivers($event)\"\n                (inputCleared)=\"clearSelected('receiver_id')\"\n                [itemTemplate]=\"itemCompanyTemplate\"\n                [notFoundTemplate]=\"notCompanyFoundTemplate\">\n              </ng-autocomplete>\n\n              <ng-template #itemCompanyTemplate let-item>\n              <a [innerHTML]=\"item? item.name : ''\"></a>\n              </ng-template>\n\n              <ng-template #notCompanyFoundTemplate let-notFound>\n              <div [innerHTML]=\"notFound\"></div>\n              </ng-template>\n            </div>\n\n\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"contact person\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.company_name\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"receiver branch\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.branch_name\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"phone\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.phone\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"address\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.address\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"city\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.city.name\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"area\" | trans }} </label>\n            <input type=\"text\" readonly  class=\"form-control input-sm w3-round\" [(ngModel)]=\"selectedReceiver.area.name\">\n          </div>\n\n\n          <div class=\"col-lg-12 col-md-12\">\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awb info\" | trans }}</div>\n        <div class=\"custom-panel-body row\"  >\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>{{ \"awb city\" | trans }} *</label>\n            <select  class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.city_id\" >\n              <ng-container *ngFor=\"let row of cities\">\n                <option value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>{{ \"awb area\" | trans }} *</label>\n            <select  class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.area_id\" >\n              <ng-container *ngFor=\"let row of areas\">\n                <option *ngIf=\"row.city_id == resource.city_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>{{ \"payment_types\" | trans }} *</label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.payment_type_id\" >\n              <option *ngFor=\"let row of paymentTypes\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>{{ \"service type\" | trans }} *</label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.service_id\" >\n              <option *ngFor=\"let row of services\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"collection\" | trans }}</label>\n            <input type=\"number\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.collection\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>{{ \"notes\" | trans }} </label>\n            <input type=\"text\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.notes\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"!resource.id\" >\n            <label>{{ \"is return\" | trans }} </label>\n            <br>\n            <mat-checkbox\n              [(ngModel)]=\"resource.is_return\"\n            ></mat-checkbox>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\">\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"weight awb info\" | trans }}</div>\n        <div class=\"custom-panel-body row\"  >\n\n          <div class=\"col-lg-4 col-md-4\">\n            <label>{{ \"awb category\" | trans }} *</label>\n            <select class=\"form-control input-sm w3-round\" (change)=\"generateDimensions()\"  [(ngModel)]=\"resource.category_id\" >\n              <option *ngFor=\"let row of categories\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-4 col-md-4\">\n            <label>{{ \"pieces\" | trans }} *</label>\n            <input type=\"number\"  class=\"form-control input-sm w3-round\" (change)=\"generateDimensions()\" [(ngModel)]=\"resource.pieces\">\n          </div>\n\n          <div class=\"col-lg-4 col-md-4\">\n            <label>{{ \"weight\" | trans }} *</label>\n            <input type=\"number\" [readOnly]=\"getSelectedCategory().has_many == 1 || getSelectedCategory().fixed\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.weight\">\n          </div>\n\n          <ng-container *ngFor=\"let row of resource.details index as i\" >\n            <div class=\"col-lg-4 col-md-4\">\n              <label>{{ \"height\" | trans }} </label>\n              <input type=\"number\" (change)=\"calcAwbWeight()\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"row.height\">\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <label>{{ \"width\" | trans }} </label>\n              <input type=\"number\" (change)=\"calcAwbWeight()\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"row.width\">\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <label>{{ \"length\" | trans }} </label>\n              <input type=\"number\" (change)=\"calcAwbWeight()\"  class=\"form-control input-sm w3-round\" [(ngModel)]=\"row.length\">\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12 col-md-12\">\n\n      <button\n        mat-raised-button class=\"w3-indigo\"\n        [disabled]=\"isSubmit\"\n        (click)=\"send(resource)\"\n        style=\"min-width: 200px;margin: 5px\" >\n        <span *ngIf=\"!isSubmit\" >{{ \"submit\" | trans }}</span>\n        <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n      </button>\n\n      <button\n        *ngIf=\"!resource.id\"\n        mat-raised-button class=\"w3-orange\"\n        (click)=\"initResource();selectedReceiver={}\"\n        style=\"margin: 5px\">\n        <span  >{{ \"reset\" | trans }}</span>\n      </button>\n\n      <button\n        *ngIf=\"canEdit\"\n        mat-raised-button class=\"w3-teal\"\n        (click)=\"$('#editAwbModal').modal('show')\"\n        style=\"margin: 5px\">\n        <span  >{{ \"Edit Awb\" | trans }}</span>\n      </button>\n\n      <button\n        *ngIf=\"resource.id\"\n        mat-raised-button class=\"w3-dark-gray\"\n        (click)=\"printAwb(resource.id)\"\n        style=\"margin: 5px\">\n        <span  >{{ \"Print Awb\" | trans }}</span>\n      </button>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n\n<app-receiver-form [resource]=\"receiver\" ></app-receiver-form>\n\n\n<app-awb-edit-dialog *ngIf=\"canEdit\" ></app-awb-edit-dialog>\n"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-form/awb-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-form/awb-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  background-image: url(/assets/img/header_call_center.png);\n  background-size: 100% 100%;\n  height: 100px;\n  background-repeat: no-repeat;\n}\n\n.ng-autocomplete {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hd2IvYXdiLWZvcm0vQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxhd2JcXGF3Yi1mb3JtXFxhd2ItZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hd2IvYXdiLWZvcm0vYXdiLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDREo7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2F3Yi9hd2ItZm9ybS9hd2ItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaGVhZGVyX2NhbGxfY2VudGVyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IGF1dG87XG59XG4iLCIuaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2hlYWRlcl9jYWxsX2NlbnRlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-form/awb-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-form/awb-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AwbFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbFormComponent", function() { return AwbFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");











var AwbFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AwbFormComponent, _super);
    function AwbFormComponent(service, router, route) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.route = route;
        _this.baseApiUrl = "awbs";
        _this.title = "add awb";
        _this.couriers = [];
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.paymentTypes = [];
        _this.cities = [];
        _this.areas = [];
        _this.services = [];
        _this.categories = [];
        _this.awbs = [];
        _this.receivers = [];
        _this.types = ['document', 'parcel'];
        _this.selectedCompany = { area: {}, city: {} };
        _this.selectedReceiver = { area: {}, city: {} };
        _this.selectedBranch = { area: {}, city: {} };
        _this.changeEnumType = {
            COMPANY: 'COMPANY',
            RECEIVER: 'RECEIVER',
        };
        _this.receiversData = [];
        _this.user = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"];
        _this.receiver = {};
        // hashtable
        _this.awbsHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.companyTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.receiverTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.categoryHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.branchHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.displayError = true;
        _this.displayLoading = true;
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].can('awb_edit');
        _this.initResource();
        return _this;
        // console.log(Auth.user());
    }
    AwbFormComponent.prototype.createReceiver = function () {
        this.$('#receiverModal').modal('show');
    };
    AwbFormComponent.prototype.loadOneAwb = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            if (params.has('id'))
                _this.load(params.get('id'));
        });
    };
    AwbFormComponent.prototype.getSelectedBranch = function () {
        return this.branchHashTable.has(this.resource.branch_id) ? this.branchHashTable.get(this.resource.branch_id) : {};
    };
    AwbFormComponent.prototype.loadBranchInfo = function () {
        this.selectedBranch = this.getSelectedBranch();
        // if (Auth.isAdmin()) {
        this.resource.city_id = this.selectedBranch.city_id;
        this.resource.area_id = this.selectedBranch.area_id;
        /* } else {
           this.setCityArea();
         }*/
    };
    AwbFormComponent.prototype.get = function () {
        //
    };
    AwbFormComponent.prototype.reset = function (data) {
        this.initResource();
        this.selectedReceiver = { area: {}, city: {} };
        //
        // console.log('after reset');
    };
    AwbFormComponent.prototype.getAction = function (res) {
        this.reloadReceivers(this.resource.receiver ? this.resource.receiver.name : null);
        //this.selectItem(res.receiver, 'receiver_id');
        this.changeListner(this.changeEnumType.COMPANY);
        this.changeListner(this.changeEnumType.RECEIVER);
        // change breadcrumb
        this.initBreadCrumb();
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loader(false);
    };
    AwbFormComponent.prototype.initResource = function () {
        this.resource = {
            company_id: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().company_id,
            branch_id: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch_id,
            department_id: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().department_id,
            category_id: 1,
            payment_type_id: 1,
            service_id: 1,
            pieces: 1,
            weight: 1,
            company: {
                city: {},
                area: {},
            },
            details: [],
            department: {}
        };
        this.loadBranchInfo();
        //var self = this;
        setTimeout(function () {
            $('.autocomplete-container .x').click();
        }, 500);
    };
    AwbFormComponent.prototype.setCityArea = function () {
        console.log(src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch);
        this.resource.city_id = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch.city_id : null;
        this.resource.area_id = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].user().branch.area_id : null;
    };
    AwbFormComponent.prototype.calcAwbWeight = function () {
        AwbWeightCalculator.calc(this.resource);
    };
    AwbFormComponent.prototype.changeListner = function (type) {
        // set company object
        if (type == this.changeEnumType.COMPANY) {
            this.selectedCompany = this.companyTable.get(this.resource.company_id);
            this.reloadReceivers(this.resource.receiver ? this.resource.receiver.name : null);
            this.loadBranchInfo();
        }
        // set receiver object
        if (type == this.changeEnumType.RECEIVER) {
            //if (!this.resource.id)
            if (this.receiverTable.has(this.resource.receiver_id))
                this.selectedReceiver = this.receiverTable.get(this.resource.receiver_id);
            else {
                if (this.resource.receiver) {
                    this.selectedReceiver = this.resource.receiver;
                }
                else {
                    this.selectedReceiver = { area: {}, city: {} };
                }
            }
            //else
            //  this.selectedReceiver = this.resource.receiver;
            //
        }
    };
    AwbFormComponent.prototype.getSelectedCategory = function () {
        return this.categoryHashTable.has(this.resource.category_id) ?
            this.categoryHashTable.get(this.resource.category_id) : {};
    };
    AwbFormComponent.prototype.generateDimensions = function () {
        var selectedCategory = this.getSelectedCategory();
        if (selectedCategory.has_many == 1) {
            this.resource.details = [];
            for (var index = 0; index < this.resource.pieces; index++) {
                this.resource.details.push({});
            }
        }
        else {
            this.resource.details = [];
        }
        if (selectedCategory.fixed) {
            this.resource.weight = Math.ceil(this.resource.pieces * selectedCategory.fixed);
        }
    };
    AwbFormComponent.prototype.convertCompanyToHashTable = function () {
        var _this = this;
        this.companyTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.companies.forEach(function (element) {
            _this.companyTable.put(element.id, element);
        });
        //
    };
    AwbFormComponent.prototype.convertReceiverToHashTable = function () {
        var _this = this;
        this.receiverTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.receivers.forEach(function (element) {
            _this.receiverTable.put(element.id, element);
        });
    };
    AwbFormComponent.prototype.reloadReceivers = function (search) {
        var _this = this;
        if (search === void 0) { search = null; }
        var data = {
            company_id: this.resource.company_id
        };
        if (search)
            data.search = search;
        this.service.get('receivers', data).subscribe(function (res) {
            _this.receivers = res.data;
            // filter receivers
            _this.receiversData = res.data.filter(function (element) {
                return { id: element.id, name: element.name };
            });
            // receivers arr to hashtable
            _this.convertReceiverToHashTable();
        });
    };
    // select item
    AwbFormComponent.prototype.selectItem = function (item, key) {
        this.resource[key] = item.id;
        this.changeListner(this.changeEnumType.RECEIVER);
    };
    AwbFormComponent.prototype.clearSelected = function (key) {
        this.resource[key] = null;
    };
    //*********** callback functions  */
    AwbFormComponent.prototype.companyCallback = function (responese) {
        this.companies = responese;
        // companies arr to hashtable
        this.convertCompanyToHashTable();
        // load current company data
        this.changeListner(this.changeEnumType.COMPANY);
        this.loadOneAwb();
    };
    AwbFormComponent.prototype.branchCallback = function (response) {
        var _this = this;
        this.branches = response;
        this.branchHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.branches.forEach(function (element) {
            _this.branchHashTable.put(element.id, element);
        });
        this.loadBranchInfo();
    };
    AwbFormComponent.prototype.paymentCallback = function (res) {
        this.paymentTypes = res;
        if (!this.resource.id && res.length > 0)
            this.resource.payment_type_id = res[0].id;
    };
    AwbFormComponent.prototype.categoryCallback = function (res) {
        var _this = this;
        this.categories = res;
        this.categoryHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.categories.forEach(function (element) {
            _this.categoryHashTable.put(element.id, element);
        });
    };
    AwbFormComponent.prototype.serviceCallback = function (res) {
        this.services = res;
        if (!this.resource.id && res.length > 0)
            this.resource.service_id = res[0].id;
    };
    //******************end of callback functions  */
    AwbFormComponent.prototype.loadSettings = function () {
        var self = this;
        self.reloadReceivers();
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].companies()) {
            self.companyCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].companies());
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('companies'), action: function (res) {
                    self.companyCallback(res);
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].branches()) {
            self.branchCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].branches());
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('branches'), action: function (res) {
                    self.branchCallback(res);
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].paymentTypes()) {
            self.paymentCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].paymentTypes());
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('payment-types'), action: function (res) {
                    self.paymentCallback(res);
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].departments()) {
            this.departments = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].departments();
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('departments'), action: function (res) {
                    self.departments = res;
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].categories()) {
            self.categoryCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].categories());
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('awb-categories'), action: function (res) {
                    self.categoryCallback(res);
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].services()) {
            self.serviceCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].services());
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('services'), action: function (res) {
                    self.serviceCallback(res);
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].cities()) {
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].cities();
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('cities'), action: function (res) {
                    self.cities = res;
                } });
        }
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].areas()) {
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].areas();
        }
        else {
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({ observer: this.service.get('areas'), action: function (res) {
                    self.areas = res;
                } });
        }
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].fire(null, true);
    };
    AwbFormComponent.prototype.initBreadCrumb = function () {
        if (this.resource.id)
            this.breadcrumbList = [
                { name: 'dashboard', url: '/' },
                { name: 'awbs', url: '/awb' },
                { name: this.resource.code, url: '#', active: true },
            ];
        else {
            this.breadcrumbList = [
                { name: 'dashboard', url: '/' },
                { name: 'awbs', url: '/awb' },
                { name: this.title, url: '#', active: true },
            ];
        }
    };
    AwbFormComponent.prototype.ngOnInit = function () {
        this.requiredFields = [
            "company_id",
            "department_id",
            "branch_id",
            "receiver_id",
            "payment_type_id",
            "service_id",
            "city_id",
            "area_id",
            "pieces",
            "weight",
            "category_id"
        ];
        this.initBreadCrumb();
        this.loadSettings();
    };
    AwbFormComponent.prototype.updateAction = function (res) {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].refreshComponent(this.route, "/awb");
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loader(false);
    };
    AwbFormComponent.prototype.printAwb = function (id) {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + "/awbs/print/" + id + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken();
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    AwbFormComponent.prototype.storeAction = function (res) {
        if (res.data.id) {
            this.printAwb(res.data.id);
        }
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loader(false);
    };
    AwbFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-form',
            template: __webpack_require__(/*! ./awb-form.component.html */ "./src/app/admin/components/awb/awb-form/awb-form.component.html"),
            styles: [__webpack_require__(/*! ./awb-form.component.scss */ "./src/app/admin/components/awb/awb-form/awb-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AwbFormComponent);
    return AwbFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_6__["Crud"]));

/**
 * awb weight calculator
 *
 *
 */
var AwbWeightCalculator = /** @class */ (function () {
    function AwbWeightCalculator() {
    }
    AwbWeightCalculator.validate = function (element) {
        return (element.height && element.width && element.length);
    };
    AwbWeightCalculator.calc = function (resource) {
        // init sum
        resource.weight = 0;
        // calculate total for each row
        resource.details.forEach(function (element) {
            // check first
            if (AwbWeightCalculator.validate(element)) {
                // total = (height * width * length) / 5000
                element.total = (element.height * element.width * element.length) / AwbWeightCalculator.AWB_CONST;
                resource.weight += element.total;
            }
        });
        resource.weight = Math.ceil(parseFloat(resource.weight)); //.toFixed(AwbWeightCalculator.AWB_ROUND_CONST);
    };
    AwbWeightCalculator.AWB_CONST = 5000;
    AwbWeightCalculator.AWB_ROUND_CONST = 3;
    return AwbWeightCalculator;
}());


/***/ }),

/***/ "./src/app/admin/components/awb/awb-pod/awb-pod.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-pod/awb-pod.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n  </div>\n\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n    <div class=\"modal-content light-gray w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title w3-center w3-xlarge w3-text-indigo\">\n          <span   >{{ \"tracking awb\" | trans }}</span> {{ resource.code }}\n\n        </h4>\n      </div>\n      <div class=\"w3-block main-background\">\n        <div class=\"track-background row\">\n          <div class=\"col-lg-9 col-md-9\">\n\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\" >\n            <div\n            *ngFor=\"let row of steppers index as i\"\n            class=\"md-step {{ stepperHashTable.has(row) || currentStatus.code == awbStatusCode.DELIVERED? 'active editable' : '' }}  \"  >\n              <div class=\"md-step-circle\"><span>{{ i + 1 }}</span></div>\n              <div class=\"md-step-title\">{{ row | trans }}</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <!--\n            <div class=\"md-step active editable\">\n              <div class=\"md-step-circle\"><span>2</span></div>\n              <div class=\"md-step-title\">Shipping</div>\n              <div class=\"md-step-optional\">Optional</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle\"><span>3</span></div>\n              <div class=\"md-step-title\">Payment</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step\">\n              <div class=\"md-step-circle\"><span>4</span></div>\n              <div class=\"md-step-title\">Review</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            -->\n          </div>\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\"  >\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-circle-o\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Sender\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <b *ngIf=\"resource.company\" style=\"color: black\" >\n                  {{ resource.company.city? resource.company.city.name : '' }},\n                  {{ resource.company.area? resource.company.area.name : '' }}\n                </b>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\" ></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-map-marker\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Receiver\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <b *ngIf=\"resource.receiver\" style=\"color: black\" >\n                  {{ resource.receiver.city? resource.receiver.city.name : '' }},\n                  {{ resource.receiver.area? resource.receiver.area.name : '' }}\n                </b>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\"></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n          </div>\n          </div>\n\n        </div>\n      </div>\n      <br>\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awb code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-12\">\n              <label>{{ \"awb code\" | trans }} *</label>\n              <input\n              type=\"number\" class=\"form-control input-sm w3-round\"\n              (change)=\"get()\"\n              [(ngModel)]=\"filter.code\" >\n            </div>\n          </div>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"row w3-large\">\n          <div class=\"col-lg-6 col-md-6\">\n            <table class=\"table\">\n              <tr>\n                <td>{{ \"sender\" | trans }} : </td>\n                <td>{{ resource.company? resource.company.name : '' }}</td>\n              </tr>\n              <tr>\n                <td>{{ \"sender address\" | trans }} : </td>\n                <td>{{ resource.branch? resource.branch.address : '' }}</td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"col-lg-6 col-md-6\">\n            <table class=\"table\">\n              <tr>\n                <td>{{ \"receiver\" | trans }} : </td>\n                <td>{{ resource.receiver? resource.receiver.name : '' }}</td>\n              </tr>\n              <tr>\n                <td>{{ \"receiver address\" | trans }} : </td>\n                <td>{{ resource.receiver? resource.receiver.address : '' }}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6\">\n            <table class=\"table\">\n              <tr *ngIf=\"deliveredStatus.id == resource.status_id\">\n                <td>{{ \"receiver name\" | trans }} : </td>\n                <td>\n                  <input\n                  type=\"text\"\n                  (change)=\"save()\"\n                  [(ngModel)]=\"resource.receiver_name\"\n                  class=\"form-control\">\n                </td>\n              </tr>\n              <tr *ngIf=\"deliveredStatus.id == resource.status_id\" >\n                <td>{{ \"receiver title\" | trans }} : </td>\n                <td>\n                  <input\n                  type=\"text\"\n                  (change)=\"save()\"\n                  [(ngModel)]=\"resource.receiver_title\"\n                  class=\"form-control\">\n                </td>\n              </tr>\n              <tr>\n                <td>{{ \"status\" | trans }} : </td>\n                <td>\n                  <select\n                    class=\"form-control w3-round app-form\"\n                    [(ngModel)]=\"resource.status_id\"  >\n                      <ng-container *ngFor=\"let item of status\">\n                        <option *ngIf=\"item.type == 'awb'\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                      </ng-container>\n                  </select>\n                </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <br>\n\n        <div class=\"table-responsive w3-white text-center\" style=\"height: 200px;\" >\n          <table class=\"table table-bordered text-center\">\n            <tr class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"#\" }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"awb\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"sender\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"status\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"user\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"date\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"time\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"remove\" | trans }}</th>\n            </tr>\n\n            <tr *ngFor=\"let row of history index as i\" >\n             <td>{{ i + 1 }}</td>\n             <td>{{ resource.code }}</td>\n             <td>{{ resource.company? resource.company.name : '' }}</td>\n             <td>{{ row.status? row.status.name : '' }}</td>\n             <td>{{ row.user? row.user.name : '' }}</td>\n             <td>{{ row.created_at | date }}</td>\n             <td>{{ row.created_at | date: 'shortTime' }}</td>\n             <td>\n               <button *ngIf=\"canRemoveTrack\" (click)=\"removeRow(row, i)\" class=\"fa fa-trash w3-text-red\"></button>\n             </td>\n            </tr>\n         </table>\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n        <!--\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n          -->\n\n          <button class=\"w3-indigo\"\n            *ngIf=\"canChangeAwbStatus\"\n            [disabled]=\"isSubmit\"\n            style=\"margin: 5px\"\n            mat-raised-button\n            (click)=\"save()\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span  >{{ \"change status\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-pod/awb-pod.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-pod/awb-pod.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n.md-stepper-horizontal {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);\n}\n.md-stepper-horizontal .md-step {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.md-stepper-horizontal .md-step:hover,\n.md-stepper-horizontal .md-step:active {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.md-stepper-horizontal .md-step:active {\n  border-radius: 15%/75%;\n}\n.md-stepper-horizontal .md-step:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.md-stepper-horizontal .md-step:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.md-stepper-horizontal .md-step:hover .md-step-circle {\n  background-color: #757575;\n}\n.md-stepper-horizontal .md-step:first-child .md-step-bar-left,\n.md-stepper-horizontal .md-step:last-child .md-step-bar-right {\n  display: none;\n}\n.md-stepper-horizontal .md-step .md-step-circle {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  background-color: #999999;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #FFFFFF;\n}\n.md-stepper-horizontal.green .md-step.active .md-step-circle {\n  background-color: #00AE4D;\n}\n.md-stepper-horizontal.orange .md-step.active .md-step-circle {\n  background-color: #F96302;\n}\n.md-stepper-horizontal .md-step.active .md-step-circle {\n  background-color: #2196f3;\n}\n.md-stepper-horizontal .md-step.done .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step.done .md-step-circle *,\n.md-stepper-horizontal .md-step.editable .md-step-circle * {\n  display: none;\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle {\n  transform: scaleX(-1);\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step .md-step-title {\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-title,\n.md-stepper-horizontal .md-step .md-step-optional {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.26);\n}\n.md-stepper-horizontal .md-step.active .md-step-title {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-stepper-horizontal .md-step.active.done .md-step-title,\n.md-stepper-horizontal .md-step.active.editable .md-step-title {\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-optional {\n  font-size: 12px;\n}\n.md-stepper-horizontal .md-step.active .md-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-stepper-horizontal .md-step .md-step-bar-left,\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  position: absolute;\n  top: 36px;\n  height: 1px;\n  border-top: 1px solid #DDDDDD;\n}\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  right: 0;\n  left: 50%;\n  margin-left: 20px;\n}\n.md-stepper-horizontal .md-step .md-step-bar-left {\n  left: 0;\n  right: 50%;\n  margin-right: 20px;\n}\n.track-background {\n  background-image: url(\"/assets/img/customer_service.png\");\n  background-size: auto 100%;\n  background-position: right;\n  background-repeat: no-repeat;\n}\n.main-background {\n  background-image: url(\"/assets/img/main_background.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hd2IvYXdiLXBvZC9hd2ItcG9kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2F3Yi9hd2ItcG9kL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcYXdiXFxhd2ItcG9kXFxhd2ItcG9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7QURDRjtBQ0VBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtBRENEO0FDQ0E7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBREVEO0FDQUE7O0VBRUMscUNBQUE7QURHRDtBQ0RBO0VBQ0Msc0JBQUE7QURJRDtBQ0ZBO0VBQ0MseUJBQUE7RUFDQSw0QkFBQTtBREtEO0FDSEE7RUFDQywwQkFBQTtFQUNBLDZCQUFBO0FETUQ7QUNKQTtFQUNDLHlCQUFBO0FET0Q7QUNMQTs7RUFFQyxhQUFBO0FEUUQ7QUNOQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRFNEO0FDUEE7RUFDQyx5QkFBQTtBRFVEO0FDUkE7RUFDQyx5QkFBQTtBRFdEO0FDVEE7RUFDQyx5QkFBQTtBRFlEO0FDVkE7RUFDQywwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGFEO0FDWEE7O0VBRUMsYUFBQTtBRGNEO0FDWkE7RUFJQyxxQkFBQTtBRGVEO0FDYkE7RUFDQywwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGdCRDtBQ2RBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURpQkQ7QUNmQTs7RUFFQyxrQkFBQTtFQUNBLDBCQUFBO0FEa0JEO0FDaEJBO0VBQ0MsZ0JBQUE7RUFDQSwwQkFBQTtBRG1CRDtBQ2pCQTs7RUFFQyxnQkFBQTtBRG9CRDtBQ2xCQTtFQUNDLGVBQUE7QURxQkQ7QUNuQkE7RUFDQywwQkFBQTtBRHNCRDtBQ3BCQTs7RUFFQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUR1QkQ7QUNyQkE7RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FEd0JEO0FDdEJBO0VBQ0MsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRHlCRDtBQ3JCQTtFQUNDLHlEQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FEd0JEO0FDckJBO0VBQ0Msd0RBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FEd0JEIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hd2IvYXdiLXBvZC9hd2ItcG9kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEgIWltcG9ydGFudDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3Zlcixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiAxNSUvNzUlO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZDphY3RpdmUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6aG92ZXIgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpmaXJzdC1jaGlsZCAubWQtc3RlcC1iYXItbGVmdCxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZCAubWQtc3RlcC1iYXItcmlnaHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWNpcmNsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwuZ3JlZW4gLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFFNEQ7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwub3JhbmdlIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2MzAyO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbnRlbnQ6IFwi74CMXCI7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGUgKixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbnRlbnQ6IFwi74ORXCI7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUuZG9uZSAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmVkaXRhYmxlIC5tZC1zdGVwLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1vcHRpb25hbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2cHg7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jdXN0b21lcl9zZXJ2aWNlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubWFpbi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbWFpbl9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iLCJcbi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxIWltcG9ydGFudDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCB7XG5cdGRpc3BsYXk6dGFibGU7XG5cdHdpZHRoOjEwMCU7XG5cdG1hcmdpbjowIGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcblx0Ym94LXNoYWRvdzogMCAzcHggOHB4IC02cHggcmdiYSgwLDAsMCwuNTApO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCB7XG5cdGRpc3BsYXk6dGFibGUtY2VsbDtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmc6MjRweDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6aG92ZXIsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjA0KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcblx0Ym9yZGVyLXJhZGl1czogMTUlIC8gNzUlO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpmaXJzdC1jaGlsZDphY3RpdmUge1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkOmFjdGl2ZSB7XG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6aG92ZXIgLm1kLXN0ZXAtY2lyY2xlIHtcblx0YmFja2dyb3VuZC1jb2xvcjojNzU3NTc1O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpmaXJzdC1jaGlsZCAubWQtc3RlcC1iYXItbGVmdCxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZCAubWQtc3RlcC1iYXItcmlnaHQge1xuXHRkaXNwbGF5Om5vbmU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWNpcmNsZSB7XG5cdHdpZHRoOjMwcHg7XG5cdGhlaWdodDozMHB4O1xuXHRtYXJnaW46MCBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM5OTk5OTk7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsaW5lLWhlaWdodDozMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGNvbG9yOiNGRkZGRkY7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsLmdyZWVuIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwMEFFNEQ7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsLm9yYW5nZSAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcblx0YmFja2dyb3VuZC1jb2xvcjojRjk2MzAyO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLDE1MCwyNDMpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuXHRmb250LWZhbWlseTonRm9udEF3ZXNvbWUnO1xuXHRmb250LXdlaWdodDoxMDA7XG5cdGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlICosXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSAqIHtcblx0ZGlzcGxheTpub25lO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUge1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcblx0LW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcblx0dHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcblx0Zm9udC1mYW1pbHk6J0ZvbnRBd2Vzb21lJztcblx0Zm9udC13ZWlnaHQ6MTAwO1xuXHRjb250ZW50OiBcIlxcZjBkMVwiO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSB7XG5cdG1hcmdpbi10b3A6MTZweDtcblx0Zm9udC1zaXplOjE2cHg7XG5cdGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjpyZ2JhKDAsMCwwLC4yNik7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC10aXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGNvbG9yOnJnYmEoMCwwLDAsLjg3KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmRvbmUgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5lZGl0YWJsZSAubWQtc3RlcC10aXRsZSB7XG5cdGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuXHRmb250LXNpemU6MTJweDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLW9wdGlvbmFsIHtcblx0Y29sb3I6cmdiYSgwLDAsMCwuNTQpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDozNnB4O1xuXHRoZWlnaHQ6MXB4O1xuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjREREREREO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuXHRyaWdodDowO1xuXHRsZWZ0OjUwJTtcblx0bWFyZ2luLWxlZnQ6MjBweDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQge1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OjUwJTtcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XG59XG5cblxuLnRyYWNrLWJhY2tncm91bmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jdXN0b21lcl9zZXJ2aWNlLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ubWFpbi1iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbWFpbl9iYWNrZ3JvdW5kLmpwZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-pod/awb-pod.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-pod/awb-pod.component.ts ***!
  \*******************************************************************/
/*! exports provided: AwbPodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbPodComponent", function() { return AwbPodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../settings/awb-status-code */ "./src/app/settings/awb-status-code.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");











var AwbPodComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AwbPodComponent, _super);
    function AwbPodComponent(service, router, route) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.route = route;
        _this.baseApiUrl = "awbs";
        _this.status = [];
        _this.filter = {};
        _this.deliveredStatus = {};
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.isSubmit = false;
        _this.history = [];
        _this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.canChangeOk = true;
        _this.canChangeAwbStatus = true;
        _this.canRemoveTrack = false;
        _this.steppers = ['in_company', 'processing', 'hold', 'delivered'];
        _this.awbStatusCode = _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_9__["AwbStatusCode"];
        _this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.currentStatus = {};
        _this.showSaveBtn = false;
        _this.title = "awb POD";
        _this.canChangeOk = _shared_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"].can('awb_change_ok_status');
        _this.canChangeAwbStatus = _shared_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"].can('awb_change_status');
        _this.canRemoveTrack = _shared_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"].can('awb_track_remove');
        _this.paging = true;
        return _this;
    }
    AwbPodComponent.prototype.ngOnChanges = function () {
        this.history = this.resource.awb_history;
        this.currentStatus = this.resource.status ? this.resource.status : {};
        this.loadStepper();
        if (this.resource.status)
            this.resource.is_final = this.resource.status.is_final;
    };
    AwbPodComponent.prototype.loadStepper = function () {
        var _this = this;
        this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        if (this.history)
            this.history.forEach(function (element) {
                if (element.status.steper)
                    _this.stepperHashTable.put(element.status.steper, element.status.steper);
            });
    };
    AwbPodComponent.prototype.sendAwbInfo = function () {
        if (!this.resource.receiver_name || !this.resource.receiver_title) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error('enter receiver name and title');
        }
        /*this.service.store("awbs/update/"+this.resource.id, this.resource).subscribe((res: any) => {
          if (res.status == 1) {
            Message.success(res.message);
          } else {
            Message.error(res.message);
          }
        });*/
        this.send();
    };
    AwbPodComponent.prototype.send = function () {
        var _this = this;
        if (this.statusHashTable.get(this.resource.status_id).code == this.awbStatusCode.DELIVERED) {
            if (!this.resource.receiver_name || !this.resource.receiver_title) {
                return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error('enter receiver name and title');
            }
        }
        this.isSubmit = true;
        var data = {
            status_id: this.resource.status_id,
            receiver_name: this.resource.receiver_name,
            receiver_title: this.resource.receiver_title
        };
        this.service.store('awbs/status/' + this.resource.id, data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
                _this.resource.status = _this.statusHashTable.get(_this.resource.status_id);
                _this.ngOnChanges();
                //
                _this.history = res.data;
                _this.loadStepper();
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(res.message);
            }
            _this.isSubmit = false;
        });
    };
    AwbPodComponent.prototype.removeRow = function (item, index) {
        var _this = this;
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].confirm(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('are you sure'), function () {
            self.service.destroy('awbs-history/destroy', item.id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
                    _this.ngOnChanges();
                    _this.history = res.data;
                    _this.loadStepper();
                }
            });
        });
    };
    //availableCodes = ['1', '2', '3', '4'];
    AwbPodComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'awbs', url: '/awb' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AwbPodComponent.prototype.getAction = function (res) {
        var _this = this;
        if (res.data.length <= 0) {
            return; //Message.error(Helper.trans('enter valid awb code'));
        }
        this.resource = res.data[0];
        res.data.forEach(function (element) {
            _this.selectedAwb.put(element.awb_id, element.awb);
        });
        // load changes
        this.ngOnChanges();
        //this.resource.status_id = this.deliveredStatus.id;
        // animate to table
        this.$('html, body').animate({ scrollTop: 330 }, 1000);
    };
    AwbPodComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        this.status.forEach(function (element) {
            _this.statusHashTable.put(element.id, element);
        });
        res.forEach(function (element) {
            if (element.code == _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_9__["AwbStatusCode"].DELIVERED)
                _this.deliveredStatus = element;
        });
        //this.resource.status_id = this.deliveredStatus.id;
    };
    AwbPodComponent.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_10__["Autoloader"].status());
        else
            this.service.get('status').subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    AwbPodComponent.prototype.changeStatus = function () {
        this.showSaveBtn = true;
    };
    AwbPodComponent.prototype.loadCourierSheet = function () {
        this.get(true);
    };
    AwbPodComponent.prototype.ngOnInit = function () {
        this.loadStatus();
        this.initBreadCrumb();
        this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.loadStatus();
    };
    AwbPodComponent.prototype.filterAwb = function (awb) {
        return awb.status.code == '2' ? true : false;
    };
    AwbPodComponent.prototype.collect = function (awb) {
        if (!this.deliveredStatus.id)
            src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, window.location.pathname);
        // console.log(this.deliveredStatus);
        awb.status_id = this.deliveredStatus.id;
        this.changeStatus();
    };
    AwbPodComponent.prototype.finish = function () {
        this.get(true);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(false);
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('done'));
        this.isSubmit = false;
        this.filter.code = "";
    };
    AwbPodComponent.prototype.validate = function () {
        var valid = this.resource.id ? true : false;
        if (!this.resource.id) {
            src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter valid awb code'));
            return false;
        }
        if (this.resource.status_id == this.deliveredStatus.id &&
            !src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].validator(this.resource, ['receiver_name', 'receiver_title'])) {
            src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter receiver name or title'));
            return false;
        }
        return true;
    };
    AwbPodComponent.prototype.save = function () {
        var _this = this;
        if (!this.validate()) {
            return;
        }
        this.isSubmit = true;
        var counter = 1;
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(true);
        var data = {
            status_id: this.resource.status_id,
            receiver_name: this.resource.receiver_name,
            receiver_title: this.resource.receiver_title
        };
        this.service.store('awbs/status/' + this.resource.id, data).subscribe(function () {
            _this.finish();
        });
    };
    AwbPodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-pod',
            template: __webpack_require__(/*! ./awb-pod.component.html */ "./src/app/admin/components/awb/awb-pod/awb-pod.component.html"),
            styles: [__webpack_require__(/*! ./awb-pod.component.scss */ "./src/app/admin/components/awb/awb-pod/awb-pod.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AwbPodComponent);
    return AwbPodComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/awb/awb-print/awb-print.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-print/awb-print.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"printModal\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"print selected awbs\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"printAllSelected()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"1x3\" | trans }}</b>\n            </button>\n          </div>\n\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"print1x3()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b> Duplicate 1x3</b>\n            </button>\n          </div>\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"print3x7()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"3x7\" | trans }}</b>\n            </button>\n          </div>\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"print3x8()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"3x8\" | trans }}</b>\n            </button>\n          </div>\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"print3x9()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"3x9\" | trans }}</b>\n            </button>\n          </div>\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"print3x10()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"3x10\" | trans }}</b>\n            </button>\n          </div>\n\n\n\n          <div class=\"col-md-3 m2 s3 w3-xlarge w3-center\" >\n            <button class=\"w3-button\" (click)=\"printA4()\" >\n              <i class=\"fa fa-print w3-text-indigo\"></i>\n              <br>\n              <b>{{ \"A4\" | trans }}</b>\n            </button>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" mat-raised-button data-dismiss=\"modal\" (click)=\"$('#printModal').modal('hide')\" >{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-print/awb-print.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-print/awb-print.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXdiL2F3Yi1wcmludC9hd2ItcHJpbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/awb/awb-print/awb-print.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/awb/awb-print/awb-print.component.ts ***!
  \***********************************************************************/
/*! exports provided: AwbPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbPrintComponent", function() { return AwbPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");




var AwbPrintComponent = /** @class */ (function () {
    function AwbPrintComponent(service) {
        this.service = service;
        this.$ = $;
        // init window options of print
        this.printDialogOptions = 'height=400,width=400';
        this.printDialogOptionsSelected = 'height=1000,width=1000';
        this.selectedResources = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        // console.log(this.selectedResources);
    }
    AwbPrintComponent.prototype.ngOnInit = function () {
    };
    /**
     * listen to selected awbs
     *
     */
    AwbPrintComponent.prototype.ngOnChanges = function () {
        // console.log("selected resources: ", this.selectedResources);
        try {
            this.data = {
                awbs: this.selectedResources.getKeys()
            };
        }
        catch (error) {
            // console.log(error);
        }
        // console.log("data: ", this.data);
    };
    /**
     * print more Than Awb In A4 Papers
     *
     */
    AwbPrintComponent.prototype.printA4 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/print-selected", this.data).subscribe(function (res) {
            // console.log(res);
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    /**
     * Print Three Awb In A4
     *
     */
    AwbPrintComponent.prototype.print1x3 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/printthree", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    /**
     * print 21 Awb In A4
     *
     */
    AwbPrintComponent.prototype.print3x7 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/3x7awb", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    /**
     * print 24 Awb In A4
     *
     */
    AwbPrintComponent.prototype.print3x8 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/3x8awb", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    /**
     * print 27 Awb In A4
     *
     */
    AwbPrintComponent.prototype.print3x9 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/3x9awb", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    /**
     * print 30 Awb In A4
     *
     */
    AwbPrintComponent.prototype.print3x10 = function () {
        var _this = this;
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        this.service.loadHtmlPost("awbs/3x10awb", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptions);
            newWin.document.write(res);
        });
    };
    AwbPrintComponent.prototype.printAllSelected = function () {
        // this.data = {
        //   awbs: this.selectedResources.getKeys()
        // };
        // this.service.loadHtmlPost("awbs/printthree", this.data).subscribe((res: any) => {
        //   console.log(res);
        var _this = this;
        //   var newWin = open('url', 'awbs', this.printDialogOptionsSelected);
        //   newWin.document.write(res);
        // });
        this.data = {
            awbs: this.selectedResources.getKeys()
        };
        // console.log(this.data);
        this.service.loadHtmlPost("awbs/print-diff-three", this.data).subscribe(function (res) {
            var newWin = open('url', 'awbs', _this.printDialogOptionsSelected);
            newWin.document.write(res);
            // console.log(res);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"])
    ], AwbPrintComponent.prototype, "selectedResources", void 0);
    AwbPrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-print',
            template: __webpack_require__(/*! ./awb-print.component.html */ "./src/app/admin/components/awb/awb-print/awb-print.component.html"),
            styles: [__webpack_require__(/*! ./awb-print.component.scss */ "./src/app/admin/components/awb/awb-print/awb-print.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], AwbPrintComponent);
    return AwbPrintComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/awb/awb.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/awb/awb.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\" style=\"display: none;\" >\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'referance' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.referance\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'referance' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"filter.branch_id=null;filter.department_id=null;get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with branch' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.branch_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of branches\">\n          <option *ngIf=\"item.company_id == filter.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with department' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.department_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of departments\">\n          <option *ngIf=\"item.company_id == filter.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with city' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"filter.area_id=null;get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.city_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2\">\n      <label>{{ 'filter with area' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.area_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of areas\">\n          <option *ngIf=\"item.city_id == filter.city_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n    <div class=\"col-lg-2 col-md-2\">\n      <label>{{ 'date from' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date_from\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\" >\n    </div>\n\n    <div class=\"col-lg-2 col-md-2\">\n      <label>{{ 'date to' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date_to\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'number_per_page' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.page_length\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'number_per_page' | trans }}\" >\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n\n  <app-table [crud]=\"self\" [canPrintSelected]=\"false\" [printSelected]=\"printSelected\" >\n\n    <button *ngIf=\"canChangeAwbStatus && selectedResources.size() > 0\"\n      style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-yellow\"\n      (click)=\"changeStatus()\" >\n        {{ \"change status\" | trans }}\n    </button>\n\n    <button *ngIf=\"selectedResources.size() > 0\"\n      style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-teal\"\n      (click)=\"printSelected()\" >\n        {{ \"print\" | trans }}\n    </button>\n\n  </app-table>\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n\n\n</div>\n\n\n<app-tracking [resource]=\"selectedResource\" [reload]=\"reload\"  ></app-tracking>\n\n\n<app-change-status [selectedAwb]=\"selectedResources\" [action]=\"reload\" ></app-change-status>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n\n<app-awb-print [selectedResources]=\"selectedAwbs\" ></app-awb-print>\n"

/***/ }),

/***/ "./src/app/admin/components/awb/awb.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/awb/awb.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXdiL2F3Yi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/awb/awb.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/components/awb/awb.component.ts ***!
  \*******************************************************/
/*! exports provided: AwbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbComponent", function() { return AwbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var AwbComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AwbComponent, _super);
    function AwbComponent(service, router, params) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.params = params;
        _this.baseApiUrl = "awbs";
        _this.title = "awbs";
        _this.self = _this;
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.paymentTypes = [];
        _this.cities = [];
        _this.areas = [];
        _this.services = [];
        _this.awbs = [];
        _this.receivers = [];
        _this.selectedResource = {};
        _this.canTrack = true;
        _this.canChangeAwbStatus = false;
        // paging data from server
        _this.paging = true;
        _this.displayImport = true;
        _this.filter.page_length = 60;
        // init permissions
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_remove');
        _this.canTrack = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_track');
        _this.displayLoadTrash = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_view_trash');
        _this.canChangeAwbStatus = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_change_status');
        // check on query Params
        _this.checkOnQueryParams();
        return _this;
    }
    AwbComponent.prototype.printSelected = function () {
        this.selectedAwbs = this.selectedResources;
        if (this.selectedResources.size() > 0) {
            // this.selectedAwbs = this.selectedResources;
            this.$('#printModal').modal('show');
        }
    };
    AwbComponent.prototype.checkOnQueryParams = function () {
        var _this = this;
        this.params.queryParamMap.subscribe(function (params) {
            if (params.has('steper')) {
                _this.filter.steper = params.get('steper');
            }
            // load data
            _this.get(true);
        });
    };
    AwbComponent.prototype.changeStatus = function () {
        this.$('#changeStatusModal').modal('show');
    };
    AwbComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'code' },
            { name: 'date' },
            { name: 'company', object: true, data: 'name' },
            { name: 'department', object: true, data: 'name' },
            { name: 'branch', object: true, data: 'name' },
            { name: 'receiver', object: true, data: 'name' },
            { name: 'payment_type', object: true, data: 'name' },
            { name: 'service', object: true, data: 'name' },
            { name: 'status', object: true, data: 'name' },
            { name: 'city', object: true, data: 'name' },
            { name: 'area', object: true, data: 'name' },
            { name: 'pieces' },
            { name: 'receiver_city' },
            { name: 'receiver_area' },
            { name: 'weight' },
            { name: 'collection' },
            { name: 'is_return', type: 'checkbox' },
            { name: 'referance' },
            { name: 'branch_name' },
            { name: 'receiver_name' },
            { name: 'receiver_title' },
            { name: 'sheet_id' },
            { name: 'notes' },
            { name: 'user', object: true, data: 'name' }
        ];
        if (src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].isAdmin()) {
            this.fillable.push({ name: 'zprice' });
            this.fillable.push({ name: 'shiping_price' });
            this.fillable.push({ name: 'additional_kg_price' });
            this.fillable.push({ name: 'additional_price' });
            this.fillable.push({ name: 'net_price' });
        }
        this.fillable.push({ name: this.loadingTrash ? 'restore' : 'edit',
            permission: this.loadingTrash ? this.displayLoadTrash : this.canEdit,
            action: function (item, i) { (_this.loadingTrash) ? _this.restore(item) : _this.edit(item); }, class: this.loadingTrash ? "fa fa-reply w3-text-green" : "fa fa-edit w3-text-orange" });
        this.fillable.push({ name: 'tracking', permission: this.canTrack, action: function (item, i) { _this.track(item); }, class: "fa fa-truck w3-text-indigo rotate-180" });
        this.fillable.push({ name: 'remove', permission: this.canRemove, action: function (item, i) { _this.destroy(item, i); }, class: "fa fa-trash w3-text-red" });
    };
    AwbComponent.prototype.loadTrash = function () {
        var _this = this;
        _super.prototype.loadTrash.call(this);
        this.service.get("awbs-trash").subscribe(function (res) {
            _this.data = res;
            _this.initFillable();
            _this.response = {};
        });
    };
    AwbComponent.prototype.restore = function (item) {
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].confirm(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('are you sure'), function () {
            self.service.store("awbs-restore/" + item.id, null).subscribe(function (res) {
                if (res.status == 0) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(res.message);
                }
                else {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
                }
                self.get();
            });
        });
    };
    AwbComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies').subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].branches())
            this.branches = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].branches();
        else
            this.service.get('branches').subscribe(function (res) {
                _this.branches = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].paymentTypes())
            this.paymentTypes = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].paymentTypes();
        else
            this.service.get('payment-types').subscribe(function (res) {
                _this.paymentTypes = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].departments())
            this.departments = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].departments();
        else
            this.service.get('departments').subscribe(function (res) {
                _this.departments = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services())
            this.services = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services();
        else
            this.service.get('services').subscribe(function (res) {
                _this.services = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].cities();
        else
            this.service.get('cities').subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].areas();
        else
            this.service.get('areas').subscribe(function (res) {
                _this.areas = res;
            });
        //
        this.service.get('receivers').subscribe(function (res) {
            _this.receivers = res;
        });
    };
    AwbComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.initBreadCrumb();
        this.loadSettings();
    };
    AwbComponent.prototype.create = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.router, "/awb-create/");
    };
    AwbComponent.prototype.edit = function (item) {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.router, "/awb-edit/" + item.id);
    };
    AwbComponent.prototype.track = function (item) {
        this.selectedResource = item;
        this.$('#trackingModal').modal('show');
    };
    AwbComponent.prototype.getAction = function () {
        this.initFillable();
    };
    AwbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb',
            template: __webpack_require__(/*! ./awb.component.html */ "./src/app/admin/components/awb/awb.component.html"),
            styles: [__webpack_require__(/*! ./awb.component.scss */ "./src/app/admin/components/awb/awb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AwbComponent);
    return AwbComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/awb/change-status/change-status.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/awb/change-status/change-status.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"changeStatusModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"change status for selected awb\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"\">\n          <label for=\"\">{{ \"change status for awbs\" | trans }}</label>\n          <br>\n          <select class=\"form-control\"\n              [(ngModel)]=\"generalStatus\" >\n              <ng-container *ngFor=\"let item of status\"  >\n                <option [value]=\"item.id\">{{ item.name }}</option>\n              </ng-container>\n          </select>\n        </div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button mat-raised-button class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" }}</button>\n        <button mat-raised-button\n        (click)=\"changeStatus()\"\n        class=\"btn btn-primary w3-indigo\" [disabled]=\"isSubmit\" >\n          <span *ngIf=\"!isSubmit\" >{{ \"change status\" | trans }}</span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/awb/change-status/change-status.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/awb/change-status/change-status.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXdiL2NoYW5nZS1zdGF0dXMvY2hhbmdlLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/awb/change-status/change-status.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/awb/change-status/change-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangeStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusComponent", function() { return ChangeStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");








var ChangeStatusComponent = /** @class */ (function () {
    function ChangeStatusComponent(service) {
        this.service = service;
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.isSubmit = false;
        this.status = [];
        this.$ = $;
        this.loadStatus();
    }
    ChangeStatusComponent.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].status())
            this.status = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].status();
        else
            this.service.get('status').subscribe(function (res) {
                _this.status = res;
            });
    };
    ChangeStatusComponent.prototype.validate = function () {
        return this.generalStatus ? true : false;
    };
    ChangeStatusComponent.prototype.close = function () {
        this.$('#changeStatusModal').modal('hide');
    };
    ChangeStatusComponent.prototype.finish = function () {
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('done'));
        _shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(false);
        this.isSubmit = false;
        this.close();
        if (this.action)
            this.action();
    };
    ChangeStatusComponent.prototype.changeStatus = function () {
        var _this = this;
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('please select status'));
        }
        this.isSubmit = true;
        var counter = 1;
        _shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(true);
        var self = this;
        this.selectedAwb.getAll().forEach(function (element) {
            var data = {
                status_id: _this.generalStatus
            };
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_6__["Request"].addToQueue({
                observer: _this.service.store('awbs/status/' + element.id, data),
                action: function (res) { }
            });
            counter++;
        });
        // fire requester
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_6__["Request"].fire(function () {
            // console.log('finished ...............');
            self.finish();
        });
    };
    ChangeStatusComponent.prototype.ngOnInit = function () {
    };
    ChangeStatusComponent.prototype.ngOnChanges = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"])
    ], ChangeStatusComponent.prototype, "selectedAwb", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangeStatusComponent.prototype, "action", void 0);
    ChangeStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-status',
            template: __webpack_require__(/*! ./change-status.component.html */ "./src/app/admin/components/awb/change-status/change-status.component.html"),
            styles: [__webpack_require__(/*! ./change-status.component.scss */ "./src/app/admin/components/awb/change-status/change-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ChangeStatusComponent);
    return ChangeStatusComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/awb/tracking/tracking.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/awb/tracking/tracking.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"trackingModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg w3-block\" role=\"document\">\n    <div class=\"modal-content light-gray w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title w3-center w3-xlarge w3-text-indigo\">\n          <span   >{{ \"tracking awb\" | trans }}</span> {{ resource.code }}\n\n        </h4>\n      </div>\n      <div class=\"w3-block main-background\">\n        <div class=\"track-background row\">\n          <div class=\"col-lg-9 col-md-9\">\n\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\" >\n            <div\n            *ngFor=\"let row of steppers index as i\"\n            class=\"md-step {{ stepperHashTable.has(row) || currentStatus.code == awbStatusCode.DELIVERED? 'active editable' : '' }}  \"  >\n              <div class=\"md-step-circle\"><span>{{ i + 1 }}</span></div>\n              <div class=\"md-step-title\">{{ row | trans }}</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <!--\n            <div class=\"md-step active editable\">\n              <div class=\"md-step-circle\"><span>2</span></div>\n              <div class=\"md-step-title\">Shipping</div>\n              <div class=\"md-step-optional\">Optional</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle\"><span>3</span></div>\n              <div class=\"md-step-title\">Payment</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step\">\n              <div class=\"md-step-circle\"><span>4</span></div>\n              <div class=\"md-step-title\">Review</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            -->\n          </div>\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\"  >\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-circle-o\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Sender\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <b *ngIf=\"resource.company\" style=\"color: black\" >\n                  {{ resource.company.city? resource.company.city.name : '' }},\n                  {{ resource.company.area? resource.company.area.name : '' }}\n                </b>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\" ></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-map-marker\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Receiver\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <b *ngIf=\"resource.receiver\" style=\"color: black\" >\n                  {{ resource.receiver.city? resource.receiver.city.name : '' }},\n                  {{ resource.receiver.area? resource.receiver.area.name : '' }}\n                </b>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\"></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n          </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"statusHashTable.has(resource.status_id)\" >\n            <div class=\"row\" *ngIf=\"statusHashTable.get(resource.status_id).code == awbStatusCode.DELIVERED\" >\n\n              <div class=\"col-lg-6\">\n                <label class=\"w3-xlarge w3-text-indigo\">{{ \"receiver name\" | trans }} </label>\n                <br>\n                <input type=\"text\"\n                (change)=\"sendAwbInfo()\"\n                class=\"app-form w3-round form-control\" [(ngModel)]=\"resource.receiver_name\" >\n              </div>\n\n              <div class=\"col-lg-6\">\n                <label class=\"w3-xlarge w3-text-indigo\">{{ \"receiver title\" | trans }} </label>\n                <br>\n                <input type=\"text\"\n                (change)=\"sendAwbInfo()\"\n                class=\"app-form w3-round form-control\" [(ngModel)]=\"resource.receiver_title\" >\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <div *ngIf=\"canChangeAwbStatus\" >\n              <label class=\"w3-xlarge w3-text-indigo\" >{{ \"status\" | trans }} *</label>\n              <select\n              *ngIf=\"!resource.is_final || canChangeOk\"\n              class=\"form-control w3-round app-form\"\n              [(ngModel)]=\"resource.status_id\"  >\n                <ng-container *ngFor=\"let item of status\">\n                  <option *ngIf=\"item.type == 'awb'\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n              <div\n              *ngIf=\"resource.is_final && !canChangeOk\"\n              class=\"alert alert-danger\">\n                <i class=\"fa fa-exclamation-triangle w3-margin-left w3-margin-righ\"  ></i> {{ \"cant change status\" }}\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n        <br>\n\n        <div class=\"table-responsive w3-white text-center\" style=\"height: 200px;\" >\n          <table class=\"table table-bordered text-center\">\n            <tr class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"#\" }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"awb\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"sender\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"status\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"user\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"date\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"time\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"remove\" | trans }}</th>\n            </tr>\n\n            <tr *ngFor=\"let row of history index as i\" >\n             <td>{{ i + 1 }}</td>\n             <td>{{ resource.code }}</td>\n             <td>{{ resource.company? resource.company.name : '' }}</td>\n             <td>{{ row.status? row.status.name : '' }}</td>\n             <td>{{ row.user? row.user.name : '' }}</td>\n             <td>{{ row.created_at | date }}</td>\n             <td>{{ row.created_at | date: 'shortTime' }}</td>\n             <td>\n               <button *ngIf=\"canRemoveTrack\" (click)=\"removeRow(row, i)\" class=\"fa fa-trash w3-text-red\"></button>\n             </td>\n            </tr>\n         </table>\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n\n          <button class=\"w3-indigo\"\n          *ngIf=\"canChangeAwbStatus\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send()\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span  >{{ \"change status\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/awb/tracking/tracking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/awb/tracking/tracking.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n.md-stepper-horizontal {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);\n}\n.md-stepper-horizontal .md-step {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.md-stepper-horizontal .md-step:hover,\n.md-stepper-horizontal .md-step:active {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.md-stepper-horizontal .md-step:active {\n  border-radius: 15%/75%;\n}\n.md-stepper-horizontal .md-step:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.md-stepper-horizontal .md-step:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.md-stepper-horizontal .md-step:hover .md-step-circle {\n  background-color: #757575;\n}\n.md-stepper-horizontal .md-step:first-child .md-step-bar-left,\n.md-stepper-horizontal .md-step:last-child .md-step-bar-right {\n  display: none;\n}\n.md-stepper-horizontal .md-step .md-step-circle {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  background-color: #999999;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #FFFFFF;\n}\n.md-stepper-horizontal.green .md-step.active .md-step-circle {\n  background-color: #00AE4D;\n}\n.md-stepper-horizontal.orange .md-step.active .md-step-circle {\n  background-color: #F96302;\n}\n.md-stepper-horizontal .md-step.active .md-step-circle {\n  background-color: #2196f3;\n}\n.md-stepper-horizontal .md-step.done .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step.done .md-step-circle *,\n.md-stepper-horizontal .md-step.editable .md-step-circle * {\n  display: none;\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle {\n  transform: scaleX(-1);\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step .md-step-title {\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-title,\n.md-stepper-horizontal .md-step .md-step-optional {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.26);\n}\n.md-stepper-horizontal .md-step.active .md-step-title {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-stepper-horizontal .md-step.active.done .md-step-title,\n.md-stepper-horizontal .md-step.active.editable .md-step-title {\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-optional {\n  font-size: 12px;\n}\n.md-stepper-horizontal .md-step.active .md-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-stepper-horizontal .md-step .md-step-bar-left,\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  position: absolute;\n  top: 36px;\n  height: 1px;\n  border-top: 1px solid #DDDDDD;\n}\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  right: 0;\n  left: 50%;\n  margin-left: 20px;\n}\n.md-stepper-horizontal .md-step .md-step-bar-left {\n  left: 0;\n  right: 50%;\n  margin-right: 20px;\n}\n.track-background {\n  background-image: url(\"/assets/img/customer_service.png\");\n  background-size: auto 100%;\n  background-position: right;\n  background-repeat: no-repeat;\n}\n.main-background {\n  background-image: url(\"/assets/img/main_background.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hd2IvdHJhY2tpbmcvdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXdiL3RyYWNraW5nL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcYXdiXFx0cmFja2luZ1xcdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtBRENGO0FDRUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0FEQ0Q7QUNDQTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FERUQ7QUNBQTs7RUFFQyxxQ0FBQTtBREdEO0FDREE7RUFDQyxzQkFBQTtBRElEO0FDRkE7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FES0Q7QUNIQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7QURNRDtBQ0pBO0VBQ0MseUJBQUE7QURPRDtBQ0xBOztFQUVDLGFBQUE7QURRRDtBQ05BO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEU0Q7QUNQQTtFQUNDLHlCQUFBO0FEVUQ7QUNSQTtFQUNDLHlCQUFBO0FEV0Q7QUNUQTtFQUNDLHlCQUFBO0FEWUQ7QUNWQTtFQUNDLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEYUQ7QUNYQTs7RUFFQyxhQUFBO0FEY0Q7QUNaQTtFQUlDLHFCQUFBO0FEZUQ7QUNiQTtFQUNDLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEZ0JEO0FDZEE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGlCRDtBQ2ZBOztFQUVDLGtCQUFBO0VBQ0EsMEJBQUE7QURrQkQ7QUNoQkE7RUFDQyxnQkFBQTtFQUNBLDBCQUFBO0FEbUJEO0FDakJBOztFQUVDLGdCQUFBO0FEb0JEO0FDbEJBO0VBQ0MsZUFBQTtBRHFCRDtBQ25CQTtFQUNDLDBCQUFBO0FEc0JEO0FDcEJBOztFQUVDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBRHVCRDtBQ3JCQTtFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUR3QkQ7QUN0QkE7RUFDQyxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEeUJEO0FDckJBO0VBQ0MseURBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUR3QkQ7QUNyQkE7RUFDQyx3REFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUR3QkQiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2F3Yi90cmFja2luZy90cmFja2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6aG92ZXIsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlLzc1JTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpmaXJzdC1jaGlsZDphY3RpdmUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsLmdyZWVuIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBRTREO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsLm9yYW5nZSAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NjMwMjtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb250ZW50OiBcIu+AjFwiO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlICosXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSAqIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb250ZW50OiBcIu+DkVwiO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1vcHRpb25hbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmRvbmUgLm1kLXN0ZXAtdGl0bGUsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5lZGl0YWJsZSAubWQtc3RlcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNnB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREREREQ7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvY3VzdG9tZXJfc2VydmljZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1haW4tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL21haW5fYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59IiwiXG4udGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSFpbXBvcnRhbnQ7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwge1xuXHRkaXNwbGF5OnRhYmxlO1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW46MCBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG5cdGJveC1zaGFkb3c6IDAgM3B4IDhweCAtNnB4IHJnYmEoMCwwLDAsLjUwKTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAge1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRwYWRkaW5nOjI0cHg7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4wNCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmFjdGl2ZSB7XG5cdGJvcmRlci1yYWRpdXM6IDE1JSAvIDc1JTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6bGFzdC1jaGlsZDphY3RpdmUge1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyIC5tZC1zdGVwLWNpcmNsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6Izc1NzU3NTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcblx0ZGlzcGxheTpub25lO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1jaXJjbGUge1xuXHR3aWR0aDozMHB4O1xuXHRoZWlnaHQ6MzBweDtcblx0bWFyZ2luOjAgYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjojOTk5OTk5O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bGluZS1oZWlnaHQ6MzBweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjojRkZGRkZGO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5ncmVlbiAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcblx0YmFja2dyb3VuZC1jb2xvcjojMDBBRTREO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5vcmFuZ2UgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6I0Y5NjMwMjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigzMywxNTAsMjQzKTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcblx0Zm9udC1mYW1pbHk6J0ZvbnRBd2Vzb21lJztcblx0Zm9udC13ZWlnaHQ6MTAwO1xuXHRjb250ZW50OiBcIlxcZjAwY1wiO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZSAqLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUgKiB7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlIHtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG5cdC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG5cdHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlOmJlZm9yZSB7XG5cdGZvbnQtZmFtaWx5OidGb250QXdlc29tZSc7XG5cdGZvbnQtd2VpZ2h0OjEwMDtcblx0Y29udGVudDogXCJcXGYwZDFcIjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtdGl0bGUge1xuXHRtYXJnaW4tdG9wOjE2cHg7XG5cdGZvbnQtc2l6ZToxNnB4O1xuXHRmb250LXdlaWdodDo2MDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1vcHRpb25hbCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6cmdiYSgwLDAsMCwuMjYpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtdGl0bGUge1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5kb25lIC5tZC1zdGVwLXRpdGxlLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUuZWRpdGFibGUgLm1kLXN0ZXAtdGl0bGUge1xuXHRmb250LXdlaWdodDo2MDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcblx0Zm9udC1zaXplOjEycHg7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1vcHRpb25hbCB7XG5cdGNvbG9yOnJnYmEoMCwwLDAsLjU0KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLWxlZnQsXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MzZweDtcblx0aGVpZ2h0OjFweDtcblx0Ym9yZGVyLXRvcDoxcHggc29saWQgI0RERERERDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtYmFyLXJpZ2h0IHtcblx0cmlnaHQ6MDtcblx0bGVmdDo1MCU7XG5cdG1hcmdpbi1sZWZ0OjIwcHg7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1sZWZ0IHtcblx0bGVmdDowO1xuXHRyaWdodDo1MCU7XG5cdG1hcmdpbi1yaWdodDoyMHB4O1xufVxuXG5cbi50cmFjay1iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvY3VzdG9tZXJfc2VydmljZS5wbmdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1haW4tYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL21haW5fYmFja2dyb3VuZC5qcGdcIik7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/awb/tracking/tracking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/awb/tracking/tracking.component.ts ***!
  \*********************************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../settings/awb-status-code */ "./src/app/settings/awb-status-code.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var TrackingComponent = /** @class */ (function () {
    function TrackingComponent(service) {
        this.service = service;
        this.isSubmit = false;
        this.status = [];
        this.history = [];
        this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.canChangeOk = true;
        this.canChangeAwbStatus = true;
        this.canRemoveTrack = false;
        this.steppers = ['in_company', 'processing', 'hold', 'delivered'];
        this.awbStatusCode = _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_7__["AwbStatusCode"];
        this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.currentStatus = {};
        this.canChangeOk = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_change_ok_status');
        this.canChangeAwbStatus = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_change_status');
        this.canRemoveTrack = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('awb_track_remove');
    }
    TrackingComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        this.status.forEach(function (element) {
            _this.statusHashTable.put(element.id, element);
        });
    };
    TrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status());
        else
            this.service.get("status").subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    TrackingComponent.prototype.ngOnChanges = function () {
        this.history = this.resource.awb_history;
        this.currentStatus = this.resource.status ? this.resource.status : {};
        this.loadStepper();
        if (this.resource.status)
            this.resource.is_final = this.resource.status.is_final;
    };
    TrackingComponent.prototype.loadStepper = function () {
        var _this = this;
        this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (this.history)
            this.history.forEach(function (element) {
                if (element.status.steper)
                    _this.stepperHashTable.put(element.status.steper, element.status.steper);
            });
    };
    TrackingComponent.prototype.sendAwbInfo = function () {
        if (!this.resource.receiver_name || !this.resource.receiver_title) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error('enter receiver name and title');
        }
        /*this.service.store("awbs/update/"+this.resource.id, this.resource).subscribe((res: any) => {
          if (res.status == 1) {
            Message.success(res.message);
          } else {
            Message.error(res.message);
          }
        });*/
        this.send();
    };
    TrackingComponent.prototype.send = function () {
        var _this = this;
        if (this.statusHashTable.get(this.resource.status_id).code == this.awbStatusCode.DELIVERED) {
            if (!this.resource.receiver_name || !this.resource.receiver_title) {
                return src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error('enter receiver name and title');
            }
        }
        this.isSubmit = true;
        var data = {
            status_id: this.resource.status_id,
            receiver_name: this.resource.receiver_name,
            receiver_title: this.resource.receiver_title
        };
        this.service.store('awbs/status/' + this.resource.id, data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                _this.resource.status = _this.statusHashTable.get(_this.resource.status_id);
                _this.ngOnChanges();
                //
                _this.history = res.data;
                _this.loadStepper();
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            }
            _this.isSubmit = false;
        });
    };
    TrackingComponent.prototype.removeRow = function (item, index) {
        var _this = this;
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            self.service.destroy('awbs-history/destroy', item.id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                    _this.ngOnChanges();
                    _this.history = res.data;
                    _this.loadStepper();
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackingComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TrackingComponent.prototype, "reload", void 0);
    TrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! ./tracking.component.html */ "./src/app/admin/components/awb/tracking/tracking.component.html"),
            styles: [__webpack_require__(/*! ./tracking.component.scss */ "./src/app/admin/components/awb/tracking/tracking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], TrackingComponent);
    return TrackingComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/branch/branch.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/branch/branch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"import()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.get(true)\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-teal\"   >\n      <i class=\"fa fa-refresh\"></i> {{ \"reload\" | trans }}\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.create()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n  <div class=\"table-responsive\">\n\n  <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n    <tr class=\"w3-light-gray\" >\n      <th class=\"w3-padding\" >{{ \"#\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"id\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"name\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"phone\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"address\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"city\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"area\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"company\" | trans }}</th>\n      <th class=\"w3-padding\" >{{ \"remove\"| trans }}</th>\n    </tr>\n    <tr *ngIf=\"loading\"  >\n      <td class=\"w3-text-indigo text-center\" colspan=\"8\" >\n        <i class=\"fa fa-spin fa-spinner\"></i>\n      </td>\n    </tr>\n    <ng-container *ngFor=\"let item of data index as i\" >\n      <tr  *ngIf=\"!loading && search(item) && (item.company_id == filter.company_id || !filter.company_id)\" >\n        <td>\n          <div class=\"w3-center text-center hidden\" >\n            <mat-slide-toggle\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"\n            ></mat-slide-toggle>\n          </div>\n          <mat-checkbox\n          [checked]=\"selectedResources.has(item.id)\"\n          (change)=\"toggle(item)\"></mat-checkbox>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          class=\"w3-block w3-border-0  text-center\"\n          readonly\n          [(ngModel)]=\"item.id\"  >\n          <span style=\"display: none;\" >{{ item.id }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.name\" >\n          <span style=\"display: none;\" >{{ item.name }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.phone\" >\n          <span style=\"display: none;\" >{{ item.phone }}</span>\n        </td>\n        <td>\n          <input\n          type=\"text\"\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.address\" >\n          <span style=\"display: none;\" >{{ item.address }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.city_id\" >\n            <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          <span style=\"display: none;\" >{{ item.city_id }}</span>\n        </td>\n        <td>\n          <select\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.area_id\" >\n            <ng-container  *ngFor=\"let row of areas\" >\n              <option *ngIf=\"row.city_id == item.city_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </ng-container>\n            </select>\n          <span style=\"display: none;\" >{{ item.area_id }}</span>\n        </td>\n        <td>\n          <select\n          style=\"min-width: 200px;\"\n          class=\"w3-block w3-border-0 text-center\"\n          (change)=\"send(item)\"\n          [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n          [(ngModel)]=\"item.company_id\" >\n          <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n        </select>\n          <span style=\"display: none;\" >{{ item.company_id }}</span>\n        </td>\n        <td>\n          <button\n          class=\"fa fa-trash w3-button\"\n          *ngIf=\"canRemove\"  (click)=\"destroy(item, i)\" ></button>\n        </td>\n      </tr>\n    </ng-container>\n\n  </table>\n  </div>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/admin/components/branch/branch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/branch/branch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive {\n  height: 250px;\n}\n\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9icmFuY2gvQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxicmFuY2hcXGJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGhlaWdodDogMjUwcHg7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSFpbXBvcnRhbnQ7XG59XG4iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/branch/branch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/branch/branch.component.ts ***!
  \*************************************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var BranchComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BranchComponent, _super);
    function BranchComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.companies = [];
        _this.cities = [];
        _this.areas = [];
        _this.title = "branches";
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_branch_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_branch_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_branch_remove');
        //
        _this.baseApiUrl = "branches";
        return _this;
    }
    BranchComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    BranchComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas();
        else
            this.service.get("areas").subscribe(function (res) {
                _this.areas = res;
            });
    };
    BranchComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadSettings();
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches())
            this.data = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches();
        else
            this.get();
    };
    BranchComponent.prototype.getAction = function (res) {
        _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setBranches(res);
    };
    BranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! ./branch.component.html */ "./src/app/admin/components/branch/branch.component.html"),
            styles: [__webpack_require__(/*! ./branch.component.scss */ "./src/app/admin/components/branch/branch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], BranchComponent);
    return BranchComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/company/company-form/company-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/company/company-form/company-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"companyModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light-gray w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit company\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add company\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <img src=\"{{ resource.logo_url }}\" alt=\"\" style=\"width: 50px;\" class=\"w3-round\" >\n        <br>\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"logo\" | trans }} </th>\n            <td>\n              <input type=\"file\"\n              (change)=\"loadFile($event, 'logo', resource)\"\n              class=\"form-control input-sm\"  [(ngModel)]=\"resource.logo\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"address\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"phone\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"email\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"city\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.city_id\"  >\n                <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"area\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.area_id\"  >\n                <ng-container *ngFor=\"let item of areas\">\n                  <option *ngIf=\"item.city_id == resource.city_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"ceo\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.ceo\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"fax\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.fax\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"commercial_number\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.commercial_number\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"commercial_photo\" | trans }} </th>\n            <td>\n              <input type=\"file\"\n              (change)=\"loadFile($event, 'commercial_photo', resource)\"\n              class=\"form-control input-sm\"  [(ngModel)]=\"resource.commercial_photo\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"notes\" | trans }}</th>\n            <td>\n              <textarea  class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" ></textarea>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"active\" | trans }} </th>\n            <td>\n              <mat-checkbox\n              #checkbox\n              (change)=\"resource.active = (checkbox.checked)? '1' : '0'\"\n              [checked]=\"resource.active == '1'? true : false\"\n              ></mat-checkbox>\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"show_dashboard\" | trans }} </th>\n            <td>\n              <mat-checkbox\n              [(ngModel)]=\"resource.show_dashboard\"\n              ></mat-checkbox>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource, true)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/company/company-form/company-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/company/company-form/company-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LWZvcm0vY29tcGFueS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/company/company-form/company-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/company/company-form/company-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyFormComponent", function() { return CompanyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");




var CompanyFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyFormComponent, _super);
    function CompanyFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add company";
        _this.cities = [];
        _this.areas = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "companies";
        if (_this.isUpdate)
            _this.title = "update company";
        _this.requiredFields = [
            'name', 'address', 'phone', 'city_id', 'area_id'
        ];
        return _this;
    }
    CompanyFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'companies', url: '/company' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CompanyFormComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.get("areas").subscribe(function (res) {
            _this.areas = res;
        });
        this.service.get("cities").subscribe(function (res) {
            _this.cities = res;
        });
    };
    CompanyFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyFormComponent.prototype, "action", void 0);
    CompanyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-form',
            template: __webpack_require__(/*! ./company-form.component.html */ "./src/app/admin/components/company/company-form/company-form.component.html"),
            styles: [__webpack_require__(/*! ./company-form.component.scss */ "./src/app/admin/components/company/company-form/company-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], CompanyFormComponent);
    return CompanyFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/company/company.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/company/company.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\" style=\"display: none;\" >\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with city' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.city_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with area' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.area_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of areas\">\n          <option *ngIf=\"item.city_id == filter.city_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"self\" ></app-table>\n\n</div>\n\n</div>\n\n<div appAuth class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button  mat-fab class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n\n<app-company-form  [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\"  ></app-company-form>\n"

/***/ }),

/***/ "./src/app/admin/components/company/company.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/company/company.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/company/company.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/company/company.component.ts ***!
  \***************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var CompanyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyComponent, _super);
    function CompanyComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "companies";
        _this.cities = [];
        _this.areas = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.self = _this;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('company_remove') && src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].isAdmin();
        //
        _this.baseApiUrl = "companies";
        _this.initFillable();
        return _this;
    }
    CompanyComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'logo_url', type: 'image' },
            { name: 'name' },
            { name: 'ceo' },
            { name: 'address' },
            { name: 'phone' },
            { name: 'email' },
            { name: 'commercial_photo_url', type: 'image' },
            { name: 'view', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-desktop w3-text-green' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    CompanyComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas();
        else
            this.service.get("areas").subscribe(function (res) {
                _this.areas = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
            });
    };
    CompanyComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.data = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.get();
    };
    CompanyComponent.prototype.getAction = function (res) {
        _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].setCompanies(res);
    };
    CompanyComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1 };
        this.$('#companyModal').modal('show');
    };
    CompanyComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.resource.logo = null;
        this.$('#companyModal').modal('show');
    };
    CompanyComponent.prototype.show = function (item) {
        this.edit(item);
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/admin/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/admin/components/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CompanyComponent);
    return CompanyComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"sheet info\" | trans }}</div>\n        <div class=\"custom-panel-body row\"  >\n\n          <div class=\"col-lg-12\">\n            <label>{{ \"date\" | trans }} *</label>\n            <input type=\"date\" class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.date\" >\n          </div>\n\n          <div class=\"col-lg-12\">\n            <label>{{ \"courier\" | trans }} *</label>\n            <select  class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.courier_id\" >\n              <option *ngFor=\"let row of couriers\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-12\">\n            <label>{{ \"notes\" | trans }}</label>\n            <textarea class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.notes\" ></textarea>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\">\n            <br>\n            <button\n             mat-raised-button\n             class=\"w3-indigo w3-block\"\n             [disabled]=\"isSubmit\"\n            (click)=\"send(resource)\" >\n            <span *ngIf=\"!isSubmit\" >{{ \"save courier sheet\" | trans }}</span>\n            <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n          </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"search about awb\" | trans }}</div>\n        <div class=\"custom-panel-body row\"  >\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"company\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.company_id\" >\n              <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"branch\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.branch_id\" >\n              <ng-container *ngFor=\"let row of branches\">\n                <option *ngIf=\"row.company_id == resource.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"department\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.department_id\" >\n              <ng-container *ngFor=\"let row of departments\">\n                <option *ngIf=\"row.company_id == resource.company_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"awb code\" | trans }}</label>\n            <input type=\"text\"\n            class=\"form-control input-sm w3-round\"\n            (keyup.enter)=\"setAwb()\"\n            (change)=\"loadAwbs()\"\n            (keypress)=\"loadAwbs()\" [(ngModel)]=\"resource.code\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"city\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.city_id\" >\n              <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"area\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.area_id\" >\n              <ng-container *ngFor=\"let row of areas\">\n                <option *ngIf=\"row.city_id == resource.city_id\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\">\n            <label>{{ \"awbs\" | trans }}</label>\n            <select  class=\"form-control input-sm w3-round\" (change)=\"loadAwbs()\" [(ngModel)]=\"resource.awb_id\" >\n              <ng-container *ngFor=\"let row of awbsHashTable.getAll()\">\n                <option *ngIf=\"!selectedAwb.has(row.id)\" value=\"{{ row.id }}\">{{ row.code }} - {{ row.company? row.company.name : '' }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\">\n            <br>\n            <button mat-raised-button class=\"w3-green\" (click)=\"addAwb()\" >{{ \"add\" | trans }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div  class=\" form-inline\" *ngIf=\"selectedResources.size() > 0 && resource.id && canTransfer\" >\n      <input\n        type=\"text\"\n        [(ngModel)]=\"distinationSheet\"\n        class=\" form-control form-inline\"\n        style=\"margin: 5px\"\n        placeholder=\"{{ 'sheet number' | trans }}\" >\n\n      <button mat-raised-button class=\"w3-indigo\" (click)=\"transfer()\" >\n        <span *ngIf=\"!isTransferSubmit\" >{{ \"move to another courier sheet\" | trans }}</span>\n        <span *ngIf=\"isTransferSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n      </button>\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <tr>\n          <th></th>\n          <th>#</th>\n          <th>{{ \"code\" | trans }}</th>\n          <th>{{ \"date\" | trans }}</th>\n          <th>{{ \"company\" | trans }}</th>\n          <th>{{ \"department\" | trans }}</th>\n          <th>{{ \"branch\" | trans }}</th>\n          <th>{{ \"receiver\" | trans }}</th>\n          <th>{{ \"payment type\" | trans }}</th>\n          <th>{{ \"service\" | trans }}</th>\n          <th>{{ \"status\" | trans }}</th>\n          <th>{{ \"city\" | trans }}</th>\n          <th>{{ \"area\" | trans }}</th>\n          <th>{{ \"remove\" | trans }}</th>\n        </tr>\n\n        <tr *ngFor=\"let row of selectedAwb.getAll() index as i\" >\n          <td>\n            <mat-checkbox [checked]=\"selectedResources.has(row.id)\" (change)=\"toggleAwb(row)\" ></mat-checkbox>\n          </td>\n          <td>{{ i + 1 }}</td>\n          <td>{{ row.code }}</td>\n          <td>{{ row.date }}</td>\n          <td>{{ row.company? row.company.name : '' }}</td>\n          <td>{{ row.department? row.department.name : '' }}</td>\n          <td>{{ row.branch? row.branch.name : '' }}</td>\n          <td>{{ row.receiver? row.receiver.name : '' }}</td>\n          <td>{{ row.payment_type? row.payment_type.name : '' }}</td>\n          <td>{{ row.service? row.service.name : '' }}</td>\n          <td>{{ row.status? row.status.name : '' }}</td>\n          <td>{{ row.city? row.city.name : '' }}</td>\n          <td>{{ row.area? row.area.name : '' }}</td>\n          <td>\n              <i class=\"fa fa-trash btn\" (click)=\"remove(row, i)\" ></i>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb3VyaWVyLXNoZWV0L2NvdXJpZXItc2hlZXQtZm9ybS9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXGNvdXJpZXItc2hlZXRcXGNvdXJpZXItc2hlZXQtZm9ybVxcY291cmllci1zaGVldC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvdXJpZXItc2hlZXQvY291cmllci1zaGVldC1mb3JtL2NvdXJpZXItc2hlZXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci1zaGVldC9jb3VyaWVyLXNoZWV0LWZvcm0vY291cmllci1zaGVldC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSFpbXBvcnRhbnQ7XG59XG4iLCIudGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CourierSheetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierSheetFormComponent", function() { return CourierSheetFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");










var CourierSheetFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierSheetFormComponent, _super);
    function CourierSheetFormComponent(service, router) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.baseApiUrl = "courier-sheets";
        _this.title = "add courier sheet";
        _this.couriers = [];
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.cities = [];
        _this.areas = [];
        _this.awbs = [];
        _this.awbsHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.isTransferSubmit = false;
        //
        _this.canTransfer = false;
        _this.selectedResources = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.requiredFields = [
            "courier_id", "date"
        ];
        _this.displayError = true;
        _this.router.paramMap.subscribe(function (params) {
            if (params.has('id'))
                _this.load(params.get('id'));
            else
                _this.initResource();
        });
        _this.canTransfer = _shared_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"].can('courer_sheet_transfer_awb');
        return _this;
    }
    CourierSheetFormComponent.prototype.setAwb = function () {
        var _this = this;
        this.loadAwbs(function (res) {
            if (res.data.length > 0) {
                // add first item in the table
                var firstItem = _this.awbsHashTable.getAll()[0];
                _this.selectedAwb.put(firstItem.id, firstItem);
                if (_this.resource.id)
                    _this.send(_this.resource);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('this awb code not exists'));
            }
            // reset input
            _this.resource.code = "";
        });
    };
    CourierSheetFormComponent.prototype.transfer = function () {
        var _this = this;
        if (!this.distinationSheet) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter courier sheet'));
        }
        var data = {
            awb_id: this.selectedResources.getKeys(),
            sheet_id: this.distinationSheet
        };
        this.isTransferSubmit = true;
        this.service.store('courier-sheets/transfer', data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
                _this.load(_this.resource.id);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(res.message);
            }
            _this.isTransferSubmit = false;
        });
    };
    CourierSheetFormComponent.prototype.toggleAwb = function (awb) {
        if (this.selectedResources.has(awb.id)) {
            this.selectedResources.remove(awb.id);
        }
        else {
            this.selectedResources.put(awb.id, awb);
        }
    };
    CourierSheetFormComponent.prototype.validate = function (item) {
        var valid = _super.prototype.validate.call(this, item);
        if (!valid) {
            return valid;
        }
        if (this.resource.details.length <= 0) {
            this.requiredMessage = src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('please add at least one awb');
            valid = false;
        }
        return valid;
    };
    CourierSheetFormComponent.prototype.getAction = function (res) {
        var _this = this;
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        if (res.sheet_details) {
            res.sheet_details.forEach(function (element) {
                _this.selectedAwb.put(element.awb_id, element.awb);
            });
        }
        this.initBreadCrumb();
        this.selectedResources = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.distinationSheet = null;
    };
    CourierSheetFormComponent.prototype.reset = function (data) {
        this.initResource();
    };
    CourierSheetFormComponent.prototype.initResource = function () {
        this.resource = {
            date: new Date().toISOString().substring(0, 10),
            details: [],
        };
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
    };
    CourierSheetFormComponent.prototype.loadAwbs = function (action) {
        var _this = this;
        if (action === void 0) { action = null; }
        var filter = {
            company_id: this.resource.company_id,
            branch_id: this.resource.branch_id,
            department_id: this.resource.department_id,
            city_id: this.resource.city_id,
            area_id: this.resource.area_id,
            search: this.resource.search,
            code: this.resource.code,
            courier_sheet: 'active'
        };
        this.awbsHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.service.get('awbs', filter).subscribe(function (res) {
            if (res.data) {
                res.data.forEach(function (element) {
                    _this.awbsHashTable.put(element.id, element);
                });
            }
            if (action)
                action(res);
            //console.log(this.awbsHashTable);
        });
    };
    CourierSheetFormComponent.prototype.initBreadCrumb = function () {
        if (this.resource.id)
            this.breadcrumbList = [
                { name: 'dashboard', url: '/' },
                { name: 'courier sheets', url: '/courier-sheet' },
                { name: this.resource.id, url: '#', active: true },
            ];
        else {
            this.breadcrumbList = [
                { name: 'dashboard', url: '/' },
                { name: 'courier sheets', url: '/courier-sheet' },
                { name: this.title, url: '#', active: true },
            ];
        }
    };
    CourierSheetFormComponent.prototype.send = function (item) {
        var data = item;
        data.date = this.resource.date;
        data.courier_id = this.resource.courier_id;
        data.details = this.selectedAwb.getKeys();
        _super.prototype.send.call(this, data);
    };
    CourierSheetFormComponent.prototype.addAwb = function () {
        var awb = this.awbsHashTable.get(this.resource.awb_id);
        if (!awb)
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('please select awb'));
        this.selectedAwb.put(this.resource.awb_id, awb);
        //this.resource.details.push(awb);
        //
        this.resource.awb_id = null;
        if (this.resource.id)
            this.send(this.resource);
    };
    CourierSheetFormComponent.prototype.remove = function (row, index) {
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].confirm(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('are you sure'), function () {
            self.selectedAwb.remove(row.id);
            self.send(self.resource);
        });
    };
    CourierSheetFormComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.get('couriers').subscribe(function (res) {
            _this.couriers = res;
        });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].companies();
        else
            this.service.get('companies').subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].branches())
            this.branches = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].branches();
        else
            this.service.get('branches').subscribe(function (res) {
                _this.branches = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].departments())
            this.departments = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].departments();
        else
            this.service.get('departments').subscribe(function (res) {
                _this.departments = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].cities();
        else
            this.service.get('cities').subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_9__["Autoloader"].areas();
        else
            this.service.get('areas').subscribe(function (res) {
                _this.areas = res;
            });
    };
    CourierSheetFormComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadSettings();
    };
    CourierSheetFormComponent.prototype.get = function (reload) {
    };
    CourierSheetFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-sheet-form',
            template: __webpack_require__(/*! ./courier-sheet-form.component.html */ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.html"),
            styles: [__webpack_require__(/*! ./courier-sheet-form.component.scss */ "./src/app/admin/components/courier-sheet/courier-sheet-form/courier-sheet-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourierSheetFormComponent);
    return CourierSheetFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\" style=\"display: none;\" >\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'date from' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date_from\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'date from' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'date to' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date_to\"\n      (change)=\"get()\"\n      class=\"app-form w3-round input-sm w3-block\"\n      placeholder=\"{{ 'date to' | trans }}\" >\n    </div>\n\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter by courier' | trans }}</label>\n      <br>\n      <select\n      class=\"app-form w3-round input-sm w3-block\"\n      (change)=\"get()\"\n        [(ngModel)]=\"filter.courier_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of couriers\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'Pending Courier Sheet' | trans }}</label>\n      <br>\n      <select\n      class=\"app-form w3-round input-sm w3-block\"\n      (change)=\"get()\"\n        [(ngModel)]=\"filter.is_pending\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option value=\"1\">{{ \"pending sheet\" | trans }}</option>\n      </select>\n    </div>\n\n\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <app-table [crud]=\"self\" ></app-table>\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci1zaGVldC9jb3VyaWVyLXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/courier-sheet.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/courier-sheet.component.ts ***!
  \***************************************************************************/
/*! exports provided: CourierSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierSheetComponent", function() { return CourierSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var CourierSheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierSheetComponent, _super);
    function CourierSheetComponent(service, router) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.baseApiUrl = "courier-sheets";
        _this.title = "courier-sheets";
        _this.self = _this;
        _this.couriers = [];
        _this.selectedResource = {};
        _this.canTrack = true;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('courier_sheet_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('courier_sheet_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('courier_sheet_remove');
        return _this;
    }
    CourierSheetComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'date' },
            { name: 'courier', object: true, data: 'name' },
            { name: 'user', object: true, data: 'name' },
            { name: 'awb_number' },
            //{name: 'awb_codes'},
            { name: 'edit', permission: this.canEdit, action: function (item, i) { _this.edit(item); }, class: "fa fa-edit w3-text-orange" },
            { name: 'print', permission: true, action: function (item, i) { _this.printOne(item); }, class: "fa fa-print w3-text-dark-gray" },
            { name: 'remove', permission: this.canRemove, action: function (item, i) { _this.destroy(item, i); }, class: "fa fa-trash w3-text-red" },
        ];
    };
    CourierSheetComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.get('couriers').subscribe(function (res) {
            _this.couriers = res;
        });
    };
    CourierSheetComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.initBreadCrumb();
        this.get(true);
        this.loadSettings();
    };
    CourierSheetComponent.prototype.create = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.router, "/courier-sheet-create");
    };
    CourierSheetComponent.prototype.edit = function (item) {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.router, "/courier-sheet-edit/" + item.id);
    };
    CourierSheetComponent.prototype.printOne = function (item) {
        if (item.id) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/courier-sheets/print/" + item.id + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
            src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].openWindow(url);
        }
    };
    CourierSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-sheet',
            template: __webpack_require__(/*! ./courier-sheet.component.html */ "./src/app/admin/components/courier-sheet/courier-sheet.component.html"),
            styles: [__webpack_require__(/*! ./courier-sheet.component.scss */ "./src/app/admin/components/courier-sheet/courier-sheet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourierSheetComponent);
    return CourierSheetComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-12\">\n              <label>{{ \"courier sheet code\" | trans }} *</label>\n              <input\n              type=\"number\" class=\"form-control input-sm w3-round\"\n              (change)=\"loadCourierSheet()\"\n              [(ngModel)]=\"filter.id\" >\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"sheet awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"table-\">\n            <table class=\"table\">\n              <tr>\n                <th>#</th>\n                <th>{{ \"code\" | trans }}</th>\n                <th>{{ \"date\" | trans }}</th>\n                <th>{{ \"company\" | trans }}</th>\n                <th>{{ \"receiver\" | trans }}</th>\n                <th>{{ \"collection\" | trans }}</th>\n                <th>{{ \"shiping_price\" | trans }}</th>\n                <th>{{ \"net_price\" | trans }}</th>\n                <th>{{ \"status\" | trans }}</th>\n                <th>{{ \"collected\" | trans }}</th>\n                <th class=\"hidden\" >{{ \"notes\" | trans }}</th>\n              </tr>\n\n              <tr *ngIf=\"loading\" >\n                <td colspan=\"13\" class=\"w3-center\" >\n                  <i class=\"fa fa-spin fa-spinner w3-text-indigo\"></i>\n                </td>\n              </tr>\n\n              <ng-container *ngFor=\"let row of selectedAwb.getAll() index as i\">\n                <tr *ngIf=\"filterAwb(row)\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ row.code }}</td>\n                  <td>{{ row.date }}</td>\n                  <td>{{ row.company? row.company.name : '' }}</td>\n                  <td>{{ row.receiver? row.receiver.name : '' }}</td>\n                  <td>{{ row.collection }}</td>\n                  <td>{{ row.shiping_price }}</td>\n                  <td>{{ row.net_price }}</td>\n                  <td>{{ row.status? row.status.name : '' }}</td>\n                  <td>\n                    <mat-checkbox\n                    *ngIf=\"row.status.code == '2'\"\n                      (change)=\"collect(row)\"\n                      [checked]=\"row.status.code == '7'\" ></mat-checkbox>\n\n                    <mat-checkbox\n                      (change)=\"close(row)\"\n                      *ngIf=\"row.status.code == '4' || row.status.code == '3'\"\n                      [checked]=\"row.status.code == '5'\" ></mat-checkbox>\n                      <span *ngIf=\"row.status.code == '4' || row.status.code == '3'\" >\n                        {{ \"close\" | trans }}\n                      </span>\n                  </td>\n                  <td class=\"hidden\" >\n                    <input class=\"w3-input app-form\" type=\"text\" [(ngModel)]=\"row.notes\" >\n                  </td>\n                </tr>\n              </ng-container>\n            </table>\n          </div>\n          <br>\n          <button\n            (click)=\"save()\"\n            *ngIf=\"showSaveBtn\"\n            [disabled]=\"isSubmit\"\n            mat-raised-button class=\"w3-indigo\" >\n            <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n            <span *ngIf=\"!isSubmit\" >{{ \"save\" | trans }}</span>\n          </button>\n        </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci1zaGVldC91cGRhdGUtYWNjb3VudGluZy1jb3VyaWVyLXNoZWV0L3VwZGF0ZS1hY2NvdW50aW5nLWNvdXJpZXItc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: UpdateAccountingCourierSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAccountingCourierSheetComponent", function() { return UpdateAccountingCourierSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");









var UpdateAccountingCourierSheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpdateAccountingCourierSheetComponent, _super);
    //availableCodes = ['1', '2', '3', '4'];
    function UpdateAccountingCourierSheetComponent(service, router, route) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.route = route;
        _this.baseApiUrl = "courier-sheets";
        _this.status = [];
        _this.filter = {};
        _this.collectedStatus = {};
        _this.closedStatus = {};
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.showSaveBtn = false;
        _this.title = "collect courier sheet";
        return _this;
    }
    UpdateAccountingCourierSheetComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'courier sheets', url: '/courier-sheet' },
            { name: this.title, url: '#', active: true },
        ];
    };
    UpdateAccountingCourierSheetComponent.prototype.getAction = function (res) {
        var _this = this;
        if (res.length <= 0) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter valid courier sheet'));
        }
        this.resource = res[0];
        res[0].sheet_details.forEach(function (element) {
            _this.selectedAwb.put(element.awb_id, element.awb);
        });
    };
    UpdateAccountingCourierSheetComponent.prototype.loadStatus = function () {
        var _this = this;
        this.service.get('status').subscribe(function (res) {
            _this.status = res;
            res.forEach(function (element) {
                if (element.code == '7')
                    _this.collectedStatus = element;
                if (element.code == '5')
                    _this.closedStatus = element;
            });
        });
    };
    UpdateAccountingCourierSheetComponent.prototype.changeStatus = function () {
        this.showSaveBtn = true;
    };
    UpdateAccountingCourierSheetComponent.prototype.loadCourierSheet = function () {
        this.get(true);
    };
    UpdateAccountingCourierSheetComponent.prototype.ngOnInit = function () {
        this.loadStatus();
        this.initBreadCrumb();
    };
    UpdateAccountingCourierSheetComponent.prototype.filterAwb = function (awb) {
        return awb.status.code == '2' || awb.status.code == '3' || awb.status.code == '4' ? true : false;
    };
    UpdateAccountingCourierSheetComponent.prototype.collect = function (awb) {
        if (!this.collectedStatus.id)
            src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, window.location.pathname);
        // console.log(this.collectedStatus);
        awb.status_id = this.collectedStatus.id;
        this.changeStatus();
    };
    UpdateAccountingCourierSheetComponent.prototype.close = function (awb) {
        if (!this.closedStatus.id)
            src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, window.location.pathname);
        // console.log(this.closedStatus);
        awb.status_id = this.closedStatus.id;
        this.changeStatus();
    };
    UpdateAccountingCourierSheetComponent.prototype.finish = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(false);
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('done'));
        this.isSubmit = false;
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].refreshComponent(this.route, '/courier-sheet');
    };
    UpdateAccountingCourierSheetComponent.prototype.validate = function () {
        return this.resource.id ? true : false;
    };
    UpdateAccountingCourierSheetComponent.prototype.save = function () {
        var _this = this;
        // console.log(this.resource);
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('enter valid courier sheet'));
        }
        this.isSubmit = true;
        var counter = 1;
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].loader(true);
        var self = this;
        this.selectedAwb.getAll().forEach(function (element) {
            var data = {
                status_id: element.status_id
            };
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].addToQueue({
                observer: _this.service.store('awbs/status/' + element.id, data),
                action: function (res) { }
            });
            counter++;
        });
        // fire requester
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_7__["Request"].fire(function () {
            // console.log('finished ...............');
            self.finish();
        });
    };
    UpdateAccountingCourierSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-accounting-courier-sheet',
            template: __webpack_require__(/*! ./update-accounting-courier-sheet.component.html */ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.html"),
            styles: [__webpack_require__(/*! ./update-accounting-courier-sheet.component.scss */ "./src/app/admin/components/courier-sheet/update-accounting-courier-sheet/update-accounting-courier-sheet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateAccountingCourierSheetComponent);
    return UpdateAccountingCourierSheetComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_5__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-12\">\n              <label>{{ \"courier sheet code\" | trans }} *</label>\n              <input\n              type=\"number\" class=\"form-control input-sm w3-round\"\n              (change)=\"loadCourierSheet()\"\n              [(ngModel)]=\"filter.id\" >\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"sheet awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"\">\n            <label for=\"\">{{ \"change status for awbs\" | trans }}</label>\n            <br>\n            <select class=\"form-control\"\n                (change)=\"changeAllStatus()\"\n                [(ngModel)]=\"generalStatus\" >\n                <ng-container *ngFor=\"let item of status\"  >\n                  <option [value]=\"item.id\">{{ item.name }}</option>\n                </ng-container>\n            </select>\n          </div>\n          <br>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tr>\n                <th>#</th>\n                <th>{{ \"code\" | trans }}</th>\n                <th>{{ \"date\" | trans }}</th>\n                <th>{{ \"company\" | trans }}</th>\n                <th>{{ \"department\" | trans }}</th>\n                <th>{{ \"branch\" | trans }}</th>\n                <th>{{ \"receiver\" | trans }}</th>\n                <th>{{ \"payment type\" | trans }}</th>\n                <th>{{ \"service\" | trans }}</th>\n                <th>{{ \"city\" | trans }}</th>\n                <th>{{ \"area\" | trans }}</th>\n                <th>{{ \"status\" | trans }}</th>\n                <th>{{ \"receiver_name\" | trans }}</th>\n                <th>{{ \"receiver_title\" | trans }}</th>\n                <th>{{ \"collected value\" | trans }}</th>\n                <th class=\"hidden\" >{{ \"notes\" | trans }}</th>\n              </tr>\n\n              <tr *ngIf=\"loading\" >\n                <td colspan=\"13\" class=\"w3-center\" >\n                  <i class=\"fa fa-spin fa-spinner w3-text-indigo\"></i>\n                </td>\n              </tr>\n\n              <ng-container *ngFor=\"let row of selectedAwb.getAll() index as i\">\n                <tr *ngIf=\"filterAwb(row)\" >\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ row.code }}</td>\n                  <td>{{ row.date }}</td>\n                  <td>{{ row.company? row.company.name : '' }}</td>\n                  <td>{{ row.department? row.department.name : '' }}</td>\n                  <td>{{ row.branch? row.branch.name : '' }}</td>\n                  <td>{{ row.receiver? row.receiver.name : '' }}</td>\n                  <td>{{ row.payment_type? row.payment_type.name : '' }}</td>\n                  <td>{{ row.service? row.service.name : '' }}</td>\n                  <td>{{ row.city? row.city.name : '' }}</td>\n                  <td>{{ row.area? row.area.name : '' }}</td>\n                  <td>\n                    <select class=\"form-control\"\n                    (change)=\"changeStatus()\"\n                    [(ngModel)]=\"row.status_id\" >\n                      <ng-container *ngFor=\"let item of status\"  >\n                        <option\n                          [value]=\"item.id\">{{ item.name }}</option>\n                      </ng-container>\n                    </select>\n                  </td>\n                  <td >\n                    <input\n                    *ngIf=\"row.status_id == deliverdStatus.id\"\n                    class=\"form-control\"\n                    type=\"text\" [(ngModel)]=\"row.receiver_name\" >\n                  </td>\n                  <td >\n                    <input\n                    *ngIf=\"row.status_id == deliverdStatus.id\"\n                    class=\"form-control\"\n                    type=\"text\" [(ngModel)]=\"row.receiver_title\" >\n                  </td>\n                  <td>\n                    <input\n                    class=\"form-control\"\n                    type=\"text\" [(ngModel)]=\"row.collection\" >\n                  </td>\n                  <td class=\"hidden\" >\n                    <input class=\"w3-input app-form\" type=\"text\" [(ngModel)]=\"row.notes\" >\n                  </td>\n                </tr>\n              </ng-container>\n            </table>\n          </div>\n          <br>\n          <button\n            (click)=\"save()\"\n            *ngIf=\"showSaveBtn\"\n            [disabled]=\"isSubmit\"\n            mat-raised-button class=\"w3-indigo\" >\n            <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n            <span *ngIf=\"!isSubmit\" >{{ \"save\" | trans }}</span>\n          </button>\n        </div>\n    </div>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci1zaGVldC91cGRhdGUtY291cmllci1zaGVldC91cGRhdGUtY291cmllci1zaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UpdateCourierSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCourierSheetComponent", function() { return UpdateCourierSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../settings/awb-status-code */ "./src/app/settings/awb-status-code.ts");










var UpdateCourierSheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpdateCourierSheetComponent, _super);
    //availableCodes = ['1', '2', '3', '4'];
    function UpdateCourierSheetComponent(service, router, route) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.router = router;
        _this.route = route;
        _this.baseApiUrl = "courier-sheets";
        _this.status = [];
        _this.filter = {};
        _this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        _this.deliverdStatus = {};
        _this.showSaveBtn = false;
        _this.title = "update courier sheet";
        return _this;
    }
    UpdateCourierSheetComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'courier sheets', url: '/courier-sheet' },
            { name: this.title, url: '#', active: true },
        ];
    };
    UpdateCourierSheetComponent.prototype.changeAllStatus = function () {
        var _this = this;
        this.selectedAwb.getAll().forEach(function (element) {
            element.status_id = _this.generalStatus;
        });
        this.changeStatus();
    };
    UpdateCourierSheetComponent.prototype.getAction = function (res) {
        var _this = this;
        if (res.length <= 0) {
            return _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans('enter valid courier sheet'));
        }
        this.resource = res[0];
        res[0].sheet_details.forEach(function (element) {
            _this.selectedAwb.put(element.awb_id, element.awb);
        });
    };
    UpdateCourierSheetComponent.prototype.loadStatus = function () {
        var _this = this;
        this.service.get('status').subscribe(function (res) {
            _this.status = res.filter(function (element) {
                if (element.is_final == 1)
                    return element;
            });
            res.forEach(function (element) {
                if (element.code == _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_9__["AwbStatusCode"].DELIVERED) {
                    _this.deliverdStatus = element;
                }
            });
        });
    };
    UpdateCourierSheetComponent.prototype.changeStatus = function () {
        this.showSaveBtn = true;
    };
    UpdateCourierSheetComponent.prototype.loadCourierSheet = function () {
        this.get(true);
    };
    UpdateCourierSheetComponent.prototype.ngOnInit = function () {
        this.loadStatus();
        this.initBreadCrumb();
    };
    UpdateCourierSheetComponent.prototype.filterAwb = function (awb) {
        if (!awb.status)
            return false;
        return awb.status.code != '5' && awb.status.code != '8' ? true : false;
    };
    UpdateCourierSheetComponent.prototype.finish = function () {
        _shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].loader(false);
        _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(_shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans('done'));
        this.isSubmit = false;
        _shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].refreshComponent(this.route, '/courier-sheet');
    };
    UpdateCourierSheetComponent.prototype.validate = function () {
        return this.resource.id ? true : false;
    };
    UpdateCourierSheetComponent.prototype.save = function () {
        var _this = this;
        // console.log(this.resource);
        if (!this.validate()) {
            return _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].trans('enter valid courier sheet'));
        }
        this.isSubmit = true;
        var counter = 1;
        _shared_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"].loader(true);
        var self = this;
        this.selectedAwb.getAll().forEach(function (element) {
            var data = {
                status_id: element.status_id,
                receiver_name: element.receiver_name,
                receiver_title: element.receiver_title,
                collection: element.collection
            };
            src_app_shared_request__WEBPACK_IMPORTED_MODULE_8__["Request"].addToQueue({
                observer: _this.service.store('awbs/status/' + element.id, data),
                action: function (res) { }
            });
            counter++;
        });
        // fire requester
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_8__["Request"].fire(function () {
            // console.log('finished ...............');
            self.finish();
        });
    };
    UpdateCourierSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-courier-sheet',
            template: __webpack_require__(/*! ./update-courier-sheet.component.html */ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.html"),
            styles: [__webpack_require__(/*! ./update-courier-sheet.component.scss */ "./src/app/admin/components/courier-sheet/update-courier-sheet/update-courier-sheet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateCourierSheetComponent);
    return UpdateCourierSheetComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_4__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier/courier-form/courier-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/courier/courier-form/courier-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"courierModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light- w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center w3-xlarge\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit courier\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add courier\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 text-center\" style=\"padding: 5px\" >\n\n            <img\n            src=\"{{ resource.photo_url }}\" alt=\"\"\n            (click)=\"$(input).click()\"\n            style=\"width: 100px;height: 100px;margin: auto;cursor: pointer;\" class=\"w3-circle\" >\n            <br>\n            <input type=\"file\"\n            #input\n            (change)=\"loadFile($event, 'photo', resource)\"\n            class=\"form-control input-sm hidden\"  [(ngModel)]=\"resource.photo\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"name\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"address\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"phone\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"national_id\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.national_id\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"email\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"company\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.company_id\"  >\n              <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"branch\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.branch_id\"  >\n              <ng-container *ngFor=\"let item of branches\">\n                <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"department\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.department_id\"  >\n              <ng-container *ngFor=\"let item of departments\">\n                <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"insurance_num\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.insurance_num\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"work_area\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.work_area\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"salary\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.salary\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"notes\" | trans }}</label>\n            <textarea  class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" ></textarea>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"active\" | trans }}</label>\n            <br>\n            <mat-slide-toggle\n            [(ngModel)]=\"resource.active\"\n            ></mat-slide-toggle>\n          </div>\n\n        </div>\n        <table class=\"table\">\n\n\n        </table>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource, true)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/courier/courier-form/courier-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/courier/courier-form/courier-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci9jb3VyaWVyLWZvcm0vY291cmllci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/courier/courier-form/courier-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/courier/courier-form/courier-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CourierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierFormComponent", function() { return CourierFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");





var CourierFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierFormComponent, _super);
    function CourierFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add courier";
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "couriers";
        _this.displayError = true;
        if (_this.isUpdate)
            _this.title = "update courier";
        _this.requiredFields = [
            'name', 'address', 'phone', 'company_id', 'branch_id', 'department_id', 'national_id'
        ];
        return _this;
    }
    CourierFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'couriers', url: '/courier' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierFormComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches())
            this.branches = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches();
        else
            this.service.get("branches").subscribe(function (res) {
                _this.branches = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].departments())
            this.departments = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].departments();
        else
            this.service.get("departments").subscribe(function (res) {
                _this.departments = res;
            });
    };
    CourierFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourierFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourierFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourierFormComponent.prototype, "action", void 0);
    CourierFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-form',
            template: __webpack_require__(/*! ./courier-form.component.html */ "./src/app/admin/components/courier/courier-form/courier-form.component.html"),
            styles: [__webpack_require__(/*! ./courier-form.component.scss */ "./src/app/admin/components/courier/courier-form/courier-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], CourierFormComponent);
    return CourierFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/courier/courier.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/courier/courier.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get(true)\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with branch' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.branch_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of branches\">\n          <option *ngIf=\"item.company_id == filter.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with department' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.department_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of departments\">\n          <option *ngIf=\"item.company_id == filter.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"this\" ></app-table>\n\n</div>\n\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n<app-courier-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" ></app-courier-form>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/admin/components/courier/courier.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/courier/courier.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY291cmllci9jb3VyaWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/courier/courier.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/courier/courier.component.ts ***!
  \***************************************************************/
/*! exports provided: CourierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierComponent", function() { return CourierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var CourierComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourierComponent, _super);
    function CourierComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "couriers";
        _this.companies = [];
        _this.branches = [];
        _this.departments = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('courier_remove');
        //
        _this.baseApiUrl = "couriers";
        _this.displayImport = true;
        return _this;
    }
    CourierComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'photo_url', type: 'image' },
            { name: 'name' },
            { name: 'address' },
            { name: 'phone' },
            { name: 'email' },
            { name: 'company', object: true, data: 'name' },
            { name: 'branch', object: true, data: 'name' },
            { name: 'department', object: true, data: 'name' },
            { name: 'active', type: 'checkbox' },
            { name: 'notes' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    CourierComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches())
            this.branches = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].branches();
        else
            this.service.get("branches").subscribe(function (res) {
                _this.branches = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments())
            this.departments = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].departments();
        else
            this.service.get("departments").subscribe(function (res) {
                _this.departments = res;
            });
    };
    CourierComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.loadSettings();
        this.initBreadCrumb();
        this.get(true);
    };
    CourierComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1, photo_url: "/assets/img/avatar.png" };
        this.$('#courierModal').modal('show');
    };
    CourierComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#courierModal').modal('show');
    };
    CourierComponent.prototype.show = function (item) {
        this.edit(item);
    };
    CourierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier',
            template: __webpack_require__(/*! ./courier.component.html */ "./src/app/admin/components/courier/courier.component.html"),
            styles: [__webpack_require__(/*! ./courier.component.scss */ "./src/app/admin/components/courier/courier.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], CourierComponent);
    return CourierComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-display-container\"\n*ngIf=\"canShow\" >\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-sm-4 col-xs-6\" *ngFor=\"let item of stepers\" >\n      <!-- small box -->\n      <div class=\"small-box {{ colors[item] }} material-shadow\">\n        <div class=\"inner\">\n          <div class=\"w3-xxlarge\" >\n            <b>{{ counts[item] }}</b>\n          </div>\n\n          <div class=\"w3-xxlarge\" >\n            <span *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\" ></span>\n          </div>\n\n          <p class=\"w3-large text-capitalize\" >{{ (item + \" Awbs count\") | trans }}</p>\n        </div>\n        <div class=\"icon w3-padding\">\n          <i class=\"fa fa-truck w3-jumbo\"></i>\n        </div>\n        <a href=\"#\" routerLink=\"/awb\" [queryParams]=\"{steper: item}\" class=\"small-box-footer\">{{ \"more info\" }} <i class=\"fa fa-arrow-circle-right\"></i></a>\n      </div>\n    </div>\n\n\n  </div>\n  <br>\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-6\">\n      <div class=\"box box-success\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">{{ \"Awb Status Count\" | trans }}</h3>\n\n          <div class=\"box-tools pull-right\">\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n          </div>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"chart\">\n            <google-chart\n            [title]=\"awbStatusChart.title\"\n            [type]=\"awbStatusChart.type\"\n            [data]=\"awbStatusChart.data\"\n            [columnNames]=\"awbStatusChart.columnNames\"\n            [options]=\"awbStatusChart.options\">\n            </google-chart>\n          </div>\n        </div>\n        <!-- /.box-body -->\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6\">\n      <div class=\"box box-success\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">{{ \"Awb Collection\" | trans }}</h3>\n\n          <div class=\"box-tools pull-right\">\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n          </div>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"chart\">\n            <google-chart\n            [title]=\"awbCollectionChart.title\"\n            [type]=\"awbCollectionChart.type\"\n            [data]=\"awbCollectionChart.data\"\n            [columnNames]=\"awbCollectionChart.columnNames\"\n            [options]=\"awbCollectionChart.options\">\n            </google-chart>\n          </div>\n        </div>\n        <!-- /.box-body -->\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n\n<div class=\"w3-center w3-padding\"\n*ngIf=\"!canShow\"  >\n  <img src=\"/assets/img/h3.jpg\"  alt=\"\" style=\"width: 100%;margin: auto;border-radius: 5px;\" >\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        var _this = this;
        this.service = service;
        this.resource = {};
        this.doc = document;
        this.loading = false;
        this.awbStatusChart = {};
        this.awbCollectionChart = {};
        this.counts = {};
        this.stepers = ['in_company', 'processing', 'hold', 'delivered'];
        this.helper = src_app_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"];
        this.colors = {};
        this.canShow = false;
        this.user = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user();
        this.initAwbCollectionChart([]);
        this.initAwbStatusChart([]);
        this.stepers.forEach(function (element) {
            _this.colors[element] = src_app_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].randColor();
        });
        // console.log("colors ", this.colors);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //
        if (this.user.company) {
            if (this.user.company.show_dashboard == 1)
                this.canShow = true;
        }
        this.loadDashboard();
    };
    HomeComponent.prototype.objectToArray = function (object) {
        var array = [];
        object.forEach(function (element) {
            var row = [];
            Object.keys(element).forEach(function (key) {
                row.push(element[key]);
            });
            array.push(row);
        });
        return array;
    };
    HomeComponent.prototype.initAwbStatusChart = function (data) {
        this.awbStatusChart = {
            columnNames: ['status', 'count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 350,
                legend: { position: "top" },
            }
        };
    };
    HomeComponent.prototype.initAwbCollectionChart = function (data) {
        this.awbCollectionChart = {
            columnNames: ['awb code', 'collection'],
            type: 'ColumnChart',
            data: data,
            options: {
                width: 600,
                height: 350,
                legend: { position: "top" },
            }
        };
    };
    HomeComponent.prototype.getCollectionData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.code, element.collection]);
        });
        return data;
    };
    HomeComponent.prototype.loadDashboard = function () {
        var _this = this;
        // start loading
        this.loading = true;
        this.service.get("dashboard").subscribe(function (res) {
            _this.resource = res;
            _this.counts = res.counts;
            // load all charts
            _this.initAwbStatusChart(_this.objectToArray(res.awb_status_chart));
            _this.initAwbCollectionChart(_this.getCollectionData(res.awb_collection_chart));
            // hidden loading
            _this.loading = false;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/admin/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/admin/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"mailboxModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light- w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center w3-xlarge\">\n          <span   >{{ \"Send Email\" | trans }}</span>\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"name\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"email\" | trans }} *</label>\n            <input type=\"email\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"company\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.company\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"phone\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"website\" | trans }} *</label>\n            <input type=\"url\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.website\" >\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"message\" | trans }} *</label>\n            <textarea class=\"form-control\"  [(ngModel)]=\"resource.message\" ></textarea>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource, true)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbWFpbGJveC9tYWlsYm94LWZvcm0vbWFpbGJveC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MailboxFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxFormComponent", function() { return MailboxFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");




var MailboxFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MailboxFormComponent, _super);
    function MailboxFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "Send Mail";
        _this.companies = [];
        _this.stores = [];
        _this.expenseTypes = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "mailboxs";
        _this.displayError = true;
        _this.requiredFields = [
            'name', 'email', 'phone', 'company', 'message', 'website'
        ];
        return _this;
    }
    MailboxFormComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.get();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MailboxFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MailboxFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MailboxFormComponent.prototype, "action", void 0);
    MailboxFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailbox-form',
            template: __webpack_require__(/*! ./mailbox-form.component.html */ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.html"),
            styles: [__webpack_require__(/*! ./mailbox-form.component.scss */ "./src/app/admin/components/mailbox/mailbox-form/mailbox-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], MailboxFormComponent);
    return MailboxFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox/mailbox.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox/mailbox.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <a (click)=\"create()\" class=\"btn btn-primary btn-block margin-bottom material-shadow\" >{{ \"Compose\" | trans }}</a>\n\n    <div class=\"box box-solid\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">{{ \"Folders\" | trans }}</h3>\n\n        <div class=\"box-tools\">\n          <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"box-body no-padding\">\n        <ul class=\"nav nav-pills nav-stacked\">\n          <li class=\"active\"  (click)=\"inbox()\"><a  ><i class=\"fa fa-inbox\"></i> {{ \"Inbox\" | trans }}\n            <span class=\"label label-primary pull-right\">{{ filter.type == 'inbox'? data.length : 0 }}</span></a></li>\n          <li (click)=\"sent()\" ><a ><i class=\"fa fa-envelope-o\"></i> {{ \"Sent\" | trans }}</a></li>\n          <li (click)=\"trash()\"><a ><i class=\"fa fa-trash-o\"></i> {{ \"Trash\" | trans }}</a></li>\n        </ul>\n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /. box -->\n    <div class=\"box box-solid hidden\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Labels</h3>\n\n        <div class=\"box-tools\">\n          <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"box-body no-padding\">\n        <ul class=\"nav nav-pills nav-stacked\">\n          <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> Important</a></li>\n          <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> Promotions</a></li>\n          <li><a href=\"#\"><i class=\"fa fa-circle-o text-light-blue\"></i> Social</a></li>\n        </ul>\n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\">\n    <div class=\"box box-primary\" class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Inbox</h3>\n\n        <div class=\"box-tools pull-right\">\n          <div class=\"has-feedback\">\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"filter.search\" (change)=\"get(true)\" placeholder=\"Search Mail\">\n            <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n          </div>\n        </div>\n        <!-- /.box-tools -->\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body no-padding\">\n        <div class=\"mailbox-controls\">\n          <div class=\"row filter\">\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label>{{ 'search' | trans }}</label>\n              <br>\n              <input type=\"text\" [(ngModel)]=\"filter.search\" (change)=\"get(true)\" class=\"form-control w3-round input-sm\"\n                placeholder=\"{{ 'search' | trans }}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive mailbox-messages\" >\n          <app-table [crud]=\"this\"></app-table>\n          <!-- /.table -->\n        </div>\n        <!-- /.mail-box-messages -->\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer no-padding\">\n        <div class=\"mailbox-controls\">\n\n        </div>\n      </div>\n    </div>\n    <!-- /. box -->\n  </div>\n  <!-- /.col -->\n</div>\n\n\n<app-mailbox-form [action]=\"reload\" [resource]=\"resource\" ></app-mailbox-form>\n"

/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox/mailbox.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox/mailbox.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvbWFpbGJveC9tYWlsYm94L21haWxib3guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/mailbox/mailbox/mailbox.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/mailbox/mailbox/mailbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: MailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxComponent", function() { return MailboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var MailboxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MailboxComponent, _super);
    function MailboxComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.title = "mailbox";
        //
        _this.baseApiUrl = "mailboxs";
        return _this;
    }
    MailboxComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'name' },
            { name: 'company' },
            { name: 'tel' },
            { name: 'website' },
            { name: 'email' },
            { name: 'monthly_order' },
            { name: 'industry' },
            { name: 'message' },
            { name: 'remove', permission: this.canRemove, action: function (item, i) { _this.destroy(item, i); }, class: "fa fa-trash w3-text-red" }
        ];
    };
    MailboxComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    MailboxComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.initBreadCrumb();
        this.filter.type = "inbox";
        this.get(true);
    };
    MailboxComponent.prototype.create = function () {
        this.resource = {
            company: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company.name : '',
            website: 'http://ufs.pixiagency.com/',
            phone: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company.phone : '',
            email: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().company.email : '',
            name: src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user() ? src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].user().name : ''
        };
        this.$('#mailboxModal').modal('show');
    };
    MailboxComponent.prototype.inbox = function () {
        this.filter.type = "inbox";
        this.get(true);
    };
    MailboxComponent.prototype.sent = function () {
        this.filter.type = "sent";
        this.get(true);
    };
    MailboxComponent.prototype.trash = function () {
        this.filter.type = "trash";
        this.get(true);
    };
    MailboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mailbox',
            template: __webpack_require__(/*! ./mailbox.component.html */ "./src/app/admin/components/mailbox/mailbox/mailbox.component.html"),
            styles: [__webpack_require__(/*! ./mailbox.component.scss */ "./src/app/admin/components/mailbox/mailbox/mailbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], MailboxComponent);
    return MailboxComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-form/pickup-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"pickupModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light- w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center w3-xxlarge\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit pickup\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add pickup\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body \">\n        <!--\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 col-md-6\">\n            <mat-form-field appearance=\"outline\" class=\"w3-block\">\n              <mat-label>{{ \"date\" | trans }} *</mat-label>\n              <input type=\"date\" matInput   [(ngModel)]=\"resource.date\" >\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <mat-form-field appearance=\"outline\" class=\"w3-block\">\n              <mat-label>{{ \"time_from\" | trans }} *</mat-label>\n              <input type=\"time\" matInput [(ngModel)]=\"resource.time_from\" >\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <mat-form-field appearance=\"outline\" class=\"w3-block\">\n              <mat-label>{{ \"time_to\" | trans }} *</mat-label>\n              <input type=\"time\" matInput  [(ngModel)]=\"resource.time_to\" >\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>{{ \"status\" | trans }} *</mat-label>\n              <mat-select  [(ngModel)]=\"resource.status_id\" >\n                <mat-option *ngFor=\"let item of status\" [value]=\"item.id\">\n                  {{ item.name }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <mat-form-field appearance=\"outline\" class=\"w3-block\" >\n              <mat-label>Outline form field</mat-label>\n              <select matNativeControl required>\n                <option value=\"volvo\">Volvo</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"mercedes\">Mercedes</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n              <input matInput placeholder=\"Placeholder\">\n              <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n              <mat-hint>Hint</mat-hint>\n            </mat-form-field>\n          </div>\n\n        </div>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Outline form field</mat-label>\n          <input matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n          <mat-hint>Hint</mat-hint>\n        </mat-form-field>-->\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"date\" | trans }} *</label>\n            <input type=\"date\" class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.date\" >\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"status\" | trans }} *</label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.status_id\"  >\n              <ng-container *ngFor=\"let item of status\">\n                <option *ngIf=\"item.type == 'pickup'\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"time_from\" | trans }}  </label>\n            <input type=\"time\" class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.time_from\" >\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"Pickup Time Ready\" | trans }}  </label>\n            <input type=\"time\" class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.time_to\" >\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"company\" | trans }} *</label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.company_id\"  >\n              <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"courier\" | trans }} </label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.courier_id\"  >\n              <ng-container *ngFor=\"let item of couriers\">\n                <option value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"shipment type\" | trans }}</label>\n            <select class=\"form-control input-sm w3-round\" [(ngModel)]=\"resource.shipment_type\"  >\n              <option *ngFor=\"let item of types\" value=\"{{ item }}\">{{ item }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"shipment number\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.shipment_number\" >\n          </div>\n\n          <div class=\"col-lg-6 w3-padding\">\n            <label>{{ \"Trans Type\" | trans }}</label>\n            <select class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.trans_type_id\"  >\n              <option *ngFor=\"let item of transTypes\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-12 w3-padding\">\n            <label>{{ \"notes\" | trans }} *</label>\n            <textarea  class=\"form-control input-sm w3-round\"  [(ngModel)]=\"resource.notes\" ></textarea>\n          </div>\n\n        </div>\n        <br>\n\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-form/pickup-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcGlja3VwL3BpY2t1cC1mb3JtL3BpY2t1cC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-form/pickup-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: PickupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupFormComponent", function() { return PickupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");





var PickupFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PickupFormComponent, _super);
    function PickupFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add pickup";
        _this.companies = [];
        _this.status = [];
        _this.couriers = [];
        _this.types = ['domestic', 'international'];
        _this.transTypes = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "pickups";
        _this.displayError = true;
        if (_this.isUpdate)
            _this.title = "update pickup";
        _this.requiredFields = [
            'date', 'company_id', 'status_id'
        ];
        return _this;
    }
    PickupFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'pickups', url: '/pickup' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PickupFormComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].transTypes())
            this.transTypes = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].transTypes();
        else
            this.service.get('trans-types').subscribe(function (res) {
                _this.transTypes = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].status())
            this.status = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].status();
        else
            this.service.get("status").subscribe(function (res) {
                _this.status = res;
            });
        this.service.get("couriers").subscribe(function (res) {
            _this.couriers = res;
        });
    };
    PickupFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PickupFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PickupFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PickupFormComponent.prototype, "action", void 0);
    PickupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pickup-form',
            template: __webpack_require__(/*! ./pickup-form.component.html */ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.html"),
            styles: [__webpack_require__(/*! ./pickup-form.component.scss */ "./src/app/admin/components/pickup/pickup-form/pickup-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], PickupFormComponent);
    return PickupFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-track/pickup-track.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"trackingModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg w3-block\" role=\"document\">\n    <div class=\"modal-content light-gray w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title w3-center w3-xlarge w3-text-indigo\">\n          <span   >{{ \"tracking Pickup\" | trans }}</span> {{ resource.code }}\n\n        </h4>\n      </div>\n      <div class=\"w3-block main-background\">\n        <div class=\"track-background row\">\n          <div class=\"col-lg-9 col-md-9\">\n\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\" >\n            <div\n            *ngFor=\"let row of steppers index as i\"\n            class=\"md-step {{ stepperHashTable.has(row) || resource.status_id == delivered.id? 'active editable' : '' }}  \"  >\n              <div class=\"md-step-circle\"><span>{{ i + 1 }}</span></div>\n              <div class=\"md-step-title\">{{ row | trans }}</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <!--\n            <div class=\"md-step active editable\">\n              <div class=\"md-step-circle\"><span>2</span></div>\n              <div class=\"md-step-title\">Shipping</div>\n              <div class=\"md-step-optional\">Optional</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle\"><span>3</span></div>\n              <div class=\"md-step-title\">Payment</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            <div class=\"md-step\">\n              <div class=\"md-step-circle\"><span>4</span></div>\n              <div class=\"md-step-title\">Review</div>\n              <div class=\"md-step-bar-left\"></div>\n              <div class=\"md-step-bar-right\"></div>\n            </div>\n            -->\n          </div>\n          <div class=\"md-stepper-horizontal orange\" style=\"background-color: transparent!important;\"  >\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-circle-o\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Account Name\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <span *ngIf=\"resource.company\" >\n                  {{ resource.company? resource.company.name : '' }}\n                </span>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\" ></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n            <div class=\"md-step active\">\n              <div class=\"md-step-circle w3-xlarge\" style=\"background-color: transparent!important;color: orangered;\" ><span><i class=\"fa fa-map-marker\"></i></span></div>\n              <div class=\"md-step-title\">{{\"Courier\" | trans}}</div>\n              <div class=\"md-step-optional\">\n                <span *ngIf=\"resource.courier\" >\n                  {{ resource.courier? resource.courier.name : '' }}\n                </span>\n              </div>\n              <div class=\"md-step-bar-left\" style=\"border-style: dashed;\"></div>\n              <div class=\"md-step-bar-right\" style=\"border-style: dashed;\"></div>\n            </div>\n          </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-12 col-md-12 text-center\">\n            <div *ngIf=\"canChangepickupstatus\" >\n              <label class=\"w3-xlarge w3-text-indigo\" >{{ \"status\" | trans }} *</label>\n              <select\n              *ngIf=\"!resource.is_final || canChangeOk\"\n              class=\"form-control w3-round app-form\"\n              [(ngModel)]=\"resource.status_id\"  >\n                <ng-container *ngFor=\"let item of status\">\n                  <option *ngIf=\"item.type == 'pickup'\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                </ng-container>\n              </select>\n              <div\n              *ngIf=\"resource.is_final && !canChangeOk\"\n              class=\"alert alert-danger\">\n                <i class=\"fa fa-exclamation-triangle w3-margin-left w3-margin-righ\"  ></i> {{ \"cant change status\" }}\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n        <br>\n\n        <div class=\"table-responsive w3-white text-center\" style=\"height: 200px;\" >\n          <table class=\"table table-bordered text-center\">\n            <tr class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"#\" }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"pickup\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"account name\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"status\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"user\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"date\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"time\" | trans }}</th>\n              <th class=\"w3-dark-gray\"  style=\"background-color: #616161!important;\" >{{ \"remove\" | trans }}</th>\n            </tr>\n\n            <tr *ngFor=\"let row of history index as i\" >\n             <td>{{ i + 1 }}</td>\n             <td>{{ resource.code }}</td>\n             <td>{{ resource.company? resource.company.name : '' }}</td>\n             <td>{{ row.status? row.status.name : '' }}</td>\n             <td>{{ row.user? row.user.name : '' }}</td>\n             <td>{{ row.created_at | date }}</td>\n             <td>{{ row.created_at | date: 'shortTime' }}</td>\n             <td>\n               <button *ngIf=\"canRemoveTrack\" (click)=\"removeRow(row, i)\" class=\"fa fa-trash w3-text-red\"></button>\n             </td>\n            </tr>\n         </table>\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n\n          <button class=\"w3-indigo\"\n          *ngIf=\"canChangepickupstatus\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send()\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span  >{{ \"change status\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-track/pickup-track.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n.md-stepper-horizontal {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);\n}\n.md-stepper-horizontal .md-step {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.md-stepper-horizontal .md-step:hover,\n.md-stepper-horizontal .md-step:active {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.md-stepper-horizontal .md-step:active {\n  border-radius: 15%/75%;\n}\n.md-stepper-horizontal .md-step:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.md-stepper-horizontal .md-step:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.md-stepper-horizontal .md-step:hover .md-step-circle {\n  background-color: #757575;\n}\n.md-stepper-horizontal .md-step:first-child .md-step-bar-left,\n.md-stepper-horizontal .md-step:last-child .md-step-bar-right {\n  display: none;\n}\n.md-stepper-horizontal .md-step .md-step-circle {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  background-color: #999999;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #FFFFFF;\n}\n.md-stepper-horizontal.green .md-step.active .md-step-circle {\n  background-color: #00AE4D;\n}\n.md-stepper-horizontal.orange .md-step.active .md-step-circle {\n  background-color: #F96302;\n}\n.md-stepper-horizontal .md-step.active .md-step-circle {\n  background-color: #2196f3;\n}\n.md-stepper-horizontal .md-step.done .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step.done .md-step-circle *,\n.md-stepper-horizontal .md-step.editable .md-step-circle * {\n  display: none;\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle {\n  transform: scaleX(-1);\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step .md-step-title {\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-title,\n.md-stepper-horizontal .md-step .md-step-optional {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.26);\n}\n.md-stepper-horizontal .md-step.active .md-step-title {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-stepper-horizontal .md-step.active.done .md-step-title,\n.md-stepper-horizontal .md-step.active.editable .md-step-title {\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-optional {\n  font-size: 12px;\n}\n.md-stepper-horizontal .md-step.active .md-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-stepper-horizontal .md-step .md-step-bar-left,\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  position: absolute;\n  top: 36px;\n  height: 1px;\n  border-top: 1px solid #DDDDDD;\n}\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  right: 0;\n  left: 50%;\n  margin-left: 20px;\n}\n.md-stepper-horizontal .md-step .md-step-bar-left {\n  left: 0;\n  right: 50%;\n  margin-right: 20px;\n}\n.track-background {\n  background-image: url(\"/assets/img/customer_service.png\");\n  background-size: auto 100%;\n  background-position: right;\n  background-repeat: no-repeat;\n}\n.main-background {\n  background-image: url(\"/assets/img/main_background.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9waWNrdXAvcGlja3VwLXRyYWNrL3BpY2t1cC10cmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9waWNrdXAvcGlja3VwLXRyYWNrL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xccGlja3VwXFxwaWNrdXAtdHJhY2tcXHBpY2t1cC10cmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0FEQ0Y7QUNFQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7QURDRDtBQ0NBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QURFRDtBQ0FBOztFQUVDLHFDQUFBO0FER0Q7QUNEQTtFQUNDLHNCQUFBO0FESUQ7QUNGQTtFQUNDLHlCQUFBO0VBQ0EsNEJBQUE7QURLRDtBQ0hBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtBRE1EO0FDSkE7RUFDQyx5QkFBQTtBRE9EO0FDTEE7O0VBRUMsYUFBQTtBRFFEO0FDTkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURTRDtBQ1BBO0VBQ0MseUJBQUE7QURVRDtBQ1JBO0VBQ0MseUJBQUE7QURXRDtBQ1RBO0VBQ0MseUJBQUE7QURZRDtBQ1ZBO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURhRDtBQ1hBOztFQUVDLGFBQUE7QURjRDtBQ1pBO0VBSUMscUJBQUE7QURlRDtBQ2JBO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURnQkQ7QUNkQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEaUJEO0FDZkE7O0VBRUMsa0JBQUE7RUFDQSwwQkFBQTtBRGtCRDtBQ2hCQTtFQUNDLGdCQUFBO0VBQ0EsMEJBQUE7QURtQkQ7QUNqQkE7O0VBRUMsZ0JBQUE7QURvQkQ7QUNsQkE7RUFDQyxlQUFBO0FEcUJEO0FDbkJBO0VBQ0MsMEJBQUE7QURzQkQ7QUNwQkE7O0VBRUMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FEdUJEO0FDckJBO0VBQ0MsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRHdCRDtBQ3RCQTtFQUNDLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUR5QkQ7QUNyQkE7RUFDQyx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRHdCRDtBQ3JCQTtFQUNDLHdEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRHdCRCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcGlja3VwL3BpY2t1cC10cmFjay9waWNrdXAtdHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGFibGUtcmVzcG9uc2l2ZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmhvdmVyLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JS83NSU7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkOmFjdGl2ZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3ZlciAubWQtc3RlcC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5ncmVlbiAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUU0RDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbC5vcmFuZ2UgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTYzMDI7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29udGVudDogXCLvgIxcIjtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5kb25lIC5tZC1zdGVwLWNpcmNsZSAqLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGUgKiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5lZGl0YWJsZSAubWQtc3RlcC1jaXJjbGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29udGVudDogXCLvg5FcIjtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZS5kb25lIC5tZC1zdGVwLXRpdGxlLFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUuZWRpdGFibGUgLm1kLXN0ZXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLW9wdGlvbmFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzZweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREREREO1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2N1c3RvbWVyX3NlcnZpY2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYWluLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tYWluX2JhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSIsIlxuLnRhYmxlLXJlc3BvbnNpdmUgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjEhaW1wb3J0YW50O1xufVxuXG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIHtcblx0ZGlzcGxheTp0YWJsZTtcblx0d2lkdGg6MTAwJTtcblx0bWFyZ2luOjAgYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuXHRib3gtc2hhZG93OiAwIDNweCA4cHggLTZweCByZ2JhKDAsMCwwLC41MCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIHtcblx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0cGFkZGluZzoyNHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3Zlcixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDQpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuXHRib3JkZXItcmFkaXVzOiAxNSUgLyA3NSU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQ6YWN0aXZlIHtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3ZlciAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM3NTc1NzU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkIC5tZC1zdGVwLWJhci1yaWdodCB7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtY2lyY2xlIHtcblx0d2lkdGg6MzBweDtcblx0aGVpZ2h0OjMwcHg7XG5cdG1hcmdpbjowIGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OjMwcHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6I0ZGRkZGRjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwuZ3JlZW4gLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IzAwQUU0RDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwub3JhbmdlIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGOTYzMDI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsMTUwLDI0Myk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlOmJlZm9yZSB7XG5cdGZvbnQtZmFtaWx5OidGb250QXdlc29tZSc7XG5cdGZvbnQtd2VpZ2h0OjEwMDtcblx0Y29udGVudDogXCJcXGYwMGNcIjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGUgKixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlICoge1xuXHRkaXNwbGF5Om5vbmU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHQtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHR0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuXHRmb250LWZhbWlseTonRm9udEF3ZXNvbWUnO1xuXHRmb250LXdlaWdodDoxMDA7XG5cdGNvbnRlbnQ6IFwiXFxmMGQxXCI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlIHtcblx0bWFyZ2luLXRvcDoxNnB4O1xuXHRmb250LXNpemU6MTZweDtcblx0Zm9udC13ZWlnaHQ6NjAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOnJnYmEoMCwwLDAsLjI2KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6cmdiYSgwLDAsMCwuODcpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUuZG9uZSAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmVkaXRhYmxlIC5tZC1zdGVwLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6NjAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1vcHRpb25hbCB7XG5cdGZvbnQtc2l6ZToxMnB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtb3B0aW9uYWwge1xuXHRjb2xvcjpyZ2JhKDAsMCwwLC41NCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjM2cHg7XG5cdGhlaWdodDoxcHg7XG5cdGJvcmRlci10b3A6MXB4IHNvbGlkICNEREREREQ7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG5cdHJpZ2h0OjA7XG5cdGxlZnQ6NTAlO1xuXHRtYXJnaW4tbGVmdDoyMHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCB7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6NTAlO1xuXHRtYXJnaW4tcmlnaHQ6MjBweDtcbn1cblxuXG4udHJhY2stYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2N1c3RvbWVyX3NlcnZpY2UucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYWluLWJhY2tncm91bmQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tYWluX2JhY2tncm91bmQuanBnXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup-track/pickup-track.component.ts ***!
  \********************************************************************************/
/*! exports provided: PickupTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupTrackComponent", function() { return PickupTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../settings/awb-status-code */ "./src/app/settings/awb-status-code.ts");









var PickupTrackComponent = /** @class */ (function () {
    function PickupTrackComponent(service) {
        this.service = service;
        this.isSubmit = false;
        this.status = [];
        this.history = [];
        this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.canChangeOk = true;
        this.canChangepickupstatus = true;
        this.canRemoveTrack = false;
        this.steppers = ['in_company', 'processing', 'hold', 'delivered'];
        this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.statusCode = _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_8__["AwbStatusCode"];
        this.delivered = {};
        this.canChangepickupstatus = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('pickup_change_status');
        this.canRemoveTrack = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('pickup_track_remove');
    }
    PickupTrackComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        this.status.forEach(function (element) {
            _this.statusHashTable.put(element.id, element);
            if (element.code == _settings_awb_status_code__WEBPACK_IMPORTED_MODULE_8__["AwbStatusCode"].DELIVERED) {
                _this.delivered = element;
            }
        });
    };
    PickupTrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_7__["Autoloader"].status());
        else
            this.service.get("status").subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    PickupTrackComponent.prototype.ngOnChanges = function () {
        this.history = this.resource.pickup_history;
        this.loadStepper();
        if (this.resource.status)
            this.resource.is_final = this.resource.status.is_final;
    };
    PickupTrackComponent.prototype.loadStepper = function () {
        var _this = this;
        this.stepperHashTable = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (this.history)
            this.history.forEach(function (element) {
                if (element.status.steper)
                    _this.stepperHashTable.put(element.status.steper, element.status.steper);
            });
    };
    PickupTrackComponent.prototype.sendpickupInfo = function () {
        this.service.store("pickups/update/" + this.resource.id, this.resource).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            }
        });
    };
    PickupTrackComponent.prototype.send = function () {
        var _this = this;
        this.isSubmit = true;
        var data = {
            status_id: this.resource.status_id,
            receiver_name: this.resource.receiver_name,
            receiver_title: this.resource.receiver_title
        };
        this.service.store('pickups/status/' + this.resource.id, data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                _this.resource.status = _this.statusHashTable.get(_this.resource.status_id);
                _this.ngOnChanges();
                //
                _this.history = res.data;
                _this.loadStepper();
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            }
            _this.isSubmit = false;
        });
    };
    PickupTrackComponent.prototype.removeRow = function (item, index) {
        var _this = this;
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            self.service.destroy('pickups-history/destroy', item.id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
                    _this.ngOnChanges();
                    _this.history = res.data;
                    _this.loadStepper();
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PickupTrackComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PickupTrackComponent.prototype, "reload", void 0);
    PickupTrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pickup-track',
            template: __webpack_require__(/*! ./pickup-track.component.html */ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.html"),
            styles: [__webpack_require__(/*! ./pickup-track.component.scss */ "./src/app/admin/components/pickup/pickup-track/pickup-track.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], PickupTrackComponent);
    return PickupTrackComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/pickup/pickup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get()\"\n      class=\"app-form w3-round input-sm w3-block\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search with date' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date\"\n      (change)=\"get()\"\n      class=\"app-form w3-round input-sm w3-block\"   >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"app-form w3-round input-sm w3-block\"\n      (change)=\"get()\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with courier' | trans }}</label>\n      <br>\n      <select\n      class=\"app-form w3-round input-sm w3-block\"\n      (change)=\"get()\"\n        [(ngModel)]=\"filter.courier_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of couriers\">\n          <option *ngIf=\"item.company_id == filter.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with status' | trans }}</label>\n      <br>\n      <select\n      class=\"app-form w3-round input-sm w3-block\"\n      (change)=\"get()\"\n        [(ngModel)]=\"filter.status_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container  *ngFor=\"let item of status\">\n          <option *ngIf=\"item.type == 'pickup'\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <app-table [crud]=\"this\" ></app-table>\n</div>\n\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button  mat-fab class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n\n<app-pickup-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"action\" ></app-pickup-form>\n\n<app-pickup-track [resource]=\"selectedResource\" [reload]=\"reload\" ></app-pickup-track>\n"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcGlja3VwL3BpY2t1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/pickup/pickup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/pickup/pickup.component.ts ***!
  \*************************************************************/
/*! exports provided: PickupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupComponent", function() { return PickupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var PickupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PickupComponent, _super);
    function PickupComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "pickups";
        _this.companies = [];
        _this.couriers = [];
        _this.status = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canTrack = false;
        _this.selectedResource = {};
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('pickup_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('pickup_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('pickup_remove');
        _this.canTrack = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('pickup_track');
        //
        _this.baseApiUrl = "pickups";
        _this.action = function () {
            _this.get();
        };
        return _this;
    }
    PickupComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'code', text: 'pickup code' },
            { name: 'date' },
            { name: 'time_from' },
            { name: 'time_to', text: 'pickup time ready' },
            { name: 'company', object: true, data: 'name' },
            { name: 'status', object: true, data: 'name' },
            { name: 'courier', object: true, data: 'name' },
            { name: 'user', object: true, data: 'name' },
            { name: 'trans_type', object: true, data: 'name' },
            { name: 'shipment_number' },
            { name: 'shipment_type' },
            { name: 'notes' },
            { name: 'edit', permission: this.canEdit, action: function (item, i) { _this.edit(item); }, class: "fa fa-edit w3-text-orange" },
            { name: 'tracking', permission: this.canTrack, action: function (item, i) { _this.track(item); }, class: "fa fa-truck w3-text-indigo rotate-180" },
            { name: 'remove', permission: this.canRemove, action: function (item, i) { _this.destroy(item, i); }, class: "fa fa-trash w3-text-red" }
        ];
    };
    PickupComponent.prototype.track = function (item) {
        this.selectedResource = item;
        this.$('#trackingModal').modal('show');
    };
    PickupComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PickupComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].status())
            this.status = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].status();
        else
            this.service.get("status").subscribe(function (res) {
                _this.status = res;
            });
        this.service.get("couriers").subscribe(function (res) {
            _this.couriers = res;
        });
    };
    PickupComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.loadSettings();
        this.initBreadCrumb();
        this.get(true);
    };
    PickupComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { date: new Date().toISOString().substring(0, 10) };
        this.$('#pickupModal').modal('show');
    };
    PickupComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#pickupModal').modal('show');
    };
    PickupComponent.prototype.show = function (item) {
        this.edit(item);
    };
    PickupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pickup',
            template: __webpack_require__(/*! ./pickup.component.html */ "./src/app/admin/components/pickup/pickup.component.html"),
            styles: [__webpack_require__(/*! ./pickup.component.scss */ "./src/app/admin/components/pickup/pickup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], PickupComponent);
    return PickupComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/price-table/price-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/price-table/price-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4 hidden\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      class=\"app-form input-sm w3-block\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      (change)=\"get(true)\"\n      class=\"app-form input-sm w3-block\"\n        [(ngModel)]=\"filter.model_id\" >\n        <option *ngFor=\"let row of companies\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'city_from' | trans }}</label>\n      <br>\n      <select\n      (change)=\"get(true)\"\n      class=\"app-form input-sm w3-block\"\n        [(ngModel)]=\"filter.city_from\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <label>{{ 'city_to' | trans }}</label>\n      <br>\n      <select\n      (change)=\"get(true)\"\n      class=\"app-form input-sm w3-block\"\n        [(ngModel)]=\"filter.city_to\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n      </select>\n    </div>\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n  <div class=\"w3-block w3-padding w3-display-topright\"   >\n    <button\n    style=\"margin: 5px;padding: 7px\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-red\"\n      (click)=\"removeSelected()\"\n      *ngIf=\"canRemove && selectedResources.size() > 0\"  >\n      {{ \"remove selected\" | trans }} <i class=\"fa fa-trash\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"excel()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"excel\" | trans }} <i class=\"fa fa-file-excel-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"pdf()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-orange\"  >\n      {{ \"pdf\" | trans }} <i class=\"fa fa-file-pdf-o\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"print()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-dark-gray\"  >\n      {{ \"print\" | trans }} <i class=\"fa fa-print\"></i>\n    </button>\n\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"import()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-green\"  >\n      {{ \"import from excel\" | trans }} <i class=\"fa fa-upload\"></i>\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"filter.show_offer=0;get(true)\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-cyan\"  >\n      {{ \"reload\" | trans }} <i class=\"fa fa-refresh\"></i>\n    </button>\n\n\n\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"this.create()\"\n    *ngIf=\"canAdd\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-indigo\"   >\n      <i class=\"fa fa-plus\"></i> {{ \"add\" | trans }}\n    </button>\n  </div>\n\n  <div class=\"w3-display-topright w3-padding\">\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"$('#colTable').modal('show')\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-teal\"   >\n      <i class=\"fa fa-filter\"></i> {{ \"toggle cols\" | trans }}\n    </button>\n\n    <button\n    style=\"margin: 5px;padding: 7px\"\n    (click)=\"offers()\"\n      class=\"w3-round w3-button material-shadow btn-sm w3-pink\"  >\n      {{ \"offers\" | trans }} <i class=\"fa fa-trophy\"></i>\n    </button>\n  </div>\n\n  <div class=\"text-center w3-padding\">\n    <b>\n      {{ title | trans }}\n    </b>\n    <br>\n    <br>\n  </div>\n\n  <div class=\"table-responsive\" style=\"height: 350px;\" >\n    <table class=\"excel-table table-bordered text-center text-center\" id=\"printable\" >\n\n      <tr class=\"w3-light-gray\" >\n        <th class=\"w3-padding\" >\n          <mat-checkbox\n            [checked]=\"selectedAllToggle\"\n            (change)=\"selectAll()\"\n          ></mat-checkbox>\n        </th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('id')\" >{{ \"id\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('date_to')\" >{{ \"date_to\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('city_from')\" >{{ \"city_from\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('area_from')\" >{{ \"area_from\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('city_to')\" >{{ \"city_to\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('area_to')\" >{{ \"area_to\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('price')\" >{{ \"price\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('return_price')\" >{{ \"return_price\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('basic_kg')\" >{{ \"basic_kg\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('additional_kg_price')\" >{{ \"additional_kg_price\" | trans }}</th>\n        <th class=\"w3-padding\" *ngIf=\"selectedCols.has('remove')\" >{{ \"remove\"| trans }}</th>\n      </tr>\n      <tr *ngIf=\"loading\"  >\n        <td class=\"w3-text-indigo text-center\" colspan=\"3\" >\n          <i class=\"fa fa-spin fa-spinner\"></i>\n        </td>\n      </tr>\n      <ng-container *ngFor=\"let item of data index as i\" >\n        <tr  *ngIf=\"!loading && search(item)\"\n        class=\"{{ this.selectedResources.has(item.id)? 'w3-pale-red' : '' }}\" >\n          <td>\n            <div class=\"w3-center text-center hidden\" >\n              <mat-slide-toggle\n              [checked]=\"selectedResources.has(item.id)\"\n              (change)=\"toggle(item)\"\n              ></mat-slide-toggle>\n            </div>\n            <mat-checkbox\n            [checked]=\"selectedResources.has(item.id)\"\n            (change)=\"toggle(item)\"></mat-checkbox>\n          </td>\n          <td class=\"{{ item.date_to? 'w3-green' : '' }}\" *ngIf=\"selectedCols.has('id')\"  >\n            <span  class=\"{{ item.date_to? 'w3-badge w3-white' : '' }}\" >{{ item.id }}</span>\n          </td>\n          <td  *ngIf=\"selectedCols.has('date_to')\"  >\n            <input\n            type=\"date\"\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.date_to\" >\n            <span style=\"display: none;\" >{{ item.date_to }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('city_from')\" >\n            <select\n              style=\"min-width: 200px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.city_from\" >\n              <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n            <span style=\"display: none;\" >{{ item.city_from_object? item.city_from_object.name : '' }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('area_from')\"  >\n            <select\n              style=\"min-width: 200px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.area_from\" >\n              <option value=\"\">{{ \"all\" | trans }}</option>\n              <ng-container *ngFor=\"let row of areas\" >\n                <option *ngIf=\"row.city_id == item.city_from\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n            <span style=\"display: none;\" >{{ item.area_from_object? item.area_from_object.name : '' }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('city_to')\" >\n            <select\n              style=\"min-width: 200px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.city_to\" >\n              <option *ngFor=\"let row of cities\" value=\"{{ row.id }}\">{{ row.name }}</option>\n            </select>\n            <span style=\"display: none;\" >{{ item.city_to_object? item.city_to_object.name : '' }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('area_to')\"  >\n            <select\n              style=\"min-width: 200px;\"\n              class=\"w3-block w3-border-0 text-center\"\n              (change)=\"send(item)\"\n              [disabled]=\"item.id && !canEdit || !item.id && !canAdd\"\n              [(ngModel)]=\"item.area_to\" >\n              <option value=\"\">{{ \"all\" | trans }}</option>\n              <ng-container *ngFor=\"let row of areas\" >\n                <option *ngIf=\"row.city_id == item.city_to\" value=\"{{ row.id }}\">{{ row.name }}</option>\n              </ng-container>\n            </select>\n            <span style=\"display: none;\" >{{ item.area_to_object? item.area_to_object.name : '' }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('price')\" >\n            <input\n            type=\"number\"\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.price\" >\n            <span style=\"display: none;\" >{{ item.price }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('return_price')\" >\n            <input\n            type=\"number\"\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.return_price\" >\n            <span style=\"display: none;\" >{{ item.return_price }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('basic_kg')\" >\n            <input\n            type=\"number\"\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.basic_kg\" >\n            <span style=\"display: none;\" >{{ item.basic_kg }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('additional_kg_price')\" >\n            <input\n            type=\"number\"\n            style=\"min-width: 200px;\"\n            class=\"w3-block w3-border-0 text-center\"\n            (change)=\"send(item)\"\n            [readOnly]=\"item.id && !canEdit || !item.id && !canAdd\"\n            [(ngModel)]=\"item.additional_kg_price\" >\n            <span style=\"display: none;\" >{{ item.additional_kg_price }}</span>\n          </td>\n          <td *ngIf=\"selectedCols.has('remove')\" >\n            <button\n            class=\"fa fa-trash w3-button\"\n            *ngIf=\"canRemove && item.id\"  (click)=\"destroy(item, i)\" ></button>\n          </td>\n        </tr>\n      </ng-container>\n\n    </table>\n  </div>\n</div>\n<br>\n<button mat-raised-button  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n  <i class=\"fa fa-plus\"></i>\n</button>\n\n</div>\n\n\n<app-toggle-col [crud]=\"self\" [selectedCols]=\"selectedCols\" ></app-toggle-col>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/admin/components/price-table/price-table.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/price-table/price-table.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #f1f1f1 !important;\n}\n\n.more-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcmljZS10YWJsZS9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHByaWNlLXRhYmxlXFxwcmljZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcmljZS10YWJsZS9wcmljZS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJpY2UtdGFibGUvcHJpY2UtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxIWltcG9ydGFudDtcbn1cblxuLm1vcmUtb3B0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIi50YWJsZS1yZXNwb25zaXZlIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59XG5cbi5tb3JlLW9wdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/price-table/price-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/price-table/price-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: PriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTableComponent", function() { return PriceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");







var PriceTableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PriceTableComponent, _super);
    function PriceTableComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.countries = [];
        _this.cities = [];
        _this.areas = [];
        _this.companies = [];
        _this.title = "price tables";
        _this.self = _this;
        _this.selectedCols = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('price_table_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('price_table_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('price_table_remove');
        //
        _this.baseApiUrl = "price-tables";
        _this.displayCreate = true;
        _this.filter.model_id = 1;
        return _this;
    }
    PriceTableComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PriceTableComponent.prototype.initFillable = function () {
        this.fillable = [
            { 'name': 'id' },
            { 'name': 'date_to' },
            { 'name': 'city_from' },
            { 'name': 'area_from' },
            { 'name': 'city_to' },
            { 'name': 'area_to' },
            { 'name': 'price' },
            { 'name': 'return_price' },
            { 'name': 'basic_kg' },
            { 'name': 'additional_kg_price' },
            { 'name': 'remove' }
        ];
    };
    PriceTableComponent.prototype.loadCountries = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].companies();
        else
            this.service.get("companies", { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].countries())
            this.countries = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].countries();
        else
            this.service.get("countries").subscribe(function (res) {
                _this.countries = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].areas();
        else
            this.service.get("areas").subscribe(function (res) {
                _this.areas = res;
            });
    };
    PriceTableComponent.prototype.offers = function () {
        this.filter.show_offer = 1;
        this.get(true);
    };
    PriceTableComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.loadCountries();
        this.get(true);
        this.initFillable();
    };
    PriceTableComponent.prototype.send = function (item) {
        item.model_id = this.filter.model_id;
        _super.prototype.send.call(this, item);
    };
    PriceTableComponent.prototype.create = function (_a) {
        var item = {
            area_from: null,
            area_to: null,
            basic_kg: 1
        };
        _super.prototype.create.call(this, item);
    };
    PriceTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price-table',
            template: __webpack_require__(/*! ./price-table.component.html */ "./src/app/admin/components/price-table/price-table.component.html"),
            styles: [__webpack_require__(/*! ./price-table.component.scss */ "./src/app/admin/components/price-table/price-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], PriceTableComponent);
    return PriceTableComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_4__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/receipt/in-receipt/in-receipt.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with date' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date\"\n      (change)=\"get(true)\"\n      class=\"input-sm w3-block app-form\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'date' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\" input-sm w3-block app-form\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with branch' | trans }}</label>\n      <br>\n      <select\n      class=\" app-form input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.expense_type_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of expenseTypes\">\n          <option  value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"this\" ></app-table>\n\n</div>\n\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n<app-receipt-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" [type]=\"'in'\" ></app-receipt-form>\n"

/***/ }),

/***/ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/receipt/in-receipt/in-receipt.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVjZWlwdC9pbi1yZWNlaXB0L2luLXJlY2VpcHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/receipt/in-receipt/in-receipt.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InReceiptComponent", function() { return InReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var InReceiptComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InReceiptComponent, _super);
    function InReceiptComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "in receipts";
        _this.companies = [];
        _this.stores = [];
        _this.expenseTypes = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_remove');
        //
        _this.baseApiUrl = "inreceipts";
        _this.displayImport = true;
        return _this;
    }
    InReceiptComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'date' },
            { name: 'value' },
            { name: 'company', object: true, data: 'name' },
            { name: 'store', object: true, data: 'name' },
            { name: 'expense_type', object: true, data: 'name' },
            { name: 'notes' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    InReceiptComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    InReceiptComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        this.service.get("stores").subscribe(function (res) {
            _this.stores = res;
        });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses())
            this.expenseTypes = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses();
        else
            this.service.get("expense-types").subscribe(function (res) {
                _this.expenseTypes = res;
            });
    };
    InReceiptComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.loadSettings();
        this.initBreadCrumb();
        this.get(true);
    };
    InReceiptComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1, photo_url: "/assets/img/avatar.png" };
        this.$('#receiptModal').modal('show');
    };
    InReceiptComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#receiptModal').modal('show');
    };
    InReceiptComponent.prototype.show = function (item) {
        this.edit(item);
    };
    InReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-in-receipt',
            template: __webpack_require__(/*! ./in-receipt.component.html */ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.html"),
            styles: [__webpack_require__(/*! ./in-receipt.component.scss */ "./src/app/admin/components/receipt/in-receipt/in-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], InReceiptComponent);
    return InReceiptComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/receipt/out-receipt/out-receipt.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row filter\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with date' | trans }}</label>\n      <br>\n      <input type=\"date\"\n      [(ngModel)]=\"filter.date\"\n      (change)=\"get(true)\"\n      class=\"input-sm w3-block app-form\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'date' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\" input-sm w3-block app-form\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with branch' | trans }}</label>\n      <br>\n      <select\n      class=\" app-form input-sm w3-block\"\n      (change)=\"get(true)\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.expense_type_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of expenseTypes\">\n          <option  value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"this\" ></app-table>\n\n</div>\n\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n<app-receipt-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" [type]=\"'out'\" ></app-receipt-form>\n"

/***/ }),

/***/ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/receipt/out-receipt/out-receipt.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVjZWlwdC9vdXQtcmVjZWlwdC9vdXQtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/receipt/out-receipt/out-receipt.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OutReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutReceiptComponent", function() { return OutReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var OutReceiptComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OutReceiptComponent, _super);
    function OutReceiptComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "receipts";
        _this.companies = [];
        _this.stores = [];
        _this.expenseTypes = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('out_receipt_remove');
        //
        _this.baseApiUrl = "outreceipts";
        _this.displayImport = true;
        return _this;
    }
    OutReceiptComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'date' },
            { name: 'value' },
            { name: 'company', object: true, data: 'name' },
            { name: 'store', object: true, data: 'name' },
            { name: 'expense_type', object: true, data: 'name' },
            { name: 'notes' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    OutReceiptComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    OutReceiptComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        this.service.get("stores").subscribe(function (res) {
            _this.stores = res;
        });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses())
            this.expenseTypes = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].expenses();
        else
            this.service.get("expense-types").subscribe(function (res) {
                _this.expenseTypes = res;
            });
    };
    OutReceiptComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.loadSettings();
        this.initBreadCrumb();
        this.get(true);
    };
    OutReceiptComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1, photo_url: "/assets/img/avatar.png" };
        this.$('#receiptModal').modal('show');
    };
    OutReceiptComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#receiptModal').modal('show');
    };
    OutReceiptComponent.prototype.show = function (item) {
        this.edit(item);
    };
    OutReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-out-receipt',
            template: __webpack_require__(/*! ./out-receipt.component.html */ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.html"),
            styles: [__webpack_require__(/*! ./out-receipt.component.scss */ "./src/app/admin/components/receipt/out-receipt/out-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], OutReceiptComponent);
    return OutReceiptComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/receipt/receipt-form/receipt-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"receiptModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content light- w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center w3-xlarge\">\n          <ng-container *ngIf=\"type == 'in'\" >\n            <span *ngIf=\"resource.id\" >{{ \"edit in receipt\" | trans }}</span>\n            <span *ngIf=\"!resource.id\" >{{ \"add in receipt\" | trans }}</span>\n          </ng-container>\n          <ng-container *ngIf=\"type == 'out'\" >\n            <span *ngIf=\"resource.id\" >{{ \"edit out receipt\" | trans }}</span>\n            <span *ngIf=\"!resource.id\" >{{ \"add out receipt\" | trans }}</span>\n          </ng-container>\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"date\" | trans }} *</label>\n            <input type=\"date\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.date\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"store\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.store_id\"  >\n              <option *ngFor=\"let item of stores\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"company_id\" | trans }} </label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.model_id\"  >\n              <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\" *ngIf=\"type == 'out'\" >{{ \"expense_type\" | trans }} *</label>\n            <label for=\"\" *ngIf=\"type == 'in'\" >{{ \"revenue_type\" | trans }} *</label>\n\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.expense_type_id\"  >\n              <option *ngFor=\"let item of expenseTypes\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"value\" | trans }} *</label>\n            <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.value\" >\n          </div>\n\n          <div class=\"col-lg-12 col-md-12\" style=\"padding: 5px\" >\n            <label for=\"\">{{ \"notes\" | trans }} *</label>\n            <textarea type=\"notes\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" ></textarea>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource, true)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/receipt/receipt-form/receipt-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVjZWlwdC9yZWNlaXB0LWZvcm0vcmVjZWlwdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/receipt/receipt-form/receipt-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReceiptFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptFormComponent", function() { return ReceiptFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");





var ReceiptFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReceiptFormComponent, _super);
    function ReceiptFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add receipt";
        _this.companies = [];
        _this.stores = [];
        _this.expenseTypes = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "receipts";
        _this.displayError = true;
        if (_this.isUpdate)
            _this.title = "update receipt";
        /*
              'date,','store_id','model_id','model_type',
                'expense_type_id','notes','value', 'type'*/
        _this.requiredFields = [
            'date', 'store_id', 'expense_type_id', 'value'
        ];
        return _this;
    }
    ReceiptFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'receipts', url: '/receipt' },
            { name: this.title, url: '#', active: true },
        ];
    };
    ReceiptFormComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        this.service.get("stores").subscribe(function (res) {
            _this.stores = res;
        });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].expenses())
            this.expenseTypes = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].expenses();
        else
            this.service.get("expense-types").subscribe(function (res) {
                _this.expenseTypes = res;
            });
    };
    ReceiptFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
    };
    ReceiptFormComponent.prototype.ngOnChanges = function () {
        if (this.resource) {
            this.resource.type = this.type;
            this.baseApiUrl = this.type + "receipts";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiptFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiptFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiptFormComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiptFormComponent.prototype, "type", void 0);
    ReceiptFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receipt-form',
            template: __webpack_require__(/*! ./receipt-form.component.html */ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.html"),
            styles: [__webpack_require__(/*! ./receipt-form.component.scss */ "./src/app/admin/components/receipt/receipt-form/receipt-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ReceiptFormComponent);
    return ReceiptFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver-form/receiver-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"receiverModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content w3-animate-top\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center w3-xlarge\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit receiver\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add receiver\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body \">\n        <div class=\"row\">\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"name\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"address\" | trans }} *</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"address2\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address2\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"company_name\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.company_name\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"branch_name\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.branch_name\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"phone\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"city\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.city_id\"  >\n              <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"area\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.area_id\"  >\n              <ng-container *ngFor=\"let item of areas\">\n                <option *ngIf=\"item.city_id == resource.city_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"company\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.company_id\"  >\n              <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"branch\" | trans }} *</label>\n            <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.branch_id\"  >\n              <ng-container *ngFor=\"let item of branches\">\n                <option *ngIf=\"item.company_id == resource.company_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </ng-container>\n            </select>\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"reference\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.referance\" >\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label>{{ \"title\" | trans }}</label>\n            <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.title\" >\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"modal-footer text-center w3-center\">\n\n          <button type=\"button\"\n          class=\"\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          data-dismiss=\"modal\" >{{ \"close\" | trans }}</button>\n\n          <button class=\"w3-indigo\"\n          [disabled]=\"isSubmit\"\n          style=\"margin: 5px\"\n          mat-raised-button\n          (click)=\"send(resource)\" >\n          <span *ngIf=\"!isSubmit\" >\n            <span *ngIf=\"!resource.id\" >{{ \"add\" | trans }}</span>\n            <span *ngIf=\"resource.id\" >{{ \"edit\" | trans }}</span>\n          </span>\n          <span *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\" ></span>\n        </button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver-form/receiver-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVjZWl2ZXIvcmVjZWl2ZXItZm9ybS9yZWNlaXZlci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver-form/receiver-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReceiverFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverFormComponent", function() { return ReceiverFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");






var ReceiverFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReceiverFormComponent, _super);
    function ReceiverFormComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "add receiver";
        _this.cities = [];
        _this.areas = [];
        _this.companies = [];
        _this.branches = [];
        _this.isUpdate = false;
        _this.resource = {};
        //
        _this.baseApiUrl = "receivers";
        _this.displayError = true;
        if (_this.isUpdate)
            _this.title = "update receiver";
        _this.requiredFields = [
            'name', 'address', 'city_id', 'area_id', 'company_id', 'branch_id'
        ];
        if (!_this.resource.id) {
            _this.reset({});
        }
        return _this;
    }
    ReceiverFormComponent.prototype.reset = function (item) {
        this.resource = {
            company_id: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user().company_id,
            branch_id: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user().branch_id
        };
        item = {
            company_id: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user().company_id,
            branch_id: _shared_auth__WEBPACK_IMPORTED_MODULE_5__["Auth"].user().branch_id
        };
    };
    ReceiverFormComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: 'receivers', url: '/receiver' },
            { name: this.title, url: '#', active: true },
        ];
    };
    ReceiverFormComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].areas();
        else
            this.service.get("areas").subscribe(function (res) {
                _this.areas = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches())
            this.branches = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].branches();
        else
            this.service.get("branches").subscribe(function (res) {
                _this.branches = res;
            });
    };
    ReceiverFormComponent.prototype.ngOnInit = function () {
        this.loadSettings();
        this.initBreadCrumb();
        this.get();
        this.reset({});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiverFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiverFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiverFormComponent.prototype, "action", void 0);
    ReceiverFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receiver-form',
            template: __webpack_require__(/*! ./receiver-form.component.html */ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.html"),
            styles: [__webpack_require__(/*! ./receiver-form.component.scss */ "./src/app/admin/components/receiver/receiver-form/receiver-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ReceiverFormComponent);
    return ReceiverFormComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_2__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/receiver/receiver.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12  \" style=\"padding: 0px!important\">\n  <app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'search' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.search\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'search' | trans }}\" >\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with city' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.city_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with area' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.area_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <ng-container *ngFor=\"let item of areas\">\n          <option *ngIf=\"item.city_id == filter.city_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n        </ng-container>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'filter with company' | trans }}</label>\n      <br>\n      <select\n      class=\"form-control input-sm w3-block\"\n      (change)=\"get()\"\n      style=\"border-radius: 8px;\"\n        [(ngModel)]=\"filter.company_id\" >\n        <option value=\"\">{{ \"select all\" | trans }}</option>\n        <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n      </select>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3\">\n      <label>{{ 'number per page' | trans }}</label>\n      <br>\n      <input type=\"text\"\n      [(ngModel)]=\"filter.page_length\"\n      (change)=\"get()\"\n      class=\"form-control input-sm w3-block\"\n      style=\"border-radius: 8px;\"\n      placeholder=\"{{ 'number per page' | trans }}\" >\n    </div>\n\n  </div>\n  <br>\n\n<div class=\"w3-block material-shadow safe-box w3-white w3-display-container\" style=\"padding: 0px!important\" >\n\n  <app-table [crud]=\"this\" ></app-table>\n\n</div>\n</div>\n\n<div class=\"w3-display-bottomright w3-padding\" style=\"position: fixed;\" >\n  <button mat-fab  class=\"w3-indigo\" *ngIf=\"canAdd\" (click)=\"create()\" >\n    <i class=\"fa fa-plus\"></i>\n  </button>\n</div>\n\n<app-receiver-form [resource]=\"resource\" [isUpdate]=\"isUpdate\" [action]=\"reload\" ></app-receiver-form>\n\n<app-import-excel [title]=\"title\" [templateUrl]=\"getExcelFileUrl()\" [apiUrl]=\"getExcelFileApi()\" [action]=\"reload\" ></app-import-excel>\n"

/***/ }),

/***/ "./src/app/admin/components/receiver/receiver.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVjZWl2ZXIvcmVjZWl2ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/receiver/receiver.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/receiver/receiver.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReceiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiverComponent", function() { return ReceiverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/crud */ "./src/app/shared/helpers/crud.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");






var ReceiverComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReceiverComponent, _super);
    function ReceiverComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.breadcrumbList = [];
        _this.title = "receivers";
        _this.cities = [];
        _this.areas = [];
        _this.companies = [];
        _this.resource = {};
        _this.$ = $;
        _this.isUpdate = false;
        _this.canAdd = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('receiver_add');
        _this.canEdit = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('receiver_edit');
        _this.canRemove = src_app_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('receiver_remove');
        //
        _this.baseApiUrl = "receivers";
        _this.displayImport = true;
        _this.paging = true;
        _this.filter.page_length = 20;
        return _this;
    }
    ReceiverComponent.prototype.initFillable = function () {
        var _this = this;
        this.fillable = [
            { name: 'id' },
            { name: 'name' },
            { name: 'address' },
            { name: 'address2' },
            { name: 'phone' },
            { name: 'company_name' },
            { name: 'branch_name' },
            { name: 'referance' },
            { name: 'title' },
            { name: 'city', object: true, data: 'name' },
            { name: 'area', object: true, data: 'name' },
            { name: 'branch', object: true, data: 'name' },
            { name: 'company', object: true, data: 'name' },
            { name: 'edit', permission: this.canEdit, action: function (item, index) { _this.edit(item); }, class: 'fa fa-edit w3-text-orange' },
            { name: 'remove', permission: this.canRemove, action: function (item, index) { _this.destroy(item, index); }, class: 'fa fa-trash w3-text-red' },
        ];
    };
    ReceiverComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    ReceiverComponent.prototype.loadSettings = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas())
            this.areas = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].areas();
        else
            this.service.get("areas").subscribe(function (res) {
                _this.areas = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].cities();
        else
            this.service.get("cities").subscribe(function (res) {
                _this.cities = res;
            });
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_5__["Autoloader"].companies();
        else
            this.service.get("companies").subscribe(function (res) {
                _this.companies = res;
            });
    };
    ReceiverComponent.prototype.ngOnInit = function () {
        this.initFillable();
        this.loadSettings();
        this.initBreadCrumb();
        this.get(true);
    };
    ReceiverComponent.prototype.create = function () {
        this.isUpdate = false;
        this.resource = { active: 1 };
        this.$('#receiverModal').modal('show');
    };
    ReceiverComponent.prototype.edit = function (item) {
        this.isUpdate = true;
        this.resource = item;
        this.$('#receiverModal').modal('show');
    };
    ReceiverComponent.prototype.show = function (item) {
        this.edit(item);
    };
    ReceiverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receiver',
            template: __webpack_require__(/*! ./receiver.component.html */ "./src/app/admin/components/receiver/receiver.component.html"),
            styles: [__webpack_require__(/*! ./receiver.component.scss */ "./src/app/admin/components/receiver/receiver.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], ReceiverComponent);
    return ReceiverComponent;
}(src_app_shared_helpers_crud__WEBPACK_IMPORTED_MODULE_3__["Crud"]));



/***/ }),

/***/ "./src/app/admin/components/report/awb-prices/awb-prices.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices/awb-prices.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"discount\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.discount\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"fuel charge\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.fuel_charge\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"other\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.other\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"postal_fees\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.postal_fees\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"vet_fax\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.vet_fax\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"service kind\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.service_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of services\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/awb-prices/awb-prices.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices/awb-prices.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvYXdiLXByaWNlcy9DOlxcVXNlcnNcXGVsaGFyXFxEb3dubG9hZHNcXHVzZi1mcm9udC1tYWluXFx1c2YtZnJvbnQtbWFpbi9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHJlcG9ydFxcYXdiLXByaWNlc1xcYXdiLXByaWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvYXdiLXByaWNlcy9hd2ItcHJpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L2F3Yi1wcmljZXMvYXdiLXByaWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuIiwidGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/report/awb-prices/awb-prices.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices/awb-prices.component.ts ***!
  \****************************************************************************/
/*! exports provided: AwbPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbPricesComponent", function() { return AwbPricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var AwbPricesComponent = /** @class */ (function () {
    function AwbPricesComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices";
        this.title = "awb customer review";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.services = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
        this.filter = {
            postal_fees: 0.10,
            vet_fax: 0.14
        };
    }
    AwbPricesComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AwbPricesComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    AwbPricesComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        res.forEach(function (element) {
            if (element.code == '7')
                _this.collectedStatus = element;
        });
        this.filter.status_id = this.collectedStatus.id;
    };
    AwbPricesComponent.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status());
        else
            this.service.get('status').subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    AwbPricesComponent.prototype.loadCompanies = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies', { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
    };
    AwbPricesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services())
            this.services = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services();
        else
            this.service.get('services').subscribe(function (res) {
                _this.services = res;
            });
        this.loadCompanies();
        this.loadStatus();
        this.initBreadCrumb();
    };
    AwbPricesComponent.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    AwbPricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-prices',
            template: __webpack_require__(/*! ./awb-prices.component.html */ "./src/app/admin/components/report/awb-prices/awb-prices.component.html"),
            styles: [__webpack_require__(/*! ./awb-prices.component.scss */ "./src/app/admin/components/report/awb-prices/awb-prices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AwbPricesComponent);
    return AwbPricesComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices2/awb-prices2.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"collection_percent\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.collection_percent\" >\n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices2/awb-prices2.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvYXdiLXByaWNlczIvQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxyZXBvcnRcXGF3Yi1wcmljZXMyXFxhd2ItcHJpY2VzMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvYXdiLXByaWNlczIvYXdiLXByaWNlczIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvYXdiLXByaWNlczIvYXdiLXByaWNlczIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4iLCJ0YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/report/awb-prices2/awb-prices2.component.ts ***!
  \******************************************************************************/
/*! exports provided: AwbPrices2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbPrices2Component", function() { return AwbPrices2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var AwbPrices2Component = /** @class */ (function () {
    function AwbPrices2Component(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices2";
        this.title = "awb customer review";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
        this.filter = {
            postal_fees: 0.10,
            vet_fax: 0.14
        };
    }
    AwbPrices2Component.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AwbPrices2Component.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    AwbPrices2Component.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        res.forEach(function (element) {
            if (element.code == '7')
                _this.collectedStatus = element;
        });
        this.filter.status_id = this.collectedStatus.id;
    };
    AwbPrices2Component.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status());
        else
            this.service.get('status').subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    AwbPrices2Component.prototype.loadCompanies = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies', { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
    };
    AwbPrices2Component.prototype.ngOnInit = function () {
        this.loadCompanies();
        this.loadStatus();
        this.initBreadCrumb();
    };
    AwbPrices2Component.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    AwbPrices2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awb-prices2',
            template: __webpack_require__(/*! ./awb-prices2.component.html */ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.html"),
            styles: [__webpack_require__(/*! ./awb-prices2.component.scss */ "./src/app/admin/components/report/awb-prices2/awb-prices2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AwbPrices2Component);
    return AwbPrices2Component;
}());



/***/ }),

/***/ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"filter data\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"courier name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"loadChartData()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.courier_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of couriers\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-report-options></app-report-options>\n\n  <div class=\"w3-block \" id=\"printable\" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" ></div>\n        <div class=\"custom-panel-body\"  >\n\n          <app-report-header></app-report-header>\n\n          <div class=\"w3-xlarge w3-center\">\n            {{ title | trans }}\n          </div>\n          <br>\n          <table class=\"table\">\n            <tr>\n              <th>{{ \"courier name\" | trans }}</th>\n              <td>{{ getSelectedCourier().name }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"courier address\" | trans }}</th>\n              <td>{{ getSelectedCourier().address }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"courier phone\" | trans }}</th>\n              <td>{{ getSelectedCourier().phone }}</td>\n            </tr>\n          </table>\n\n          <div class=\"chart w3-block text-center\">\n            <google-chart\n            [title]=\"chartData.title\"\n            [type]=\"chartData.type\"\n            [data]=\"chartData.data\"\n            [columnNames]=\"chartData.columnNames\"\n            [options]=\"chartData.options\">\n            </google-chart>\n          </div>\n          <table class=\"table table-bordered \">\n            <tr class=\"w3-indigo\" >\n              <td>{{ \"#\" }}</td>\n              <td>{{ \"courier\" | trans }}</td>\n              <td>{{ \"awb count\" | trans  }}</td>\n              <!--\n              <td>{{ \"awb weight total\" | trans  }}</td>\n              <td>{{ \"awb pieces total\" | trans  }}</td>\n            -->\n            </tr>\n\n            <tr *ngFor=\"let row of response index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ row.name }}</td>\n              <td>{{ row.awb_count }}</td>\n              <!--\n              <td>{{ row.awb_weight }}</td>\n              <td>{{ row.awb_pieces }}</td>\n              -->\n            </tr>\n\n            <tr>\n              <td></td>\n              <th>{{ \"total\" | trans }}</th>\n              <td>{{ total }}</td>\n            </tr>\n          </table>\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvY291cmllci1hd2Itc3RhdHVzL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xccmVwb3J0XFxjb3VyaWVyLWF3Yi1zdGF0dXNcXGNvdXJpZXItYXdiLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvY291cmllci1hd2Itc3RhdHVzL2NvdXJpZXItYXdiLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JlcG9ydC9jb3VyaWVyLWF3Yi1zdGF0dXMvY291cmllci1hd2Itc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuIiwidGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CourierAwbStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierAwbStatusComponent", function() { return CourierAwbStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");






var CourierAwbStatusComponent = /** @class */ (function () {
    function CourierAwbStatusComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/one-courier-awb-status";
        this.title = "one_courier_awb_status_report";
        this.status = [];
        this.breadcrumbList = [];
        this.couriers = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.response = {};
        this.showSaveBtn = false;
        this.chartData = {};
        this.doc = document;
        this.total = 0;
        this.initChart([]);
        this.loadChartData();
    }
    CourierAwbStatusComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierAwbStatusComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    CourierAwbStatusComponent.prototype.toChartData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.name, element.awb_count]);
        });
        return data;
    };
    CourierAwbStatusComponent.prototype.loadChartData = function () {
        var _this = this;
        this.total = 0;
        this.service.get(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.response = res;
            res.forEach(function (element) {
                _this.total += element.awb_count;
            });
            _this.initChart(_this.toChartData(res));
        });
    };
    CourierAwbStatusComponent.prototype.getSelectedCourier = function () {
        var _this = this;
        var courier = {};
        this.couriers.forEach(function (element) {
            if (element.id == _this.filter.courier_id) {
                courier = element;
            }
        });
        return courier;
    };
    CourierAwbStatusComponent.prototype.loadCouriers = function () {
        var _this = this;
        this.service.get('couriers', { paging: '0' }).subscribe(function (res) {
            _this.couriers = res;
        });
    };
    CourierAwbStatusComponent.prototype.initChart = function (data) {
        this.chartData = {
            columnNames: ['status', 'awb count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 400,
                legend: { position: "top" },
            }
        };
    };
    CourierAwbStatusComponent.prototype.ngOnInit = function () {
        this.loadCouriers();
        this.initBreadCrumb();
    };
    CourierAwbStatusComponent.prototype.print = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].print();
    };
    CourierAwbStatusComponent.prototype.excel = function () {
        this.doc.exportExcel();
    };
    CourierAwbStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-awb-status',
            template: __webpack_require__(/*! ./courier-awb-status.component.html */ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.html"),
            styles: [__webpack_require__(/*! ./courier-awb-status.component.scss */ "./src/app/admin/components/report/courier-awb-status/courier-awb-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourierAwbStatusComponent);
    return CourierAwbStatusComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/courier-commission/courier-commission.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-commission/courier-commission.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-awb works!\n</p>\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"courier name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"loadChartData()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.courier_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of couriers\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <app-report-options></app-report-options>\n\n  <div class=\"w3-block \" id=\"printable\" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" ></div>\n        <div class=\"custom-panel-body\"  >\n\n          <app-report-header></app-report-header>\n\n          <div class=\"w3-xlarge w3-center\">\n            {{ title | trans }}\n          </div>\n          <br>\n\n          <div class=\"chart w3-block text-center\">\n            <google-chart\n            [title]=\"chartData.title\"\n            [type]=\"chartData.type\"\n            [data]=\"chartData.data\"\n            [columnNames]=\"chartData.columnNames\"\n            [options]=\"chartData.options\">\n            </google-chart>\n          </div>\n          <br>\n          <table class=\"table table-bordered \">\n            <tr class=\"w3-indigo\" >\n              <td>{{ \"#\" }}</td>\n              <td>{{ \"courier\" | trans }}</td>\n              <td>{{ \"salary\" | trans  }}</td>\n              <td>{{ \"discount\" | trans  }}</td>\n              <td>{{ \"additional\" | trans  }}</td>\n              <td>{{ \"commission\" | trans  }}</td>\n              <td>{{ \"net_salary\" | trans  }}</td>\n            </tr>\n\n            <tr *ngFor=\"let row of response index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ row.name }}</td>\n              <td>{{ row.salary }}</td>\n              <td>{{ row.discount }}</td>\n              <td>{{ row.additional }}</td>\n              <td>{{ row.commission  }}</td>\n              <td>{{ row.net_salary  }}</td>\n            </tr>\n\n            <tr>\n              <td></td>\n              <td></td>\n              <th>{{ totals.salary }}</th>\n              <th>{{ totals.discount }}</th>\n              <th>{{ totals.additional }}</th>\n              <th>{{ totals.com }}</th>\n              <th>{{ totals.net }}</th>\n            </tr>\n\n          </table>\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/courier-commission/courier-commission.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-commission/courier-commission.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvY291cmllci1jb21taXNzaW9uL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xccmVwb3J0XFxjb3VyaWVyLWNvbW1pc3Npb25cXGNvdXJpZXItY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvY291cmllci1jb21taXNzaW9uL2NvdXJpZXItY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JlcG9ydC9jb3VyaWVyLWNvbW1pc3Npb24vY291cmllci1jb21taXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuIiwidGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/report/courier-commission/courier-commission.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/courier-commission/courier-commission.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CourierCommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierCommissionComponent", function() { return CourierCommissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");





var CourierCommissionComponent = /** @class */ (function () {
    function CourierCommissionComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices";
        this.title = "awb customer report";
        this.status = [];
        this.breadcrumbList = [];
        this.couriers = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.response = {};
        this.showSaveBtn = false;
        this.chartData = {};
        this.doc = document;
        this.totals = { salary: 0, net: 0, discount: 0, additional: 0, com: 0 };
        this.initChart([]);
        this.loadChartData();
    }
    CourierCommissionComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CourierCommissionComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    CourierCommissionComponent.prototype.toChartData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.name, element.net_salary]);
        });
        return data;
    };
    CourierCommissionComponent.prototype.loadChartData = function () {
        var _this = this;
        this.totals = { salary: 0, net: 0, discount: 0, additional: 0, com: 0 };
        this.service.get('report/courier-commissions', this.filter).subscribe(function (res) {
            _this.response = res;
            res.forEach(function (element) {
                _this.totals.salary += element.salary;
                _this.totals.discount += element.discount;
                _this.totals.additional += element.additional;
                _this.totals.com += element.commission;
                _this.totals.net += element.net_salary;
            });
            _this.initChart(_this.toChartData(res));
        });
    };
    CourierCommissionComponent.prototype.loadCouriers = function () {
        var _this = this;
        this.service.get('couriers', { paging: '0' }).subscribe(function (res) {
            _this.couriers = res;
        });
    };
    CourierCommissionComponent.prototype.initChart = function (data) {
        this.chartData = {
            columnNames: ['company', 'awb count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 400,
                legend: { position: "top" },
            }
        };
    };
    CourierCommissionComponent.prototype.ngOnInit = function () {
        this.loadCouriers();
        this.initBreadCrumb();
    };
    CourierCommissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courier-commission',
            template: __webpack_require__(/*! ./courier-commission.component.html */ "./src/app/admin/components/report/courier-commission/courier-commission.component.html"),
            styles: [__webpack_require__(/*! ./courier-commission.component.scss */ "./src/app/admin/components/report/courier-commission/courier-commission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourierCommissionComponent);
    return CourierCommissionComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/customer-awb/customer-awb.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/report/customer-awb/customer-awb.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-report-options></app-report-options>\n\n  <div class=\"w3-block \" id=\"printable\" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" ></div>\n        <div class=\"custom-panel-body\"  >\n\n          <app-report-header></app-report-header>\n\n          <div class=\"w3-xlarge w3-center\">\n            {{ title | trans }}\n          </div>\n          <br>\n\n          <div class=\"chart w3-block text-center\">\n            <google-chart\n            [title]=\"chartData.title\"\n            [type]=\"chartData.type\"\n            [data]=\"chartData.data\"\n            [columnNames]=\"chartData.columnNames\"\n            [options]=\"chartData.options\">\n            </google-chart>\n          </div>\n          <br>\n          <table class=\"table table-bordered \">\n            <tr class=\"w3-indigo\" >\n              <td>{{ \"#\" }}</td>\n              <td>{{ \"company\" | trans }}</td>\n              <td>{{ \"awb count\" | trans  }}</td>\n              <td>{{ \"awb weight total\" | trans  }}</td>\n              <td>{{ \"awb pieces total\" | trans  }}</td>\n            </tr>\n\n            <tr *ngFor=\"let row of response index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ row.name }}</td>\n              <td>{{ row.awb_count }}</td>\n              <td>{{ row.awb_weight }}</td>\n              <td>{{ row.awb_pieces }}</td>\n            </tr>\n          </table>\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/customer-awb/customer-awb.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/report/customer-awb/customer-awb.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L2N1c3RvbWVyLWF3Yi9jdXN0b21lci1hd2IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/report/customer-awb/customer-awb.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/report/customer-awb/customer-awb.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerAwbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAwbComponent", function() { return CustomerAwbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");







var CustomerAwbComponent = /** @class */ (function () {
    function CustomerAwbComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices";
        this.title = "awb customer report";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.response = {};
        this.showSaveBtn = false;
        this.chartData = {};
        this.doc = document;
        this.initChart([]);
        this.loadChartData();
    }
    CustomerAwbComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    CustomerAwbComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    CustomerAwbComponent.prototype.toChartData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.name, element.awb_count]);
        });
        return data;
    };
    CustomerAwbComponent.prototype.loadChartData = function () {
        var _this = this;
        this.service.get('report/companies-awb', this.filter).subscribe(function (res) {
            _this.response = res;
            _this.initChart(_this.toChartData(res));
        });
    };
    CustomerAwbComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('companies', { paging: '0' }).subscribe(function (res) {
            _this.companies = res;
        });
    };
    CustomerAwbComponent.prototype.initChart = function (data) {
        this.chartData = {
            columnNames: ['company', 'awb count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 400,
                legend: { position: "top" },
            }
        };
    };
    CustomerAwbComponent.prototype.ngOnInit = function () {
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_6__["Autoloader"].companies();
        else
            this.loadCompanies();
        this.initBreadCrumb();
    };
    CustomerAwbComponent.prototype.print = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].print();
    };
    CustomerAwbComponent.prototype.excel = function () {
        this.doc.exportExcel();
    };
    CustomerAwbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-awb',
            template: __webpack_require__(/*! ./customer-awb.component.html */ "./src/app/admin/components/report/customer-awb/customer-awb.component.html"),
            styles: [__webpack_require__(/*! ./customer-awb.component.scss */ "./src/app/admin/components/report/customer-awb/customer-awb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerAwbComponent);
    return CustomerAwbComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/invoice-header/invoice-header.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/invoice-header/invoice-header.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter invoice filter\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"discount\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.discount\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"fuel charge\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.fuel_charge\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"other\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.other\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"postal_fees\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.postal_fees\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"vet_fax\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.vet_fax\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"service kind\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.service_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of services\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/invoice-header/invoice-header.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/invoice-header/invoice-header.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L2ludm9pY2UtaGVhZGVyL2ludm9pY2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/report/invoice-header/invoice-header.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/report/invoice-header/invoice-header.component.ts ***!
  \************************************************************************************/
/*! exports provided: InvoiceHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceHeaderComponent", function() { return InvoiceHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var InvoiceHeaderComponent = /** @class */ (function () {
    function InvoiceHeaderComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/invoice-cover";
        this.title = "invoice cover";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.services = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
        this.filter = {
            postal_fees: 0.10,
            vet_fax: 0.14
        };
    }
    InvoiceHeaderComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    InvoiceHeaderComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
            //
            setTimeout(function () {
                _this.$('.invoice-no').attr('contenteditable', 'true');
            }, 500);
        });
    };
    InvoiceHeaderComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        res.forEach(function (element) {
            if (element.code == '7')
                _this.collectedStatus = element;
        });
        this.filter.status_id = this.collectedStatus.id;
    };
    InvoiceHeaderComponent.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status());
        else
            this.service.get('status').subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    InvoiceHeaderComponent.prototype.loadCompanies = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies', { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
    };
    InvoiceHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services())
            this.services = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services();
        else
            this.service.get('services').subscribe(function (res) {
                _this.services = res;
            });
        this.loadCompanies();
        this.loadStatus();
        this.initBreadCrumb();
    };
    InvoiceHeaderComponent.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    InvoiceHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-header',
            template: __webpack_require__(/*! ./invoice-header.component.html */ "./src/app/admin/components/report/invoice-header/invoice-header.component.html"),
            styles: [__webpack_require__(/*! ./invoice-header.component.scss */ "./src/app/admin/components/report/invoice-header/invoice-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvoiceHeaderComponent);
    return InvoiceHeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-awb works!\n</p>\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"filter data\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"loadChartData()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-report-options></app-report-options>\n\n  <div class=\"w3-block \" id=\"printable\" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" ></div>\n        <div class=\"custom-panel-body\"  >\n\n          <app-report-header></app-report-header>\n\n          <div class=\"w3-xlarge w3-center\">\n            {{ title | trans }}\n          </div>\n          <br>\n          <table class=\"table\">\n            <tr>\n              <th>{{ \"company name\" | trans }}</th>\n              <td>{{ getSelectedCompany().name }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"company address\" | trans }}</th>\n              <td>{{ getSelectedCompany().address }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"company phone\" | trans }}</th>\n              <td>{{ getSelectedCompany().phone }}</td>\n            </tr>\n          </table>\n\n          <div class=\"chart w3-block text-center\">\n            <google-chart\n            [title]=\"chartData.title\"\n            [type]=\"chartData.type\"\n            [data]=\"chartData.data\"\n            [columnNames]=\"chartData.columnNames\"\n            [options]=\"chartData.options\">\n            </google-chart>\n          </div>\n          <table class=\"table table-bordered \">\n            <tr class=\"w3-indigo\" >\n              <td>{{ \"#\" }}</td>\n              <td>{{ \"company\" | trans }}</td>\n              <td>{{ \"awb count\" | trans  }}</td>\n              <td>{{ \"awb weight total\" | trans  }}</td>\n              <td>{{ \"awb pieces total\" | trans  }}</td>\n            </tr>\n\n            <tr *ngFor=\"let row of response index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ row.name }}</td>\n              <td>{{ row.awb_count }}</td>\n              <td>{{ row.awb_weight }}</td>\n              <td>{{ row.awb_pieces }}</td>\n            </tr>\n          </table>\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvb25lLWN1c3RvbWVyLWNpdHktYXdiL0M6XFxVc2Vyc1xcZWxoYXJcXERvd25sb2Fkc1xcdXNmLWZyb250LW1haW5cXHVzZi1mcm9udC1tYWluL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xccmVwb3J0XFxvbmUtY3VzdG9tZXItY2l0eS1hd2JcXG9uZS1jdXN0b21lci1jaXR5LWF3Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvb25lLWN1c3RvbWVyLWNpdHktYXdiL29uZS1jdXN0b21lci1jaXR5LWF3Yi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3JlcG9ydC9vbmUtY3VzdG9tZXItY2l0eS1hd2Ivb25lLWN1c3RvbWVyLWNpdHktYXdiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuIiwidGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OneCustomerCityAwbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCustomerCityAwbComponent", function() { return OneCustomerCityAwbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");







var OneCustomerCityAwbComponent = /** @class */ (function () {
    function OneCustomerCityAwbComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.title = "one_customer_awb_city_report";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.response = {};
        this.showSaveBtn = false;
        this.chartData = {};
        this.doc = document;
        this.initChart([]);
        this.loadChartData();
    }
    OneCustomerCityAwbComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    OneCustomerCityAwbComponent.prototype.toChartData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.name, element.awb_count]);
        });
        return data;
    };
    OneCustomerCityAwbComponent.prototype.loadChartData = function () {
        var _this = this;
        this.service.get('report/one-company-awb-city', this.filter).subscribe(function (res) {
            _this.response = res;
            _this.initChart(_this.toChartData(res));
        });
    };
    OneCustomerCityAwbComponent.prototype.getSelectedCompany = function () {
        var _this = this;
        var company = {};
        this.companies.forEach(function (element) {
            if (element.id == _this.filter.company_id) {
                company = element;
            }
        });
        return company;
    };
    OneCustomerCityAwbComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('companies', { paging: '0' }).subscribe(function (res) {
            _this.companies = res;
        });
    };
    OneCustomerCityAwbComponent.prototype.initChart = function (data) {
        this.chartData = {
            columnNames: ['company', 'awb count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 400,
                legend: { position: "top" },
            }
        };
    };
    OneCustomerCityAwbComponent.prototype.ngOnInit = function () {
        if (src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.loadCompanies();
        this.initBreadCrumb();
    };
    OneCustomerCityAwbComponent.prototype.print = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].print();
    };
    OneCustomerCityAwbComponent.prototype.excel = function () {
        this.doc.exportExcel();
    };
    OneCustomerCityAwbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-one-customer-city-awb',
            template: __webpack_require__(/*! ./one-customer-city-awb.component.html */ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.html"),
            styles: [__webpack_require__(/*! ./one-customer-city-awb.component.scss */ "./src/app/admin/components/report/one-customer-city-awb/one-customer-city-awb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OneCustomerCityAwbComponent);
    return OneCustomerCityAwbComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-awb works!\n</p>\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"loadChartData()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"loadChartData()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n\n  <app-report-options></app-report-options>\n\n  <div class=\"w3-block \" id=\"printable\" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" ></div>\n        <div class=\"custom-panel-body\"  >\n\n          <app-report-header></app-report-header>\n\n          <div class=\"w3-xlarge w3-center\">\n            {{ title | trans }}\n          </div>\n          <br>\n          <table class=\"table\">\n            <tr>\n              <th>{{ \"company name\" | trans }}</th>\n              <td>{{ getSelectedCompany().name }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"company address\" | trans }}</th>\n              <td>{{ getSelectedCompany().address }}</td>\n            </tr>\n            <tr>\n              <th>{{ \"company phone\" | trans }}</th>\n              <td>{{ getSelectedCompany().phone }}</td>\n            </tr>\n          </table>\n\n          <div class=\"chart w3-block text-center\">\n            <google-chart\n            [title]=\"chartData.title\"\n            [type]=\"chartData.type\"\n            [data]=\"chartData.data\"\n            [columnNames]=\"chartData.columnNames\"\n            [options]=\"chartData.options\">\n            </google-chart>\n          </div>\n          <table class=\"table table-bordered \">\n            <tr class=\"w3-indigo\" >\n              <td>{{ \"#\" }}</td>\n              <td>{{ \"company\" | trans }}</td>\n              <td>{{ \"awb count\" | trans  }}</td>\n              <td>{{ \"awb weight total\" | trans  }}</td>\n              <td>{{ \"awb pieces total\" | trans  }}</td>\n            </tr>\n\n            <tr *ngFor=\"let row of response index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ row.name }}</td>\n              <td>{{ row.awb_count }}</td>\n              <td>{{ row.awb_weight }}</td>\n              <td>{{ row.awb_pieces }}</td>\n            </tr>\n          </table>\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvb25lLWN1c3RvbWVyLXN0YXR1cy1hd2IvQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxyZXBvcnRcXG9uZS1jdXN0b21lci1zdGF0dXMtYXdiXFxvbmUtY3VzdG9tZXItc3RhdHVzLWF3Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvb25lLWN1c3RvbWVyLXN0YXR1cy1hd2Ivb25lLWN1c3RvbWVyLXN0YXR1cy1hd2IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvb25lLWN1c3RvbWVyLXN0YXR1cy1hd2Ivb25lLWN1c3RvbWVyLXN0YXR1cy1hd2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4iLCJ0YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OneCustomerStatusAwbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCustomerStatusAwbComponent", function() { return OneCustomerStatusAwbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");







var OneCustomerStatusAwbComponent = /** @class */ (function () {
    function OneCustomerStatusAwbComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices";
        this.title = "one_customer_awb_status_report";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.response = {};
        this.showSaveBtn = false;
        this.chartData = {};
        this.doc = document;
        this.initChart([]);
        this.loadChartData();
    }
    OneCustomerStatusAwbComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    OneCustomerStatusAwbComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    OneCustomerStatusAwbComponent.prototype.toChartData = function (res) {
        var data = [];
        res.forEach(function (element) {
            data.push([element.name, element.awb_count]);
        });
        return data;
    };
    OneCustomerStatusAwbComponent.prototype.loadChartData = function () {
        var _this = this;
        this.service.get('report/one-company-awb-status', this.filter).subscribe(function (res) {
            _this.response = res;
            _this.initChart(_this.toChartData(res));
        });
    };
    OneCustomerStatusAwbComponent.prototype.getSelectedCompany = function () {
        var _this = this;
        var company = {};
        this.companies.forEach(function (element) {
            if (element.id == _this.filter.company_id) {
                company = element;
            }
        });
        return company;
    };
    OneCustomerStatusAwbComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('companies', { paging: '0' }).subscribe(function (res) {
            _this.companies = res;
        });
    };
    OneCustomerStatusAwbComponent.prototype.initChart = function (data) {
        this.chartData = {
            columnNames: ['company', 'awb count'],
            type: 'PieChart',
            data: data,
            options: {
                width: 600,
                height: 400,
                legend: { position: "top" },
            }
        };
    };
    OneCustomerStatusAwbComponent.prototype.ngOnInit = function () {
        if (src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies())
            this.companies = src_app_admin_helpers_autoloader__WEBPACK_IMPORTED_MODULE_4__["Autoloader"].companies();
        else
            this.loadCompanies();
        this.initBreadCrumb();
    };
    OneCustomerStatusAwbComponent.prototype.print = function () {
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].print();
    };
    OneCustomerStatusAwbComponent.prototype.excel = function () {
        this.doc.exportExcel();
    };
    OneCustomerStatusAwbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-one-customer-status-awb',
            template: __webpack_require__(/*! ./one-customer-status-awb.component.html */ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.html"),
            styles: [__webpack_require__(/*! ./one-customer-status-awb.component.scss */ "./src/app/admin/components/report/one-customer-status-awb/one-customer-status-awb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OneCustomerStatusAwbComponent);
    return OneCustomerStatusAwbComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/postal-invoice/postal-invoice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company name\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"discount\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.discount\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"fuel charge\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.fuel_charge\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"other\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.other\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"postal_fees\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.postal_fees\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"vet_fax\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"number\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.vet_fax\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"service kind\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.service_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of services\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"awbs\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/postal-invoice/postal-invoice.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L3Bvc3RhbC1pbnZvaWNlL3Bvc3RhbC1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/report/postal-invoice/postal-invoice.component.ts ***!
  \************************************************************************************/
/*! exports provided: PostalInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalInvoiceComponent", function() { return PostalInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var PostalInvoiceComponent = /** @class */ (function () {
    function PostalInvoiceComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/awb-prices3";
        this.title = "";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.services = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
        this.filter = {
            postal_fees: 0.10,
            vet_fax: 0.14
        };
    }
    PostalInvoiceComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PostalInvoiceComponent.prototype.get = function () {
        var _this = this;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    PostalInvoiceComponent.prototype.statusCallback = function (res) {
        var _this = this;
        this.status = res;
        res.forEach(function (element) {
            if (element.code == '7')
                _this.collectedStatus = element;
        });
        this.filter.status_id = this.collectedStatus.id;
    };
    PostalInvoiceComponent.prototype.loadStatus = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status())
            this.statusCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].status());
        else
            this.service.get('status').subscribe(function (res) {
                _this.statusCallback(res);
            });
    };
    PostalInvoiceComponent.prototype.loadCompanies = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies', { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
    };
    PostalInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services())
            this.services = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].services();
        else
            this.service.get('services').subscribe(function (res) {
                _this.services = res;
            });
        this.loadCompanies();
        this.loadStatus();
        this.initBreadCrumb();
    };
    PostalInvoiceComponent.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    PostalInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postal-invoice',
            template: __webpack_require__(/*! ./postal-invoice.component.html */ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.html"),
            styles: [__webpack_require__(/*! ./postal-invoice.component.scss */ "./src/app/admin/components/report/postal-invoice/postal-invoice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostalInvoiceComponent);
    return PostalInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/pricetable-report/pricetable-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"company\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.company_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of companies\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"city_from\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.city_from\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"city_to\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.city_to\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of cities\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"options\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"print table\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/pricetable-report/pricetable-report.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L3ByaWNldGFibGUtcmVwb3J0L3ByaWNldGFibGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/report/pricetable-report/pricetable-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PricetableReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricetableReportComponent", function() { return PricetableReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");









var PricetableReportComponent = /** @class */ (function () {
    function PricetableReportComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/price-table";
        this.title = "price table report";
        this.status = [];
        this.breadcrumbList = [];
        this.companies = [];
        this.cities = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
    }
    PricetableReportComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    PricetableReportComponent.prototype.get = function () {
        var _this = this;
        if (!this.filter.company_id)
            return;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    PricetableReportComponent.prototype.loadCompanies = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies())
            this.companies = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].companies();
        else
            this.service.get('companies', { paging: '0' }).subscribe(function (res) {
                _this.companies = res;
            });
    };
    PricetableReportComponent.prototype.loadCities = function () {
        var _this = this;
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].cities())
            this.cities = _helpers_autoloader__WEBPACK_IMPORTED_MODULE_8__["Autoloader"].cities();
        else
            this.service.get('cities', { paging: '0' }).subscribe(function (res) {
                _this.cities = res;
            });
    };
    PricetableReportComponent.prototype.ngOnInit = function () {
        this.loadCompanies();
        this.loadCities();
        this.initBreadCrumb();
    };
    PricetableReportComponent.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    PricetableReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricetable-report',
            template: __webpack_require__(/*! ./pricetable-report.component.html */ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.html"),
            styles: [__webpack_require__(/*! ./pricetable-report.component.scss */ "./src/app/admin/components/report/pricetable-report/pricetable-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PricetableReportComponent);
    return PricetableReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/report-header/report-header.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/report/report-header/report-header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"w3-block w3-round\" style=\"border: 2px dashed gray;padding: 5px\" >\n  <table class=\"w3-table\">\n      <tr style=\"text-align: right\" >\n        <td  style=\"text-align: right\" >\n            <b>{{ company.name }}</b> <br>\n            {{ company.address }} <br>\n            {{ company.city? company.city.name : '' }} <br>\n            {{ company.area? company.area.name : '' }} <br>\n            Tel: {{ company.phone }} <br>\n        </td>\n          <td style=\"width: 100px\" >\n              <img src=\"/assets/img/logo.png\" width=\"100px\" >\n          </td>\n      </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/report-header/report-header.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/report/report-header/report-header.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC1oZWFkZXIvcmVwb3J0LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/report/report-header/report-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/components/report/report-header/report-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHeaderComponent", function() { return ReportHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_autoloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/autoloader */ "./src/app/admin/helpers/autoloader.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");




var ReportHeaderComponent = /** @class */ (function () {
    function ReportHeaderComponent(service) {
        this.service = service;
        this.company = {};
        this.companies = [];
    }
    ReportHeaderComponent.prototype.ngOnInit = function () {
        if (_helpers_autoloader__WEBPACK_IMPORTED_MODULE_2__["Autoloader"].companies())
            this.companyCallback(_helpers_autoloader__WEBPACK_IMPORTED_MODULE_2__["Autoloader"].companies());
        else
            this.loadCompanies();
    };
    ReportHeaderComponent.prototype.companyCallback = function (res) {
        var _this = this;
        res.forEach(function (element) {
            if (element.id == 1) {
                _this.company = element;
            }
        });
    };
    ReportHeaderComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('companies', { paging: '0' }).subscribe(function (res) {
            _this.companyCallback(res);
        });
    };
    ReportHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-header',
            template: __webpack_require__(/*! ./report-header.component.html */ "./src/app/admin/components/report/report-header/report-header.component.html"),
            styles: [__webpack_require__(/*! ./report-header.component.scss */ "./src/app/admin/components/report/report-header/report-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ReportHeaderComponent);
    return ReportHeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/report-options/report-options.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/report-options/report-options.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n  <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n    <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"options\" | trans }}</div>\n      <div class=\"custom-panel-body\"  >\n        <button mat-raised-button class=\"w3-indigo\" style=\"margin: 5px\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n\n        <button mat-raised-button class=\"w3-green\" style=\"margin: 5px\" (click)=\"excel()\" >{{ \"excel\" | trans }}</button>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/report-options/report-options.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/report/report-options/report-options.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC1vcHRpb25zL3JlcG9ydC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/report/report-options/report-options.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/report/report-options/report-options.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReportOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportOptionsComponent", function() { return ReportOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");



var ReportOptionsComponent = /** @class */ (function () {
    function ReportOptionsComponent() {
        this.doc = document;
    }
    ReportOptionsComponent.prototype.ngOnInit = function () {
    };
    ReportOptionsComponent.prototype.print = function () {
        _shared_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].print();
    };
    ReportOptionsComponent.prototype.excel = function () {
        this.doc.exportExcel();
    };
    ReportOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-options',
            template: __webpack_require__(/*! ./report-options.component.html */ "./src/app/admin/components/report/report-options/report-options.component.html"),
            styles: [__webpack_require__(/*! ./report-options.component.scss */ "./src/app/admin/components/report/report-options/report-options.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportOptionsComponent);
    return ReportOptionsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/report/store-transaction/store-transaction.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/store-transaction/store-transaction.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n\n<div class=\" safe-box w3-white w3-display-container w3-round w3-input\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n        <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"enter courier sheet code\" | trans }}</div>\n          <div class=\"custom-panel-body row\"  >\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"store\" | trans }}</label>\n              <br>\n              <select\n              class=\"form-control input-sm w3-block\"\n              (change)=\"get()\"\n              style=\"border-radius: 8px;\"\n                [(ngModel)]=\"filter.store_id\" >\n                <option value=\"\">{{ \"select all\" | trans }}</option>\n                <option *ngFor=\"let item of stores\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date from\" | trans }} </label>\n              <br>\n              <input\n              (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_from\" >\n            </div>\n\n            <div class=\"col-lg-4\">\n              <label>{{ \"date to\" | trans }} </label>\n              <br>\n              <input\n                (change)=\"get()\"\n                type=\"date\" class=\"form-control input-sm w3-round\"\n                [(ngModel)]=\"filter.date_to\" >\n            </div>\n\n\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"options\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n          <button mat-raised-button class=\"w3-indigo\" (click)=\"print()\" >{{ \"print\" | trans }}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <div class=\"w3-block \" style=\"padding: 0px!important\" >\n\n    <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n      <div class=\"custom-panel-title w3-light-gray w3-round\" >{{ \"store transactions\" | trans }}</div>\n        <div class=\"custom-panel-body\"  >\n\n          <div class=\"data\" [innerHTML]=\"html\"  >\n\n          </div>\n\n\n        </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/report/store-transaction/store-transaction.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/report/store-transaction/store-transaction.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table th, table td {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvc3RvcmUtdHJhbnNhY3Rpb24vQzpcXFVzZXJzXFxlbGhhclxcRG93bmxvYWRzXFx1c2YtZnJvbnQtbWFpblxcdXNmLWZyb250LW1haW4vc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxyZXBvcnRcXHN0b3JlLXRyYW5zYWN0aW9uXFxzdG9yZS10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvc3RvcmUtdHJhbnNhY3Rpb24vc3RvcmUtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yZXBvcnQvc3RvcmUtdHJhbnNhY3Rpb24vc3RvcmUtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4iLCJ0YWJsZSB0aCwgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/report/store-transaction/store-transaction.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/report/store-transaction/store-transaction.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StoreTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreTransactionComponent", function() { return StoreTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var StoreTransactionComponent = /** @class */ (function () {
    function StoreTransactionComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.baseApiUrl = "report/store-transactions";
        this.title = "store transactions";
        this.status = [];
        this.breadcrumbList = [];
        this.stores = [];
        this.filter = {};
        this.collectedStatus = {};
        this.selectedAwb = new angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.$ = $;
        this.showSaveBtn = false;
    }
    StoreTransactionComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    StoreTransactionComponent.prototype.get = function () {
        var _this = this;
        if (!this.filter.store_id)
            return;
        this.service.loadHtml(this.baseApiUrl, this.filter).subscribe(function (res) {
            _this.html = res;
        });
    };
    StoreTransactionComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.service.get('stores', { paging: '0' }).subscribe(function (res) {
            _this.stores = res;
        });
    };
    StoreTransactionComponent.prototype.ngOnInit = function () {
        this.loadCompanies();
        this.initBreadCrumb();
    };
    StoreTransactionComponent.prototype.print = function () {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/" + this.baseApiUrl + "?api_token=" + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken() + "&" + this.$.param(this.filter);
        src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].openWindow(url);
    };
    StoreTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-transaction',
            template: __webpack_require__(/*! ./store-transaction.component.html */ "./src/app/admin/components/report/store-transaction/store-transaction.component.html"),
            styles: [__webpack_require__(/*! ./store-transaction.component.scss */ "./src/app/admin/components/report/store-transaction/store-transaction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StoreTransactionComponent);
    return StoreTransactionComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/website/about-us/about-us.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/website/about-us/about-us.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n<!-- The toolbar will be rendered in this container. -->\n<div id=\"toolbar-container\" ></div>\n\n<!-- This container will become the editable. -->\n<textarea name=\"editor1\" id=\"editor1\" [innerHTML]=\"getHtml(html)\" >\n    <p>This is the initial editor content.</p>\n</textarea>\n\n\n<br>\n<button\nmat-raised-button\n[disabled]=\"isSubmit\"\n(click)=\"save()\"\nclass=\"btn w3-indigo\" >\n  <i *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\"></i>\n  <i *ngIf=\"!isSubmit\" class=\"\">{{ \"save\" | trans }}</i>\n</button>\n"

/***/ }),

/***/ "./src/app/admin/components/website/about-us/about-us.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/website/about-us/about-us.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvd2Vic2l0ZS9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/website/about-us/about-us.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/website/about-us/about-us.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.breadcrumbList = [];
        this.title = "about us";
        this.doc = document;
        this.isSubmit = false;
        this.$ = $;
        this.title = "about us";
        this.initBreadCrumb();
    }
    AboutUsComponent.prototype.getHtml = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    AboutUsComponent.prototype.ngOnInit = function () {
        this.initBreadCrumb();
        this.load();
    };
    AboutUsComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    AboutUsComponent.prototype.initEditor = function () {
        this.doc.CKEDITOR.replace('editor1');
    };
    AboutUsComponent.prototype.load = function () {
        var _this = this;
        var data = {
            id: 1
        };
        this.service.loadHtml('website/get', data).subscribe(function (res) {
            _this.$('#editor1').html(res);
            _this.html = res;
            setTimeout(function () {
                _this.initEditor();
            }, 500);
        });
    };
    AboutUsComponent.prototype.save = function () {
        var _this = this;
        var data = {
            id: 1,
            value: this.doc.CKEDITOR.instances.editor1.getData()
        };
        this.isSubmit = true;
        this.service.store('website/update', data).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmit = false;
        });
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/admin/components/website/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/admin/components/website/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/website/our-services/our-services.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/website/our-services/our-services.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\" ></app-breadcrumb>\n<br>\n<!-- The toolbar will be rendered in this container. -->\n<div id=\"toolbar-container\"></div>\n\n<!-- This container will become the editable. -->\n<textarea name=\"editor1\" id=\"editor1\" [innerHTML]=\"html\" >\n  <p>This is the initial editor content.</p>\n</textarea>\n\n\n<br>\n<button\nmat-raised-button\n[disabled]=\"isSubmit\"\n(click)=\"save()\"\nclass=\"btn w3-indigo\" >\n  <i *ngIf=\"isSubmit\" class=\"fa fa-spin fa-spinner\"></i>\n  <i *ngIf=\"!isSubmit\" class=\"\">{{ \"save\" | trans }}</i>\n</button>\n"

/***/ }),

/***/ "./src/app/admin/components/website/our-services/our-services.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/website/our-services/our-services.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvd2Vic2l0ZS9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/website/our-services/our-services.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/website/our-services/our-services.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/global.service */ "./src/app/shared/services/global.service.ts");




var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent(service) {
        this.service = service;
        this.breadcrumbList = [];
        this.title = "out services";
        this.doc = document;
        this.isSubmit = false;
        this.$ = $;
        this.id = 2;
        this.initBreadCrumb();
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initBreadCrumb();
        this.load();
        setTimeout(function () {
            _this.initEditor();
        }, 500);
    };
    OurServicesComponent.prototype.initBreadCrumb = function () {
        this.breadcrumbList = [
            { name: 'dashboard', url: '/' },
            { name: this.title, url: '#', active: true },
        ];
    };
    OurServicesComponent.prototype.initEditor = function () {
        this.doc.CKEDITOR.replace('editor1');
    };
    OurServicesComponent.prototype.load = function () {
        var _this = this;
        var data = {
            id: this.id
        };
        this.service.loadHtml('website/get', data).subscribe(function (res) {
            _this.$('#editor').html(res);
            _this.html = res;
        });
    };
    OurServicesComponent.prototype.save = function () {
        var _this = this;
        this.$('.ck-widget__type-around').remove();
        var data = {
            id: this.id,
            value: this.doc.CKEDITOR.instances.editor1.getData()
        };
        this.isSubmit = true;
        this.service.store('website/update', data).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].success(res.message);
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(res.message);
            }
            _this.isSubmit = false;
        });
    };
    OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/admin/components/website/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/admin/components/website/our-services/our-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ }),

/***/ "./src/app/settings/awb-status-code.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/awb-status-code.ts ***!
  \*********************************************/
/*! exports provided: AwbStatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwbStatusCode", function() { return AwbStatusCode; });
var AwbStatusCode;
(function (AwbStatusCode) {
    AwbStatusCode[AwbStatusCode["PREPARE"] = 1] = "PREPARE";
    AwbStatusCode[AwbStatusCode["DELIVERED"] = 2] = "DELIVERED";
    AwbStatusCode[AwbStatusCode["RETURN_WITH_CHARGE"] = 3] = "RETURN_WITH_CHARGE";
    AwbStatusCode[AwbStatusCode["RETURN_WITHOUT_CHARGE"] = 4] = "RETURN_WITHOUT_CHARGE";
    AwbStatusCode[AwbStatusCode["CLOSED"] = 5] = "CLOSED";
    AwbStatusCode[AwbStatusCode["OUT_FOR_DELIVERY"] = 6] = "OUT_FOR_DELIVERY";
    AwbStatusCode[AwbStatusCode["COLLECTED"] = 7] = "COLLECTED";
    AwbStatusCode[AwbStatusCode["PAID_TO_CUSTOMER"] = 8] = "PAID_TO_CUSTOMER";
})(AwbStatusCode || (AwbStatusCode = {}));


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map