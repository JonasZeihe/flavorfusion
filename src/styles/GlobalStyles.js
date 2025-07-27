import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    min-width: 0;
    overflow-x: hidden;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    color-scheme: light;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.base};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.neutral.text};
    background: ${({ theme }) => theme.colors.neutral.background};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color 0.23s cubic-bezier(0.34, 0.54, 0.51, 1),
                background-color 0.36s cubic-bezier(0.38, 0.54, 0.51, 1);
  }

  #root {
    isolation: isolate;
    min-height: 100vh;
    background: transparent;
  }

  button, input, select, textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily.ui};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    color: inherit;
    background: none;
    border: none;
    outline: none;
    transition: color 0.22s;
  }

  button {
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    transition: box-shadow 0.19s;
  }

  button:focus-visible {
    outline: 2.5px solid ${({ theme }) => theme.colors.error.main};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.error[1]}44;
  }

  button:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.modal};
    filter: brightness(1.05);
  }

  button:active {
    filter: brightness(0.95);
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[1]}55;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.19s;
  }

  a:hover,
  a:focus-visible {
    color: ${({ theme }) => theme.colors.error.main};
    text-decoration: underline;
  }

  img,
  svg {
    max-width: 100%;
    display: block;
    user-select: none;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
  }
`

export default GlobalStyles
