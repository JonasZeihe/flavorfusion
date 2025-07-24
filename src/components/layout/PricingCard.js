import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import typography from '../../styles/typography'
import Button from '../layout/Button'

const CardContainer = styled.div`
  width: ${({ width }) => width || '100%'};
  max-width: 467px;
  height: ${({ height }) => height || 'auto'};
  background: ${theme.colors.neutral5};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing(2.5)};
  box-shadow: ${theme.boxShadow.md};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  color: ${theme.colors.primary3};
  font-size: ${typography.fontSize.h2};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing(1.5)};
`

const Price = styled.div`
  color: ${theme.colors.neutral1};
  font-size: ${typography.fontSize.h3};
  font-family: ${typography.fontFamily.primary};
  margin-top: ${theme.spacing(1)};
  text-align: center;
`

const Description = styled.div`
  color: ${theme.colors.neutral1};
  font-size: ${typography.fontSize.body};
  font-family: ${typography.fontFamily.primary};
  margin-top: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(1.5)};
  text-align: center;
`

const FeatureList = styled.ul`
  color: ${theme.colors.neutral1};
  margin-top: ${theme.spacing(2)};
  list-style: none;
  padding-left: 0;
  font-size: ${typography.fontSize.body};
  font-family: ${typography.fontFamily.primary};
`

const FeatureItem = styled.li`
  margin-bottom: ${theme.spacing(1)};
`

const PricingCard = ({
  planName,
  description,
  price,
  features = [],
  buttonText,
  buttonStyles,
  width,
  height,
  ...rest
}) => (
  <CardContainer width={width} height={height} {...rest}>
    <Title>{planName}</Title>
    <Price>{price}</Price>
    <Description>{description}</Description>
    <FeatureList>
      {features.map((feature, idx) => (
        <FeatureItem key={idx}>{feature}</FeatureItem>
      ))}
    </FeatureList>
    <Button style={buttonStyles}>{buttonText}</Button>
  </CardContainer>
)

export default PricingCard
