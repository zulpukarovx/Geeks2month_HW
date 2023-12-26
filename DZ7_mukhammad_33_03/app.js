const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling

        const isVisible = answer.classList.toggle('visible')

        this.textContent = answer.classList.contains('visible') ? 'Скрыть ответ' : 'Показать ответ';
    })
})