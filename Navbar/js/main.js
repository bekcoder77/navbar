const loginBtn = document.querySelector('.login');
const modalConatainer = document.querySelector('.modal_container');
const btn = document.querySelector("#check")
const bars = document.querySelector('.bars')
const menu = document.querySelector('.right-div')
const menuClose = document.querySelector('.menu-close')
const menuSvg = document.querySelector('.menu-svg')


loginBtn.addEventListener('click',()=>{
    modalConatainer.classList.add("open")
    menu.classList.remove('active')
    menuClose.classList.remove('active')
    menuSvg.style.display= 'flex'

})
check.addEventListener('click', () =>{
    modalConatainer.classList.remove('open')
} )

menuSvg.addEventListener('click', () =>{
  menu.classList.add('active')
menuClose.classList.add('active')
menuSvg.style.display= 'none'
})
menuClose.addEventListener('click', () =>{
    menu.classList.remove('active')
  menuClose.classList.remove('active')
  menuSvg.style.display= 'flex'
  })

