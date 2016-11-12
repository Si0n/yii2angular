"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./task');
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.added = new core_1.EventEmitter();
    }
    TaskFormComponent.prototype.add = function (date, info, client, time_spent) {
        if (date && info && client, time_spent) {
            var task = new task_1.Task(date, info, client, time_spent);
            this.added.emit(task);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TaskFormComponent.prototype, "added", void 0);
    TaskFormComponent = __decorate([
        core_1.Component({
            selector: '[task-form]',
            templateUrl: './app/template/task-form.html',
            styleUrls: ['./style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map