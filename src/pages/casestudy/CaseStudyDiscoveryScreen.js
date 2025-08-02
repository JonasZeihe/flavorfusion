// src/components/screens/CaseStudyDiscoveryScreen.js

import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'
import Image from '../../components/Image'
import Wrapper from '../../components/Wrapper'
import Lightbox from '../../components/Lightbox'
import ColorGrid from '../../assets/images/casestudy/ColorGrid.png'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  cursor: zoom-in;
`

const CaseStudyDiscoveryScreen = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <Wrapper>
      <Typography variant="h1" color="primary.3" align="center">
        Entdeckungsphase – Research & Struktur
      </Typography>

      <Section>
        <Typography variant="h2">Initiale Strukturierung mit KI</Typography>
        <Typography variant="body">
          Die ersten Impulse für Struktur, Themen und visuelle Sprache
          entstanden in einem kollaborativen Prozess mit ChatGPT. Parallel
          nutzte ich FigJam als zentrales Planungstool: Moodboard,
          File-Verlinkungen, Designprinzipien und erste Flavour-Cluster wurden
          dort visuell organisiert.
        </Typography>
      </Section>

      <StyledImage
        src={ColorGrid}
        alt="Moodboard mit Flavour-Farbcodes"
        onClick={() => setLightboxOpen(true)}
      />

      {lightboxOpen && (
        <Lightbox
          src={ColorGrid}
          alt="Moodboard mit Flavour-Farbcodes"
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <Section>
        <Typography variant="h2">Struktur & semantische Ordnung</Typography>
        <Typography variant="body">
          Auf Basis des Moodboards entstanden erste semantische Kategorien je
          Weltküche – darunter Gerichte, visuelle Codierung und emotionale
          Trigger. Diese Inhalte wurden anschließend systematisch in Figma
          überführt und bildeten die Grundlage für spätere Layout- und
          Komponentensysteme.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h2">Weltküchen als modulare Flavours</Typography>
        <Typography variant="body">
          In einem kuratierten Notion-File definierte ich sieben Weltküchen mit
          je eigener visueller Sprache. Jede Flavour wurde als
          kulturell-emotionale Modulidentität angelegt – inklusive Farbwelt,
          Charakteristik, Gerichten und mentalen Assoziationen.
        </Typography>
        <Typography variant="captionStrong">
          Beispiel: Mediterrane Küche
          <br />
          <strong>Charakteristik:</strong> Leicht, frisch, gesund
          <br />
          <strong>Typische Gerichte:</strong> Pasta, Tapas, Moussaka
          <br />
          <strong>Farbpalette:</strong> Olivgrün, Zitronengelb, Meeresblau,
          Terrakotta
          <br />
          <strong>Assoziation:</strong> Urlaub am Mittelmeer, Lebensfreude
        </Typography>
      </Section>
    </Wrapper>
  )
}

export default CaseStudyDiscoveryScreen
