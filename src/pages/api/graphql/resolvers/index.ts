import { QueryResolvers, RecipeResolvers } from 'types-generated/graphql-api';
import { getRecipes, getIngredientByRecipe } from './recipes';

const Query: Partial<QueryResolvers> = {
  recipes: getRecipes,
};

const Recipe: Partial<RecipeResolvers> = {
  ingredients: getIngredientByRecipe,
};

export const resolvers = {
  Query,
  Recipe,
};
