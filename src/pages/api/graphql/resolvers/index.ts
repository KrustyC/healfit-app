import { QueryResolvers, RecipeResolvers } from 'types-generated/graphql-api';
import { getRecipes, getRecipeIngredients, getRecipeSteps } from './recipes';

const Query: Partial<QueryResolvers> = {
  recipes: getRecipes,
};

const Recipe: Partial<RecipeResolvers> = {
  ingredients: getRecipeIngredients,
  steps: getRecipeSteps,
};

export const resolvers = {
  Query,
  Recipe,
};
