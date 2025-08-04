// src/pages/casestudy/CaseStudyFinalDesignScreen.js

import React, { useState } from 'react'
import Typography from '../../styles/typography'
import Image from '../../components/Image'
import Lightbox from '../../components/Lightbox'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import Wrapper from '../../components/Wrapper/Wrapper'
import styled from 'styled-components'

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`

const ImageWrapper = styled.div`
  width: 100%;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.boxShadow.modal};
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.025);
    }
  }
`

const CardGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`

const CardWrapper = styled.div`
  width: 220px;
  max-width: 100%;
  cursor: zoom-in;

  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`

const CaseStudyFinalDesignScreen = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: null })

  const openLightbox = (src) => setLightbox({ open: true, src })
  const closeLightbox = () => setLightbox({ open: false, src: null })

  const backgrounds = [
    MediterranBackground,
    AsiaBackground,
    LatamBackground,
    NorthAmericaBackground,
    AfricaBackground,
    NorthEuropeBackground,
    MiddleEastBackground,
  ]

  const cards = [
    MediterranCard,
    AsiaCard,
    LatamCard,
    NorthAmCard,
    AfricaCard,
    NorthEurCard,
    MiddleEastCard,
  ]

  return (
    <PageWrapper background="surface.main">
      <Wrapper outlined>
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
            {backgrounds.map((src, i) => (
              <ImageWrapper key={i} onClick={() => openLightbox(src)}>
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
          <CardGallery>
            {cards.map((src, i) => (
              <CardWrapper key={i} onClick={() => openLightbox(src)}>
                <Image src={src} alt={`Karte Weltküche ${i + 1}`} />
              </CardWrapper>
            ))}
          </CardGallery>
        </Section>
      </Wrapper>

      {lightbox.open && (
        <Lightbox
          src={lightbox.src}
          alt="Vergrößerte Ansicht"
          onClose={closeLightbox}
        />
      )}
    </PageWrapper>
  )
}

export default CaseStudyFinalDesignScreen
