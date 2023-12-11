// task1

// var starbucks = {
//     name: 'Starbucks Coffee Company',
//     foundedYear: 1971,
//     location: {
//         country: 'USA',
//         state: ['Seattle', 'Washington']
//     },
//     menu: ['Coffee', 'Tea', 'Pastries', 'Snacks', 'Cold drinks'],
//     founders: ['Jerry Baldwin', 'Zev Siegl', 'Gordon Bowker'],
//     number0fLocations: 37711,
//     areaServed: '84 Countries',
//     revenueByLastYear: '32.25 USD Billion',
//     currentCeo: 'Laxman Narasimhan',
// }
// console.log(starbucks)

// task2

// for (var i = 0; i <= 100; i++) {
//     if (i === 0) {
//         console.log(i)
//     } else if (i % 3 === 0) {
//         console.log('fizz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz')
//     } else {
//         console.log(i)
//     }
// }


//task3

var month = prompt('Введите название месяц')

switch(month){
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        console.log("Зима")
        break
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log("Весна")
        break
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log("Лето")
        break
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log("Осень")
        break
    default:
        console.warn('Что-то пошло не так. Пожалуйста, убедитесь что ввели месяц корректно')
}

// task4

// var myArray = [[[[[[[[[[[2]]]]]]]]]]];
// var array = myArray[0][0][0][0][0][0][0][0][0][0][0]
//
// console.log(array)