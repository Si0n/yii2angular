"use strict";
var Task = (function () {
    function Task(date, info, client, time_spent) {
        var time = parseFloat(time_spent.toString());
        var date_formatted = new Date(date.toString());
        this.date = date_formatted.getFullYear() + '-' + date_formatted.getMonth() + '-' + date_formatted.getDate();
        this.info = info.toString();
        this.client = client.toString();
        var x = (time > 0 ? (time < 8 ? time : 8) : 0);
        this.time_spent = '0:' + x + ':0';
        this.over_time = '0:' + (time > x ? time - x : 0) + ':0';
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map