// src/components/screens/CaseStudyDiscoveryScreen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../typography/Typography'
import Image from '../layout/Image'
import ColorGrid from '../../assets/images/casestudy/ColorGrid.png'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.neutral.background};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)};
`

const Box = styled.div`
  background: ${({ theme }) => theme.colors.neutral.background};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  max-width: 900px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const CaseStudyDiscoveryScreen = () => (
  <Wrapper>
    <Box>
      <Typography variant="h2" align="center" gutter color="primary.main">
        Entdeckungsphase (Task)
      </Typography>

      <Section>
        <Typography variant="h3" gutter color="primary.main">
          Erster Schritt: ChatGPT und FigJam
        </Typography>
        <Typography>
          Zunächst habe ich ChatGPT genutzt, um eine erste Struktur und Ideen
          für das Projekt zu entwickeln. Wie in meinen vorherigen Projekten habe
          ich auch hier <strong>FigJam</strong> verwendet, um ein Arbeitsfile zu
          erstellen. Dieses beinhaltete Links zu den Projektdateien und ein
          Moodboard, das zentrale <strong>Design-Prinzipien</strong> wie Farben,
          Zielorientierung und kulturelle Einflüsse festhielt.
        </Typography>
      </Section>

      <Image
        src={ColorGrid}
        alt="Moodboard und Design-Prinzipien"
        style={{
          width: '100%',
          borderRadius: '1rem',
          marginTop: '1rem',
          marginBottom: '2.5rem',
        }}
      />

      <Section>
        <Typography variant="h3" gutter color="primary.main">
          Projektstruktur und Inhalte
        </Typography>
        <Typography>
          In FigJam habe ich die Informationsarchitektur, Wireframes und das
          Moodboard zentral gesammelt, bevor ich in Figma die Landing Page
          gestaltete. Für jede Weltküche definierte ich eigene Kategorien und
          Inhalte – von typischen Gerichten bis hin zu passenden Farbpaletten,
          die später ins Design einflossen.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h3" gutter color="primary.main">
          Definition der Kategorien (Weltküchen)
        </Typography>
        <Typography gutter>
          Gemeinsam mit ChatGPT habe ich sieben <strong>Weltküchen</strong> als
          "Flavours" definiert: Mediterran, Asiatisch, Lateinamerikanisch,
          Nordamerikanisch, Afrikanisch, Nordeuropäisch und Nahöstlich. Jede
          erhielt eine eigene visuelle Sprache und Farbpalette, dokumentiert in
          einem strukturierten Notion-File.
        </Typography>
        <Typography>
          <strong>Beispiel: Mediterrane Küche</strong>
          <br />
          <strong>Charakteristik:</strong> Leicht, frisch, gesund
          <br />
          <strong>Typische Gerichte:</strong> Pasta, Tapas, Moussaka
          <br />
          <strong>Farbpalette:</strong> Olivgrün, Zitronengelb, Meeresblau,
          Terrakotta
          <br />
          <strong>Emotionale Assoziation:</strong> Urlaub am Mittelmeer,
          Lebensfreude
        </Typography>
      </Section>
    </Box>
  </Wrapper>
)

export default CaseStudyDiscoveryScreen
