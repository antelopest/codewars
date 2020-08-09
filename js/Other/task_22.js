/*
You need to write regex that will validate a password to make sure it meets the following criteria:
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

/*
  (?=.*[0-9]) строка содержит хотя бы одно число
  [0-9a-zA-Z]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов
  (?=.*[!@#$%^&*]) - строка содержит хотя бы один специальный символ
  (?=.*[a-z]) - строка содержит хотя бы один символ в нижнем регистре
  (?=.*[A-Z]) - строка содержит хотя бы один символ в верхнем регистре
  [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов

*/

const validate = (password) => {
  return /^(?=\w*[a-z])(?=\w*\d)(?=\w*[A-Z])[\w]{6,}$/.test(password);
};

console.log(validate('fjd3IR9.;'));
