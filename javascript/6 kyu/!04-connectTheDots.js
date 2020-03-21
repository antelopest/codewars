const connectTheDots = paper => {
   let arr = paper.split('\n');

   // По горизонтале
   for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split('');

    for (let j = 0; j < line.length; j++) {
      if (line[j] !== ' ') {
        line[j] = '*';
      }
    }

    arr[i] = line;
   }

   return arr;
};

let str = 
  "           \n" +
  " a       b \n" +
  " e         \n" +
  "           \n" +      
  " d       c \n" +
  "           \n";


console.log(connectTheDots(str))
