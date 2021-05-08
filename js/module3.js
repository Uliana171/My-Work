// 1
const apartment = {
imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};


// 2
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner :{
	name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
	},
};
  
// 3
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки

//   4
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки


// 5
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки

// 6
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');


// Пиши код ниже этой строки

// 7
price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка',
apartment.location.city = 'Кингстон';


// 8
const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
name,
price,
image,
tags

  // Пиши код выше этой строки
};



// 9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam'
  
  // Пиши код выше этой строки
};



// 10
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ние этой строки
for (const key in apartment) {
  	keys.push(key),
    values.push(apartment[key]);
    
};

// 11
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if(apartment.hasOwnProperty(key)) {
    keys.push(key);
 	values.push(apartment[key]);
  }

  // Пиши код выше этой строки
}



// 12
function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
 for (const key in object){
   if(object.hasOwnProperty(key)) {
     propCount += 1;
     
  }
 }
  // Пиши код выше этой строки
  return propCount;
}



// 13
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
console.log(keys);
for (const key of keys) {
    values.push(apartment[key])
    console.log(values)
}


// 14
// рефракторинг ф-ції завдання 12
function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = Object.keys(object).length;

  return propCount;
  // Пиши код выше этой строки
}


// 15
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// 16
// порахувати суму всіх value (запрлат)
function countTotalSalary(salaries) {
let totalSalary = 0;
  // Пиши код ниже этой строки
	const values = Object.values(salaries); 
    for (const value of values) {
    totalSalary += value;
    }
  // Пиши код выше этой строки
  return totalSalary;
}

// 17
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}



// 18
// Вызов getProductPrice('Радар') возвращает price: 1300
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  
    for (const product of products) {
        if (product.name === productName) {
            return product.price;
        }
    }
  return null;
  // Пиши код выше этой строки
}

// 19
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const values = [];
    for (const product of products) {
        if (product[propName]) {
            values.push(product[propName]);
        }
    } 
  return values;
    // Пиши код выше этой строки
}


// 20
// Вызов calculateTotalPrice('Радар') возвращает 5200
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
for (const product of products) {
    if (product.name === productName) {
          totalPrice += product.price * product.quantity;
    }
}
  return totalPrice;

  // Пиши код выше этой строки
}



// 21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow,  icon: highIcon =  'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  
  hexColors.push(hex);
  rgbColors.push(rgb);
}



// 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const { today: { low: lowToday, high: highToday, icon: todayIcon
    = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
    tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon
        = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
} = forecast;
      
// 26
function calculateMeanTemperature(forecast) {
  const { today: {high: todayHigh, low: todayLow},
        tomorrow: {high: tomorrowHigh, low:tomorrowLow},
        } = forecast;
  
  
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


// 27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// 28
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// 29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings};
console.log(finalSettings.public)

// 30
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
	const newData = { completed: completed, category: category, priority: priority, ...data};
  
  return newData;
  // Пиши код выше этой строки
}


// 31
// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.
function add(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
  // Пиши код выше этой строки
}
console.log(add(32, 6, 13, 19, 8));

// 32
// Пиши код ниже этой строки
function addOverNum(values, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > values){
      total += arg;
    }
  }
  return total;
  // Пиши код выше этой строки
}

// 33
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// должна вернуть массив[1, 2], потому что только они
// есть в массиве первого аргумента.

// Пиши код ниже этой строки
function findMatches(object, ...args) {
  const matches = []; // Не изменяй эту строку
    for (const arg of args) {
        if (object.includes(arg)) {
            matches.push(arg)
        };
    };

  // Пиши код выше этой строки
  return matches;
}

// 34
const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName){
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
     
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  
  // Пиши код выше этой строки
};


// 35
// Дополни метод updateBook(oldName, newName)
// так, чтобы он изменял название книги с oldName
// на newName в свойстве books.Используй indexOf()
// для того, чтобы найти нужный элемент массива, и
// splice() для того чтобы заменить этот элемент.

// bookIndex - вказує початкову позицію в масиві,
//     в якій будуть вставлені нові елементи.
// 1 - він говорить методу сеільки елементів видаляти
// newName - це нові елементи, які вставляються в масив

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
     const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName );
    // Пиши код выше этой строки
  },
};


// 36
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
};

// 37 Получаем все зелья
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  
 getPotions(potions) {
   return atTheOldToad.potions;
  },
  // Пиши код выше этой строки
};

// 38 Добавляем новое зелье
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.splice(4, 0, potionName);
    // Пиши код выше этой строки
  },
};

// 39
// Дополни метод removePotion(potionName) так,
// чтобы он удалял зелье potionName из массива зелий в свойстве potions.
const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1)
    // Пиши код выше этой строки
  },
};

// 40 Обновляем зелье
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
 const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
    // Пиши код выше этой строки
  },
};


// 41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },

  removePotion(potionName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            if (potionName === potions[i].name) {
                potions.splice(i, 1);
            }
        }
    },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion['name'] === oldName) {
      potion['name'] = newName;
      }
    }
  }
  // Пиши код выше этой строки
};



