(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app-ajs/phone-detail/phone-detail.template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app-ajs/phone-detail/phone-detail.template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"phone-images\">\n  <img ng-src=\"{{img}}\" class=\"phone\"\n      ng-class=\"{selected: img === $ctrl.mainImageUrl}\"\n      ng-repeat=\"img in $ctrl.phone.images\" />\n</div>\n\n<h1>{{$ctrl.phone.name}}</h1>\n\n<p>{{$ctrl.phone.description}}</p>\n\n<ul class=\"phone-thumbs\">\n  <li ng-repeat=\"img in $ctrl.phone.images\">\n    <img ng-src=\"{{img}}\" ng-click=\"$ctrl.setImage(img)\" />\n  </li>\n</ul>\n\n<ul class=\"specs\">\n  <li>\n    <span>Availability and Networks</span>\n    <dl>\n      <dt>Availability</dt>\n      <dd ng-repeat=\"availability in $ctrl.phone.availability\">{{availability}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Battery</span>\n    <dl>\n      <dt>Type</dt>\n      <dd>{{$ctrl.phone.battery.type}}</dd>\n      <dt>Talk Time</dt>\n      <dd>{{$ctrl.phone.battery.talkTime}}</dd>\n      <dt>Standby time (max)</dt>\n      <dd>{{$ctrl.phone.battery.standbyTime}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Storage and Memory</span>\n    <dl>\n      <dt>RAM</dt>\n      <dd>{{$ctrl.phone.storage.ram}}</dd>\n      <dt>Internal Storage</dt>\n      <dd>{{$ctrl.phone.storage.flash}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Connectivity</span>\n    <dl>\n      <dt>Network Support</dt>\n      <dd>{{$ctrl.phone.connectivity.cell}}</dd>\n      <dt>WiFi</dt>\n      <dd>{{$ctrl.phone.connectivity.wifi}}</dd>\n      <dt>Bluetooth</dt>\n      <dd>{{$ctrl.phone.connectivity.bluetooth}}</dd>\n      <dt>Infrared</dt>\n      <dd>{{$ctrl.phone.connectivity.infrared | checkmark}}</dd>\n      <dt>GPS</dt>\n      <dd>{{$ctrl.phone.connectivity.gps | checkmark}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Android</span>\n    <dl>\n      <dt>OS Version</dt>\n      <dd>{{$ctrl.phone.android.os}}</dd>\n      <dt>UI</dt>\n      <dd>{{$ctrl.phone.android.ui}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Size and Weight</span>\n    <dl>\n      <dt>Dimensions</dt>\n      <dd ng-repeat=\"dim in $ctrl.phone.sizeAndWeight.dimensions\">{{dim}}</dd>\n      <dt>Weight</dt>\n      <dd>{{$ctrl.phone.sizeAndWeight.weight}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Display</span>\n    <dl>\n      <dt>Screen size</dt>\n      <dd>{{$ctrl.phone.display.screenSize}}</dd>\n      <dt>Screen resolution</dt>\n      <dd>{{$ctrl.phone.display.screenResolution}}</dd>\n      <dt>Touch screen</dt>\n      <dd>{{$ctrl.phone.display.touchScreen | checkmark}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Hardware</span>\n    <dl>\n      <dt>CPU</dt>\n      <dd>{{$ctrl.phone.hardware.cpu}}</dd>\n      <dt>USB</dt>\n      <dd>{{$ctrl.phone.hardware.usb}}</dd>\n      <dt>Audio / headphone jack</dt>\n      <dd>{{$ctrl.phone.hardware.audioJack}}</dd>\n      <dt>FM Radio</dt>\n      <dd>{{$ctrl.phone.hardware.fmRadio | checkmark}}</dd>\n      <dt>Accelerometer</dt>\n      <dd>{{$ctrl.phone.hardware.accelerometer | checkmark}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Camera</span>\n    <dl>\n      <dt>Primary</dt>\n      <dd>{{$ctrl.phone.camera.primary}}</dd>\n      <dt>Features</dt>\n      <dd>{{$ctrl.phone.camera.features.join(', ')}}</dd>\n    </dl>\n  </li>\n  <li>\n    <span>Additional Features</span>\n    <dd>{{$ctrl.phone.additionalFeatures}}</dd>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app-ajs/phone-list/phone-list.template.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app-ajs/phone-list/phone-list.template.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <!--Sidebar content-->\n\n      <p>\n        Search:\n        <input ng-model=\"$ctrl.query\" />\n      </p>\n\n      <p>\n        Sort by:\n        <select ng-model=\"$ctrl.orderProp\">\n          <option value=\"name\">Alphabetical</option>\n          <option value=\"age\">Newest</option>\n        </select>\n      </p>\n\n    </div>\n    <div class=\"col-md-10\">\n      <!--Body content-->\n\n      <ul class=\"phones\">\n        <li ng-repeat=\"phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp\"\n            class=\"thumbnail phone-list-item\">\n          <a href=\"#!/phones/{{phone.id}}\" class=\"thumb\">\n            <img ng-src=\"{{phone.imageUrl}}\" alt=\"{{phone.name}}\" />\n          </a>\n          <a href=\"#!/phones/{{phone.id}}\">{{phone.name}}</a>\n          <p>{{phone.snippet}}</p>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/phonecat-app.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/phonecat-app.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"view-container\">\n  <div ng-view class=\"view-frame\"></div>\n</div>\n<show-details></show-details>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/show-details.comonent/show-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/show-details.comonent/show-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Show Details</h1>\n"

/***/ }),

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

