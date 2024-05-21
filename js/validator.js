document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form_section_login');
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="date"], input[type="password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            form.submit();
        } else {
            alert('Пожалуйста, заполните все обязательные поля формы.');
        }
    });
});
