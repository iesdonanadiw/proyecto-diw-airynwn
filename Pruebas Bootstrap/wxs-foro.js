let modo = document.getElementById('modo');
let main = document.documentElement.childNodes[2].children[1];
let icon = document.getElementById('icon-modo');

modo.addEventListener('change', () => {
  main.classList.toggle('light');
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});