(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-admin-sub-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/activity-log/activity-log.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/activity-log/activity-log.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n    <app-left-sidebar></app-left-sidebar>\n    <div class=\"subadminPage\"></div>\n    <div class=\"sellerListPage ExplorerListPage\">\n        <div class=\"layout-content\">\n            <div class=\"layout-content-body\">\n                <div class=\"title-bar\">\n                    <h1 class=\"title-bar-title\">\n                        <span class=\"d-ib\"><a routerLink=\"/sub-admin\">Sub-Admin</a> > <a routerLink=\"/sub-admin/sub-admin-view/:id\">View Sub-Admin</a> > View Activity Log</span>\n                    </h1>\n                </div>\n                <div class=\"row gutter-xs\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <form class=\"form\">\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 text-right margin-bottom-15\">\n                                            <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\"\n                                                routerLink=\"/sub-admin/activity-log\">ACTIVITY LOG</button>\n                                            <button class=\"btn btn-success mr-5\" type=\"button\"\n                                                (click)=\"openEdit()\">EDIT</button>\n                                        </div>\n                                        <!-- <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n                            <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n                          </div> -->\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                            <div class=\"row gutter-xs\">\n                                                <div class=\"col-xs-12 col-sm-8 col-md-8 form-group\">\n                                                    <label>Last Login</label>\n                                                    <span class=\"form-control\" placeholder=\"Data\">Data</span>\n                                                </div>\n                                                \n                                               \n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n                                                    [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n                                                    (chartClick)=\"chartClicked($event)\">\n                                                  </canvas>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- Give Module Access of -->\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 text-center my-3\">\n                                            <h4 class=\"module-text\">Module Access Given</h4>\n                                        </div>\n                                        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                            <div class=\"row gutter-xs\">\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">BADGE MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">DAILY TASK MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">PROMOTIONS</label>\n                                                </div> \n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">LEADERBOARDS</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">PAYMENT MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">ISSUE MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">REPORTS MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">REPORTS MGMT</label>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                                                    <input type=\"checkbox\">\n                                                    <label class=\"label-text\">CMS MGMT</label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin-view/sub-admin-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin-view/sub-admin-view.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n    <app-left-sidebar></app-left-sidebar>\n    <div class=\"subadminPage\"></div>\n    <div class=\"sellerListPage ExplorerListPage\">\n        <div class=\"layout-content\">\n            <div class=\"layout-content-body\">\n                <div class=\"title-bar\">\n                    <h1 class=\"title-bar-title\">\n                        <span class=\"d-ib\">Sub-Admin View Management</span>\n                    </h1>\n                </div>\n                <div class=\"row gutter-xs\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <!-- <form class=\"form\"> -->\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 text-right margin-bottom-15\">\n                                            <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\"\n                                                routerLink=\"/sub-admin/activity-log\">ACTIVITY LOG</button>\n                                            <button class=\"btn btn-success mr-5\" type=\"button\"\n                                                (click)=\"openEdit(subAdmin._id)\">EDIT</button>\n                                        </div>\n                                        <!-- <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n                            <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n                          </div> -->\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                            <div class=\"row\">\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Country Admin Id</label>\n                                                    <p>{{subAdmin.adminId}}</p>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Select Country:</label>\n                                                    <p>{{subAdmin.country}}</p>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>User Name</label>\n                                                    <p>{{subAdmin.username}}</p>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Select Region:</label>\n                                                    <p>{{subAdmin.region}}</p>\n                                                </div>\n                                                <!-- <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                 <div class=\"form-group\">\n                                                    <label>Password</label>\n                                                    <span class=\"form-control\" placeholder=\"Data\">{{subAdmin.password}}</span>\n                                                </div> -->\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Select Role:</label>\n                                                    <p>{{subAdmin.role}}</p>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Email</label>\n                                                    <p>{{subAdmin.email}}</p>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                                                    <label>Mobile Number</label>\n                                                    <p>{{subAdmin.mobile}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- Give Module Access of -->\n                                        <div class=\"col-xs-12 col-sm-12 col-md-12 text-center my-3\">\n                                            <h4 class=\"module-text\">Module Access Given</h4>\n                                        </div>\n                                        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                            <div class=\"row gutter-xs\">\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\" *ngFor=\"let data_module of subAdmin?.module_access\">\n                                                    <!-- <input type=\"checkbox\"> -->\n                                                    <label class=\"label-text\">{{data_module}}</label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                <!-- </form> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"text-center\">\n                    <div class=\"h2 text-success\">\n                        <i class=\"fa fa-ban\"></i>\n                    </div>\n                    <h4>Are you sure you want to block this user?</h4>\n                    <div class=\"m-t-lg\">\n                        <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n                            data-target=\"#success-block\" (click)=\"blockunblockSubAdmin()\">Yes</button>\n                        <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n    <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\" style=\"text-align: center;\">\n                <div class=\"h2 text-success\">\n                    <i class=\"fa fa-check-square\"></i>\n                </div>\n                <h4>Blocked Successfully !</h4>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"text-center\">\n                    <div class=\"h2 text-success\">\n                        <i class=\"fa fa-ban\"></i>\n                    </div>\n                    <h4>Are you sure you want to unblock this user?</h4>\n                    <div class=\"m-t-lg\">\n                        <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n                            data-target=\"#unsuccess-block\" (click)=\"blockunblockSubAdmin()\">Yes</button>\n                        <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n    <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\" style=\"text-align: center;\">\n                <div class=\"h2 text-success\">\n                    <i class=\"fa fa-check-square\"></i>\n                </div>\n                <h4>Unblocked Successfully !</h4>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"text-center\">\n                    <div class=\"h2 text-success\">\n                        <i class=\"fa fa-trash-o\"></i>\n                    </div>\n                    <h4>Are you sure you want to delete this user?</h4>\n                    <div class=\"m-t-lg\">\n                        <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n                            data-target=\"#deleted-success\" (click)='delSubAdmin()'>Yes</button>\n                        <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n    <div class=\"modal-dialog modal-sm\" data-dismissb73860=\"modal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\" style=\"text-align: center;\">\n                <div class=\"h2 text-success\">\n                    <i class=\"fa fa-check-square\"></i>\n                </div>\n                <h4>Deleted Successfully !</h4>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<!-- Edit Sub-Admin-->\n<div id=\"edit-sub-admin\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-primary\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\n                <h4 class=\"modal-title\">Edit Sub Admin</h4>\n            </div>\n            <div class=\"modal-body provider-detail\">\n                <form class=\"form\" [formGroup]=\"editsubAdminForm\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Country Admin Id</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"adminId\">\n                                <div *ngIf=\"submitted && f.adminId.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.adminId.errors.required\">Country Admin Id is required</div>\n                                    <div *ngIf=\"f.adminId.errors.maxlength\">Admin Id must be at most 4\n                                        characters.</div>\n                                    <div *ngIf=\"f.adminId.errors.pattern\" class=\"text-danger\">Number Only</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Select Country:</label>\n                                <select class=\"form-control\" formControlName=\"country\">\n                                    <!-- <option value=\"0\">Choose</option> -->\n                                    <option value=\"India\">India</option>\n                                    <option value=\"America\">America</option>\n                                    <option value=\"uae\">UAE</option>\n                                    <option value=\"Japan\">Japan</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>User Name</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"username\">\n                                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.username.errors.required\">UserName is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Select Region:</label>\n                                <select class=\"form-control\" formControlName=\"region\">\n                                    <option value=\"Delhi\">Delhi</option>\n                                    <option value=\"UttarPradesh\">UttarPradesh</option>\n                                    <option value=\"Mumbai\">Mumbai</option>\n                                    <option value=\"Kerala\">Kerala</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.region.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.region.errors.required\">Region is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input class=\"form-control\" [(ngModel)]='password' type=\"text\" formControlName=\"password\">\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Select Role:</label>\n                                <select class=\"form-control\" formControlName=\"role\">\n                                    <option value=\"project Mangaer\">project Mangaer</option>\n                                    <option value=\"Manager\">Manager</option>\n                                    <option value=\"IT Department\">IT Department</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.role.errors.required\">Role is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Email</label>\n                                <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n                                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Mobile Number</label>\n                                <input class=\"form-control\" type=\"text\" formControlName=\"mobile\">\n                                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required.</div>\n                                    <div *ngIf=\"f.mobile.errors.maxlength\">Password must be at most 13\n                                        characters.</div>\n                                    <div *ngIf=\"f.mobile.errors.pattern\" class=\"text-danger\">Number Only</div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Give Module Access of -->\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 text-center my-3\">\n                            <h4 class=\"module-text\">Give Module Access of</h4>\n                        </div>            \n                        <div *ngIf=\"editSingleData?.module_access\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                            <div class=\"row gutter-xs\">\n                                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\" *ngFor=\"let checkboxValue of Module_Access\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"checkboxValue.status\" [ngModelOptions]=\"{standalone: true}\">\n                                    <label class=\"label-text\">{{checkboxValue.name}}</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n                            <button class=\"btn btn-success mr-5\" type=\"button\" (click)=\"editSubAdmin(subAdmin._id)\">Edit & Save</button>\n                        </div>\n                        <div class=\"col-xs-6 col-sm-6 col-md-6 text-left\">\n                            <button class=\"btn btn-success mr-5\" type=\"button\" (click)=\"genNewCred()\">Generate New Credentials</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!----------------------------------------------------- New Login Credentials Add & Generate--------------------------------------- -->\n<div id=\"generate-new-credentials\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-primary\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\n                <h4 class=\"modal-title\">Generate New Credentials</h4>\n            </div>\n            <div class=\"modal-body provider-detail\"> \n                <p class=\"credentials-heading\">Credentials Generation</p>\n                <form class=\"form form-horizontal\" [formGroup]=\"editGenLoginForm\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n                        <div class=\"col-sm-8\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"loginId\">\n                            <div *ngIf=\"submitted && g.loginId.errors\" class=\"invalid-feedback\">\n                                <span *ngIf=\"g.loginId.errors.required\">Email is required.</span>\n                                <span *ngIf=\"g.loginId.errors.email\">Email must be a valid email address</span>\n                            </div>\n                            <div *ngIf=\"EmailerrorMessage && emailError\">\n                                <span *ngIf=\"EmailerrorMessage\"> {{EmailerrorMessage}}</span>\n                            </div>\n                            <div *ngIf=\"emailNotExist && submitted\">\n                                <span *ngIf=\"emailCanBeUsed\">{{emailCanBeUsed}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-info\" (click)=\"checkEmail()\">Generate</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-2\" for=\"email\">Password:</label>\n                        <div class=\"col-sm-8\">\n                            <input class=\"form-control\" type=\"password\" formControlName=\"loginPassword\"\n                                (keyup)=\"onKeyup($event)\">\n                            <div *ngIf=\"submitted && g.loginPassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"g.loginPassword.errors.minlength\">Password must be at least 4\n                                    characters.</div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-info\">Generate</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group text-center\">\n                        <button class=\"btn btn-success mr-5\" type=\"button\" [disabled]=\"!emailNotExist\"\n                            (click)=\"editGenLogin(subAdmin._id)\">Generate & Share</button>\n                        <div *ngIf=\"createError\" class=\"invalid-feedback\">{{createError}}</div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- New-Credentials added successfully -->\n<div id=\"newCredentialsAdded\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-primary\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n                <h4 class=\"modal-title\">New Credentials added Successfully</h4>\n            </div>\n            <div class=\"modal-body provider-detail\">\n                <p class=\"credentials-heading\">Added / Updated Successfully</p>\n                <form class=\"form\">\n                    <div class=\"row\">\n                        <div class=\" col-sm-12 col-md-12 text-center\">\n                            <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin/sub-admin.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin/sub-admin.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <span class=\"d-ib\">Sub-Admin Management</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" (change)=\"sortfilter($event)\">\n                      <option value=\"0\">Name(a to z) </option>\n                      <option value=\"1\">Name(z to a) </option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"center center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                    <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">                         \n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\" [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                  <div class=\"form-group\">\n                  <label class=\"mr-2 wpx-50\">To </label>\n                    <div class=\"d-flex w-100 align-items-center\">                          \n                      <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"  [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                      <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                    </div>\n                  </div>\n                </div>\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>From</label>\n                    <mat-form-field appearance=\"fill\" class=\"w-100\">\n                      <mat-label>Choose a date from</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.opened= true\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>To</label>\n                    <mat-form-field appearance=\"fill\" class=\"w-100\">\n                      <mat-label>Choose a date to</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" (click)=\"picker2.open()\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2></mat-datepicker>\n                    </mat-form-field>\n                  </div> -->\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>DURATION</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\">1 Month </option>\n                      <option value=\"1\">4 Month</option>\n                    </select>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>COUNTRY</label>\n                      <select class=\"form-control\" (change)=\"sortcountry($event)\">\n                     <option value=\"All\">All</option>\n                     <option value=\"India\">India</option>\n                     <option value=\"America\">America</option>\n                     <option value=\"Uae\">Uae</option>\n                     <option value=\"Japan\">Japan</option>\n                    </select>\n                  </div>\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>CITY</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\">CHOOSE</option>\n                      <option value=\"1\">Noida</option>\n                      <option value=\"2\">Gurugram</option>\n                      <option value=\"3\">Banglore</option>\n                    </select>\n                  </div>                               -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label class=\"space\">&nbsp;</label>\n                    <a class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#add-sub-admin\" (click)=\"setSubmittedFalse()\">ADD SUB ADMIN</a>\n                  </div>\n                </div>\n\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"status\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Status </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n                      <!-- <td mat-cell *matCellDef=\"let element\"> <span\n                        [ngClass]=\"(element?.is_approved)?'text-success':'text-danger'\">{{ element?.is_approved\n                        ? 'Approved' :\n                        'Pending' }}</span> </td> -->\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"id\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Admin id </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.adminId}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Name </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"mobno\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Mob.No. </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"email\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Email </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"country\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Country </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"joiningdate\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Joining Date </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date:'M/dd/yyyy'}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"module\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Module Alloted </th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.module_access}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container class=\"d-flex\">\n                          <div class=\"d-flex\">                            \n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-success\" routerLink=\"javascript:void(0)\"><i class=\"fa fa-pencil\"></i></button> -->\n                            <!-- <a class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" data-target=\"#view-subadmin\"><i class=\"fa fa-eye\"></i></a> -->                            \n                            <a class=\"btn btn-sm btn-primary\" routerLink=\"/sub-admin/sub-admin-view/{{element._id}}\"><i class=\"fa fa-eye\"></i></a>\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>                            \n                            <button type=\"button\" *ngIf=\"element.isActive ===0\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                            <button type=\"button\"  *ngIf=\"element.isActive ===1\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockSubAdmin()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockSubAdmin()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delSubAdmin()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- View User-->\n<!-- <div id=\"viewUser\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">User Details</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-lg-3 form-group\">\n              <img src=\"assets/img/3002121059.jpg\" class=\"w-100 m-b-15\">\n              <h5>Ravi Singh</h5>\n            </div>\n            <div class=\"col-sm-8 col-md-8 col-lg-9\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-sm-6\">\n                  <label>D.O.B.</label>\n                  <p>11-12-2010</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Email Address</label>\n                  <p>xyz@gmail.com</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Contact Number</label>\n                  <p>9988776655</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Gender</label>\n                  <p>Male</p>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <label>Address</label>\n                  <p>Delhi, INDIA</p>\n                </div>\n                <div class=\"col-sm-12\">\n                  <h5>Passport Details</h5>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Passport Number</label>\n                  <p>#HFJ&980080</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Full Name</label>\n                  <p>Ravi Singh</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Expiry Date</label>\n                  <p>14-07-2020</p>\n                </div>\n                <div class=\"col-sm-6\">\n                  <label>Passport Image</label>\n                  <p><img src=\"assets/img/upload_icon.png\" class=\"img-responsive\" style=\"height:80px\" /></p>\n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- Add Sub-Admin-->\n<div id=\"add-sub-admin\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n        <h4 class=\"modal-title\">Add Sub Admin</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"subAdminForm\">\n          <div class=\"row\">\n            <!-- <div class=\"col-sm-4 col-md-4 col-lg-3 form-group\">\n              <img src=\"assets/img/3002121059.jpg\" class=\"w-100 m-b-15\">\n              <h5>Ravi Singh</h5>\n            </div>  -->\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Country Admin Id</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"adminId\"> \n                  <div *ngIf=\"submitted && f.adminId.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.adminId.errors.required\">Country Admin  Id is required</div>\n                    <div *ngIf=\"f.adminId.errors.maxlength\">Admin Id must be at most 4 characters.</div>  \n                    <div *ngIf=\"f.adminId.errors.pattern\" class=\"text-danger\">Number Only</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Select Country:</label>\n                  <select class=\"form-control\"   formControlName=\"country\">\n                    <!-- <option value=\"0\">Choose</option> -->\n                    <option value=\"India\">India</option>\n                    <option value=\"America\">America</option>\n                    <option value=\"Uae\">UAE</option>\n                    <option value=\"Japan\">Japan</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>User Name</label>\n                  <input class=\"form-control\" type=\"text\"   formControlName=\"username\">\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">UserNameis required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Select Region:</label>\n                  <select class=\"form-control\"   formControlName=\"region\">\n                    <option value=\"Delhi\">Delhi</option>\n                    <option value=\"UttarPradesh\">UttarPradesh</option>\n                    <option value=\"Mumbai\">Mumbai</option>\n                    <option value=\"Kerala\">Kerala</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.region.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.region.errors.required\">Region is required</div>\n                  </div>\n                </div>\n                <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Password</label>\n                  <input class=\"form-control\" type=\"password\"   formControlName=\"password\">\n                </div> -->\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label placeholder=\"slect role\">Select Role:</label>\n                  <select class=\"form-control\"  formControlName=\"role\">\n                    <!-- <option value=\"0\">Choose</option> -->\n                    <option value=\"project Mangaer\">project Mangaer</option>\n                    <option value=\"Manager\">Manager</option>\n                    <option value=\"IT Department\">IT Department</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.role.errors.required\">Region is required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Email</label>\n                  <input class=\"form-control\" type=\"email\"   formControlName=\"email\">\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required.</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 form-group\">\n                  <label>Mobile Number</label>\n                  <input class=\"form-control\" type=\"text\"  formControlName=\"mobile\">\n                  <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required.</div> \n                    <div *ngIf=\"f.mobile.errors.maxlength\">Mobile Number must be at most 13 characters.</div>  \n                    <div *ngIf=\"f.mobile.errors.pattern\" class=\"text-danger\">Number Only</div> \n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Give Module Access of -->\n            <div class=\"col-xs-12 col-sm-12 col-md-12 text-center my-3\">\n              <p class=\"module-text\">Give Module Access of</p>\n            </div>\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change)=\"getCheckboxValue($event)\" id =\"dashboard\">\n                  <label class=\"label-text\">DASHBOARD</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"user_mgmt\" >\n                  <label class=\"label-text\">USER MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"city_mgmt\" >\n                  <label class=\"label-text\">CITY MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"country_mgmt\" >\n                  <label class=\"label-text\">COUNTRY MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"room_mgmt\">\n                  <label class=\"label-text\">ROOM MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\"  id=\"currency_mgmt\">\n                  <label class=\"label-text\">CURRENCY MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"memebership_mgmt\">\n                  <label class=\"label-text\">MEMBERSHIP MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"virtualGift_mgmt\">\n                  <label class=\"label-text\">VIRTUAL GIFT MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"posts_mgmt\">\n                  <label class=\"label-text\">POSTS MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"microtransaction_mgmt\">\n                  <label class=\"label-text\">MICROTRANSACTION CONTENT MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"level_mgmt\">\n                  <label class=\"label-text\">LEVEL MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"badge_mgmt\">\n                  <label class=\"label-text\">BADGE MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"dailytask_mgmt\">\n                  <label class=\"label-text\">DAILY TASK MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"promotions\">\n                  <label class=\"label-text\">PROMOTIONS</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"leaderboards\">\n                  <label class=\"label-text\">LEADERBOARDS</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"payment_mgmt\">\n                  <label class=\"label-text\">PAYMENT MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"issue_mgmt\">\n                  <label class=\"label-text\">ISSUE MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"reports_mgmt\">\n                  <label class=\"label-text\">REPORTS MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"notification_mgmt\">\n                  <label class=\"label-text\">NOTIFICATION MGMT</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 form-group\">\n                  <input type=\"checkbox\" (change) = \"getCheckboxValue($event)\" id=\"cms_mgmt\">\n                  <label class=\"label-text\">CMS MGMT</label>\n                </div>\n              </div> \n            </div>\n            <!-- href=\"#credentials\" -->\n            <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n              <button class=\"btn btn-success mr-5\" type=\"button\"  data-toggle=\"modal\"\n               (click)=\"saveSubAdmin()\">Add & Generate Login Credentials</button>\n            </div>\n            <div class=\"col-xs-6 col-sm-6 col-md-6 text-left\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Login Credentials Add & Generate -->\n<div id=\"credentials\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n        <h4 class=\"modal-title\">Generate Sub Admin Login Credentials</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <p class=\"credentials-heading\">Credentials Generation</p>\n        <form class=\"form\" [formGroup]=\"genLoginForm\">\n          <div class=\"form-group clearfix\">\n            <label class=\"control-label col-sm-2\" for=\"\">Login Id</label>\n            <div class=\"col-sm-8\">\n              <input class=\"form-control\" type=\"text\"  formControlName=\"loginId\" > \n              <div *ngIf=\"submitted && g.loginId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"g.loginId.errors.required\">Email is required.</div>\n                <div *ngIf=\"g.loginId.errors.email\">Email must be a valid email address</div>\n              </div>\n              <div *ngIf=\"EmailerrorMessage && emailError\" >\n                <span *ngIf=\"EmailerrorMessage\"> {{EmailerrorMessage}}</span> \n              </div>\n              <div *ngIf=\"emailNotExist && submitted\">\n                  <div *ngIf=\"emailCanBeUsed\">{{emailCanBeUsed}}</div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <button type=\"button\" class=\"btn btn-info\" (click)=\"checkEmail()\">Generate</button>\n            </div>\n          </div>\n          <div class=\"form-group clearfix\">\n            <label class=\"control-label col-sm-2\" for=\"\">Password</label>\n            <div class=\"col-sm-8\">\n              <input class=\"form-control\" type=\"text\"  formControlName=\"loginPassword\" >\n                    <!-- <div *ngIf=\"submitted && g.loginPassword.errors\" class=\"invalid-feedback\"> -->\n                      <div *ngIf=\"submitc\" class=\"invalid-feedback\">Password is required.</div>\n                      <!-- <div *ngIf=\"g.loginPassword.errors.minlength\">Password must be at least 4 characters.</div>   -->\n                    <!-- </div> -->\n            </div>\n            <!-- <div class=\"col-sm-2\">\n              <button type=\"button\" class=\"btn btn-info\">Generate</button>\n            </div> -->\n          </div>\n          <div class=\"form-group text-center\">\n            <button class=\"btn btn-success mr-5\" type=\"button\" data-toggle=\"modal\"  [disabled]=\"!emailNotExist && submitc\"\n                 (click)=\"newGenerateSuccessfully()\">Generate & Share</button>\n          </div>\n\n            <!-- <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">               -->\n                \n                  <!-- <div class=\"col-sm-4 form-group\">\n                    <span>Give Login Id</span>\n                  </div> -->\n                  <!-- <div class=\"col-sm-4 form-group\"> -->\n                    <!-- <input class=\"form-control\" type=\"text\"  formControlName=\"loginId\" > -->\n                    <!-- <div *ngIf=\"submitted && g.loginId.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"g.loginId.errors.required\"> Login Id is required</div>\n                    </div> -->\n                    <!-- <div *ngIf=\"submitted && g.loginId.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"g.loginId.errors.required\">Email is required.</div>\n                      <div *ngIf=\"g.loginId.errors.email\">Email must be a valid email address</div>\n                    </div> -->  \n                    <!-- <div *ngIf=\"EmailerrorMessage && emailError\" >\n                      <span *ngIf=\"EmailerrorMessage\"> {{EmailerrorMessage}}</span> \n                    </div>\n                    <div *ngIf=\"emailNotExist && submitted\">\n                        <div *ngIf=\"emailCanBeUsed\">{{emailCanBeUsed}}</div>\n                    </div>  -->\n  \n                  <!-- </div> -->\n                  <!-- <div class=\"col-sm-4 form-group\">\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"checkEmail()\">Generate</button>\n                  </div>                 -->\n                <!-- <br>\n                <div> -->\n                  <!-- <div class=\"col-sm-4\">\n                    <span>Password</span>\n                  </div> -->\n                  <!-- <div class=\"col-sm-4 form-group\"> -->\n                    <!-- <input class=\"form-control\" type=\"text\"  formControlName=\"loginPassword\" >\n                    <div *ngIf=\"submitted && g.loginPassword.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"g.loginPassword.errors.required\">Password is required.</div>\n                      <div *ngIf=\"g.loginPassword.errors.minlength\">Password must be at least 4 characters.</div>  \n                    </div> -->\n                  <!-- </div>\n                </div> -->\n              \n              \n                <!-- <div class=\"col-sm-4 form-group\"> -->\n                  <!-- <button type=\"button\" class=\"btn btn-info\">Generate</button> -->\n                <!-- </div> -->\n              <!-- </div>\n            </div> -->\n            <!-- <div class=\" col-sm-12 col-md-12 text-center\"> -->\n              <!-- <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\" data-toggle=\"modal\"  [disabled]=\"!emailNotExist\"\n                href=\"#credentialsadded\" (click)=\"newGenerateSuccessfully()\">Generate & Share</button>                -->\n            <!-- </div>           -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Credentials add successfully -->\n<div id=\"credentialsadded\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>\n        <h4 class=\"modal-title\">Credentials added Successfully</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <p class=\"credentials-heading\">Added / Updated Successfully</p>\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Done</button>\n            </div>            \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/sub-admin/activity-log/activity-log.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sub-admin/activity-log/activity-log.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-text{\n    margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWFkbWluL2FjdGl2aXR5LWxvZy9hY3Rpdml0eS1sb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1hZG1pbi9hY3Rpdml0eS1sb2cvYWN0aXZpdHktbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtdGV4dHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sub-admin/activity-log/activity-log.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sub-admin/activity-log/activity-log.component.ts ***!
  \******************************************************************/
