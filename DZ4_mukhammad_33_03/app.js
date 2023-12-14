var incrementBtn = document.getElementById('increment-btn')
var decrementBtn = document.getElementById('decrement-btn')
var resetBtn = document.getElementById('reset-btn')
var inputCount = document.getElementById('input-count')

var count = 0

inputCount.style.color = 'grey'
inputCount.style.fontWeight = '700'
inputCount.style.fontSize = '50px'

incrementBtn.addEventListener('click', function() {
    count ++
    inputCount.value = count
    if(count > 0) {
        inputCount.style.color = 'green'
    } else if(count == 0) {
        inputCount.style.color = 'grey'
    }
})


decrementBtn.addEventListener('click', function() {
    count --
    inputCount.value = count
    if(count < 0) {
        inputCount.style.color = 'red'
    } else if(count == 0) {
        inputCount.style.color = 'grey'
    }
})

resetBtn.addEventListener('click', function() {
    count = 0
    inputCount.value = count
    inputCount.style.color = 'grey'
})