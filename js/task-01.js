const categoriesAmount = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesAmount.length}`);
const itemsAmount = document.querySelectorAll('.item');
itemsAmount.forEach(element =>{
    const categoryTitle = element.querySelectorAll("h2")
    categoryTitle.forEach(title => console.log("category:"+ ' ' + title.textContent));
    const listLength = element.querySelectorAll('ul li');
    console.log("Elements:" + " " + listLength.length)
});

