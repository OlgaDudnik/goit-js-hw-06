const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
]

const list = document.querySelector('#ingredients')
const lis = []

for (let ingridient of ingredients) {
    let li = document.createElement('li')
    li.textContent = ingridient
    lis.push(li.outerHTML)
}

list.insertAdjacentHTML('afterbegin', lis.join(''))