webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".task-list{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto auto auto;\n        grid-template-columns: auto auto auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.task{\n    text-align: left;\n    height: 207px;\n    width: 300px;\n    border-radius: 6px;\n    margin: 10px;\n    padding: 15px;\n}\n@media only screen and (max-width: 646px) {\n    .task-list{\n        -ms-grid-columns: auto !important;\n            grid-template-columns: auto !important;\n    }\n}\n@media only screen and (max-width: 1170px) {\n    .task-list{\n        -ms-grid-columns: auto auto;\n            grid-template-columns: auto auto;\n    }\n}\n.center{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.button{\n    outline: none !important;\n    margin: 10px;\n    height: 80px;\n    width: 200px;\n}\n.form{\n    margin: auto;\n    width: 60%;\n}\n.title{\n    font-size: 28px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-radius: 6px;\n    background-color: #fff;\n    width: 100%;\n    margin-bottom:5px;\n}\nspan{\n    width: 84%;\n    display: inline-block;\n    overflow: hidden;\n    height: auto;\n    margin-left: 5px;\n}\n::-webkit-scrollbar-track\n{\n    border-radius: 8px;\n    background-color: #F5F5F5;\n}\n::-webkit-scrollbar\n{\n    width: 10px;\n    background-color: #F5F5F5;\n}\n::-webkit-scrollbar-thumb\n{\n    border-radius: 10px;\n    background-color: lightgray;\n}\n.text{\n    word-wrap: break-word;\n    padding: 5px;\n    font-size: 17px;\n    display: inline-block;\n    border-radius: 6px;\n    background-color: #fff;\n    width: 100%;\n    height: 130px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.close span {\n    outline: none !important;\n    width: 33px;\n    font-size: 30px !important;\n\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <form class=\"form\" #form=\"ngForm\"  novalidate>\n        <div class=\"form-group\">\n            <input type=\"text\" required name=\"title\"  [(ngModel)]=\"title\" #Title=\"ngModel\"  class=\"form-control\" placeholder=\"Title\">\n        </div>\n        <div *ngIf=\"Title.touched && !Title.valid\" class=\"alert alert-danger\">Title is required</div>\n        <div class=\"form-group\">\n            <input type=\"text\" required name=\"content\" [(ngModel)]=\"content\" #Content=\"ngModel\" class=\"form-control\" placeholder=\"Content\">\n        </div>\n        <div *ngIf=\"Content.touched && !Content.valid\" class=\"alert alert-danger\">Content is required</div>\n        <div class=\"center\">\n            <button (click)=\"onSubmit(form)\" [disabled] = \"form.invalid\" class=\"btn btn-success button\">Add</button>\n            <button (click)=\"clear()\" class=\"btn btn-light button\">Clear</button>\n        </div>\n    </form>\n</div>\n<div *ngIf=\"todos.length > 0\"  class=\"task-list\">\n    <div [style.background-color]=\"todo.color\" class=\"task\" *ngFor=\"let todo of todos\">\n        <div class=\"title\">\n            <span> {{todo.title}}</span>\n                <button (click)=\"remove(todo.id)\" class=\"close\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n        </div>\n        <div class=\"text\"> {{todo.content}}</div>\n    </div>        \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function AppComponent(taskService) {
        this.taskService = taskService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todos = this.taskService.getTodos();
        this.title = "",
            this.content = "";
    };
    AppComponent.prototype.onSubmit = function (form) {
        this.todos.push(this.taskService.addTodo(this.title, this.content, this.randomColor()));
        form.form.reset();
    };
    AppComponent.prototype.clear = function () {
        this.taskService.clear();
        this.todos = [];
    };
    AppComponent.prototype.remove = function (id) {
        this.todos = this.taskService.remove(id);
    };
    AppComponent.prototype.randomColor = function () {
        var rgb = [];
        for (var i = 1; i <= 3; i++) {
            var x = Math.floor(Math.random() * (255 - 80) + 80);
            rgb.push(x);
        }
        var color = 'rgb(' + rgb.toString() + ')';
        return color;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__task_service__["a" /* TaskService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_service__ = __webpack_require__("./src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__task_service__["a" /* TaskService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__("./src/app/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService() {
        this.id = 0;
        this.check = false;
        this.todos = JSON.parse(localStorage.getItem('jobs'));
        if (this.todos === null) {
            this.todos = [];
            localStorage.setItem('jobs', JSON.stringify(this.todos));
        }
    }
    TaskService.prototype.addTodo = function (title, content, color) {
        this.newId(this.todos.length);
        this.id++;
        var job = new __WEBPACK_IMPORTED_MODULE_0__task__["a" /* Task */](this.id, title, content, this.check, color);
        this.todos.push(job);
        localStorage.setItem('jobs', JSON.stringify(this.todos));
        return job;
    };
    TaskService.prototype.getTodos = function () {
        var todos = JSON.parse(localStorage.getItem('jobs'));
        return todos;
    };
    TaskService.prototype.clear = function () {
        localStorage.clear();
        this.todos = [];
        localStorage.setItem('jobs', JSON.stringify(this.todos));
        this.id = 0;
    };
    TaskService.prototype.remove = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.newId(id);
        localStorage.setItem('jobs', JSON.stringify(this.todos));
        return this.getTodos();
    };
    TaskService.prototype.newId = function (id) {
        if (this.todos.length > 0) {
            this.id = Math.floor(Math.random() * (300 - id) + id);
        }
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, title, content, check, color) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.check = check;
        this.color = color;
    }
    return Task;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map