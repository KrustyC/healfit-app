import type { UserProfile } from '@auth0/nextjs-auth0';
import type { FC } from 'react';
import { Box, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

interface BurgerProps {
  user: UserProfile | undefined;
}
export const Burger: FC<BurgerProps> = ({ user }) => {
  let links = [
    {
      label: <Box pad="small">Recipes</Box>,
      href: '/recipes',
    },
  ];

  if (!user) {
    links = [
      {
        label: <Box pad="small">Login</Box>,
        href: '/api/auth/login',
      },
      ...links,
    ];
  } else {
    links = [
      ...links,
      {
        label: <Box pad="small">Dashboard</Box>,
        href: '/dashboard',
      },
    ];
  }

  return (
    <Box direction="row" align="center">
      <Menu
        a11yTitle="Navigation Menu"
        dropProps={{ align: { top: 'bottom', right: 'right' } }}
        icon={<MenuIcon color="brand" />}
        items={links}
      />
    </Box>
  );
};
