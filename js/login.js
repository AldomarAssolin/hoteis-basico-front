let login = document.querySelector('.form_login')
let register = document.querySelector('.register')

const btn_register = document.querySelector('#btn_register')
const btn_login = document.querySelector('#btn_login')

btn_login.addEventListener('click', function(){
    register.style.display = 'block'
    login.style.display = 'none'
})

btn_register.addEventListener('click', function(){
    register.style.display = 'none'
    login.style.display = 'block'
})

