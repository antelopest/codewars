/*
* unscramble
* */

const wordList = [
    'a', 'ability', 'able', 'about',
    'above', 'absence', 'absolutely', 'academic',
    'accept', 'access', 'accident', 'accompany',
    'according', 'account', 'achieve', 'achievement',
    'acid', 'acquire', 'across', 'act',
    'action', 'active', 'activity', 'actual',
    'actually', 'add', 'addition', 'additional',
    'address', 'administration', 'admit', 'adopt',
    'adult', 'advance', 'advantage', 'advice',
    'advise', 'affair', 'affect', 'afford',
    'afraid', 'after', 'afternoon', 'afterwards',
    'again', 'against', 'age', 'agency',
    'agent', 'ago', 'agree', 'agreement',
    'ahead', 'aid', 'aim', 'air', 'ria',
    'aircraft', 'all', 'allow', 'almost',
    'alone', 'along', 'already', 'alright',
    'also', 'alternative', 'although', 'always',
    'among', 'amongst', 'amount', 'an',
    'analysis', 'ancient', 'and', 'animal',
    'announce', 'annual', 'another', 'answer',
    'any', 'anybody', 'anyone', 'anything',
    'anyway', 'apart', 'apparent', 'apparently',
    'appeal', 'appear', 'appearance', 'application',
    'apply', 'appoint', 'appointment', 'approach',
    'appropriate', 'approve', 'area', 'argue', 'aera'
];

const unscramble = (scramble) => {
    scramble = scramble.split('').sort().join('');
    return wordList.filter(w => w.split('').sort().join('') === scramble);
}


console.log(unscramble('air'));
console.log(unscramble1('air'));