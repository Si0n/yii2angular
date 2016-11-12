import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { TaskService } from './../service/task.service';

@Component({
    selector: '[task-item]',
    templateUrl: './app/template/task-item.html',
    styleUrls: ['./style.css']
})

export class TaskItemComponent {
    @Input() task : Task;    
    @Output() deleted: EventEmitter<Task>;
    constructor(private taskService: TaskService) {
        this.deleted = new EventEmitter<Task>();
    }
    delete() {
        this.deleted.emit(this.task);
        this.taskService
            .delete(this.task.task_id);
    }
}