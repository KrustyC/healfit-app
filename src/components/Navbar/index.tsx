import type { FC } from 'react';
import { Anchor, Box, ResponsiveContext, Header, Text } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';
import { useUser } from '@auth0/nextjs-auth0';
import { Burger } from './Burger';
import { Links } from './Links';

export const Navbar: FC = () => {
  const { user, isLoading } = useUser();

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const isSmallScreen = ['small', 'medium'].includes(size);
        return (
          <Header
            background="white"
            pad={{ vertical: 'medium', horizontal: isSmallScreen ? 'large' : '15%' }}
            height="xsmall"
          >
            <Box direction="row" justify="center" align="center">
              <GrommetIcon color="brand" size="medium" />
              <Text size="xlarge" margin={{ vertical: 'none', horizontal: 'xsmall' }}>
                <Anchor href="/" style={{ textDecoration: 'none', fontWeight: 'normal' }}>
                  Healfit
                </Anchor>
              </Text>
            </Box>

            {!isLoading ? (
              <>{size === 'small' ? <Burger user={user} /> : <Links user={user} />}</>
            ) : null}
          </Header>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};
