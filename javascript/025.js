/*
* moveZeros
*
* moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
* */
const moveZeros = (array) => {
    let length = array.length;

    array = array.filter(e => e !== 0);

    array = array.concat(Array(length - array.length).fill(0));

    return array;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));