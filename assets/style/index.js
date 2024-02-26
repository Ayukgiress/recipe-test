const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const searchInput = document.getElementById('user-value')
const searchResult = document.getElementById('result')

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value;

  // Call the debounced search function with the input value
  debouncedSearch(searchTerm)
})

const debounce = (func, delay) => {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
  }
}

function fetchRecipes (searchTerm) {
  fetch(api + searchTerm)
    .then(response => response.json())
    .then(data => {
      const recipes = data.meals
      displayRecipes(recipes)
    })
    .catch(error => console.error('Error fetching recipes:', error))
}

function displayRecipes (recipes) {
  searchResult.innerHTML = ''

  if (recipes) {
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div')
      recipeElement.innerHTML = `
        <h2>${recipe.strMeal}</h2>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="recipe-image">
        <p>${recipe.strInstructions}</p>
      `
      searchResult.appendChild(recipeElement)
    })
  } else {
    searchResult.textContent = 'Oops, not found'
  }
}

const handleSearch = (searchTerm) => {
  fetchRecipes(searchTerm)
}

const debouncedSearch = debounce(handleSearch, 500) // Debounce the handleSearch function
