document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    // Function to toggle the visibility of the navigation links
    function toggleNavLinks() {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }

    // Add click event listener to the burger menu
    burger.addEventListener('click', toggleNavLinks);

    // Initial check for screen size and set navLinks visibility
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }

    // Call checkScreenSize on page load and when the window is resized
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});