/*
* Repeat String
* input: 5, "I"
* output: "IIIIII"
* */

const repeatStr = (num, str) => new Array(num).fill(str).join('');
const repeatStr2 = (num, str) => str.repeat(num);

console.log(repeatStr(5, "123"));
console.log(repeatStr2(5, "123"));

const tests = [
    {
        input: [5, "123"],
        output: ["123123123123123"]
    },
    {
        input: [5, "Hello"],
        output: ["HelloHelloHelloHelloHello"]
    }
];