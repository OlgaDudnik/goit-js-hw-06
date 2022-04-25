const boxes = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const input = document.querySelector('input[type="number"]')

createBtn.addEventListener('click', () => {
    destroyBoxes()
    createBoxes(input.value)
})

destroyBtn.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function destroyBoxes() {
    boxes.innerHTML = ''
}

function createBoxes(amount) {
    const divs = []
    const startWidthHeight = 30
    let currentWidthHeight = startWidthHeight

    for(let i = 0; i < amount; i +=1) {
        let div = document.createElement('div')

        if (i !== 0) {
            currentWidthHeight += 10
        }

        div.style.width = currentWidthHeight + 'px'
        div.style.height = currentWidthHeight + 'px'
        div.style.backgroundColor = getRandomHexColor()

        divs.push(div)

        boxes.append(div)
    }
}