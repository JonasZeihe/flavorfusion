import styled from 'styled-components'
import { Button as GlobalButton } from './Button'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  position: relative;
  ${({ customStyles }) => customStyles};
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ customStyles }) => customStyles};
`

export const Button = styled(GlobalButton)`
  background-color: ${({ bgColor }) => bgColor || theme.colors.accent3};
  ${({ customStyles }) => customStyles};
`
