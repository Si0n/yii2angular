import {Component, Input, Output, OnInit} from '@angular/core';

import { Task } from './task';
import { TaskService } from './../service/task.service';

@Component({
    selector: '[task-list]',
    templateUrl: './app/template/task-list.html',
    providers: [TaskService]
})

export class TaskListComponent implements OnInit{
    errorMessage: string;
    tasks: Task[];
    constructor(private taskService: TaskService) {}
    ngOnInit() {
        this.getTasks();
    }
    getTasks(): void {
        this.taskService
            .getTasks()
            .then(tasks => {
                this.tasks = tasks
            }).then();
    }


    onTaskDeleted(task : Task) {
        if (task) {
            let index = this.tasks.indexOf(task);
            if (index > -1) {
                this.tasks.splice(index, 1);
            }
        }
    }
}