import { Component } from '@angular/core';
import { Task } from './component/task';
import './rxjs-operators';
@Component({
    selector: 'my-app',
    templateUrl: './app/template/app.component.html',
    styleUrls: ['./style.css'],
})



export class AppComponent {
    title: string;
    tasks: Task[];
    column : {
    date: string,
    task: string,
    client: string,
    time_spent: string,
    over_time: string
    };
    constructor() {
        this.title = 'Task list on Angular 2';
        this.column = {
            'date': 'Дата', 
            'task': 'Задача',
            'client': 'Заказчик',
            'time_spent': 'Потраченное время',
            'over_time': 'Сверхурочное время'
        };
        this.tasks = [];
    }
    onTaskAdded(task: Task) {
        this.tasks.push(task);
    }
}