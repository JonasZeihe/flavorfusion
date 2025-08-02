import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  max-width: 100%;
  display: block;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  ${({ customStyles }) => customStyles};
`

const Image = ({
  src,
  alt,
  className,
  objectFit,
  borderRadius,
  customStyles,
}) => (
  <StyledImage
    src={src}
    alt={alt}
    className={className}
    objectFit={objectFit}
    borderRadius={borderRadius}
    customStyles={customStyles}
    loading="lazy"
    draggable={false}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  objectFit: PropTypes.string,
  borderRadius: PropTypes.string,
  customStyles: PropTypes.string,
}

Image.defaultProps = {
  className: '',
  objectFit: undefined,
  borderRadius: undefined,
  customStyles: undefined,
}

export default Image
