import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import typography from '../styles/typography'

const CardContainer = styled.div`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || theme.colors.neutral5};
  padding: ${theme.spacing(2.5)};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
  opacity: 0.9;
  margin-bottom: ${theme.spacing(2.5)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.div`
  color: ${theme.colors.primary3};
  font-size: ${typography.fontSize.h3};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${theme.spacing(1.25)};
  text-align: left;
`

const Content = styled.div`
  color: ${theme.colors.neutral1};
  font-size: ${typography.fontSize.body};
  font-family: ${typography.fontFamily.primary};
  line-height: ${typography.lineHeight.normal};
  text-align: left;
  opacity: 0.95;
`

const ImprintCard = ({ title, content, bgColor }) => (
  <CardContainer bgColor={bgColor}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </CardContainer>
)

export default ImprintCard
