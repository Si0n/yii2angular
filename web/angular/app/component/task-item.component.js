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
var task_service_1 = require('./../service/task.service');
var TaskItemComponent = (function () {
    function TaskItemComponent(taskService) {
        this.taskService = taskService;
        this.deleted = new core_1.EventEmitter();
    }
    TaskItemComponent.prototype.delete = function () {
        this.deleted.emit(this.task);
        this.taskService
            .delete(this.task.task_id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskItemComponent.prototype, "task", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TaskItemComponent.prototype, "deleted", void 0);
    TaskItemComponent = __decorate([
        core_1.Component({
            selector: '[task-item]',
            templateUrl: './app/template/task-item.html',
            styleUrls: ['./style.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskItemComponent);
    return TaskItemComponent;
}());
exports.TaskItemComponent = TaskItemComponent;
//# sourceMappingURL=task-item.component.js.map