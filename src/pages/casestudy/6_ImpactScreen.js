// src/pages/casestudy/CaseStudyImpactScreen.js

import React from 'react'
import Typography from '../../styles/typography'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import Wrapper from '../../components/Wrapper/Wrapper'

const CaseStudyImpactScreen = () => {
  return (
    <PageWrapper background="surface.1">
      <Wrapper outlined>
        <Typography variant="h1" color="primary.3" align="center">
          Auswirkungen & Ergebnisse
        </Typography>

        <Typography variant="body">
          Das Projekt wurde als vollständiger Prototyp für mein Portfolio
          konzipiert – ohne reale Metriken oder Nutzerzahlen. Die Wirkung liegt
          nicht in quantitativen KPIs, sondern in der Demonstration meiner
          Fähigkeit, ein komplexes visuelles und interaktives System zu
          entwerfen: kulturell differenziert, systematisch typografisch
          aufgebaut und UI-strategisch durchdacht. Der Case erfüllt die
          Anforderungen an ein modernes UX/UI-Showcase.
        </Typography>
      </Wrapper>
    </PageWrapper>
  )
}

export default CaseStudyImpactScreen
