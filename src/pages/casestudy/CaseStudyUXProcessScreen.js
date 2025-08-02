// src/pages/casestudy/CaseStudyUXProcessScreen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'
import Image from '../../components/Image'

import ColorGrid from '../../assets/images/casestudy/ColorGrid.png'
import SketchWireframe from '../../assets/images/casestudy/mockupHanddrawn.png'
import Farbschema from '../../assets/images/casestudy/TypoScreen.png'
import PrototypePreview from '../../assets/images/casestudy/mockupLowFidelity.png'

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

const CaseStudyUXProcessScreen = () => {
  return (
    <Wrapper>
      <Content>
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
          <Image
            src={SketchWireframe}
            alt="Handgezeichneter Wireframe"
            style={{ marginTop: '1rem' }}
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
          <Image
            src={Farbschema}
            alt="Typografie-System"
            style={{ marginTop: '1rem' }}
          />
          <Image
            src={ColorGrid}
            alt="Farbsystem-Flavours"
            style={{ marginTop: '1.5rem' }}
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
          <Image
            src={PrototypePreview}
            alt="Figma-Prototyp Vorschau"
            style={{ marginTop: '1rem' }}
          />
        </Section>
      </Content>
    </Wrapper>
  )
}

export default CaseStudyUXProcessScreen