/*! exports provided: ActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogComponent", function() { return ActivityLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivityLogComponent = /** @class */ (function () {
    function ActivityLogComponent() {
        // Chart JS
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2015', '2016', '2017', '2018'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [48, 78, 50, 69, 56, 57, 40], label: 'Series c' }
        ];
    }
    ActivityLogComponent.prototype.ngOnInit = function () {
    };
    ActivityLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity-log',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/activity-log/activity-log.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-log.component.css */ "./src/app/sub-admin/activity-log/activity-log.component.css")).default]
        })
    ], ActivityLogComponent);
    return ActivityLogComponent;
}());



/***/ }),

/***/ "./src/app/sub-admin/sub-admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sub-admin/sub-admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SubAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminRoutingModule", function() { return SubAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-log/activity-log.component */ "./src/app/sub-admin/activity-log/activity-log.component.ts");
/* harmony import */ var _sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-admin-view/sub-admin-view.component */ "./src/app/sub-admin/sub-admin-view/sub-admin-view.component.ts");
/* harmony import */ var _sub_admin_sub_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-admin/sub-admin.component */ "./src/app/sub-admin/sub-admin/sub-admin.component.ts");






var routes = [
    { path: '', component: _sub_admin_sub_admin_component__WEBPACK_IMPORTED_MODULE_5__["SubAdminComponent"] },
    { path: 'sub-admin-view/:id', component: _sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_4__["SubAdminViewComponent"] },
    { path: 'activity-log', component: _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_3__["ActivityLogComponent"] },
];
var SubAdminRoutingModule = /** @class */ (function () {
    function SubAdminRoutingModule() {
    }
    SubAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SubAdminRoutingModule);
    return SubAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/sub-admin/sub-admin-view/sub-admin-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/sub-admin/sub-admin-view/sub-admin-view.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-text{\n    margin-left: 5px;\n}\n.module-text{\n    margin: 6px 0px 16px;\n    font-weight: bold;\n}\n.credentials-heading{\n    text-align: center;\n    font-weight: bold;\n}\n.space{\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWFkbWluL3N1Yi1hZG1pbi12aWV3L3N1Yi1hZG1pbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdWItYWRtaW4vc3ViLWFkbWluLXZpZXcvc3ViLWFkbWluLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC10ZXh0e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubW9kdWxlLXRleHR7XG4gICAgbWFyZ2luOiA2cHggMHB4IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY3JlZGVudGlhbHMtaGVhZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3BhY2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/sub-admin/sub-admin-view/sub-admin-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sub-admin/sub-admin-view/sub-admin-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: SubAdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminViewComponent", function() { return SubAdminViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SubAdminViewComponent = /** @class */ (function () {
    function SubAdminViewComponent(route, api, router, formBuilder, toast) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.newArray = [];
        this.Module_Access = [
            {
                id: "dashboard",
                name: "Dashboard",
                status: false
            },
            {
                id: "user_mgmt",
                name: "USER MGMT",
                status: false
            }, {
                id: "room_mgmt",
                name: "ROOM MGMT",
                status: false
            }, {
                id: "currency_mgmt",
                name: "CURRENCY MGMT",
                status: false
            }, {
                id: "memebership_mgmt",
                name: "MEMBERSHIP MGMT",
                status: false
            }, {
                id: "posts_mgmt",
                name: "POSTS MGMT",
                status: false
            }, {
                id: "microtransaction_mgmt",
                name: "MICROTRANSACTION CONTENT MGMT",
                status: false
            }, {
                id: "virtual_mgmt",
                name: "VIRTUAL GIFT MGMT",
                status: false
            }, {
                id: "level_mgmt",
                name: "LEVEL MGMT",
                status: false
            }, {
                id: "badge_mgmt",
                name: "BADGE MGMT",
                status: false
            }, {
                id: "dailytask_mgmt",
                name: "DAILY TASK MGMT",
                status: false
            }, {
                id: "promotions",
                name: "PROMOTIONS",
                status: false
            }, {
                id: "payment_mgmt",
                name: "PAYMENT MGMT",
                status: false
            },
            {
                id: "issue_mgmt",
                name: "ISSUE MGMT",
                status: false
            }, {
                id: "reports_mgmt",
                name: "REPORTS MGMT",
                status: false
            }, {
                id: "cms_mgmt",
                name: "CMS MGMT",
                status: false
            },
        ];
    }
    SubAdminViewComponent.prototype.ngOnInit = function () {
        this.subAdminId = this.route.snapshot.paramMap.get("id");
        console.log(this.subAdminId, "kkkkkkkkkkkk");
        this.getSubAdminById(this.subAdminId);
        this.editsubAdminForm = this.formBuilder.group({
            adminId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            module_access: ["",],
        });
        console.log(this.editsubAdminForm.value, "edittttttttttttttsubadmin:::::::::::::");
        this.editGenLoginForm = this.formBuilder.group({
            loginId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            loginPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]]
        });
    }; //onit finished
    Object.defineProperty(SubAdminViewComponent.prototype, "f", {
        get: function () {
            return this.editsubAdminForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubAdminViewComponent.prototype, "g", {
        get: function () {
            return this.editGenLoginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SubAdminViewComponent.prototype.getSubAdminById = function (id) {
        var _this = this;
        var data = {
            id: id,
        };
        this.api.getSubAdminById(data).subscribe(function (res) {
            console.log(res);
            _this.subAdmin = res["response"];
            _this.newArray = _this.subAdmin.module_access;
            console.log(_this.subAdmin, "currentytttt::::::::::::::::::::::::::::::", _this.newArray);
        }, function (err) {
            console.log(err);
        });
    };
    SubAdminViewComponent.prototype.pickupID = function (id) {
        this.subAdmin_id = id;
        console.log(this.subAdmin_id, "pickup");
    };
    SubAdminViewComponent.prototype.editSubAdmin = function (idd) {
        var _this = this;
        this.submitted = true;
        console.log(this.editsubAdminForm.invalid, "tur", this.editsubAdminForm.controls);
        if (this.editsubAdminForm.invalid)
            return;
        var data = this.Module_Access.map(function (item) { if (item.status == true) {
            return item.id;
        } });
        data = data.filter(function (element) {
            return element !== undefined;
        });
        //  console.log("re-----",data)
        var editSub = this.editsubAdminForm.value;
        var _id = idd;
        editSub = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, editSub, { module_access: data, _id: _id });
        console.log(editSub, ":::::::::::::::::::::addsub");
        this.api.editSubAdmin(editSub).subscribe(function (res) {
            console.log(res, ":errrrrrrrrrrrrrrrrrrrrrrr edit api");
            _this.api.toaster("sucess", "Edit Succesfully", 900);
            // this.getAllSubAdminList();
            $("#edit-sub-admin").modal("hide");
            $("#generate-new-credentials").modal("show");
        });
    };
    SubAdminViewComponent.prototype.getCheckboxValue = function (event) {
        var checkvalue = event.target.id;
        // console.log("hi inside check", checkvalue);
        if (event.target.checked) {
            // Pushing the object into array if true (checked)
            console.log("checked");
            this.newArray.push(checkvalue);
            console.log(this.newArray, "array");
        }
        else {
            console.log("unchecked");
            var removeIndex = this.newArray.findIndex(function (a) {
                return a === checkvalue;
            });
            if (removeIndex !== -1) {
                this.newArray.splice(removeIndex, 1);
                console.log(this.newArray, "array");
            }
        }
        //Duplicates the obj if we uncheck it
        //How to remove the value from array if we uncheck it
        console.log(this.newArray);
    };
    SubAdminViewComponent.prototype.editGenLogin = function (id) {
        this.submitted = true;
        console.log(this.emailNotExist, "createError"); //ready to save 
        if (this.emailNotExist) {
            console.log(this.editGenLoginForm.invalid, "error", this.editGenLoginForm.controls);
            if (this.editGenLoginForm.invalid)
                return;
            var editSub = {
                id: id,
                loginId: this.editGenLoginForm.value.loginId,
                loginPassword: this.editGenLoginForm.value.loginPassword
            };
            console.log(editSub, "jjrrrrr");
            this.api.newGenerateSuccessfully(editSub).subscribe(function (res) {
                // this.getAllSubAdminList();
                console.log(res, "klkl");
            });
            $("#generate-new-credentials").modal("hide");
            this.router.navigateByUrl("/sub-admin");
        }
        else {
            this.createError = "Please genrate the Login id first. ";
        }
        // setTimeout(() => {
        //   $("#newCredentialsAdded").modal("show");
        // }, 500);
    };
    SubAdminViewComponent.prototype.openEdit = function (id) {
        var _this = this;
        $("#view-subadmin").modal("hide");
        setTimeout(function () {
            $("#edit-sub-admin").modal("show");
        }, 500);
        // alert(id);
        this.api.getAllSubAdminList().subscribe(function (res) {
            console.log(res, "::::::::::::::::;:::after api");
            _this.myData = res["response"];
            console.log("data", _this.myData);
            var myEditData = _this.myData.filter(function (d) {
                return d._id == id;
            });
            console.log(myEditData, "editdtaattataat");
            _this.editSingleData = myEditData[0];
            _this.Module_Access.forEach(function (element) {
                var da = _this.editSingleData.module_access.find(function (item) {
                    // console.log(item)
                    return item == element.id;
                });
                if (da) {
                    element.status = true;
                }
                console.log(da);
            });
            _this.editsubAdminForm.patchValue({
                adminId: _this.editSingleData.adminId,
                country: _this.editSingleData.country,
                username: _this.editSingleData.username,
                region: _this.editSingleData.region,
                password: _this.editSingleData.password,
                role: _this.editSingleData.role,
                email: _this.editSingleData.email,
                mobile: _this.editSingleData.mobile,
                module_access: _this.editSingleData.module_access
            });
        }, function (err) {
            console.log(err);
        });
        // var myEditData = this.myboatdetail.filter((d) => {return d._id == data})
        // this.editSingleData = myEditData[0];
    };
    SubAdminViewComponent.prototype.checkEmail = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.editGenLoginForm.value.loginId, "ssssss");
        var data = {
            loginId: this.editGenLoginForm.value.loginId,
        };
        this.api.checkEmail(data).subscribe(function (res) {
            console.log(res, "::::::::::::check email res");
            _this.emailError = false;
            _this.emailNotExist = true; //ready to save
            // if(res["message"]=""){
            //   this.emailNotExist = false;
            // }
            _this.emailCanBeUsed = res["message"];
            console.log(_this.emailCanBeUsed, "dddd");
        }, function (err) {
            _this.emailNotExist = false;
            console.log(err.error.message, "error");
            _this.emailError = true;
            _this.EmailerrorMessage = err.error.message;
        });
    };
    // onKeyup(event){
    //   console.log(event.key,"eventtt");
    // }
    SubAdminViewComponent.prototype.genNewCred = function () {
        console.log("hiiiiiiiiiiiii");
        this.editGenLoginForm.reset();
        this.submitted = false; // for gen new credtianl (subAdmin)
        this.EmailerrorMessage = false;
        $("#edit-sub-admin").modal("hide");
        setTimeout(function () {
            $("#generate-new-credentials").modal("show");
        }, 500);
    };
    SubAdminViewComponent.prototype.newGenerateSuccessfully = function () {
        $("#generate-new-credentials").modal("hide");
        setTimeout(function () {
            $("#newCredentialsAdded").modal("show");
        }, 500);
    };
    SubAdminViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    SubAdminViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sub-admin-view",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-admin-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin-view/sub-admin-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-admin-view.component.css */ "./src/app/sub-admin/sub-admin-view/sub-admin-view.component.css")).default]
        })
    ], SubAdminViewComponent);
    return SubAdminViewComponent;
}());



