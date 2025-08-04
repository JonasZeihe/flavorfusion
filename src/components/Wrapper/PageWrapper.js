// src/components/PageWrapper.js
import React from 'react'
import styled from 'styled-components'

const Outer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
  background: ${({ theme, background }) =>
    background
      ? theme.colors?.[background.split('.')[0]]?.[background.split('.')[1]]
      : 'transparent'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(1.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(1)};
  }
`

const PageWrapper = ({ children, background, ...rest }) => (
  <Outer background={background} {...rest}>
    {children}
  </Outer>
)

export default PageWrapper
