import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledTextBox = styled.div`
  width: 100%;
  background: ${({ bgColor }) => bgColor || theme.colors.neutral5};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.boxShadow.md};
  padding: ${({ padding }) => padding || theme.spacing(2.5)};
  opacity: ${({ opacity }) => opacity || 0.7};
  ${({ customStyles }) => customStyles};
`

const TextBox = ({ children, bgColor, padding, opacity, customStyles }) => (
  <StyledTextBox
    bgColor={bgColor}
    padding={padding}
    opacity={opacity}
    customStyles={customStyles}
  >
    {children}
  </StyledTextBox>
)

export default TextBox
