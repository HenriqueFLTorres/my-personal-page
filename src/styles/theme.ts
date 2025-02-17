export const theme = {
  grid: {
    lg: '124rem',
  },
  font: {
    family: 'Dm Sans',
    weigths: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      verySmall: '1.4rem',
      small: '1.6rem',
      paragraph: '1.8rem',
      subtitle: '2.4rem',
      large: '4.4rem',
      title: '6.4rem',
      big: '9.6rem',
    },
    lineHeights: {
      small: '4rem',
      subtitle: '4.8rem',
      paragraph: '3.2rem',
      large: '2.8rem',
    },
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',

    green: '#31d84e',
    purple: '#6D38FC',

    gray900: '#0B0B0B',
    gray800: '#202020',
    gray400: '#AEAEAE',
    gray300: '#CECECE',
    gray100: '#EFEFEF',
  },
  space: {
    0: '0.4rem',
    1: '0.8rem',
    2: '1.2rem',
    3: '1.4rem',
    4: '1.6rem',
    5: '2.4rem',
    6: '3.2rem',
    7: '4rem',
    8: '4.8rem'
  },
  borderRadius: {
    rounded: '50%',
    sm: '0.4rem',
    md: '0.5rem',
    lg: '0.8rem',
  },
  transitions: {
    slow: '0.5s',
    fast: '0.2s',
  },
  breakpoints: {
    smallMobile: '425px',
    mobile: '768px',
    smallDesktop: '1024px',
    desktop: '1440px',
    largeDesktop: '1920px',
  },
} as const
