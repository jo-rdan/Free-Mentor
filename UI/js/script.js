const menu_icon = document.querySelector('.menu');
const side_menu = document.querySelector('.side-menu');
const close_icon = document.querySelector('#close');

menu_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'block';
});

close_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'none';
});