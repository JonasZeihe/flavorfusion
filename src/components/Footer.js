// src/components/Footer.js

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2.5)};
  background: ${({ theme }) => theme.colors.neutral[5]};
  color: ${({ theme }) => theme.colors.primary[1]};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  z-index: 120;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary[1]};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  transition: color 0.19s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[3]};
    text-decoration: underline;
  }
`

const Footer = () => (
  <FooterContainer>
    <StyledLink to="/">Zurück zur Startseite</StyledLink>
  </FooterContainer>
)

export default Footer
