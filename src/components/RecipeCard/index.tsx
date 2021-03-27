import { FC } from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { Box, Heading, Image, Text } from 'grommet';
import { Clock, Cafeteria, Like } from 'grommet-icons';
import { Recipe } from 'types-generated/graphql-api';

interface RecipeCardProps {
  recipe: Recipe;
}

const Summary = styled(Text)`
  width: 100%;
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => (
  <Box>
    <Box height="280px" width="100%" style={{ borderRadius: '50px' }}>
      <Image src={recipe.image} fit="cover" style={{ borderRadius: '2px' }} />
    </Box>

    <Box direction="row" pad={{ top: 'xsmall' }} margin={{ bottom: '0' }}>
      <Box direction="row" align="center">
        <Clock color="dark-4" size="small" style={{ marginRight: '5px' }} />{' '}
        <Text color="dark-4" size="xsmall" weight="bold">
          {recipe.readyInMinutes} minutes
        </Text>
      </Box>
      <Box direction="row" align="center" margin={{ left: '10px' }}>
        <Cafeteria color="dark-4" size="small" style={{ marginRight: '5px' }} />{' '}
        <Text color="dark-4" size="xsmall" weight="bold">
          {recipe.servings} servings
        </Text>
      </Box>
    </Box>

    <Heading level="5" margin="none">
      {recipe.title}
    </Heading>

    <Box height="70px">
      <Summary size="small" margin={{ top: 'xsmall' }}>
        {parse(recipe.summary)}
      </Summary>
    </Box>

    <Box direction="row" align="center" margin={{ top: '10px' }}>
      <Box
        style={{ borderRadius: '100%' }}
        margin={{ right: '5px' }}
        align="center"
        justify="center"
        height="27px"
        width="27px"
        background="brand"
      >
        <Like color="white" size="small" />
      </Box>
      <Text color="brand" size="xsmall" weight="bold">
        {recipe.aggregateLikes} LIKES
      </Text>
    </Box>
  </Box>
);
