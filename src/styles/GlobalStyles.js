// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import typography from './typography'

export const GlobalStyles = createGlobalStyle`
  /* Google Fonts: Poppins & Montserrat */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;600;700&display=swap');

  *, *::before, *::after {
    margin: 0; padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    background: ${theme.colors.neutral[0]};
    color: ${theme.colors.neutral[5]};
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.fontFamily.base};
    background: ${theme.colors.neutral[0]};
    color: ${theme.colors.neutral[5]};
    line-height: ${typography.lineHeight.body};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --color-accent-1: ${theme.colors.accent[0]};
    --color-accent-2: ${theme.colors.accent[1]};
    --color-accent-3: ${theme.colors.accent[2]};
    --color-accent-4: ${theme.colors.accent[3]};
    --color-accent-5: ${theme.colors.accent[4]};
    --color-primary-1: ${theme.colors.primary[0]};
    --color-primary-2: ${theme.colors.primary[1]};
    --color-primary-3: ${theme.colors.primary[2]};
    --color-primary-4: ${theme.colors.primary[3]};
    --color-primary-5: ${theme.colors.primary[4]};
    --color-secondary-1: ${theme.colors.secondary[0]};
    --color-secondary-2: ${theme.colors.secondary[1]};
    --color-secondary-3: ${theme.colors.secondary[2]};
    --color-secondary-4: ${theme.colors.secondary[3]};
    --color-secondary-5: ${theme.colors.secondary[4]};
    --color-neutral-1: ${theme.colors.neutral[0]};
    --color-neutral-2: ${theme.colors.neutral[1]};
    --color-neutral-3: ${theme.colors.neutral[2]};
    --color-neutral-4: ${theme.colors.neutral[3]};
    --color-neutral-5: ${theme.colors.neutral[4]};
    --color-neutral-6: ${theme.colors.neutral[5]};
    --color-special-before-discount: ${theme.colors.specialBeforeDiscount};
    --font-family-base: ${typography.fontFamily.base};
    --font-family-heading: ${typography.fontFamily.heading};
    --font-family-button: ${typography.fontFamily.button};
    --font-family-secondary: ${typography.fontFamily.secondary};
    --font-size-h1: ${typography.fontSize.h1};
    --font-size-h2: ${typography.fontSize.h2};
    --font-size-h3: ${typography.fontSize.h3};
    --font-size-h4: ${typography.fontSize.h4};
    --font-size-body: ${typography.fontSize.body};
    --font-size-small: ${typography.fontSize.small};
    --font-size-button: ${typography.fontSize.button};
    --line-height-h1: ${typography.lineHeight.h1};
    --line-height-h2: ${typography.lineHeight.h2};
    --line-height-h3: ${typography.lineHeight.h3};
    --line-height-h4: ${typography.lineHeight.h4};
    --line-height-body: ${typography.lineHeight.body};
    --line-height-small: ${typography.lineHeight.small};
    --line-height-button: ${typography.lineHeight.button};
    --border-radius-small: ${theme.borderRadius.small};
    --border-radius-medium: ${theme.borderRadius.medium};
    --border-radius-large: ${theme.borderRadius.large};
    --border-radius-round: ${theme.borderRadius.round};
    --box-shadow-sm: ${theme.boxShadow.sm};
    --box-shadow-md: ${theme.boxShadow.md};
    --box-shadow-lg: ${theme.boxShadow.lg};
    --spacing-1: ${theme.spacing(1)};
    --spacing-2: ${theme.spacing(2)};
    --spacing-3: ${theme.spacing(3)};
    --spacing-4: ${theme.spacing(4)};
    --spacing-5: ${theme.spacing(5)};
  }

  /* Remove input autofill bg */
  input:-webkit-autofill,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:hover {
    box-shadow: 0 0 0 1000px ${theme.colors.neutral[0]} inset !important;
    -webkit-text-fill-color: ${theme.colors.neutral[5]} !important;
  }

  /* Remove blue highlight mobile tap */
  input, textarea, select, button {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.18s;
  }
  a:hover, a:focus {
    color: ${theme.colors.primary[2]};
    text-decoration: underline;
  }

  img, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyles
