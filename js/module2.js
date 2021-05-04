// 1
function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

// 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
 

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }

  return 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
}

// 3
function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  if (ordered === 0) {
  return 'В заказе еще нет товаров';
  }
  if (ordered > available) {
  return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
  return 'Заказ оформлен, с вами свяжется менеджер';
  
  // Пиши код выше этой строки
}

// 4
// Пиши код ниже этой строки
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


// 5
// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// 6
// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1] = 'персик';
fruits[3] = 'банан';

// 7
// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const fruitsArrayLength = fruits.length;

// 8
// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length -1;
fruits[lastElementIndex];
const lastElement = fruits[lastElementIndex];

// 9
function getExtremeElements(array) {
    // Пиши код ниже этой строки
return[array[0], array[array.length - 1]];


    // Пиши код выше этой строки
}

// 10
function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = message.split(delimeter);
  
  
  // Пиши код выше этой строки
  return words;
}


//  11
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  const messagePrice = message.split(' ').length * pricePerWord;
  
 return messagePrice;
  

  // Пиши код выше этой строки
}


// 12
function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 string = array.join(delimeter);
 
 
  // Пиши код выше этой строки
  return string;
}


// 13
function slugify(title) {
  // Пиши код ниже этой строки
 const slug = title.toLowerCase().split(' ').join('-');
return slug
  // Пиши код выше этой строки
}

// 14
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length -1);
const lastThreeEls = fruits.slice(fruits.length - 3);


// 15
const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку


// 16
function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
const makeArray = firstArray.concat(secondArray).slice(0, maxLength);

    return makeArray;
    // Пиши код выше этой строки
}
  

// 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}


// 18
function calculateTotal(number) {
  // Пиши код ниже этой строки

  let total = 0;
for (let i = 0; i <= number; i += 1){
total+=i;
}
  return total;
  // Пиши код выше этой строки
}

// 19
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

// 20
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for (let i = 0; i < order.length; i += 1){
total+=order[i];
}
  // Пиши код выше этой строки
  return total;
}

// 21
function findLongestWord(string) {
  // Пиши код ниже этой строки
  let total = [];
 string = string.split(' ');
  for (const word of string) {
    if (word.length >= total.length) {
      total = word;
    }
  }
  return total;
  

  // Пиши код выше этой строки
}


// 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
for (let number = min; number <= max; number += 1) {
        if (number >= min || number <= min) {
            numbers.push(number);
        }
    }
  // Пиши код выше этой строки
  return numbers;
}

// 23
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const newArray = [];
  for (const number of numbers){
  if (number > value){
   newArray.push(number);
  }
  }
  
return newArray;
  // Пиши код выше этой строки
}

// 24
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}


// 25
function getCommonElements(array1, array2){
  // Пиши код ниже этой строки
    const uniqueElements = [];
    for (let el of array1){
        if (array2.includes(el)){
            uniqueElements.push(el);
        } 
    }
    return uniqueElements;
  // Пиши код выше этой строки
}


// 26
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const i of order) {
    total += i;
  }

  // Пиши код выше этой строки
  return total;
}
 

// 27
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}


// 28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
// const a = 3 % 3; a=0
// const b = 4 % 3; b = 1
// const c = 11 % 8; c=3
// const d = 12 % 7; d=5
// const e = 8 % 6; e=2


// 29
function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки

let evenNumbers = [];
  for (let i = start; i <= end; i += 1){
    
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

return evenNumbers;
    
  // Пиши код выше этой строки
}
  
// 30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {  
  if (i % 5 === 0) {
  
    number = i;
    break;
  }
}


// 31
function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  
  // Пиши код выше этой строки
}


// 32
function includes(array, value) {
  // Пиши код ниже этой строки
for (const el of array) {
        if (el === value) {
        return true
    }
    }
    return false;

  
  // Пиши код выше этой строки
}