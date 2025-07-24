import styled from 'styled-components'
import theme from '../../styles/theme'

const Heading = styled.h1`
  color: ${(props) => props.color || theme.colors.primary3};
  font-size: ${(props) => props.size || '48px'};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: ${(props) => props.lineHeight || '52.80px'};
  text-align: ${(props) => props.align || 'left'};
  ${(props) => props.customStyles};
`

export default Heading
