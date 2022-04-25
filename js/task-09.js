const changeColorBtn = document.querySelector('button.change-color')
changeColorBtn.addEventListener('click', handler)

const spanColor = document.querySelector('span.color')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function handler() {
    const randomColor = getRandomHexColor()

    spanColor.textContent = randomColor
    document.body.style.backgroundColor = randomColor
}