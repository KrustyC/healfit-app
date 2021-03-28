import { config } from 'config';
import { AxiosRequestConfig } from 'axios';
import hash from 'object-hash';
import {
  Recipe,
  RecipeFiltersInput,
  GetRecipesResponse,
  RecipeIngredient,
  Step,
} from 'types-generated/graphql-api';
import * as redis from 'services/RedisClient';
import { HttpClient } from './HttpClient';

const { SPOONACULAR_API_KEY } = process.env;
const ONE_DAY_IN_SECONDS = 86400;
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
    const key = hash(filters);

    try {
      const cachedResponse = await redis.get(key);
      if (cachedResponse) {
        return JSON.parse(cachedResponse);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    const res = await this.instance.get<GetRecipesResponse>(`/recipes/complexSearch`, {
      params: {
        ...(filters || {}),
        // addRecipeInformation: true,
        addRecipeNutrition: true,
        number: 15,
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

    redis.set(key, JSON.stringify(res.data), ONE_DAY_IN_SECONDS);

    return res.data;
  };

  public getRecipeIngredients = async (recipe: Recipe): Promise<RecipeIngredient[]> => {
    const key = `recipe-${recipe.id}-ingredients`;

    try {
      const cachedResponse = await redis.get(key);
      if (cachedResponse) {
        return JSON.parse(cachedResponse) as RecipeIngredient[];
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    const res = await this.instance.get<{ ingredients: RecipeIngredient[] }>(
      `/recipes/${recipe.id}/ingredientWidget.json`
    );

    if (res.status !== 200) {
      return [];
    }

    redis.set(key, JSON.stringify(res.data.ingredients), ONE_DAY_IN_SECONDS);

    return res.data.ingredients;
  };

  public getRecipeSteps = async (recipe: Recipe): Promise<Step[]> => {
    const key = `recipe-${recipe.id}-steps`;

    try {
      const cachedResponse = await redis.get(key);
      if (cachedResponse) {
        return JSON.parse(cachedResponse) as Step[];
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    const res = await this.instance.get<{ name: string; steps: Step[] }[]>(
      `/recipes/${recipe.id}/analyzedInstructions`
    );

    if (res.status !== 200) {
      return [];
    }

    const steps = res.data.length >= 1 ? res.data[0].steps : [];

    redis.set(key, JSON.stringify(steps), ONE_DAY_IN_SECONDS);

    return steps;
  };
}
