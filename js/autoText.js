let elInput = document.querySelector('#input')
let words = ['Pousada', 'Secreta']
let indexChar = 0
let indexWords = 0
let interval
//elInput.focus()
run()

function run() {
    interval = setInterval(() => {
        if (indexChar < words[indexWords].length) {
            indexChar++
            value = 'value'
            result = words[indexWords].substr(0, indexChar);
            elInput.setAttribute(value, result)
            elInput.textContent = result
        } else if (indexWords < words.length - 1) {
            indexWords++
            indexChar = 0
        } else {
            indexWords = 0
            indexChar = 0
        }
    }, 300);
}