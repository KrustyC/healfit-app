import type { UserProfile } from '@auth0/nextjs-auth0';
import type { FC } from 'react';
import styled from 'styled-components';
import { Anchor, Box, Button, Menu } from 'grommet';
import { User as UserIcon } from 'grommet-icons';

interface LinksProps {
  user: UserProfile | undefined;
}

const Circle = styled(Box)`
  border-radius: 50%;
  height: 30px;
  width: 30px;

  align-items: center;
  justify-content: center;
`;

export const Links: FC<LinksProps> = ({ user }) => {
  let links = [
    {
      label: 'Recipes',
      href: '/recipes',
    },
  ];

  if (user) {
    links = [
      ...links,
      {
        label: 'Dashboard',
        href: '/dashboard',
      },
    ];
  }

  return (
    <Box direction="row" align="center">
      {links.map(({ href, label }) => (
        <Anchor key={href} href={href} margin={{ right: '30px' }}>
          {label}
        </Anchor>
      ))}

      {!user ? (
        <Box justify="end" direction="row" gap="medium">
          <Button primary href="/api/auth/login" label="Login" size="medium" />
        </Box>
      ) : (
        <Circle justify="end" direction="row" gap="medium" background="brand">
          <Menu
            a11yTitle="User Menu"
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            style={{ display: 'flex' }}
            items={[
              {
                label: <Box pad="small">Profile</Box>,
                href: '/profile',
              },
              {
                label: <Box pad="small">Logout</Box>,
                href: '/api/auth/logout',
              },
            ]}
          >
            <UserIcon color="white" size="small" />
          </Menu>
        </Circle>
      )}
    </Box>
  );
};
