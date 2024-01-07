document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('night-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    document.body.className = currentTheme;

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });

    // Toggle About section
    const aboutLink = document.getElementById('about-link');
    const aboutText = document.getElementById('about-text');
    
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        aboutText.style.display = aboutText.style.display === 'none' ? 'block' : 'none';
    });
});
