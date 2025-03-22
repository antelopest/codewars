/*
* order
*
* "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
* "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
* */

const order = (words) => {
    if (words === '') return '';

    words = words.split(' ');

    const array = new Array(words.length).fill('');

    words.forEach((word) => {
        let index = Number(word.match(/\d+/)[0]);
        array[--index] = word;
    });

    return array.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));