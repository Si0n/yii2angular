export class Task {
    task_id : number;
    date : string;
    info : string;
    client : string;
    time_spent: string;
    over_time: string;
    constructor(date: HTMLInputElement, info: HTMLInputElement, client: HTMLInputElement, time_spent: HTMLInputElement) {
        let time: number = parseFloat(time_spent.toString());
        let date_formatted = new Date(date.toString());
        this.date = date_formatted.getFullYear() + '-' +  date_formatted.getMonth() + '-' +  date_formatted.getDate();
        this.info = info.toString();
        this.client = client.toString();
        let x = (time > 0 ? (time < 8 ? time : 8) : 0);
        this.time_spent = '0:' + x + ':0';
        this.over_time = '0:' + (time > x ? time - x : 0) + ':0';
    }
}