/***/ }),

/***/ "./src/app/sub-admin/sub-admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sub-admin/sub-admin.module.ts ***!
  \***********************************************/
/*! exports provided: SubAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminModule", function() { return SubAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-admin-routing.module */ "./src/app/sub-admin/sub-admin-routing.module.ts");
/* harmony import */ var _sub_admin_sub_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub-admin/sub-admin.component */ "./src/app/sub-admin/sub-admin/sub-admin.component.ts");
/* harmony import */ var _common_comman_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/comman.module */ "./src/app/common/comman.module.ts");
/* harmony import */ var _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./activity-log/activity-log.component */ "./src/app/sub-admin/activity-log/activity-log.component.ts");
/* harmony import */ var _sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sub-admin-view/sub-admin-view.component */ "./src/app/sub-admin/sub-admin-view/sub-admin-view.component.ts");
















var SubAdminModule = /** @class */ (function () {
    function SubAdminModule() {
    }
    SubAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sub_admin_sub_admin_component__WEBPACK_IMPORTED_MODULE_12__["SubAdminComponent"],
                _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_14__["ActivityLogComponent"],
                _sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_15__["SubAdminViewComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_comman_module__WEBPACK_IMPORTED_MODULE_13__["CommanModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__["NgDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_11__["SubAdminRoutingModule"]
            ]
        })
    ], SubAdminModule);
    return SubAdminModule;
}());



