import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../styles/theme'
import typography from '../../styles/typography'

const FooterContainer = styled.footer`
  width: 100%;
  padding: ${theme.spacing(2.5)};
  background: ${theme.colors.neutral5};
  color: ${theme.colors.primary1};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize.body};
  z-index: 120;
`

const StyledLink = styled(Link)`
  color: ${theme.colors.primary1};
  text-decoration: none;
  font-weight: ${typography.fontWeight.bold};
  letter-spacing: ${typography.letterSpacing.normal};
  transition: color 0.19s;
  &:hover {
    color: ${theme.colors.accent3};
    text-decoration: underline;
  }
`

const Footer = () => (
  <FooterContainer>
    <StyledLink to="/">Zurück zur Startseite</StyledLink>
  </FooterContainer>
)

export default Footer
