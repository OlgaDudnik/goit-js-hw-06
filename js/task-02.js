const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]

const list = document.querySelector('#ingredients')

for (let ingridient of ingredients) {
    let li = document.createElement('li')
    li.textContent = ingridient
    list.append(li)
}