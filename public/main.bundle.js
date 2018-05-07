webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 60px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-student></app-header-student>\n  <div class=\"ui container ctop\">\n    <div class=\"ui grid \">\n      <div class=\"four wide column\">\n        <app-profile-student></app-profile-student>\n      </div>\n      <div class=\"ten wide column\">\n        <div class=\"ui padded segment\">\n          <form #setForm=\"ngForm\" class=\"ui form\">\n            <!-- <div *ngFor=\"let data of tmpArr\">\n            <label class=\"ui large label\" >รหัสโครงงาน {{data.project_id}}</label>\n          </div> -->\n\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อ-สกุล</label>\n              <input type=\"text\" name=\"student_name\" [(ngModel)]=\"stu_name\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\"> รหัสผ่าน</label>\n              <button type=\"submit\" class=\"ui button\" (click)=\"clear()\" data-toggle=\"modal\" data-target=\"#edit_pass\">แก้ไข</button>\n              <!-- <input type=\"text\" name=\"password\" [(ngModel)]=\"stu_pass\"> -->\n            </div>\n            <div class=\"field\">\n              <label>ชื่อโครงงานภาษาไทย</label>\n              <textarea rows=\"2\" type=\"text\" name=\"name_th\" placeholder=\"Name Thai\" [(ngModel)]=\"name_th\"></textarea>\n            </div>\n            <div class=\"field\">\n              <label>ชื่อโครงงานภาษาอังกฤษ</label>\n              <textarea rows=\"2\" type=\"text\" name=\"name_en\" placeholder=\"Name English\" [(ngModel)]=\"name_en\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"ui blue button\" (click)=\"addData()\">ตกลง</button>\n          </form>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n\n  <!-- Modal show confirm -->\n  <div class=\"modal fade\" id=\"edit_pass\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขรหัสผ่าน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\">รหัสผ่านเดิม</label>\n              <input type=\"password\" name=\"old_pass\" ngModel [(ngModel)]=\"old_pass\">\n            </div>\n            <hr>\n            <div class=\"field\">\n              <label for=\"name\">รหัสผ่านใหม่</label>\n              <input type=\"password\" name=\"new_pass\" ngModel [(ngModel)]=\"new_pass\">\n            </div>\n            <div class=\"field\">\n                <label for=\"name\">ยืนยันรหัสผ่านใหม่</label>\n                <input type=\"password\" name=\"new_pass\" ngModel [(ngModel)]=\"re_new_pass\">\n              </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"submit\" (click)=\"change_password()\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.tmpArr = [];
        this.studentArr = [];
        this.name_th = "";
        this.name_en = "";
        this.project_id = "";
        this.old_pass = "";
        this.new_pass = "";
        this.re_new_pass = "";
        this.basePath = "/project";
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiList = this.firebaseService.getData(this.basePath);
        this.studentLis = this.firebaseService.getData("/student");
        this.projectList = this.firebaseService.getData("/project");
        var key1 = localStorage.getItem("key");
        this.myk = key1;
        this.studentLis.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == key1) {
                    _this.tmpArr.push(element);
                    _this.stu_id = element.key;
                    _this.stu_name = element.student_name;
                    _this.stu_pass = element.password;
                    _this.pj_id = element.project_id;
                }
            });
        });
        this.projectList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == _this.pj_id) {
                    _this.name_th = element.name_th;
                    _this.name_en = element.name_en;
                }
            });
        });
    };
    AddProjectComponent.prototype.addData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataPJ, dataStu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataPJ = {
                            key: this.tmpArr[0].project_id,
                            name_th: this.name_th,
                            name_en: this.name_en
                        };
                        return [4 /*yield*/, this.firebaseService.addData(dataPJ, this.basePath)];
                    case 1:
                        _a.sent();
                        dataStu = {
                            student_name: this.stu_name,
                            password: this.stu_pass
                        };
                        return [4 /*yield*/, this.firebaseService.editData(this.stu_id, dataStu, "/student")];
                    case 2:
                        _a.sent();
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1500 });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProjectComponent.prototype.change_password = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var Hashing_old_pass, Hashing_new_pass, Hashing_re_new_pass, dataStu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.stu_pass);
                        Hashing_old_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.old_pass);
                        Hashing_new_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.new_pass);
                        Hashing_re_new_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.re_new_pass);
                        console.log("DB " + this.stu_pass);
                        console.log("เพิ่งเขียน " + Hashing_old_pass);
                        console.log();
                        if (this.stu_pass == Hashing_old_pass) {
                            if (Hashing_new_pass == Hashing_re_new_pass) {
                                dataStu = {
                                    password: Hashing_new_pass
                                };
                                console.log("yeah");
                                this.firebaseService.editData(this.tmpArr[0].key, dataStu, "/student");
                                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'เปลี่ยนรหัสผ่านสำเร็จ', showConfirmButton: false, timer: 1200 });
                            }
                            else {
                                // alert("การยืนยันรหัสผ่านไม่ถูกต้อง");
                                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'การยืนยันรหัสผ่านไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง', });
                            }
                        }
                        else {
                            // alert("รหัสผ่านเดิมไม่ถูกต้อง");
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'รหัสผ่านเดิมไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง', });
                        }
                        return [4 /*yield*/, this.studentLis.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.studentArr = [];
                                            return [4 /*yield*/, element1.forEach(function (element, index) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        if (element.key == this.myk) {
                                                            this.studentArr.push(element);
                                                            this.stu_pass = element.password;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProjectComponent.prototype.clear = function () {
        this.old_pass = "";
        this.new_pass = "";
        this.re_new_pass = "";
    };
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-add-project",
            template: __webpack_require__("../../../../../src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-project/add-project.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_student_manage_student_component__ = __webpack_require__("../../../../../src/app/manage-student/manage-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_teacher_header_teacher_component__ = __webpack_require__("../../../../../src/app/header-teacher/header-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_phase_manage_phase_component__ = __webpack_require__("../../../../../src/app/manage-phase/manage-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__send_work_send_work_component__ = __webpack_require__("../../../../../src/app/send-work/send-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_teacher_manage_teacher_component__ = __webpack_require__("../../../../../src/app/manage-teacher/manage-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__history_work_history_work_component__ = __webpack_require__("../../../../../src/app/history-work/history-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload_form_upload_form_upload_component__ = __webpack_require__("../../../../../src/app/upload/form-upload/form-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__check_work_check_work_component__ = __webpack_require__("../../../../../src/app/check-work/check-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__check_work_sub_phase_check_work_sub_phase_component__ = __webpack_require__("../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__check_work_student_check_work_student_component__ = __webpack_require__("../../../../../src/app/check-work-student/check-work-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__report_a_student_report_a_student_component__ = __webpack_require__("../../../../../src/app/report-a-student/report-a-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__report_all_phase_report_all_phase_component__ = __webpack_require__("../../../../../src/app/report-all-phase/report-all-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__manage_admin_manage_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__project_list_project_list_component__ = __webpack_require__("../../../../../src/app/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__report_for_student_report_for_student_component__ = __webpack_require__("../../../../../src/app/report-for-student/report-for-student.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: 'ManageStudent', component: __WEBPACK_IMPORTED_MODULE_4__manage_student_manage_student_component__["a" /* ManageStudentComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'header-teacher', component: __WEBPACK_IMPORTED_MODULE_5__header_teacher_header_teacher_component__["a" /* HeaderTeacherComponent */] },
    { path: 'ManagePhase', component: __WEBPACK_IMPORTED_MODULE_6__manage_phase_manage_phase_component__["a" /* ManagePhaseComponent */] },
    { path: 'sendWork', component: __WEBPACK_IMPORTED_MODULE_7__send_work_send_work_component__["a" /* SendWorkComponent */] },
    { path: 'ManageTeacher', component: __WEBPACK_IMPORTED_MODULE_8__manage_teacher_manage_teacher_component__["a" /* ManageTeacherComponent */] },
    { path: 'addProject', component: __WEBPACK_IMPORTED_MODULE_9__add_project_add_project_component__["a" /* AddProjectComponent */] },
    { path: 'historyWork', component: __WEBPACK_IMPORTED_MODULE_10__history_work_history_work_component__["a" /* HistoryWorkComponent */] },
    { path: 'formUpload', component: __WEBPACK_IMPORTED_MODULE_11__upload_form_upload_form_upload_component__["a" /* FormUploadComponent */] },
    { path: 'checkWork', component: __WEBPACK_IMPORTED_MODULE_12__check_work_check_work_component__["a" /* CheckWorkComponent */] },
    { path: 'checkWorkSubPhase', component: __WEBPACK_IMPORTED_MODULE_13__check_work_sub_phase_check_work_sub_phase_component__["a" /* CheckWorkSubPhaseComponent */] },
    { path: 'checkWorkStudent', component: __WEBPACK_IMPORTED_MODULE_14__check_work_student_check_work_student_component__["a" /* CheckWorkStudentComponent */] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_15__report_report_component__["a" /* ReportComponent */] },
    { path: 'report-student', component: __WEBPACK_IMPORTED_MODULE_16__report_a_student_report_a_student_component__["a" /* ReportAStudentComponent */] },
    { path: 'report-all-phase', component: __WEBPACK_IMPORTED_MODULE_17__report_all_phase_report_all_phase_component__["a" /* ReportAllPhaseComponent */] },
    { path: 'ManageAdmin', component: __WEBPACK_IMPORTED_MODULE_18__manage_admin_manage_admin_component__["a" /* ManageAdminComponent */] },
    { path: 'Project-List', component: __WEBPACK_IMPORTED_MODULE_19__project_list_project_list_component__["a" /* ProjectListComponent */] },
    { path: 'student-report', component: __WEBPACK_IMPORTED_MODULE_20__report_for_student_report_for_student_component__["a" /* ReportForStudentComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\nfont-size: 14px;\r\n-webkit-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n}\r\ntextarea{\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\nfont-size: 14px;\r\n-webkit-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n}\r\nbutton{\r\nwidth: 100%;\r\npadding: 12px 20px;\r\nmargin: 8px 0;\r\ncolor: #000000;\r\nfont-size: 14px;\r\n-webkit-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n}\r\n.ctop {\r\n  margin-top: 50px;\r\n}\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.db = db;
    }
    AppComponent.prototype.addData = function (data) {
        this.db.list('/wikis').push(data.value);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_student_manage_student_component__ = __webpack_require__("../../../../../src/app/manage-student/manage-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_teacher_header_teacher_component__ = __webpack_require__("../../../../../src/app/header-teacher/header-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_phase_manage_phase_component__ = __webpack_require__("../../../../../src/app/manage-phase/manage-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__send_work_send_work_component__ = __webpack_require__("../../../../../src/app/send-work/send-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_student_header_student_component__ = __webpack_require__("../../../../../src/app/header-student/header-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_login_service_service__ = __webpack_require__("../../../../../src/app/service/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manage_teacher_manage_teacher_component__ = __webpack_require__("../../../../../src/app/manage-teacher/manage-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__history_work_history_work_component__ = __webpack_require__("../../../../../src/app/history-work/history-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__upload_form_upload_form_upload_component__ = __webpack_require__("../../../../../src/app/upload/form-upload/form-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__upload_details_upload_details_upload_component__ = __webpack_require__("../../../../../src/app/upload/details-upload/details-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__upload_list_upload_list_upload_component__ = __webpack_require__("../../../../../src/app/upload/list-upload/list-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__check_work_check_work_component__ = __webpack_require__("../../../../../src/app/check-work/check-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__check_work_sub_phase_check_work_sub_phase_component__ = __webpack_require__("../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__check_work_student_check_work_student_component__ = __webpack_require__("../../../../../src/app/check-work-student/check-work-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__report_report_component__ = __webpack_require__("../../../../../src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__report_all_phase_report_all_phase_component__ = __webpack_require__("../../../../../src/app/report-all-phase/report-all-phase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__report_a_student_report_a_student_component__ = __webpack_require__("../../../../../src/app/report-a-student/report-a-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_accordion__ = __webpack_require__("../../../../primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_chart__ = __webpack_require__("../../../../primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__menu_manage_menu_manage_component__ = __webpack_require__("../../../../../src/app/menu-manage/menu-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__profile_student_profile_student_component__ = __webpack_require__("../../../../../src/app/profile-student/profile-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__manage_admin_manage_admin_component__ = __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__header_admin_header_admin_component__ = __webpack_require__("../../../../../src/app/header-admin/header-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__project_list_project_list_component__ = __webpack_require__("../../../../../src/app/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__report_for_student_report_for_student_component__ = __webpack_require__("../../../../../src/app/report-for-student/report-for-student.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































 //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                 //api







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__manage_student_manage_student_component__["a" /* ManageStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_teacher_header_teacher_component__["a" /* HeaderTeacherComponent */],
                __WEBPACK_IMPORTED_MODULE_13__manage_phase_manage_phase_component__["a" /* ManagePhaseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__send_work_send_work_component__["a" /* SendWorkComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_student_header_student_component__["a" /* HeaderStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__manage_teacher_manage_teacher_component__["a" /* ManageTeacherComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_19__history_work_history_work_component__["a" /* HistoryWorkComponent */],
                __WEBPACK_IMPORTED_MODULE_20__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_21__upload_form_upload_form_upload_component__["a" /* FormUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_23__upload_details_upload_details_upload_component__["a" /* DetailsUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__upload_list_upload_list_upload_component__["a" /* ListUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_25__check_work_check_work_component__["a" /* CheckWorkComponent */],
                __WEBPACK_IMPORTED_MODULE_26__check_work_sub_phase_check_work_sub_phase_component__["a" /* CheckWorkSubPhaseComponent */],
                __WEBPACK_IMPORTED_MODULE_27__check_work_student_check_work_student_component__["a" /* CheckWorkStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_29__report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_31__report_all_phase_report_all_phase_component__["a" /* ReportAllPhaseComponent */],
                __WEBPACK_IMPORTED_MODULE_32__report_a_student_report_a_student_component__["a" /* ReportAStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_35__menu_manage_menu_manage_component__["a" /* MenuManageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__profile_student_profile_student_component__["a" /* ProfileStudentComponent */],
                __WEBPACK_IMPORTED_MODULE_37__manage_admin_manage_admin_component__["a" /* ManageAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_38__header_admin_header_admin_component__["a" /* HeaderAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_39__project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_40__report_for_student_report_for_student_component__["a" /* ReportForStudentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_30_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_34_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_33_primeng_accordion__["AccordionModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_16__service_login_service_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_22__service_upload_file_service__["a" /* UploadFileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/check-work-student/check-work-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".yes {\r\n  color: red;\r\n}\r\n\r\n.no {\r\n  color: palegreen;\r\n}\r\n\r\n.style1 {\r\n  font-family: verdana;\r\n  font-size: 20px;\r\n}\r\n\r\n.style2 {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n.ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 40px;\r\n}\r\n\r\n.mycolor {\r\n  color: #270665;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-work-student/check-work-student.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n    <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <br>\n    <h5><i class=\"user icon mycolor\"></i>{{stu_key}} |  {{stu_name}}</h5>\n    <h5><i class=\"pencil alternate icon mycolor\"></i>โครงงานที่สนใจ : {{myPJ_name_th}}</h5>\n    <hr>\n    <table class=\"ui selectable celled table violet\">\n      <thead>\n        <tr>\n          <th>ชื่องาน</th>\n          <th>ดาวน์โหลดไฟล์งาน</th>\n          <th>วันที่ส่งงาน</th>\n          <th>สถานะการส่งงาน</th>\n          <th>ผลการตรวจ</th>\n          <th>ตรวจ</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of statusArr\">\n          <td>{{data.subphase_name}}</td>\n          <td>\n            <a href=\"{{data.url}}\">{{data.file_name}}</a>\n          </td>\n          <td>{{data.date_send}}</td>\n          <td>{{data.status_send}}</td>\n          <td>{{data.status_result}}</td>\n          <td>\n            <button type=\"button\" (click)=\"setData(data)\" class=\"ui blue button\" data-toggle=\"modal\" data-target=\"#checkwork\">\n              ตรวจ\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade modal-fullscreen\" id=\"checkwork\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ตรวจ</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <div class=\"ui form\">\n              <div>\n                <label class=\"field\">ความคิดเห็นผู้เรียน</label>\n                {{ment_student}}\n              </div>\n              <div class=\"inline fields\">\n                <label> ผลการตรวจ</label>\n                <div class=\"field\">\n                  <div class=\"ui radio checkbox\">\n                    <input type=\"radio\" name=\"result\" [(ngModel)]=\"result\" tabindex=\"0\" value=\"Pass\" required>\n                    <label>ผ่าน</label>\n                  </div>\n                </div>\n                <div class=\"field\">\n                  <div class=\"ui radio checkbox\">\n                    <input type=\"radio\" name=\"result\" [(ngModel)]=\"result\" tabindex=\"0\" value=\"Failed\" required>\n                    <label>ไม่ผ่าน</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"field\">\n              <label> ความคิดเห็นของผู้สอน </label>\n              <textarea rows=\"2\" type=\"text\" name=\"comment_teacher\" [(ngModel)]=\"comment_teacher\" placeholder=\"เพิ่มคำอธิบาย\"></textarea>\n            </div>\n          </form>\n\n          <!-- <div>\n            <label>PDF src</label>\n            <input (change)=\"onFileSelected()\" type=\"file\" id=\"file\">\n            <div class=\"ui input focus\">\n              <input [(ngModel)]=\"page\" type=\"text\" id=\"page\">\n            </div>\n          </div>\n          <pdf-viewer\n          [src]=\"pdfSrc\"\n          [render-text]=\"true\"\n          [page]=\"page\"\n          [show-all]=\"true\"\n          style=\"display: block;\">\n        </pdf-viewer> -->\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveData(setForm)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<br>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/check-work-student/check-work-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckWorkStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { PdfViewerModule } from 'ng2-pdf-viewer';
var CheckWorkStudentComponent = /** @class */ (function () {
    function CheckWorkStudentComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.pdfSrc = '';
        this.page = 1;
        this.statusArr = [];
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.projectArr = [];
        this.tmpArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.selectedStudent = "";
        this.selectedAllPhase = "";
        this.comment_teacher = "-";
        this.result = 'yes';
    }
    CheckWorkStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        this.selectedAllPhase = selectedPhase + selectedSubPhase;
        var selectedStudent = localStorage.getItem("Student");
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.projectList = this.firebaseService.getData("/project");
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.subphaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == selectedStudent) {
                    _this.studentArr.push(element);
                    _this.stu_key = element.key;
                    _this.stu_name = element.student_name;
                    _this.student_pj_id = element.project_id;
                    console.log("pjid" + _this.student_pj_id);
                }
            });
        });
        this.projectList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (_this.student_pj_id == element.key) {
                    _this.myPJ_name_th = element.name_th;
                    _this.myPJ_name_en = element.name_en;
                }
            });
        });
        var keepGoing = true;
        this.statusList.forEach(function (element1) {
            element1.forEach(function (element) {
                keepGoing = false;
                var Phase_id = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                var SubPhase_id = element.key[6] + element.key[7];
                var my_pj_id = element.key[0] + element.key[1] + element.key[2];
                if (_this.student_pj_id == my_pj_id) {
                    _this.subphaseArr.length == 1;
                    for (var i = 0; i < _this.subphaseArr.length; i++) {
                        if (Phase_id == _this.subphaseArr[i].key && my_pj_id == _this.student_pj_id) {
                            _this.sp_name = _this.subphaseArr[i].sub_phase_name;
                            // this.ment_teacher = element.comment_teacher;
                            // this.ment_student = element.comment_student;
                            var dataTmp = {
                                stu_name: _this.stu_name,
                                subphase_name: _this.sp_name,
                                key: element.key,
                                date_send: element.date_send,
                                status_send: element.status_send,
                                status_result: element.status_result,
                                // status_check: element.status_check,
                                comment_teacher: element.comment_teacher,
                                comment_student: element.comment_student,
                                file_name: element.file_name,
                                url: element.url,
                            };
                            _this.statusArr.push(dataTmp);
                        }
                    }
                }
            });
        });
    };
    ////////////////////////////////////////////////
    // showme(n1) {
    //   if (this.temp != n1) {
    //     this.subphaseArr = [];
    //   }
    //   this.subphaseList.forEach(element1 => {
    //     element1.forEach(element => {
    //       if (element.phase_id == n1) {
    //         this.subphaseArr.push(element);
    //       }
    //     });
    //     this.temp = n1;
    //   });
    // }
    CheckWorkStudentComponent.prototype.saveData = function (empForm) {
        if (empForm.value.comment_teacher == null) {
            empForm.value.comment_teacher = "-";
        }
        var data = {
            comment_teacher: empForm.value.comment_teacher,
            status_result: empForm.value.result
        };
        // console.log(data);
        this.firebaseService.editData(this.status_key, data, "/status");
        this.statusArr = [];
    };
    CheckWorkStudentComponent.prototype.setData = function (data) {
        this.status_key = data.key;
        this.result = data.status_result;
        this.comment_teacher = data.comment_teacher;
        this.ment_student = data.comment_student;
        this.ment_teacher = data.comment_teacher;
        // this.url_name = data.url;
        this.pdfSrc = data.url;
    };
    CheckWorkStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-check-work-student",
            template: __webpack_require__("../../../../../src/app/check-work-student/check-work-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/check-work-student/check-work-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], CheckWorkStudentComponent);
    return CheckWorkStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".yes {\r\n  color: red;\r\n}\r\n\r\n.no {\r\n  color: palegreen;\r\n}\r\n\r\n.style1 {\r\n  font-family: verdana;\r\n  font-size: 20px;\r\n}\r\n\r\n.style2 {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n.ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <br>\n    <h4>{{p_name}} : {{sp_name}}</h4>\n    <hr>\n    <table class=\"ui selectable celled table violet\">\n      <thead>\n        <tr>\n          <th>รหัสผู้เรียน</th>\n          <th>ชื่อผู้เรียน</th>\n          <th>ดาวน์โหลดไฟล์งาน</th>\n          <th>วันที่ส่งงาน</th>\n          <th>สถานะการส่งงาน</th>\n          <th>ผลการตรวจ</th>\n          <th>ตรวจ</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of statusArr\">\n          <td>{{data.stu_id}}</td>\n          <td>{{data.stu_name}}</td>\n          <td>\n            <a href=\"{{data.url}}\">{{data.file_name}}</a>\n          </td>\n          <td>{{data.date_send}}</td>\n          <td>{{data.status_send}}</td>\n          <td>{{data.status_result}}</td>\n          <td>\n            <button type=\"button\" (click)=\"setData(data)\" class=\"ui blue button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n              ตรวจ\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade modal-fullscreen\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ตรวจ</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <div class=\"ui form\">\n              <div>\n                <label class=\"field\">ความคิดเห็นผู้เรียน</label>\n                {{ment_student}}\n              </div>\n              <div class=\"inline fields\">\n                <label> ผลการตรวจ</label>\n                <div class=\"field\">\n                  <div class=\"ui radio checkbox\">\n                    <input type=\"radio\" name=\"result\" [(ngModel)]=\"result\" tabindex=\"0\" value=\"Pass\" required>\n                    <label>ผ่าน</label>\n                  </div>\n                </div>\n                <div class=\"field\">\n                  <div class=\"ui radio checkbox\">\n                    <input type=\"radio\" name=\"result\" [(ngModel)]=\"result\" tabindex=\"0\" value=\"Failed\" required>\n                    <label>ไม่ผ่าน</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div>\n              <label> ความคิดเห็นของผู้สอน </label>\n              <textarea rows=\"2\" type=\"text\" name=\"comment_teacher\" [(ngModel)]=\"comment_teacher\" placeholder=\"เพิ่มคำอธิบาย\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveData(setForm)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckWorkSubPhaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { PdfViewerModule } from 'ng2-pdf-viewer';
var CheckWorkSubPhaseComponent = /** @class */ (function () {
    function CheckWorkSubPhaseComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.pdfSrc = '';
        this.page = 1;
        this.statusArr = [];
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.selectedStudent = "";
        this.selectedAllPhase = "";
        this.comment_teacher = "";
        // onFileSelected() {
        //   console.log("******");
        //   let img: any = document.querySelector('#file');
        //   if (typeof (FileReader) !== 'undefined') {
        //     let reader = new FileReader();
        //     reader.onload = (e: any) => {
        //       this.pdfSrc = e.target.result;
        //       console.log(this.pdfSrc);
        //     };
        //     console.log("++++++++");
        //     reader.readAsArrayBuffer(img.files[0]);
        //   }
        // }
        this.my_Class = "style1";
    }
    CheckWorkSubPhaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        this.selectedAllPhase = selectedPhase + selectedSubPhase;
        console.log(selectedPhase);
        console.log(selectedSubPhase);
        console.log(this.selectedAllPhase);
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.studentArr.push(element);
            });
        });
        this.phaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == selectedPhase) {
                    _this.p_name = element.phase_name;
                }
            });
        });
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == _this.selectedAllPhase) {
                    _this.sp_name = element.sub_phase_name;
                }
            });
        });
        var keepGoing = true;
        this.statusList.forEach(function (element1) {
            element1.forEach(function (element) {
                keepGoing = false;
                _this.selectedPhase = element.key[4] + element.key[5];
                _this.selectedSubPhase = element.key[6] + element.key[7];
                // console.log("+++++++++"+this.selectedPhase);
                if (_this.selectedAllPhase == _this.selectedPhase + _this.selectedSubPhase) {
                    for (var i = 0; i < _this.studentArr.length; i++) {
                        // console.log(this.studentArr[i].student_name);
                        if (element.key[0] + element.key[1] + element.key[2] == _this.studentArr[i].project_id) {
                            var dataTmp = {
                                stu_id: _this.studentArr[i].key,
                                stu_name: _this.studentArr[i].student_name,
                                pj_id: _this.studentArr[i].project_id,
                                file_name: element.file_name,
                                url: element.url,
                                date_send: element.date_send,
                                status_send: element.status_send,
                                status_result: element.status_result,
                                // status_check: element.status_check,
                                key: element.key,
                                comment_student: element.comment_student,
                                comment_teacher: element.comment_teacher
                            };
                            _this.statusArr.push(dataTmp);
                        }
                    }
                }
            });
        });
    };
    CheckWorkSubPhaseComponent.prototype.saveData = function (empForm) {
        var data = {
            comment_teacher: empForm.value.comment_teacher,
            status_result: empForm.value.result,
        };
        this.firebaseService.editData(this.status_key, data, "/status");
        this.statusArr = [];
    };
    CheckWorkSubPhaseComponent.prototype.setData = function (data) {
        // console.log(data);
        this.status_key = data.key;
        this.result = data.status_result;
        this.comment_teacher = data.comment_teacher;
        this.ment_student = data.comment_student;
        this.ment_teacher = data.comment_teacher;
        this.url_name = data.url;
        this.pdfSrc = data.url;
    };
    //function to change the class from style1 to style 2 when clicked
    CheckWorkSubPhaseComponent.prototype.toggle_class = function () {
        if (this.my_Class == "style1") {
            this.my_Class = "style2";
        }
        else {
            this.my_Class = "style1";
        }
    };
    CheckWorkSubPhaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-check-work-sub-phase",
            template: __webpack_require__("../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/check-work-sub-phase/check-work-sub-phase.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], CheckWorkSubPhaseComponent);
    return CheckWorkSubPhaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/check-work/check-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 20px;\r\n}\r\n\r\n.w1 {\r\n  width: 200px;\r\n}\r\n\r\n.mycolor {\r\n  color: #270665;\r\n}\r\n\r\n.sub-g {\r\n  margin: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-work/check-work.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<app-header-teacher></app-header-teacher>\n\n<body>\n  <div class=\"ui container ctop\">\n    <br>\n    <h4 align=\"center\">เลือกมุมมองในการตรวจ</h4>\n    <hr>\n    <div class=\"ui grid sub-g\">\n      <div class=\"eight wide column\">\n        <h5 align=\"center\">มุมมองส่วนของงาน</h5>\n        <table class=\"ui selectable celled violet table\">\n          <thead>\n            <tr>\n              <th>ชื่องานหลัก</th>\n              <th style=\"width:25%\" class=\"ui center aligned\">เลือกงานย่อย</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of phaseList | async\">\n              <td>{{data.phase_name}}</td>\n              <td class=\"ui center aligned single line\">\n                <button *ngIf=\"edited\"  type=\"button\" (click)=\"showme(data)\" class=\"ui small green button\" (click)=\"showme(data)\" data-toggle=\"modal\" data-target=\".select-sub-phase\">เลือก</button>\n                <!-- <button type=\"button\" (click)=\"showme(data)\" class=\"ui small green button\" [disabled]=\"!isValidForm\" (click)=\"showme(data)\" data-toggle=\"modal\" data-target=\".select-sub-phase\">เลือก</button> -->\n                <!-- <div  class=\"ui small blue animated button\" (click)=\"showme(data)\" data-toggle=\"modal\" data-target=\".select-sub-phase\" tabindex=\"0\">\n                  <div class=\"visible content\">เลือก</div>\n                  <div class=\"hidden content\">\n                    <i class=\"chevron right icon\"></i>\n                  </div>\n                </div> -->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n\n      </div>\n\n      <!-- /////////////////////////////////////////////////////////// -->\n      <div class=\"eight wide column\">\n        <h5 align=\"center\">มุมมองส่วนของผู้เรียนแต่ละคน</h5>\n        <table class=\"ui selectable celled violet table\">\n          <thead>\n            <tr>\n              <th>รหัสผู้เรียน</th>\n              <th>ชื่อผู้เรียน</th>\n              <th style=\"width:25%\" class=\"ui center aligned\">เลือกผู้เรียน</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of studentList | async\">\n              <td>{{data.key}}</td>\n              <td>{{data.student_name}}</td>\n              <td class=\"ui center aligned single line\">\n                <!-- <button type=\"button\" (click)=\"selectStudent(data)\" class=\"ui green button\">เลือก</button> -->\n                <div class=\"ui small blue animated button\" (click)=\"selectStudent(data)\">\n                  <div class=\"visible content\">เลือก</div>\n                  <div class=\"hidden content\">\n                    <i class=\"chevron right icon\"></i>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal select sub phase -->\n  <div class=\"modal fade select-sub-phase\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"> เลือกงานย่อย </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"ui container\">\n            <form (ngSubmit)=\"selectPhase()\" class=\"ui form\">\n              <table class=\"ui selectable celled violet table\">\n                <thead>\n                  <tr>\n                    <th>ชื่องานย่อย</th>\n                    <th>เลือก</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of subphaseArr\">\n                    <td>{{data.sub_phase_name}}</td>\n                    <td>\n                      <button type=\"button\" (click)=\"selectPhase(data)\" data-dismiss=\"modal\" class=\"ui blue button\">ไป</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/check-work/check-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { FileUpload } from "./fileupload";
var CheckWorkComponent = /** @class */ (function () {
    function CheckWorkComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.statusArr = [];
        this.tmpArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.selectedStudent = "";
        this.phase_id = "";
        this.sub_phase_id = "";
        this.sub_phase_name = "";
        this.date_assign = "";
        this.date_send = "";
        this.sub_phase_detail = "";
        this.basePath = "/status";
    }
    CheckWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edited = true;
        var key1 = localStorage.getItem("key");
        this.te_key = key1;
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.phaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.phaseArr.push(element);
            });
        });
        // this.statusList.forEach(element1 => {
        //   this.statusArr = [];
        //     element1.forEach((element,index) => {
        //        this.statusArr.push(element)
        //     });
        //       console.log(this.statusArr);
        //   });
        // this.studentList.forEach(element1 => {
        //   let mycount = 0;
        //   let myP = "P01"
        //   element1.forEach(element => {
        //     // for (var i = 0; i< this.statusArr.length; i++) {
        //     //   if(element.project_id == this.statusArr[i].key[0]+this.statusArr[i].key[1]+this.statusArr[i].key[2]) {
        //     //     if(this.statusArr[i].status_send != "No"){
        //     //       if(this.statusArr[i].status_result != "Pass" && this.statusArr[i].status_result != "Failed") {
        //     //         if(myP == element.project_id) {
        //     //           mycount = mycount + 1;
        //     //         } else {
        //     //           myP = element.project_id;
        //     //           mycount = 0;
        //     //         }
        //     //       }
        //     //     }
        //     //   }
        //     // }
        //     this.studentArr.push(element);
        //   });
        // });
    };
    CheckWorkComponent.prototype.showme = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subphaseArr = [];
                        this.key = data.key;
                        if (this.temp != data.key) {
                            this.subphaseArr = [];
                        }
                        return [4 /*yield*/, this.subphaseList.forEach(function (element1) {
                                _this.subphaseArr = [];
                                element1.forEach(function (element) {
                                    if (element.phase_id == _this.key) {
                                        _this.subphaseArr.push(element);
                                    }
                                });
                                _this.temp = data.key;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckWorkComponent.prototype.selectPhase = function (data) {
        this.selectedPhase = data.key[0] + data.key[1];
        this.selectedSubPhase = data.key[2] + data.key[3];
        localStorage.setItem('Phase', this.selectedPhase);
        localStorage.setItem('SubPhase', this.selectedSubPhase);
        this.router.navigate(['/checkWorkSubPhase']);
    };
    CheckWorkComponent.prototype.selectStudent = function (data) {
        this.selectedStudent = data.key;
        localStorage.setItem('Student', this.selectedStudent);
        this.router.navigate(['/checkWorkStudent']);
    };
    CheckWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-work',
            template: __webpack_require__("../../../../../src/app/check-work/check-work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/check-work/check-work.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], CheckWorkComponent);
    return CheckWorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-admin/header-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-admin/header-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui violet inverted huge borderless main menu fixed\" style=\"position: fixed; top: 0px; left: auto; z-index: 10;\">\n    <div class=\"ui  container\">\n      <div href=\"#\" class=\"header item\">\n        Project Name\n      </div>\n      <a href=\"#\" class=\"item\" [routerLink]=\"'/ManageAdmin'\" routerLinkActive=\"active\">การจัดการข้อมูล</a>\n\n      <div class=\"right menu\">\n          <a class=\"item\">{{key}}</a>\n          <a class=\"item\" (click)=\"logout()\"><i class=\"power off icon\"></i>Logout</a>\n        </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-admin/header-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderAdminComponent = /** @class */ (function () {
    function HeaderAdminComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.adminArr = [];
        this.basePath = '/admin';
    }
    HeaderAdminComponent.prototype.ngOnInit = function () {
        this.adminList = this.firebaseService.getData(this.basePath);
        var key1 = localStorage.getItem('key');
        this.key = key1;
    };
    HeaderAdminComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-admin',
            template: __webpack_require__("../../../../../src/app/header-admin/header-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-admin/header-admin.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-student/header-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-student/header-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui violet inverted huge borderless main menu fixed\" style=\"position: fixed; top: 0px; left: auto; z-index: 10;\">\n  <div class=\"ui  container\">\n    <div href=\"#\" class=\"header item\">\n      Project Name\n    </div>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/sendWork'\" routerLinkActive=\"active\">ส่งงาน</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/historyWork'\" routerLinkActive=\"active\">ดูประวัติ</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/student-report'\" routerLinkActive=\"active\">รายงาน</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/addProject'\" routerLinkActive=\"active\">การจัดการข้อมูล</a>\n    <div class=\"right menu\">\n        <a class=\"item\">{{stu_name}} | {{key}}</a>\n        <a class=\"item\" (click)=\"logout()\"><i class=\"power off icon\"></i>Logout</a>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header-student/header-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderStudentComponent = /** @class */ (function () {
    function HeaderStudentComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.studentArr = [];
        this.basePath = '/student';
    }
    HeaderStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentList = this.firebaseService.getData(this.basePath);
        var key1 = localStorage.getItem('key');
        this.key = key1;
        this.studentList.forEach(function (data1) {
            data1.forEach(function (data) {
                if (data.key == _this.key) {
                    _this.stu_name = data.student_name;
                }
            });
        });
    };
    HeaderStudentComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-student',
            template: __webpack_require__("../../../../../src/app/header-student/header-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-student/header-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderStudentComponent);
    return HeaderStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-teacher/header-teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-teacher/header-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui violet inverted huge borderless main menu fixed\" style=\"position: fixed; top: 0px; left: auto; z-index: 10;\">\n  <div class=\"ui  container\">\n    <div href=\"#\" class=\"header item\">\n      OOD\n    </div>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/Project-List'\" routerLinkActive=\"active\">โครงงาน</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/checkWork'\" routerLinkActive=\"active\">ตรวจงาน</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/report'\" routerLinkActive=\"active\">รายงาน</a>\n    <a href=\"#\" class=\"item\" [routerLink]=\"'/ManagePhase'\" routerLinkActive=\"active\">การจัดการข้อมูล</a>\n\n    <div class=\"right menu\">\n      <a class=\"item\" >{{key}}</a>\n      <a class=\"item\" (click)=\"logout()\"> <i class=\"power off icon\"></i>Logout</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-teacher/header-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderTeacherComponent = /** @class */ (function () {
    function HeaderTeacherComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.basePath = '/teacher';
    }
    HeaderTeacherComponent.prototype.ngOnInit = function () {
        this.wikiList = this.firebaseService.getData(this.basePath);
        var key1 = localStorage.getItem('key');
        //  localStorage.clear()
        //  console.log(key1);
        //  console.log();
        this.key = key1;
    };
    HeaderTeacherComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderTeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-teacher',
            template: __webpack_require__("../../../../../src/app/header-teacher/header-teacher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-teacher/header-teacher.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderTeacherComponent);
    return HeaderTeacherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/history-work/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "../../../../../src/app/history-work/history-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n.Pass {\r\n  color: green;\r\n}\r\n\r\n.Failed {\r\n  color: red;\r\n}\r\n\r\n.No {\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history-work/history-work.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n<app-header-student></app-header-student>\n  <div class=\"ui container ctop\">\n    <br>\n    <div class=\"ui grid \">\n      <div class=\"four wide column\">\n        <app-profile-student></app-profile-student>\n      </div>\n      <div>\n        <form>\n        <table class=\"ui selectable celled table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>ชื่องาน</th>\n              <th>ดาวน์โหลดไฟล์งาน</th>\n              <th>วันที่ส่งงาน</th>\n              <th>สถานะการส่งงาน</th>\n              <th>ผลการตรวจ</th>\n              <th>แก้ไข</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of statusArr\">\n              <td>{{data.key[4]}}{{data.key[5]}}{{data.key[6]}}{{data.key[7]}}</td>\n              <td>{{data.subphase_name}}</td>\n              <td>\n                <a href=\"{{data.url}}\">{{data.file_name}}</a>\n              </td>\n              <td>{{data.date_send}}</td>\n              <td>{{data.status_send}}</td>\n              <td>\n                <!-- <div  style=\"display:none\" class=\"ui label\" ng-class=\"style\">\n                    {{data.status_result}}\n              </div> -->\n              <button (click)=\"setDataComment(data)\" type=\"button\" class=\"circular mini compact icon ui right floated button\" data-toggle=\"modal\" data-target=\"#commentteacher\"\n              data-inverted=\"\" [disabled]=\"!isValidCommentTeacher(data.status_send)\">\n                <i class=\"ui info icon\"></i>\n              </button>\n                  {{data.status_result}}\n              </td>\n              <td>\n                <!-- <button type=\"button\" (click)=\"setData(data)\" class=\"ui button\" data-toggle=\"modal\" data-target=\"#history\">\n                  แก้ไข\n                </button> -->\n                <button type=\"button\" class=\"ui small button\"\n                [disabled]=\"!isValidForm(data.status_send, data.status_result)\"\n                (click)=\"setData(data)\"\n                data-toggle=\"modal\" data-target=\"#history\">แก้ไข</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </form>\n      </div>\n    </div>\n  </div>\n\n<div class=\"modal fade\" id=\"history\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไข {{subp_name}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData()\">\n            <div>\n              เลือกไฟล์งาน\n              <label class=\"btn btn-default\">\n                <input type=\"file\" (change)=\"selectFile($event)\">\n              </label>\n            </div>\n            <div class=\"field\">\n              แสดงความคิดเห็น\n              <br>\n              <textarea class=\"form-control\" rows=\"2\" type=\"text\" name=\"comment_student\" [(ngModel)]=\"ment_student\" placeholder=\"เพิ่มคำอธิบาย\"></textarea>\n            </div>\n            <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n              <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n                {{progress.percentage}}%</div>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n          <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- show comment teacher -->\n  <div class=\"modal fade\" id=\"commentteacher\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ความคิดเห็นของผู้สอน</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form (ngSubmit)=\"setDataComment()\">\n              {{comment_teacher}}\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/history-work/history-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileupload__ = __webpack_require__("../../../../../src/app/history-work/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HistoryWorkComponent = /** @class */ (function () {
    function HistoryWorkComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
        // allkey: FirebaseListObservable<any[]>;
        this.basePath = "/status";
        this.statusArr = [];
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.tmpArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.selectedStudent = "";
        this.selectedAllPhase = "";
        this.result = 'yes';
    }
    HistoryWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        this.selectedAllPhase = selectedPhase + selectedSubPhase;
        var selectedStudent = localStorage.getItem("Student");
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.subphaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == key1) {
                    _this.studentArr.push(element);
                    _this.stu_name = element.student_name;
                    _this.student_pj_id = element.project_id;
                }
            });
        });
        this.statusArr = [];
        var keepGoing = true;
        this.statusList.forEach(function (element1) {
            _this.statusArr = [];
            element1.forEach(function (element) {
                keepGoing = false;
                var Phase_id = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                var SubPhase_id = element.key[6] + element.key[7];
                var my_pj_id = element.key[0] + element.key[1] + element.key[2];
                if (_this.student_pj_id == my_pj_id) {
                    _this.subphaseArr.length == 1;
                    for (var i = 0; i < _this.subphaseArr.length; i++) {
                        if (Phase_id == _this.subphaseArr[i].key && my_pj_id == _this.student_pj_id) {
                            _this.sp_name = _this.subphaseArr[i].sub_phase_name;
                            // this.ment_teacher = element.comment_teacher;
                            // this.ment_student = element.comment_student;
                            var dataTmp = {
                                stu_name: _this.stu_name,
                                subphase_name: _this.sp_name,
                                key: element.key,
                                date_send: element.date_send,
                                status_send: element.status_send,
                                status_result: element.status_result,
                                // status_check: element.status_check,
                                comment_teacher: element.comment_teacher,
                                comment_student: element.comment_student,
                                file_name: element.file_name,
                                url: element.url,
                            };
                            _this.statusArr.push(dataTmp);
                        }
                    }
                }
            });
            // console.log(this.statusArr);
        });
    };
    HistoryWorkComponent.prototype.setData = function (data) {
        this.subp_name = data.subphase_name;
        this.status_key = data.key;
        this.result = data.status_result;
        this.comment_teacher = data.comment_teacher;
        this.ment_student = data.comment_student;
        this.sp_key = data.key[4] + data.key[5] + data.key[6] + data.key[7];
    };
    HistoryWorkComponent.prototype.setDataComment = function (data) {
        this.result = data.status_result;
        this.comment_teacher = data.comment_teacher;
    };
    HistoryWorkComponent.prototype.isValidForm = function (s_send, s_result) {
        if (s_send != "No" && s_result != "Pass" && s_result != "Failed") {
            this.isValid = true;
            return this.isValid;
        }
    };
    HistoryWorkComponent.prototype.isValidCommentTeacher = function (s_send) {
        if (s_send != "No") {
            this.isValid = true;
            return this.isValid;
        }
    };
    HistoryWorkComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match("application.*")) {
            this.selectedFiles = event.target.files;
        }
        else {
            // alert("invalid format!");
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({ type: 'error', title: 'ชนิดของไฟล์งานไม่ถูกต้อง', text: 'กรุณาเปลี่ยนเป็นไฟล์ ".pdf"', });
        }
    };
    HistoryWorkComponent.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, allSelect, keepGoing;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, []];
                    case 1:
                        _a.statusArr = _b.sent();
                        console.log(this.statusArr);
                        allSelect = this.selectedPhase + this.selectedSubPhase;
                        keepGoing = true;
                        return [4 /*yield*/, this.statusList.subscribe(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var file, data, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!keepGoing) return [3 /*break*/, 5];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    var tmpKey, tmpPhase, t;
                                                    return __generator(this, function (_a) {
                                                        tmpKey = element.key[0] + element.key[1] + element.key[2];
                                                        tmpPhase = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                                                        this.myCount = element.key[8] + element.key[9];
                                                        if (this.status_key == element.key && this.sp_key == tmpPhase) {
                                                            for (t = 0; t < this.subphaseArr.length; t++) {
                                                                if (this.subphaseArr[t].key == this.sp_key) {
                                                                    if (this.subphaseArr[t].date_send < this.myDateNow) {
                                                                        this.mystatus_send = "Late";
                                                                    }
                                                                    else {
                                                                        this.mystatus_send = "Sent";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _b.sent();
                                            keepGoing = false;
                                            file = this.selectedFiles.item(0);
                                            this.selectedFiles = undefined;
                                            data = {
                                                file_name: this.status_key + ".pdf",
                                                date_send: this.myDateNow,
                                                comment_student: this.ment_student,
                                                status_send: this.mystatus_send
                                            };
                                            return [4 /*yield*/, this.firebaseService.editData(this.status_key, data, this.basePath)];
                                        case 2:
                                            _b.sent();
                                            ////////////////////////////////////
                                            _a = this;
                                            return [4 /*yield*/, new __WEBPACK_IMPORTED_MODULE_4__fileupload__["a" /* FileUpload */](file)];
                                        case 3:
                                            ////////////////////////////////////
                                            _a.currentFileUpload = _b.sent();
                                            return [4 /*yield*/, this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.status_key)];
                                        case 4:
                                            _b.sent();
                                            this.statusArr = [];
                                            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200 });
                                            _b.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        this.myDateNow = __WEBPACK_IMPORTED_MODULE_5_moment__(this.myDateNow).format('MM/DD/YY');
                        return [2 /*return*/];
                }
            });
        });
    };
    // randomcolor = this.getRandomColor();
    // getRandomColor() {
    //   console.log();
    //   let color = "red"
    //   return color;
    // }
    HistoryWorkComponent.prototype.setColor = function (result) {
        console.log(result);
        return "red";
    };
    HistoryWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-work',
            template: __webpack_require__("../../../../../src/app/history-work/history-work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history-work/history-work.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], HistoryWorkComponent);
    return HistoryWorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin'); /*\r\n * # Semantic UI - 2.2.14\r\n * https://github.com/Semantic-Org/Semantic-UI\r\n * http://www.semantic-ui.com/\r\n *\r\n * Copyright 2014 Contributors\r\n * Released under the MIT license\r\n * http://opensource.org/licenses/MIT\r\n *\r\n */ /*!\r\n * # Semantic UI - Site\r\n * http://github.com/semantic-org/semantic-ui/\r\n *\r\n *\r\n * Released under the MIT license\r\n * http://opensource.org/licenses/MIT\r\n *\r\n */ /*******************************\r\n             Page\r\n*******************************/ html,\r\nbody {\r\n  height: 100%;\r\n} html {\r\n  font-size: 14px;\r\n} body {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  overflow-x: hidden;\r\n  min-width: 320px;\r\n  background: #FFFFFF;\r\n  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.4285em;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  /* font-smoothing: antialiased; */\r\n} /*******************************\r\n             Headers\r\n*******************************/ h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n  line-height: 1.28571429em;\r\n  margin: calc(2rem -  0.14285714em ) 0em 1rem;\r\n  font-weight: bold;\r\n  padding: 0em;\r\n} h1 {\r\n  min-height: 1rem;\r\n  font-size: 2rem;\r\n} h2 {\r\n  font-size: 1.71428571rem;\r\n} h3 {\r\n  font-size: 1.28571429rem;\r\n} h4 {\r\n  font-size: 1.07142857rem;\r\n} h5 {\r\n  font-size: 1rem;\r\n} h1:first-child,\r\nh2:first-child,\r\nh3:first-child,\r\nh4:first-child,\r\nh5:first-child {\r\n  margin-top: 0em;\r\n} h1:last-child,\r\nh2:last-child,\r\nh3:last-child,\r\nh4:last-child,\r\nh5:last-child {\r\n  margin-bottom: 0em;\r\n} /*******************************\r\n             Text\r\n*******************************/ p {\r\n  margin: 0em 0em 1em;\r\n  line-height: 1.4285em;\r\n} p:first-child {\r\n  margin-top: 0em;\r\n} p:last-child {\r\n  margin-bottom: 0em;\r\n} /*-------------------\r\n        Links\r\n--------------------*/ a {\r\n  color: #4183C4;\r\n  text-decoration: none;\r\n} a:hover {\r\n  color: #1e70bf;\r\n  text-decoration: none;\r\n} /*******************************\r\n         Scrollbars\r\n*******************************/ /*******************************\r\n          Highlighting\r\n*******************************/ /* Site */ ::-webkit-selection {\r\n  background-color: #CCE2FF;\r\n  color: rgba(0, 0, 0, 0.87);\r\n} ::-moz-selection {\r\n  background-color: #CCE2FF;\r\n  color: rgba(0, 0, 0, 0.87);\r\n} ::selection {\r\n  background-color: #CCE2FF;\r\n  color: rgba(0, 0, 0, 0.87);\r\n} /* Form */ textarea::-webkit-selection,\r\ninput::-webkit-selection {\r\n  background-color: rgba(100, 100, 100, 0.4);\r\n  color: rgba(0, 0, 0, 0.87);\r\n} textarea::-moz-selection,\r\ninput::-moz-selection {\r\n  background-color: rgba(100, 100, 100, 0.4);\r\n  color: rgba(0, 0, 0, 0.87);\r\n} textarea::selection,\r\ninput::selection {\r\n  background-color: rgba(100, 100, 100, 0.4);\r\n  color: rgba(0, 0, 0, 0.87);\r\n} /* Force Simple Scrollbars */ body ::-webkit-scrollbar {\r\n  -webkit-appearance: none;\r\n  width: 10px;\r\n  height: 10px;\r\n} body ::-webkit-scrollbar-track {\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border-radius: 0px;\r\n} body ::-webkit-scrollbar-thumb {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  background: rgba(0, 0, 0, 0.25);\r\n  -webkit-transition: color 0.2s ease;\r\n  transition: color 0.2s ease;\r\n} body ::-webkit-scrollbar-thumb:window-inactive {\r\n  background: rgba(0, 0, 0, 0.15);\r\n} body ::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(128, 135, 139, 0.8);\r\n} /* Inverted UI */ body .ui.inverted::-webkit-scrollbar-track {\r\n  background: rgba(255, 255, 255, 0.1);\r\n} body .ui.inverted::-webkit-scrollbar-thumb {\r\n  background: rgba(255, 255, 255, 0.25);\r\n} body .ui.inverted::-webkit-scrollbar-thumb:window-inactive {\r\n  background: rgba(255, 255, 255, 0.15);\r\n} body .ui.inverted::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(255, 255, 255, 0.35);\r\n} /*******************************\r\n        Global Overrides\r\n*******************************/ /*******************************\r\n         Site Overrides\r\n*******************************/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <!-- Standard Meta -->\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\n\n  <script src=\"https://code.jquery.com/jquery-1.9.1.min.js\"></script>\n\n  <!-- Site Properties -->\n  <title>Login Example - Semantic</title>\n  <!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/reset.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/site.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/container.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/grid.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/header.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/image.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/menu.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/divider.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/segment.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/form.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/input.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/button.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/list.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/message.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../dist/components/icon.css\"> -->\n\n  <script src=\"assets/library/jquery.min.js\"></script>\n  <script src=\"../dist/components/form.js\"></script>\n  <script src=\"../dist/components/transition.js\"></script>\n\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js\"></script>\n\n  <style type=\"text/css\">\n    body {\n      background-color: #DADADA;\n    }\n\n    body>.grid {\n      height: 100%;\n    }\n\n    .image {\n      margin-top: -100px;\n    }\n\n    .column {\n      max-width: 450px;\n    }\n  </style>\n  <script>\n    $(document)\n      .ready(function () {\n        $('.ui.form')\n          .form({\n            fields: {\n              email: {\n                identifier: 'email',\n                rules: [\n                  {\n                    type: 'empty',\n                    prompt: 'Please enter your e-mail'\n                  },\n                  {\n                    type: 'email',\n                    prompt: 'Please enter a valid e-mail'\n                  }\n                ]\n              },\n              password: {\n                identifier: 'password',\n                rules: [\n                  {\n                    type: 'empty',\n                    prompt: 'Please enter your password'\n                  },\n                  {\n                    type: 'length[6]',\n                    prompt: 'Your password must be at least 6 characters'\n                  }\n                ]\n              }\n            }\n          })\n          ;\n      })\n      ;\n  </script>\n</head>\n\n<body>\n\n  <div class=\"ui middle aligned center aligned grid\">\n    <div class=\"column\">\n      <h2 class=\"ui teal image header\">\n        <div class=\"content\">\n           204362 OOD\n        </div>\n      </h2>\n      <form (ngSubmit)=\"login()\" #checkLoginForm=\"ngForm\" class=\"ui large form\">\n        <div class=\"ui stacked segment\">\n          <div class=\"field\">\n            <div class=\"ui left icon input\">\n              <i class=\"user icon\"></i>\n              <input type=\"text\" name=\"email\" placeholder=\"Username\" [(ngModel)]=\"username\">\n            </div>\n          </div>\n          <div class=\"field\">\n            <div class=\"ui left icon input\">\n              <i class=\"lock icon\"></i>\n              <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n            </div>\n          </div>\n          <button type=\"submit\" class=\"ui fluid large teal submit button\">Login</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service_service__ = __webpack_require__("../../../../../src/app/service/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(LoginService, router) {
        this.LoginService = LoginService;
        this.router = router;
        this.studentArr = [];
        this.teacherArr = [];
        this.adminArr = [];
        this.tmpArr = [];
        this.mycount1 = 0;
        this.conf = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacherList = this.LoginService.getList("/teacher");
        this.studentList = this.LoginService.getList("/student");
        this.adminList = this.LoginService.getList("/admin");
        this.teacherList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.teacherArr.push(tmp);
                var dataObj = {
                    key: tmp.key,
                    password: tmp.password,
                    mytype: "teacher"
                };
                _this.tmpArr.push(dataObj);
            });
        });
        this.studentList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.studentArr.push(tmp);
                var dataObj = {
                    key: tmp.key,
                    password: tmp.password,
                    mytype: "student"
                };
                _this.tmpArr.push(dataObj);
            });
        });
        this.adminList.subscribe(function (data) {
            data.forEach(function (tmp) {
                _this.adminArr.push(tmp);
                var dataObj = {
                    key: tmp.key,
                    password: tmp.password,
                    mytype: "admin"
                };
                _this.tmpArr.push(dataObj);
            });
        });
    };
    LoginComponent.prototype.login = function () {
        this.mycount1 = 0;
        console.log(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.password));
        var Hashing_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.password);
        for (var i = 0; i < this.tmpArr.length; i++) {
            this.conf = 0;
            this.mycount1 = 0;
            if (this.username == this.tmpArr[i].key) {
                this.conf = 1;
                this.mycount1 = 0;
                if (Hashing_pass == this.tmpArr[i].password) {
                    if (this.tmpArr[i].mytype == "teacher") {
                        localStorage.setItem("key", this.username);
                        this.router.navigate(["/checkWork"]);
                    }
                    else if (this.tmpArr[i].mytype == "student") {
                        localStorage.setItem("key", this.username);
                        localStorage.setItem("Student", this.username);
                        this.router.navigate(["/sendWork"]);
                    }
                    else {
                        localStorage.setItem("key", this.username);
                        this.router.navigate(["/ManageAdmin"]);
                    }
                }
                else {
                    // alert("รหัสผ่านไม่ถูกต้อง")
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'รหัสผ่านไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง', });
                }
                break;
            }
            else {
                this.mycount1 = 1;
            }
        }
        if (this.mycount1 == 1 && this.conf == 0) {
            console.log("ชื่อผู้ใช้ไม่มีในระบบ");
            // alert("ชื่อผู้ใช้ไม่มีในระบบ")
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'ไม่มีชื่อผู้ใช้นี้ในระบบ', text: 'กรุณาตรวจสอบ', });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__service_login_service_service__["a" /* LoginService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_login_service_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<app-header-admin></app-header-admin>\n\n<body>\n  <div class=\"ui container\">\n    <div class=\"ui grid ctop\">\n      <div class=\"three wide column\">\n      </div>\n      <div class=\"twelve wide column cleft\">\n        <div class=\"right floated left aligned six wide column\">\n          <div class=\"ui padded segment\">\n            การจัดการข้อมูลผู้สอน\n            <button type=\"button\" class=\"circular compact icon ui right floated button green\" data-toggle=\"modal\" data-target=\"#addData\"\n              data-inverted=\"\" data-tooltip=\"เพิ่มผู้สอน\" data-position=\"left center\">\n              <i class=\"ui plus alternate icon\"></i>\n            </button>\n            <br>\n            <!-- <a routerLink=\"/addStudent\">เพิ่มนักศึกษา</a> -->\n            <table class=\"ui selectable celled table\">\n              <thead>\n                <tr>\n                  <th>ชื่อผู้ใช้</th>\n                  <th>ชื่อ-สกุลผู้สอน</th>\n                  <!-- <th>รหัสผ่าน</th> -->\n                  <th>ฟังก์ชัน</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of wikiList | async\">\n                  <td>{{data.key}}</td>\n                  <td>{{data.teacher_name}}</td>\n                  <!-- <td>{{data.password}}</td> -->\n                  <td>\n                    <button type=\"button\" (click)=\"setData(data)\" class=\"circular compact icon ui button blue\" data-toggle=\"modal\" data-target=\"#editData\">\n                      <i class=\"edit alternate icon\"></i>\n                    </button>\n                    <!-- <i class=\"trash alternate outline icon large red\" (click)=\"delData(data)\"></i> -->\n                    <!-- <button type=\"button\" (click)=\"delData(data)\" class=\"ui orange button\">ลบ</button> -->\n                    <button type=\"button\" (click)=\"confirm(data)\" class=\"circular compact icon ui button red\" data-toggle=\"modal\" data-target=\"#confirm\">\n                      <i class=\"trash alternate icon\"></i>\n                    </button>\n                  </td>\n                  <!-- <td><button type=\"button\" (click)=\"delData(data)\" >Delete</button></td> -->\n                  <!-- <td>{{data.key}}</td> -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n    <!-- Modal show confirm -->\n    <div class=\"modal fade\" id=\"confirm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">confirm</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              ต้องการลบชื่อผู้ใช้ : {{teacher_id}}\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n              <button type=\"submit\" (click)=\"delData(teacher_id)\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n  <!-- Modal manage data -->\n  <div class=\"modal fade\" id=\"editData\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลผู้สอน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <div>\n              <label> ชื่อผู้ใช้งาน {{tea_id}} </label>\n            </div>\n            <div>\n              <label>ชื่อ-สกุลผู้สอน</label>\n              <input type=\"text\" name=\"student_name\" ngModel [(ngModel)]=\"tea_name\">\n            </div>\n            <!-- <div>\n              <label>รหัสผ่าน</label>\n              <input type=\"text\" name=\"password\" ngModel [(ngModel)]=\"tea_pass\">\n            </div> -->\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(tea_id,tea_name,tea_pass)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal add data -->\n  <div class=\"modal fade\" id=\"addData\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มข้อมูลผู้สอน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setAddData()\" class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อผู้ใช้งาน </label>\n              <input type=\"text\" name=\"teacher_id\" [(ngModel)]=\"teacher_id\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อ-สกุลผู้สอน</label>\n              <input type=\"text\" name=\"teacher_name\" [(ngModel)]=\"teacher_name\">\n            </div>\n            <!-- <div class=\"field\">\n              <label for=\"name\"> รหัสผ่าน</label>\n              <input type=\"text\" name=\"password\" [(ngModel)]=\"password\">\n            </div> -->\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"ui primary button\" (click)=\"addData()\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/manage-admin/manage-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.teacher_id = '';
        this.teacher_name = '';
        this.password = '';
        this.basePath = '/teacher';
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
        this.wikiList = this.firebaseService.getData(this.basePath);
    };
    ManageAdminComponent.prototype.setAddData = function () {
        this.teacher_name = '';
        this.teacher_id = '';
        this.password = '';
    };
    ManageAdminComponent.prototype.addData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Hashing_pass, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Hashing_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr("1234");
                        data = {
                            key: this.teacher_id,
                            teacher_name: this.teacher_name,
                            password: Hashing_pass
                        };
                        return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(['/ManageAdmin'])];
                    case 3:
                        _a.sent();
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1500 });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageAdminComponent.prototype.clear = function () {
        this.teacher_id = "";
        this.teacher_name = "";
        this.password = "";
    };
    ManageAdminComponent.prototype.delData = function (data) {
        var dataObj = {
            key: data
        };
        this.firebaseService.delData(dataObj, this.basePath);
        this.router.navigate(["/ManageAdmin"]);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1500 });
    };
    ManageAdminComponent.prototype.setData = function (data) {
        this.dataThis = data;
        this.tea_id = data.key;
        this.tea_name = data.teacher_name;
        this.tea_pass = data.password;
    };
    ManageAdminComponent.prototype.editData = function (tea_id, tea_name, tea_pass) {
        var Hashing_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(tea_pass);
        var dataObj = {
            password: tea_pass,
            teacher_id: tea_id,
            teacher_name: Hashing_pass
        };
        this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
        this.router.navigate(['/ManageAdmin']);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1500 });
    };
    ManageAdminComponent.prototype.confirm = function (data) {
        this.teacher_id = data.key;
    };
    ManageAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-admin',
            template: __webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-admin/manage-admin.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-phase/manage-phase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-phase/manage-phase.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<body>\n<app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <br>\n    <div class=\"ui grid \">\n      <div class=\"three wide column\">\n        <app-menu-manage></app-menu-manage>\n      </div>\n      <div class=\"twelve wide column cleft\">\n        <div class=\"right floated left aligned six wide column\">\n          <div class=\"ui padded segment\">\n            <h5>การจัดการข้อมูลการทำงาน</h5>\n              <button type=\"button\" class=\"circular compact icon ui right floated button green\" data-toggle=\"modal\" data-target=\"#addPhase\" data-inverted=\"\" data-tooltip=\"เพิ่มงานหลัก\" data-position=\"left center\">\n                  <i class=\"ui plus alternate icon\"></i>\n                </button>\n                <br>\n            <table class=\"ui selectable fixed celled table\">\n              <thead>\n                <tr>\n                  <!-- <th style=\"width:6%\" class=\"ui center aligned\">#</th> -->\n                  <th>ชื่องานหลัก</th>\n                  <th>รายละเอียด</th>\n                  <th style=\"width:12%\" class=\"ui center aligned\">แก้ไข/ลบ</th>\n                  <th style=\"width:16%\" class=\"ui center aligned\">เพิ่ม/ดู งานย่อย</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of phaseList | async\">\n                  <!-- <td>{{data.key}}</td> -->\n                  <td>{{data.phase_name}}</td>\n                  <td>{{data.phase_detail}}</td>\n                  <td class=\"ui center aligned single line\">\n                    <button type=\"button\" (click)=\"setData(data)\" class=\"circular compact icon ui button blue\" data-toggle=\"modal\" data-target=\".manage-phase\">\n                      <i class=\"edit alternate icon\"></i>\n                    </button>\n                    <button type=\"button\" (click)=\"confirm_p(data)\" class=\"circular compact icon ui button red\"  data-toggle=\"modal\" data-target=\"#confirm_p\">\n                      <i class=\"trash alternate icon\"></i>\n                    </button>\n                  </td>\n                  <td class=\"ui center aligned single line\">\n                    <button type=\"button\" (click)=\"setData(data)\" class=\"circular compact icon ui button green\" data-toggle=\"modal\" data-target=\".add-sub-phase\">\n                      <i class=\"plus alternate icon\"></i>\n                    </button>\n                    <button type=\"button\" (click)=\"setDataSubPhase(data)\" class=\"circular compact icon ui button yellow\" data-toggle=\"modal\" data-target=\".manage-sub-phase\">\n                      <i class=\"eye alternate icon\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal add phase -->\n  <div class=\"modal fade\" id=\"addPhase\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"> เพิ่มข้อมูลงานหลัก </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"ui container\">\n            <form (ngSubmit)=\"addData()\" class=\"ui form\">\n                <div class=\"field\">\n                  <label for=\"name\"> ชื่องานหลัก</label>\n                  <input type=\"text\" name=\"phase_name\" [(ngModel)]=\"phase_name\">\n                </div>\n                <div class=\"field\">\n                  <label for=\"name\"> รายละเอียด </label>\n                  <input type=\"text\" name=\"phase_detail\" [(ngModel)]=\"phase_detail\">\n                </div>\n              </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"ui primary button\" (click)=\"addData()\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal manage sub phase -->\n  <div class=\"modal fade manage-sub-phase\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">จัดการข้อมูลงานย่อย</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"ui container\">\n            <form class=\"ui form\">\n              <table class=\"ui selectable fixed celled table\">\n                <thead>\n                  <tr>\n                    <!-- <th style=\"width:9%\" class=\"ui center aligned\">#</th> -->\n                    <th>ชื่องานย่อย</th>\n                    <th>รายละเอียด</th>\n                    <th style=\"width:13%\" class=\"ui center aligned\">วันที่สั่ง</th>\n                    <th style=\"width:13%\" class=\"ui center aligned\">กำหนดส่ง</th>\n                    <th style=\"width:13%\" class=\"ui center aligned\">แก้ไข/ลบ</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of tmpArr\">\n                    <!-- <td>{{data.key}}</td> -->\n                    <td>{{data.sub_phase_name}}</td>\n                    <td>{{data.sub_phase_detail}}</td>\n                    <td>{{data.date_assign}}</td>\n                    <td>{{data.date_send}}</td>\n                    <td class=\"ui center aligned single line\">\n                      <button type=\"button\" (click)=\"setDataSubPhase_edit(data)\" [disabled]=\"!isValidForm(data)\" class=\"circular compact icon ui button blue\" data-toggle=\"modal\" data-target=\".edit-sub-phase\">\n                        <i class=\"edit alternate icon\"></i>\n                      </button>\n                      <button type=\"button\" (click)=\"confirm_sp(data)\" class=\"circular compact icon ui button red\" data-toggle=\"modal\" data-target=\"#confirm_sp\">\n                        <i class=\"trash alternate icon\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- Modal add sub phase -->\n  <div class=\"modal fade add-sub-phase\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มข้อมูลยงานย่อยของ {{p_name}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"ui container\">\n            <form (ngSubmit)=\"setIDPhase(addForm)\" #addForm=\"ngForm\" class=\"ui form\">\n                <!-- <label class=\"ui large label\">  </label> -->\n              <div class=\"field\">\n                <label for=\"name\"> ชื่องานย่อย</label>\n                <input type=\"text\" name=\"sub_phase_name\" [(ngModel)]=\"sub_phase_name\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> วันที่สั่งงาน</label>\n                <input id=\"date_send\" name=\"date_send\" type=\"text\" bsDatepicker class=\"form-control\" [(ngModel)]=\"date_assign\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> กำหนดส่งงาน</label>\n                <input id=\"date_send\" name=\"date_send\" type=\"text\" bsDatepicker class=\"form-control\" [(ngModel)]=\"date_send\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> รายละเอียด </label>\n                <textarea rows=\"3\" class=\"form-control\" id=\"message-text\" type=\"text\" name=\"sub_phase_detail\" [(ngModel)]=\"sub_phase_detail\"></textarea>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addDataSubPhase()\" data-dismiss=\"modal\">เพิ่ม</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal edit sub phase -->\n  <div class=\"modal fade edit-sub-phase\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลงานย่อย</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"ui container\">\n            <form class=\"ui form\">\n              <div class=\"field\">\n                <label for=\"name\"> ชื่องานย่อย</label>\n                <input type=\"text\" name=\"sub_phase_name\" ngModel [(ngModel)]=\"sp_name\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> วันที่สั่งงาน</label>\n                <input id=\"myDate1\" name=\"myDate1\" type=\"text\" bsDatepicker class=\"form-control\" [(ngModel)]=\"sp_date_assign\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> กำหนดส่งงาน</label>\n                <input id=\"myDate2\" name=\"myDate2\" type=\"text\" bsDatepicker class=\"form-control\" [(ngModel)]=\"sp_date_send\">\n              </div>\n              <div class=\"field\">\n                <label for=\"name\"> รายละเอียด </label>\n                <input type=\"text\" name=\"sub_phase_detail\" ngModel [(ngModel)]=\"sp_detail\">\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editDataSubPhase(sp_name,sp_date_assign,sp_date_send,sp_detail)\"\n            data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- Modal manage phase -->\n  <div class=\"modal fade manage-phase\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลงานหลัก</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <!-- <div>\n              <label class=\"ui large label\"> ลำดับงานหลัก {{p_id}} </label>\n            </div> -->\n            <div class=\"field\">\n              <label for=\"name\"> ชื่องานหลัก</label>\n              <input type=\"text\" name=\"phase_name\" ngModel [(ngModel)]=\"p_name\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\"> รายละเอียด</label>\n              <input type=\"text\" name=\"phase_detail\" ngModel [(ngModel)]=\"p_detail\">\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ปิด</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(p_id,p_name,p_detail)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n    <!-- Modal show confirm sub phase -->\n    <div class=\"modal fade\" id=\"confirm_sp\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ยืนยันการทำรายการ</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              ต้องการลบงานย่อย : {{sp_name}}\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n              <button type=\"submit\" (click)=\"delDataSubPhase(key_ps_id)\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n          <!-- Modal show confirm phase -->\n    <div class=\"modal fade\" id=\"confirm_p\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ยืนยันการทำรายการ</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              ต้องการลบงานหลัก : {{p_name}}\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n              <button type=\"submit\" (click)=\"delData(key_p_id)\" class=\"ui primary button\" [disabled]=\"!showme\" data-dismiss=\"modal\">ตกลง</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/manage-phase/manage-phase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePhaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ManagePhaseComponent = /** @class */ (function () {
    function ManagePhaseComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.subPhaseArr = [];
        this.phaseArr = [];
        this.studentArr = [];
        this.statusArr = [];
        this.tmpArr = [];
        this.phase_id = "";
        this.sub_phase_id = "";
        this.sub_phase_name = "";
        this.date_assign = "";
        this.date_send = "";
        this.sub_phase_detail = "";
        this.phase_name = '';
        this.phase_detail = '';
        this.mycount = [];
        this.basePath = "/phase";
    }
    ManagePhaseComponent.prototype.ngOnInit = function () {
        console.log(new Date().toLocaleDateString("en-US"));
        this.phaseList = this.firebaseService.getData("/phase");
        this.subPhaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.statusList = this.firebaseService.getData("/status");
        this.tmpToNum = "01";
        this.tmpToNum = Number(this.tmpToNum);
        this.myMax = 0;
    };
    ManagePhaseComponent.prototype.delData = function (data) {
        console.log(data);
        var dataObj = {
            key: data
        };
        console.log(dataObj);
        this.firebaseService.delData(dataObj, "/phase");
        // swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1500})
    };
    ManagePhaseComponent.prototype.delDataSubPhase = function (data) {
        console.log(data);
        var dataObj = {
            key: data
        };
        console.log(dataObj);
        this.firebaseService.delData(dataObj, "/subphase");
        // swal({type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1100})
        this.subPhaseArr = [];
        this.delDataWorkAtStatus(data);
    };
    ManagePhaseComponent.prototype.delDataWorkAtStatus = function (Myk) {
        var _this = this;
        this.statusList.subscribe(function (element1) {
            element1.forEach(function (element) {
                if (Myk == element.key[4] + element.key[5] + element.key[6] + element.key[7]) {
                    var data = {
                        key: element.key
                    };
                    _this.firebaseService.delData(data, "/status");
                }
            });
        });
    };
    ManagePhaseComponent.prototype.confirm_sp = function (data) {
        console.log(data);
        this.key_ps_id = data.key;
        this.sp_name = data.sub_phase_name;
    };
    ManagePhaseComponent.prototype.confirm_p = function (data) {
        var _this = this;
        this.mycount = [];
        this.subPhaseList.subscribe(function (element1) {
            element1.forEach(function (element) {
                if (data.key == element.key[0] + element.key[1])
                    _this.mycount.push(element);
            });
            if (_this.mycount.length != 0) {
                _this.p_name = "ต้องลบงานย่อยในงานหลักให้หมดก่อน";
                return _this.showme = false;
            }
            else {
                _this.key_p_id = data.key;
                _this.p_name = data.phase_name;
                return _this.showme = true;
            }
        });
    };
    ManagePhaseComponent.prototype.setData = function (data) {
        this.dataThis = data;
        this.p_id = data.key;
        this.p_name = data.phase_name;
        this.p_detail = data.phase_detail;
    };
    ManagePhaseComponent.prototype.setDataSubPhase_edit = function (data) {
        var _this = this;
        var t = 0;
        this.tmpArr = [];
        this.dataThis = data;
        this.key_ps_id = data.key;
        this.sp_date_assign = data.date_assign;
        this.sp_date_send = data.date_send;
        this.sp_detail = data.sub_phase_detail;
        this.sp_name = data.sub_phase_name;
        this.subPhaseList.forEach(function (element1) {
            _this.tmpArr = [];
            element1.forEach(function (element) {
                if (element.key[0] + element.key[1] == _this.key_ps_id[0] + _this.key_ps_id[1]) {
                    _this.tmpArr.push(element);
                }
            });
            // console.log(this.tmpArr);
        });
    };
    ManagePhaseComponent.prototype.setDataSubPhase = function (data) {
        var _this = this;
        this.tmpArr = [];
        this.dataThis = data;
        this.key_p_id = data.key;
        // this.p_id = data.phase_id;
        // this.sp_id = data.sub_phase_id;
        this.sp_date_assign = data.date_assign;
        this.sp_date_send = data.date_send;
        this.sp_detail = data.sub_phase_detail;
        this.sp_name = data.sub_phase_name;
        this.subPhaseList.forEach(function (element1) {
            _this.tmpArr = [];
            element1.forEach(function (element) {
                var ele_p_key = element.key[0] + element.key[1];
                if (ele_p_key == _this.key_p_id) {
                    _this.tmpArr.push(element);
                }
            });
            // console.log(this.tmpArr);
        });
    };
    ManagePhaseComponent.prototype.setIDPhase = function (data) {
        this.dataThis = data;
        this.p_id = data.key;
    };
    ManagePhaseComponent.prototype.editData = function (p_id, p_name, p_detail) {
        var dataObj = {
            phase_detail: p_detail,
            phase_name: p_name,
            key: p_id
        };
        this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200 });
    };
    ManagePhaseComponent.prototype.editDataSubPhase = function (sp_name, sp_date_assign, sp_date_send, sp_detail) {
        this.sp_date_assign = __WEBPACK_IMPORTED_MODULE_3_moment__(this.sp_date_assign).format('MM/DD/YY');
        this.sp_date_send = __WEBPACK_IMPORTED_MODULE_3_moment__(this.sp_date_send).format('MM/DD/YY');
        var dataObj = {
            date_assign: this.sp_date_assign.toString(),
            date_send: this.sp_date_send.toString(),
            sub_phase_detail: sp_detail,
            // sub_phase_id: sp_id,
            sub_phase_name: sp_name
        };
        this.tmpArr.push(dataObj);
        this.firebaseService.editData(this.dataThis.key, dataObj, "/subphase");
        this.tmpArr = [];
    };
    ManagePhaseComponent.prototype.addDataSubPhase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mytmp, tmp, keepGoing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mytmp = 0;
                        keepGoing = true;
                        this.myMax = 0;
                        return [4 /*yield*/, this.subPhaseList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var sp_id, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!keepGoing) return [3 /*break*/, 5];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        tmp = Number(element.key[2] + element.key[3]);
                                                        if (this.p_id == element.key[0] + element.key[1] && tmp > this.myMax) {
                                                            this.myMax = tmp;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            keepGoing = false;
                                            this.myMax++;
                                            if (this.myMax < 10) {
                                                this.myMax = '0' + this.myMax;
                                            }
                                            else {
                                                this.myMax = this.myMax;
                                            }
                                            this.sub_phase_id = this.myMax;
                                            this.date_send = __WEBPACK_IMPORTED_MODULE_3_moment__(this.date_send).format('MM/DD/YY');
                                            this.date_assign = __WEBPACK_IMPORTED_MODULE_3_moment__(this.date_assign).format('MM/DD/YY');
                                            console.log(this.date_assign);
                                            sp_id = this.sub_phase_id;
                                            console.log(this.date_send.toString());
                                            data = {
                                                key: this.p_id + this.sub_phase_id,
                                                date_assign: this.date_assign.toString(),
                                                phase_id: this.p_id,
                                                sub_phase_id: this.sub_phase_id,
                                                sub_phase_name: this.sub_phase_name,
                                                date_send: this.date_send.toString(),
                                                sub_phase_detail: this.sub_phase_detail
                                            };
                                            return [4 /*yield*/, this.firebaseService.addData(data, "/subphase")];
                                        case 2:
                                            _a.sent();
                                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200 });
                                            return [4 /*yield*/, this.clear()];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, this.addStudentInStatus(this.p_id, sp_id)];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePhaseComponent.prototype.addStudentInStatus = function (p_id, sp_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var allSelect, mynum, keepGoing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allSelect = p_id + sp_id;
                        mynum = 0;
                        keepGoing = true;
                        allSelect = allSelect + "01";
                        console.log("allSelect " + allSelect);
                        return [4 /*yield*/, this.studentList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                var kk, data;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            kk = element.project_id + "_" + allSelect;
                                                            data = {
                                                                key: kk,
                                                                status_send: "No"
                                                            };
                                                            return [4 /*yield*/, this.firebaseService.addData(data, "/status")];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePhaseComponent.prototype.clear = function () {
        this.sub_phase_id = "";
        this.sub_phase_name = "";
        this.date_assign = "";
        this.date_send = "";
        this.sub_phase_detail = "";
    };
    ManagePhaseComponent.prototype.clearAdd = function () {
        this.phase_name = "";
        this.phase_detail = "";
    };
    ManagePhaseComponent.prototype.addData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mytmp, tmp, keepGoing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mytmp = 0;
                        keepGoing = true;
                        return [4 /*yield*/, this.phaseList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!keepGoing) return [3 /*break*/, 4];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        tmp = Number(element.key[0] + element.key[1]);
                                                        if (tmp > this.myMax) {
                                                            this.myMax = tmp;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            keepGoing = false;
                                            this.myMax++;
                                            if (this.myMax < 10) {
                                                this.myMax = '0' + this.myMax;
                                            }
                                            else {
                                                this.myMax = this.myMax;
                                            }
                                            this.phase_id = this.myMax;
                                            data = {
                                                key: this.phase_id,
                                                phase_name: this.phase_name,
                                                phase_detail: this.phase_detail,
                                            };
                                            return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                                        case 2:
                                            _a.sent();
                                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1500 });
                                            return [4 /*yield*/, this.clearAdd()];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePhaseComponent.prototype.isValidForm = function (mySP_K) {
        var date_now = __WEBPACK_IMPORTED_MODULE_3_moment__().format('MM/DD/YY');
        if (date_now > mySP_K.date_send) {
            this.isValid = false;
        }
        else {
            this.isValid = true;
        }
        return this.isValid;
    };
    ManagePhaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-manage-phase",
            template: __webpack_require__("../../../../../src/app/manage-phase/manage-phase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-phase/manage-phase.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManagePhaseComponent);
    return ManagePhaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-student/manage-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-student/manage-student.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <br>\n    <div class=\"ui grid\">\n      <div class=\"three wide column\">\n        <app-menu-manage></app-menu-manage>\n      </div>\n      <div class=\"twelve wide column cleft\">\n        <div class=\"right floated left aligned six wide column\">\n          <div class=\"ui padded segment\">\n            <h5>การจัดการข้อมูลผู้เรียน</h5>\n            <br>\n            <input type=\"file\" style=\"display: inline-block;\" (change)=\"incomingfile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"Upload()\" data-toggle=\"modal\" data-target=\"#showDataFromExcel\">เพิ่ม</button>\n\n            <button type=\"button\" class=\"circular compact icon ui right floated button green\" data-toggle=\"modal\" data-target=\"#addStudent\"\n              data-inverted=\"\" data-tooltip=\"เพิ่มผู้เรียน\" data-position=\"left center\" (click)=\"clear()\" >\n              <i class=\"ui plus alternate icon\"></i>\n            </button>\n            <br>\n            <table class=\"ui selectable fixed celled table\">\n              <thead>\n                <tr>\n                  <th>รหัสผู้เรียน</th>\n                  <th>ชื่อ-สกุลผู้เรียน</th>\n                  <!-- <th>รหัสผ่าน</th> -->\n                  <th style=\"width:18%\">รหัสโครงงาน</th>\n                  <th style=\"width:13%\" class=\"ui center aligned\">แก้ไข/ลบ</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of wikiList | async\">\n                  <td>{{data.key}}</td>\n                  <td>{{data.student_name}}</td>\n                  <!-- <td>{{data.password}}</td> -->\n                  <td>{{data.project_id}}</td>\n                  <td class=\"ui center aligned single line\">\n                    <button type=\"button\" (click)=\"setData(data)\" class=\"circular compact icon ui button blue\" data-toggle=\"modal\" data-target=\"#editData\">\n                      <i class=\"edit alternate icon\"></i>\n                    </button>\n                    <button type=\"button\" (click)=\"confirm(data)\" class=\"circular compact icon ui button red\" data-toggle=\"modal\" data-target=\"#confirm\">\n                      <i class=\"trash alternate icon\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"editData\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลผู้เรียน รหัส {{stu_id}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <!-- <div class=\"field\">\n              <div class=\"ui large label\"> รหัสผู้เรียน : {{stu_id}} </div>\n            </div> -->\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อ-สกุล</label>\n              <input type=\"text\" name=\"student_name\" [(ngModel)]=\"stu_name\">\n            </div>\n            <!-- <div class=\"field\">\n              <label for=\"name\"> รหัสผ่าน</label>\n              <input type=\"text\" name=\"password\" [(ngModel)]=\"stu_pass\">\n            </div> -->\n            <!-- <div class=\"field\">\n              <label for=\"name\"> รหัสโครงงาน</label>\n              <input type=\"text\" name=\"project_id\" [(ngModel)]=\"pj_id\">\n            </div> -->\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(stu_id,stu_name,stu_pass,pj_id)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal add student -->\n  <div class=\"modal fade\" id=\"addStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มข้อมูลผู้เรียน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"addData()\" class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\"> รหัสนักศึกษา</label>\n              <input type=\"text\" name=\"student_id\" [(ngModel)]=\"student_id\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อ-สกุล</label>\n              <input type=\"text\" name=\"student_name\" [(ngModel)]=\"student_name\">\n            </div>\n            <!-- <div class=\"field\">\n              <label for=\"name\"> รหัสผ่าน</label>\n              <input type=\"text\" name=\"password\" [(ngModel)]=\"password\">\n            </div> -->\n            <!-- <div class=\"field\">\n                      <label for=\"name\"> รหัสโครงงาน</label>\n                      <input type=\"text\" name=\"project_id\" [(ngModel)]=\"project_id\">\n                    </div> -->\n            <!-- <button type=\"submit\" class=\"ui primary button\">ตกลง</button> -->\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" (click)=\"addData()\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal show confirm -->\n  <div class=\"modal fade\" id=\"confirm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">confirm</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          ต้องการลบชื่อผู้ใช้ : {{student_id}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"submit\" (click)=\"delData(student_id)\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/manage-student/manage-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__ = __webpack_require__("../../../../ts-xlsx/lib/main.browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManageStudentComponent = /** @class */ (function () {
    function ManageStudentComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.studentArr = [];
        this.statusArr = [];
        this.subPhaseArr = [];
        this.student_id = "";
        this.student_name = "";
        this.password = "";
        this.project_id = "";
        this.stu_excel_arr = [];
        this.stu_arr = [];
        this.basePath = "/student";
    }
    ManageStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiList = this.firebaseService.getData(this.basePath);
        var key1 = localStorage.getItem("key");
        this.tmpToNum = "01";
        this.tmpToNum = Number(this.tmpToNum);
        this.studentList = this.firebaseService.getData("/student");
        this.statusList = this.firebaseService.getData("/status");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.myMax = 0;
        this.last_pj_id = "P01";
        this.studentList.subscribe(function (element1) {
            element1.forEach(function (element, index) {
                _this.last_pj_id = element.project_id;
            });
        });
    };
    ManageStudentComponent.prototype.delData = function (data) {
        var dataObj = {
            key: data
        };
        console.log(dataObj);
        console.log(data);
        this.firebaseService.delData(dataObj, this.basePath);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1200 });
        // this.statusList.subscribe(element1 => {
        //   element1.forEach(element => {
        //   });
        // });
    };
    ManageStudentComponent.prototype.confirm = function (data) {
        console.log(data);
        this.student_id = data.key;
    };
    ManageStudentComponent.prototype.setData = function (data) {
        this.dataThis = data;
        // console.log(data);
        this.stu_id = data.key;
        this.stu_name = data.student_name;
        this.stu_pass = data.password;
        this.pj_id = data.project_id;
    };
    ManageStudentComponent.prototype.editData = function (stu_id, stu_name, stu_pass, pj_id) {
        var Hashing_pass = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(stu_pass);
        var dataObj = {
            password: Hashing_pass,
            project_id: pj_id,
            student_id: stu_id,
            student_name: stu_name
        };
        this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200 });
    };
    ManageStudentComponent.prototype.addData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mytmp, tmp, keepGoing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mytmp = 0;
                        keepGoing = true;
                        return [4 /*yield*/, this.studentList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var Hashing_pass, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!keepGoing) return [3 /*break*/, 6];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        tmp = Number(element.project_id[1] + element.project_id[2]);
                                                        if (tmp > this.myMax) {
                                                            this.myMax = tmp;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            keepGoing = false;
                                            this.myMax++;
                                            if (this.myMax < 10) {
                                                this.myMax = "P0" + this.myMax;
                                            }
                                            else {
                                                this.myMax = "P" + this.myMax;
                                            }
                                            this.project_id = this.myMax;
                                            Hashing_pass = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr("1234");
                                            data = {
                                                key: this.student_id,
                                                student_name: this.student_name,
                                                password: Hashing_pass,
                                                project_id: this.project_id
                                            };
                                            return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, this.clear()];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, console.log(data.project_id)];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, this.addStatus(data.project_id)];
                                        case 5:
                                            _a.sent();
                                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200 });
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageStudentComponent.prototype.clear = function () {
        this.student_id = "";
        this.student_name = "";
        this.password = "";
    };
    ManageStudentComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    ManageStudentComponent.prototype.Upload = function () {
        var _this = this;
        this.myCount = 0;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].sheet_to_json(worksheet, { raw: true }));
            __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].sheet_to_json(worksheet).forEach(function (element) {
                _this.stu_excel_arr.push(element);
            });
            for (var i = 0; i < _this.stu_excel_arr.length; i++) {
                _this.last_pj_id = Number(_this.last_pj_id[1] + _this.last_pj_id[2]);
                _this.last_pj_id = _this.last_pj_id + 1;
                if (_this.last_pj_id < 10) {
                    _this.last_pj_id = "P0" + _this.last_pj_id;
                }
                else {
                    _this.last_pj_id = "P" + _this.last_pj_id;
                }
                var Hashing_pass = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(_this.stu_excel_arr[i].password);
                var data_1 = {
                    key: _this.stu_excel_arr[i].key,
                    student_name: _this.stu_excel_arr[i].student_name + " " + _this.stu_excel_arr[i].student_lastname,
                    password: Hashing_pass,
                    project_id: _this.last_pj_id
                };
                console.log(data_1);
                _this.firebaseService.addData(data_1, _this.basePath);
                _this.addStatus(data_1.project_id);
                console.log(data_1.project_id);
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'เพิ่มสำเร็จ', showConfirmButton: false, timer: 1200 });
            }
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    ManageStudentComponent.prototype.addStatus = function (kk) {
        var _this = this;
        var mykk;
        this.subphaseList.subscribe(function (element1) {
            element1.forEach(function (element) {
                mykk = kk + "_" + element.key + "01";
                var dataObj = {
                    key: mykk,
                    status_send: "No"
                };
                // console.log(dataObj);
                _this.firebaseService.addData(dataObj, "/status");
            });
        });
    };
    ManageStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-manage-student",
            template: __webpack_require__("../../../../../src/app/manage-student/manage-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-student/manage-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManageStudentComponent);
    return ManageStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-teacher/manage-teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-teacher/manage-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <br>\n    <div class=\"ui grid\">\n      <div class=\"three wide column\">\n        <app-menu-manage></app-menu-manage>\n      </div>\n      <div class=\"twelve wide column cleft\">\n        <div class=\"right floated left aligned six wide column\">\n          <div class=\"ui padded segment\">\n            <h5>การจัดการข้อมูลผู้สอน</h5>\n            <button type=\"button\" class=\"circular compact icon ui right floated button green\" data-toggle=\"modal\" data-target=\"#addData\"\n              data-inverted=\"\" data-tooltip=\"เพิ่มผู้สอน\" data-position=\"left center\">\n              <i class=\"ui plus alternate icon\"></i>\n            </button>\n            <br>\n            <!-- <a routerLink=\"/addStudent\">เพิ่มนักศึกษา</a> -->\n            <table class=\"ui selectable celled table\">\n              <thead>\n                <tr>\n                  <th>ชื่อผู้ใช้</th>\n                  <th>ชื่อ-สกุลผู้สอน</th>\n                  <!-- <th>รหัสผ่าน</th> -->\n                  <th>ฟังก์ชัน</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of wikiList | async\">\n                  <td>{{data.key}}</td>\n                  <td>{{data.teacher_name}}</td>\n                  <!-- <td>{{data.password}}</td> -->\n                  <td>\n                    <button type=\"submit\" class=\"circular compact icon ui button orange\" (click)=\"clear_pass()\" data-inverted=\"\" data-tooltip=\"แก้ไขรหัสผ่าน\"\n                      data-position=\"left center\" [disabled]=\"!isValidForm(data.key)\" data-toggle=\"modal\" data-target=\"#edit_pass\">\n                      <i class=\"key icon\"></i>\n                    </button>\n                    <button type=\"button\" (click)=\"setData(data)\" class=\"circular compact icon ui button blue\" data-toggle=\"modal\" data-target=\"#editData\">\n                      <i class=\"edit alternate icon\"></i>\n                    </button>\n                    <!-- <i class=\"trash alternate outline icon large red\" (click)=\"delData(data)\"></i> -->\n                    <!-- <button type=\"button\" (click)=\"delData(data)\" class=\"ui orange button\">ลบ</button> -->\n                    <button type=\"button\" (click)=\"confirm(data)\" class=\"circular compact icon ui button red\" data-toggle=\"modal\" data-target=\"#confirm\">\n                      <i class=\"trash alternate icon\"></i>\n                    </button>\n\n\n\n                  </td>\n                  <!-- <td><button type=\"button\" (click)=\"delData(data)\" >Delete</button></td> -->\n                  <!-- <td>{{data.key}}</td> -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal show confirm -->\n  <div class=\"modal fade\" id=\"confirm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">ยืนยันการทำรายการ</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          ต้องการลบชื่อผู้ใช้ : {{teacher_id}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"submit\" (click)=\"delData(teacher_id)\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal manage data -->\n  <div class=\"modal fade\" id=\"editData\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขข้อมูลผู้สอน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setData(setForm)\" #setForm=\"ngForm\" class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อผู้ใช้งาน {{tea_id}} </label>\n            </div>\n            <div class=\"field\">\n              <label for=\"name\">ชื่อ-สกุลผู้สอน</label>\n              <input type=\"text\" name=\"student_name\" ngModel [(ngModel)]=\"tea_name\">\n            </div>\n\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editData(tea_id,tea_name,tea_pass)\" data-dismiss=\"modal\">บันทึก</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Modal add data -->\n  <div class=\"modal fade\" id=\"addData\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">เพิ่มข้อมูลผู้สอน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form (ngSubmit)=\"setAddData()\" class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อผู้ใช้งาน </label>\n              <input type=\"text\" name=\"teacher_id\" [(ngModel)]=\"teacher_id\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\"> ชื่อ-สกุลผู้สอน</label>\n              <input type=\"text\" name=\"teacher_name\" [(ngModel)]=\"teacher_name\">\n            </div>\n            <!-- <div class=\"field\">\n              <label for=\"name\"> รหัสผ่าน</label>\n              <input type=\"text\" name=\"password\" [(ngModel)]=\"password\">\n            </div> -->\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"ui primary button\" (click)=\"addData()\" data-dismiss=\"modal\">เพิ่ม</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal show confirm -->\n  <div class=\"modal fade\" id=\"edit_pass\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">แก้ไขรหัสผ่าน</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\">รหัสผ่านเดิม</label>\n              <input type=\"password\" name=\"old_pass\" ngModel [(ngModel)]=\"old_pass\">\n            </div>\n            <hr>\n            <div class=\"field\">\n              <label for=\"name\">รหัสผ่านใหม่</label>\n              <input type=\"password\" name=\"new_pass\" ngModel [(ngModel)]=\"new_pass\">\n            </div>\n            <div class=\"field\">\n              <label for=\"name\">ยืนยันรหัสผ่านใหม่</label>\n              <input type=\"password\" name=\"new_pass\" ngModel [(ngModel)]=\"re_new_pass\">\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\n          <button type=\"submit\" (click)=\"change_password()\" class=\"ui primary button\" data-dismiss=\"modal\">ตกลง</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/manage-teacher/manage-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageTeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ManageTeacherComponent = /** @class */ (function () {
    function ManageTeacherComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.teacherArr = [];
        this.tmpArr = [];
        this.teacher_id = "";
        this.teacher_name = "";
        this.password = "";
        this.old_pass = '';
        this.new_pass = '';
        this.re_new_pass = '';
        this.basePath = "/teacher";
    }
    ManageTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikiList = this.firebaseService.getData(this.basePath);
        this.teacherList = this.firebaseService.getData(this.basePath);
        var key1 = localStorage.getItem("key");
        this.kk = key1;
        this.teacherList.forEach(function (element1) {
            _this.teacherArr = [];
            element1.forEach(function (element) {
                if (element.key == key1) {
                    _this.teacherArr.push(element);
                    _this.tea_pass = element.password;
                }
            });
        });
    };
    ManageTeacherComponent.prototype.setAddData = function () {
        this.teacher_name = "";
        this.teacher_id = "";
        this.password = "";
    };
    ManageTeacherComponent.prototype.addData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Hashing_pass, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Hashing_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.password);
                        console.log(Hashing_pass);
                        data = {
                            key: this.teacher_id,
                            teacher_name: this.teacher_name,
                            password: "1234"
                        };
                        return [4 /*yield*/, this.firebaseService.addData(data, this.basePath)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(["/ManageTeacher"])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageTeacherComponent.prototype.clear = function () {
        this.teacher_id = "";
        this.teacher_name = "";
        this.password = "";
    };
    ManageTeacherComponent.prototype.delData = function (data) {
        var dataObj = {
            key: data
        };
        this.firebaseService.delData(dataObj, this.basePath);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'ลบสำเร็จ', showConfirmButton: false, timer: 1200 });
        this.router.navigate(["/ManageTeacher"]);
    };
    ManageTeacherComponent.prototype.setData = function (data) {
        this.dataThis = data;
        console.log(data);
        this.tea_id = data.key;
        this.tea_name = data.teacher_name;
        this.tea_pass = data.password;
        // console.log(data.stu_id);
    };
    ManageTeacherComponent.prototype.editData = function (tea_id, tea_name, tea_pass) {
        var Hashing_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(tea_pass);
        var dataObj = {
            password: Hashing_pass,
            teacher_id: tea_id,
            teacher_name: tea_name
        };
        this.firebaseService.editData(this.dataThis.key, dataObj, this.basePath);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'แก้ไขสำเร็จ', showConfirmButton: false, timer: 1200 });
        this.router.navigate(["/ManageTeacher"]);
    };
    ManageTeacherComponent.prototype.confirm = function (data) {
        console.log(data);
        this.teacher_id = data.key;
        this.teacher_name = data.teacher_name;
        this.password = data.password;
    };
    ManageTeacherComponent.prototype.change_password = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var now_pass, now_key, Hashing_old_pass, Hashing_new_pass, Hashing_re_new_pass, dataStu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("DB " + this.tea_pass);
                        now_pass = this.teacherArr[0].password;
                        now_key = this.teacherArr[0].key;
                        Hashing_old_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.old_pass);
                        Hashing_new_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.new_pass);
                        Hashing_re_new_pass = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.re_new_pass);
                        // console.log("now_pass " + now_pass);
                        // console.log("เพิ่งเขียน " + Hashing_old_pass);
                        if (this.tea_pass == Hashing_old_pass) {
                            if (Hashing_new_pass == Hashing_re_new_pass) {
                                dataStu = {
                                    password: Hashing_new_pass
                                };
                                console.log("yeah");
                                this.firebaseService.editData(this.kk, dataStu, "/teacher");
                                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'เปลี่ยนรหัสผ่านสำเร็จ', showConfirmButton: false, timer: 1200 });
                            }
                            else {
                                // alert("การยืนยันรหัสผ่านไม่ถูกต้อง");
                                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'การยืนยันรหัสผ่านไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง', });
                            }
                        }
                        else {
                            // alert("รหัสผ่านเดิมไม่ถูกต้อง");
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'รหัสผ่านเดิมไม่ถูกต้อง', text: 'กรุณากรอกรหัสผ่านอีกครั้ง', });
                        }
                        return [4 /*yield*/, this.teacherList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.teacherArr = [];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        if (element.key == this.kk) {
                                                            this.teacherArr.push(element);
                                                            this.tea_pass = element.password;
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageTeacherComponent.prototype.clear_pass = function () {
        this.old_pass = '';
        this.new_pass = '';
        this.re_new_pass = '';
    };
    ManageTeacherComponent.prototype.isValidForm = function (myK) {
        if (myK == this.kk) {
            this.isValid = true;
            return this.isValid;
        }
    };
    ManageTeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-manage-teacher",
            template: __webpack_require__("../../../../../src/app/manage-teacher/manage-teacher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-teacher/manage-teacher.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ManageTeacherComponent);
    return ManageTeacherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu-manage/menu-manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-manage/menu-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"ui vertical pointing menu\">\n      <a class=\"item\" [routerLink]=\"'/ManagePhase'\" routerLinkActive=\"active\">\n        การจัดการข้อมูลการทำงาน\n      </a>\n      <a class=\"item\" [routerLink]=\"'/ManageStudent'\" routerLinkActive=\"active\">\n        การจัดการข้อมูลผู้เรียน\n      </a>\n      <a class=\"item\" [routerLink]=\"'/ManageTeacher'\" routerLinkActive=\"active\">\n        การจัดการข้อมูลผู้สอน\n      </a>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/menu-manage/menu-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuManageComponent = /** @class */ (function () {
    function MenuManageComponent() {
    }
    MenuManageComponent.prototype.ngOnInit = function () {
    };
    MenuManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-manage',
            template: __webpack_require__("../../../../../src/app/menu-manage/menu-manage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu-manage/menu-manage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuManageComponent);
    return MenuManageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile-student/profile-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-student/profile-student.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"ui raised segments\">\n  <div class=\"ui segment\">\n    <b>ข้อมูลผู้เรียน</b>\n  </div>\n  <div class=\"ui segment\">\n    <div>\n      <h6>{{te_key}}</h6>\n    </div>\n    <div>{{stu_name}}</div>\n  </div>\n</div>\n\n\n<div class=\"ui raised segments\">\n    <div class=\"ui segment\">\n      <b>หัวข้อโครงงานที่สนใจ</b>\n    </div>\n    <div class=\"ui segment\">\n      <div></div>\n      <div><h6>รหัสโครงงาน : {{stu_pkey}}</h6></div>\n      <p>{{p_name_th}}</p>\n      <div><h6>{{p_name_en}}</h6></div>\n    </div>\n  </div>\n\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/profile-student/profile-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProfileStudentComponent = /** @class */ (function () {
    function ProfileStudentComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.statusArr = [];
        this.projectArr = [];
    }
    ProfileStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key1 = localStorage.getItem("key");
        this.te_key = key1;
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.projectList = this.firebaseService.getData("/project");
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (_this.te_key == element.key) {
                    _this.studentArr.push(element);
                    _this.stu_name = element.student_name;
                    _this.stu_pass = element.password;
                    _this.stu_pkey = element.project_id;
                }
            });
        });
        this.projectList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (_this.studentArr[0].project_id == element.key) {
                    _this.projectArr.push(element);
                    _this.p_key = element.key;
                    _this.p_name_en = element.name_en;
                    _this.p_name_th = element.name_th;
                }
            });
        });
    };
    ProfileStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-student',
            template: __webpack_require__("../../../../../src/app/profile-student/profile-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile-student/profile-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileStudentComponent);
    return ProfileStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 60px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <h4 class=\"ui top attached\" align=\"center\">รายชื่อหัวข้อโครงงาน</h4>\n    <hr>\n    <table class=\"ui selectable fixed celled table\">\n      <thead>\n        <tr>\n          <th style=\"width:5%\" class=\"ui center aligned\">#</th>\n          <th style=\"width:9%\" class=\"ui center aligned\">รหัสผู้เรียน</th>\n          <th style=\"width:18%\">ชื่อผู้เรียน</th>\n          <th>ชื่อหัวข้อภาษาไทย</th>\n          <th>ชื่อหัวข้อภาษาอังกฤษ</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of objArr\">\n          <td class=\"ui center aligned\">{{data.no}}</td>\n          <td class=\"ui center aligned\">{{data.stu_key}}</td>\n          <td>{{data.stu_name}}</td>\n          <td>{{data.pj_name_th}}</td>\n          <td>{{data.pj_name_en}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(firebaseService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.studentArr = [];
        this.projectArr = [];
        this.objArr = [];
        this.mycount = 0;
        this.studentList = this.firebaseService.getData("/student");
        this.projectList = this.firebaseService.getData("/project");
        this.projectList.subscribe(function (element1) {
            element1.forEach(function (element) {
                _this.projectArr.push(element);
            });
            _this.studentList.subscribe(function (element1) {
                element1.forEach(function (element) {
                    for (var t = 0; t < _this.projectArr.length; t++) {
                        if (element.project_id == _this.projectArr[t].key) {
                            _this.mycount = _this.mycount + 1;
                            console.log(element.project_id);
                            var dataObj = {
                                no: _this.mycount,
                                stu_key: element.key,
                                stu_name: element.student_name,
                                pj_name_th: _this.projectArr[t].name_th,
                                pj_name_en: _this.projectArr[t].name_en
                            };
                            console.log(dataObj);
                            _this.objArr.push(dataObj);
                        }
                    }
                });
            });
        });
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__("../../../../../src/app/project-list/project-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-list/project-list.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-a-student/report-a-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 55px;\r\n}\r\n\r\n.Mymargin {\r\n  margin-bottom: 80px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.mycolor {\r\n  color: #270665;\r\n}\r\n\r\n.sty1 {\r\n  color: #F5B041;\r\n}\r\n\r\n.sty2 {\r\n  color: #5D6D7E;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-a-student/report-a-student.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n    <div class=\"ui grid\">\n      <div class=\"eight wide column\">\n        <h5>\n          <i class=\"ui user icon mycolor\"></i>{{stu_key}} | {{stu_name}}\n        </h5>\n        <h5>\n          <i class=\"pencil alternate icon mycolor\"></i>โครงงานที่สนใจ :: {{myPJ_name_th}}\n        </h5>\n      </div>\n      <div class=\"eight wide column ui right aligned\">\n        <div>\n          <b class=\"sty1\">สถานะการส่งงาน :</b> ส่ง = 2 | ส่งช้า = 1 | ไม่ส่ง = 0\n        </div>\n        <div>\n          <b class=\"sty2\">สถานะการตรวจงาน :</b> ผ่าน = 2 | ไม่ผ่าน = 1 | ไม่ตรวจ = 0\n        </div>\n      </div>\n    </div>\n  <p-chart type=\"line\" width=\"400\" height=\"400\" [data]=\"data\" (onDataSelect)=\"selectData($event)\" [options]=\"options\"></p-chart>\n\n  </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/report-a-student/report-a-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ReportAStudentComponent = /** @class */ (function () {
    function ReportAStudentComponent(firebaseService, router, uploadService) {
        // var storedNames = JSON.parse(localStorage.getItem("status_send_Arr"));
        // console.log(storedNames);
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.sp_name_Arr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.statusArr = [];
        this.status_send_Arr = [];
        this.status_result_Arr = [];
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        this.selectedAllPhase = selectedPhase + selectedSubPhase;
        var selectedStudent = localStorage.getItem("Student");
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.projectList = this.firebaseService.getData("/project");
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.subphaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == selectedStudent) {
                    _this.studentArr.push(element);
                    _this.stu_name = element.student_name;
                    _this.stu_key = element.key;
                    _this.student_pj_id = element.project_id;
                    console.log("pjid" + _this.student_pj_id);
                }
            });
        });
        this.projectList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (_this.student_pj_id == element.key) {
                    _this.myPJ_name_th = element.name_th;
                }
            });
        });
        var keepGoing = true;
        this.statusList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keepGoing) return [3 /*break*/, 2];
                        return [4 /*yield*/, element1.forEach(function (element, index) {
                                keepGoing = false;
                                var Phase_id = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                                var SubPhase_id = element.key[6] + element.key[7];
                                var my_pj_id = element.key[0] + element.key[1] + element.key[2];
                                var mynum;
                                if (_this.student_pj_id == my_pj_id) {
                                    _this.subphaseArr.length == 1;
                                    for (var i = 0; i < _this.subphaseArr.length; i++) {
                                        if (Phase_id == _this.subphaseArr[i].key && my_pj_id == _this.student_pj_id) {
                                            // console.log("enter "+ i);
                                            // console.log("tmp "+this.tmp);
                                            if (i == _this.tmp) {
                                                _this.sp_name_Arr.pop();
                                                _this.status_send_Arr.pop();
                                                _this.status_result_Arr.pop();
                                            }
                                            console.log(_this.subphaseArr[i].sub_phase_name);
                                            _this.sp_name_Arr.push(_this.subphaseArr[i].sub_phase_name);
                                            if (element.status_send == "Sent") {
                                                mynum = 2.2;
                                            }
                                            else if (element.status_send == "Late") {
                                                mynum = 1.2;
                                            }
                                            else {
                                                mynum = 0.2;
                                            }
                                            _this.status_send_Arr.push(mynum);
                                            if (element.status_result == "Pass") {
                                                mynum = 2.1;
                                            }
                                            else if (element.status_result == "Failed") {
                                                mynum = 1.1;
                                            }
                                            else {
                                                mynum = 0.1;
                                            }
                                            _this.status_result_Arr.push(mynum);
                                            _this.tmp = i;
                                        }
                                    }
                                }
                                /////////////////////////////////////////////////
                                if (index === element1.length - 1) {
                                    _this.data = {
                                        labels: _this.sp_name_Arr,
                                        datasets: [
                                            {
                                                tension: 0,
                                                label: "สถานะการส่งงาน",
                                                borderColor: "#F5B041",
                                                fill: false,
                                                data: _this.status_send_Arr
                                            },
                                            {
                                                tension: 0,
                                                label: "สถานะการตรวจงาน",
                                                borderColor: "#5D6D7E",
                                                fill: false,
                                                data: _this.status_result_Arr
                                            }
                                        ]
                                    };
                                }
                                /////////////////////////////////////////////////////
                            })];
                    case 1:
                        _a.sent();
                        console.log(this.status_send_Arr);
                        console.log(this.status_result_Arr);
                        console.log(this.sp_name_Arr);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        // this.subphaseList.forEach(element1 => {
        //   element1.forEach((element, index) => {
        //     console.log(element.sub_phase_name);
        //     this.sp_name_Arr.push(element.sub_phase_name);
        //   });
        //   console.log(this.sp_name_Arr);
        // });
        ////////////////////////////////////
        this.options = {
            // title: {
            //   display: true
            // },
            // legend: {
            //   position: "bottom"
            // },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                            suggestedMax: 3,
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            autoSkip: false
                        }
                    }
                ]
            }
        };
    }
    ReportAStudentComponent.prototype.selectData = function (event) {
        console.log(event);
    };
    ReportAStudentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myChart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], ReportAStudentComponent.prototype, "myChart", void 0);
    ReportAStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-report-a-student",
            template: __webpack_require__("../../../../../src/app/report-a-student/report-a-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-a-student/report-a-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], ReportAStudentComponent);
    return ReportAStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-all-phase/report-all-phase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 55px;\r\n}\r\n\r\n.color-sent {\r\n  color: #5499C7;\r\n}\r\n\r\n.color-late {\r\n  color: #F1948A;\r\n}\r\n\r\n.color-no1 {\r\n  color: #5D6D7E;\r\n}\r\n\r\n.color-pass {\r\n  color: #F5B041;\r\n}\r\n\r\n.color-failed {\r\n  color: #5D6D7E;\r\n}\r\n\r\n.color-no2 {\r\n  color: #5D6D7E;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-all-phase/report-all-phase.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui container ctop\">\n\n    <h4 class=\"ui top attached\" align=\"center\">{{p_name}} :: {{sp_name}}</h4>\n    <hr>\n\n    <div class=\"ui grid\">\n      <div class=\"eight wide column\">\n        <h5 class=\"ui top attached\" align=\"center\">สัดส่วนของการส่งงาน</h5>\n        <hr>\n        <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n        <br>\n        <div class=\"ui grid\">\n          <div class=\"six wide column color-sent\" align=\"right\">\n            <h3>\n              {{this.numSent}} คน\n            </h3>\n            <hr>\n            <h3>\n              <b>{{percent_sent| number: '1.2-2'}}%</b>\n            </h3>\n            <h3>\n              <b>SENT</b>\n            </h3>\n            ส่งงานภายในกำหนด\n          </div>\n          <div class=\"four wide column color-late\" align=\"center\">\n            <h3>\n              {{this.numLate}} คน\n            </h3>\n            <hr>\n            <h3>\n              <b>{{percent_late| number: '1.2-2'}}%</b>\n            </h3>\n            <h3>\n              <b>LATE</b>\n            </h3>\n            ส่งงานช้ากว่ากำหนด\n          </div>\n          <div class=\"six wide column color-no1\" align=\"left\">\n            <h3>\n              {{this.numNo}} คน\n            </h3>\n            <hr>\n            <h3>\n              <b>{{percent_no1| number: '1.2-2'}}%</b>\n            </h3>\n            <h3>\n              <b>NO</b>\n            </h3>\n            ไม่ได้ส่งงาน\n          </div>\n        </div>\n      </div>\n      <div class=\"eight wide column\">\n        <h5 class=\"ui top attached\" align=\"center\">สัดส่วนของผลการตรวจงาน</h5>\n        <hr>\n        <p-chart type=\"pie\" [data]=\"data1\"></p-chart>\n        <br>\n        <div class=\"ui grid\">\n          <div class=\"eight wide column color-pass\" align=\"right\">\n            <h3>\n              {{this.resultPass}} คน\n            </h3>\n            <hr>\n            <h3>\n              <b>{{percent_pass| number: '1.2-2'}}%</b>\n            </h3>\n            <h3>\n              <b>PASS</b>\n            </h3>\n            ผ่าน\n          </div>\n          <div class=\"eight wide column color-failed\" align=\"left\">\n            <h3>\n              {{this.resultFailed}} คน\n            </h3>\n            <hr>\n            <h3>\n              <b>{{percent_failed| number: '1.2-2'}}%</b>\n            </h3>\n            <h3>\n              <b>FAILED</b>\n            </h3>\n            ไม่ผ่าน\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/report-all-phase/report-all-phase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAllPhaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ReportAllPhaseComponent = /** @class */ (function () {
    function ReportAllPhaseComponent(firebaseService, router, uploadService) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.numSent = 0;
        this.numLate = 0;
        this.numNo = 0;
        this.resultPass = 0;
        this.resultFailed = 0;
        this.resultNo = 0;
        this.statusArr = [];
        this.tmp = "01";
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        var selectedStudent = localStorage.getItem("Student");
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.phaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (selectedPhase == element.key) {
                    _this.p_name = element.phase_name;
                }
            });
        });
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (selectedSubPhase == element.key) {
                    _this.sp_name = element.sub_phase_name;
                }
            });
        });
        this.statusList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.statusArr.push(element);
            });
            for (var i = 0; i < _this.statusArr.length; i++) {
                var sp_key = _this.statusArr[i].key[4] + _this.statusArr[i].key[5] + _this.statusArr[i].key[6] + _this.statusArr[i].key[7];
                var pj_id = Number(_this.statusArr[i].key[8] + _this.statusArr[i].key[9]);
                if (selectedSubPhase == sp_key) {
                    // console.log("tmp " + this.tmp);
                    // console.log("pj id " + pj_id);
                    if (pj_id > _this.tmp) {
                        console.log(_this.statusArr[i].key);
                        if (_this.statusArr[i - 1].status_send == "Sent") {
                            _this.numSent = _this.numSent - 1;
                        }
                        else if (_this.statusArr[i - 1].status_send == "Late") {
                            _this.numLate = _this.numLate - 1;
                        }
                        else {
                            _this.numNo = _this.numNo - 1;
                        }
                        if (_this.statusArr[i - 1].status_result == "Pass") {
                            _this.resultPass = _this.resultPass - 1;
                        }
                        else if (_this.statusArr[i - 1].status_result == "Failed") {
                            _this.resultFailed = _this.resultFailed - 1;
                        }
                        else {
                            _this.resultNo = _this.resultNo - 1;
                        }
                    }
                    _this.tmp = pj_id;
                    if (_this.statusArr[i].status_send == "Sent") {
                        _this.numSent = _this.numSent + 1;
                    }
                    else if (_this.statusArr[i].status_send == "Late") {
                        _this.numLate = _this.numLate + 1;
                    }
                    else {
                        _this.numNo = _this.numNo + 1;
                    }
                    if (_this.statusArr[i].status_result == "Pass") {
                        _this.resultPass = _this.resultPass + 1;
                    }
                    else if (_this.statusArr[i].status_result == "Failed") {
                        _this.resultFailed = _this.resultFailed + 1;
                    }
                    else {
                        _this.resultNo = _this.resultNo + 1;
                    }
                }
            }
            console.log("last");
            _this.data = {
                labels: ["Sent", "Late", "No"],
                datasets: [
                    {
                        data: [_this.numSent, _this.numLate, _this.numNo],
                        backgroundColor: ["#5499C7", "#F1948A", "#5D6D7E"],
                        hoverBackgroundColor: ["#5499C7", "#F1948A", "#5D6D7E"]
                    }
                ]
            };
            _this.data1 = {
                labels: ["Pass", "Failed"],
                datasets: [
                    {
                        data: [_this.resultPass, _this.resultFailed],
                        backgroundColor: ["#F5B041", "#5D6D7E"],
                        hoverBackgroundColor: ["#F5B041", "#5D6D7E"]
                    }
                ]
            };
            _this.percent_sent = _this.numSent * 100 / (_this.numSent + _this.numLate + _this.numNo);
            _this.percent_late = _this.numLate * 100 / (_this.numSent + _this.numLate + _this.numNo);
            _this.percent_no1 = _this.numNo * 100 / (_this.numSent + _this.numLate + _this.numNo);
            _this.percent_pass = _this.resultPass * 100 / (_this.resultPass + _this.resultFailed);
            _this.percent_failed = _this.resultFailed * 100 / (_this.resultPass + _this.resultFailed);
            console.log(_this.percent_sent);
            console.log(_this.percent_late);
            console.log(_this.percent_no1);
            console.log(_this.percent_pass);
            console.log(_this.percent_failed);
        });
        // this.statusList.forEach(element1 => {
        //   element1.forEach((element, index) => {
        //     let sp_key = element.key[4] + element.key[5] + element.key[6] + element.key[7];
        //     let pj_id = element.key[0] + element.key[1] + element.key[2]
        //     if (selectedSubPhase == sp_key) {
        //       console.log(Number(element.key[8]+element.key[9]));
        //       console.log("tmp "+ this.tmp);
        //       console.log("pj id " + pj_id);
        //       this.tmp = pj_id;
        //       if (element.status_send == "Sent") {
        //         this.numSent = this.numSent + 1;
        //         //  console.log(this.numSent);
        //       } else if (element.status_send == "Late") {
        //         this.numLate = this.numLate + 1;
        //       } else {
        //         //  console.log("no");
        //         this.numNo = this.numNo + 1;
        //       }
        //       if (element.status_result == "Pass") {
        //         this.resultPass = this.resultPass + 1;
        //       } else if (element.status_result == "Failed") {
        //         this.resultFailed = this.resultFailed + 1;
        //       } else {
        //         this.resultNo = this.resultNo + 1;
        //       }
        //     }
        //     if (index === element1.length - 1) {
        //       this.data = {
        //         labels: ["Sent", "Late", "No"],
        //         datasets: [
        //           {
        //             data: [this.numSent, this.numLate, this.numNo],
        //             backgroundColor: ["#58D68D", "#F5B041", "#5D6D7E"],
        //             hoverBackgroundColor: ["#58D68D", "#F5B041", "#5D6D7E"]
        //           }
        //         ]
        //       };
        //       this.data1 = {
        //         labels: ["Pass", "Failed"],
        //         datasets: [
        //           {
        //             data: [this.resultPass, this.resultFailed],
        //             backgroundColor: ["#3498DB", "#E74C3C"],
        //             hoverBackgroundColor: ["#3498DB", "#E74C3C"]
        //           }
        //         ]
        //       };
        //     }
        //   });
        //   // console.log(this.numSent);
        //   // console.log(this.numLate);
        //   // console.log(this.numNo);
        //   this.percent_sent = (this.numSent*100)/(this.numSent+this.numLate+this.numNo);
        //   this.percent_late = (this.numLate*100)/(this.numSent+this.numLate+this.numNo);
        //   this.percent_no1 = (this.numNo*100)/(this.numSent+this.numLate+this.numNo);
        //   this.percent_pass = (this.resultPass*100)/(this.resultPass+this.resultFailed+this.resultNo);
        //   this.percent_failed = (this.resultFailed*100)/(this.resultPass+this.resultFailed);
        //   console.log(this.percent_sent);
        //   console.log(this.percent_late);
        //   console.log(this.percent_no1);
        //   console.log(this.percent_pass);
        //   console.log(this.percent_failed);
        // });
    }
    ReportAllPhaseComponent.prototype.ngOnInit = function () { };
    ReportAllPhaseComponent.prototype.setData = function () { };
    ReportAllPhaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-report-all-phase",
            template: __webpack_require__("../../../../../src/app/report-all-phase/report-all-phase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-all-phase/report-all-phase.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], ReportAllPhaseComponent);
    return ReportAllPhaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report-for-student/report-for-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 55px;\r\n}\r\n\r\n.Mymargin {\r\n  margin-bottom: 80px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.mycolor {\r\n  color: #270665;\r\n}\r\n\r\n.sty1 {\r\n  color: #F5B041;\r\n}\r\n\r\n.sty2 {\r\n  color: #5D6D7E;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-for-student/report-for-student.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<body>\n  <app-header-student></app-header-student>\n  <div class=\"ui container ctop\">\n    <div class=\"ui grid\">\n      <div class=\"eight wide column\">\n        <h5>\n          <i class=\"ui user icon mycolor\"></i>{{stu_key}} | {{stu_name}}\n        </h5>\n        <h5>\n          <i class=\"pencil alternate icon mycolor\"></i>โครงงานที่สนใจ :: {{myPJ_name_th}}\n        </h5>\n      </div>\n      <div class=\"eight wide column ui right aligned\">\n        <div>\n          <b class=\"sty1\">สถานะการส่งงาน :</b> ส่ง = 2 | ส่งช้า = 1 | ไม่ส่ง = 0\n        </div>\n        <div>\n          <b class=\"sty2\">สถานะการตรวจงาน :</b> ผ่าน = 2 | ไม่ผ่าน = 1 | ไม่ตรวจ = 0\n        </div>\n      </div>\n    </div>\n    <p-chart type=\"line\" width=\"400\" height=\"400\" [data]=\"data\" (onDataSelect)=\"selectData($event)\" [options]=\"options\"></p-chart>\n  </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/report-for-student/report-for-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportForStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ReportForStudentComponent = /** @class */ (function () {
    function ReportForStudentComponent(firebaseService, router, uploadService) {
        // var storedNames = JSON.parse(localStorage.getItem("status_send_Arr"));
        // console.log(storedNames);
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.sp_name_Arr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.statusArr = [];
        this.status_send_Arr = [];
        this.status_result_Arr = [];
        var key1 = localStorage.getItem("key");
        var selectedPhase = localStorage.getItem("Phase");
        var selectedSubPhase = localStorage.getItem("SubPhase");
        this.selectedAllPhase = selectedPhase + selectedSubPhase;
        var selectedStudent = localStorage.getItem("Student");
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.projectList = this.firebaseService.getData("/project");
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.subphaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == selectedStudent) {
                    _this.studentArr.push(element);
                    _this.stu_name = element.student_name;
                    _this.stu_key = element.key;
                    _this.student_pj_id = element.project_id;
                    console.log("pjid" + _this.student_pj_id);
                }
            });
        });
        this.projectList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (_this.student_pj_id == element.key) {
                    _this.myPJ_name_th = element.name_th;
                }
            });
        });
        var keepGoing = true;
        this.statusList.forEach(function (element1) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keepGoing) return [3 /*break*/, 2];
                        return [4 /*yield*/, element1.forEach(function (element, index) {
                                keepGoing = false;
                                var Phase_id = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                                var SubPhase_id = element.key[6] + element.key[7];
                                var my_pj_id = element.key[0] + element.key[1] + element.key[2];
                                var mynum;
                                if (_this.student_pj_id == my_pj_id) {
                                    _this.subphaseArr.length == 1;
                                    for (var i = 0; i < _this.subphaseArr.length; i++) {
                                        if (Phase_id == _this.subphaseArr[i].key && my_pj_id == _this.student_pj_id) {
                                            // console.log("enter "+ i);
                                            // console.log("tmp "+this.tmp);
                                            if (i == _this.tmp) {
                                                _this.sp_name_Arr.pop();
                                                _this.status_send_Arr.pop();
                                                _this.status_result_Arr.pop();
                                            }
                                            console.log(_this.subphaseArr[i].sub_phase_name);
                                            _this.sp_name_Arr.push(_this.subphaseArr[i].sub_phase_name);
                                            if (element.status_send == "Sent") {
                                                mynum = 2.2;
                                            }
                                            else if (element.status_send == "Late") {
                                                mynum = 1.2;
                                            }
                                            else {
                                                mynum = 0.2;
                                            }
                                            _this.status_send_Arr.push(mynum);
                                            if (element.status_result == "Pass") {
                                                mynum = 2.1;
                                            }
                                            else if (element.status_result == "Failed") {
                                                mynum = 1.1;
                                            }
                                            else {
                                                mynum = 0.1;
                                            }
                                            _this.status_result_Arr.push(mynum);
                                            _this.tmp = i;
                                        }
                                    }
                                }
                                /////////////////////////////////////////////////
                                if (index === element1.length - 1) {
                                    _this.data = {
                                        labels: _this.sp_name_Arr,
                                        datasets: [
                                            {
                                                tension: 0,
                                                label: "สถานะการส่งงาน",
                                                borderColor: "#F5B041",
                                                fill: false,
                                                data: _this.status_send_Arr
                                            },
                                            {
                                                tension: 0,
                                                label: "สถานะการตรวจงาน",
                                                borderColor: "#5D6D7E",
                                                fill: false,
                                                data: _this.status_result_Arr
                                            }
                                        ]
                                    };
                                }
                                /////////////////////////////////////////////////////
                            })];
                    case 1:
                        _a.sent();
                        console.log(this.status_send_Arr);
                        console.log(this.status_result_Arr);
                        console.log(this.sp_name_Arr);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                            suggestedMax: 3,
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            autoSkip: false
                        }
                    }
                ]
            }
        };
    }
    ReportForStudentComponent.prototype.selectData = function (event) {
        console.log(event);
    };
    ReportForStudentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myChart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], ReportForStudentComponent.prototype, "myChart", void 0);
    ReportForStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-for-student',
            template: __webpack_require__("../../../../../src/app/report-for-student/report-for-student.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-for-student/report-for-student.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_upload_file_service__["a" /* UploadFileService */]])
    ], ReportForStudentComponent);
    return ReportForStudentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 50px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 20px;\r\n}\r\n\r\n.mydivider {\r\n  position: absolute;\r\n\r\n  height: 50px;\r\n}\r\n\r\n.w1 {\r\n  width: 200px;\r\n}\r\n\r\n.Mymargin1 {\r\n  margin-top: 170px;\r\n}\r\n\r\n.Mymargin2 {\r\n  margin-top: 170px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<body>\n  <app-header-teacher></app-header-teacher>\n  <div class=\"ui top attached\" align=\"center\">select Phase or Student</div>\n  <div class=\"ui container\">\n    <div class=\"ui two column middle aligned very relaxed stackable grid\">\n      <div class=\"column Mymargin1\">\n        <h4 class=\"ui top attached\" align=\"center\">รายงานแบบภาพรวมของงานย่อย</h4>\n        <div class=\"ui padded segment\">\n          <form class=\"ui form\">\n            <div class=\"field\">\n              เลือกงานหลัก\n              <select name=\"phase\" (click)=\"showme()\" [(ngModel)]=\"selectedPhase\" (ngModelChange)=\"showme($event)\" required>\n                <option *ngFor=\"let data of phaseArr\" [ngValue]=\"data.key\">{{data.phase_name}} </option>\n              </select>\n            </div>\n\n            <div class=\"field\">\n              เลือกงานย่อย\n              <select name=\"subphase\" placeholder=\"Select Phase\" [disabled]=\"!showme\" [(ngModel)]=\"selectedSubPhase\" required>\n                <option *ngFor=\"let data of subphaseArr\" [ngValue]=\"data.key\">{{data.sub_phase_name}} </option>\n              </select>\n            </div>\n\n            <div>\n              <button class=\"btn btn-success\" (click)=\"selectPhase()\">ตกลง</button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"column Mymargin2\">\n        <h4 class=\"ui top attached\" align=\"center\">รายงานแบบภาพรวมของผู้เรียน</h4>\n        <div class=\"ui padded segment\">\n          <form class=\"ui form\">\n            <div class=\"field\">\n              เลือกผู้เรียน\n              <select name=\"student\" [(ngModel)]=\"selectedStudent\" required>\n                <option *ngFor=\"let data of studentArr\" [ngValue]=\"data.key\"> {{data.key}} | {{data.student_name}} </option>\n              </select>\n            </div>\n\n            <div>\n              <button class=\"btn btn-success\" (click)=\"selectStudent()\">ตกลง</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui vertical divider\">\n      Or\n    </div>\n  </div>\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ReportComponent = /** @class */ (function () {
    function ReportComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.statusArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.selectedStudent = "";
        this.phase_id = "";
        this.sub_phase_id = "";
        this.sub_phase_name = "";
        this.date_assign = "";
        this.date_send = "";
        this.sub_phase_detail = "";
        this.status_send_Arr = [];
        this.status_result_Arr = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        var key1 = localStorage.getItem("key");
        this.te_key = key1;
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.teacherList = this.firebaseService.getData("/teacher");
        this.subphaseList.forEach(function (element1) {
            var date_now = __WEBPACK_IMPORTED_MODULE_3_moment__().format('MM/DD/YY');
            element1.forEach(function (element) {
                if (date_now > element.date_send) {
                    console.log("enter1");
                    _this.subphaseArr.push(element);
                    // this.isValid = false;
                }
                else {
                    console.log("enter2");
                    // this.isValid = true;
                }
            });
        });
        this.phaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.phaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.studentArr.push(element);
            });
        });
    };
    ReportComponent.prototype.showme = function () {
        var _this = this;
        this.subphaseList.forEach(function (element1) {
            var date_now = __WEBPACK_IMPORTED_MODULE_3_moment__().format('MM/DD/YY');
            _this.subphaseArr = [];
            element1.forEach(function (element) {
                if (element.phase_id == _this.selectedPhase) {
                    if (date_now > element.date_send) {
                        console.log("enter1");
                        _this.subphaseArr.push(element);
                    }
                    else {
                        console.log("enter2");
                    }
                }
            });
        });
    };
    ReportComponent.prototype.selectPhase = function () {
        console.log(this.selectedPhase);
        console.log(this.selectedSubPhase);
        if (this.selectedSubPhase == "") {
            alert("ต้องเลือกงานย่อยก่อน");
        }
        else {
            localStorage.setItem("Phase", this.selectedPhase);
            localStorage.setItem("SubPhase", this.selectedSubPhase);
            this.router.navigate(["/report-all-phase"]);
        }
    };
    ReportComponent.prototype.selectStudent = function () {
        localStorage.setItem("Student", this.selectedStudent);
        this.router.navigate(["/report-student"]);
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-report",
            template: __webpack_require__("../../../../../src/app/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/report.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_upload_file_service__["a" /* UploadFileService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/send-work/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "../../../../../src/app/send-work/send-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctop {\r\n  margin-top: 60px;\r\n}\r\n\r\n.cleft {\r\n  margin-left: 30px;\r\n}\r\n\r\n.cright {\r\n  margin-right: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/send-work/send-work.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<body>\n  <app-header-student></app-header-student>\n\n  <div class=\"ui container ctop\">\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <app-profile-student></app-profile-student>\n      </div>\n      <div class=\"ten wide column\">\n        <div class=\"ui segment\">\n          <form class=\"ui form\">\n            <div class=\"field\">\n              <label for=\"name\">เลือกงานหลัก</label>\n              <select name=\"phase\" (click)=\"showme()\" [(ngModel)]=\"selectedPhase\" (ngModelChange)=\"showme($event)\" required>\n                <option *ngFor=\"let data of phaseArr\" [ngValue]=\"data.key\">{{data.key}} {{data.phase_name}} </option>\n              </select>\n            </div>\n\n            <div class=\"field\">\n              <label for=\"name\">เลือกงานย่อย</label>\n              <select name=\"subphase\" placeholder=\"Select Phase\" [disabled]=\"!showme\" [(ngModel)]=\"selectedSubPhase\" required>\n                <option *ngFor=\"let data of subphaseArr\" [ngValue]=\"data.sub_phase_id\">{{data.sub_phase_id}} {{data.sub_phase_name}} </option>\n              </select>\n            </div>\n\n            <div class=\"inline field\">\n              <label for=\"name\">เลือกไฟล์งาน</label>\n              <label class=\"btn btn-default\">\n                <input type=\"file\" (change)=\"selectFile($event)\">\n              </label>\n            </div>\n\n            <div class=\"field\">\n              <label for=\"name\">แสดงความคิดเห็น</label>\n              <textarea rows=\"2\" type=\"text\" name=\"comment_student\" [(ngModel)]=\"comment_stu\" placeholder=\"เพิ่มคำอธิบาย\"></textarea>\n            </div>\n\n            <!-- <div *ngIf=\"currentFileUpload\">\n        <div class=\"ui indicating progress\" data-value=\"1\" data-total=\"200\" id=\"example5\">\n          <div class=\"progress bar progress-bar progress-bar-animated\" [ngStyle]=\"{'width':progress?.percentage + '%'}\"></div>\n        </div>\n        Progress: {{currentFileUpload?.name}} | {{progress?.percentage}}% Complete\n      </div> -->\n\n            <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n              <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\n                {{progress.percentage}}%</div>\n            </div>\n\n            <div>\n              <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">ส่งงาน</button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/send-work/send-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__ = __webpack_require__("../../../../../src/app/service/firebase-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fileupload__ = __webpack_require__("../../../../../src/app/send-work/fileupload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


var SendWorkComponent = /** @class */ (function () {
    function SendWorkComponent(firebaseService, router, uploadService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
        this.statusArr = [];
        this.statusArr2 = [];
        this.phaseArr = [];
        this.subphaseArr = [];
        this.studentArr = [];
        this.select_stuArr = [];
        this.tmpArr = [];
        this.selectedPhase = "";
        this.selectedSubPhase = "";
        this.user_file = "";
        this.comment_stu = "";
        this.repass = true;
        this.basePath = "/status";
    }
    SendWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key1 = localStorage.getItem("key");
        this.stu_key = key1;
        this.tmpToNum = "01";
        this.tmpToNum = Number(this.tmpToNum);
        this.statusList = this.firebaseService.getData("/status");
        this.phaseList = this.firebaseService.getData("/phase");
        this.subphaseList = this.firebaseService.getData("/subphase");
        this.studentList = this.firebaseService.getData("/student");
        this.phaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                _this.phaseArr.push(element);
            });
        });
        this.studentList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.key == _this.stu_key) {
                    _this.studentArr.push(element);
                }
            });
        });
    };
    SendWorkComponent.prototype.showme = function (n1) {
        var _this = this;
        if (this.temp != n1) {
            this.subphaseArr = [];
        }
        this.subphaseList.forEach(function (element1) {
            element1.forEach(function (element) {
                if (element.phase_id == n1) {
                    _this.subphaseArr.push(element);
                }
            });
            _this.temp = n1;
        });
    };
    ////////////////////////////////////////////////// ..
    SendWorkComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match("application.*")) {
            this.selectedFiles = event.target.files;
        }
        else {
            // alert("invalid format!");
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'ชนิดของไฟล์งานไม่ถูกต้อง', text: 'กรุณาเปลี่ยนเป็นไฟล์ ".pdf"', });
        }
    };
    SendWorkComponent.prototype.upload = function (fileUpload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var allSelect_1, mynum_1, keepGoing, s_result_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedSubPhase == '' || this.selectedSubPhase == '')) return [3 /*break*/, 1];
                        console.log("enter");
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'error', title: 'กรุณาเลือกงานหลักและงานย่อย' });
                        return [3 /*break*/, 3];
                    case 1:
                        allSelect_1 = this.selectedPhase + this.selectedSubPhase;
                        mynum_1 = 0;
                        keepGoing = true;
                        return [4 /*yield*/, this.statusList.subscribe(function (element1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var file, data, data1, _a, _b, _c, _d, i;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            if (!keepGoing) return [3 /*break*/, 10];
                                            return [4 /*yield*/, element1.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                                    var tmpKey, tmpPhase, t;
                                                    return __generator(this, function (_a) {
                                                        tmpKey = element.key[0] + element.key[1] + element.key[2];
                                                        tmpPhase = element.key[4] + element.key[5] + element.key[6] + element.key[7];
                                                        this.myCount = element.key[8] + element.key[9];
                                                        if (tmpKey == this.studentArr[0].project_id && allSelect_1 == tmpPhase) {
                                                            mynum_1++;
                                                            console.log("jaja1");
                                                            for (t = 0; t < this.subphaseArr.length; t++) {
                                                                if (this.subphaseArr[t].key == allSelect_1) {
                                                                    s_result_1 = element.status_result;
                                                                    console.log("jaja2");
                                                                    if (this.subphaseArr[t].date_send < this.myDateNow) {
                                                                        console.log("enter ieie");
                                                                        this.mystatus_send = "Late";
                                                                    }
                                                                    else {
                                                                        this.mystatus_send = "Sent";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); })];
                                        case 1:
                                            _e.sent();
                                            keepGoing = false;
                                            console.log(s_result_1);
                                            this.myCount = mynum_1;
                                            if (this.myCount == 0) {
                                                this.myCount = 1;
                                            }
                                            if (s_result_1 == "Failed") {
                                                this.myCount = this.myCount + 1;
                                                console.log("f");
                                                console.log(this.myCount);
                                            }
                                            if (this.myCount < 10) {
                                                this.a1 = this.a1 + "0" + this.myCount;
                                            }
                                            else {
                                                this.a1 = this.a1 + this.myCount;
                                            }
                                            console.log(this.a1);
                                            file = this.selectedFiles.item(0);
                                            this.selectedFiles = undefined;
                                            data = {
                                                file_name: this.a1 + ".pdf",
                                                date_send: this.myDateNow,
                                                comment_student: this.comment_stu,
                                                status_send: this.mystatus_send
                                            };
                                            data1 = {
                                                key: this.a1,
                                                file_name: this.a1 + ".pdf",
                                                date_send: this.myDateNow,
                                                comment_student: this.comment_stu,
                                                status_send: this.mystatus_send
                                            };
                                            if (!(this.myCount == 1)) return [3 /*break*/, 5];
                                            console.log("enter1");
                                            this.firebaseService.editData(this.a1, data, this.basePath);
                                            ////////////////////////////////////
                                            _a = this;
                                            return [4 /*yield*/, new __WEBPACK_IMPORTED_MODULE_6__fileupload__["a" /* FileUpload */](file)];
                                        case 2:
                                            ////////////////////////////////////
                                            _a.currentFileUpload = _e.sent();
                                            return [4 /*yield*/, this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.a1)];
                                        case 3:
                                            _e.sent();
                                            _b = this;
                                            return [4 /*yield*/, []];
                                        case 4:
                                            _b.statusArr = _e.sent();
                                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'ส่งงานสำเร็จ', showConfirmButton: false, timer: 1200 });
                                            return [3 /*break*/, 9];
                                        case 5:
                                            console.log("enter2");
                                            this.firebaseService.addData(data1, this.basePath);
                                            ////////////////////////////////////
                                            _c = this;
                                            return [4 /*yield*/, new __WEBPACK_IMPORTED_MODULE_6__fileupload__["a" /* FileUpload */](file)];
                                        case 6:
                                            ////////////////////////////////////
                                            _c.currentFileUpload = _e.sent();
                                            return [4 /*yield*/, this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, this.a1)];
                                        case 7:
                                            _e.sent();
                                            _d = this;
                                            return [4 /*yield*/, []];
                                        case 8:
                                            _d.statusArr = _e.sent();
                                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({ type: 'success', title: 'ส่งงานสำเร็จ', showConfirmButton: false, timer: 1200 });
                                            _e.label = 9;
                                        case 9:
                                            for (i = 1; i <= mynum_1; i++) {
                                                console.log("i=== " + i);
                                            }
                                            _e.label = 10;
                                        case 10: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        this.a1 =
                            this.studentArr[0].project_id +
                                "_" +
                                this.selectedPhase +
                                this.selectedSubPhase;
                        console.log("------>key " + this.a1);
                        this.myDateNow = __WEBPACK_IMPORTED_MODULE_3_moment__(this.myDateNow).format("MM/DD/YY");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SendWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-send-work",
            template: __webpack_require__("../../../../../src/app/send-work/send-work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/send-work/send-work.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_firebase_service_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__service_upload_file_service__["a" /* UploadFileService */]])
    ], SendWorkComponent);
    return SendWorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/firebase-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getData = function (basePath) {
        this.myList = this.db.list(basePath).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return this.myList;
    };
    FirebaseService.prototype.addData = function (data, basePath) {
        var key = data.key;
        delete data.key;
        this.db.list(basePath).set(key, data);
        return this.myList;
    };
    FirebaseService.prototype.delData = function (data, basePath) {
        this.db.list(basePath).remove(data.key);
    };
    FirebaseService.prototype.editData = function (k, data, basePath) {
        this.db.object(basePath + '/' + k).update(data);
        // console.log('aaacsdfdf');
        // console.log(data);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/service/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(db) {
        this.db = db;
    }
    LoginService.prototype.getList = function (basePath) {
        this.myList = this.db.list(basePath).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        return this.myList;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/service/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = /** @class */ (function () {
    function UploadFileService(db) {
        this.db = db;
        this.basePath = '/uploads';
    }
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, progress, k) {
        var _this = this;
        var file_name = k + ".pdf";
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + file_name).put(fileUpload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = k + ".pdf";
            _this.saveFileData(fileUpload, k);
            console.log(k + ".pdf");
        });
    };
    UploadFileService.prototype.saveFileData = function (fileUpload, k) {
        this.db.object('/status' + '/' + k).update(fileUpload);
    };
    ///////////////////////////////// ..
    // getFileUploads(query = {}) {
    //   this.fileUploads = this.db.list(this.basePath, {
    //   query: query
    //   });
    //   return this.fileUploads
    // }
    UploadFileService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.$key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileService.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "../../../../../src/app/upload/details-upload/details-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/details-upload/details-upload.component.html":
/***/ (function(module, exports) {

module.exports = "{{fileUpload.name}}\n<button (click)='deleteFileUpload(fileUpload)'\n\tclass=\"btn btn-danger btn-xs\" style=\"float: right\">Delete</button>\n<img src=\"{{fileUpload.url}}\" alt=\"{{fileUpload.name}}\" style=\"max-width:350px\"/>\n"

/***/ }),

/***/ "../../../../../src/app/upload/details-upload/details-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload__ = __webpack_require__("../../../../../src/app/upload/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsUploadComponent = /** @class */ (function () {
    function DetailsUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    DetailsUploadComponent.prototype.deleteFileUpload = function (fileUpload) {
        this.uploadService.deleteFileUpload(fileUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fileupload__["a" /* FileUpload */])
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details-upload',
            template: __webpack_require__("../../../../../src/app/upload/details-upload/details-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/details-upload/details-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_upload_file_service__["a" /* UploadFileService */]])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "../../../../../src/app/upload/form-upload/form-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/form-upload/form-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\n\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\n\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\n\t\t{{progress.percentage}}%</div>\n</div>\n\n<label class=\"btn btn-default\"> <input type=\"file\"\n\t(change)=\"selectFile($event)\">\n</label>\n\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\n  (click)=\"upload()\">Upload</button>\n\n  <br>\n  <br>\n  <app-list-upload></app-list-upload>\n"

/***/ }),

/***/ "../../../../../src/app/upload/form-upload/form-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        // this.selectedFiles = event.target.files;
        var file = event.target.files.item(0);
        if (file.type.match('application.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    FormUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-upload',
            template: __webpack_require__("../../../../../src/app/upload/form-upload/form-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/form-upload/form-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_upload_file_service__["a" /* UploadFileService */]])
    ], FormUploadComponent);
    return FormUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/list-upload/list-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/list-upload/list-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">List of Files</div>\n\t<div *ngFor=\"let file of fileUploads | async\">\n\t\t<div class=\"panel-body\">\n\t\t\t<app-details-upload [fileUpload]='file'></app-details-upload>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upload/list-upload/list-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_upload_file_service__ = __webpack_require__("../../../../../src/app/service/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListUploadComponent = /** @class */ (function () {
    function ListUploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    ListUploadComponent.prototype.ngOnInit = function () {
        // this.fileUploads = this.uploadService.getFileUploads({limitToLast: 6})
    };
    ListUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-upload',
            template: __webpack_require__("../../../../../src/app/upload/list-upload/list-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/list-upload/list-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_upload_file_service__["a" /* UploadFileService */]])
    ], ListUploadComponent);
    return ListUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  upload works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAcHTdnqtF05h-jEGfoJZRQHoJfn1Ug1Uo",
    authDomain: "tracking-system-ood.firebaseapp.com",
    databaseURL: "https://tracking-system-ood.firebaseio.com",
    projectId: "tracking-system-ood",
    storageBucket: "tracking-system-ood.appspot.com",
    messagingSenderId: "786749592720"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map