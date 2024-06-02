const menuToogleBtn=document.getElementById('btn__menu-toggle');
const dropDownMenu = document.querySelector('.header__dropdown-menu')

menuToogleBtn.onclick =function (){
    dropDownMenu.classList.toggle('header__dropdown-menu--active');
    console.log('menu btn clicked');
}