const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const newItem = document.createElement('li');
    newItem.textContent = ingredient;
    newItem.classList.add('item');
    return newItem;
  });
}
const elements = makeIngredientsList(ingredients);
ingredientsList.append(...elements);
