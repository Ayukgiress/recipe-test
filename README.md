# Meal Search App

## Description
- This simple web application allows users to search for meal recipes using the MealDB API. The app dynamically fetches and displays recipes based on the user's input.

### Features
- Live Search: As the user types in the search input field, the app dynamically fetches and displays recipes matching the search term.
- Debouncing: The search functionality is debounced to prevent excessive API requests while the user is typing.

#### Usage
- Enter a search term in the input field.
The app will fetch recipes related to the search term.
Recipes will be displayed with their names, images, and instructions.
Code Overview
- The fetchRecipes function fetches recipes from the MealDB API based on the search term.
- The displayRecipes function dynamically displays the fetched recipes on the webpage.
The debounce function is used to debounce the search functionality to optimize API requests.
User input triggers the debouncedSearch function to fetch recipes based on the search term.
##### Technologies Used
- JavaScript
- HTML
- CSS
