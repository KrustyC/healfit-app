import { FC } from 'react';
import Head from 'next/head';
import { Box, Heading, Image, Main } from 'grommet';
import { BaseLayout } from 'components/BaseLayout';
import Recipes from './Recipes';

const RecipesPage: FC = () => (
  <div>
    <Head>
      <title>Recipes</title>
    </Head>

    <Box>
      <Box width="100vw" height="500px" style={{ position: 'relative' }}>
        <Image
          fit="cover"
          src="https://images.unsplash.com/photo-1604543631489-4c03c8cc6ded?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
        <Box style={{ position: 'absolute', left: '15%', top: '20%' }}>
          <Heading color="white" margin={{ bottom: 'small' }}>
            Choose from <br />
            hundreds of recipes.
          </Heading>
          <Heading style={{ width: '100%' }} level="3" color="white" margin="none">
            You want to change your food habits, but don't know where to start?
            <br />
            Fear none. Healfit got you covered!
          </Heading>
        </Box>
      </Box>
      <BaseLayout>
        <Main direction="column" align="start">
          <Heading>Recipes</Heading>
          <Recipes />
        </Main>
      </BaseLayout>
    </Box>
  </div>
);

export default RecipesPage;
