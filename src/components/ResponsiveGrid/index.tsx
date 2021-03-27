import { FC } from 'react';
import { Grid, GridProps, ResponsiveContext } from 'grommet';

type Size = 'small' | 'medium' | 'large' | 'xlarge';

interface ResponsiveItem<T> {
  small: T;
  medium: T;
  large: T;
  xlarge: T;
}

interface Area {
  name: string;
  start: [number, number];
  end: [number, number];
}

interface ResponsiveGridProps extends GridProps {
  responsiveColumns?: ResponsiveItem<string[] | string>;
  responsiveRows?: ResponsiveItem<string[] | string>;
  responsiveAreas?: ResponsiveItem<Area[]>;
}

export const ResponsiveGrid: FC<ResponsiveGridProps> = ({
  children,
  responsiveColumns,
  responsiveRows,
  responsiveAreas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      // take into consideration if not array is sent but a simple string
      const columnsVal = responsiveColumns?.[size as Size];
      const rowsVal = responsiveRows?.[size as Size];

      // also if areas is a simple array not an object of arrays for different sizes
      let areasVal;
      if (responsiveAreas && !Array.isArray(responsiveAreas)) {
        areasVal = responsiveAreas[size as Size];
      }

      return (
        <Grid {...props} areas={areasVal || undefined} rows={rowsVal} columns={columnsVal}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);
