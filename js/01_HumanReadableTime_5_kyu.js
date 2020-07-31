/*
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
*/

const fnHumanReadableTime = s => {
    const toSecondDigit = (n) => {
        if (n === 0) return '00';
        if (String(n).length === 2) return n;
        return '0' + n;
    }

    const getHours = s => (s - s % 3600) / 3600;

    const getMinutes = s => {
        let hours = (s - s % 3600);
        let seconds = (s - hours) % 60;
        let minutes = (s - hours - seconds) / 60;
        return minutes;
    }

    const getSeconds = s => {
        let hours = (s - s % 3600);
        let seconds = (s - hours) % 60;
        return seconds;
    }

    let hours = toSecondDigit(getHours(s));
    let minutes = toSecondDigit(getMinutes(s));
    let seconds = toSecondDigit(getSeconds(s));

    return `${hours}:${minutes}:${seconds}`;
}

console.log(
    fnHumanReadableTime(359999),
    fnHumanReadableTime(0),
    fnHumanReadableTime(5),
    fnHumanReadableTime(60),
    fnHumanReadableTime(86399)
);
