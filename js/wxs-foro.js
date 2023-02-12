let modo = document.getElementById('modo');
let main = document.documentElement.childNodes[2].children[1];
let icon = document.getElementById('icon-modo');

modo.addEventListener('change', () => {
  main.classList.toggle('light');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});