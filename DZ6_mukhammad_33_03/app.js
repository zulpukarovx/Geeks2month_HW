// Реализуйте проект "Расчет бюджета". Вы должны сверстать инпуты и кнопку. В один инпут пользователь вводит какую-то сумму (условно 30000), в другой инпут вводит месяц. В зависимости какой месяц выбрал пользователь, введенная сумма делится на 30 либо на 31 (февраль 28). В интерфейсе это должно отображаться так: День 1 - 1000с и т.д (стили на ваше усмотрение)
// Вместо второго инпута можете сделать выпадающий список. Представьте, что список месяцев вам отправляет бэкенд, вам надо пройтись методом по ним и вывести их

const calculateBtn = document.getElementById('calculate-btn')

calculateBtn.addEventListener('click', function() {
    const amount = document.getElementById('amount-input')
    const month = document.getElementById('month').value
    const ulEl = document.getElementById('ul-el')

    const daysInMonth = {
        "пустой": 0,
        "январь": 31,
        "февраль": 28,
        "март": 31,
        "апрель": 30,
        "май": 31,
        "июнь": 30,
        "июль": 31,
        "август": 30,
        "сентябрь": 31,
        "октябрь": 30,
        "ноябрь": 31,
        "декабрь": 30,
    }

    if(!amount.value || !daysInMonth[month]) {
        return alert('Некорректный ввод. Убедитесь что ввели корректную сумму и выбрали месяц.')
    }

    const dailyBudget = amount.value / daysInMonth[month]

    let resultList = ""
    for(let day = 1; day <= daysInMonth[month]; day++) {
        resultList += `
        <li>День ${day}: ${dailyBudget.toFixed(2)}c</li>
        `
    }
    ulEl.innerHTML = resultList
    amount.value = ""
})