"use strict";
var Task = (function () {
    function Task(date, info, client, time_spent) {
        var time = parseFloat(time_spent.toString());
        this.date = new Date(date.toString());
        this.info = info.toString();
        this.client = client.toString();
        this.time_spent = time > 0 ? (time < 8 ? time : 8) : 0;
        this.over_time = time > this.time_spent ? time - this.time_spent : 0;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map