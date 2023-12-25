document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isAnswerVisible = answer.style.display !== 'none';

            answer.style.display = isAnswerVisible ? 'none' : 'block';
            this.textContent = isAnswerVisible ? 'Показать ответ' : 'Скрыть ответ';
        });
    });
});