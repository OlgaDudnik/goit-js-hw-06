const elem = document.querySelectorAll('.item')
console.log(`Number of categories: ${elem.length}`)

const items = document.querySelectorAll('#categories>.item') 
items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`) 
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})