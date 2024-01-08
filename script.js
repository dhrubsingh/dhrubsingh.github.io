document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('night-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    // Apply the current theme
    document.body.className = currentTheme;

    // Toggle dark mode
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });

    // Selectors for text sections
    const aboutText = document.getElementById('about-text');
    const booksText = document.getElementById('books-text');

    // Toggle About section
    const aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Display about text and hide books text
        aboutText.style.display = 'block';
        booksText.style.display = 'none';
    });

    // Toggle Books section
    const booksLink = document.querySelector('header p a[href="#books"]');
    booksLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Display books text and hide about text
        booksText.style.display = 'block';
        aboutText.style.display = 'none';
    });
});
