const firstNonConsecutive = (arr) =>
  // arr.reduce((f, element, index, arr) => (arr[index + 1] === element + 1) ? (element) : (null), null);
{
  return arr.reduce((f, element, index, arr) => {

    if (arr.length === index + 1) { console.log(element, '!'); return; }
    console.log(element + 1, arr[index + 1]);
    if (element + 1 == arr[index + 1]) {
      return null;
    }
  }, null);
}
/* НЕ ДОДЕЛАЛ */
console.log(firstNonConsecutive([1,2, 3,4,6,7,8]));