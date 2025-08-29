(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-shared-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo-1.svg\" alt=\"Lol Chat\">\n      </a>\n      <div class=\"login-form\">\n        <form [formGroup]=\"forgotPassword\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" class=\"mt-4\">\n          <div class=\"form-group\">\n            <label>Email ID</label>\n            <input class=\"form-control\" type=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"/>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n              <div *ngIf=\"f.email.errors.email\">Enter must be a valid email address.</div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <button class=\"btn btn-block btn-rounded btn-md btn-primary text-uppercase\" type=\"submit\">Send Link</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img  class=\"img-responsive\" src=\"assets/img/logo-1.svg\" alt=\"Lol Chat\">\n      </a>\n      <div class=\"login-form\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" class=\"mt-4\">\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input class=\"form-control\" type=\"email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"/>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"password\" [ngClass]=\"{'is-invalid': submitted && f.password.errors}\">\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 4 characters.</div>  \n            </div>\n            <div *ngIf=\"errorMessage\"  class=\"invalid-feedback\">\n              <div>{{errorMessage}}</div>\n          </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <input class=\"choice\" type=\"radio\" value=\"1\" formControlName=\"loginType\">\n                <label>Admin</label>\n              </div>\n              <div class=\"col-md-6\">\n                <input class=\"choice\" type=\"radio\" value=\"3\" formControlName=\"loginType\">\n                <label>Sub Admin</label>\n              </div>\n            </div>                        \n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"custom-control custom-control-primary custom-checkbox\">\n              <input class=\"custom-control-input\" type=\"checkbox\" id=\"rememberMe\" checked=\"checked\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-label\">Remember me</span>\n            </label>\n            <a routerLink=\"/forgot-password\" class=\"pull-right\">Forgot password?</a>\n          </div>\n          <button class=\"btn btn-primary btn-block\" type=\"submit\" >Sign in</button>\n        </form>\n      </div>\n    </div>\n    \n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-middle\">\n  <div class=\"login\">\n    <div class=\"login-body\">\n      <a class=\"login-brand\" href=\"javascript:void(0)\">\n        <img class=\"img-responsive\" src=\"assets/img/logo-1.svg\" alt=\"Lol Chat\">\n      </a>\n      <div class=\"login-form\">\n        <form [formGroup]=\"resetPassword\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\" class=\"mt-4\">\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"newPassword\" [ngClass]=\"{'is-invalid': submitted && f.newPassword.errors}\">\n            <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.newPassword.errors.required\">Password is required.</div>\n              <div *ngIf=\"f.newPassword.errors.minlength\">Password must be at least 8 characters.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" [ngClass]=\"{'is-invalid': submitted && f.confirmPassword.errors}\">\n            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.confirmPassword.errors.required\">Password is required.</div>\n              <div *ngIf=\"f.confirmPassword.errors.minlength\">Password must be at least 8 characters.</div>\n              <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Password does not matching.</div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <button class=\"btn btn-block btn-rounded btn-md btn-primary text-uppercase\" type=\"submit\">Change</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"success-modal\" routerLink=\"/login\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2><i class=\"fa fa-check-circle text-success\"></i></h2>\n        <h5>Password changed successfully!</h5>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7ZGlzcGxheTp0YWJsZS1jZWxsO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9Il19 */");

/***/ }),

