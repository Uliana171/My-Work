// 1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  
   orderedItems.forEach(function (orderedItems, index) {
  totalPrice += orderedItems;
})

  // Пиши код выше этой строки
  return totalPrice;
}

// 2

// Функция filterArray(numbers, value) принимает массив чисел numbers
// и возвращает новый массив, в котором будут только те элементы
// оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она
// использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  
  numbers.forEach(function (number) {
    console.log('number', number);
    console.log('value', value);
    if(number > value) {filteredNumbers.push(number)}
  })
  // Пиши код выше этой строки
  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 38));

// 3

// Функция getCommonElements(firstArray, secondArray)
// принимает два массива произвольной длины в параметры
// firstArray и secondArray, и возвращает новый массив их
// общих элементов, то есть тех которые есть в обоих массивах.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
firstArray.forEach(function (firstArray) {
    console.log('firstArray', firstArray);
    console.log('secondArray', secondArray);
  
    if (secondArray.includes(firstArray)) {
    commonElements.push(firstArray);
    }
  })
  
  return commonElements;
    // Пиши код выше этой строки
  }


// 4

// Выполни рефакторинг функции calculateTotalPrice() так,
// чтобы она была объявлена как стрелочная.

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}


// 5
// Выполни рефакторинг функции calculateTotalPrice() так,
// чтобы она использовала неявный возврат.

// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки


// 6

// Выполни рефакторинг функции calculateTotalPrice(orderedItems)
// заменив её объявление на стрелочную функцию.Замени коллбек - функцию
// передаваемую в метод forEach() на стрелочную функцию.

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
}

// 7

const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }


// 8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  
// 9
// Функция changeEven(numbers, value) принимает массив чисел numbers
// и обновляет каждый элемент, значение которого это чётное число,
// добавляя к нему значение параметра value.

const changeEven = (numbers, value) => {
    // Пиши код ниже этой строки
   const newArray = [];
    numbers.forEach((number) => {
    if (number % 2 === 0) {
     number = number + value;
    }
    newArray.push(number);
    });
  return newArray;
    // Пиши код выше этой строки
  }

console.log(changeEven([1, 2, 3, 4, 5], 10));         // возвращает новый массив[1, 12, 3, 14, 5].


// 10

// Дополни код так, чтобы в переменной planetsLengths
// получился массив длин названий планет.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);

// 11

// Используя метод map() сделай так,
// чтобы в переменной titles получился массив
// названий книг(свойство title) из всех объектов массива books.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки
const titles = books.map(book =>book.title);


// 12

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
const genres = books.flatMap((book) => book.genres);
  
// 13

// Дополни функцию getUserNames(users) так,
// чтобы она возвращала массив имён пользователей
// (свойство name) из массива объектов в параметре users.

// / Пиши код ниже этой строки
const getUserNames = users => {
  const names = users.map((user) => user.name);
  return names;
};
// Пиши код выше этой строки

// 14

const getUserEmails = users => {
  const emails = users.map((user) => user.email);
  return emails;
};

// 15

// Дополни код так, чтобы в переменной evenNumbers
// получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

// 16

// Дополни код так, чтобы в переменной allGenres
// был массив всех жанров книг(свойство genres)
// из массива books, а в переменной uniqueGenres массив
// уникальных жанров - без повторений.

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
console.log(allGenres);
  const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) ===index);
console.log(uniqueGenres)

// 17

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг
// рейтинг которых(свойство rating) больше либо равно
// значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг
// написанных автором с именем(свойство author) которое
// совпадает со значением в переменной AUTHOR.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
console.log(topRatedBooks);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// 18

// Дополни функцию getUsersWithEyeColor(users, color) так,
// чтобы она возвращала массив пользователей у которых
// цвет глаз(свойство eyeColor) совпадает со значением
// параметра color.


const getUsersWithEyeColor = (users, color) => {
 const eyeColorArray = users.filter((user) =>
  user.eyeColor === color);
  return eyeColorArray;
};

// 19

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так,
// чтобы она возвращала массив пользователей, возраст
// которых(свойство age) попадает в промежуток от minAge
// до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
return users.filter((user) => user.age > minAge & user.age < maxAge);
};

// 20

// Дополни функцию getUsersWithFriend(users, friendName) так,
// чтобы она возвращала массив пользователей у которых есть
// друг с именем в параметре friendName.Массив друзей
// пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
   return users.filter((user) => user.friends.includes(friendName));
};

// 21

// Дополни функцию getFriends(users) так,
// чтобы она возвращала массив друзей всех
// пользователей(свойство friends).У нескольких
// пользователей могут быть одинаковые друзья, сделай
// так чтобы возвращаемый массив не содержал повторений.

const getFriends = (users) => {
const allFriends = users.flatMap((user) => user.friends);
return allFriends.filter((friends, index, array) => array.indexOf(friends) === index);
};


// 22

// Дополни функцию getActiveUsers(users) так,
// чтобы она возвращала массив активных пользователей,
// значение свойства isActive которых true.

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true); 
};


// 23

const getInactiveUsers = (users) => {
   return users.filter((user) => user.isActive === false);
};

// 24

