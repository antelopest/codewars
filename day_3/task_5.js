var tests = [
  ['156+121', 2],
  ['12/1', 2],
  ['12-1', 2],
  ['(12*1)/2', 2],
]; 

function calc(expression) {

 

  // Цель получить аргументы и математические операторы
  // Нам необходимо разделить массив

  // let separator = /\s*([A-Za-z]+|[0-9]+|\S)\s*/g;   // *+-/g]/;
  // let arr = [];
  // expression[0].split(separator).forEach((element, index, ar) => {
  //   if (element === '') ar[index]
  // });

  // return eval(expression[0].toString());
  //

  // let arrArguments = expression[0].split('').reduce((result, element) => {
    
  // });
  // return arrArguments;

  // console.log(arrArguments);
  // console.log(arrOperators);
}

tests.forEach(element => { console.log(calc(element)) });

