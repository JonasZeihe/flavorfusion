import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">FlavorFusion</Logo>
        <NavWrapper>
          <StyledNavLink to="/">Case Study</StyledNavLink>
          <StyledNavLink to="/prototype">Prototype</StyledNavLink>
        </NavWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.surface.cardAlpha};
  backdrop-filter: blur(13px) saturate(1.11);
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.surface[4]};
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  height: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 56px;
  }
`

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(NavLink)`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main}; // <- statt .base
  text-decoration: none;
  &:hover {
    color: ${({ theme }) =>
      theme.colors.accent?.main || theme.colors.primary.main};
  }
`

const NavWrapper = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`

const StyledNavLink = styled(NavLink).attrs({ end: true })`
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.text};
  text-decoration: none;

  &.active {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &:hover {
    color: ${({ theme }) =>
      theme.colors.accent?.main || theme.colors.primary.main};
  }
`
