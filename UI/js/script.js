const menu_icon = document.querySelector('.menu');
const side_menu = document.querySelector('.side-menu');
const close_icon = document.querySelector('#close');
// const action = document.querySelector('.actions');
// const close_modal = document.querySelector('.close');

menu_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'block';
});

close_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'none';
});

// action.addEventListener('click', openModal);
// close_modal.addEventListener('click', closeModal)

const closeModal = () => {
  document.querySelector('.pop-up').style.display = "none"
}
const openModal = () => {
  document.querySelector('.pop-up').style.display = "block"
}

