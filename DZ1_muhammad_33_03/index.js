// Task1

// var bornYear = prompt('Type a year you were born in')
// var currentYear = 2023

// console.log( 'Wohoo, your age is ' + (currentYear - bornYear) )

// Task2

// var country = 'Kyrgyzstan'
// var capital = 'Bishkek'
// var country2 = 'Poland'
// var capital2 = 'Warsaw'
// var country3 = 'Norway'
// var capital3 = 'Oslo'
// var country4 = 'Germany'
// var capital4 = 'Berlin'
// var country5 = 'Qatar'
// var capital5 = 'Doha'
// var countryCode = 996
// var countryCode2 = 48
// var countryCode3 = 47
// var countryCode4 = 49
// var countryCode5 = 974
// var enterCountry = prompt('Please enter your country')
// var enterCapital = prompt('and now your capital')

// if (country === enterCountry && capital === enterCapital) {
//     alert('Bingo, your country code is ' + countryCode)
// } else if (country2 === enterCountry && capital2 === enterCapital) {
//     alert('Bingo, your country code is ' + countryCode2)
// } else if(country3 === enterCountry && capital3 === enterCapital) {
//     alert('Bingo, your country code is ' + countryCode3)
// } else if(country4 === enterCountry && capital4 === enterCapital) {
//     alert('Bingo, your country code is ' + countryCode4)
// } else if(country5 === enterCountry && capital5 === enterCapital) {
//     alert('Bingo, your country code is ' + countryCode5)
// } else {
//     alert('Incorrect data type')
// }

var country = ['Poland', 'Egypt', 'Norway', 'Ukraine', 'Canada', 'Croatia']
var capital = ['Warsaw', 'Cairo', 'Oslo', 'Kyiv', 'Ottawa', 'Zagreb']
var countryCode = [48, 20, 47, 380, 1, 385]
var enterCountry = prompt('Enter your country')
var enterCapital = prompt('Enter your capital')

if (country[0] === enterCountry && capital[0] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[0])
} else if (country[1] === enterCountry && capital[1] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[1])
} else if (country[2] === enterCountry && capital[2] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[2])
} else if (country[3] === enterCountry && capital[3] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[3])
} else if (country[4] === enterCountry && capital[4] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[4])
} else if (country[5] === enterCountry && capital[5] === enterCapital) {
    alert('Bingo, your country code is ' + countryCode[5])
} else {
    alert('Invalid data type')
}