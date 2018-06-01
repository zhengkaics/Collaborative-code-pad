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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_3__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_7__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [{
                    provide: "data",
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");



var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"]
    },
    {
        path: "problems/:id",
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"]
    },
    {
        path: "**",
        redirectTo: "problems",
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">{{NVBtitle}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n            {{username}}\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">My Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">My Favorites</a>\n            <a class=\"dropdown-item\" href=\"#\">My Submission</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">log out</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n        <form class=\"navbar-form\">\n          <button type=\"button\" class=\"btn btn-primary\">Sign in</button>\n        </form>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Problem\" aria-label=\"Search\">\n      </form>\n    </div>\n  </nav>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.NVBtitle = "ZKCodePad";
        this.username = "zhengkai";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\"\n             name=\"problemName\" required placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\"\n                name=\"problemDesc\" required placeholder=\"Enter Problem Desciiption\" [(ngModel)]=\"newProblem.desc\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select type=\"text\" class=\"form-control\" id=\"difficulty\"\n              name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: "",
    desc: "",
    difficulty: "Easy"
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data) {
        this.data = data;
        this.difficulties = ["Easy", "Medium", "Hard", "Super"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}. {{problem.name}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\"><!--ngFor遍历数组每个成员 -->\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLowerCase()}}\">{{problem.difficulty}}</span>\n      <strong class=\"title\">{{problem.id}},{{problem.name}}</strong>\n\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data) {
        this.data = data;
        this.problems = [];
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscripttionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
        // this.problems=this.data.getProblems()
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.problemSource = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-type': 'application/json'
            })
        };
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get("api/v1/problems")
            .toPromise()
            .then(function (res) {
            _this.problemSource.next(res);
        }).catch(this.handleError);
        return this.problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        return this.http.post('/api/v1/problems', problem, this.httpOptions)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/weizhengkai/Desktop/2018jobs/projects/CollCodePad/week2/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map