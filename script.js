// مدیریت اسکرول نرم
document.addEventListener('DOMContentLoaded', function() {
    // اسکرول نرم برای لینک‌ها
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // افکت اسکرول برای هدر
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.glass-header');
        if (window.scrollY > 100) {
            header.style
