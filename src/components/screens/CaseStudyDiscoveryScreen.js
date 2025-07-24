// src/components/screens/CaseStudyDiscoveryScreen.js

import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import typography from '../../styles/typography'
import Image from '../layout/Image'
import ColorGrid from '../../assets/images/casestudy/ColorGrid.png'

const Wrapper = styled.div`
  background: ${theme.colors.neutral1};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)} ${theme.spacing(2)};
`

const Box = styled.div`
  background: ${theme.colors.neutral1};
  padding: ${theme.spacing(4)};
  border-radius: ${theme.borderRadius.large};
  max-width: 900px;
  width: 100%;
  box-shadow: 0 4px 10px ${theme.colors.neutral3}22;
`

const Section = styled.section`
  margin-bottom: ${theme.spacing(3)};
`

const CaseStudyDiscoveryScreen = () => (
  <Wrapper>
    <Box>
      <div
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.h2,
          color: theme.colors.primary3,
          fontWeight: typography.fontWeight.bold,
          marginBottom: theme.spacing(3),
          letterSpacing: typography.letterSpacing.normal,
          textAlign: 'center',
        }}
      >
        Entdeckungsphase (Task)
      </div>
      <Section>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.h3,
            color: theme.colors.primary3,
            fontWeight: typography.fontWeight.bold,
            marginBottom: theme.spacing(1.5),
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          Erster Schritt: ChatGPT und FigJam
        </div>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.body,
            color: theme.colors.neutral6,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
            marginBottom: theme.spacing(1.25),
          }}
        >
          Zunächst habe ich ChatGPT genutzt, um eine erste Struktur und Ideen
          für das Projekt zu entwickeln. Wie in meinen vorherigen Projekten habe
          ich auch hier <strong>FigJam</strong> verwendet, um ein Arbeitsfile zu
          erstellen. Dieses FigJam File beinhaltete Links zu den Projektdateien,
          die ich im Verlauf des Projekts genutzt habe. Außerdem habe ich dort
          ein Moodboard erstellt, in dem ich alle wichtigen{' '}
          <strong>Design-Prinzipien</strong> wie Farben, Zielorientierung und
          kulturelle Einflüsse festgehalten habe.
        </div>
      </Section>
      <Image
        src={ColorGrid}
        alt="Moodboard und Design-Prinzipien"
        style={{
          width: '100%',
          borderRadius: theme.borderRadius.large,
          marginBottom: theme.spacing(3),
          marginTop: theme.spacing(1),
        }}
      />
      <Section>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.h3,
            color: theme.colors.primary3,
            fontWeight: typography.fontWeight.bold,
            marginBottom: theme.spacing(1.5),
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          Projektstruktur und Inhalte
        </div>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.body,
            color: theme.colors.neutral6,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
            marginBottom: theme.spacing(1.25),
          }}
        >
          In FigJam habe ich auch die Informationsarchitektur, Wireframes und
          ein Moodboard eingefügt. Alle Elemente wurden dort gesammelt, bevor
          ich dann in Figma an der eigentlichen Landing Page arbeitete. Für jede
          Weltküche habe ich verschiedene Kategorien und Inhalte definiert – von
          typischen Gerichten bis hin zu spezifischen Farbpaletten, die ich
          später in das Design integriert habe.
        </div>
      </Section>
      <Section>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.h3,
            color: theme.colors.primary3,
            fontWeight: typography.fontWeight.bold,
            marginBottom: theme.spacing(1.5),
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          Definition der Kategorien (Weltküchen)
        </div>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.body,
            color: theme.colors.neutral6,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
            marginBottom: theme.spacing(1.25),
          }}
        >
          Gemeinsam mit ChatGPT habe ich sieben <strong>Weltküchen</strong> als
          "Flavours" definiert: Mediterran, Asiatisch, Lateinamerikanisch,
          Nordamerikanisch, Afrikanisch, Nordeuropäisch und Nahöstlich. Jede
          dieser Weltküchen sollte eine eigene visuelle Sprache und Farbpalette
          erhalten. Diese Informationen wurden in einem Notion-File
          festgehalten, in dem ich jedes Flavour detailliert beschrieben habe.
        </div>
        <div
          style={{
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize.body,
            color: theme.colors.neutral6,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
            marginBottom: theme.spacing(1.25),
          }}
        >
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
        </div>
      </Section>
    </Box>
  </Wrapper>
)

export default CaseStudyDiscoveryScreen
