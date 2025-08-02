// src/pages/casestudy/CaseStudyHeroScreen.js

import React from 'react'
import Typography from '../../styles/typography'
import Button from '../../components/Button'
import Wrapper from '../../components/Wrapper'
import PageWrapper from '../../components/PageWrapper'
import BackgroundWrapper from '../../components/BackgroundWrapper'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundFlavourFusion.png'

const CaseStudyHeroScreen = () => (
  <BackgroundWrapper image={BackgroundImage}>
    <PageWrapper>
      <Wrapper style={{ maxWidth: '860px' }}>
        <Typography variant="h1" color="primary.3">
          FlavorFusion – UX/UI Case Study
        </Typography>

        <Typography variant="body">
          Diese Fallstudie dokumentiert den gesamten Designprozess einer
          kulturell tief verankerten, KI-unterstützten Landing Page für die
          hypothetische Rezept-App „FlavorFusion“. Ziel war es, eine visuell
          immersive, interaktive und strukturell kohärente Lösung zu entwickeln,
          die Nutzern sofort Lust macht, die App zu entdecken – ohne klassische
          Erklärungstexte oder generische Designmuster.
        </Typography>

        <Typography variant="captionStrong" style={{ margin: '1rem 0' }}>
          <strong>Rolle:</strong> UX/UI Designer – Konzeption, Struktur, Visual
          Design, Prototyping
          <br />
          <strong>Dauer:</strong> 5 Werktage
          <br />
          <strong>Tools:</strong> ChatGPT, Figma, FigJam, Notion
          <br />
          <strong>Ziel:</strong> Emotionale Aktivierung + visuelle Klarheit →
          App-Download motivieren
        </Typography>

        <Button text="Zur Case Study" variant="primary" size="large" />
      </Wrapper>
    </PageWrapper>
  </BackgroundWrapper>
)

export default CaseStudyHeroScreen
