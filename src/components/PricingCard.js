// src/components/PricingCard.js

import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CardContainer = styled.div`
  width: ${({ width }) => width || '100%'};
  max-width: 467px;
  height: ${({ height }) => height || 'auto'};
  background: ${({ theme }) => theme.colors.neutral[5]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(2.5)};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary[3]};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`

const Price = styled.div`
  color: ${({ theme }) => theme.colors.neutral[1]};
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  margin-top: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`

const Description = styled.div`
  color: ${({ theme }) => theme.colors.neutral[1]};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  text-align: center;
`

const FeatureList = styled.ul`
  color: ${({ theme }) => theme.colors.neutral[1]};
  margin-top: ${({ theme }) => theme.spacing(2)};
  list-style: none;
  padding-left: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
`

const FeatureItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const PricingCard = ({
  planName,
  description,
  price,
  features = [],
  buttonText,
  buttonProps = {},
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
    <Button {...buttonProps}>{buttonText}</Button>
  </CardContainer>
)

export default PricingCard
