const ToggleMode = () => {
    const element = document.documentElement;
    element.classList.toggle('dark');
    const isDark = element.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  (document.getElementById('mode')).addEventListener('click', ToggleMode);
  document.addEventListener(
  'click',
  function (e) {
    if (e.target.closest('#navtoggle')) {
      document.body.classList.toggle('nav-open');
    }
    if (e.target.closest('nav a')) {
      document.body.classList.remove('nav-open');
    }
  },
  false
);