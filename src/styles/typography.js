// src/styles/typography.js

const clamp = (min, max) =>
  `clamp(${min}rem, calc(${min}rem + (${max} - ${min}) * ((100vw - 350px) / 1000)), ${max}rem)`

export const typography = {
  fontFamily: {
    primary: "'Poppins', sans-serif",
    secondary: "'Montserrat', sans-serif",
    body: "'Poppins', sans-serif",
    button: "'Montserrat', sans-serif",
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

export default typography