/***/ "./src/app/shared/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, auth, toastr, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        // Forgot Service
        this.invalidEmail = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.forgotPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgotPassword.invalid) {
            return;
        }
        this.auth.forgot(this.forgotPassword.value.email).subscribe(function (data) {
            var a = data["response"]["html"];
            var b = a.split("=")[1];
            var c = b.split(">")[0];
            console.log(c, "ccccccccccccccccc");
            console.log(a.split("=")[1], "spliitttttt");
            console.log(data["response"]["html"], "gg");
            _this.toastr.success('An email Link has been sent to your email id please follow the instruction to reset password');
            // this.router.navigateByUrl('/reset-password');
            localStorage.setItem('forgot', JSON.stringify(_this.forgotPassword.value.email));
            _this.successMessage = data['message'];
        }, function (error) {
            console.log(error);
            _this.invalidEmail = true;
            _this.errorMessage = error.error.message;
            _this.toastr.error(error.error.message);
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgot-password/forgot-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/shared/forgot-password/forgot-password.component.css")).default]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell !important;vertical-align:middle !important;}\n.choice{\n    margin-right: 5px;\n}\ninput.ng-invalid.ng-touched{\n    border-color: rgb(255, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyw2QkFBNkIsQ0FBQyxnQ0FBZ0MsQ0FBQztBQUNwRTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e2Rpc3BsYXk6dGFibGUtY2VsbCAhaW1wb3J0YW50O3ZlcnRpY2FsLWFsaWduOm1pZGRsZSAhaW1wb3J0YW50O31cbi5jaG9pY2V7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, auth, toast, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toast = toast;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var remembered = window.localStorage.getItem('rememberMe');
        if (remembered == undefined) {
            this.loginForm = this.formBuilder.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                loginType: ['']
            });
        }
        else {
            var rem = JSON.parse(remembered);
            this.loginForm = this.formBuilder.group({
                email: [rem.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                password: [rem.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                loginType: ['']
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.loginForm);
        if ($('#rememberMe').is(':checked')) {
            var remember = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };
            window.localStorage.setItem('rememberMe', JSON.stringify(remember));
        }
        else {
            window.localStorage.removeItem('rememberMe');
        }
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var data = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        var data1 = {
            loginId: this.loginForm.value.email,
            loginPassword: this.loginForm.value.password
        };
        this.loginType = this.loginForm.value.loginType;
        console.log(this.loginType, "this.loginType");
        if (this.loginType == 1) {
            this.auth.login(data).subscribe(function (data) {
                localStorage.setItem('currentUser', JSON.stringify(data['response']));
                _this.successMessage = data['message'];
                _this.auth.toaster("success", "Login Succesfully ");
                _this.router.navigateByUrl('/home/dashboard');
            }, function (error) {
                _this.errorMessage = error.error.message;
                _this.auth.toaster("error", _this.errorMessage);
            });
        }
        if (this.loginType == 3) {
            console.log(data1, "jgbkvkvjkvkj76576465");
            this.auth.subAdminlogin(data1).subscribe(function (data) {
                localStorage.setItem('currentUser', JSON.stringify(data['response']));
                _this.successMessage = data['message'];
                _this.admin = JSON.parse(localStorage.getItem('currentUser'));
                _this.auth.toaster("success", "Login Succesfully ");
                if (_this.admin.module_access[0] == "dashboard") {
                    _this.router.navigateByUrl('/home/dashboard');
                }
                if (_this.admin.module_access[0] == "user_mgmt") {
                    _this.router.navigateByUrl('/home/user-management');
                }
                if (_this.admin.module_access[0] == "city_mgmt") {
                    _this.router.navigateByUrl('/management/city-management');
                }
                if (_this.admin.module_access[0] == "country_mgmt") {
                    _this.router.navigateByUrl('/management/country-management');
                }
                if (_this.admin.module_access[0] == "room_mgmt") {
                    _this.router.navigateByUrl('/management/room-management');
                }
                if (_this.admin.module_access[0] == "currency_mgmt") {
                    _this.router.navigateByUrl('/management/currency-management');
                }
                // if(this.admin.module_access[0] == "level_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // }
                if (_this.admin.module_access[0] == "memebership_mgmt") {
                    _this.router.navigateByUrl('/management/membership-management');
                }
                // if(this.admin.module_access[0] == "microtransaction_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // }
                if (_this.admin.module_access[0] == "posts_mgmt") {
                    _this.router.navigateByUrl('/management/post-management');
                }
                if (_this.admin.module_access[0] == "virtualGift_mgmt") {
                    _this.router.navigateByUrl('/management/virtual-gift');
                }
                // if(this.admin.module_access[0] == "badge_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "dailytask_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "promotions") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "leaderboards") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "payment_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "issue_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "reports_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "notification_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // if(this.admin.module_access[0] == "cms_mgmt") {
                //   this.router.navigateByUrl('/home/user-management');
                // } 
                // this.router.navigateByUrl('/home/dashboard');
            }, function (error) {
                _this.errorMessage = error.error.message;
                _this.auth.toaster("error", _this.errorMessage);
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/shared/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{display:table-cell;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246bWlkZGxlO30iXX0= */");

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mustMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/mustMatch */ "./src/app/service/mustMatch.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, auth, toastr, router, route) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.idname = this.router.snapshot.paramMap.get("tokenForLinkValitadion");
        console.log(this.idname, "idname");
        this.resetPassword = this.formBuilder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
        }, {
            validators: Object(_service_mustMatch__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('newPassword', 'confirmPassword')
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        get: function () { return this.resetPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetPassword.invalid) {
            return;
        }
        var data = {
            value: this.resetPassword.value,
            idname: this.idname
        };
        console.log(data);
        this.auth.reset(data).subscribe(function (data) {
            console.log(data, "after api");
            $("#success-modal").modal('show');
            _this.successMessage = data['message'];
            setTimeout(function () {
                $("#success-modal").modal('hide');
            }, 1500);
            setTimeout(function () {
                _this.toastr.success('Password has been changed Successfully');
                _this.route.navigateByUrl('/login');
            }, 1600);
            // localStorage.removeItem('forgot');
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.toastr.error(error.error.message);
        });
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/reset-password/reset-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/shared/reset-password/reset-password.component.css")).default]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");






var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
    { path: 'reset-password/:tokenForLinkValitadion', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/shared/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/shared/reset-password/reset-password.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharedRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-shared-module.js.map