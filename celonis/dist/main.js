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

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/task */ "./src/app/models/task.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





















const _c0 = ["class", "component"];
function AddComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generate sample project task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This task generates the sample project that should be used to finish challenge 2 and 3.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_5_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goTostep(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Count from X to Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This task counts from a given input X to given input Y.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please input the configuration for Count from X to Y task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddComponent_div_6_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goTostep(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_div_6_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.data.x = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.data.y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.data.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getXErrorMessage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.data.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getYErrorMessage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.createForm.valid);
} }
function AddComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do you want to execute the tast now?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goTostep(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Executing now..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cancelTaskExec(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel execution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("We are currently at number ", ctx_r3.wsData.x, " / ", ctx_r3.wsData.y, "");
} }
function AddComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task finished execution successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Counted from ", ctx_r4.savedTask.x, " to ", ctx_r4.savedTask.y, "");
} }
class AddComponent {
    constructor(taskService, router, fb, toasterService) {
        this.taskService = taskService;
        this.router = router;
        this.fb = fb;
        this.toasterService = toasterService;
        this.data = new _models_task__WEBPACK_IMPORTED_MODULE_6__["Task"]();
        this.stepTittle = 'Choose task type (1/4)';
        this.showStep = 1;
        this.wsData = [];
        let socket = new WebSocket("ws://localhost:8080/ws");
        this.ws = stompjs__WEBPACK_IMPORTED_MODULE_5__["over"](socket);
        this.filteredLS();
    }
    wsConnect(id) {
        let socket = new WebSocket("ws://localhost:8080/ws");
        this.ws = stompjs__WEBPACK_IMPORTED_MODULE_5__["over"](socket);
        let that = this;
        this.ws.connect({}, () => {
            this.ws.subscribe("/topic/notify/" + id, (message) => {
                that.wsData = JSON.parse(message.body);
                if (that.wsData.x == that.wsData.y) {
                    that.goTostep(5);
                }
            });
        }, function (error) {
            alert("STOMP error " + error);
        });
    }
    setActiveQueue(queue) {
        var data = JSON.stringify({
            'queue': queue
        });
        this.ws.send("/app/message", {}, data);
    }
    gotToList() {
        this.setActiveQueue("all");
        if (this.showStep == 2) {
            console.log('Lets save to localstorage!');
            if (Number.isInteger(this.data.x) && Number.isInteger(this.data.y) && this.createForm.valid) {
                this.data.status = 'Not configured';
                const randomnumber = Math.floor(Math.random() * (9999)) + 1;
                localStorage.setItem('toBeStored-' + randomnumber, JSON.stringify(this.data));
            }
            localStorage.removeItem('ToBeCreated');
        }
        this.router.navigate(['']);
    }
    filteredLS() {
        if (localStorage.getItem('ToBeCreated')) {
            let toBeCreated = JSON.parse(localStorage.getItem('ToBeCreated'));
            if (Number.isInteger(toBeCreated.x) && Number.isInteger(toBeCreated.y)) {
                console.log('berjoulia mhaf');
                this.goTostep(2);
                this.data.x = toBeCreated.x;
                this.data.y = toBeCreated.y;
                //  localStorage.removeItem('ToBeCreated');
            }
        }
    }
    goTostep(x) {
        switch (x) {
            case 2: {
                this.stepTittle = 'Configure Task (2/4)';
                this.showStep = 2;
                break;
            }
            case 3: {
                this.stepTittle = 'Execute Task (3/4)';
                this.showStep = 3;
                this.data.name = 'Counter';
                this.taskService.createTask(this.data).subscribe((result) => {
                    this.savedTask = result;
                    this.toasterService.success('Counter task successfully added', 'SUCCESS');
                }, (err) => {
                    this.toasterService.error('Counter task cannot be added', 'ERROR');
                });
                break;
            }
            case 4: {
                this.stepTittle = 'Execute Task (3/4)';
                this.showStep = 4;
                let that = this;
                this.taskService.executeTask(this.savedTask.id).subscribe(() => {
                    that.setActiveQueue(this.savedTask.id);
                    that.wsConnect(this.savedTask.id);
                    this.toasterService.success('Counter task successfully executed', 'SUCCESS');
                }, (err) => {
                    this.toasterService.error('Counter task cannot be executed', 'ERROR');
                });
                break;
            }
            case 5: {
                this.stepTittle = 'Summary (4/4)';
                this.showStep = 5;
                break;
            }
        }
    }
    cancelTaskExec() {
        let that = this;
        this.taskService.cancelTask(this.savedTask.id).subscribe(() => {
            this.toasterService.success('Counter task successfully canceled', 'SUCCESS');
            that.setActiveQueue("all");
            this.router.navigate(['']);
        }, (err) => {
            this.toasterService.error('Counter task cannot be canceled', 'ERROR');
        });
    }
    isLessThan(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value >= matchingControl.value) {
                matchingControl.setErrors({ isLessThan: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    ngOnInit() {
        this.createForm = this.fb.group({
            xValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            yValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.isLessThan('xValue', 'yValue')
        });
    }
    getXErrorMessage() {
        return this.createForm.controls.xValue.hasError('required') ? 'Required field!' :
            this.createForm.controls.xValue.hasError('min') ? 'Pick a positif value!' :
                '';
    }
    getYErrorMessage() {
        return this.createForm.controls.yValue.hasError('required') ? 'Required field' :
            this.createForm.controls.yValue.hasError('isLessThan') ? 'Y should be greater than X' :
                '';
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add", 8, "component"]], attrs: _c0, decls: 10, vars: 6, consts: [["color", "primary"], [3, "click"], [4, "ngIf"], [1, "layout", 2, "width", "96%", "margin-left", "2%"], [1, "pointer", 3, "click"], [1, "layout", 2, "width", "40%", "margin-left", "30%"], [1, "mat-dialog-content", 3, "formGroup", "submit"], [1, "form"], ["color", "accent"], ["matInput", "", "type", "number", "placeholder", "Counting from number", "formControlName", "xValue", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Counting to number", "formControlName", "yValue", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "float", "right", 3, "disabled"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_mat_icon_click_1_listener() { return ctx.gotToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddComponent_div_5_Template, 16, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddComponent_div_6_Template, 17, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddComponent_div_7_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddComponent_div_8_Template, 11, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddComponent_div_9_Template, 6, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0Task Wizard - ", ctx.stepTittle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 5);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  border-top-width: 3px;\n  border-top-style: solid;\n  border-top-color:black !important;\n}\n\ndiv[_ngcontent-%COMP%]   .mat-list[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubWF0LWRpdmlkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItdG9wLXdpZHRoOiAzcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLWNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG59XG5kaXYgLm1hdC1saXN0IC5tYXQtZGl2aWRlciBkaXYge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add.component',
                templateUrl: '../add/add.component.html',
                styleUrls: ['../add/add.component.css']
            }]
    }], function () { return [{ type: _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(1), .mat-header-cell[_ngcontent-%COMP%]:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(2), .mat-header-cell[_ngcontent-%COMP%]:nth-child(2){\n  flex: 0 0 30%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(3), .mat-header-cell[_ngcontent-%COMP%]:nth-child(3){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(7), .mat-header-cell[_ngcontent-%COMP%]:nth-child(7){\n  flex: 0 0 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb29sYmFyICovXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIEZpbHRlciAqL1xuLmZvcm0ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBNYXQgdGFibGUgKi9cbi5uby1yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMzAlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCg3KSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDcpe1xuICBmbGV4OiAwIDAgNyU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_task_service__WEBPACK_IMPORTED_MODULE_22__["TaskService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot([..._app_routes__WEBPACK_IMPORTED_MODULE_16__["APP_ROUTES"]], Object.assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_16__["APP_EXTRA_OPTIONS"])),
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
        _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
        _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeleteDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                    _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                    _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                    _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeleteDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot([..._app_routes__WEBPACK_IMPORTED_MODULE_16__["APP_ROUTES"]], Object.assign({}, _app_routes__WEBPACK_IMPORTED_MODULE_16__["APP_EXTRA_OPTIONS"])),
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
                ],
                entryComponents: [],
                providers: [
                    _services_task_service__WEBPACK_IMPORTED_MODULE_22__["TaskService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES, APP_EXTRA_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_EXTRA_OPTIONS", function() { return APP_EXTRA_OPTIONS; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");




const APP_ROUTES = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] }
];
const APP_EXTRA_OPTIONS = {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
};


/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["class", "dialog"];
class DeleteDialogComponent {
    constructor(dialogRef, data, taskService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.taskService = taskService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.taskService.deleteTask(this.data.id);
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"])); };
DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete", 8, "dialog"]], attrs: _c0, decls: 22, vars: 9, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close", "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_18_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_20_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Id: ", ctx.data.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Name: ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Creation date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, ctx.data.creationDate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" X: ", ctx.data.x, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Y: ", ctx.data.y, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Is executed: ", ctx.data.isExecuted, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-delete.dialog',
                templateUrl: '../../dialogs/delete/delete.dialog.html',
                styleUrls: ['../../dialogs/delete/delete.dialog.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");


















const _c0 = ["class", "component"];
function EditComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please input the configuration for Count from X to Y task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function EditComponent_div_5_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.createTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_div_5_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.data.x = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_div_5_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.data.y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.createForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getXErrorMessage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getYErrorMessage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.createForm.valid);
} }
function EditComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do you want to execute the tast now?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.executeTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Executing now..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cancelTaskExec(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel execution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("We are currently at number ", ctx_r2.wsData.x, " / ", ctx_r2.wsData.y, "");
} }
function EditComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task finished execution successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Counted from ", ctx_r3.data.x, " to ", ctx_r3.data.y, "");
} }
class EditComponent {
    constructor(taskService, router, route, fb, toasterService) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.toasterService = toasterService;
        this.data = { name: '', creationDate: '', x: '', y: '', isExecuted: '', status: '' };
        this.taskId = this.route.snapshot.paramMap.get('id');
        this.stepTittle = 'Execute Task (3/4)';
        this.wsData = [];
        let socket = new WebSocket("ws://localhost:8080/ws");
        this.ws = stompjs__WEBPACK_IMPORTED_MODULE_5__["over"](socket);
    }
    ngOnInit() {
        this.taskService.getTask(this.taskId).subscribe((data) => {
            this.data = data;
            this.selectStepFromStatus(data.status);
        });
        this.createForm = this.fb.group({
            xValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            yValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.isLessThan('xValue', 'yValue')
        });
    }
    wsConnect(id) {
        let socket = new WebSocket("ws://localhost:8080/ws");
        this.ws = stompjs__WEBPACK_IMPORTED_MODULE_5__["over"](socket);
        let that = this;
        this.ws.connect({}, () => {
            this.ws.subscribe("/topic/notify/" + id, (message) => {
                that.wsData = JSON.parse(message.body);
                if (that.wsData.x == that.wsData.y) {
                    that.selectStepFromStatus('Finished');
                }
            });
        }, function (error) {
            alert("STOMP error " + error);
        });
    }
    selectStepFromStatus(status) {
        switch (status) {
            case 'Not Configured': {
                this.showStep = 2;
                this.stepTittle = 'Configure Task (2/4)';
                break;
            }
            case 'Not Executed': {
                console.log('test 1');
                this.showStep = 3;
                this.stepTittle = 'Execute Task (3/4)';
                this.data.name = 'Counter';
                break;
            }
            case 'Executing': {
                console.log('test');
                this.showStep = 4;
                this.stepTittle = 'Execute Task (3/4)';
                this.setActiveQueue(this.taskId);
                this.wsConnect(this.taskId);
                break;
            }
            case 'Canceled': { }
            case 'Finished': {
                this.showStep = 5;
                this.stepTittle = 'Summary (4/4)';
                break;
            }
        }
    }
    goToList() {
        this.setActiveQueue("all");
        this.router.navigate(['']);
    }
    setActiveQueue(queue) {
        var data = JSON.stringify({
            'queue': queue
        });
        this.ws.send("/app/message", {}, data);
        console.log('Active queue : ', queue);
    }
    createTask() {
        console.log('I am creating the task', this.data);
        this.taskService.createTask(this.data).subscribe((result) => {
            this.savedTask = result;
            this.toasterService.success('Counter task successfully added', 'SUCCESS');
        }, (err) => {
            this.toasterService.error('Counter task cannot be added', 'ERROR');
        });
    }
    executeTask() {
        console.log('I am executing the task');
        this.taskService.executeTask(this.taskId).subscribe(() => {
            this.toasterService.success('Counter task successfully executed', 'SUCCESS');
            this.selectStepFromStatus('Executing');
        }, (err) => {
            this.toasterService.error('Counter task cannot be executed', 'ERROR');
        });
    }
    cancelTaskExec() {
        let that = this;
        this.taskService.cancelTask(this.taskId).subscribe(() => {
            this.toasterService.success('Counter task successfully canceled', 'SUCCESS');
            that.setActiveQueue("all");
            this.router.navigate(['']);
        }, (err) => {
            this.toasterService.error('Counter task cannot be canceled', 'ERROR');
        });
    }
    isLessThan(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value >= matchingControl.value) {
                matchingControl.setErrors({ isLessThan: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    getXErrorMessage() {
        return this.createForm.controls.xValue.hasError('required') ? 'Required field!' :
            this.createForm.controls.xValue.hasError('min') ? 'Pick a positif value!' :
                '';
    }
    getYErrorMessage() {
        return this.createForm.controls.yValue.hasError('required') ? 'Required field' :
            this.createForm.controls.yValue.hasError('isLessThan') ? 'Y should be greater than X' :
                '';
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit", 8, "component"]], attrs: _c0, decls: 9, vars: 5, consts: [["color", "primary"], [3, "click"], [4, "ngIf"], [1, "layout", 2, "width", "40%", "margin-left", "30%"], [1, "mat-dialog-content", 3, "formGroup", "submit"], [1, "form"], ["color", "accent"], ["matInput", "", "type", "number", "placeholder", "Counting from number", "formControlName", "xValue", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Counting to number", "formControlName", "yValue", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "float", "right", 3, "disabled"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_mat_icon_click_1_listener() { return ctx.goToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditComponent_div_5_Template, 17, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditComponent_div_6_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditComponent_div_7_Template, 11, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditComponent_div_8_Template, 6, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0Task Wizard - ", ctx.stepTittle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep == 5);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit.component',
                templateUrl: '../edit/edit.component.html',
                styleUrls: ['../edit/edit.component.css']
            }]
    }], function () { return [{ type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");





















const _c0 = ["class", "component"];
function ListComponent_mat_list_10_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_list_10_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const d_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelItem(d_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_list_10_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_list_10_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const d_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteItem(d_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_mat_list_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_list_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const d_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startEdit(d_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "his task counts from a given input X to given input Y.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_mat_list_10_button_9_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_mat_list_10_button_10_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Count from ", d_r2.x, " to ", d_r2.y, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r2.status == "Executing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r2.status != "Executing");
} }
function ListComponent_mat_list_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_list_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const d_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.startConfigure(d_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "his task counts from a given input X to given input Y.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_mat_list_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const d_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteItem(d_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Count from ", d_r13.x, " to ", d_r13.y, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r13.status);
} }
class ListComponent {
    constructor(dialog, httpClient, taskService, router, toasterService) {
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.taskService = taskService;
        this.router = router;
        this.toasterService = toasterService;
        this.wsConnect();
        this.filteredLS();
    }
    ngOnInit() {
        this.loadData();
    }
    wsConnect() {
        let socket = new WebSocket("ws://localhost:8080/ws");
        let ws = stompjs__WEBPACK_IMPORTED_MODULE_7__["over"](socket);
        let that = this;
        ws.connect({}, () => {
            ws.subscribe("/topic/notify", (message) => {
                that.wsData = JSON.parse(message.body);
            });
        }, function (error) {
            alert("STOMP error " + error);
        });
    }
    loadData() {
        this.taskService.getTaskList().subscribe(data => {
            this.wsData = data;
        }, (error) => {
            console.log(error.name + ' ' + error.message);
            this.toasterService.error('Please contact your admin. Error while loading Task list', 'ERROR');
        });
    }
    filteredLS() {
        let filteredObj = '[';
        Object.keys(localStorage).filter(function (key) {
            return key.includes('toBeStored');
        }).map(function (key) {
            filteredObj += localStorage.getItem(key) + ',';
        });
        if (filteredObj.length > 2) {
            this.storedObj = JSON.parse(filteredObj.substr(0, filteredObj.length - 1) + ']');
        }
        else {
            this.storedObj = [];
        }
    }
    getKey(row) {
        let filteredObj = Object.keys(localStorage).find(function (key) {
            return ((localStorage.getItem(key).includes(JSON.stringify(row)) && key.includes('toBeStored')));
        });
        console.log(filteredObj);
        return filteredObj;
    }
    addNew() {
        this.router.navigate(['/add']);
    }
    startEdit(row) {
        if (row.status != 'Canceled') {
            this.router.navigate(['/edit/' + row.id]);
        }
        else {
            this.toasterService.info('You cannot edit a canceled task!', 'INFO');
        }
    }
    startConfigure(row) {
        console.log(row);
        this.addNew();
        localStorage.setItem('ToBeCreated', JSON.stringify(row));
        localStorage.removeItem(this.getKey(row));
    }
    deleteItem(row) {
        console.log(row);
        if (row.status != 'Not configured') {
            const dialogRef = this.dialog.open(_dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteDialogComponent"], {
                data: { id: row.id, name: row.name, creationDate: row.creationDate, x: row.x, y: row.y, isExecuted: row.isExecuted }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.taskService.deleteTask(row.id).subscribe(() => {
                    this.toasterService.success('Task deleted successfuly', 'SUCCESS');
                    this.loadData();
                }, () => {
                    this.toasterService.error('Please contact your admin. Error while deleting Task', 'ERROR');
                });
            });
        }
        else {
            localStorage.removeItem(this.getKey(row));
            this.filteredLS();
            this.toasterService.success('Task deleted successfuly from localStorage!', 'SUCCESS');
        }
    }
    cancelItem(row) {
        this.taskService.cancelTask(row.id).subscribe(() => {
            this.toasterService.success('Counter task successfully canceled', 'SUCCESS');
            this.loadData();
        }, (err) => {
            this.toasterService.error('Counter task cannot be canceled', 'ERROR');
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list", 8, "component"]], attrs: _c0, decls: 12, vars: 2, consts: [["color", "primary"], [2, "width", "96%", "margin-left", "2%", "margin-top", "20px"], ["matColumnDef", "actions", 2, "float", "right"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["aria-label", "Example icon-button with a heart icon"], [4, "ngFor", "ngForOf"], [3, "click"], [2, "color", "blue"], [2, "float", "right", "margin-top", "-60px"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-header-cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_6_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_mat_list_10_Template, 12, 5, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_mat_list_11_Template, 12, 3, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storedObj);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(1), .mat-header-cell[_ngcontent-%COMP%]:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(2), .mat-header-cell[_ngcontent-%COMP%]:nth-child(2){\n  flex: 0 0 30%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(3), .mat-header-cell[_ngcontent-%COMP%]:nth-child(3){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(7), .mat-header-cell[_ngcontent-%COMP%]:nth-child(7){\n  flex: 0 0 7%;\n}\n.table-row[_ngcontent-%COMP%] {\n  height: 75px !important;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%] {\n  border-bottom-width: 3px !important;\n  border-color: black !important;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: block;\n  border-top-width: 3px;\n  border-top-style: solid;\n  border-top-color:black !important;\n}\nh5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n   margin-top: -10px;;\n }\n.mat-list[_ngcontent-%COMP%] {\n  cursor: pointer!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUNBQWlDO0FBQ25DO0FBQ0M7R0FDRSxpQkFBaUI7Q0FDbkI7QUFDQTtFQUNDLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogVG9vbGJhciAqL1xuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4vKiBGaWx0ZXIgKi9cbi5mb3JtIHtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgbWF4LWhlaWdodDogNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLyogTWF0IHRhYmxlICovXG4ubm8tcmVzdWx0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgxKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpe1xuICBmbGV4OiAwIDAgNiU7XG59XG5cbi5tYXQtY2VsbDpudGgtY2hpbGQoMiksXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKXtcbiAgZmxleDogMCAwIDMwJTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgzKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpe1xuICBmbGV4OiAwIDAgNiU7XG59XG5cbi5tYXQtY2VsbDpudGgtY2hpbGQoNyksXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KXtcbiAgZmxleDogMCAwIDclO1xufVxuLnRhYmxlLXJvdyB7XG4gIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xufVxubWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcC13aWR0aDogM3B4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjpibGFjayAhaW1wb3J0YW50O1xufVxuIGg1LCBoNiB7XG4gICBtYXJnaW4tdG9wOiAtMTBweDs7XG4gfVxuIC5tYXQtbGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list.component',
                templateUrl: '../list/list.component.html',
                styleUrls: ['../list/list.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
}


/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class TaskService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/counters';
        this.HEADER_NAME = 'Celonis-Auth';
        this.HEADER_VALUE = 'totally_secret';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(this.HEADER_NAME, this.HEADER_VALUE);
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getTask(id) {
        return this.http.get(`${this.baseUrl}/${id}`, { headers: this.headers });
    }
    createTask(task) {
        return this.http.post(`${this.baseUrl}/`, task, { headers: this.headers });
    }
    executeTask(id) {
        return this.http.post(`${this.baseUrl}/${id}/execute`, { headers: this.headers });
    }
    cancelTask(id) {
        return this.http.post(`${this.baseUrl}/${id}/cancel`, { headers: this.headers });
    }
    updateTask(id, value) {
        return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
    }
    deleteTask(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.headers });
    }
    getTaskList() {
        return this.http.get(`${this.baseUrl}/`, { headers: this.headers });
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fakher/Fakher/famed/Final/challenge/celonis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map