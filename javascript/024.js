/*
* Sum of intervals
* */

const sumIntervals = (intervals) => {
    let numbers = [];

    for (let i = 0; i < intervals.length; i++) {
        let startInterval = intervals[i][0];
        let endInterval = intervals[i][1];

        for (let j = startInterval; j <= endInterval; ++j) {
            if (!numbers.includes(j)) {
                numbers.push(j);
            }
        }
    }

    return numbers.length;
}

console.log(sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
]));

console.log(sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
]));