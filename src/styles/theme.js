// src/styles/theme.js

const clamp = (min, max) =>
  `clamp(${min}, calc(${min} + (${max} - ${min}) * ((100vw - 350px) / 1000)), ${max})`

const spacing = (f = 1) => `${8 * f}px`
const spacingHalf = (f = 1) => `${4 * f}px`

const typography = {
  fontFamily: {
    primary: "'Inter', 'Segoe UI', Arial, sans-serif",
    secondary: "'Inter', 'Segoe UI', Arial, sans-serif",
    button: "'Inter', 'Segoe UI', Arial, sans-serif",
  },
  fontSize: {
    display: clamp(2.4, 3.2),
    h1: clamp(2.1, 2.85),
    h2: clamp(1.6, 2.14),
    h3: clamp(1.25, 1.44),
    h4: clamp(1.08, 1.18),
    body: clamp(1, 1.08),
    small: clamp(0.92, 1),
    caption: clamp(0.82, 0.9),
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    tight: 1.19,
    normal: 1.6,
    relaxed: 1.9,
  },
  letterSpacing: {
    tighter: '-0.025em',
    tight: '-0.012em',
    normal: '0',
    wide: '0.035em',
  },
}

const borderRadius = {
  none: '0',
  small: '0.25rem',
  medium: '0.55rem',
  large: '1rem',
  pill: '9999px',
}

const boxShadow = {
  card: '0 4px 16px rgba(70,70,110,0.11)',
  modal: '0 8px 36px rgba(70,90,140,0.10)',
  glow: '0 0 0 2px #ffb300, 0 4px 22px 0 rgba(255,193,7,0.15)',
}

const breakpoints = {
  xs: '350px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1720px',
}

const colors = {
  primary: {
    0: '#FFF8E1',
    1: '#FFE082',
    2: '#FFC107',
    3: '#FFA000',
    4: '#FF6F00',
    main: '#FFC107',
    contrast: '#000',
  },
  secondary: {
    0: '#F1F8E9',
    1: '#C5E1A5',
    2: '#8BC34A',
    3: '#689F38',
    4: '#33691E',
    main: '#8BC34A',
    contrast: '#000',
  },
  error: {
    0: '#FFEBEE',
    1: '#FFCDD2',
    2: '#F44336',
    3: '#D32F2F',
    4: '#B71C1C',
    main: '#F44336',
    contrast: '#fff',
  },
  neutral: {
    0: '#FAFAFA',
    1: '#E0E0E0',
    2: '#9E9E9E',
    3: '#616161',
    4: '#424242',
    5: '#000000',
    text: '#424242',
    background: '#FAFAFA',
  },
  surface: {
    0: '#FFFFFF',
    1: '#FAFBFF',
    2: '#F3F5F9',
    main: '#E9EBF2',
    4: '#DDE0E7',
    5: '#C9CDD8',
    6: '#B3B7C4',
    card: '#FFFFFF',
    cardAlpha: 'rgba(255,255,255,0.8)',
    hover: '#F5F7FA',
    backdrop: '#E6E9F0',
  },
  depth: {
    0: '#FFFFFF',
    1: '#F4F5FA',
    2: '#E3E5F0',
    3: '#B6B8C6',
    main: '#676B84',
    5: '#393C4B',
    6: '#23243A',
    ultraLight: '#F6F8FC',
    dark: '#16171D',
  },
  text: {
    main: '#16171D',
    inverse: '#FFFFFF',
    subtle: '#6F7285',
  },
  special: {
    beforeDiscount: '#B10707',
  },
}

const motionSafe =
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion:no-preference)').matches

export const theme = {
  colors,
  typography,
  spacing,
  spacingHalf,
  borderRadius,
  boxShadow,
  breakpoints,
  motionSafe,
}

export default theme
