// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
//   Your task is to return:
//
// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
//   false otherwise.
//   For example, given the following input array:
//
//   var list1 = [
//     { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//     { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//     { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
//   ];
// your function should return true as there is at least one developer from the required 5 geographic zones.
//
//   Notes:
//
// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

function allContinents(list) {

  let arrContinent = [];

  if (list.length >= 5) {
    list.forEach(function (element) {
      if (arrContinent.find(item => item === element.continent)) {
      } else {
        arrContinent.push(element.continent);
      }
    });
    console.log(arrContinent);

    return (arrContinent.length === 5) ? (true) : (false);
  }

  if (list.length < 5) return false;
}


let list1 = [
  {firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript'},
  {firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C'},
  {firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby'},
  {firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby'},
  {firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP'},
];

let list2 = [
  {firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript'}
];

let list3 = [{
  "firstName": "Lukas",
  "lastName": "X.",
  "country": "Croatia",
  "continent": "Europe",
  "age": 35,
  "language": "Python"
}, {
  "firstName": "Mariami",
  "lastName": "G.",
  "country": "Georgia",
  "continent": "Europe",
  "age": 29,
  "language": "Python"
}, {
  "firstName": "Piotr",
  "lastName": "B.",
  "country": "Poland",
  "continent": "Europe",
  "age": 30,
  "language": "JavaScript"
}, {
  "firstName": "Stevenson",
  "lastName": "O.",
  "country": "Haiti",
  "continent": "Americas",
  "age": 22,
  "language": "Ruby"
}, {
  "firstName": "Noel",
  "lastName": "O.",
  "country": "Albania",
  "continent": "Europe",
  "age": 23,
  "language": "Python"
}, {
  "firstName": "Madison",
  "lastName": "U.",
  "country": "United States",
  "continent": "Americas",
  "age": 32,
  "language": "Ruby"
}, {
  "firstName": "Victoria",
  "lastName": "T.",
  "country": "Puerto Rico",
  "continent": "Americas",
  "age": 30,
  "language": "Python"
}, {
  "firstName": "Sebastian",
  "lastName": "W.",
  "country": "Venezuela",
  "continent": "Americas",
  "age": 28,
  "language": "Python"
}, {
  "firstName": "Mehdi",
  "lastName": "H.",
  "country": "Tunisia",
  "continent": "Africa",
  "age": 42,
  "language": "Python"
}, {
  "firstName": "Marija",
  "lastName": "U.",
  "country": "Republic of Macedonia",
  "continent": "Europe",
  "age": 42,
  "language": "JavaScript"
}, {
  "firstName": "Sara",
  "lastName": "Y.",
  "country": "Montenegro",
  "continent": "Europe",
  "age": 89,
  "language": "C"
}, {
  "firstName": "Hanna",
  "lastName": "L.",
  "country": "Hungary",
  "continent": "Europe",
  "age": 29,
  "language": "JavaScript"
}, {
  "firstName": "Anna",
  "lastName": "R.",
  "country": "Liechtenstein",
  "continent": "Europe",
  "age": 32,
  "language": "JavaScript"
}, {
  "firstName": "Sofia",
  "lastName": "P.",
  "country": "Italy",
  "continent": "Europe",
  "age": 41,
  "language": "Clojure"
}, {
  "firstName": "Gabriel",
  "lastName": "X.",
  "country": "Monaco",
  "continent": "Europe",
  "age": 29,
  "language": "PHP"
}, {
  "firstName": "Ramon",
  "lastName": "R.",
  "country": "Paraguay",
  "continent": "Americas",
  "age": 29,
  "language": "Ruby"
}, {
  "firstName": "Maria",
  "lastName": "I.",
  "country": "Greece",
  "continent": "Europe",
  "age": 32,
  "language": "C"
}, {
  "firstName": "Mamadou",
  "lastName": "E.",
  "country": "Mali",
  "continent": "Africa",
  "age": 22,
  "language": "Python"
}, {
  "firstName": "Seoyeon",
  "lastName": "J.",
  "country": "South Korea",
  "continent": "Asia",
  "age": 29,
  "language": "Ruby"
}, {
  "firstName": "Althea",
  "lastName": "I.",
  "country": "Philippines",
  "continent": "Asia",
  "age": 31,
  "language": "Python"
}, {
  "firstName": "Maria",
  "lastName": "Y.",
  "country": "Cyprus",
  "continent": "Europe",
  "age": 30,
  "language": "Java"
}, {
  "firstName": "Krishna",
  "lastName": "G.",
  "country": "Nepal",
  "continent": "Asia",
  "age": 22,
  "language": "Java"
}, {
  "firstName": "Fatemeh",
  "lastName": "Z.",
  "country": "Iran",
  "continent": "Asia",
  "age": 29,
  "language": "Java"
}, {
  "firstName": "Emily",
  "lastName": "N.",
  "country": "Ireland",
  "continent": "Europe",
  "age": 38,
  "language": "Ruby"
}, {
  "firstName": "George",
  "lastName": "B.",
  "country": "England",
  "continent": "Europe",
  "age": 21,
  "language": "C"
}, {
  "firstName": "Amar",
  "lastName": "V.",
  "country": "Bosnia and Herzegovina",
  "continent": "Europe",
  "age": 32,
  "language": "Ruby"
}, {
  "firstName": "Chloe",
  "lastName": "K.",
  "country": "Guernsey",
  "continent": "Europe",
  "age": 28,
  "language": "Ruby"
}, {
  "firstName": "Joao",
  "lastName": "D.",
  "country": "Portugal",
  "continent": "Europe",
  "age": 35,
  "language": "JavaScript"
}, {
  "firstName": "Manuel",
  "lastName": "C.",
  "country": "Equatorial Guinea",
  "continent": "Africa",
  "age": 22,
  "language": "Ruby"
}, {
  "firstName": "Daniel",
  "lastName": "J.",
  "country": "Aruba",
  "continent": "Americas",
  "age": 42,
  "language": "JavaScript"
}];

let list4 = [{
  "firstName": "Mehdi",
  "lastName": "H.",
  "country": "Tunisia",
  "continent": "Africa",
  "age": 42,
  "language": "Python"
}, {
  "firstName": "Yusuf",
  "lastName": "N.",
  "country": "Turkey",
  "continent": "Europe",
  "age": 22,
  "language": "Python"
}];

console.log(allContinents(list1));
console.log(allContinents(list2));
console.log(allContinents(list3));
console.log(allContinents(list4));
