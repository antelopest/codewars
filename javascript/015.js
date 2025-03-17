/*
* Split Strings
*
* 'abc' => ['ab', 'c_']
* 'abcdef' => ['ab','cd','ed']
* */

const solution = (s) => {
    s = s.split('');

    if (s.length % 2 !== 0) {
        s.push('_');
    }

    let arr = [];
    let str = '';

    s.forEach((e, i) => {
        str = str + e;

        if ((i + 1) % 2 === 0) {
            arr.push(str);
            str = '';
        }
    });

    return arr;
}

console.log('abc');
console.log(solution('abc'));