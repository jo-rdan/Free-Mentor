const menu_icon = document.querySelector('.menu');
const side_menu = document.querySelector('.side-menu');
const close_icon = document.querySelector('#close');
const close = document.querySelector('.popup .close');
const flag = document.querySelector('.basic-details .mentor-details i');

const fetch = () => {
  const get = document.querySelector('#get').value;
  document.querySelector('#put').value = get;
}

const openFlag = () =>{
  document.querySelector('.popup').style.display = "block"
}
const closeFlag = () =>{
  document.querySelector('.popup').style.display = "none"
}

menu_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'block';
});

close_icon.addEventListener('click', (e) => {
  side_menu.style.display = 'none';
});

const closeModal = () => {
  document.querySelector('.pop-up').style.display = "none"
}
const openModal = () => {
  document.querySelector('.pop-up').style.display = "block"
}



