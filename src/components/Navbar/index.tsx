import type { FC } from 'react';
import { Box, Button, ResponsiveContext, Header, Menu, Text } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';

export const Navbar: FC = () => (
  <Header background="white" pad={{ vertical: 'medium', horizontal: 'xlarge' }} height="xsmall">
    <Box direction="row-responsive" justify="center" align="center">
      <GrommetIcon color="brand" size="medium" />
      <Text size="xlarge" margin={{ vertical: 'none', horizontal: 'xsmall' }}>
        Healfit
      </Text>
    </Box>
    <ResponsiveContext.Consumer>
      {(size) =>
        size === 'small' ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: 'bottom', right: 'right' } }}
              icon={<MenuIcon color="brand" />}
              items={[
                {
                  label: <Box pad="small">Login</Box>,
                  href: '/api/auth/login',
                },
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Button primary href="/api/auth/login" label="Login" size="medium" />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);
