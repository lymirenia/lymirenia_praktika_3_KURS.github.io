
document.addEventListener('DOMContentLoaded', () => {
    // Валидация формы
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            document.getElementById('feedback-form').reset();
        } else {
            alert('Пожалуйста, заполните все обязательные поля.');
        }
    });
    
    // Прокрутка к секциям при нажатии 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});