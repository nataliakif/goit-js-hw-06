const categoriesAmount = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesAmount.length}`);
const itemsAmount = document.querySelectorAll('.item');
itemsAmount.forEach(element =>{
    const categoryTitle = element.firstElementChild.textContent;
    console.log("category:"+ ' ' + categoryTitle);
    const listLength = element.lastElementChild.children.length;
    console.log("Elements:" + " " + listLength)
});

