const input = document.querySelector('#validation-input')

input.addEventListener('blur', () => {
    const enteredText = input.value
    const enteredTextLength = enteredText.length
    const triggerLength = Number(input.dataset.length)

    if(enteredTextLength === triggerLength){
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
})