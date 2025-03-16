/*
* Simple Calculator
* */
const calculator = (a, b, sign) => {
    if (typeof a === 'number' && typeof b === 'number' && ['+', '-', '*', '/'].includes(sign)) {
        return eval(`${a}${sign}${b}`);
    }

    return "unknown value"
}

