document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollElements = document.querySelectorAll('nav a, .logo');

    smoothScrollElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let targetId;

            if (element.classList.contains('logo')) {
                targetId = '#hero';
            } else {
                targetId = element.getAttribute('href');
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('header');
                const offset = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});