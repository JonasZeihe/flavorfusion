import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth, theme }) => maxWidth || theme.breakpoints.lg};
  margin: 0 auto;
  padding: ${({ padding, theme }) => padding || `0 ${theme.spacing(2)}`};
  position: relative;
  display: ${({ display }) => display || 'block'};
  ${({ customStyles }) => customStyles};
`

export default Container
