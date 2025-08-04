// src/components/Wrapper.js
import styled, { css } from 'styled-components'
import { forwardRef, memo } from 'react'

const alignmentStyles = {
  center: css`
    margin: 0 auto;
  `,
  left: css`
    margin-right: auto;
    margin-left: 0;
    transform: translateX(-12%);
  `,
  right: css`
    margin-left: auto;
    margin-right: 0;
    transform: translateX(12%);
  `,
}

const outlinedStyle = css`
  box-shadow: ${({ theme }) =>
    `0 0 0 1px ${theme.colors.surface[4]}, ${theme.boxShadow.modal}`};
`

const WrapperBase = styled.div`
  width: 100%;
  max-width: 940px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(26,28,32,0.97)' : 'rgba(255,255,255,0.98)'};
  padding: clamp(1.1rem, 2vw, 2.2rem) clamp(1rem, 2.5vw, 1.7rem);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  position: relative;

  ${({ align }) => alignmentStyles[align || 'center']}
  ${({ outlined }) => outlined && outlinedStyle}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transform: none !important;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(0.8rem, 2vw, 1rem);
  }
`

const Wrapper = forwardRef(
  (
    { children, as = 'div', align = 'center', outlined = false, ...rest },
    ref
  ) => (
    <WrapperBase ref={ref} as={as} align={align} outlined={outlined} {...rest}>
      {children}
    </WrapperBase>
  )
)

export default memo(Wrapper)
