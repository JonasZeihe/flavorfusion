// src/pages/casestudy/CaseStudyOverviewScreen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundAsien.png'

const Wrapper = styled.section`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  min-height: 100vh;
`

const Content = styled.div`
  background: rgba(255, 255, 255, 0.88);
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-width: 940px;
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

const CaseStudyOverviewScreen = () => {
  return (
    <Wrapper>
      <Content>
        <Typography variant="h1" color="primary.3">
          Projektüberblick – Kontext & Zielsetzung
        </Typography>

        <Section>
          <Typography variant="h2">Produktbeschreibung</Typography>
          <Typography variant="body">
            FlavorFusion ist ein KI-inspiriertes UX/UI-Projekt, das als Konzept
            einer Rezept-App konzipiert wurde. Die App soll es Nutzer:innen
            ermöglichen, kulinarische Weltküchen zu entdecken – von mediterran
            über asiatisch bis lateinamerikanisch – und dabei personalisierte
            Rezepte und passende Einkaufslistsen erhalten.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h2">Problemstellung</Typography>
          <Typography variant="body">
            Die Herausforderung bestand darin, kulturelle Vielfalt als
            strukturiertes, emotional zugängliches Interface zu gestalten. Ziel
            war es, die visuelle Überforderung klassischer Rezeptseiten zu
            vermeiden und stattdessen eine modulare, visuell klare Landing Page
            zu entwickeln, die zum App-Download motiviert – ohne erklärlastige
            Textwüsten oder generische UI-Muster.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h2">Zielgruppe</Typography>
          <Typography variant="body">
            Digital affine Hobbyköch:innen und Food-Enthusiast:innen mit
            Interesse an internationalen Rezepten, visuellem Storytelling und
            neuen Geschmackswelten.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h2">Meine Rolle</Typography>
          <Typography variant="body">
            Ich war für den gesamten Designprozess verantwortlich – von der
            semantischen Konzeption über visuelle Kodierung bis hin zu Prototyp,
            UI-System und Case Study. Zusätzlich habe ich sämtliche Texte,
            Prompts und KI-basierte Inhalte selbst erstellt und kuratiert.
          </Typography>
        </Section>
      </Content>
    </Wrapper>
  )
}

export default CaseStudyOverviewScreen
