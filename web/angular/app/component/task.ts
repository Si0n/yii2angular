export class Task {
    task_id : number;
    date : Date;
    info : string;
    client : string;
    time_spent: number;
    over_time: number;
    constructor(date: HTMLInputElement, info: HTMLInputElement, client: HTMLInputElement, time_spent: HTMLInputElement) {
        let time: number = parseFloat(time_spent.toString());
        this.date = new Date(date.toString());
        this.info = info.toString();
        this.client = client.toString();
        this.time_spent = time > 0 ? (time < 8 ? time : 8) : 0;
        this.over_time = time > this.time_spent ? time - this.time_spent : 0;
    }
}