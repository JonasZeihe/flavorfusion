// src/pages/casestudy/CaseStudyHeroScreen.js

import React from 'react'
import Typography from '../../styles/typography'
import Wrapper from '../../components/Wrapper/Wrapper'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import WithHeaderOffset from '../../components/Layout/WithHeaderOffset'
import styled from 'styled-components'
import LogoRound from '../../assets/images/logo/LogoRound.webp'

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow.card};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      max-width: 300px;
    }
  }
`

const CaseStudyHeroScreen = () => (
  <WithHeaderOffset>
    <PageWrapper background="surface.0">
      <Wrapper outlined>
        <LogoContainer>
          <img src={LogoRound} alt="FlavorFusion Logo" />
        </LogoContainer>

        <Typography variant="h1" color="primary.3" align="center">
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
      </Wrapper>
    </PageWrapper>
  </WithHeaderOffset>
)

export default CaseStudyHeroScreen
