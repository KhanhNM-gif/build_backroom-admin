(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["microtransaction-mgmt-microtransaction-mgmt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/frames/frames.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/frames/frames.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\" routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a> > View Frames</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" (change)=\"sortfilter($event)\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search by ID or Name\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\"\n                          [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">To </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"\n                          [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div> -->\n\n                  \n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Duration</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>Choose</option>\n                      <option value=\"1\">Daily</option>\n                      <option value=\"2\">Weekly</option>\n                      <option value=\"2\">Monthly</option>\n                    </select>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" data-toggle=\"modal\" (click)=\"showaddpopup()\" data-target=\"#framesadd\">Add</button>\n                  </div>                                                   \n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"id\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"framesname\">\n                      <th mat-header-cell *matHeaderCellDef> Frames Name </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.title}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"image\"> \n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Image </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <lottie-player src=\"{{ element.image }}\"  background=\"transparent\"  speed=\"1\"  style=\"width: 100px; height: 100px;\"  loop controls autoplay></lottie-player>\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        \n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"cointype\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price</th>\n                      <td mat-cell *matCellDef=\"let element\">{{ (!element.coinType)?\"Gold coin\":\"Silver coin\" }}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"price\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.price}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" (click)=\"showeditpopup(element)\" data-target=\"#framesedit\" data-toggle=\"modal\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                              <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\" data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                              <button type=\"button\" [disabled]=\"element.isActive == 1 ? true : false\" class=\"btn btn-sm btn-success\" data-target=\"#unblockUser\" data-toggle=\"modal\"(click)= \"blockUnblock(element)\"><i class=\"fa fa-ban\"></i></button>\n                              <button type=\"button\" [disabled]=\"element.isActive == 0 ? true : false\" class=\"btn btn-sm btn-danger\" data-target=\"#blockUser\" data-toggle=\"modal\" (click)= \"blockUnblock(element)\"><i class=\"fa fa-ban\"></i></button>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[50,100,150]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this frames ?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this frames?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this frames?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"framesadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"addForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image (lottie json file)</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <input id=\"logo-file\" type=\"file\" (change)='singleFilesForPackage($event)'>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Frames Name:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"title\" type=\"text\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.title.errors\">\n                    <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <div class=\"d-flex\">\n                    <input class=\"membercheckbox\" type=\"radio\"  formControlName=\"coinType\" value=\"0\">\n                    <span class=\"price-name\">Gold Coins</span>\n                    <input class=\"membercheckbox\" type=\"radio\" formControlName=\"coinType\" value=\"1\">\n                    <span>Silver Coins</span>\n                  </div>\n                  <input type=\"text\" formControlName=\"price\" class=\"form-control\"/> \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.price.errors\">\n                    <div *ngIf=\"f.price.errors.required\">Price is required</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n              <button class=\"btn btn-success mr-5\" (click)=\"add()\" type=\"button\">Done</button>  \n            </div>\n            \n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>\n<!-- Room Edit -->\n<div id=\"framesedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Edit</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"editForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image (lottie json file)</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <input id=\"logo-file2\" type=\"file\"  (change)='singleFilesForPackageUpdate($event)'>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Frames Name:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"title\" type=\"text\" placeholder=\"Data\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && g.title.errors\">\n                    <div *ngIf=\"g.title.errors.required\">Title is required</div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <div class=\"d-flex\">\n                    <input class=\"membercheckbox\" formControlName=\"coinType\" type=\"radio\"  value=\"0\">\n                    <span class=\"price-name\">Gold Coins</span>\n                    <input class=\"membercheckbox\" formControlName=\"coinType\" type=\"radio\" value=\"1\">\n                    <span>Silver Coins</span>\n                  </div>\n                  <input type=\"text\" formControlName=\"price\" class=\"form-control\"/>    \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && g.price.errors\">\n                    <div *ngIf=\"g.price.errors.required\">Price is required</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\n              \n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n              <button class=\"btn btn-success mr-5\" (click)=\"edit()\" type=\"button\">Edit & Save</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <span class=\"d-ib\">Microtransaction Options Management</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 mx-auto\"> \n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\">\n                    <div class=\"m-option\">\n                         <h4 class=\"text-center\">Room Lock</h4>  \n                         <div class=\"\">\n                             <ul>\n                                 <li>\n                                    <div class=\"post-switch d-flex\">                          \n                                        <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                    </div>\n                                 </li>\n                                 <li>\n                                    <a routerLink=\"/microtransaction-mgmt/room-lock\">Manage</a>\n                                 </li>\n                             </ul>\n                         </div>           \n                    </div>\n                  </div>       \n\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\"> \n                    <div class=\"m-option\">\n                        <h4 class=\"text-center\">Pin To Top</h4>  \n                        <div class=\"\">\n                            <ul>\n                                <li>\n                                   <div class=\"post-switch d-flex\">                          \n                                       <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                   </div>\n                                </li>\n                                <li>\n                                   <a routerLink=\"/microtransaction-mgmt/pin-to-top\">Manage</a>\n                                </li>\n                            </ul>\n                        </div>           \n                   </div>   \n                  </div>  \n\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\">\n                    <div class=\"m-option\">\n                        <h4 class=\"text-center\">Unique Room Id</h4>  \n                        <div class=\"\">\n                            <ul>\n                                <li>\n                                   <div class=\"post-switch d-flex\">                          \n                                       <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                   </div>\n                                </li>\n                                <li>\n                                   <a routerLink=\"/microtransaction-mgmt/unique-room\">Manage</a>\n                                </li>\n                            </ul>\n                        </div>           \n                   </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\">\n                    <div class=\"m-option\">\n                        <h4 class=\"text-center\">Unique User Id</h4>  \n                        <div class=\"\">\n                            <ul>\n                                <li>\n                                   <div class=\"post-switch d-flex\">                          \n                                       <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                   </div>\n                                </li>\n                                <li>\n                                   <a routerLink=\"/microtransaction-mgmt/unique-user\">Manage</a>\n                                </li>\n                            </ul>\n                        </div>           \n                   </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\">\n                    <div class=\"m-option\">\n                        <h4 class=\"text-center\">Frames</h4>  \n                        <div class=\"\">\n                            <ul>\n                                <li>\n                                   <div class=\"post-switch d-flex\">                          \n                                       <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                   </div>\n                                </li>\n                                <li>\n                                   <a routerLink=\"/microtransaction-mgmt/frames-view\">Manage</a>\n                                </li>\n                            </ul>\n                        </div>           \n                   </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-bottom-15\">\n                    <div class=\"m-option\">\n                        <h4 class=\"text-center\">Themes</h4>  \n                        <div class=\"\">\n                            <ul>\n                                <li>\n                                   <div class=\"post-switch d-flex\">                          \n                                       <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                                   </div>\n                                </li>\n                                <li>\n                                   <a routerLink=\"/microtransaction-mgmt/themes-view\">Manage</a>\n                                </li>\n                            </ul>\n                        </div>           \n                   </div>\n                  </div>\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                      <label>&nbsp;</label>\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" checked>\n                        <span class=\"slider round\"></span>\n                      </label>\n                  </div> -->\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <p>&nbsp;</p>\n                      <div class=\"post-switch d-flex\">                          \n                        <input type=\"checkbox\" id=\"switch\" /><label for=\"switch\">Toggle</label>\n                        <h4 class=\"margin-left-10\">Show Featured Only</h4>\n                      </div>                      \n                  </div>  -->\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#membershipadd\">Add</button>\n                  </div>  -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#success-block\" (click) = \"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\" >No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>     \n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#unsuccess-block\" (click) = \"blockunblockuser()\" >Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>     \n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\" data-target=\"#deleted-success\"  (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>      \n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">      \n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>         \n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Add-Member -->\n<!-- <div id=\"membershipadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add New Member</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <span class=\"form-control\">Auto Generated</span>\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Data\">\n                </div>\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Package Name\" [ngClass]=\"{ 'is-invalid' : submitted && f.name.errors }\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.name.errors\">\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Duratino</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\">\n                    <option value=\"0\">Choose</option>\n                    <option value=\"1\">Per month</option>\n                    <option value=\"10\">3 Month</option>\n                    <option value=\"20\">Annual</option>                    \n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile1\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>     \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Includes</label>\n                </div>   \n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group border\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Entrance Effect</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Premium Badge</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Coloured Username</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Send Picture</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Friend Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Ranking Surprise</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Following Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Level Up Reward</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">High Speed Level Up</p>\n                          </div>                                    \n                        </div>\n                      </div>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Luxury Vehicle</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Exclusive Chat Box</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Room Lock</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Store Discount</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Special Broadcast</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Room Theme</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Friend Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Exclusive Name Card</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Profile Cover</p>\n                          </div>                                    \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>                     \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <div class=\"d-flex\">\n                    <input class=\"membercheckbox\" type=\"radio\">\n                    <span class=\"price-name\">Gold Coins</span>\n                    <input class=\"membercheckbox\" type=\"radio\">\n                    <span>Real Money Egp</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\"/>                  \n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Save &\n                Add</button>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div> -->\n\n<!-- <div id=\"membershipedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Edit Member</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Auto Generated\">\n                </div>\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Package Name\" [ngClass]=\"{ 'is-invalid' : submitted && f.name.errors }\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.name.errors\">\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Membership Duratino</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\">\n                    <option value=\"0\">Choose</option>\n                    <option value=\"1\">Per month</option>\n                    <option value=\"10\">3 Month</option>\n                    <option value=\"20\">Annual</option>                    \n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile2\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>     \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Includes</label>\n                </div>   \n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group border\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Entrance Effect</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Premium Badge</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Coloured Username</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Send Picture</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Friend Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Ranking Surprise</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Following Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Level Up Reward</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">High Speed Level Up</p>\n                          </div>                                    \n                        </div>\n                      </div>                      \n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Luxury Vehicle</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Exclusive Chat Box</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Room Lock</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Store Discount</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Special Broadcast</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Room Theme</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Friend Celling</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Exclusive Name Card</p>\n                          </div>\n                          <div class=\"d-flex\">\n                            <input class=\"membercheckbox\" type=\"checkbox\">\n                            <p class=\"textimg\">Profile Cover</p>\n                          </div>                                    \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>                     \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <div class=\"d-flex\">\n                    <input class=\"membercheckbox\" type=\"radio\">\n                    <span class=\"price-name\">Gold Coins</span>\n                    <input class=\"membercheckbox\" type=\"radio\">\n                    <span>Real Money Egp</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\"/>                  \n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Save & Update</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- View Post Management -->\n<div id=\"viewpostmgmt\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">View Post Management</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                  <div class=\"d-flex ml-3\">\n                    <a class=\"statistics\" href=\"#\">1M Views </a>\n                    <a class=\"statistics\" href=\"#\">| 1K Comments </a>\n                    <a class=\"statistics\" href=\"#\">| 12K Likes </a>\n                    <a class=\"statistics\" href=\"#\">| 49K Shares </a>\n                    <a class=\"statistics\" href=\"#\">| 0 REPORTS</a>\n                  </div>                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Title</label>                  \n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <span class=\"form-control\">Data</span>\n                </div>\n                \n                <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                  <label>Discription</label>\n                  <p class=\"border padding-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam molestiae tempore sint quibusdam, hic animi labore optio ducimus maxime ab quisquam mollitia, sit at in deserunt ut aperiam nemo.</p>\n                </div>\n                <!-- <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">                 \n                  <input class=\"form-control\" type=\"text\" placeholder=\"Package Name\" [ngClass]=\"{ 'is-invalid' : submitted && f.name.errors }\">\n                  <p class=\"\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam molestiae tempore sint quibusdam, hic animi labore optio ducimus maxime ab quisquam mollitia, sit at in deserunt ut aperiam nemo.</p>\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.name.errors\">\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                  </div>\n                </div> -->\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                  <div class=\"row\">                      \n                    <div class=\"col-xs-4 col-sm-3 col-md-3\">\n                      <div class=\"pic-box\">\n                        <div class=\"logoImg\">\n                          <img class=\"img-responsive\" src=\"assets/img/user.jpg\" id=\"imagefile\">\n                          <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                          <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-3 col-md-3\">\n                      <div class=\"pic-box\">\n                        <div class=\"logoImg\">\n                          <img class=\"img-responsive\" src=\"assets/img/user.jpg\" id=\"imagefile\">\n                          <input id=\"logo-file1\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage1($event)'>\n                          <label for=\"logo-file1\" class=\"btn btn-large\"></label>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-4 col-sm-3 col-md-3\">\n                      <div class=\"pic-box\">\n                        <div class=\"logoImg\">\n                          <img class=\"img-responsive\" src=\"assets/img/user.jpg\" id=\"imagefile\">\n                          <input id=\"logo-file2\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                          <label for=\"logo-file2\" class=\"btn btn-large\"></label>\n                        </div>\n                      </div>\n                    </div>                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\" routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a> > View Pin To Top Package</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search by ID or Name\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\"\n                          [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">To </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"\n                          [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Duration</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>Choose</option>\n                      <option value=\"1\">Daily</option>\n                      <option value=\"2\">Weekly</option>\n                      <option value=\"2\">Monthly</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#pintotopadd\">Add</button>\n                  </div>                                                   \n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"sid\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>S Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element.sid}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"pkgname\">\n                      <th mat-header-cell *matHeaderCellDef> Package Name </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.pkgname}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"duration\"> \n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Duration </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.duration}}\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        <!-- <span class=\"cd_mgmtBg\" [ngStyle]=\"{'background-image': 'url(' + 'https://voicechatimages.s3.me-south-1.amazonaws.com/1614231858663/IMG_8743.JPG' + ')'}\"></span> -->\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"priceingold\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price In Gold</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.priceingold}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" data-target=\"#pintotopedit\" data-toggle=\"modal\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                            <button type=\"button\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"pintotopadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add New</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <span class=\"form-control\">Auto Generated</span>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <span class=\"form-control\">Data</span>                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Duration</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\">\n                    <option value=\"0\">Select Data in Months( 1/2/3 months)</option>\n                    <option value=\"1\">Per month</option>\n                    <option value=\"2\">3 Month</option>\n                    <option value=\"Annual\">Annual</option>                    \n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile1\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>                          \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" placeholder=\"Amount In Gold Coin\" class=\"form-control\"/>\n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\">Save &\n                Add</button>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>\n\n<div id=\"pintotopedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Edit</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Auto Generated\">\n                </div>\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Data\">                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Duration</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\">\n                    <option value=\"0\">Select Data in Months( 1/2/3 months)</option>\n                    <option value=\"1\">Per month</option>\n                    <option value=\"2\">3 Month</option>\n                    <option value=\"Annual\">Annual</option>                    \n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile2\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>                          \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" class=\"form-control\"  placeholder=\"Amount In Gold Coin\"/>\n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\">Save & Update</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/room-lock/room-lock.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/room-lock/room-lock.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\" routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a> > View Room Look Package</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                \n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" [(ngModel)]=\"nameFilter\" (ngModelChange)=\"doFilter()\" [ngModelOptions]=\" \n                        {standalone: true}\"\n                          placeholder=\"Search by ID or Name\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" [(ngModel)]=\"durationFilter\"(ngModelChange)=\"doFilter()\" [ngModelOptions]=\" \n                    {standalone: true}\">\n                      <option value=\"\">Please select month</option>\n                      <option value=\"1\">1 Month</option>\n                      <option value=\"2\">2 Month</option>\n                      <option value=\"3\">3 Month</option>\n                      <option value=\"8\">8 Month</option>\n                      <option value=\"12\">12 Month</option>     \n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" data-toggle=\"modal\" (click)=\"showAddPopup()\" data-target=\"#roomlockadd\">Add</button>\n                  </div>                                                   \n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"sid\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>S Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"pkgname\">\n                      <th mat-header-cell *matHeaderCellDef> Package Name </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.title}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"duration\"> \n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Duration </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.month}} Month\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        <!-- <span class=\"cd_mgmtBg\" [ngStyle]=\"{'background-image': 'url(' + 'https://voicechatimages.s3.me-south-1.amazonaws.com/1614231858663/IMG_8743.JPG' + ')'}\"></span> -->\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"priceingold\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price In Gold</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.price}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\"  (click)='showEditPopup(element)' data-target=\"#roomlockedit\" data-toggle=\"modal\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                            \n                            <button type=\"button\" [disabled]=\"element.isActive == 1 ? true : false\" class=\"btn btn-sm btn-success\" data-target=\"#unblockUser\" data-toggle=\"modal\"(click)= \"blockUnblock(element)\"><i class=\"fa fa-ban\"></i></button>\n                            <button type=\"button\" [disabled]=\"element.isActive == 0 ? true : false\" class=\"btn btn-sm btn-danger\" data-target=\"#blockUser\" data-toggle=\"modal\" (click)= \"blockUnblock(element)\"><i class=\"fa fa-ban\"></i></button>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this package?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this package?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this package?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"roomlockadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add Room Lock Package</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"addForm\"  >\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n               \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"packageName\" placeholder=\"package\">             \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.packageName.errors\">\n                    <div *ngIf=\"f.packageName.errors.required\">Package name is required</div>\n                  </div>   \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Duration</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select formControlName=\"duration\" class=\"form-control\">\n                    <option value=\"1\">1 Month</option>\n                    <option value=\"2\">2 Month</option>\n                    <option value=\"3\">3 Month</option>\n                    <option value=\"8\">8 Month</option>\n                    <option value=\"12\">12 Month</option>                    \n                  </select>                  \n                </div>\n                <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile1\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>                           -->\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" formControlName=\"price\" placeholder=\"Amount In Gold Coin\" class=\"form-control\"/>    \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && f.price.errors\">\n                    <div *ngIf=\"f.price.errors.required\">Price Value is required</div>\n                    <p style=\"color: red;\" *ngIf=\"f.price.errors?.pattern && submitted\">Please\n                      enter only numbers</p>\n                  </div>              \n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" (click)='savePackage()'>Save &\n                Add</button>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>\n\n<div id=\"roomlockedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Edit Room Lock Package</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"editForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <!-- <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Auto Generated\" [ngClass]=\"{ 'is-invalid' : submitted && g.memberShip_name.errors }\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && g.memberShip_name.errors\">\n                    <div *ngIf=\"g.memberShip_name.errors.required\"> Package Id Name is required</div>\n                  </div>\n                </div> -->\n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"packageName\" type=\"text\" placeholder=\"Package Name\">  \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && g.packageName.errors\">\n                    <div *ngIf=\"g.packageName.errors.required\">Package name is required</div>\n                  </div>                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Package Duration</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select  formControlName=\"duration\" class=\"form-control\">\n                    <option value=\"1\">1 Month</option>\n                    <option value=\"2\">2 Month</option>\n                    <option value=\"3\">3 Month</option>\n                    <option value=\"8\">8 Month</option>\n                    <option value=\"12\">12 Month</option>                    \n                  </select>                  \n                </div>\n                <!-- <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img src=\"assets/img/user.jpg\" id=\"imagefile2\">\n                      <input id=\"logo-file\" type=\"file\" class=\"hide\" (change)='singleFilesForPackage($event)'>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                    </div>\n                  </div>\n                </div>                           -->\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" formControlName=\"price\" class=\"form-control\"  placeholder=\"Amount In Gold Coin\"/>    \n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && g.price.errors\">\n                    <div *ngIf=\"g.price.errors.required\">Price Value is required</div>\n                    <p style=\"color: red;\" *ngIf=\"g.price.errors?.pattern && submitted\">Please\n                      enter only numbers</p>\n                  </div>                  \n                </div>\n              </div>\n            </div>\n            <div class=\" col-sm-12 col-md-12 text-center\">\n              <button class=\"btn btn-success mr-5\" (click)='updatePackage()' type=\"button\">Save & Update</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/themes-view/themes-view.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/themes-view/themes-view.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\"\n                routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a>\n              > View Themes</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\" (change)=\"sortfilter($event)\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search by ID or Name\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\"\n                        [(ngModel)]=\"fromdate\" [options]=\"optionsFrom\"\n                        [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">To </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\"\n                        (ngModelChange)=\"EndDate($event)\" [options]=\"optionsTo\"\n                        [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Duration</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>Choose</option>\n                      <option value=\"1\">Daily</option>\n                      <option value=\"2\">Weekly</option>\n                      <option value=\"2\">Monthly</option>\n                    </select>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" (click)=\"clearAdd()\" type=\"button\" data-toggle=\"modal\"\n                      data-target=\"#themesadd\">Add</button>\n                  </div>\n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"id\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"themeTitle\">\n                      <th  mat-header-cell *matHeaderCellDef  mat-sort-header  > Theme Title </th>\n                      <td mat-cell *matCellDef=\"let element\" >{{element?.themeSubCategory[0]?.themeTitle}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"themeImage\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Image </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        <span class=\"cd_mgmtBg\"\n                          [ngStyle]=\"{'background-image': 'url('+element?.themeSubCategory[0]?.themeImage+')'}\"></span>\n                        <!-- [ngStyle]=\"{'background-image': 'url(' + 'https://voicechatimages.s3.me-south-1.amazonaws.com/1614231858663/IMG_8743.JPG' + ')'}\" -->\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"priceType\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price Type</th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ (element?.themeSubCategory[0]?.themePrice?.priceType == 0)?\"Silver coin\":\"Gold coin\" }}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"price\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price </th>\n                      <td mat-cell *matCellDef=\"let element\">{{(element?.themeSubCategory[0]?.themePrice?.priceType==0)?element?.themeSubCategory[0]?.themePrice?.priceForSilver : element?.themeSubCategory[0]?.themePrice?.priceForGold}}\n                      </td>\n                    </ng-container>\n                    \n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" data-target=\"#themesedit\" (click)='getEditValue(element)' data-toggle=\"modal\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                            <button type=\"button\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\"\n                              data-toggle=\"modal\" [disabled]=\"element.isBlocked == 0 ? true : false\"\n                              (click)='blockUnblock(element)'><i class=\"fa fa-ban\"></i></button>\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\"\n                              data-toggle=\"modal\" [disabled]=\"element.isBlocked == 1 ? true : false\"\n                              (click)='blockUnblock(element)'><i class=\"fa fa-ban\"></i></button>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser()\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this user?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delTheme()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"themesadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"addThemeForm\">\n          <div class=\"row\">\n\n\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n\n                <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                  <label>Id</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"id\" placeholder=\"id\"\n                    required />\n                   <p style=\"color: red;\" *ngIf=\"form.badgeType.errors?.required && isSubmitted\">Badge type is required</p> \n                </div> -->\n                <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                  <label>Theme Category</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" formControlName=\"themeCat\">\n                      <option value=\"Romance\">Romance</option>\n                      <option value=\"Adventure\">Adventure</option>\n                      <option value=\"Modern Lives\">Modern Lives</option>\n                      <option value=\"others\">others</option>\n                  </select>\n                  <div *ngIf=\"f.themeCat.invalid && sumitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.themeCat.errors?.required && sumitted \">Theme Category is required</p>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                  <label>Theme Title</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"themeTitle\" placeholder=\"Theme title\"\n                    required />\n                    <div *ngIf=\"f.themeTitle.invalid && sumitted\" class=\"invalid-feedback\">\n                  <p style=\"color: red;\" *ngIf=\"f.themeTitle.errors?.required && sumitted \">Theme title is required</p>\n                  </div>\n                </div>\n\n\n              \n\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 \">\n                  <label>Price type:</label>\n              </div>\n              <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" formControlName=\"priceType\">\n                    <option value=\"0\">Silver coin</option>\n                    <option value=\"1\">Gold coin</option>\n                  </select>\n              </div>\n\n              <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 \">\n                <label>Price:</label>\n            </div>\n            <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                <input class=\"form-control\" type=\"number\" min=\"0\" formControlName=\"price\" placeholder=\"Price\">\n                <div *ngIf=\"f.price.invalid && sumitted\" class=\"invalid-feedback\">\n                <p style=\"color: red;\" *ngIf=\"f.price.errors?.required && sumitted \">Price is required</p>\n                <p style=\"color: red;\" *ngIf=\"f.price.errors?.pattern && sumitted \">Price only numbers</p>\n                </div>\n            </div>\n\n\n                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                  <label class=\"control-label\">Image</label>\n                </div>\n                <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                  <div class=\"pic-box\">\n                    <div class=\"logoImg\">\n                      <img [src]=\"myEditImage\" id=\"imagefile1\">\n                      <input formControlName=\"themeImage\"  id=\"logo-file\" type=\"file\" class=\"hide\" (change)=\"singleFilesForPackage($event , 'add')\">\n                      <div *ngIf=\"f.themeImage.invalid && sumitted\" class=\"invalid-feedback\">\n                      <p style=\"color: red;\" *ngIf=\"f.themeImage.errors?.required && sumitted \">Image is required</p>\n                      <!-- <p style=\"color: red;\" *ngIf=\"f.themeImage.errors?.required && isSelected\">Image is required</p> -->\n                    </div>\n                      <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                   \n                    </div>\n                  </div>\n                </div>\n        \n\n              </div>\n            </div>\n\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n              <button class=\"btn btn-success mr-5\" type=\"button\" [disabled]=\"addThemeForm.invalid\" data-dismiss=\"modal\"  (click)=\"addTheme()\">Done</button>\n            </div>\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Room Edit -->\n<div id=\"themesedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Edit</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\" [formGroup]=\"editThemeData\" >\n          <div class=\"row\">\n            <div class=\"row\">\n\n\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"row gutter-xs\">\n  \n                  <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                    <label>Id</label>\n                  </div>\n                  <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"id\" placeholder=\"id\"\n                      required />\n                     <p style=\"color: red;\" *ngIf=\"form.badgeType.errors?.required && isSubmitted\">Badge type is required</p> \n                  </div> -->\n\n                  <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                    <label>Theme Category</label>\n                  </div>\n                  <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                    <select class=\"form-control\" formControlName=\"themeCat\">\n                        <option value=\"Romance\">Romance</option>\n                        <option value=\"Adventure\">Adventure</option>\n                        <option value=\"Modern Lives\">Modern Lives</option>\n                        <option value=\"others\">others</option>\n                    </select>\n                    <div *ngIf=\"f.themeCat.invalid && sumitted\" class=\"invalid-feedback\">\n                      <p style=\"color: red;\" *ngIf=\"g.themeCat.errors?.required && sumitted \">Theme Category is required</p>\n                      </div>\n                  </div>\n\n                  <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                    <label>Theme Title</label>\n                  </div>\n                  <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"themeTitle\" placeholder=\"Theme title\"\n                      required />\n                    <!-- <p style=\"color: red;\" *ngIf=\"f.themeTitle.errors?.required && isSelected \">Theme title is required</p> -->\n                  </div>\n                \n  \n                  <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 \">\n                    <label>Price type:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                    <select class=\"form-control\" formControlName=\"priceType\">\n                      <option value=\"0\">Silver coin</option>\n                      <option value=\"1\">Gold coin</option>\n                    </select>\n                </div>\n  \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 \">\n                  <label>Price:</label>\n              </div>\n              <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" type=\"number\" min=\"0\" formControlName=\"price\" placeholder=\"Price\">\n                  <div *ngIf=\"g.price.invalid && sumitted\" class=\"invalid-feedback\">\n                  <p style=\"color: red;\" *ngIf=\"g.price.errors?.required && sumitted \">Price is required</p>\n                  <p style=\"color: red;\" *ngIf=\"g.price.errors?.pattern && sumitted \">Price only numbers</p>\n                  </div>\n              </div>\n  \n  \n                  <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 form-group add-pic\">\n                    <label class=\"control-label\">Image</label>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n                    <div class=\"pic-box\">\n                      <div class=\"logoImg\">\n                      <img [src]=\"myEditImage\" id=\"imagefile2\">\n                        <input formControlName=\"themeImage\"  id=\"logo-file\" type=\"file\" class=\"hide\" (change)=\"singleFilesForPackage($event , 'edit')\">\n                        <!-- <p style=\"color: red;\" *ngIf=\"f.themeImage.errors?.required && isSelected \">Image is required</p> -->\n                        <label for=\"logo-file\" class=\"btn btn-large\"></label>\n                      </div>\n                    </div>\n                  </div>\n          \n  \n                </div>\n              </div>\n  \n              <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center\">\n                <button class=\"btn btn-success mr-5\" type=\"button\" (click)=\"editTheme()\" >Done</button>\n              </div>\n  \n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-room/unique-room.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-room/unique-room.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\" routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a> > Unique Room Id Management</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-bottom-15\"></div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>70% Off On User Id</option>\n                      <option value=\"1\">80%</option>\n                      <option value=\"2\">60%</option>\n                      <option value=\"2\">30%</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\">Save</button>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\"\n                          [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">To </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"\n                          [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Duration</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>Choose</option>\n                      <option value=\"1\">Daily</option>\n                      <option value=\"2\">Weekly</option>\n                      <option value=\"2\">Monthly</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" (click)=\"showaddpop()\">Add</button>\n                  </div>                                                   \n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"sid\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>S Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationname\">\n                      <th mat-header-cell *matHeaderCellDef> Combination Name </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationtype\"> \n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Combinations Types </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.typeDetails.name}}\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        <!-- <span class=\"cd_mgmtBg\" [ngStyle]=\"{'background-image': 'url(' + 'https://voicechatimages.s3.me-south-1.amazonaws.com/1614231858663/IMG_8743.JPG' + ')'}\"></span> -->\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationSubType\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Combinations Sub Types </th>\n                      <td mat-cell *matCellDef=\"let element\">{{(element.subTypeDetails.name)?element.subTypeDetails.name : \"No Sub Type\"}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"priceingold\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price In Gold</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.price}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" (click)=\"showeditpop(element)\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                              <ng-container *ngIf=\"element.status == 1\">\n                                <button type=\"button\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                              </ng-container>\n                              \n                              <ng-container *ngIf=\"element.status == 0\">\n                                <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\"\n                                data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                              </ng-container>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this uniqueId?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser(0)\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this uniqueId?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser(1)\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this unique Id Set?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"themesadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\"  [formGroup]=\"addForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"name\" type=\"text\">\n                  <div *ngIf=\"f.name.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.name.errors?.required && submitted \">Combination Name is required</p>\n                    </div>\n                  <!-- <span class=\"form-control\">Auto Generated</span> -->\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Type</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" formControlName=\"type\" [(ngModel)]=\"selectedType\"  (change)=\"changeMainCategory($event.target.value)\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n                  </select>     \n                  <div *ngIf=\"f.type.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.type.errors?.required && submitted \">category is required</p>\n                    </div>          \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"price\" type=\"text\">    \n                  <div *ngIf=\"f.price.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.price.errors?.required && submitted \">price is required</p>\n                    </div>          \n                </div>\n\n              </div>\n              <div class=\"row gutter-xs gen-prev\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Generate Combinations</label>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedSubType\" (change)=\"changeSubCategory()\" formControlName=\"subType\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let subcategory of subcategories\"  value=\"{{ subcategory.id }}\">{{ subcategory.name }}</option>\n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <div class=\"\">\n                    <button class=\"btn btn-primary form-control\" (click)=\"generate()\" type=\"button\">Generate New</button>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Preview</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group generateno\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <ng-container *ngFor=\"let generatedId of generatedIds\">\n                          <div class=\"col-xs-3 col-md-3 col-sm-3\">\n                            <p class=\"textimg\">{{ generatedId }}</p>\n                          </div>        \n                        </ng-container>                 \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center margin-bottom-15\">\n              <button class=\"btn btn-primary mr-5\" (click)=\"submitaddform()\" type=\"button\">Save & Add</button>  \n            </div>                        \n          </div>\n          <div class=\"row gutter-xs comb-box\">\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label class=\"\">Combination Name</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Types</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>For Top</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Unique Id's</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>5 Digit-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>5 Digits Combinations</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Pairs-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAACBAA AAABA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Repeating-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAAAAA AAAAAAA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Consecutive-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>ABCD ABCDE ABCDEF</p>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>\n<!-- Room Edit -->\n\n<div id=\"themesedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">edit</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\"  [formGroup]=\"editForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"name\" type=\"text\">\n                  <div *ngIf=\"g.name.invalid && esubmitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"g.name.errors?.required && esubmitted \">Combination Name is required</p>\n                    </div>\n                  <!-- <span class=\"form-control\">Auto Generated</span> -->\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Type</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedTypeEdit\" [ngModelOptions]=\"{standalone: true}\"  >\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n                  </select>             \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"price\" type=\"text\">    \n                  <div *ngIf=\"g.price.invalid && esubmitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"g.price.errors?.required && esubmitted \">price is required</p>\n                    </div>          \n                </div>\n\n              </div>\n              <div class=\"row gutter-xs gen-prev\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combinations SubType</label>\n                </div>\n                \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedSubTypeEdit\" [ngModelOptions]=\"{standalone: true}\" >\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let subcategory of subcategories\"  value=\"{{ subcategory.id }}\">{{ subcategory.name }}</option>\n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                  <!-- <div class=\"\">\n                    <button class=\"btn btn-primary form-control\" (click)=\"generate()\" type=\"button\">Generate New</button>\n                  </div> -->\n                </div>\n              \n                \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Preview:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group generateno\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <ng-container *ngFor=\"let generatedId of generatedIds\">\n                          <div class=\"col-xs-3 col-md-3 col-sm-3\">\n                            <p class=\"textimg\" [ngStyle]=\"{'background-color': generatedId.is_bought ? '#f57979' : ''}\">{{ generatedId.idNumber }}</p>\n                          </div>        \n                        </ng-container>                 \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center margin-bottom-15\">\n              <button class=\"btn btn-primary mr-5\" (click)=\"submiteditform()\" type=\"button\">Update</button>  \n            </div>                        \n          </div>\n          <div class=\"row gutter-xs comb-box\">\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label class=\"\">Combination Name</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Types</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>For Top</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Unique Id's</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>5 Digit-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>5 Digits Combinations</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Pairs-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAACBAA AAABA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Repeating-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAAAAA AAAAAAA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Consecutive-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>ABCD ABCDE ABCDEF</p>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-user/unique-user.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-user/unique-user.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"layout-main\">\n  <app-left-sidebar></app-left-sidebar>\n  <div class=\"subadminPage\"></div>\n  <div class=\"sellerListPage ExplorerListPage\">\n    <div class=\"layout-content\">\n      <div class=\"layout-content-body\">\n        <div class=\"title-bar\">\n          <h1 class=\"title-bar-title\">\n            <!-- <span class=\"d-ib\">Leaderboards & Contribution Management</span> -->\n            <span class=\"d-ib\"><a class=\"backtopayment\" routerLink=\"/microtransaction-mgmt/microtransaction-option-mgmt\">Microtransaction Option Management</a> > Unique User Id Management</span>\n          </h1>\n        </div>\n        <div class=\"row gutter-xs\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-bottom-15\"></div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>70% Off On User Id</option>\n                      <option value=\"1\">80%</option>\n                      <option value=\"2\">60%</option>\n                      <option value=\"2\">30%</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\">Save</button>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Sort</label>\n                    <select class=\"form-control\">\n                      <option value=\"\" disabled>choose</option>\n                      <option value=\"0\">a-z</option>\n                      <option value=\"1\">z-a</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Search</label>\n                    <div fxLayout fxLayoutAlign=\"top center\" class=\"table-search\">\n                      <mat-form-field fxFlex=\"100%\">\n                        <mat-label>Search</mat-label>\n                        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\"\n                          placeholder=\"Search\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">From </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" (ngModelChange)=\"fromDate($event)\" [(ngModel)]=\"fromdate\"\n                          [options]=\"optionsFrom\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <div class=\"form-group\">\n                      <label class=\"mr-2 wpx-50\">To </label>\n                      <div class=\"d-flex w-100 align-items-center\">\n                        <ng-datepicker class=\"w-100\" [(ngModel)]=\"todate\" (ngModelChange)=\"EndDate($event)\"\n                          [options]=\"optionsTo\" [ngModelOptions]=\"{standalone: true}\"></ng-datepicker>\n                        <i class=\"fa fa-calendar ml-2 fs-18 cal-icon\"></i>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>Duration</label>\n                    <select class=\"form-control\">\n                      <option value=\"0\" disabled>Choose</option>\n                      <option value=\"1\">Daily</option>\n                      <option value=\"2\">Weekly</option>\n                      <option value=\"2\">Monthly</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 margin-bottom-15\">\n                    <label>&nbsp;</label>\n                    <button class=\"form-control btn btn-primary\" type=\"button\" (click)=\"showaddpop()\">Add</button>\n                  </div>                                                   \n                </div>\n                <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"dataSource\" matSort\n                    class=\"mat-elevation-z8 table table-striped table-bordered\">\n                    <ng-container matColumnDef=\"checkbox\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-50\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"checkAll\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <label class=\"custom-control custom-control-primary custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\">\n                          <span class=\"custom-control-indicator\"></span>\n                        </label>\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"sid\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>S Id</th>\n                      <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationname\">\n                      <th mat-header-cell *matHeaderCellDef> Combination Name </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationtype\"> \n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Combinations Types </th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.typeDetails.name}}\n                        <!-- <img [src]=\"element.giftImage\" style=\"width: 40px;height:40px;\"> -->\n                        <!-- <span class=\"cd_mgmtBg\" [ngStyle]=\"{'background-image': 'url(' + 'https://voicechatimages.s3.me-south-1.amazonaws.com/1614231858663/IMG_8743.JPG' + ')'}\"></span> -->\n                      </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"combinationSubType\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef> Combinations Sub Types </th>\n                      <td mat-cell *matCellDef=\"let element\">{{(element.subTypeDetails.name)?element.subTypeDetails.name : \"No Sub Type\"}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"priceingold\">\n                      <th mat-header-cell mat-sort-header *matHeaderCellDef>Price In Gold</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.price}}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"action\">\n                      <th mat-header-cell *matHeaderCellDef class=\"wpx-150\"> Action </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        <ng-container>\n                          <div class=\"d-flex\">\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/view-user-mgmt/{{element._id}}\"><i class=\"fa fa-eye\"></i></button> -->\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/layout/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <a class=\"btn btn-sm btn-primary\" (click)=\"showeditpop(element)\"><i\n                                class=\"fa fa-edit\"></i></a>\n                            <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" routerLink=\"/home/user-mgm-view\"><i class=\"fa fa-eye\"></i></button> -->\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#deleteUser\"\n                              data-toggle=\"modal\" (click)='pickupID(element._id)'><i class=\"fa fa-trash-o\"></i></button>\n                              <ng-container *ngIf=\"element.status == 1\">\n                                <button type=\"button\" class=\"btn btn-sm btn-success\" data-target=\"#blockUser\"\n                              data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                              </ng-container>\n                              \n                              <ng-container *ngIf=\"element.status == 0\">\n                                <button type=\"button\" class=\"btn btn-sm btn-danger\" data-target=\"#unblockUser\"\n                                data-toggle=\"modal\" (click)=\"pickupID(element._id)\"><i class=\"fa fa-ban\"></i></button>\n                              </ng-container>\n                          </div>\n                        </ng-container>\n                      </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n                  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n<!-- Block -->\n<div id=\"blockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to block this uniqueId?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#success-block\" (click)=\"blockunblockuser(0)\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"success-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Blocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block Confirm-->\n<!-- Block -->\n<div id=\"unblockUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-ban\"></i>\n          </div>\n          <h4>Are you sure you want to unblock this uniqueId?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#unsuccess-block\" (click)=\"blockunblockuser(1)\">Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Block -->\n<!-- Block Confirm-->\n<div class=\"modal fade\" id=\"unsuccess-block\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Unblocked Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Unblock Confirm-->\n<!-- Delete -->\n<div id=\"deleteUser\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"h2 text-success\">\n            <i class=\"fa fa-trash-o\"></i>\n          </div>\n          <h4>Are you sure you want to delete this unique Id Set?</h4>\n          <div class=\"m-t-lg\">\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\" type=\"button\" data-toggle=\"modal\"\n              data-target=\"#deleted-success\" (click)='delUser()'>Yes</button>\n            <button class=\"btn btn-success\" data-dismiss=\"modal\" type=\"button\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete -->\n<!-- Delete Confirm-->\n<div class=\"modal fade\" id=\"deleted-success\">\n  <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <div class=\"h2 text-success\">\n          <i class=\"fa fa-check-square\"></i>\n        </div>\n        <h4>Deleted Successfully !</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Delete Confirm end-->\n<!-- Room Add -->\n<div id=\"themesadd\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">Add</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\"  [formGroup]=\"addForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"name\" type=\"text\">\n                  <div *ngIf=\"f.name.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.name.errors?.required && submitted \">Combination Name is required</p>\n                    </div>\n                  <!-- <span class=\"form-control\">Auto Generated</span> -->\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Type</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" formControlName=\"type\" [(ngModel)]=\"selectedType\"  (change)=\"changeMainCategory($event.target.value)\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n                  </select>     \n                  <div *ngIf=\"f.type.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.type.errors?.required && submitted \">category is required</p>\n                    </div>          \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"price\" type=\"text\">    \n                  <div *ngIf=\"f.price.invalid && submitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"f.price.errors?.required && submitted \">price is required</p>\n                    </div>          \n                </div>\n\n              </div>\n              <div class=\"row gutter-xs gen-prev\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Generate Combinations</label>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedSubType\" (change)=\"changeSubCategory()\" formControlName=\"subType\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let subcategory of subcategories\"  value=\"{{ subcategory.id }}\">{{ subcategory.name }}</option>\n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <div class=\"\">\n                    <button class=\"btn btn-primary form-control\" (click)=\"generate()\" type=\"button\">Generate New</button>\n                  </div>\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Preview</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group generateno\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <ng-container *ngFor=\"let generatedId of generatedIds\">\n                          <div class=\"col-xs-3 col-md-3 col-sm-3\">\n                            <p class=\"textimg\">{{ generatedId }}</p>\n                          </div>        \n                        </ng-container>                 \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center margin-bottom-15\">\n              <button class=\"btn btn-primary mr-5\" (click)=\"submitaddform()\" type=\"button\">Save & Add</button>  \n            </div>                        \n          </div>\n          <div class=\"row gutter-xs comb-box\">\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label class=\"\">Combination Name</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Types</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>For Top</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Unique Id's</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>5 Digit-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>5 Digits Combinations</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Pairs-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAACBAA AAABA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Repeating-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAAAAA AAAAAAA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Consecutive-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>ABCD ABCDE ABCDEF</p>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>\n<!-- Room Edit -->\n\n<div id=\"themesedit\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h4 class=\"modal-title\">edit</h4>\n      </div>\n      <div class=\"modal-body provider-detail\">\n        <form class=\"form\"  [formGroup]=\"editForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n              <div class=\"row gutter-xs\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Name</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"name\" type=\"text\">\n                  <div *ngIf=\"g.name.invalid && esubmitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"g.name.errors?.required && esubmitted \">Combination Name is required</p>\n                    </div>\n                  <!-- <span class=\"form-control\">Auto Generated</span> -->\n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combination Type</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedTypeEdit\" [ngModelOptions]=\"{standalone: true}\"  >\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n                  </select>             \n                </div>\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Price:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group\">\n                  <input class=\"form-control\" formControlName=\"price\" type=\"text\">    \n                  <div *ngIf=\"g.price.invalid && esubmitted\" class=\"invalid-feedback\">\n                    <p style=\"color: red;\" *ngIf=\"g.price.errors?.required && esubmitted \">price is required</p>\n                    </div>          \n                </div>\n\n              </div>\n              <div class=\"row gutter-xs gen-prev\">\n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Combinations SubType</label>\n                </div>\n                \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"selectedSubTypeEdit\" [ngModelOptions]=\"{standalone: true}\" >\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let subcategory of subcategories\"  value=\"{{ subcategory.id }}\">{{ subcategory.name }}</option>\n                  </select>                  \n                </div>\n                <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group\">\n                  <!-- <div class=\"\">\n                    <button class=\"btn btn-primary form-control\" (click)=\"generate()\" type=\"button\">Generate New</button>\n                  </div> -->\n                </div>\n              \n                \n                <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 form-group\">\n                  <label>Preview:</label>\n                </div>\n                <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 form-group generateno\">\n                  <div class=\"row padding-5\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">                      \n                      <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 form-group assign-modal overflow-auto\">\n                          <ng-container *ngFor=\"let generatedId of generatedIds\">\n                          <div class=\"col-xs-3 col-md-3 col-sm-3\">\n                            <p class=\"textimg\" [ngStyle]=\"{'background-color': generatedId.is_bought ? '#f57979' : ''}\">{{ generatedId.idNumber }}</p>\n                          </div>        \n                        </ng-container>                 \n                        </div>\n                      </div>                      \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 text-center margin-bottom-15\">\n              <button class=\"btn btn-primary mr-5\" (click)=\"submiteditform()\" type=\"button\">Update</button>  \n            </div>                        \n          </div>\n          <div class=\"row gutter-xs comb-box\">\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label class=\"\">Combination Name</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Types</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>For Top</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>Unique Id's</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>5 Digit-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>5 Digits Combinations</p>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Pairs-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAACBAA AAABA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Repeating-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>AAAAA AAAAAA AAAAAAA</p>\n              </div>\n            </div> \n            <div class=\"col-12 col-sm-4 col-md-4 col-lg-4 form-group\">\n              <div class=\"\">\n                <label>Consecutive-</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 form-group\">\n              <div class=\"\">\n                <p>ABCD ABCDE ABCDEF</p>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>  \n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/frames/frames.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/frames/frames.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".coin-tab{\n    margin-top: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L2ZyYW1lcy9mcmFtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21pY3JvdHJhbnNhY3Rpb24tbWdtdC9mcmFtZXMvZnJhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29pbi10YWJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjgsIDE2NCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/frames/frames.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/frames/frames.component.ts ***!
  \******************************************************************/
/*! exports provided: FramesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramesComponent", function() { return FramesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");







var ELEMENT_DATA = [
    { id: "123456", framesname: "Name", image: "Time Period", price: "25 Gold Coins" },
    { id: "123456", framesname: "Name", image: "Time Period", price: "25 Gold Coins" },
    { id: "123456", framesname: "Name", image: "Time Period", price: "25 Gold Coins" },
];
var FramesComponent = /** @class */ (function () {
    function FramesComponent(FormBuilder, 
    // private api: AuthenticationService,
    router, route, toast, api, service) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.api = api;
        this.service = service;
        this.displayedColumns = [
            "checkbox",
            "id",
            "framesname",
            "image",
            "cointype",
            "price",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.submitted = false;
        this.allPost = [];
        this.fromdate = new Date();
        this.todate = new Date();
    }
    FramesComponent.prototype.ngOnInit = function () {
        this.addForm = this.FormBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            coinType: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.editForm = this.FormBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            coinType: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.getAllFrames();
    };
    FramesComponent.prototype.getAllFrames = function () {
        var _this = this;
        this.api.getAllFrame().subscribe(function (result) {
            console.log(result);
            _this.allPost = result['response'].reverse();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.allPost);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Object.defineProperty(FramesComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FramesComponent.prototype, "g", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FramesComponent.prototype.singleFilesForPackage = function (event) {
        var e_1, _a;
        var _this = this;
        this.selImage = true;
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_1_1 = singleFiles_1.next(); !singleFiles_1_1.done; singleFiles_1_1 = singleFiles_1.next()) {
                    var file = singleFiles_1_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        document.getElementById("imagefile1").setAttribute("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (singleFiles_1_1 && !singleFiles_1_1.done && (_a = singleFiles_1.return)) _a.call(singleFiles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.picture = event.target.files[0];
    };
    FramesComponent.prototype.singleFilesForPackageUpdate = function (event) {
        var e_2, _a;
        var _this = this;
        this.selImage = true;
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_2_1 = singleFiles_2.next(); !singleFiles_2_1.done; singleFiles_2_1 = singleFiles_2.next()) {
                    var file = singleFiles_2_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        document.getElementById("imagefile2").setAttribute("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (singleFiles_2_1 && !singleFiles_2_1.done && (_a = singleFiles_2.return)) _a.call(singleFiles_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.picture = event.target.files[0];
    };
    FramesComponent.prototype.add = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid)
            return;
        var datatosubmit = new FormData();
        datatosubmit.append("title", this.addForm.value.title);
        datatosubmit.append("price", this.addForm.value.price);
        datatosubmit.append("coinType", this.addForm.value.coinType);
        datatosubmit.append("frameImages", this.picture);
        this.api.addFrames(datatosubmit).subscribe(function (result) {
            _this.getAllFrames();
            _this.service.toaster("success", "frame added Successfully");
            $('#framesadd').modal('hide');
        });
    };
    FramesComponent.prototype.edit = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.invalid)
            return;
        var datatosubmit = new FormData();
        datatosubmit.append("_id", this.id);
        datatosubmit.append("title", this.editForm.value.title);
        datatosubmit.append("price", this.editForm.value.price);
        datatosubmit.append("coinType", this.editForm.value.coinType);
        if (this.picture) {
            datatosubmit.append("frameImages", this.picture);
        }
        this.api.editFrames(datatosubmit).subscribe(function (result) {
            _this.getAllFrames();
            _this.service.toaster("success", "frame updated Successfully");
            $('#framesedit').modal('hide');
        });
    };
    FramesComponent.prototype.showeditpopup = function (ele) {
        this.submitted = false;
        this.id = ele._id;
        this.editForm.patchValue({
            title: ele.title,
            coinType: ele.coinType.toString(),
            price: ele.price,
        });
    };
    FramesComponent.prototype.showaddpopup = function () {
        this.addForm.reset();
        this.addForm.patchValue({ coinType: "0" });
        this.submitted = false;
    };
    FramesComponent.prototype.sortfilter = function (event) {
        var sort = event.target.value;
        console.log(sort, "hiiii inside sort");
        if (sort === "0") {
            console.log(this.allPost, "userss");
            this.allPost.sort(function (a, b) { return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allPost);
            this.dataSource.paginator = this.paginator;
        }
        else {
            this.allPost.sort(function (a, b) { return (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allPost);
            this.dataSource.paginator = this.paginator;
        }
    };
    FramesComponent.prototype.blockUnblock = function (id) {
        this.id = id;
    };
    FramesComponent.prototype.pickupID = function (id) {
        this.id = id;
    };
    FramesComponent.prototype.blockunblockuser = function () {
        var _this = this;
        this.api.blockUnblockFrames({
            _id: this.id
        }).subscribe(function (result) {
            _this.getAllFrames();
        });
    };
    FramesComponent.prototype.delUser = function () {
        var _this = this;
        this.api.removeFrames({
            _id: this.id
        }).subscribe(function (result) {
            _this.getAllFrames();
        });
    };
    FramesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], FramesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], FramesComponent.prototype, "sort", void 0);
    FramesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frames',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frames.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/frames/frames.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frames.component.css */ "./src/app/microtransaction-mgmt/frames/frames.component.css")).default]
        })
    ], FramesComponent);
    return FramesComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .statistics{\n    color: red;\n    margin-right: 10px;\n    text-decoration: none;\n} */\n.m-option{\n    position: relative;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    padding: 12px;\n    cursor: pointer;\n    box-shadow: 0 0 5px rgb(0 0 0 / 5%);\n    -webkit-box-shadow: 0 0 5px rgb(0 0 0 / 5%);\n}\n.m-option ul{\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0;\n}\n.m-option ul li{\n   display: inline-block;\n}\n.m-option ul li:last-child{\n   float: right;\n   margin-top: 16px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L21pY3JvLXRyYW4tb3B0aW9uLW1nbXQvbWljcm8tdHJhbi1vcHRpb24tbWdtdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSDtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLHFCQUFxQjtBQUN4QjtBQUNBO0dBQ0csWUFBWTtHQUNaLGdCQUFnQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL21pY3JvdHJhbnNhY3Rpb24tbWdtdC9taWNyby10cmFuLW9wdGlvbi1tZ210L21pY3JvLXRyYW4tb3B0aW9uLW1nbXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5zdGF0aXN0aWNze1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0gKi9cbi5tLW9wdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoMCAwIDAgLyA1JSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYigwIDAgMCAvIDUlKTtcbn1cbi5tLW9wdGlvbiB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm0tb3B0aW9uIHVsIGxpe1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm0tb3B0aW9uIHVsIGxpOmxhc3QtY2hpbGR7XG4gICBmbG9hdDogcmlnaHQ7XG4gICBtYXJnaW4tdG9wOiAxNnB4O1xuIH0iXX0= */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MicroTranOptionMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroTranOptionMgmtComponent", function() { return MicroTranOptionMgmtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MicroTranOptionMgmtComponent = /** @class */ (function () {
    function MicroTranOptionMgmtComponent() {
    }
    MicroTranOptionMgmtComponent.prototype.ngOnInit = function () {
    };
    MicroTranOptionMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-micro-tran-option-mgmt',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./micro-tran-option-mgmt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./micro-tran-option-mgmt.component.css */ "./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.css")).default]
        })
    ], MicroTranOptionMgmtComponent);
    return MicroTranOptionMgmtComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/microtransaction-mgmt-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/microtransaction-mgmt-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MicrotransactionMgmtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrotransactionMgmtRoutingModule", function() { return MicrotransactionMgmtRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frames_frames_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frames/frames.component */ "./src/app/microtransaction-mgmt/frames/frames.component.ts");
