// dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', toggle.checked);
    });
});
