import { QueryResolvers, RecipeResolvers } from 'types-generated/graphql-api';
import { aGetRecipesResponse, aRecipe, aRecipeIngredient } from 'types-generated/generated-mocks';
import { SpoonacularApi } from 'services/SpoonacularApi';
import { range } from 'helpers/array';

const spoonacularApi = new SpoonacularApi();

export const getIngredientByRecipe: RecipeResolvers['ingredients'] = async (recipe) => {
  if (process.env.NODE_ENV === 'development') {
    return range(5).map(() => aRecipeIngredient());
  }

  return spoonacularApi.getIngredientsByRecipe(recipe);
};

export const getRecipes: QueryResolvers['recipes'] = async (_, args) => {
  const { filters } = args;

  if (process.env.NODE_ENV === 'development') {
    return aGetRecipesResponse({ results: range(5).map(() => aRecipe()) });
  }

  // @TODO Here I should handle some redis bullshit based on filters

  return spoonacularApi.getRecipes(filters);
};
