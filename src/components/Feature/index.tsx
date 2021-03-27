import type { FC } from 'react';
import { Anchor, Box, Heading, Image, ResponsiveContext, Text } from 'grommet';

interface FeatureProps {
  title: string;
  image: string;
  text: string;
  direction?: 'row' | 'row-reverse';
}

export const Feature: FC<FeatureProps> = ({ title, image, text, direction = 'row' }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const isSmallScreen = ['small', 'medium'].includes(size);

      return (
        <Box
          direction={isSmallScreen ? 'column' : direction}
          pad={{ vertical: 'medium' }}
          gap="xlarge"
          justify="center"
        >
          <Box wrap overflow="wrap">
            <Heading level={2} size="medium">
              {title}
            </Heading>
            <Text>{text}</Text>

            <br />
            <Anchor label="🚀 View demo" href="" />
          </Box>

          <Box flex="grow">
            <Image src={image} width={isSmallScreen ? '100%' : '550px'} />
          </Box>
        </Box>
      );
    }}
  </ResponsiveContext.Consumer>
);