/***/ "./src/app-ajs/app.config.ts":
/*!***********************************!*\
  !*** ./src/app-ajs/app.config.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


angular__WEBPACK_IMPORTED_MODULE_0__["module"]('phonecatApp').
    config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/phones', {
            template: '<phone-list></phone-list>'
        }).
            when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
            otherwise('/phones');
    }
]);


/***/ }),

/***/ "./src/app-ajs/app.module.ajs.ts":
/*!***************************************!*\
  !*** ./src/app-ajs/app.module.ajs.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ "./src/app-ajs/core/core.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_core_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phone_detail_phone_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-detail/phone-detail.module */ "./src/app-ajs/phone-detail/phone-detail.module.ts");
/* harmony import */ var _phone_detail_phone_detail_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phone_detail_phone_detail_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phone_list_phone_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-list/phone-list.module */ "./src/app-ajs/phone-list/phone-list.module.ts");
/* harmony import */ var _phone_list_phone_list_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phone_list_phone_list_module__WEBPACK_IMPORTED_MODULE_3__);





// Define the `phonecatApp` module
angular__WEBPACK_IMPORTED_MODULE_0__["module"]('phonecatApp', [
    'ngRoute',
    'core',
    'phoneDetail',
    'phoneList'
]);


/***/ }),

/***/ "./src/app-ajs/core/checkmark/checkmark.filter.ts":
/*!********************************************************!*\
  !*** ./src/app-ajs/core/checkmark/checkmark.filter.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('core').filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});


/***/ }),

/***/ "./src/app-ajs/core/core.module.ts":
/*!*****************************************!*\
  !*** ./src/app-ajs/core/core.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Define the `core` module
angular.module('core', ['core.phone']);


/***/ }),

/***/ "./src/app-ajs/core/index.ts":
/*!***********************************!*\
  !*** ./src/app-ajs/core/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone */ "./src/app-ajs/core/phone/index.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.module */ "./src/app-ajs/core/core.module.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkmark_checkmark_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkmark/checkmark.filter */ "./src/app-ajs/core/checkmark/checkmark.filter.ts");
/* harmony import */ var _checkmark_checkmark_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkmark_checkmark_filter__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./src/app-ajs/core/phone/index.ts":
/*!*****************************************!*\
  !*** ./src/app-ajs/core/phone/index.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.module */ "./src/app-ajs/core/phone/phone.module.ts");
/* harmony import */ var _phone_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phone_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.service */ "./src/app-ajs/core/phone/phone.service.ts");
/* harmony import */ var _phone_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_service__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/app-ajs/core/phone/phone.module.ts":
/*!************************************************!*\
  !*** ./src/app-ajs/core/phone/phone.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Define the `core.phone` module
angular.module('core.phone', ['ngResource']);


/***/ }),

/***/ "./src/app-ajs/core/phone/phone.service.ts":
/*!*************************************************!*\
  !*** ./src/app-ajs/core/phone/phone.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

angular.module('core.phone').factory('Phone', ['$resource', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray: true
            }
        });
    }
]);


/***/ }),

/***/ "./src/app-ajs/index.ts":
/*!******************************!*\
  !*** ./src/app-ajs/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/app-ajs/core/index.ts");
/* harmony import */ var _phone_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-list */ "./src/app-ajs/phone-list/index.ts");
/* harmony import */ var _phone_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-detail */ "./src/app-ajs/phone-detail/index.ts");
/* harmony import */ var _app_module_ajs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module.ajs */ "./src/app-ajs/app.module.ajs.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ "./src/app-ajs/app.config.ts");







/***/ }),

