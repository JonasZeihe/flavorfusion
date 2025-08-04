// src/pages/casestudy/CaseStudyUXProcessScreen.js

import React, { useState } from 'react'
import Typography from '../../styles/typography'
import Image from '../../components/Image'
import Lightbox from '../../components/Lightbox'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import Wrapper from '../../components/Wrapper/Wrapper'
import styled from 'styled-components'

import ColorGrid from '../../assets/images/casestudy/ColorGrid.webp'
import SketchWireframe from '../../assets/images/casestudy/mockupHanddrawn.webp'
import Farbschema from '../../assets/images/casestudy/TypoScreen.webp'
import PrototypePreview from '../../assets/images/casestudy/mockupLowFidelity.webp'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  margin-top: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  cursor: zoom-in;
`

const CaseStudyUXProcessScreen = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: null })

  const openLightbox = (src) => setLightbox({ open: true, src })
  const closeLightbox = () => setLightbox({ open: false, src: null })

  return (
    <PageWrapper background="neutral.0">
      <Wrapper outlined>
        <Typography variant="h1" color="primary.3" align="center">
          UX-Designprozess – Von Skizze bis Prototyp
        </Typography>

        <Section>
          <Typography variant="h2">Struktureller Startpunkt</Typography>
          <Typography variant="body">
            Auf Grundlage der strukturellen Notion- und FigJam-Vorarbeit
            entstand das initiale Figma-File. Neben dem Prototyp enthielt es
            klar definierte Ebenen für Typografie, Farbvarianten, Icons und
            modulare UI-Komponenten. Ziel war eine präzise und wartbare
            Designarchitektur.
          </Typography>
          <StyledImage
            src={SketchWireframe}
            alt="Handgezeichneter Wireframe"
            onClick={() => openLightbox(SketchWireframe)}
          />
        </Section>

        <Section>
          <Typography variant="h2">Farb- & Typografiesystem</Typography>
          <Typography variant="body">
            Jede der sieben Weltküchen erhielt eine eigenständige Farbpalette
            mit abgestuften Tönen für visuelle Tiefe und semantische Klarheit.
            Beispiel: Mediterran = Olivgrün, Zitronengelb, Terrakotta. Die
            Typografie wurde in Hierarchieebenen gegliedert – Display, Headline,
            Body, Caption – mit spezifischen Font-Weights und Letter-Spacings.
          </Typography>
          <StyledImage
            src={Farbschema}
            alt="Typografie-System"
            onClick={() => openLightbox(Farbschema)}
          />
          <StyledImage
            src={ColorGrid}
            alt="Farbsystem-Flavours"
            onClick={() => openLightbox(ColorGrid)}
          />
        </Section>

        <Section>
          <Typography variant="h2">Interaktion & Prototyping</Typography>
          <Typography variant="body">
            Der Prototyp wurde als klickbare Desktop-Erfahrung umgesetzt. Fokus
            lag auf Stringenz: klare visuelle Module, eindeutige
            Handlungsaufforderungen, intuitive Navigation. Die Download-Sektion
            bildet den Endpunkt jeder Scroll-Bewegung – gestützt von einem
            passenden kulturellen Background, der das visuelle Narrativ
            abrundet.
          </Typography>
          <StyledImage
            src={PrototypePreview}
            alt="Figma-Prototyp Vorschau"
            onClick={() => openLightbox(PrototypePreview)}
          />
        </Section>
      </Wrapper>

      {lightbox.open && (
        <Lightbox src={lightbox.src} alt="Zoom View" onClose={closeLightbox} />
      )}
    </PageWrapper>
  )
}

export default CaseStudyUXProcessScreen
