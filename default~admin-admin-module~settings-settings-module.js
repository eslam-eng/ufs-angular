(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~settings-settings-module"],{

/***/ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-google-charts/fesm5/angular-google-charts.js ***!
  \***************************************************************************/
/*! exports provided: GoogleChartComponent, GoogleChartPackagesHelper, GoogleChartsModule, RawChartComponent, ScriptLoaderService, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartPackagesHelper", function() { return GoogleChartPackagesHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsModule", function() { return GoogleChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawChartComponent", function() { return RawChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GOOGLE_CHARTS_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return setupScriptLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CHART_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GOOGLE_API_KEY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHART_VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CHART_VERSION');
/** @type {?} */
var GOOGLE_API_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('GOOGLE_API_KEY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService(localeId, googleApiKey, chartVersion) {
        this.localeId = localeId;
        this.googleApiKey = googleApiKey;
        this.chartVersion = chartVersion;
        this.scriptSource = 'https://www.gstatic.com/charts/loader.js';
        this.onLoadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.initialize();
    }
    Object.defineProperty(ScriptLoaderService.prototype, "onReady", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.doneLoading) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }
            return this.onLoadSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScriptLoaderService.prototype, "doneLoading", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof google === 'undefined' || typeof google.charts === 'undefined') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScriptLoaderService.prototype, "isLoading", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.doneLoading) {
                return false;
            }
            /** @type {?} */
            var pageScripts = Array.from(document.getElementsByTagName('script'));
            /** @type {?} */
            var googleChartsScript = pageScripts.find((/**
             * @param {?} script
             * @return {?}
             */
            function (script) { return script.src === _this.scriptSource; }));
            return googleChartsScript !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} packages
     * @return {?}
     */
    ScriptLoaderService.prototype.loadChartPackages = /**
     * @param {?} packages
     * @return {?}
     */
    function (packages) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var config = {
                packages: packages,
                language: _this.localeId,
                mapsApiKey: _this.googleApiKey
            };
            google.charts.load(_this.chartVersion, config);
            google.charts.setOnLoadCallback((/**
             * @return {?}
             */
            function () {
                observer.next();
                observer.complete();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ScriptLoaderService.prototype.initialize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.doneLoading && !this.isLoading) {
            /** @type {?} */
            var script = this.createScriptElement();
            script.onload = (/**
             * @return {?}
             */
            function () {
                _this.onLoadSubject.next(true);
                _this.onLoadSubject.complete();
            });
            script.onerror = (/**
             * @return {?}
             */
            function () {
                console.error('Failed to load the google chart script!');
                _this.onLoadSubject.error('Failed to load the google chart script!');
                _this.onLoadSubject.complete();
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    ScriptLoaderService.prototype.createScriptElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scriptSource;
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
        return script;
    };
    ScriptLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    ScriptLoaderService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [GOOGLE_API_KEY,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [CHART_VERSION,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    return ScriptLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleChartPackagesHelper = /** @class */ (function () {
    function GoogleChartPackagesHelper() {
    }
    /**
     * @param {?} chartName
     * @return {?}
     */
    GoogleChartPackagesHelper.getPackageForChartName = /**
     * @param {?} chartName
     * @return {?}
     */
    function (chartName) {
        return GoogleChartPackagesHelper.ChartTypesToPackages[chartName];
    };
    GoogleChartPackagesHelper.ChartTypesToPackages = {
        AnnotationChart: 'annotationchart',
        AreaChart: 'corechart',
        Bar: 'bar',
        BarChart: 'corechart',
        BubbleChart: 'corechart',
        Calendar: 'calendar',
        CandlestickChart: 'corechart',
        ColumnChart: 'corechart',
        ComboChart: 'corechart',
        PieChart: 'corechart',
        Gantt: 'gantt',
        Gauge: 'gauge',
        GeoChart: 'geochart',
        Histogram: 'corechart',
        Line: 'line',
        LineChart: 'corechart',
        Map: 'map',
        OrgChart: 'orgchart',
        Sankey: 'sankey',
        Scatter: 'scatter',
        ScatterChart: 'corechart',
        SteppedAreaChart: 'corechart',
        Table: 'table',
        Timeline: 'timeline',
        TreeMap: 'treemap',
        WordTree: 'wordtree'
    };
    return GoogleChartPackagesHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RawChartComponent = /** @class */ (function () {
    function RawChartComponent(element, loaderService) {
        this.element = element;
        this.loaderService = loaderService;
        this.dynamicResize = false;
        this.firstRowIsData = false;
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseenter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseleave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    RawChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chartData == null) {
            throw new Error('Can\'t create a Google Chart without data!');
        }
        this.loaderService.onReady.subscribe((/**
         * @return {?}
         */
        function () {
            _this.createChart();
        }));
    };
    /**
     * @return {?}
     */
    RawChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.addResizeListener();
    };
    /**
     * @return {?}
     */
    RawChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.wrapper) {
            this.updateChart();
        }
    };
    /**
     * @return {?}
     */
    RawChartComponent.prototype.getChartElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.firstElementChild;
    };
    /**
     * @protected
     * @return {?}
     */
    RawChartComponent.prototype.createChart = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.loadNeededPackages().subscribe((/**
         * @return {?}
         */
        function () {
            _this.wrapper = new google.visualization.ChartWrapper();
            _this.updateChart();
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    RawChartComponent.prototype.loadNeededPackages = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.loaderService.loadChartPackages([GoogleChartPackagesHelper.getPackageForChartName(this.chartData.chartType)]);
    };
    /**
     * @protected
     * @return {?}
     */
    RawChartComponent.prototype.updateChart = /**
     * @protected
     * @return {?}
     */
    function () {
        // This check here is important to allow passing of a created dataTable as well as just an array
        if (!(this.chartData.dataTable instanceof google.visualization.DataTable)) {
            this.dataTable = google.visualization.arrayToDataTable((/** @type {?} */ (this.chartData.dataTable)), this.firstRowIsData);
        }
        else {
            this.dataTable = this.chartData.dataTable;
        }
        this.wrapper.setDataTable(this.dataTable);
        this.wrapper.setChartType(this.chartData.chartType);
        this.wrapper.setOptions(this.chartData.options);
        this.wrapper.setDataSourceUrl(this.chartData.dataSourceUrl);
        this.wrapper.setQuery(this.chartData.query);
        this.wrapper.setRefreshInterval(this.chartData.refreshInterval);
        this.wrapper.setView(this.chartData.view);
        this.removeChartEvents();
        this.registerChartEvents();
        if (this.formatter) {
            this.formatData(this.dataTable);
        }
        this.wrapper.draw(this.element.nativeElement);
    };
    /**
     * @protected
     * @param {?} dataTable
     * @return {?}
     */
    RawChartComponent.prototype.formatData = /**
     * @protected
     * @param {?} dataTable
     * @return {?}
     */
    function (dataTable) {
        if (this.formatter instanceof Array) {
            this.formatter.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                value.formatter.format(dataTable, value.colIndex);
            }));
        }
        else {
            for (var i = 0; i < dataTable.getNumberOfColumns(); i++) {
                this.formatter.format(dataTable, i);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    RawChartComponent.prototype.addResizeListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dynamicResize) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.ngOnChanges();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    RawChartComponent.prototype.removeChartEvents = /**
     * @private
     * @return {?}
     */
    function () {
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    /**
     * @private
     * @return {?}
     */
    RawChartComponent.prototype.registerChartEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerChartEvent(this.wrapper, 'ready', (/**
         * @return {?}
         */
        function () {
            _this.registerChartEvent(_this.wrapper.getChart(), 'onmouseover', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.mouseenter.emit(event); }));
            _this.registerChartEvent(_this.wrapper.getChart(), 'onmouseout', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.mouseleave.emit(event); }));
            _this.ready.emit('Chart Ready');
        }));
        this.registerChartEvent(this.wrapper, 'error', (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.error.emit(error); }));
        this.registerChartEvent(this.wrapper, 'select', (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selection = _this.wrapper.getChart().getSelection();
            _this.select.emit(selection);
        }));
    };
    /**
     * @private
     * @param {?} object
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    RawChartComponent.prototype.registerChartEvent = /**
     * @private
     * @param {?} object
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    function (object, eventName, callback) {
        google.visualization.events.addListener(object, eventName, callback);
    };
    RawChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'raw-chart',
                    template: '',
                    exportAs: 'raw-chart',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [':host { width: fit-content; display: block; }']
                }] }
    ];
    /** @nocollapse */
    RawChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: ScriptLoaderService }
    ]; };
    RawChartComponent.propDecorators = {
        chartData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        formatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dynamicResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        firstRowIsData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        mouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        mouseleave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return RawChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleChartComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GoogleChartComponent, _super);
    function GoogleChartComponent(element, loaderService) {
        var _this = _super.call(this, element, loaderService) || this;
        _this.roles = new Array();
        _this.width = undefined;
        _this.height = undefined;
        _this.options = {};
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.type == null) {
            throw new Error('Can\'t create a Google Chart without specifying a type!');
        }
        if (this.data == null) {
            throw new Error('Can\'t create a Google Chart without data!');
        }
        this.chartData = {
            chartType: this.type
        };
        this.loaderService.onReady.subscribe((/**
         * @return {?}
         */
        function () {
            _this.createChart();
        }));
    };
    /**
     * @return {?}
     */
    GoogleChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.wrapper) {
            this.chartData = {
                chartType: this.type,
                dataTable: this.getDataTable(),
                options: this.parseOptions()
            };
        }
        _super.prototype.ngOnChanges.call(this);
    };
    /**
     * @protected
     * @return {?}
     */
    GoogleChartComponent.prototype.parseOptions = /**
     * @protected
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ title: this.title, width: this.width, height: this.height }, this.options);
    };
    /**
     * @protected
     * @return {?}
     */
    GoogleChartComponent.prototype.createChart = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.loadNeededPackages().subscribe((/**
         * @return {?}
         */
        function () {
            _this.chartData = {
                chartType: _this.type,
                dataTable: _this.getDataTable(),
                options: _this.parseOptions()
            };
            _this.wrapper = new google.visualization.ChartWrapper();
            _this.updateChart();
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    GoogleChartComponent.prototype.getDataTable = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.columnNames) {
            /** @type {?} */
            var columns = this.parseRoles(this.columnNames);
            this.firstRowIsData = false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([columns], this.data);
        }
        else {
            this.firstRowIsData = true;
            return this.data;
        }
    };
    /**
     * @private
     * @param {?} columnNames
     * @return {?}
     */
    GoogleChartComponent.prototype.parseRoles = /**
     * @private
     * @param {?} columnNames
     * @return {?}
     */
    function (columnNames) {
        /** @type {?} */
        var columnNamesWithRoles = columnNames.slice();
        if (this.roles) {
            // Roles must be copied to avoid modifying the index everytime there's a change from ngOnChanges.
            /** @type {?} */
            var copyRoles_1 = this.roles.map((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return Object.assign({}, role); }));
            copyRoles_1.forEach((/**
             * @param {?} role
             * @return {?}
             */
            function (role) {
                var e_1, _a;
                /** @type {?} */
                var roleData = {
                    type: role.type,
                    role: role.role
                };
                if (role.p) {
                    roleData.p = role.p;
                }
                if (role.index != null) {
                    columnNamesWithRoles.splice(role.index + 1, 0, roleData);
                    try {
                        for (var copyRoles_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyRoles_1), copyRoles_2_1 = copyRoles_2.next(); !copyRoles_2_1.done; copyRoles_2_1 = copyRoles_2.next()) {
                            var otherRole = copyRoles_2_1.value;
                            if (otherRole === role) {
                                continue;
                            }
                            if (otherRole.index > role.index) {
                                otherRole.index++;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (copyRoles_2_1 && !copyRoles_2_1.done && (_a = copyRoles_2.return)) _a.call(copyRoles_2);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    columnNamesWithRoles.push(roleData);
                }
            }));
        }
        return columnNamesWithRoles;
    };
    GoogleChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'google-chart',
                    template: '',
                    exportAs: 'google-chart',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [':host { width: fit-content; display: block; }']
                }] }
    ];
    /** @nocollapse */
    GoogleChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: ScriptLoaderService }
    ]; };
    GoogleChartComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        columnNames: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        roles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return GoogleChartComponent;
}(RawChartComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GOOGLE_CHARTS_PROVIDERS = [
    {
        provide: ScriptLoaderService,
        useFactory: setupScriptLoaderService,
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], GOOGLE_API_KEY, CHART_VERSION]
    }
];
var GoogleChartsModule = /** @class */ (function () {
    function GoogleChartsModule() {
    }
    /**
     * @param {?=} googleApiKey
     * @param {?=} chartVersion
     * @return {?}
     */
    GoogleChartsModule.forRoot = /**
     * @param {?=} googleApiKey
     * @param {?=} chartVersion
     * @return {?}
     */
    function (googleApiKey, chartVersion) {
        return {
            ngModule: GoogleChartsModule,
            providers: [
                GOOGLE_CHARTS_PROVIDERS,
                { provide: GOOGLE_API_KEY, useValue: googleApiKey ? googleApiKey : '' },
                { provide: CHART_VERSION, useValue: chartVersion ? chartVersion : '46' }
            ]
        };
    };
    GoogleChartsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    providers: [ScriptLoaderService],
                    declarations: [GoogleChartComponent, RawChartComponent],
                    exports: [GoogleChartComponent, RawChartComponent]
                },] }
    ];
    return GoogleChartsModule;
}());
/**
 * @param {?} localeId
 * @param {?} googleApiKey
 * @param {?} chartVersion
 * @return {?}
 */
function setupScriptLoaderService(localeId, googleApiKey, chartVersion) {
    return new ScriptLoaderService(localeId, googleApiKey, chartVersion);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-google-charts.js.map


/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~settings-settings-module.js.map