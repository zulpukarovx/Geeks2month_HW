// 1) Есть массив с числами - [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]. Используя методы, вам надо очистить массив от дубликатов, т.е. в итоге вы должны получить массив с данными, которые не повторяются больше. (использовать new Set() нельзя)

let duplicateArray = [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]

function removeDuplicates(arr) {
    return arr.filter((item,
                       index) => arr.indexOf(item) === index);
}

let uniqueArray = removeDuplicates(duplicateArray)
let sortArray = uniqueArray.sort((n1, n2) => n1 - n2)

console.log(sortArray)


// 2) Напишите функцию, которая принимает массив из названия книг. Функция должна выводить только те книги, в названиях которых есть буква «у» и отдельным списком уже все остальные книги . Используйте метод фильтр. Далее отфильтрованный массив надо мэпнуть (пройтись методом map) и рядом с каждым названием книги добавить текст «книга с буквой «у»». Вывод в консоли должен быть в столбик

let books = ["Посторонний", "В поисках утраченного времени", "Удел человеческий", "Путешествие на край ночи", "Гроздья гнева", "По ком звонит колокол", "Большой Мольн", "Архипелаг ГУЛАГ", "Голубой лотос", "О дивный новый мир", "	Три очерка по теории сексуальности"]


function filterBooks(arr, query) {
    let filteredBooks = arr.filter((book) => book.toLowerCase().includes(query))
    let result = filteredBooks.map((book) => book + `: книга с буквой «${query}»`)
    let restBooks = arr.filter((book) => !book.toLowerCase().includes(query))

    result.forEach((book) => console.log(book))
    restBooks.forEach((book) => console.log(book))
}

filterBooks(books, 'у')

