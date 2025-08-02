// src/pages/casestudy/CaseStudyReflectionScreen.js

import React from 'react'
import styled from 'styled-components'
import Typography from '../../styles/typography'

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
  gap: ${({ theme }) => theme.spacing(4)};
`

const CaseStudyReflectionScreen = () => {
  return (
    <Wrapper>
      <Content>
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
      </Content>
    </Wrapper>
  )
}

export default CaseStudyReflectionScreen
