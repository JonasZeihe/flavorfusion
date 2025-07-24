// src/components/layout/BackgroundImage.js

import styled from 'styled-components'

const BackgroundImage = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  ${({ customStyles }) => customStyles};
`

export default BackgroundImage
