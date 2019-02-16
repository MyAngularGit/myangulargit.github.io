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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'BBS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registered_user_registered_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registered-user/registered-user.component */ "./src/app/registered-user/registered-user.component.ts");





//import { AppRoutingModule } from './app-routing.module';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _registered_user_registered_user_component__WEBPACK_IMPORTED_MODULE_9__["RegisteredUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
                    },
                    {
                        path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
                    },
                    {
                        path: 'registered-user',
                        component: _registered_user_registered_user_component__WEBPACK_IMPORTED_MODULE_9__["RegisteredUserComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form></form>\n<div>\n  <label>Branch Name</label>\n  <input type=\"text\" id=\"txtBranchName\" [(ngModel)]=\"branch.BranchName\">\n</div>\n<div>\n  <label>Address</label>\n  <input type=\"text\" id=\"txtAddress\" [(ngModel)]=\"branch.Address\">\n</div>\n<div>\n  <label>Email</label>\n  <input type=\"text\" id=\"txtEmail\" [(ngModel)]=\"branch.Email\">\n</div>\n<div>\n  <button type=\"submit\" (click)=\"saveBranchMasterDetails()\">Save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/branch */ "./src/app/models/branch.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.branch = new _models_branch__WEBPACK_IMPORTED_MODULE_4__["Branch"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.saveBranchMasterDetails = function () {
        event.preventDefault();
        this.loginService.saveBranchMasterDetails(this.branch.BranchName, this.branch.Address, this.branch.Email)
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                alert("Saved Successfully");
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" id=\"form2\">\n  <div class=\"main-container\">\n    <div class=\"main-content\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n                <div class=\"login-container\">\n                    <div class=\"center\">\n                        <h1>\n                            <i class=\"ace-icon fa fa-leaf green\"></i><span class=\"red\">Badavara Bandhu</span> <span class=\"white\"\n                                id=\"id-text2\">Scheme</span>\n                        </h1>\n                        <!-- <h4 class=\"blue\" id=\"id-company-text\">\n                            &copy; Company Name</h4> -->\n                    </div>\n                    <div class=\"space-6\">\n                    </div>\n                    <div class=\"position-relative\">\n                        <div id=\"login-box\" class=\"login-box visible widget-box no-border\">\n                            <div class=\"widget-body\">\n                                <div class=\"widget-main\">\n                                    <h4 class=\"header blue lighter bigger\">\n                                        <i class=\"ace-icon fa fa-coffee green\"></i>Please Enter Your Information\n                                    </h4>\n                                    <h4 id=\"ErrorBlock\" class=\"header blue lighter bigger\">\n                                        <i class=\"ace-icon fa fa-bomb red\"></i><span id=\"lblErrMsg\">Invalid username or password</span>\n                                    </h4>\n                                    <div class=\"space-6\">\n                                    </div>\n                                    <form>\n                                    <fieldset>\n                                        <label class=\"block clearfix\">\n                                            <span class=\"block input-icon input-icon-right\">\n                                                <input name=\"txtUserName\" type=\"text\" value=\"admin\" id=\"txtUserName\" [(ngModel)]=\"user.LoginName\" class=\"form-control\" placeholder=\"Username\" />\n                                                <i class=\"ace-icon fa fa-user\"></i></span>\n                                        </label>\n                                        <label class=\"block clearfix\">\n                                            <span class=\"block input-icon input-icon-right\">\n                                                <input name=\"txtPassword\" type=\"password\" id=\"txtPassword\" [(ngModel)]=\"user.Password\" class=\"form-control\" placeholder=\"Password\" />\n                                                <i class=\"ace-icon fa fa-lock\"></i></span>\n                                        </label>\n                                        <div class=\"space\">\n                                        </div>\n                                        <div class=\"clearfix\">\n                                            <label class=\"inline\">\n                                                <input type=\"checkbox\" class=\"ace\" />\n                                                <span class=\"lbl\">Remember Me</span>\n                                            </label>\n                                            <input type=\"submit\" id=\"btnLogin\" value=\"Login\" class=\"width-35 pull-right btn btn-sm btn-primary\" (click)=\"authenticateUser()\">\n                                        </div>\n                                        <div class=\"space-4\">\n                                        </div>\n                                    </fieldset>\n                                    </form>\n                                </div>\n                                <!-- /.widget-main -->\n                                <div class=\"toolbar clearfix\">\n                                    <div>\n                                        <a href=\"#\" data-target=\"#forgot-box\" class=\"forgot-password-link\"><i class=\"ace-icon fa fa-arrow-left\"></i>I forgot my password </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.widget-body -->\n                        </div>\n                        <!-- /.login-box -->\n                        <div>\n                            {{user | json}}\n                        </div>\n                        <div id=\"forgot-box\" class=\"forgot-box widget-box no-border\">\n                            <div class=\"widget-body\">\n                                <div class=\"widget-main\">\n                                    <h4 class=\"header red lighter bigger\">\n                                        <i class=\"ace-icon fa fa-key\"></i>Retrieve Password\n                                    </h4>\n                                    <div class=\"space-6\">\n                                    </div>\n                                    <p>\n                                        Enter your email and to receive instructions\n                                    </p>\n                                    <form>\n                                    <fieldset>\n                                        <label class=\"block clearfix\">\n                                            <span class=\"block input-icon input-icon-right\">\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" />\n                                                <i class=\"ace-icon fa fa-envelope\"></i></span>\n                                        </label>\n                                        <div class=\"clearfix\">\n                                            <!-- <button type=\"button\" class=\"width-35 pull-right btn btn-sm btn-danger\">\n                                                <i class=\"ace-icon fa fa-lightbulb-o\"></i><span class=\"bigger-110\">Send Me! </span>\n                                            </button> -->\n                                            <input type=\"submit\" id=\"btnRegister\" value=\"Register\" class=\"width-35 pull-right btn btn-sm btn-primary\" (click)=\"RegisterUser()\">\n                                        </div>\n                                    </fieldset>\n                                    </form>\n                                </div>\n                                <!-- /.widget-main -->\n                                <div class=\"toolbar center\">\n                                    <a href=\"#\" data-target=\"#login-box\" class=\"back-to-login-link\">Back to login \n                                    <i class=\"ace-icon fa fa-arrow-right\"></i></a>\n                                </div>\n                            </div>\n                            <!-- /.widget-body -->\n                        </div>\n                        <!-- /.forgot-box -->\n                    </div>\n                    <!-- /.position-relative -->\n                    <div class=\"navbar-fixed-top align-right\">\n                        <br />\n                        &nbsp; <a id=\"btn-login-dark\" href=\"#\">Dark</a> &nbsp; <span class=\"blue\">/</span> &nbsp; \n                        <a id=\"btn-login-blur\" href=\"#\">Blur</a> &nbsp; <span class=\"blue\">/</span> &nbsp; <a id=\"btn-login-light\" href=\"#\">Light</a> &nbsp; &nbsp; &nbsp;\n                    </div>\n                </div>\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </div>\n    <!-- /.main-content -->\n</div>\n<!-- /.main-container -->\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.js */ "./src/app/login/login.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authenticateUser = function () {
        var _this = this;
        event.preventDefault();
        this.loginService.authenticateUser(this.user.LoginName, this.user.Password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { })).subscribe(function (result) {
            _this.router.navigate(["home"]);
        });
        this.router.navigate(["home"]);
        //console.log("test");
    };
    LoginComponent.prototype.RegisterUser = function () {
        event.preventDefault();
        this.router.navigate(["registered-user"]);
        console.log("text");
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            providers: [_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.js":
/*!********************************!*\
  !*** ./src/app/login/login.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function($) {
   $(document).on('click', '.toolbar a[data-target]', function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      $('.widget-box.visible').removeClass('visible');//hide others
      $(target).addClass('visible');//show target
     });

     $('#btn-login-dark').on('click', function(e) {
      $('body').attr('class', 'login-layout');
      $('#id-text2').attr('class', 'white');
      $('#id-company-text').attr('class', 'blue');
      
      e.preventDefault();
     });

     $('#btn-login-light').on('click', function(e) {
      $('body').attr('class', 'login-layout light-login');
      $('#id-text2').attr('class', 'grey');
      $('#id-company-text').attr('class', 'blue');
      
      e.preventDefault();
     });

     $('#btn-login-blur').on('click', function(e) {
      $('body').attr('class', 'login-layout blur-login');
      $('#id-text2').attr('class', 'white');
      $('#id-company-text').attr('class', 'light-blue');
      
      e.preventDefault();
     });

   });
   
   
   
   //you don't need this, just used for changing background
   jQuery(function($) {
    
    
   });

/***/ }),

/***/ "./src/app/models/branch.ts":
/*!**********************************!*\
  !*** ./src/app/models/branch.ts ***!
  \**********************************/
/*! exports provided: Branch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branch", function() { return Branch; });
var Branch = /** @class */ (function () {
    function Branch() {
    }
    return Branch;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, MyObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyObj", function() { return MyObj; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var MyObj = /** @class */ (function () {
    function MyObj() {
    }
    return MyObj;
}());



/***/ }),

/***/ "./src/app/registered-user/registered-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/registered-user/registered-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyZWQtdXNlci9yZWdpc3RlcmVkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registered-user/registered-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/registered-user/registered-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" id=\"form2\">\n  <div class=\"main-container\">\n    <div class=\"main-content\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n                <div class=\"login-container\">\n                    <div class=\"center\">\n                        <h1>\n                            <i class=\"ace-icon fa fa-leaf green\"></i><span class=\"red\">Thank you for registration</span> \n                        </h1>\n                        <!-- <h4 class=\"blue\" id=\"id-company-text\">\n                            &copy; Company Name</h4> -->\n                    </div>\n                    <div class=\"space-6\">\n                    </div>\n                    <div class=\"position-relative\">\n                        <div id=\"login-box\" class=\"login-box visible widget-box no-border\">\n                            <div class=\"widget-body\">\n                                <div class=\"widget-main\">\n                             \n                                    <h4 id=\"ErrorBlock\" class=\"header blue lighter bigger\">\n                                    <span id=\"lblErrMsg\">Are you a</span>\n                                    </h4>\n                                    <div class=\"space-6\">\n                                    </div>\n                                    <form>\n                                    <fieldset>\n                                        <!-- <label class=\"block clearfix\">\n                                            <span class=\"block input-icon input-icon-right\">\n                                                <input name=\"txtUserName\" type=\"text\" value=\"admin\" id=\"txtUserName\" [(ngModel)]=\"user.LoginName\" class=\"form-control\" placeholder=\"Username\" />\n                                                <i class=\"ace-icon fa fa-user\"></i></span> -->\n                                        <!-- </label> -->\n                                        <a href=\"#\"  class=\" green\">BUYER </a> <span>|</span>\n                                        <a href=\"#\"  class=\" green\">SELLER </a> <span>|</span>\n                                        <a href=\"#\"  class=\" green\">PROMOTER </a> <span>|</span>\n                                        <a href=\"#\"  class=\" green\">Professional </a> <span>|</span>\n                                       \n                                        <h4 id=\"ErrorBlock\" class=\"header blue lighter bigger\">\n                                            <span id=\"lblErrMsg\">Are you a</span>\n                                            </h4>\n\n                                            <a href=\"#\"  class=\" green\">Individiual </a> <span>|</span>\n                                            <a href=\"#\"  class=\" green\">Contractor </a> <span>|</span>\n                                            <a href=\"#\"  class=\" green\">Builder </a> <span>|</span>\n                                            \n\n                                            <label class=\"block clearfix\">\n                                                <span class=\"block input-icon input-icon-right\">\n                                                    <input name=\"txtEmail\" type=\"email\" id=\"txtEmail\" class=\"form-control\" placeholder=\"Email\" />\n                                                    <i class=\"ace-icon fa fa-envelope\"></i></span>\n                                            </label> \n\n                                            <label class=\"block clearfix\">\n                                                <span class=\"block input-icon input-icon-right\">\n                                                    <input name=\"txtPassword\" type=\"password\" id=\"txtPassword\" class=\"form-control\" placeholder=\"Password\" />\n                                                    <i class=\"ace-icon fa fa-envelope\"></i></span>\n                                            </label> \n                                        <div class=\"space\">\n                                        </div>\n                                        <div class=\"clearfix\">\n                                            <label class=\"inline\">\n                                                <input type=\"checkbox\" class=\"ace\" />\n                                                <span class=\"lbl\">Accept the terms & conditions</span>\n                                            </label>\n                                            <input type=\"submit\" id=\"btnSubmit\" value=\"Submit\" class=\"width-35 pull-right btn btn-sm btn-primary\">\n                                        </div>\n                                        <div class=\"space-4\">\n                                        </div>\n                                    </fieldset>\n                                    </form>\n                                </div>\n                                <!-- /.widget-main -->\n                                <div class=\"toolbar clearfix\">\n                                    <div>\n                                        <a href=\"#\" data-target=\"#forgot-box\" class=\"forgot-password-link\"><i class=\"ace-icon fa fa-arrow-left\"></i>I forgot my password </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /.widget-body -->\n                        </div>\n                        <!-- /.login-box -->\n                        <div id=\"forgot-box\" class=\"forgot-box widget-box no-border\">\n                            <div class=\"widget-body\">\n                                <div class=\"widget-main\">\n                                    <h4 class=\"header red lighter bigger\">\n                                        <i class=\"ace-icon fa fa-key\"></i>Retrieve Password\n                                    </h4>\n                                    <div class=\"space-6\">\n                                    </div>\n                                    <p>\n                                        Enter your email and to receive instructions\n                                    </p>\n                                    <form>\n                                    <fieldset>\n                                        <label class=\"block clearfix\">\n                                            <span class=\"block input-icon input-icon-right\">\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" />\n                                                <i class=\"ace-icon fa fa-envelope\"></i></span>\n                                        </label>\n                                        <div class=\"clearfix\">\n                                            <!-- <button type=\"button\" class=\"width-35 pull-right btn btn-sm btn-danger\">\n                                                <i class=\"ace-icon fa fa-lightbulb-o\"></i><span class=\"bigger-110\">Send Me! </span>\n                                            </button> -->\n                                            <input type=\"submit\" id=\"btnRegister\" value=\"Register\" class=\"width-35 pull-right btn btn-sm btn-primary\">\n                                        </div>\n                                    </fieldset>\n                                    </form>\n                                </div>\n                                <!-- /.widget-main -->\n                                <div class=\"toolbar center\">\n                                    <a href=\"#\" data-target=\"#login-box\" class=\"back-to-login-link\">Back to login \n                                    <i class=\"ace-icon fa fa-arrow-right\"></i></a>\n                                </div>\n                            </div>\n                            <!-- /.widget-body -->\n                        </div>\n                        <!-- /.forgot-box -->\n                    </div>\n                    <!-- /.position-relative -->\n                    <div class=\"navbar-fixed-top align-right\">\n                        <br />\n                        &nbsp; <a id=\"btn-login-dark\" href=\"#\">Dark</a> &nbsp; <span class=\"blue\">/</span> &nbsp; \n                        <a id=\"btn-login-blur\" href=\"#\">Blur</a> &nbsp; <span class=\"blue\">/</span> &nbsp; <a id=\"btn-login-light\" href=\"#\">Light</a> &nbsp; &nbsp; &nbsp;\n                    </div>\n                </div>\n            </div>\n            <!-- /.col -->\n        </div>\n        <!-- /.row -->\n    </div>\n    <!-- /.main-content -->\n</div>\n<!-- /.main-container -->\n</form>"

/***/ }),

/***/ "./src/app/registered-user/registered-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/registered-user/registered-user.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisteredUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredUserComponent", function() { return RegisteredUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisteredUserComponent = /** @class */ (function () {
    function RegisteredUserComponent() {
    }
    RegisteredUserComponent.prototype.ngOnInit = function () {
    };
    RegisteredUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registered-user',
            template: __webpack_require__(/*! ./registered-user.component.html */ "./src/app/registered-user/registered-user.component.html"),
            styles: [__webpack_require__(/*! ./registered-user.component.css */ "./src/app/registered-user/registered-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisteredUserComponent);
    return RegisteredUserComponent;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.apiUrl = "http://localhost:4000/";
    }
    LoginService.prototype.authenticateUser = function (username, password) {
        return this.http.get(this.apiUrl + 'authenticateUser/' + username + '/' + password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.saveBranchMasterDetails = function (BranchName, Address, Email) {
        return this.http.post(this.apiUrl + 'saveBranchMasterDetails/', { BranchName: BranchName, Address: Address, Email: Email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All: ' + data.success); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occured: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
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

module.exports = __webpack_require__(/*! E:\Personal\ppprrr\Praveen\BBS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map