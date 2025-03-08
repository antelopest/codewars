/*
* spinWords
*
* "Hey fellow warriors"  --> "Hey wollef sroirraw"
* "This is a test        --> "This is a test"
* "This is another test" --> "This is rehtona test"
*
* */

const spinWords = str => {
    const reverse = s => s.split('').reverse().join('');
    return str.split(' ').map(e => e.length >= 5 ? reverse(e) : e).join(' ');
}

const tests = [
    ["Hey fellow warriors", "Hey wollef sroirraw"],
    ["This is a test", "This is a test"],
    ["This is another test", "This is rehtona test"]
];

tests.forEach(test => {
    console.log(spinWords(...test));
});