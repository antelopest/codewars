/*
* Count number of zeros from 1 to N
*
*  10  -->   1 // 10
* 20  -->   2  // 10, 20
* 100  -->  11 // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
* 200  -->  31
*  */
const countZeros = n => {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let zeros = Array.from(String(i).matchAll(/0/g)).length;
        count += zeros;
    }

    return count;
}

console.log(countZeros(10));
console.log(countZeros(20));
console.log(countZeros(100));
console.log(countZeros(200));