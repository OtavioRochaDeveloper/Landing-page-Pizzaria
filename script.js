let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuContent.classList.toggle('on', show);
  show =!show;
  
})