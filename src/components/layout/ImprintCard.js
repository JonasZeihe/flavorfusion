import React from 'react'
import styled from 'styled-components'
import Heading from '../text/Heading'
import Paragraph from '../text/Paragraph'
import theme from '../../styles/theme'

const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || theme.colors.neutral5};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  opacity: 0.9;
  margin-bottom: 20px;
`

const ImprintCard = ({ title, content }) => {
  return (
    <CardContainer>
      <Heading
        color={theme.colors.primary3}
        size="24px"
        customStyles="margin-bottom: 10px; text-align: left;"
      >
        {title}
      </Heading>
      <Paragraph
        size="14px"
        customStyles={`color: ${theme.colors.white}; line-height: 1.5;`}
      >
        {content}
      </Paragraph>
    </CardContainer>
  )
}

export default ImprintCard
