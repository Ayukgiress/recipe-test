const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
// const searchResult = document.getElementById('user-value')

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.meals
    recipes.forEach((recipe) => {
      displayRecipe(recipe)
    })
  })
  .catch((error) => console.error('Error fetching data:', error))

function displayRecipe(recipe) {
  const name = recipe.strMeal
  const imgSrc = recipe.strMealThumb
  const instructions = recipe.strInstructions
  const recipeContainer = document.getElementById('result')
  const myRecipe = document.createElement('div')
  myRecipe.classList.add('box')
  myRecipe.innerHTML = `
      <h2 class = "name">${name}</h2>
      <img src="${imgSrc}" alt="${name}" class="img">
      <p class="instructions">${instructions}</p>
    `
  recipeContainer.appendChild(myRecipe)

  const img = myRecipe.querySelector('.img')
  const popup = myRecipe.querySelector('.instructions');

  img.addEventListener('mouseover', function () {
    popup.classList.add('show')
  })

  img.addEventListener('mouseout', function () {
    popup.classList.remove('show')
  })
}