// В переменной bookWithTitle получился объект книги название
// которой(свойство title) совпадает со значением переменной
// BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
// (свойство author) совпадает со значением переменной AUTHOR.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book)=>book.title === BOOK_TITLE);
const bookByAuthor = books.find((book)=>book.author ===AUTHOR);

// 25

// чтобы она возвращала объект пользователя,
// почта которого(свойство email) совпадает со
// значением параметра email.

const getUserWithEmail = (users, email) => {
  return users.find((user)=>user.email === email) 
};


// 26

// В переменной eachElementInFirstIsEven был результат проверки
// всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки
// всех элементов массива firstArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);;

const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);


// 27

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла
// все ли пользователи сейчас активны(свойство isActive) и
// возвращала true или false.

const isEveryUserActive = (users) => {
   return users.every((user) => user.isActive === true)
};


// 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// 29

const isAnyUserActive = users => {
   return users.some((user) => user.isActive === true)
};

// 30

// Игровому сервису необходим функционал подсчёта среднего
// времени проведённого в играх.Дополни код так, чтобы в
// переменной totalPlayTime получилось общее игровое время
// из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number)=>{return previousValue + number;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;


// 31

// Нашему сервису необходимо рассчитать среднее время проведённое
// в одной игре для каждого игрока, и получить общую сумму этих
// времён.Рассчитать время для каждого из игроков, можно разделив
// его время(свойство playtime) на количество игр(свойство
// gamesPlayed).

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, player) =>{
return acc+player.playtime/player.gamesPlayed}, 0);


// 32

// Дополни функцию calculateTotalBalance(users) так, чтобы она
// считала и возвращала сумму всех средств(свойство balance)
// которые хранят пользователи из массива users.

const calculateTotalBalance = users => {
return users.reduce((total, user) => total + user.balance, 0)};

// 33
// Дополни функцию getTotalFriendCount(users) так
// чтобы она считала и возвращала общее количество друзей
// (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = users => {
return users.reduce((total, user)=> total + user.friends.length, 0)};


// 34

// Дополни код так, чтобы в переменной ascendingReleaseDates
// получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной alphabeticalAuthors копия массива
// имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();


// 35

// Онлайн бибилиотеке необходимо отображать книги сортированные
// по дате издания, по её возрастанию или убыванию.Дополни код так,
// чтобы в переменной ascendingReleaseDates получилась отсортированная
// по возрастанию копия массива releaseDates, а в переменной
// descendingReleaseDates копия отсортированная по убыванию.


const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b)=> a-b);

const descendingReleaseDates = [...releaseDates].sort((a, b)=> b-a);


// 36

// Онлайн бибилиотеке необходимо отображать книги отсортированные
// по автору, в алфавитном и обратном алфавитном порядке.Дополни
// код так, чтобы в переменной authorsInAlphabetOrder получилась
// отсортированная по алфавиту копия массива authors, а в переменной
// authorsInReversedOrder копия отсортированная в обратном алфавитном
// порядке.

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));


// 37

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook)=> firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook)=> secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook)=> firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook)=> secondBook.rating - firstBook.rating);



// 38

const sortByAscendingBalance = users => {
  return [...users].sort((firstUser, secondUser)=> firstUser.balance - secondUser.balance); 
};


// 39

// Дополни функцию sortByDescendingFriendCount(users) так,
// чтобы она возвращала массив пользователей отсортированный
// по убыванию количества их друзей(свойство friends).

const sortByDescendingFriendCount = users => {
  return [...users].sort((fewFriends, manyFriends) =>
    manyFriends.friends.length - fewFriends.friends.length)
};


// 40

Дополни функцию sortByName(users) так, чтобы она возвращала массив
пользователей отсортированный по их имени(свойство name)
в алфавитном порядке.

const sortByName = users => {
  return [...users].sort((firstUser, secondUser)=> firstUser.name.localeCompare(secondUser.name))
};


// 41

// Дополни код так, чтобы в переменной names получился массив имён
// авторов в алфавитном порядке, рейтинг книг которых больше значения
// переменной MIN_BOOK_RATING.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
.sort((a, b)=>a.author.localeCompare(b.author))
.filter((book)=>book.rating > MIN_BOOK_RATING)
.map((book)=> book.author);
console.log(names);


// 42

// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей отсортированный
// по возрастанию количества их друзей(свойство friends).

const getNamesSortedByFriendCount = users => {
  return [...users]
  .sort((fewFriends, manyFriends)=> fewFriends.friends.length - manyFriends.friends.length)
  .map((user)=>user.name);
};


// 43

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала
// массив уникальных имён друзей(свойство friends) отсортированный
// по алфавиту.

const getSortedFriends = users => {
  return [...users]
  .flatMap((user)=>user.friends)
  .filter((friends, index, users) => users.indexOf(friends) === index)
  .sort((a, b)=> a.localeCompare(b))
};


// 44

Дополни функцию getTotalBalanceByGender(users, gender) так,
чтобы она возвращала общий баланс пользователей(свойство balance),
пол которых(свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
   return [...users]
  .filter((user)=> user.gender === gender)
  .reduce((acc, user)=> acc + user.balance, 0)
};





