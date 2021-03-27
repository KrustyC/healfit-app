import type { FC } from 'react';
import { Box, Footer as GrommetFooter, Anchor, Text, ResponsiveContext } from 'grommet';
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
    <ResponsiveContext.Consumer>
      {(size) => {
        const isSmallScreen = ['small', 'medium'].includes(size);
        return (
          <GrommetFooter
            background="white"
            pad={{ horizontal: isSmallScreen ? 'large' : '15%', vertical: 'large' }}
          >
            <Box direction={isSmallScreen ? 'column' : 'row-responsive'} width="100%">
              <Box
                direction="row-responsive"
                gap="xsmall"
                flex="grow"
                pad={{ vertical: isSmallScreen ? 'large' : 'none' }}
              >
                <Box align="center" direction="row" gap="small">
                  <GrommetIcon color="brand" size="large" />
                  <Text alignSelf="center" color="brand" size="large" weight="bold">
                    Healfit
                  </Text>
                </Box>
              </Box>

              <Box
                direction={isSmallScreen ? 'column' : 'row-responsive'}
                gap="xlarge"
                justify="end"
                flex="grow"
              >
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
            </Box>
          </GrommetFooter>
        );
      }}
    </ResponsiveContext.Consumer>
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
