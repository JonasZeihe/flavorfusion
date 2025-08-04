// src/components/ScrollToTopButton.js

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'

const Button = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary[3]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  z-index: 10000;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[4]};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <Button onClick={scrollToTop} visible={visible}>
      <FaArrowUp />
    </Button>
  )
}

export default ScrollToTopButton
