var client = require('../helpers/es');

var monitor = function(start, tag) {
    if (start) {
        var endTime = process.hrtime(start);
        return parseInt((endTime[0] * 1000) + (endTime[1]/1000000));
        if (process.env.NODE_ENV == 'development')
            console.log(`Duration for ${tag}: ${duration} msec`);
        client.create({
            index: 'monitoring',
            type: 'todo-api',
            id: new Date().getTime(),
            body: {'duration': duration, 'tag': tag}
        })
    } else {
        return process.hrtime();
    }
}

module.exports = monitor;