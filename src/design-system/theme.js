//TODO: discuss how to standardize all fontSizes and lineHeights
export const breakpoints = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576
}

export const theme = {
  colors: {
    primary: '#ff6b81',
    white: '#ffffff',
    black: '#081828',
    lightGrey: '#f9f9f9',
    grey: '#888'
  },
  breakpoints: {
    xl: `(max-width: ${breakpoints.xxl - 1}px)`,
    lg: `(max-width: ${breakpoints.xl - 1}px)`,
    md: `(max-width: ${breakpoints.lg - 1}px)`,
    sm: `(max-width: ${breakpoints.md - 1}px)`,
    xs: `(max-width: ${breakpoints.sm - 1}px)`
  },
  typography: {
    title: '38px',
    title2: '35px',
    title3: '34px',
    subtitle: '18px',
    subtitle2: '16px',
    body: '15px',
    body2: '14px',
    tiny: '13px'
  },
  icons: {
    lg: '20px',
    md: '18px'
  }
}
