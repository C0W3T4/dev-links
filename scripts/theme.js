function toggleTheme() {
  const html = document.documentElement;

  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  html.classList.contains('light')
    ? img.setAttribute('src', '../assets/images/avatar-light.svg')
    : img.setAttribute('src', '../assets/images/avatar.svg');
}
