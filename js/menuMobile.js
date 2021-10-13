//Menu Mobile
function menuOpen(){
    const btn_mobile = document.querySelector('.btn_mobile')
    const nav_mobile = document.querySelector('#nav_mobile')
    const menu_mobile = document.querySelector('#menu_mobile')
    const sobre_menu = document.querySelector('#sobre_menu')
    const rota_menu = document.querySelector('#rota_menu')
    const quartos_menu = document.querySelector('#quartos_menu')
    
    btn_mobile.addEventListener('click', mobile_open)
    sobre_menu.addEventListener('click', mobile_open)
    rota_menu.addEventListener('click', mobile_open)
    quartos_menu.addEventListener('click', mobile_open)
    menu_mobile.addEventListener('focus', mobile_open)
    
    const windowWidth = window.innerWidth;

    wid = window.screen.width
    function mobile_open(){
        if(nav_mobile.classList == 'd-none'){
            nav_mobile.classList.remove('d-none')
        }else{
            nav_mobile.classList.add('d-none')
        }
    }    
}
menuOpen();