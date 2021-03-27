import { QueryResolvers, RecipeResolvers } from 'types-generated/graphql-api';
import {
  aGetRecipesResponse,
  aRecipe,
  aRecipeIngredient,
  aStep,
} from 'types-generated/generated-mocks';
import { SpoonacularApi } from 'services/SpoonacularApi';
import { range } from 'helpers/array';

const spoonacularApi = new SpoonacularApi();

export const getRecipeIngredients: RecipeResolvers['ingredients'] = async (recipe) => {
  if (process.env.NODE_ENV === 'development' && process.env.USE_MOCKS === 'true') {
    return range(5).map(() => aRecipeIngredient());
  }

  return spoonacularApi.getRecipeIngredients(recipe);
};

export const getRecipeSteps: RecipeResolvers['steps'] = async (recipe) => {
  if (process.env.NODE_ENV === 'development' && process.env.USE_MOCKS === 'true') {
    return range(5).map(() => aStep());
  }

  return spoonacularApi.getRecipeSteps(recipe);
};

export const getRecipes: QueryResolvers['recipes'] = async (_, args) => {
  const { filters } = args;

  if (process.env.NODE_ENV === 'development' && process.env.USE_MOCKS === 'true') {
    return aGetRecipesResponse({ results: range(5).map(() => aRecipe()) });
  }

  return spoonacularApi.getRecipes(filters);
};
