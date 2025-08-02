// src/components/Accordion.js

import React, { useState } from 'react'
import styled from 'styled-components'

const AccordionContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral1};
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacingHalf(3)};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
`

const AccordionHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(2.5)};
  background: ${({ theme }) => theme.colors.neutral5};
  color: ${({ theme }) => theme.colors.primary1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  user-select: none;
`

const AccordionContent = styled.div`
  padding: ${({ theme }) => theme.spacing(2.5)};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors.neutral1};
  color: ${({ theme }) => theme.colors.neutral6};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{answer}</AccordionContent>
    </AccordionContainer>
  )
}

export default Accordion
