function slideSolteiro(){
    let slide = document.querySelector('#imgSolt')
    images = new Array ("url('../assets/quarto-solteiro1.jpg')", "url('../assets/quarto-solteiro2.jpg')", "url('../assets/quarto-solteiro3.jpg')")
    let indexImg = 0
    
    setInterval(() => {
        if(indexImg < images.length -1){
            indexImg++
            slide.style.backgroundImage = images[indexImg]
        }else{
            indexImg = 0
            slide.style.backgroundImage = images[indexImg]
        }
    }, 2000);
       
}
function slideCasal(){
    let slide = document.querySelector('#imgCasal')
    imagesCasal = new Array ("url('../assets/quarto-casal1.jpg')", "url('../assets/quarto-casal2.jpg')", "url('../assets/quarto-casal3.jpg')")
    let indexImg = 0
    
    setInterval(() => {
        if(indexImg < images.length -1){
            indexImg++
            slide.style.backgroundImage = imagesCasal[indexImg]
        }else{
            indexImg = 0
            slide.style.backgroundImage = imagesCasal[indexImg]
        }
    }, 1900);
       
}
function slideFamilia(){
    let slide = document.querySelector('#imgFamilia')
    imagesFamilia = new Array ("url('../assets/quarto-familia1.jpg')", "url('../assets/quarto-familia2.jpg')", "url('../assets/quarto-familia3.jpg')")
    let indexImg = 0
    
    setInterval(() => {
        if(indexImg < images.length -1){
            indexImg++
            slide.style.backgroundImage = imagesFamilia[indexImg]
        }else{
            indexImg = 0
            slide.style.backgroundImage = imagesFamilia[indexImg]
        }
    }, 2000);
       
}
slideSolteiro()
slideCasal()
slideFamilia()


