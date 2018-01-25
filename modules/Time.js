function activTime (time) {
    var days = Math.floor(time / 86400);
    time %= 86400;
    var hours = Math.floor(time  / 3600);
    time %= 3600;
    var minutes = Math.floor(time / 60);
    var seconds = (time % 60).toFixed(0);

    console.log(days,'days',hours,'hours',minutes,'minutes',seconds,'seconds')
}

exports.printTime = activTime;