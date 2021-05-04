


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password ===null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

// 20
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered === 0) {
    message = 'В заказе еще нет товаров';
  } else if (ordered>available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  // Пиши код выше этой строки
  return message;
}

// 21
function isNumberInRange(start, end, number) {
  const isInRange = (start<number&&end>number); // дополни эту строку

  return isInRange;
}



// 22
function checkIfCanAccessContent(subType) {
  const canAccessContent =(subType==='pro'||subType==='vip'); // дополни эту строку

  return canAccessContent;
}

// 23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}


// 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  
  } else  if ( totalSpent>=20000&&totalSpent<50000){
    discount = SILVER_DISCOUNT;

} else if (totalSpent>=5000&&totalSpent<20000) {
    discount = BRONZE_DISCOUNT;

} else if (totalSpent<5000) {
    discount = BASE_DISCOUNT;
  }
  
  // Пиши код выше этой строки
  return discount;
  
}
console.log();




// 25
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

 
  
 message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

  // Пиши код выше этой строки
  return message;
}


// 26
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
message = password ===  ADMIN_PASSWORD ?  'Доступ разрешен' :  'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}

// 27
function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case type = 'starter' : // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case type = 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case type = 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}

// 28
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case password = null:
      message = 'Отменено пользователем!';
      break;
      
    case password = ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
    default: message = 'Доступ запрещен, неверный пароль!';
      
  }
  
  return message;
}


// 29

function getShippingCost(country) {
  let message;
  // Write your code under this line
switch (country) {
  case country = 'China':
  message = 'Shipping to China will cost 100 credits';
    break;
    case country = 'Chile':
  message = 'Shipping to Chile will cost 250 credits';
    break;
    case country = 'Australia':
  message = 'Shipping to Australia will cost 170 credits';
    break;
    case country = 'Jamaica':
  message = 'Shipping to Jamaica will cost 120 credits';
    break;
    default : message = 'Sorry, there is no delivery to your country';    
}
  // Write your code above this line
  return message;
}

// 30
function getNameLength(name) {
  const message = `The length of your name is ${name.length} character(-s)`; 
  // Complete this line

  return message;
  
}

// 31
const courseTopic = 'JavaScript for beginners';
// Write your code under this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Write your code above this line


// 32
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Complete this line

  return substring;
}


// 33

function formatMessage(message, maxLength) {
  let result;
// Write your code under this line

  if (message.length<=maxLength){
   result = message;
   }
  else {
   result = message.slice(0, maxLength) + "...";
    }

  
// Write your code above this line
  return result;
}

// 34

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Complete this line
  return normalizedInput;
}

// 35
function checkForName(fullName, name) {
 const result = fullName.includes (name); // Complete this line
  return result;
}

// 36
function checkForSpam(message) {
  let result;
  // Write your code under this line
  message = message.toLowerCase();
  if (message.includes('sale') || message.includes('spam')){
    result = true;
  } else{
    result = false;
  }
 
  // Write your code above this line
  return result;
}