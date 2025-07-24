import React from 'react'
import styled from 'styled-components'
import Heading from '../text/Heading'
import Paragraph from '../text/Paragraph'
import Button from '../layout/Button'
import theme from '../../styles/theme'

const CardContainer = styled.div`
  width: ${(props) => props.width || '100%'};
  max-width: 467px;
  height: ${(props) => props.height || 'auto'};
  background-color: ${theme.colors.neutral5};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.25);
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const FeatureList = styled.ul`
  color: white;
  margin-top: 20px;
  list-style-type: none;
  padding-left: 0;
`

const FeatureItem = styled.li`
  margin-bottom: 10px;
`

const PricingCard = ({
  planName,
  description,
  price,
  features,
  buttonText,
  buttonStyles,
  width,
  height,
}) => {
  return (
    <CardContainer width={width} height={height}>
      <Heading color="white" size="36px" customStyles="text-align: center;">
        {planName}
      </Heading>
      <Paragraph
        size="18px"
        customStyles="color: white; margin-top: 20px; text-align: center;"
      >
        {price}
      </Paragraph>
      <Paragraph
        size="18px"
        customStyles="color: white; margin-top: 10px; text-align: center;"
      >
        {description}
      </Paragraph>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeatureList>
      <Button text={buttonText} customStyles={buttonStyles} />
    </CardContainer>
  )
}

export default PricingCard
