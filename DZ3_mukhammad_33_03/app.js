// 1. Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’]. Вам нужно посчитать каких тегов сколько штук.  Обязательное условие:
//   - Конечный результат должен вывестись как объект {}, где ключ - это сам тег, а значение - это количество сколько раз этот тег встречается в массиве.

let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
let countTags = {}

for(let tag of tags) {
    countTags[tag] = (countTags[tag] || 0) + 1
}
console.log(countTags)

// 2.  Дан массив [«name», «John», «lastname», «Black», «age», «23»]. Из этого массива нужно получить объект, где ключом будет name, а значение John и так с остальными данными. Все нужно сделать через цикл


var personalData = ["name", "John", "lastname", "Black", "age", 23]
var obj = {}
// let obj = Object.fromEntries(personalData);
for(var i = 0; i < personalData.length; i += 2) {
    var key = personalData[i]
    var value = personalData[i + 1]
    obj[key] = value
}
console.log(obj)


// let doCalc = function(num1, num2) {
//     console.log(num1 + num2)
// }
// doCalc(5, 5)

// let getMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2 )
// getMax( 4, 6)

// function printPrompt(name) {
//     console.log(name)
// }
// printPrompt(prompt())

// 3.Напишите функцию (любой из видов пройденных на уроке) , которая принимает значение параметра и возвращает его тип данных в консоли.
// Пример: getDataType(false) => boolean ,    getDataType('hello world!') => string, getDataType(42) => number



function getDataType(dataType) {
    console.log(typeof dataType)
}

getDataType(42)

