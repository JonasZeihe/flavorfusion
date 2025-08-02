// src/pages/casestudy/CaseStudyImpactScreen.js

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

const CaseStudyImpactScreen = () => {
  return (
    <Wrapper>
      <Content>
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
      </Content>
    </Wrapper>
  )
}

export default CaseStudyImpactScreen
