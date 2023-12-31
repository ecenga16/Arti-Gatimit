import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch(err) {
    recipeView.renderError();
  }
};

const controllSearchResults = async function () {

  
  try { 

    const query = searchView.getQuery();
    if(!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);

  } catch (err) {

  }
}



const init = function () { 

  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controllSearchResults);
}

init();