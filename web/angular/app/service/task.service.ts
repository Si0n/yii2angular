/**
 * Created by sion on 12.11.2016.
 */
import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Task }           from './../component/task';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private tasksUrl = 'http://yii2.home/tasks';  // URL to web API
    constructor (private http: Http) {}
    getTasks(): Promise<Task[]> {
        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json() as Task[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(task: Task): Promise<Task> {
        return this.http
            .post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(task: Task): Promise<Task> {
        const url = `${this.tasksUrl}/${task.task_id}`;
        return this.http
            .put(url, JSON.stringify(task), {headers: this.headers})
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }


    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
