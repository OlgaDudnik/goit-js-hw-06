const textInput = document.querySelector('#name-input')
const valueSpan = document.querySelector('#name-output')
const defaultText = valueSpan.textContent

textInput.addEventListener('input', (event) => {
    const enteredText = event.currentTarget.value
    valueSpan.textContent = enteredText !== '' ? enteredText : defaultText
})