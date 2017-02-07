var monitor = function(start, tag) {
    if (start) {
        var endTime = process.hrtime(start);
        return parseInt((endTime[0] * 1000) + (endTime[1]/1000000));
        console.log(`Duration for ${duration} msec`);
    } else {
        return process.hrtime();
    }
}

module.exports = monitor;