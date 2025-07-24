import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const AccordionContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.neutral1};
  border: 1px solid ${theme.colors.neutral3};
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

const AccordionHeader = styled.div`
  padding: 20px;
  background-color: ${theme.colors.neutral5};
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
`

const AccordionContent = styled.div`
  padding: 20px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: ${theme.colors.white};
  color: ${theme.colors.neutral6};
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  transition: max-height 0.3s ease-in-out;
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