/* harmony import */ var _micro_tran_option_mgmt_micro_tran_option_mgmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./micro-tran-option-mgmt/micro-tran-option-mgmt.component */ "./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.ts");
/* harmony import */ var _pin_to_top_pin_to_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pin-to-top/pin-to-top.component */ "./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.ts");
/* harmony import */ var _room_lock_room_lock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-lock/room-lock.component */ "./src/app/microtransaction-mgmt/room-lock/room-lock.component.ts");
/* harmony import */ var _themes_view_themes_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes-view/themes-view.component */ "./src/app/microtransaction-mgmt/themes-view/themes-view.component.ts");
/* harmony import */ var _unique_room_unique_room_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unique-room/unique-room.component */ "./src/app/microtransaction-mgmt/unique-room/unique-room.component.ts");
/* harmony import */ var _unique_user_unique_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unique-user/unique-user.component */ "./src/app/microtransaction-mgmt/unique-user/unique-user.component.ts");










var routes = [
    { path: 'microtransaction-option-mgmt', component: _micro_tran_option_mgmt_micro_tran_option_mgmt_component__WEBPACK_IMPORTED_MODULE_4__["MicroTranOptionMgmtComponent"] },
    { path: 'room-lock', component: _room_lock_room_lock_component__WEBPACK_IMPORTED_MODULE_6__["RoomLockComponent"] },
    { path: 'pin-to-top', component: _pin_to_top_pin_to_top_component__WEBPACK_IMPORTED_MODULE_5__["PinToTopComponent"] },
    { path: 'unique-room', component: _unique_room_unique_room_component__WEBPACK_IMPORTED_MODULE_8__["UniqueRoomComponent"] },
    { path: 'unique-user', component: _unique_user_unique_user_component__WEBPACK_IMPORTED_MODULE_9__["UniqueUserComponent"] },
    { path: 'frames-view', component: _frames_frames_component__WEBPACK_IMPORTED_MODULE_3__["FramesComponent"] },
    { path: 'themes-view', component: _themes_view_themes_view_component__WEBPACK_IMPORTED_MODULE_7__["ThemesViewComponent"] },
];
var MicrotransactionMgmtRoutingModule = /** @class */ (function () {
    function MicrotransactionMgmtRoutingModule() {
    }
    MicrotransactionMgmtRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MicrotransactionMgmtRoutingModule);
    return MicrotransactionMgmtRoutingModule;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/microtransaction-mgmt.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/microtransaction-mgmt.module.ts ***!
  \***********************************************************************/
/*! exports provided: MicrotransactionMgmtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrotransactionMgmtModule", function() { return MicrotransactionMgmtModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_comman_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/comman.module */ "./src/app/common/comman.module.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _microtransaction_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./microtransaction-mgmt-routing.module */ "./src/app/microtransaction-mgmt/microtransaction-mgmt-routing.module.ts");
/* harmony import */ var _micro_tran_option_mgmt_micro_tran_option_mgmt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./micro-tran-option-mgmt/micro-tran-option-mgmt.component */ "./src/app/microtransaction-mgmt/micro-tran-option-mgmt/micro-tran-option-mgmt.component.ts");
/* harmony import */ var _room_lock_room_lock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./room-lock/room-lock.component */ "./src/app/microtransaction-mgmt/room-lock/room-lock.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pin_to_top_pin_to_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pin-to-top/pin-to-top.component */ "./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.ts");
/* harmony import */ var _unique_room_unique_room_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unique-room/unique-room.component */ "./src/app/microtransaction-mgmt/unique-room/unique-room.component.ts");
/* harmony import */ var _unique_user_unique_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./unique-user/unique-user.component */ "./src/app/microtransaction-mgmt/unique-user/unique-user.component.ts");
/* harmony import */ var _frames_frames_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./frames/frames.component */ "./src/app/microtransaction-mgmt/frames/frames.component.ts");
/* harmony import */ var _themes_view_themes_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./themes-view/themes-view.component */ "./src/app/microtransaction-mgmt/themes-view/themes-view.component.ts");
