/***/ }),

/***/ "./src/app/sub-admin/sub-admin/sub-admin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sub-admin/sub-admin/sub-admin.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-text{\n    margin-left: 5px;\n}\n.module-text{\n    margin: 6px 0px 16px;\n    font-weight: bold;\n}\n.credentials-heading{\n    text-align: center;\n    font-weight: bold;\n}\n.space{\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWFkbWluL3N1Yi1hZG1pbi9zdWItYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1hZG1pbi9zdWItYWRtaW4vc3ViLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtdGV4dHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1vZHVsZS10ZXh0e1xuICAgIG1hcmdpbjogNnB4IDBweCAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNyZWRlbnRpYWxzLWhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNwYWNle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sub-admin/sub-admin/sub-admin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-admin/sub-admin/sub-admin.component.ts ***!
  \************************************************************/
/*! exports provided: SubAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminComponent", function() { return SubAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ELEMENT_DATA = [
    {
        id: "34",
        name: "amit",
        mobno: "8899898989",
        email: "amit@gmail.com",
        country: "india",
        joiningdate: "23/11/2020",
        module: "m3",
        status: "active",
    },
];
var SubAdminComponent = /** @class */ (function () {
    function SubAdminComponent(formBuilder, api, router, route, toast) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.displayedColumns = [
            "checkbox",
            "id",
            "name",
            "mobno",
            "email",
            "country",
            "joiningdate",
            "module",
            "status",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.newArray = [];
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.submitc = false;
        this.fromdate = new Date();
        this.todate = new Date();
    }
    SubAdminComponent.prototype.ngOnInit = function () {
        this.getAllSubAdminList();
        this.subAdminForm = this.formBuilder.group({
            adminId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            module_access: ["",]
        });
        console.log(this.subAdminForm.value, "subadmin:::::::::::::");
        this.genLoginForm = this.formBuilder.group({
            loginId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            loginPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]]
        });
    };
    Object.defineProperty(SubAdminComponent.prototype, "f", {
        get: function () {
            // console.log(this.countryForm.controls)
            return this.subAdminForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubAdminComponent.prototype, "g", {
        get: function () {
            return this.genLoginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SubAdminComponent.prototype.getAllSubAdminList = function () {
        var _this = this;
        this.api.getAllSubAdminList().subscribe(function (res) {
            console.log(res, "::::::::::::::::;:::after api");
            console.log(_this.dataSource, "lll:::::::::::::::::::::");
            _this.subAdminList = res["response"];
            console.log(_this.subAdminList, "list");
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res["response"]);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    SubAdminComponent.prototype.setSubmittedFalse = function () {
        this.submitted = false;
    };
    // pickupID(id){
    //   this.country_id = id
    //   console.log(this.country_id,"pickup")
    // }
    SubAdminComponent.prototype.delSubAdmin = function () {
        var _this = this;
        var datadelete = {
            id: this.subAdmin_id,
        };
        this.api.delSubAdmin(datadelete).subscribe(function (d) {
            // console.log(this.deletesub,'data')
            console.log(d, "data here is ");
            if (d) {
                _this.getAllSubAdminList();
            }
            setTimeout(function () {
                $("#deleted-success").modal("hide");
            }, 1200);
        }, function (error) {
            console.log(error);
            _this.invalidLogin = true;
            //this.errorMessage = error.error.message
            // this.toastr.error(JSON.stringify(error['error']['message']));
            console.log(error);
        });
    };
    SubAdminComponent.prototype.blockunblockSubAdmin = function () {
        var _this = this;
        this.api.blockunblockSubAdmin({ id: this.subAdmin_id }).subscribe(function (res) {
            _this.getAllSubAdminList();
            console.log(res, "After api hit");
            if (res["messsage"] = "Sub Admin enabled successfully") {
                setTimeout(function () {
                    $("#unsuccess-block").modal("hide");
                }, 900);
            }
            if (res["message"] = "Sub Admin disabled successfully") {
                setTimeout(function () {
                    $("#success-block").modal("hide");
                }, 900);
            }
        }, function (error) {
            console.log(error);
        });
    };
    SubAdminComponent.prototype.saveSubAdmin = function () {
        var _this = this;
        if (this.newArray.length === 0) {
            this.submitted = false;
            this.api.toaster("error", "Please select at least 1 module access", 900);
        }
        else {
            this.submitted = true;
            if (this.subAdminForm.invalid)
                return;
            var addSub = this.subAdminForm.value;
            addSub = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, addSub, { module_access: this.newArray });
            this.api.saveSubAdmin(addSub).subscribe(function (res) {
                _this.api.toaster("success", "SubAdmin Save Successfully", 900);
                $('#add-sub-admin').modal('hide');
                $('#credentials').modal('show');
                _this.getAllSubAdminList();
                var token_id = res["response"]["_id"];
                var remember = localStorage.setItem('currentSubAdmin', JSON.stringify(token_id));
            }, function (error) {
                _this.errorMessage = error.error.message;
                _this.api.toaster("error", _this.errorMessage, 900);
            });
        }
    };
    SubAdminComponent.prototype.pickupID = function (id) {
        this.subAdmin_id = id;
        console.log(this.subAdmin_id, "pickup");
    };
    SubAdminComponent.prototype.getCheckboxValue = function (event) {
        var checkvalue = event.target.id;
        // console.log("hi inside check", checkvalue);
        if (event.target.checked) { // Pushing the object into array if true (checked)
            console.log("checked");
            this.newArray.push(checkvalue);
            console.log(this.newArray, "array");
        }
        else {
            console.log("unchecked");
            var removeIndex = this.newArray.findIndex(function (a) {
                return a === checkvalue;
            });
            if (removeIndex !== -1) {
                this.newArray.splice(removeIndex, 1);
                console.log(this.newArray, "array");
            }
        }
        //Duplicates the obj if we uncheck it
        //How to remove the value from array if we uncheck it
        console.log(this.newArray);
    };
    SubAdminComponent.prototype.newGenerateSuccessfully = function () {
        var _this = this;
        if (this.genLoginForm.value.loginPassword == '' || this.genLoginForm.value.loginPassword == null) {
            this.submitc = true;
            return;
        }
        this.submitted = true;
        console.log(this.genLoginForm.invalid, "tur", this.genLoginForm.controls);
        if (this.genLoginForm.invalid)
            return;
        console.log(this.emailNotExist, "createError"); //ready to save 
        if (this.emailNotExist) {
            var sub = JSON.parse(localStorage.getItem('currentSubAdmin'));
            console.log(sub, "form on it");
            var editSub = {
                id: sub,
                loginId: this.genLoginForm.value.loginId,
                loginPassword: this.genLoginForm.value.loginPassword
            };
            console.log(editSub, "jjrrrrr");
            this.api.newGenerateSuccessfully(editSub).subscribe(function (res) {
                _this.api.toaster("success", "Generate Successfully", 900);
                _this.getAllSubAdminList();
                console.log(res, "klkl");
            });
            $("#credentials").modal("hide");
            $("#credentialsadded").modal("show");
        }
        else {
            this.createError = "Please genrate the Login id first. ";
        }
    };
    SubAdminComponent.prototype.sortfilter = function (event) {
        var sort = event.target.value;
        // console.log(sort,"boom sort",this.subAdminList);
        if (sort == "0") {
            this.subAdminList.sort(function (a, b) { return (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.subAdminList);
            this.dataSource.paginator = this.paginator;
        }
        else {
            this.subAdminList.sort(function (a, b) { return (a.username < b.username) ? 1 : ((b.username < a.username) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.subAdminList);
            this.dataSource.paginator = this.paginator;
        }
    };
    SubAdminComponent.prototype.fromDate = function (event) {
        this.todate = event;
        this.optionsTo = {
            minDate: this.todate,
            maxDate: new Date()
        };
        console.log(event, "lll");
        this.fromdate = Math.round((new Date(event)).getTime());
        console.log("startDate", this.fromdate);
        this.filterDate();
    };
    SubAdminComponent.prototype.EndDate = function (event) {
        console.log(event, "event");
        this.endDate = event;
        this.optionsTo = {
            minDate: this.todate,
            maxDate: new Date()
        };
        this.endDate = Math.round((new Date(event)).getTime());
        console.log("endDate", this.endDate);
        // console.log(new Date(this.endDate * 1000))
        this.filterDate();
    };
    SubAdminComponent.prototype.filterDate = function () {
        console.log(this.fromdate);
        if (this.fromdate && !this.endDate) {
            console.log("hi");
            var fromFilter = new Date(this.fromdate).getTime();
            console.log(fromFilter, "sss");
            console.log(this.subAdminList, "listtt");
            this.allSub = this.subAdminList.filter(function (item) {
                return item.createdAt >= fromFilter;
            } //  
            );
            console.log(this.allSub, "listtt");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allSub);
            console.log(this.dataSource, "calnederrrrrrrrrS");
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else if (this.endDate && !this.fromdate) {
            var toFilter = new Date(this.todate).getTime() + 86400000;
            this.allSub = this.subAdminList.filter(function (item) {
                console.log(item, "itemmmmm");
                item.createdAt <= toFilter;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allSub);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else {
            console.log("inside ekse");
            var fromFilter = new Date(this.fromdate).getTime();
            var toFilter = new Date(this.endDate).getTime() + 86400000;
            this.allSub = this.subAdminList.filter(function (item) {
                return item.createdAt <= toFilter && item.createdAt >= fromFilter;
            });
            console.log(this.allSub, "dd");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allSub);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
    };
    SubAdminComponent.prototype.sortcountry = function (event) {
        console.log(event.target.value, "event");
        if (event.target.value == "All") {
            console.log("all");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.subAdminList);
        }
        else {
            this.allSub = this.subAdminList.filter(function (item) {
                return item.country == event.target.value;
            });
            console.log(this.allSub, "dd");
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allSub);
        }
    };
    SubAdminComponent.prototype.checkEmail = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.genLoginForm.value.loginId, "ssssss");
        var data = {
            loginId: this.genLoginForm.value.loginId,
        };
        this.api.checkEmail(data).subscribe(function (res) {
            console.log(res, "::::::::::::check email res");
            _this.emailError = false;
            _this.emailNotExist = true; //ready to save
            // if(res["message"]=""){
            //   this.emailNotExist = false;
            // }
            _this.emailCanBeUsed = res["message"];
            console.log(_this.emailCanBeUsed, "dddd");
        }, function (err) {
            _this.emailNotExist = false;
            console.log(err.error.message, "error");
            _this.emailError = true;
            _this.EmailerrorMessage = err.error.message;
        });
    };
    SubAdminComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], SubAdminComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], SubAdminComponent.prototype, "sort", void 0);
    SubAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sub-admin",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-admin/sub-admin/sub-admin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-admin.component.css */ "./src/app/sub-admin/sub-admin/sub-admin.component.css")).default]
        })
    ], SubAdminComponent);
    return SubAdminComponent;
}());



/***/ })

}]);
//# sourceMappingURL=sub-admin-sub-admin-module.js.map