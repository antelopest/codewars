/*
* Repeat String
* input: 5, "I"
* output: "IIIIII"
* */

const repeatStr = (num, str) => new Array(num).fill(str).join('');
const repeatStr2 = (num, str) => str.repeat(num);

const tests = [
    {
        input: [5, "123"],
        output: "123123123123123"
    },
    {
        input: [5, "Hello"],
        output: "HelloHelloHelloHelloHello"
    }
];

const done = (input, output) => {
    let done = repeatStr(...input) === output;

    console.log(`${input[0]},${input[1]} | ${output} | ${done ? "DONE" : "FAIL"}`);
}

tests.forEach(test => {
    done(test.input, test.output);
})
