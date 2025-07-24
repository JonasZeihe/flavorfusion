// src/components/layout/Button.js

import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.accent3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${({ fontSize, theme }) =>
    fontSize || theme.typography.fontSize.body};
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  cursor: pointer;
  transition:
    background 0.15s,
    box-shadow 0.15s;

  &:hover {
    background-color: ${({ hoverColor, theme }) =>
      hoverColor || theme.colors.accent4};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
  }
  &:disabled {
    background-color: ${({ disabledColor, theme }) =>
      disabledColor || theme.colors.neutral3};
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export default Button
