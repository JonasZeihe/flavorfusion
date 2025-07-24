import styled from 'styled-components'
import theme from '../../styles/theme'

const Paragraph = styled.p`
  color: ${(props) => props.color || theme.colors.white};
  font-size: ${(props) => props.size || '24px'};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  ${(props) => props.customStyles};
`

export default Paragraph
