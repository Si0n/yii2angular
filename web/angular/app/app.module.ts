import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';


import { TaskItemComponent } from './component/task-item.component';
import { TaskListComponent } from './component/task-list.component';
import { TaskFormComponent } from './component/task-form.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, HttpModule, JsonpModule ],
    declarations : [ AppComponent, TaskItemComponent, TaskListComponent, TaskFormComponent ],
    bootstrap: [ AppComponent ]

})

export class AppModule {
    
 }