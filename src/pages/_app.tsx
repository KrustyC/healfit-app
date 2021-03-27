import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Grommet, Box } from 'grommet';
import { useApollo } from 'hooks/useApollo';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Grommet theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <ApolloProvider client={apolloClient}>
          <Box>
            <Navbar />

            <Component {...pageProps} />

            <Footer />
          </Box>
        </ApolloProvider>
      </UserProvider>
    </Grommet>
  );
};

export default App;
