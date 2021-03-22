import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query GetRecipes($filters: RecipeFiltersInput!) {
    recipes(filters: $filters) {
      results {
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
        title
      }
      totalResults
      offset
    }
  }
`;
