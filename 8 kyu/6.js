const firstNonConsecutive = (arr) => {
  console.log(arr.reduce((f, element, index, arr) => {
    if (arr.length == index + 1 && arr[index - 1] + 1 !== element && f == null) return element;
    if (arr.length - 1 == index && element + 1 !== arr[index + 1]) return element;
    if (element !== arr[index + 1] - 1) return arr[index + 1];
    console.log(f);
    if (f == null) return null;
  }, null));
  //   if (arr.length === index + 1) { console.log(element, '!'); return; }
  //   // console.log(element + 1, arr[index + 1]);
  //   if (element + 1 == arr[index + 1]) {
  //     return null;
  //   } else return element;
  // }, null));
}
/* НЕ ДОДЕЛАЛ */
console.log(firstNonConsecutive([1, 2, 3, 4, 5]));


// arr.reduce((f, element, index, arr) => (arr[index + 1] === element + 1) ? (element) : (null), null);