const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
console.log(ingredients);
const list = document.querySelector('#ingredients');

const array = [];

ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.toggle('item');
  item.textContent = ingredient;
  array.push(item);
  console.log(item);
});

list.append(...array);
