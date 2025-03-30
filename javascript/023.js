/*
* formatDuration
* */

const formatDuration = seconds => {
    const message = (years, days, hours, minutes, seconds) => {
        let string = '';

        if (years > 0) {
            if (years === 1) {
                string += `${years} year`;
            } else {
                string += `${years} years`;
            }
        }

        if (days > 0) {
            if (days === 1) {
                string = `${string }`
            }
        }
    }
    
    let second = seconds % 60;

    let secondMessage = '';
    if (second > 0) {
        if (second === 1) {
            secondMessage = `${second} second`;
        } else {
            secondMessage = `${second} seconds`;
        }
    }

    seconds -= second;
    if (seconds <= 0) return `{${secondMessage}`;

    let minutes = seconds / 60;
    let minute = minutes % 60;

    let minuteMessage = '';
    if (minute > 0) {
        if (minute === 1) {
            minuteMessage = `${minute} minute`;
        } else {
            minuteMessage = `${minute} minutes`;
        }
    }

    minutes -= minute;
    if (minutes <= 0) return `${minuteMessage}${secondMessage}`


    //
    // let hours = (number - seconds)

    return `${minuteMessage}${secondMessage}`
    // let secondMessage = `${second > 0 ? second : ''}${second > 0 ? second > 1 ? 'seconds' : 'second' : '' }`;
}

// console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
// console.log(formatDuration(3600));
console.log(formatDuration(3662));