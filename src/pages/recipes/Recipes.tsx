import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Box } from 'grommet';

import { GET_RECIPES } from 'queries/GET_RECIPES.queries';
import { GetRecipesResponse } from 'types-generated/graphql-api';
import { ResponsiveGrid } from 'components/ResponsiveGrid';
import { RecipeCard } from 'components/RecipeCard';

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

const Recipes: FC = () => {
  const { loading, error, data } = useQuery<{ recipes: GetRecipesResponse }>(GET_RECIPES, {
    variables: { filters: { diet: 'vegetarian' } },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Box style={{ minHeight: '60vh' }} width="100%">
      <ResponsiveGrid responsiveColumns={columns} gap="large">
        {data.recipes.results.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ResponsiveGrid>
    </Box>
  );
};

export default Recipes;
