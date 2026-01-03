(() => {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  // Si en alguna página no existe el menú, salimos sin romper nada
  if (!btn || !nav) return;

  const closeMenu = () => {
    btn.classList.remove('is-open');
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = btn.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  btn.addEventListener('click', toggleMenu);

  // Cierra el menú al clicar un enlace
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Cierra al hacer scroll hacia abajo
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    if (!btn.classList.contains('is-open')) return;

    const current = window.pageYOffset || document.documentElement.scrollTop;
    if (current > lastScrollTop) closeMenu();
    lastScrollTop = current <= 0 ? 0 : current;
  });

  // Cierra si pasas a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
})();

