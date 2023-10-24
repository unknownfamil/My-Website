const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog  button');

showButton.addEventListener('click', () => {
  dialog.showModal();
});
closeButton.addEventListener('click', () => {
  dialog.close();
});

const burgerBtn = document.querySelector('.header__nav-menu');
const menu = document.querySelector('.header__nav-ul');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu-active');
});

let slid = document.querySelector(".homePage__sliderPosition");
let prev = document.querySelector(".homePage__prev");
let next = document.querySelector(".homePage__next");
let position = 0;

prev.addEventListener("click", () => {
  position += -100;
  if (position < 0) {
    position = 200;
  }
  slid.style.left = -position + "%";
});
next.addEventListener("click", () => {
  position += 100;
  if (position > 200) {
    position = 0;
  }
  slid.style.left = -position + "%";
});

const followDiv = document.querySelector('.follow-div');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // setTimeout(()=>{
  //   followDiv.style.left =  x + 'px';
  //   followDiv.style.top = y + 'px';
  // }, 100);
    followDiv.style.left =  x + 'px';
    followDiv.style.top = y + 'px';
});

const tab = document.querySelectorAll('.firstPage__tab-btn');
const content = document.querySelectorAll('.firstPage__content');

tab.forEach((el, index) => {
  el.addEventListener('click', function() {
    tab.forEach(element => {
      element.classList.remove('firstPage__active-tab');
    });
    el.classList.add('firstPage__active-tab');
    content.forEach((cont) =>{
      cont.classList.remove('firstPage__active-content');
    });
    content[index].classList.add('firstPage__active-content');
  });
});

const await = document.querySelector('.await');
setTimeout(()=>{
  await.style.display = 'none';
}, 3000);







