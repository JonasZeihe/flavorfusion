// src/pages/casestudy/CaseStudyOverviewScreen.js

import React from 'react'
import Typography from '../../styles/typography'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import Wrapper from '../../components/Wrapper/Wrapper'

const CaseStudyOverviewScreen = () => {
  return (
    <PageWrapper background="surface.1">
      <Wrapper outlined>
        <Typography variant="h1" color="primary.3">
          Projektüberblick – Kontext & Zielsetzung
        </Typography>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <Typography variant="h2">Produktbeschreibung</Typography>
            <Typography variant="body">
              FlavorFusion ist ein KI-inspiriertes UX/UI-Projekt, das als
              Konzept einer Rezept-App konzipiert wurde. Die App soll es
              Nutzer:innen ermöglichen, kulinarische Weltküchen zu entdecken –
              von mediterran über asiatisch bis lateinamerikanisch – und dabei
              personalisierte Rezepte und passende Einkaufslistsen erhalten.
            </Typography>
          </div>

          <div>
            <Typography variant="h2">Problemstellung</Typography>
            <Typography variant="body">
              Die Herausforderung bestand darin, kulturelle Vielfalt als
              strukturiertes, emotional zugängliches Interface zu gestalten.
              Ziel war es, die visuelle Überforderung klassischer Rezeptseiten
              zu vermeiden und stattdessen eine modulare, visuell klare Landing
              Page zu entwickeln, die zum App-Download motiviert – ohne
              erklärlastige Textwüsten oder generische UI-Muster.
            </Typography>
          </div>

          <div>
            <Typography variant="h2">Zielgruppe</Typography>
            <Typography variant="body">
              Digital affine Hobbyköch:innen und Food-Enthusiast:innen mit
              Interesse an internationalen Rezepten, visuellem Storytelling und
              neuen Geschmackswelten.
            </Typography>
          </div>

          <div>
            <Typography variant="h2">Meine Rolle</Typography>
            <Typography variant="body">
              Ich war für den gesamten Designprozess verantwortlich – von der
              semantischen Konzeption über visuelle Kodierung bis hin zu
              Prototyp, UI-System und Case Study. Zusätzlich habe ich sämtliche
              Texte, Prompts und KI-basierte Inhalte selbst erstellt und
              kuratiert.
            </Typography>
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  )
}

export default CaseStudyOverviewScreen
