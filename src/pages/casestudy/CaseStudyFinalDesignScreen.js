// src/pages/casestudy/CaseStudyFinalDesignScreen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'
import Image from '../../components/Image'

import MediterranBackground from '../../assets/images/backgrounds/BackgroundMediterran.png'
import AsiaBackground from '../../assets/images/backgrounds/BackgroundAsien.png'
import LatamBackground from '../../assets/images/backgrounds/BackgroundLateinamerika.png'
import NorthAmericaBackground from '../../assets/images/backgrounds/BackgroundNordamerika.png'
import AfricaBackground from '../../assets/images/backgrounds/BackgroundAfrika.png'
import NorthEuropeBackground from '../../assets/images/backgrounds/BackgroundNordeuropa.png'
import MiddleEastBackground from '../../assets/images/backgrounds/BackgroundNahost.png'

import MediterranCard from '../../assets/images/cards/CardMediterran.png'
import AsiaCard from '../../assets/images/cards/CardAsien.png'
import LatamCard from '../../assets/images/cards/CardLateinamerika.png'
import NorthAmCard from '../../assets/images/cards/CardNordamerika.png'
import AfricaCard from '../../assets/images/cards/CardAfrika.png'
import NorthEurCard from '../../assets/images/cards/CardNordeuropa.png'
import MiddleEastCard from '../../assets/images/cards/CardNahost.png'

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  min-height: 100vh;
`

const Content = styled.div`
  background: ${({ theme }) => theme.colors.neutral[0]};
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-width: 960px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`

const ImageWrapper = styled.div`
  width: 260px;
  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
  }
`

const CaseStudyFinalDesignScreen = () => {
  return (
    <Wrapper>
      <Content>
        <Typography variant="h1" color="primary.3" align="center">
          Finale Lösung – Visual Design & Umsetzung
        </Typography>

        <Section>
          <Typography variant="h2">
            Visuelle Komposition der Weltküchen
          </Typography>
          <Typography variant="body">
            Jede der sieben Weltküchen erhielt einen eigenständigen Hintergrund,
            der visuell ihre kulinarische Identität reflektiert. Die Szenen
            wurden KI-generiert, jedoch so gestaltet, dass sie bewusst unperfekt
            und realistisch wirken – geschnittenes Gemüse, benutzte
            Arbeitsflächen, Alltagsästhetik statt Food-Stock-Glanz. Ziel war
            eine visuelle Glaubwürdigkeit, die Emotion und Authentizität
            verbindet.
          </Typography>
          <ImageGallery>
            {[
              MediterranBackground,
              AsiaBackground,
              LatamBackground,
              NorthAmericaBackground,
              AfricaBackground,
              NorthEuropeBackground,
              MiddleEastBackground,
            ].map((src, i) => (
              <ImageWrapper key={i}>
                <Image src={src} alt={`Hintergrund Weltküche ${i + 1}`} />
              </ImageWrapper>
            ))}
          </ImageGallery>
        </Section>

        <Section>
          <Typography variant="h2">Karten im Linolschnittstil</Typography>
          <Typography variant="body">
            Für jede Küche wurde eine stilisierte Karte im linolschnittartigen
            Illustrationsstil erstellt. Diese Karten dienen der semantischen
            Verdichtung: Sie zeigen Zutaten, Texturen und typische Gerichte –
            eingebettet in eine ikonografische, handwerklich wirkende
            Bildsprache. Dadurch entsteht ein kohärentes, modulares Designsystem
            mit hoher Wiedererkennbarkeit.
          </Typography>
          <ImageGallery>
            {[
              MediterranCard,
              AsiaCard,
              LatamCard,
              NorthAmCard,
              AfricaCard,
              NorthEurCard,
              MiddleEastCard,
            ].map((src, i) => (
              <ImageWrapper key={i}>
                <Image src={src} alt={`Karte Weltküche ${i + 1}`} />
              </ImageWrapper>
            ))}
          </ImageGallery>
        </Section>
      </Content>
    </Wrapper>
  )
}

export default CaseStudyFinalDesignScreen
