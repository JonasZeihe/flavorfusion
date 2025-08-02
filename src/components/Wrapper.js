// src/components/Wrapper.js

import styled from 'styled-components'
import { forwardRef, memo } from 'react'

const WrapperBase = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: clamp(1.1rem, 2vw, 2.2rem) clamp(1rem, 2.5vw, 1.7rem);
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(26,28,32,0.97)' : 'rgba(255,255,255,0.98)'};
  box-shadow: none;
  will-change: transform, background;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: clamp(1rem, 2.5vw, 1.4rem);
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(0.8rem, 2vw, 1rem);
    max-width: 100%;
  }
`

const Wrapper = forwardRef(({ children, as = 'div', ...rest }, ref) => (
  <WrapperBase ref={ref} as={as} {...rest}>
    {children}
  </WrapperBase>
))

export default memo(Wrapper)
