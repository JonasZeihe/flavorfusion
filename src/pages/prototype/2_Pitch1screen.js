// src/pages/prototype/Prototype2Pitch1screen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'
import Button from '../../components/Button'
import Container from '../../components/Container'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundMediterran.png'

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[1]};
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  width: 100%;
`

const TextBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[2]}dd;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-width: 800px;
  text-align: left;
`

const CTAWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(6)};
  right: ${({ theme }) => theme.spacing(6)};
`

const Prototype2PitchScreen = () => {
  return (
    <Wrapper>
      <Container>
        <TextBlock>
          <Typography variant="h2" color="neutral.0">
            Dein Kochassistent für Zuhause –
          </Typography>
          <Typography variant="body" color="neutral.0">
            Entdecke einfache, personalisierte Rezepte und erhalte
            maßgeschneiderte Einkaufslisten. Für stressfreies Kochen und mehr
            Genuss.
          </Typography>
        </TextBlock>
      </Container>
      <CTAWrapper>
        <Button text="Du hast noch Fragen?" variant="secondary" size="large" />
      </CTAWrapper>
    </Wrapper>
  )
}

export default Prototype2PitchScreen
