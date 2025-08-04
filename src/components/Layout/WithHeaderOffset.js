// src/components/Layout/WithHeaderOffset.js
import styled from 'styled-components'

const WithHeaderOffset = styled.div`
  padding-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 56px;
  }
`

export default WithHeaderOffset
