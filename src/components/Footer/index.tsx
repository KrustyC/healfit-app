import type { FC } from 'react';
import { Box, Footer as GrommetFooter, Anchor, Text } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

const links = [
  {
    title: 'The Company',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Blog', to: '/blog' },
      { label: 'Our Values', to: '/values' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Join', to: '/api/auth/login' },
      { label: 'Get In Touch', to: '/get-in-touch' },
      { label: 'Frequently Asked Questions', to: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms And Conditions', to: '/terms-and-conditions' },
    ],
  },
];

export const Footer: FC = () => (
  <>
    <GrommetFooter background="white" pad={{ horizontal: 'xlarge', vertical: 'large' }}>
      <Box direction="row-responsive" gap="xsmall" flex="grow">
        <Box align="center" direction="row" gap="small">
          <GrommetIcon color="brand" size="large" />
          <Text alignSelf="center" color="brand" size="large" weight="bold">
            Healfit
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="xlarge" justify="end" flex="grow">
        {links.map((item) => (
          <Box gap="small" key={item.title}>
            <Text weight="bold" color="dark" size="medium">
              {item.title.toUpperCase()}
            </Text>
            <Box gap="xsmall" margin="0">
              {item.links.map((link) => (
                <Anchor key={link.to} href={link.to} size="small" color="dark-3">
                  {link.label}
                </Anchor>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </GrommetFooter>
    <GrommetFooter
      alignContent="center"
      justify="center"
      background="white"
      pad={{ horizontal: 'large', vertical: 'medium' }}
    >
      <Text textAlign="center" size="small">
        © 2021 Copyright
      </Text>
    </GrommetFooter>
  </>
);
