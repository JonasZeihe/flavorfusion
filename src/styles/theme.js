// src/styles/theme.js

const theme = {
  colors: {
    accent: [
      'rgba(255, 235, 238, 1)',
      'rgba(255, 205, 210, 1)',
      'rgba(244, 67, 54, 1)',
      'rgba(211, 47, 47, 1)',
      'rgba(183, 28, 28, 1)',
    ],
    primary: [
      'rgba(255, 248, 225, 1)',
      'rgba(255, 224, 130, 1)',
      'rgba(255, 193, 7, 1)',
      'rgba(255, 160, 0, 1)',
      'rgba(255, 111, 0, 1)',
    ],
    secondary: [
      'rgba(241, 248, 233, 1)',
      'rgba(197, 225, 165, 1)',
      'rgba(139, 195, 74, 1)',
      'rgba(104, 159, 56, 1)',
      'rgba(51, 105, 30, 1)',
    ],
    neutral: [
      'rgba(250, 250, 250, 1)', // 0
      'rgba(224, 224, 224, 1)', // 1
      'rgba(158, 158, 158, 1)', // 2
      'rgba(97, 97, 97, 1)', // 3
      'rgba(66, 66, 66, 1)', // 4
      'rgba(0, 0, 0, 1)', // 5
    ],
    white: '#fff',
    black: '#000',
    specialBeforeDiscount: 'rgba(177, 7, 7, 1)',
  },
  spacing: (factor) => `${factor * 8}px`, // 1 = 8px
  borderRadius: {
    small: '6px',
    medium: '12px',
    large: '24px',
    round: '9999px',
  },
  boxShadow: {
    sm: '0 2px 8px 0 rgba(0,0,0,0.05)',
    md: '0 4px 16px 0 rgba(0,0,0,0.10)',
    lg: '0 8px 24px 0 rgba(0,0,0,0.12)',
  },
  breakpoints: {
    xs: '375px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
}

export default theme
