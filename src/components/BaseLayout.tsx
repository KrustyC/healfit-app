import { FC } from 'react';
import { Box, BoxProps, ResponsiveContext } from 'grommet';

export const BaseLayout: FC<BoxProps> = ({ children, ...boxProps }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const isSmallScreen = ['small', 'medium'].includes(size);
      return (
        <Box
          pad={{ vertical: 'medium', horizontal: isSmallScreen ? 'large' : '15%' }}
          {...boxProps}
        >
          {children}
        </Box>
      );
    }}
  </ResponsiveContext.Consumer>
);
