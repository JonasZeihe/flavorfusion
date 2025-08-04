// src/pages/casestudy/CaseStudyReflectionScreen.js

import React from 'react'
import Typography from '../../styles/typography'
import PageWrapper from '../../components/Wrapper/PageWrapper'
import Wrapper from '../../components/Wrapper/Wrapper'

const CaseStudyReflectionScreen = () => {
  return (
    <PageWrapper background="surface.0">
      <Wrapper outlined>
        <Typography variant="h1" color="primary.3" align="center">
          Reflexion & Learnings
        </Typography>

        <Typography variant="body">
          Dieses Projekt war nicht nur ein UI/UX-Vorhaben, sondern eine
          intensive Lernerfahrung im strukturierten Arbeiten mit KI-gestützten
          Tools. Besonders die Integration von ChatGPT in die konzeptionelle und
          typografische Systematik hat meine Arbeitsweise beschleunigt und
          präzisiert. Gleichzeitig hat mich der iterative Prototyping-Prozess
          gezwungen, visuelle Entscheidungen kontinuierlich zu validieren.
        </Typography>

        <Typography variant="body">
          Rückblickend würde ich die Phase der <strong>Nutzerforschung</strong>{' '}
          systematischer aufbauen, um von Anfang an fundiertere Entscheidungen
          zu treffen. Ebenso sehe ich Potenzial in der{' '}
          <strong>generativen Bildgestaltung</strong> – das Ziel: visuelle
          Kohärenz auf illustrativer Ebene, ohne die Kontrolle an Stilbruch oder
          visuelle Beliebigkeit zu verlieren.
        </Typography>
      </Wrapper>
    </PageWrapper>
  )
}

export default CaseStudyReflectionScreen
