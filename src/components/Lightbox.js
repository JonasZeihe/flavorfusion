// src/components/Lightbox.js

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.2s ease-out;
  cursor: zoom-out;
`

const Img = styled.img.attrs(({ $scale, $offsetX, $offsetY }) => ({
  style: {
    transform: `translate(${$offsetX}px, ${$offsetY}px) scale(${$scale})`,
    cursor: $scale > 1 ? 'grab' : 'zoom-in',
  },
}))`
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  transition: transform 0.25s ease;
  user-select: none;
  pointer-events: auto;
`

const CloseButton = styled.button`
  position: fixed;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10000;
`

const Lightbox = ({ src, alt = '', onClose }) => {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const toggleZoom = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const originX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const originY = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    if (scale === 1) {
      setScale(2)
      setOffset({
        x: originX * rect.width * 0.25,
        y: originY * rect.height * 0.25,
      })
    } else {
      setScale(1)
      setOffset({ x: 0, y: 0 })
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Img
        src={src}
        alt={alt}
        onClick={(e) => {
          e.stopPropagation()
          toggleZoom(e)
        }}
        $scale={scale}
        $offsetX={offset.x}
        $offsetY={offset.y}
        draggable={false}
      />
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </Overlay>,
    document.body
  )
}

export default Lightbox
