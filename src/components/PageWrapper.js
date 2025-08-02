// src/components/PageWrapper.js

import React from 'react'
import Container from './Container'

const PageWrapper = ({ children, ...rest }) => (
  <Container
    maxWidth="1000px"
    padding="0 2rem"
    display="flex"
    customStyles={`
      flex-direction: column;
      justify-content: flex-start;
      min-height: 100vh;
      box-sizing: border-box;
    `}
    {...rest}
  >
    {children}
  </Container>
)

export default PageWrapper
