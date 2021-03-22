import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RECIPES } from 'queries/GET_RECIPES.queries';
import { GetRecipesResponse } from 'types-generated/graphql-api';

const Recipes: FC = () => {
  const { loading, error, data } = useQuery<GetRecipesResponse>(GET_RECIPES, {
    variables: { filters: { diet: 'vegetarian' } },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>Welcome to the Recipes</h1>
    </div>
  );
};

export default Recipes;
