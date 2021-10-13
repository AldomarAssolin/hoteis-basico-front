
//section banner 
window.onload = () => {

    const hora = new Date().getHours()

    const banner = document.querySelector('section.banner')
    const welcome = document.querySelector('.welcome')
    const banner_call = document.querySelector('.banner_call')

    const bomDia_text = document.createTextNode('Bom dia!')
    const boaTarde_text = document.createTextNode('Boa tarde!')
    const boaNoite_text = document.createTextNode('Boa noite!')

    if(hora <= '12'){
        banner.style.backgroundImage = "url('assets/img-manha.jpg')"
        welcome.appendChild(bomDia_text)
        banner_call.style.background = '#27A5A640'
    }else if (hora <= '18'){
        banner.style.backgroundImage = "url('assets/img-tarde.jpg')"
        welcome.appendChild(boaTarde_text)
        banner_call.style.background = '#378679a6'
    }else{
        banner.style.backgroundImage = "url('assets/img-noite.jpg')"
        welcome.appendChild(boaNoite_text)
        banner_call.style.background = '#1d1d1d80'
    }
}

