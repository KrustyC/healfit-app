import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#f53b57',
      'brand-contrast': '#575fcf',
      active: '#eecc33',
    },
    font: {
      family: 'Roboto, sans-serif',
      size: '14px',
      height: '20px',
    },
    breakpoints: {
      small: {
        value: 720,
      },
      medium: {
        value: 1200,
      },
      large: {
        value: 3000,
      },
    },
  },
  heading: {
    font: { family: 'Merriweather' },
  },
  button: {
    extend: `border-radius: 10px;`,
    default: {
      border: {
        radius: '0px',
        color: 'white',
      },
      color: 'text',
    },
    primary: {
      background: { color: 'brand' },
      color: 'white',
      font: { weight: 'bold' },
      padding: {
        horizontal: '15px',
        vertical: '10px',
      },
    },
    secondary: {
      border: { color: 'brand', width: '4px' },
      color: 'text',
      padding: {
        horizontal: '15px',
        vertical: '10px',
      },
    },
    active: {
      background: { color: 'brand-contrast' },
      color: 'text',
      secondary: {
        background: 'none',
        border: {
          color: 'brand-contrast',
        },
      },
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: { color: 'text-weak' },
      },
    },
    hover: {
      background: { color: 'active' },
      secondary: {
        border: { color: 'active' },
      },
    },
  },
});
