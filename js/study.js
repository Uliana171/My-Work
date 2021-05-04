// const type = typeof "HGH";
// console.log(type);

// const message = "12345 6789";
// console.log(message.length);

// конкатенація строк
// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName;
// console.log(fullName);


// const room = 716;
// const type = "VIP";
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}.`;
// console.log(welcomeMsg);


// const quantity = 15;
// const orderMsg = `Ви заказали ${quantity} холодильников`;
// console.log(orderMsg);

// нормрлизація
//  1 variant
// const brand = "Samsung";
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// 2 variant
// let brand = "Samsung";
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = prompt ("Давай бренд");
// brand = brand.toLowerCase();
// console.log(brand);


// let brand = "SaMsung";
// console.log(brand[0]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);





// const name = 'Манго';
// console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']


// const massage = 'Манго';
// console.log(massage.split(' '));
// console.log(massage.split(''));
// console.log(massage.split('_'));

// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
//     words = message.split('');
//     words = message.split(' ');
//     words = message.split('_');
 
  
  
//     // Пиши код выше этой строки
//     return words;
// }
'Mango', 'Kiwi', 'Poly', 'Ajax'
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += '-1';
// }
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }


// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }


// перетворити функцію for на функцію for of

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const i of order) {
//     total += i;
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// перетворити функцію for на функцію for of



// виписати парні числа із масиву чисел
// const start = 6;
// const end = 27;

//     // Пиши код ниже этой строки
//     let number = [];
//     for (let i = start; i <= end; i += 1){
    
//         if (i % 5 === 0) {
//             break;
//          number.push(i);
//         }
//     }

// return number;
//     // Пиши код выше этой строки


//     function findNumber(start, end, divisor) {
//   // Пиши код ни же этой строки
//   let findNumber = [];

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       findNumber.push(i);
    
//     }
//   }

//   return findNumber;
//   // Пиши код выше этой строки
// }


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

console.log(([1, 2, 3, 4, 5], 3));