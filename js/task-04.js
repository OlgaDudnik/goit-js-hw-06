let counterValue = 0

const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const myValue = document.querySelector('#value')

function change() {
    if(this === decrementBtn) {
        counterValue -= 1
    } else {
        counterValue += 1
    }

    myValue.textContent = counterValue
}

decrementBtn.addEventListener('click', change)
incrementBtn.addEventListener('click', change)