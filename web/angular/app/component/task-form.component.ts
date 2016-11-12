import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './task';

@Component({
    selector: '[task-form]',
    templateUrl: './app/template/task-form.html',
    styleUrls: ['./style.css']
})

export class TaskFormComponent {
    @Output() added: EventEmitter<Task>;

    constructor() {
        this.added = new EventEmitter<Task>();
    }

    add(date: HTMLInputElement, info: HTMLInputElement, client: HTMLInputElement, time_spent: HTMLInputElement) {
        if (date && info && client, time_spent) {
            let task = new Task(date, info, client, time_spent);
            this.added.emit(task);
        }
    }
}