/***/ "./src/app-ajs/phone-detail/index.ts":
/*!*******************************************!*\
  !*** ./src/app-ajs/phone-detail/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_detail_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-detail.module */ "./src/app-ajs/phone-detail/phone-detail.module.ts");
/* harmony import */ var _phone_detail_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phone_detail_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phone_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-detail.component */ "./src/app-ajs/phone-detail/phone-detail.component.ts");
/* harmony import */ var _phone_detail_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_detail_component__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/app-ajs/phone-detail/phone-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app-ajs/phone-detail/phone-detail.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail').
    component('phoneDetail', {
    template: __webpack_require__(/*! raw-loader!./phone-detail.template.html */ "./node_modules/raw-loader/index.js!./src/app-ajs/phone-detail/phone-detail.template.html"),
    controller: ['$routeParams', 'Phone', function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                self.setImage(phone.images[0]);
            });
            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});


/***/ }),

/***/ "./src/app-ajs/phone-detail/phone-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app-ajs/phone-detail/phone-detail.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Define the `phoneDetail` module
angular.module('phoneDetail', [
    'ngRoute',
    'core.phone'
]);


/***/ }),

/***/ "./src/app-ajs/phone-list/index.ts":
/*!*****************************************!*\
  !*** ./src/app-ajs/phone-list/index.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-list.module */ "./src/app-ajs/phone-list/phone-list.module.ts");
/* harmony import */ var _phone_list_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phone_list_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phone_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-list.component */ "./src/app-ajs/phone-list/phone-list.component.ts");
/* harmony import */ var _phone_list_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_list_component__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/app-ajs/phone-list/phone-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app-ajs/phone-list/phone-list.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
    template: __webpack_require__(/*! raw-loader!./phone-list.template.html */ "./node_modules/raw-loader/index.js!./src/app-ajs/phone-list/phone-list.template.html"),
    controller: ['Phone',
        function PhoneListController(Phone) {
            this.phones = Phone.query();
            this.orderProp = 'age';
        }
    ]
});


/***/ }),

/***/ "./src/app-ajs/phone-list/phone-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app-ajs/phone-list/phone-list.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Define the `phoneList` module
angular.module('phoneList', ['core.phone']);


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
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/__ivy_ngcc__/fesm2015/static.js");
/* harmony import */ var _phonecat_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phonecat-app.component */ "./src/app/phonecat-app.component.ts");
/* harmony import */ var _show_details_comonent_show_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-details.comonent/show-details.component */ "./src/app/show-details.comonent/show-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["UpgradeModule"]
            ],
            declarations: [
                _phonecat_app_component__WEBPACK_IMPORTED_MODULE_3__["PhonecatAppComponent"],
                _show_details_comonent_show_details_component__WEBPACK_IMPORTED_MODULE_4__["ShowDetailsComponent"]
            ],
            bootstrap: [
                _phonecat_app_component__WEBPACK_IMPORTED_MODULE_3__["PhonecatAppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/phonecat-app.component.ts":
/*!*******************************************!*\
  !*** ./src/app/phonecat-app.component.ts ***!
  \*******************************************/
/*! exports provided: PhonecatAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonecatAppComponent", function() { return PhonecatAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonecatAppComponent = /** @class */ (function () {
    function PhonecatAppComponent() {
    }
    PhonecatAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phonecat-app',
            template: __webpack_require__(/*! raw-loader!./phonecat-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/phonecat-app.component.html")
        })
    ], PhonecatAppComponent);
    return PhonecatAppComponent;
}());



/***/ }),

/***/ "./src/app/show-details.comonent/show-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/show-details.comonent/show-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function() { return ShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowDetailsComponent = /** @class */ (function () {
    function ShowDetailsComponent() {
    }
    ShowDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-details',
            template: __webpack_require__(/*! raw-loader!./show-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/show-details.comonent/show-details.component.html")
        })
    ], ShowDetailsComponent);
    return ShowDetailsComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/upgrade/static */ "./node_modules/@angular/upgrade/__ivy_ngcc__/fesm2015/static.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-animate */ "./node_modules/angular-animate/index.js");
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_animate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-resource */ "./node_modules/angular-resource/index.js");
/* harmony import */ var angular_resource__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_resource__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-route */ "./node_modules/angular-route/index.js");
/* harmony import */ var angular_route__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_route__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_ajs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-ajs */ "./src/app-ajs/index.ts");



// Import these globally to bring in their @types




// Need to import NG 1.x module

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (platformRef) {
    var upgrade = platformRef.injector.get(_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__["UpgradeModule"]);
    upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    console.log("Boostrap done");
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/administrator/Angular 12/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map