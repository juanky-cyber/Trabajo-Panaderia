(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    btn.textContent = '🌙'; 
  } else {
    btn.textContent = '☀️'; 
  }

  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');

    if (isLight) {
      localStorage.setItem('theme', 'light');
      btn.textContent = '🌙';
    } else {
      localStorage.setItem('theme', 'dark');
      btn.textContent = '☀️';
    }
  });
})();
