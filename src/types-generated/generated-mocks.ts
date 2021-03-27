/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { RecipeFiltersInput, GetRecipesResponse, Equipment, StepIngredient, StepLength, Step, Recipe, MetricUnit, UsUnit, RecipeIngredientAmount, RecipeIngredient, Nutrition, Nutrient, CaloricBreakdown, WeightPerServing } from './graphql';

export const aRecipeFiltersInput = (overrides?: Partial<RecipeFiltersInput>): RecipeFiltersInput => {
    return {
        diet: overrides && overrides.hasOwnProperty('diet') ? overrides.diet! : 'asperiores',
    };
};

export const aGetRecipesResponse = (overrides?: Partial<GetRecipesResponse>): GetRecipesResponse => {
    return {
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [aRecipe()],
        offset: overrides && overrides.hasOwnProperty('offset') ? overrides.offset! : 9255,
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 4172,
        totalResults: overrides && overrides.hasOwnProperty('totalResults') ? overrides.totalResults! : 3230,
    };
};

export const anEquipment = (overrides?: Partial<Equipment>): Equipment => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0a8d64d7-3a89-4093-92bb-68d06687641f',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'quia',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'consequatur',
    };
};

export const aStepIngredient = (overrides?: Partial<StepIngredient>): StepIngredient => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b1e014d4-786a-4f64-8f83-f8a455635858',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'laboriosam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'cum',
    };
};

export const aStepLength = (overrides?: Partial<StepLength>): StepLength => {
    return {
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 9136,
        unit: overrides && overrides.hasOwnProperty('unit') ? overrides.unit! : 'sint',
    };
};

export const aStep = (overrides?: Partial<Step>): Step => {
    return {
        equipment: overrides && overrides.hasOwnProperty('equipment') ? overrides.equipment! : [anEquipment()],
        ingredients: overrides && overrides.hasOwnProperty('ingredients') ? overrides.ingredients! : [aStepIngredient()],
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 6660,
        step: overrides && overrides.hasOwnProperty('step') ? overrides.step! : 'adipisci',
        length: overrides && overrides.hasOwnProperty('length') ? overrides.length! : aStepLength(),
    };
};

export const aRecipe = (overrides?: Partial<Recipe>): Recipe => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b49fa43c-ce1c-453f-a955-0e0c26b64fbb',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'incidunt',
        imageType: overrides && overrides.hasOwnProperty('imageType') ? overrides.imageType! : 'iusto',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'omnis',
        ingredients: overrides && overrides.hasOwnProperty('ingredients') ? overrides.ingredients! : [aRecipeIngredient()],
        nutrition: overrides && overrides.hasOwnProperty('nutrition') ? overrides.nutrition! : aNutrition(),
        steps: overrides && overrides.hasOwnProperty('steps') ? overrides.steps! : [aStep()],
        vegetarian: overrides && overrides.hasOwnProperty('vegetarian') ? overrides.vegetarian! : true,
        vegan: overrides && overrides.hasOwnProperty('vegan') ? overrides.vegan! : true,
        glutenFree: overrides && overrides.hasOwnProperty('glutenFree') ? overrides.glutenFree! : false,
        dairyFree: overrides && overrides.hasOwnProperty('dairyFree') ? overrides.dairyFree! : false,
        veryHealthy: overrides && overrides.hasOwnProperty('veryHealthy') ? overrides.veryHealthy! : true,
        cheap: overrides && overrides.hasOwnProperty('cheap') ? overrides.cheap! : true,
        veryPopular: overrides && overrides.hasOwnProperty('veryPopular') ? overrides.veryPopular! : true,
        sustainable: overrides && overrides.hasOwnProperty('sustainable') ? overrides.sustainable! : true,
        weightWatcherSmartPoints: overrides && overrides.hasOwnProperty('weightWatcherSmartPoints') ? overrides.weightWatcherSmartPoints! : 9063,
        aggregateLikes: overrides && overrides.hasOwnProperty('aggregateLikes') ? overrides.aggregateLikes! : 2752,
        healthScore: overrides && overrides.hasOwnProperty('healthScore') ? overrides.healthScore! : 8276,
        readyInMinutes: overrides && overrides.hasOwnProperty('readyInMinutes') ? overrides.readyInMinutes! : 213,
        servings: overrides && overrides.hasOwnProperty('servings') ? overrides.servings! : 680,
        summary: overrides && overrides.hasOwnProperty('summary') ? overrides.summary! : 'sequi',
    };
};

export const aMetricUnit = (overrides?: Partial<MetricUnit>): MetricUnit => {
    return {
        unit: overrides && overrides.hasOwnProperty('unit') ? overrides.unit! : 'illo',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 4.54,
    };
};

export const aUsUnit = (overrides?: Partial<UsUnit>): UsUnit => {
    return {
        unit: overrides && overrides.hasOwnProperty('unit') ? overrides.unit! : 'accusantium',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 0.98,
    };
};

export const aRecipeIngredientAmount = (overrides?: Partial<RecipeIngredientAmount>): RecipeIngredientAmount => {
    return {
        metric: overrides && overrides.hasOwnProperty('metric') ? overrides.metric! : aMetricUnit(),
        us: overrides && overrides.hasOwnProperty('us') ? overrides.us! : aUsUnit(),
    };
};

export const aRecipeIngredient = (overrides?: Partial<RecipeIngredient>): RecipeIngredient => {
    return {
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : aRecipeIngredientAmount(),
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'velit',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'culpa',
    };
};

export const aNutrition = (overrides?: Partial<Nutrition>): Nutrition => {
    return {
        nutrients: overrides && overrides.hasOwnProperty('nutrients') ? overrides.nutrients! : [aNutrient()],
        caloricBreakdown: overrides && overrides.hasOwnProperty('caloricBreakdown') ? overrides.caloricBreakdown! : aCaloricBreakdown(),
        weightPerServing: overrides && overrides.hasOwnProperty('weightPerServing') ? overrides.weightPerServing! : aWeightPerServing(),
    };
};

export const aNutrient = (overrides?: Partial<Nutrient>): Nutrient => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'eligendi',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'dolores',
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 0.47,
        unit: overrides && overrides.hasOwnProperty('unit') ? overrides.unit! : 'beatae',
        percentOfDailyNeeds: overrides && overrides.hasOwnProperty('percentOfDailyNeeds') ? overrides.percentOfDailyNeeds! : 1.24,
    };
};

export const aCaloricBreakdown = (overrides?: Partial<CaloricBreakdown>): CaloricBreakdown => {
    return {
        percentProtein: overrides && overrides.hasOwnProperty('percentProtein') ? overrides.percentProtein! : 4.83,
        percentFat: overrides && overrides.hasOwnProperty('percentFat') ? overrides.percentFat! : 0.54,
        percentCarbs: overrides && overrides.hasOwnProperty('percentCarbs') ? overrides.percentCarbs! : 4.56,
    };
};

export const aWeightPerServing = (overrides?: Partial<WeightPerServing>): WeightPerServing => {
    return {
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 5186,
        unit: overrides && overrides.hasOwnProperty('unit') ? overrides.unit! : 'facere',
    };
};
