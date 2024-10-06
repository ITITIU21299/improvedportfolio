document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'light');
      themeToggle.textContent = 'Toggle Dark Mode';
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      themeToggle.textContent = 'Toggle Light Mode';
    }
  });
});