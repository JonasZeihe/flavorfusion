// theme.js

const clamp = (min, max) =>
  `clamp(${min}, calc(${min} + (${max} - ${min}) * ((100vw - 350px) / 1000)), ${max})`

export const typography = {
  fontFamily: {
    primary: "'Inter', 'Segoe UI', Arial, sans-serif",
    secondary: "'Inter', 'Segoe UI', Arial, sans-serif",
    button: "'Inter', 'Segoe UI', Arial, sans-serif",
  },
  fontSize: {
    h1: clamp(2.1, 2.85),
    h2: clamp(1.6, 2.14),
    h3: clamp(1.25, 1.44),
    h4: clamp(1.08, 1.18),
    body: clamp(1, 1.08),
    small: clamp(0.92, 1),
  },
  fontWeight: { light: 300, regular: 400, medium: 500, bold: 700 },
  lineHeight: { tight: 1.19, normal: 1.6, relaxed: 1.9 },
  letterSpacing: { tight: '-0.012em', normal: '0', wide: '0.035em' },
}

export const spacing = (f = 1) => `${8 * f}px`
export const spacingHalf = (f = 1) => `${4 * f}px`

export const borderRadius = {
  none: '0',
  small: '0.25rem',
  medium: '0.55rem',
  large: '1rem',
  pill: '9999px',
}

export const boxShadow = {
  card: '0 4px 16px rgba(70,70,110,0.11)',
  modal: '0 8px 36px rgba(70,90,140,0.10)',
  glow: '0 0 0 2px #ffb300, 0 4px 22px 0 rgba(255,193,7,0.15)',
}

export const breakpoints = {
  xs: '350px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1720px',
}

export const colors = {
  primary: {
    0: 'rgba(255, 248, 225, 1)',
    1: 'rgba(255, 224, 130, 1)',
    2: 'rgba(255, 193, 7, 1)',
    3: 'rgba(255, 160, 0, 1)',
    4: 'rgba(255, 111, 0, 1)',
    main: 'rgba(255, 193, 7, 1)',
    contrast: '#000',
  },
  secondary: {
    0: 'rgba(241, 248, 233, 1)',
    1: 'rgba(197, 225, 165, 1)',
    2: 'rgba(139, 195, 74, 1)',
    3: 'rgba(104, 159, 56, 1)',
    4: 'rgba(51, 105, 30, 1)',
    main: 'rgba(139, 195, 74, 1)',
    contrast: '#000',
  },
  error: {
    0: 'rgba(255, 235, 238, 1)',
    1: 'rgba(255, 205, 210, 1)',
    2: 'rgba(244, 67, 54, 1)',
    3: 'rgba(211, 47, 47, 1)',
    4: 'rgba(183, 28, 28, 1)',
    main: 'rgba(244, 67, 54, 1)',
    contrast: '#fff',
  },
  neutral: {
    0: 'rgba(250, 250, 250, 1)',
    1: 'rgba(224, 224, 224, 1)',
    2: 'rgba(158, 158, 158, 1)',
    3: 'rgba(97, 97, 97, 1)',
    4: 'rgba(66, 66, 66, 1)',
    5: 'rgba(0, 0, 0, 1)',
    text: 'rgba(66, 66, 66, 1)',
    background: 'rgba(250, 250, 250, 1)',
  },
  special: {
    beforeDiscount: 'rgba(177, 7, 7, 1)',
  },
}

export const theme = {
  colors,
  typography,
  spacing,
  spacingHalf,
  borderRadius,
  boxShadow,
  breakpoints,
}

export default theme
