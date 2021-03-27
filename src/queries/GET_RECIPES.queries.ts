import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query GetRecipes($filters: RecipeFiltersInput!) {
    recipes(filters: $filters) {
      results {
        id
        title
        image
        vegetarian
        vegan
        glutenFree
        dairyFree
        cheap
        sustainable
        aggregateLikes
        healthScore
        readyInMinutes
        servings
        summary
        ingredients {
          amount {
            metric {
              unit
              value
            }
          }
          image
        }
        nutrition {
          nutrients {
            name
          }
        }
      }
      totalResults
      offset
    }
  }
`;