var MicrotransactionMgmtModule = /** @class */ (function () {
    function MicrotransactionMgmtModule() {
    }
    MicrotransactionMgmtModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_micro_tran_option_mgmt_micro_tran_option_mgmt_component__WEBPACK_IMPORTED_MODULE_8__["MicroTranOptionMgmtComponent"], _room_lock_room_lock_component__WEBPACK_IMPORTED_MODULE_9__["RoomLockComponent"], _pin_to_top_pin_to_top_component__WEBPACK_IMPORTED_MODULE_11__["PinToTopComponent"], _unique_room_unique_room_component__WEBPACK_IMPORTED_MODULE_12__["UniqueRoomComponent"], _unique_user_unique_user_component__WEBPACK_IMPORTED_MODULE_13__["UniqueUserComponent"], _frames_frames_component__WEBPACK_IMPORTED_MODULE_14__["FramesComponent"], _themes_view_themes_view_component__WEBPACK_IMPORTED_MODULE_15__["ThemesViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_comman_module__WEBPACK_IMPORTED_MODULE_5__["CommanModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_6__["NgDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _microtransaction_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_7__["MicrotransactionMgmtRoutingModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MicrotransactionMgmtModule);
    return MicrotransactionMgmtModule;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pY3JvdHJhbnNhY3Rpb24tbWdtdC9waW4tdG8tdG9wL3Bpbi10by10b3AuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.ts ***!
  \**************************************************************************/
/*! exports provided: PinToTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinToTopComponent", function() { return PinToTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ELEMENT_DATA = [
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
];
var PinToTopComponent = /** @class */ (function () {
    function PinToTopComponent(formBuilder, 
    // private api: AuthenticationService,
    router, route, toast) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.displayedColumns = [
            "checkbox",
            "sid",
            "pkgname",
            "duration",
            "priceingold",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.fromdate = new Date();
        this.todate = new Date();
    }
    PinToTopComponent.prototype.ngOnInit = function () {
    };
    PinToTopComponent.prototype.singleFilesForPackage = function (event) {
        var e_1, _a;
        var _this = this;
        this.selImage = true;
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_1_1 = singleFiles_1.next(); !singleFiles_1_1.done; singleFiles_1_1 = singleFiles_1.next()) {
                    var file = singleFiles_1_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        document.getElementById("imagefile1").setAttribute("src", e.target.result);
                        document.getElementById("imagefile2").setAttribute("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (singleFiles_1_1 && !singleFiles_1_1.done && (_a = singleFiles_1.return)) _a.call(singleFiles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.picture = event.target.files[0];
    };
    PinToTopComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], PinToTopComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], PinToTopComponent.prototype, "sort", void 0);
    PinToTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pin-to-top',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pin-to-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pin-to-top.component.css */ "./src/app/microtransaction-mgmt/pin-to-top/pin-to-top.component.css")).default]
        })
    ], PinToTopComponent);
    return PinToTopComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/room-lock/room-lock.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/room-lock/room-lock.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading-headder{\n    margin-top: 35px;\n    position: relative;\n  }\n.matbody{\n    position: relative;\n  }\n.backtopayment{\n    text-decoration: none;\n    color:rgb(114, 111, 111);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3Jvb20tbG9jay9yb29tLWxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21pY3JvdHJhbnNhY3Rpb24tbWdtdC9yb29tLWxvY2svcm9vbS1sb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy1oZWFkZGVye1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4ubWF0Ym9keXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbi5iYWNrdG9wYXltZW50e1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjpyZ2IoMTE0LCAxMTEsIDExMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/room-lock/room-lock.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/room-lock/room-lock.component.ts ***!
  \************************************************************************/
/*! exports provided: RoomLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomLockComponent", function() { return RoomLockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");







var ELEMENT_DATA = [
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
    { sid: "101", pkgname: "Name", duration: "Time Period", priceingold: "Price" },
];
var RoomLockComponent = /** @class */ (function () {
    function RoomLockComponent(
    // private api: AuthenticationService,
    router, route, toast, api, FormBuilder, service) {
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.api = api;
        this.FormBuilder = FormBuilder;
        this.service = service;
        this.displayedColumns = [
            "checkbox",
            "sid",
            "pkgname",
            "duration",
            "priceingold",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.allPost = [];
        this.submitted = false;
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.durationFilter = "";
        this.nameFilter = "";
        this.filterItems = function (needle, heystack) {
            var query = needle.toLowerCase();
            return heystack.filter(function (item) { return item.title.toLowerCase().indexOf(query) >= 0; });
        };
        this.fromdate = new Date();
        this.todate = new Date();
    }
    RoomLockComponent.prototype.ngOnInit = function () {
        this.getAllPackages();
        this.addForm = this.FormBuilder.group({
            packageName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            duration: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]+$")]]
        });
        this.editForm = this.FormBuilder.group({
            packageName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            duration: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]+$")]]
        });
    };
    Object.defineProperty(RoomLockComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomLockComponent.prototype, "g", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RoomLockComponent.prototype.savePackage = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        var dataTosave = {
            "title": this.addForm.value.packageName,
            "price": this.addForm.value.price,
            "month": this.addForm.value.duration,
        };
        this.api.addAllRoomLockPackage(dataTosave).subscribe(function (result) {
            _this.getAllPackages();
            _this.service.toaster("success", "package added Successfully");
            $('#roomlockadd').modal('hide');
        });
    };
    RoomLockComponent.prototype.updatePackage = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.invalid) {
            return;
        }
        var dataTosave = {
            "_id": this.id,
            "title": this.editForm.value.packageName,
            "price": this.editForm.value.price,
            "month": this.editForm.value.duration,
        };
        this.api.editAllRoomLockPackage(dataTosave).subscribe(function (result) {
            _this.getAllPackages();
            _this.service.toaster("success", "package updated Successfully");
            $('#roomlockedit').modal('hide');
        });
    };
    RoomLockComponent.prototype.showAddPopup = function () {
        this.submitted = false;
        this.addForm.patchValue({
            "packageName": "",
            "price": "",
            "duration": "1"
        });
    };
    RoomLockComponent.prototype.showEditPopup = function (ele) {
        this.submitted = false;
        this.id = ele._id;
        console.log(ele);
        this.editForm.patchValue({
            "packageName": ele.title,
            "price": ele.price,
            "duration": ele.month
        });
    };
    RoomLockComponent.prototype.getAllPackages = function () {
        var _this = this;
        this.api.getAllRoomLockPackage().subscribe(function (result) {
            _this.allPost = result['data'].reverse();
            console.log(_this.allPost);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.allPost);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    // singleFilesForPackage(event) {
    //   this.selImage =true
    //     const file1 = event.target.files[0];
    //     this.single = [];
    //     var singleFiles = event.target.files;
    //     if (singleFiles) {
    //       for (var file of singleFiles) {
    //         var singleReader = new FileReader();
    //         singleReader.onload = (e: any) => {
    //           this.single.push(e.target.result);
    //           document.getElementById("imagefile1").setAttribute("src", e.target.result);
    //           document.getElementById("imagefile2").setAttribute("src", e.target.result);  
    //         };
    //         singleReader.readAsDataURL(file);
    //       }
    //     }
    //     this.picture = event.target.files[0];
    //   }
    RoomLockComponent.prototype.blockUnblock = function (id) {
        this.id = id;
    };
    RoomLockComponent.prototype.pickupID = function (id) {
        this.id = id;
    };
    RoomLockComponent.prototype.blockunblockuser = function () {
        var _this = this;
        this.api.blockUnblockAllRoomLockPackage({
            _id: this.id
        }).subscribe(function (result) {
            _this.getAllPackages();
        });
    };
    RoomLockComponent.prototype.delUser = function () {
        var _this = this;
        this.api.deleteAllRoomLockPackage({
            _id: this.id
        }).subscribe(function (result) {
            _this.getAllPackages();
        });
    };
    RoomLockComponent.prototype.doFilter = function () {
        var _this = this;
        var allPost = this.allPost;
        if (this.nameFilter) {
            allPost = this.filterItems(this.nameFilter, allPost);
        }
        if (this.durationFilter) {
            allPost = allPost.filter(function (ele) { if (ele.month == _this.durationFilter) {
                return ele;
            } });
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](allPost);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    RoomLockComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], RoomLockComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], RoomLockComponent.prototype, "sort", void 0);
    RoomLockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-lock',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./room-lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/room-lock/room-lock.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./room-lock.component.css */ "./src/app/microtransaction-mgmt/room-lock/room-lock.component.css")).default]
        })
    ], RoomLockComponent);
    return RoomLockComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/themes-view/themes-view.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/themes-view/themes-view.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".coin-tab{\n    margin-top: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3RoZW1lcy12aWV3L3RoZW1lcy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9taWNyb3RyYW5zYWN0aW9uLW1nbXQvdGhlbWVzLXZpZXcvdGhlbWVzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2luLXRhYntcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2OCwgMTY0LCAxNjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/themes-view/themes-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/themes-view/themes-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ThemesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesViewComponent", function() { return ThemesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");







var ThemesViewComponent = /** @class */ (function () {
    function ThemesViewComponent(formBuilder, service, router, route, toast) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.ELEMENT_DATA = [];
        this.displayedColumns = [
            "checkbox",
            "id",
            "themeTitle",
            "themeImage",
            "priceType",
            "price",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.sumitted = false;
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.myEditImage = "assets/img/user.jpg";
        this.fromdate = new Date();
        this.todate = new Date();
    }
    ThemesViewComponent.prototype.ngOnInit = function () {
        this.getTheme();
        this.addThemeForm = this.formBuilder.group({
            themeTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            themeImage: [""],
            priceType: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            themeCat: ["Romance", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.editThemeData = this.formBuilder.group({
            themeCat: ["Romance", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            themeTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            themeImage: [""],
            priceType: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
        });
    };
    Object.defineProperty(ThemesViewComponent.prototype, "f", {
        get: function () {
            return this.addThemeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThemesViewComponent.prototype, "g", {
        get: function () {
            return this.editThemeData.controls;
        },
        enumerable: true,
        configurable: true
    });
    ThemesViewComponent.prototype.singleFilesForPackage = function (event, type) {
        var e_1, _a;
        var _this = this;
        console.log('image selection working');
        var file1 = event.target.files[0];
        this.single = [];
        var singleFiles = event.target.files;
        if (singleFiles) {
            try {
                for (var singleFiles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](singleFiles), singleFiles_1_1 = singleFiles_1.next(); !singleFiles_1_1.done; singleFiles_1_1 = singleFiles_1.next()) {
                    var file = singleFiles_1_1.value;
                    var singleReader = new FileReader();
                    singleReader.onload = function (e) {
                        _this.single.push(e.target.result);
                        if (type == "add") {
                            document
                                .getElementById("imagefile1")
                                .setAttribute("src", e.target.result);
                        }
                        if (type == "edit") {
                            document
                                .getElementById("imagefile2")
                                .setAttribute("src", e.target.result);
                        }
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (singleFiles_1_1 && !singleFiles_1_1.done && (_a = singleFiles_1.return)) _a.call(singleFiles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.picture = event.target.files[0];
        console.log(this.picture);
    };
    ThemesViewComponent.prototype.addTheme = function () {
        var _this = this;
        this.sumitted = true;
        if (this.addThemeForm.invalid) {
            return;
        }
        var data = new FormData();
        data.append("themeTitle", this.addThemeForm.value.themeTitle);
        data.append("priceType", this.addThemeForm.value.priceType);
        if (this.addThemeForm.value.priceType == 0) {
            data.append("priceForSilver", this.addThemeForm.value.price);
        }
        else {
            data.append("priceForGold", this.addThemeForm.value.price);
        }
        data.append("themeCat", this.addThemeForm.value.themeCat);
        if (this.picture != undefined || this.picture != null) {
            data.append("themeImage", this.picture);
        }
        this.service.addThemes(data).subscribe(function (res) {
            console.log("Adding the data to theme", res);
            _this.service.toaster("Success", "Successfully added");
            _this.router.navigateByUrl("/microtransaction-mgmt/themes-view");
            _this.getTheme();
            _this.sumitted = true;
            _this.addThemeForm.reset();
            _this.picture = "assets/img/user.jpg";
            $("#themesadd").model("hide");
        }, function (error) {
            console.log(error);
            _this.service.toaster("error", "Something went wrong");
        });
    };
    ThemesViewComponent.prototype.getTheme = function () {
        var _this = this;
        this.service.getAllTheme().subscribe(function (result) {
            _this.list = result.response;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.list);
            console.log("get all theme", _this.list);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ThemesViewComponent.prototype.editTheme = function () {
        var _this = this;
        console.log(this.editId, "Editable id is " + this.editId);
        this.sumitted = true;
        if (this.editThemeData.invalid) {
            console.log('form is invalid', this.editThemeData.value);
            return;
        }
        ;
        var editdata = new FormData();
        editdata.append("themeTitle", this.editThemeData.value.themeTitle);
        editdata.append("priceType", this.editThemeData.value.priceType);
        if (this.editThemeData.value.priceType == 0) {
            editdata.append("priceForSilver", this.editThemeData.value.price);
            editdata.append("priceForGold", "0");
        }
        else {
            console.log("here1");
            editdata.append("priceForGold", this.editThemeData.value.price);
            editdata.append("priceForSilver", "0");
        }
        editdata.append("themeCat", this.editThemeData.value.themeCat);
        editdata.append("themeId", this.editId);
        console.log("Data appended", editdata);
        if (this.picture != undefined || this.picture != null) {
            editdata.append("themeImage", this.picture);
        }
        this.service.editTheme(editdata).subscribe(function (res) {
            console.log("Data patche", res);
            _this.service.toaster("success", "Edit Successfully");
            // console.log(editdata, "afterapiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            $("#themesedit").modal("hide");
            _this.getTheme();
            _this.editThemeData.reset();
            _this.picture = undefined;
        }, function (error) {
            console.log(error);
            _this.service.toaster("error", "Something went wrong");
        });
    };
    ThemesViewComponent.prototype.clearAdd = function () {
        console.log("djhdjh");
        this.myEditImage = "assets/img/user.jpg";
        this.sumitted = false;
    };
    ThemesViewComponent.prototype.getEditValue = function (element) {
        console.log(element);
        this.sumitted = false;
        this.myEditImage = element.themeSubCategory[0].themeImage;
        console.log("Image", this.myEditImage);
        this.picture = null;
        if (element.themeSubCategory[0].themePrice.priceType) {
            this.price = element.themeSubCategory[0].themePrice.priceForGold;
        }
        else {
            this.price = element.themeSubCategory[0].themePrice.priceForSilver;
        }
        this.editId = element._id;
        (element.themeSubCategory[0].themeImage == null || element.themeSubCategory[0].themeImage == undefined || element.themeSubCategory[0].themeImage == "")
            ? this.myEditImage = "assets/img/user.jpg"
            : this.myEditImage = element.themeSubCategory[0].themeImage;
        this.editThemeData.patchValue({
            themeTitle: element.themeSubCategory[0].themeTitle,
            priceType: element.themeSubCategory[0].themePrice.priceType,
            themeCat: element.themeCatt,
            price: this.price
        });
    };
    ThemesViewComponent.prototype.blockUnblock = function (elem) {
        this.blockId = elem._id;
        if (elem.isActive == 0) {
            this.blockUnblockText = "Block";
        }
        if (elem.isActive == 1) {
            this.blockUnblockText = "Unblock";
        }
    };
    ThemesViewComponent.prototype.blockunblockuser = function () {
        var _this = this;
        this.service.blockUnblockTheme({ themeId: this.blockId }).subscribe(function (result) {
            console.log(result);
            _this.getTheme();
        });
    };
    ThemesViewComponent.prototype.pickupID = function (id) {
        this.del_id = id;
        console.log(this.del_id, "pickup");
    };
    ThemesViewComponent.prototype.delTheme = function () {
        var _this = this;
        var datadelete = {
            themeId: this.del_id,
        };
        this.service.deleteTheme(datadelete).subscribe(function (d) {
            // console.log(this.deletesub,'data')
            console.log(d, "data here is:::::::::::::::::::::::::::::::: ");
            if (d) {
                _this.getTheme();
            }
            _this.service.toaster("success", "Successfully deleted");
            setTimeout(function () {
                $("#deleted-success").modal("hide");
            }, 1200);
        }, function (error) {
            console.log(error.error.message);
        });
    };
    ThemesViewComponent.prototype.sortfilter = function (event) {
        var sort = event.target.value;
        if (sort === "0") {
            this.list.sort(function (a, b) { return (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.list);
            this.dataSource.paginator = this.paginator;
        }
        else if (sort === "1") {
            this.list.sort(function (a, b) { return (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.list);
            this.dataSource.paginator = this.paginator;
        }
    };
    // sortfilter(array: [], key: any, sortType = '') {
    //   if (!array.length) {
    //      return array;
    //   }
    //    return array.sort((a, b) => {
    //      if (sortType === '0') {
    //           if (b[key] < a[key]) { return -1; }
    //           if (b[key] > a[key]) { return 1; }
    //       } else {
    //           if (a[key] < b[key]) { return -1; }
    //           if (a[key] > b[key]) { return 1; }
    //       }
    //       return 0;
    //   });
    // }
    ThemesViewComponent.prototype.fromDate = function (event) {
        this.todate = event;
        this.optionsTo = {
            minDate: this.todate,
            maxDate: new Date(),
        };
        console.log(event, "lll");
        this.fromdate = Math.round(new Date(event).getTime());
        console.log("startDate", this.fromdate);
        this.filterDate();
    };
    ThemesViewComponent.prototype.EndDate = function (event) {
        console.log(event, "event");
        this.endDate = event;
        this.optionsTo = {
            minDate: this.todate,
            maxDate: new Date(),
        };
        this.endDate = Math.round(new Date(event).getTime());
        console.log("endDate", this.endDate);
        // console.log(new Date(this.endDate * 1000))
        this.filterDate();
    };
    ThemesViewComponent.prototype.filterDate = function () {
        console.log(this.fromdate);
        if (this.fromdate && !this.endDate) {
            console.log("hi");
            var fromFilter = new Date(this.fromdate).getTime();
            this.allTheme = this.list.filter(function (item) { return item.createdAt >= fromFilter; } //s
            );
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allTheme);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else if (this.endDate && !this.fromdate) {
            console.log(this.endDate, "sss");
            var toFilter = new Date(this.todate).getTime() + 86400000;
            this.allTheme = this.list.filter(function (item) {
                item.createdAt <= toFilter;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allTheme);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
        else {
            var fromFilter = new Date(this.fromdate).getTime();
            var toFilter = new Date(this.endDate).getTime() + 86400000;
            this.allTheme = this.list.filter(function (item) {
                return item.createdAt <= toFilter && item.createdAt >= fromFilter;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allTheme);
            if (this.forFilter) {
                this.dataSource.filter = this.forFilter.trim().toLowerCase();
            }
            this.dataSource.paginator = this.paginator;
        }
    };
    ThemesViewComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], ThemesViewComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], ThemesViewComponent.prototype, "sort", void 0);
    ThemesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-themes-view",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./themes-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/themes-view/themes-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./themes-view.component.css */ "./src/app/microtransaction-mgmt/themes-view/themes-view.component.css")).default]
        })
    ], ThemesViewComponent);
    return ThemesViewComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/unique-room/unique-room.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/unique-room/unique-room.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .coin-tab{\n    margin-top: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n} */\n.generateno{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n}\n.comb-box{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n    padding: 5px;\n    background-color: rgb(243, 243, 147);\n}\n.gen-prev{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n    padding: 10px;  \n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3VuaXF1ZS1yb29tL3VuaXF1ZS1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3VuaXF1ZS1yb29tL3VuaXF1ZS1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29pbi10YWJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjgsIDE2NCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59ICovXG4uZ2VuZXJhdGVub3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY4LCAxNjQsIDE2NCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbWItYm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjgsIDE2NCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMTQ3KTtcbn1cbi5nZW4tcHJldntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY4LCAxNjQsIDE2NCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7ICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/unique-room/unique-room.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/unique-room/unique-room.component.ts ***!
  \****************************************************************************/
/*! exports provided: UniqueRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueRoomComponent", function() { return UniqueRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");







var ELEMENT_DATA = [
    { sid: "101", combinationname: "Top", combinationtype: "1", priceingold: "Price" },
    { sid: "101", combinationname: "Five Digit", combinationtype: "1", priceingold: "Price" },
    { sid: "101", combinationname: "Paris", combinationtype: "7", priceingold: "Price" },
];
var UniqueRoomComponent = /** @class */ (function () {
    function UniqueRoomComponent(formBuilder, service, router, route, toast) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.displayedColumns = [
            "checkbox",
            "sid",
            "combinationname",
            "combinationtype",
            "combinationSubType",
            "priceingold",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.submitted = false;
        this.esubmitted = false;
        this.selectedType = "";
        this.selectedSubType = "";
        this.selectedTypeEdit = "";
        this.selectedSubTypeEdit = "";
        this.packageSetId = "";
        this.generatedIds = [];
        this.idSetList = [];
        this.categories = [
            { id: 1, name: "5 digits", subcategory: [] },
            { id: 2, name: "Pairs", subcategory: [{ id: 1, name: 'ABABA' }, { id: 2, name: "AAABA" }, { id: 3, name: "AAACBAA" }] },
            { id: 3, name: "Repeating", subcategory: [{ id: 1, name: 'AAAA' }, { id: 2, name: "AAAAA" }, { id: 3, name: "AAAAAA" }] },
            { id: 4, name: "Consecutive", subcategory: [{ id: 1, name: 'ABCD' }, { id: 2, name: "ABCDE" }, { id: 3, name: "ABCDEF" }] },
        ];
        this.subcategories = [];
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.fromdate = new Date();
        this.todate = new Date();
    }
    UniqueRoomComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subType: [""],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]]
        });
        this.editForm = this.formBuilder.group({
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]]
        });
        this.getIdSet();
    };
    UniqueRoomComponent.prototype.getIdSet = function () {
        var _this = this;
        this.service.getUniqueIds(0).subscribe(function (res) {
            _this.idSetList = res.response;
            _this.idSetList.filter(function (ele) {
                ele.typeDetails = _this.categories[_this.categories.findIndex(function (obj) { return obj.id == ele.type; })];
                ele.subTypeDetails = ele.typeDetails.subcategory.findIndex(function (obj) { return obj.id == ele.subType; });
                console.log(ele.subTypeDetails);
                if (ele.subTypeDetails >= 0) {
                    ele.subTypeDetails = ele.typeDetails.subcategory[ele.subTypeDetails];
                }
                else {
                    ele.subTypeDetails = {};
                }
            });
            console.log(_this.idSetList);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.idSetList);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.prototype.changeMainCategory = function (catid) {
        this.subcategories = this.categories.find(function (obj) { return obj.id == catid; });
        this.generatedIds = [];
        console.log(this.subcategories);
        this.subcategories = this.subcategories.subcategory;
    };
    UniqueRoomComponent.prototype.changeSubCategory = function () {
        this.generatedIds = [];
    };
    UniqueRoomComponent.prototype.generate = function () {
        var _this = this;
        var dataToSend = {
            "type": this.selectedType,
            "subType": this.selectedSubType,
            "for_user": 0
        };
        this.service.generateId(dataToSend).subscribe(function (res) {
            var gids = res;
            console.log(gids.response);
            _this.generatedIds = _this.generatedIds.concat(gids.response);
            _this.generatedIds = _this.generatedIds.filter(function (item, index) { return _this.generatedIds.indexOf(item) === index; });
            console.log(_this.generatedIds);
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.prototype.showaddpop = function () {
        this.submitted = false;
        this.generatedIds = [];
        $("#themesadd").modal("show");
        this.addForm.patchValue({
            type: "",
            subType: "",
            price: 0,
            name: ""
        });
    };
    UniqueRoomComponent.prototype.showeditpop = function (ele) {
        this.esubmitted = false;
        $("#themesedit").modal("show");
        this.editForm.patchValue({
            price: ele.price,
            name: ele.name
        });
        this.selectedTypeEdit = ele.type;
        this.packageSetId = ele._id;
        this.changeMainCategory(ele.type);
        this.selectedSubTypeEdit = ele.subType;
        this.generatedIds = ele.idNumbers;
    };
    Object.defineProperty(UniqueRoomComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniqueRoomComponent.prototype, "g", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UniqueRoomComponent.prototype.submitaddform = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        if (!this.generatedIds.length) {
            this.toast.warning("Please generate ids before adding");
            return;
        }
        var dataToSubmit = this.addForm.value;
        dataToSubmit.idNumber = this.generatedIds;
        dataToSubmit.for_user = 0;
        console.log(dataToSubmit);
        this.service.adduniqueid(dataToSubmit).subscribe(function (res) {
            _this.toast.success("Unique Id set created successfully");
            $("#themesadd").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.prototype.submiteditform = function () {
        var _this = this;
        this.esubmitted = true;
        if (this.editForm.invalid) {
            return;
        }
        var dataToSubmit = this.editForm.value;
        dataToSubmit.packageSetId = this.packageSetId;
        this.service.editUniqueId(dataToSubmit).subscribe(function (res) {
            _this.toast.success("Unique Id set updated successfully");
            $("#themesedit").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.prototype.pickupID = function (id) {
        this.id = id;
    };
    UniqueRoomComponent.prototype.blockunblockuser = function (status) {
        var _this = this;
        var dataToSet = { status: status, packageSetId: this.id };
        this.service.blockUnblockUniqueId(dataToSet).subscribe(function (res) {
            _this.toast.success("Unique Id set status changed successfully");
            $("#blockUser").modal("hide");
            $("#unblockUser").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.prototype.delUser = function (status) {
        var _this = this;
        var dataToSet = { packageSetId: this.id };
        this.service.deleteUniqueId(dataToSet).subscribe(function (res) {
            _this.toast.success("Unique Id set deleted successfully");
            $("#deleteUser").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueRoomComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], UniqueRoomComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], UniqueRoomComponent.prototype, "sort", void 0);
    UniqueRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unique-room',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unique-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-room/unique-room.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unique-room.component.css */ "./src/app/microtransaction-mgmt/unique-room/unique-room.component.css")).default]
        })
    ], UniqueRoomComponent);
    return UniqueRoomComponent;
}());



/***/ }),

/***/ "./src/app/microtransaction-mgmt/unique-user/unique-user.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/unique-user/unique-user.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .coin-tab{\n    margin-top: 15px;\n    margin-bottom: 10px;\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n} */\n.generateno{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n}\n.comb-box{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n    padding: 5px;\n    background-color: rgb(243, 243, 147);\n}\n.gen-prev{\n    border: 1px solid rgb(168, 164, 164);\n    border-radius: 5px;\n    padding: 10px;  \n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3VuaXF1ZS11c2VyL3VuaXF1ZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWljcm90cmFuc2FjdGlvbi1tZ210L3VuaXF1ZS11c2VyL3VuaXF1ZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29pbi10YWJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjgsIDE2NCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59ICovXG4uZ2VuZXJhdGVub3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY4LCAxNjQsIDE2NCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbWItYm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjgsIDE2NCwgMTY0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMTQ3KTtcbn1cbi5nZW4tcHJldntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY4LCAxNjQsIDE2NCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7ICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/microtransaction-mgmt/unique-user/unique-user.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/microtransaction-mgmt/unique-user/unique-user.component.ts ***!
  \****************************************************************************/
/*! exports provided: UniqueUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUserComponent", function() { return UniqueUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");







var ELEMENT_DATA = [
    { sid: "101", combinationname: "Top", combinationtype: "1", priceingold: "Price" },
    { sid: "101", combinationname: "Five Digit", combinationtype: "1", priceingold: "Price" },
    { sid: "101", combinationname: "Paris", combinationtype: "7", priceingold: "Price" },
];
var UniqueUserComponent = /** @class */ (function () {
    function UniqueUserComponent(formBuilder, service, router, route, toast) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.displayedColumns = [
            "checkbox",
            "sid",
            "combinationname",
            "combinationtype",
            "combinationSubType",
            "priceingold",
            "action",
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.submitted = false;
        this.esubmitted = false;
        this.selectedType = "";
        this.selectedSubType = "";
        this.selectedTypeEdit = "";
        this.selectedSubTypeEdit = "";
        this.packageSetId = "";
        this.generatedIds = [];
        this.idSetList = [];
        this.categories = [
            { id: 1, name: "5 digits", subcategory: [] },
            { id: 2, name: "Pairs", subcategory: [{ id: 1, name: 'ABABA' }, { id: 2, name: "AAABA" }, { id: 3, name: "AAACBAA" }] },
            { id: 3, name: "Repeating", subcategory: [{ id: 1, name: 'AAAA' }, { id: 2, name: "AAAAA" }, { id: 3, name: "AAAAAA" }] },
            { id: 4, name: "Consecutive", subcategory: [{ id: 1, name: 'ABCD' }, { id: 2, name: "ABCDE" }, { id: 3, name: "ABCDEF" }] },
        ];
        this.subcategories = [];
        this.optionsFrom = {
            minYear: 2017,
            maxDate: new Date(),
        };
        this.fromdate = new Date();
        this.todate = new Date();
    }
    UniqueUserComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subType: [""],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]]
        });
        this.editForm = this.formBuilder.group({
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]]
        });
        this.getIdSet();
    };
    UniqueUserComponent.prototype.getIdSet = function () {
        var _this = this;
        this.service.getUniqueIds(1).subscribe(function (res) {
            _this.idSetList = res.response;
            _this.idSetList.filter(function (ele) {
                ele.typeDetails = _this.categories[_this.categories.findIndex(function (obj) { return obj.id == ele.type; })];
                ele.subTypeDetails = ele.typeDetails.subcategory.findIndex(function (obj) { return obj.id == ele.subType; });
                console.log(ele.subTypeDetails);
                if (ele.subTypeDetails >= 0) {
                    ele.subTypeDetails = ele.typeDetails.subcategory[ele.subTypeDetails];
                }
                else {
                    ele.subTypeDetails = {};
                }
            });
            console.log(_this.idSetList);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.idSetList);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.prototype.changeMainCategory = function (catid) {
        this.subcategories = this.categories.find(function (obj) { return obj.id == catid; });
        this.generatedIds = [];
        console.log(this.subcategories);
        this.subcategories = this.subcategories.subcategory;
    };
    UniqueUserComponent.prototype.changeSubCategory = function () {
        this.generatedIds = [];
    };
    UniqueUserComponent.prototype.generate = function () {
        var _this = this;
        var dataToSend = {
            "type": this.selectedType,
            "subType": this.selectedSubType,
            "for_user": 1
        };
        this.service.generateId(dataToSend).subscribe(function (res) {
            var gids = res;
            console.log(gids.response);
            _this.generatedIds = _this.generatedIds.concat(gids.response);
            _this.generatedIds = _this.generatedIds.filter(function (item, index) { return _this.generatedIds.indexOf(item) === index; });
            console.log(_this.generatedIds);
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.prototype.showaddpop = function () {
        this.submitted = false;
        this.generatedIds = [];
        $("#themesadd").modal("show");
        this.addForm.patchValue({
            type: "",
            subType: "",
            price: 0,
            name: ""
        });
    };
    UniqueUserComponent.prototype.showeditpop = function (ele) {
        this.esubmitted = false;
        $("#themesedit").modal("show");
        this.editForm.patchValue({
            price: ele.price,
            name: ele.name
        });
        this.selectedTypeEdit = ele.type;
        this.packageSetId = ele._id;
        this.changeMainCategory(ele.type);
        this.selectedSubTypeEdit = ele.subType;
        this.generatedIds = ele.idNumbers;
    };
    Object.defineProperty(UniqueUserComponent.prototype, "f", {
        get: function () {
            return this.addForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniqueUserComponent.prototype, "g", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UniqueUserComponent.prototype.submitaddform = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        if (!this.generatedIds.length) {
            this.toast.warning("Please generate ids before adding");
            return;
        }
        var dataToSubmit = this.addForm.value;
        dataToSubmit.idNumber = this.generatedIds;
        dataToSubmit.for_user = 1;
        console.log(dataToSubmit);
        this.service.adduniqueid(dataToSubmit).subscribe(function (res) {
            _this.toast.success("Unique Id set created successfully");
            $("#themesadd").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.prototype.submiteditform = function () {
        var _this = this;
        this.esubmitted = true;
        if (this.editForm.invalid) {
            return;
        }
        var dataToSubmit = this.editForm.value;
        dataToSubmit.packageSetId = this.packageSetId;
        this.service.editUniqueId(dataToSubmit).subscribe(function (res) {
            _this.toast.success("Unique Id set updated successfully");
            $("#themesedit").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.prototype.pickupID = function (id) {
        this.id = id;
    };
    UniqueUserComponent.prototype.blockunblockuser = function (status) {
        var _this = this;
        var dataToSet = { status: status, packageSetId: this.id };
        this.service.blockUnblockUniqueId(dataToSet).subscribe(function (res) {
            _this.toast.success("Unique Id set status changed successfully");
            $("#blockUser").modal("hide");
            $("#unblockUser").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.prototype.delUser = function (status) {
        var _this = this;
        var dataToSet = { packageSetId: this.id };
        this.service.deleteUniqueId(dataToSet).subscribe(function (res) {
            _this.toast.success("Unique Id set deleted successfully");
            $("#deleteUser").modal("hide");
            _this.getIdSet();
        }, function (err) {
            console.log(err);
        });
    };
    UniqueUserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], UniqueUserComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], UniqueUserComponent.prototype, "sort", void 0);
    UniqueUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unique-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unique-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microtransaction-mgmt/unique-user/unique-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unique-user.component.css */ "./src/app/microtransaction-mgmt/unique-user/unique-user.component.css")).default]
        })
    ], UniqueUserComponent);
    return UniqueUserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=microtransaction-mgmt-microtransaction-mgmt-module.js.map