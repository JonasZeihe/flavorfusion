// src/components/BackgroundWrapper.js
import styled from 'styled-components'

const BackgroundWrapper = styled.section`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  min-height: 100vh;
  position: relative;
`

export default BackgroundWrapper
