import type { FC } from 'react';
import { Anchor, Box, Heading, Image, Text } from 'grommet';

interface FeatureProps {
  title: string;
  image: string;
  text: string;
  direction?: 'row' | 'row-reverse';
}

export const Feature: FC<FeatureProps> = ({ title, image, text, direction = 'row' }) => (
  <Box direction={direction} pad={{ vertical: 'medium' }} gap="xlarge" justify="center">
    <Box wrap overflow="wrap">
      <Heading level={2} size="medium">
        {title}
      </Heading>
      <Text>{text}</Text>

      <br />
      <Anchor label="🚀 View demo" href="" />
    </Box>

    <Box flex="grow">
      <Image src={image} width="550px" />
    </Box>
  </Box>
);
