import { config } from 'config';
import { AxiosRequestConfig } from 'axios';
import {
  Recipe,
  RecipeFiltersInput,
  GetRecipesResponse,
  RecipeIngredient,
} from 'types-generated/graphql-api';
import { HttpClient } from './HttpClient';

const { SPOONACULAR_API_KEY } = process.env;

export class SpoonacularApi extends HttpClient {
  public constructor() {
    super(config.SPOONACULAR_API_HOST);

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  private handleRequest = (defaultConfig: AxiosRequestConfig) => {
    const actualConfig = {
      ...defaultConfig,
      params: {
        ...defaultConfig.params,
        apiKey: SPOONACULAR_API_KEY,
      },
    };

    return actualConfig;
  };

  public getRecipes = async (filters: RecipeFiltersInput = null): Promise<GetRecipesResponse> => {
    const res = await this.instance.get<GetRecipesResponse>(`/recipes/complexSearch`, {
      params: {
        ...(filters || {}),
        // addRecipeInformation: true,
        addRecipeNutrition: true,
        number: 30,
      },
    });

    if (res.status !== 200) {
      return {
        results: [],
        offset: 0,
        number: 0,
        totalResults: 0,
      };
    }

    return res.data;
  };

  public getIngredientsByRecipe = async (recipe: Recipe): Promise<RecipeIngredient[]> => {
    // @TODO Use Redis here

    const res = await this.instance.get<{ ingredients: RecipeIngredient[] }>(
      `/recipes/${recipe.id}/ingredientWidget.json`
    );

    if (res.status !== 200) {
      return [];
    }

    return res.data.ingredients;
  };
}
