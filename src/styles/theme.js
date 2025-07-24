// src/styles/theme.js

export const colors = {
  accent1: 'rgba(255, 235, 238, 1)',
  accent2: 'rgba(255, 205, 210, 1)',
  accent3: 'rgba(244, 67, 54, 1)',
  accent4: 'rgba(211, 47, 47, 1)',
  accent5: 'rgba(183, 28, 28, 1)',

  primary1: 'rgba(255, 248, 225, 1)',
  primary2: 'rgba(255, 224, 130, 1)',
  primary3: 'rgba(255, 193, 7, 1)',
  primary4: 'rgba(255, 160, 0, 1)',
  primary5: 'rgba(255, 111, 0, 1)',

  secondary1: 'rgba(241, 248, 233, 1)',
  secondary2: 'rgba(197, 225, 165, 1)',
  secondary3: 'rgba(139, 195, 74, 1)',
  secondary4: 'rgba(104, 159, 56, 1)',
  secondary5: 'rgba(51, 105, 30, 1)',

  neutral1: 'rgba(250, 250, 250, 1)',
  neutral2: 'rgba(224, 224, 224, 1)',
  neutral3: 'rgba(158, 158, 158, 1)',
  neutral4: 'rgba(97, 97, 97, 1)',
  neutral5: 'rgba(66, 66, 66, 1)',
  neutral6: 'rgba(0, 0, 0, 1)',

  specialBeforeDiscount: 'rgba(177, 7, 7, 1)',
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
  xs: '0 1px 2px rgba(60,80,120,0.03)',
  sm: '0 2px 6px rgba(80,110,180,0.08)',
  md: '0 4px 16px rgba(70,70,110,0.11)',
  lg: '0 8px 36px rgba(70,90,140,0.10)',
  glow: '0 0 0 2px #5e9fff, 0 4px 22px 0 rgba(150,180,255,0.11)',
}

export const breakpoints = {
  xs: '350px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1440px',
  xxl: '1720px',
}

export const theme = {
  colors,
  spacing,
  spacingHalf,
  borderRadius,
  boxShadow,
  breakpoints,
}
export default theme
