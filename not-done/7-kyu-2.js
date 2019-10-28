'use strict';
const layers = n => {
  // Search Size Matrix
  const searchSizeMatrix = counter => {
    return (counter ** 2 >= n && n % counter < counter) ?
      (counter) : (searchSizeMatrix(++counter));    
  }

  return searchSizeMatrix(1);


  // Layers
  

  
}

console.log(layers(1));
console.log(layers(5));
console.log(layers(25));
console.log(layers(30));
console.log(layers(50));