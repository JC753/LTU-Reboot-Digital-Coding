/* var easyRecipe = {
 recipeTitle: 'Shakshuka'
 servings: 2,
 ingredients: ['Drizzle of olive oil', '2 white onions', 'garlic', '2 cans cherry tomatoes', 'bunch of coriander', '4 eggs'],
 directions: ['Step 1: Heat the frying pan with a drizzle of olive oil and put the garlic, onions and chilli flakes - mix well for 5 mins. Add the tinned tomatoes and simmer for 8-10 mins', 
 'Step 2: Crack the eggs and on top of the mixture and put a lid on. Simmer for 6-8 mins or until the eggs are to your likening.',
  'Step 3: Scatter with coriander leaves and enjoy!']

 }

 function describeRecipe(recipe) {

  console.log( recipe.servings + recipe.ingredients + 'The following instructions as follows:' + recipe.directions);
 }

describeRecipe(shakshuka); */

// my intial attempt above

// Luke's method below
//same thing but after directions, var ingredients used to store

var easyRecipe = {
  recipeTitle: 'Shakshuka',
  servings: 2,
  ingredients: ['Drizzle of olive oil', '2 white onions', 'garlic', '2 cans cherry tomatoes', 'bunch of coriander', '4 eggs'],
  directions: ['Step 1: Heat the frying pan with a drizzle of olive oil and put the garlic, onions and chilli flakes - mix well for 5 mins. Add the tinned tomatoes and simmer for 8-10 mins', 
  'Step 2: Crack the eggs and on top of the mixture and put a lid on. Simmer for 6-8 mins or until the eggs are to your likening.',
  'Step 3: Scatter with coriander leaves and enjoy!']

}

var ingredients = easyRecipe.ingredients;

for (var index = 0; index < ingredients.length; index++)

console.log( ingredients[index]);
}