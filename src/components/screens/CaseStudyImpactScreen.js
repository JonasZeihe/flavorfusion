import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";

// Wrapper für den gesamten Abschnitt
const ImpactWrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
`;

// Container für den Textinhalt
const TextContainer = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 900px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const CaseStudyImpactScreen = () => {
  return (
    <ImpactWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          Auswirkungen und Ergebnisse
        </Heading>

        <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
          Da das Projekt primär für mein Portfolio entwickelt wurde, gibt es
          keine realen Nutzerdaten oder Metriken. Das Hauptziel war es, einen
          voll funktionsfähigen Prototyp zu entwickeln, der die App und ihre
          Funktionen klar vermittelt. Das Design zeigt meine Fähigkeit, eine
          komplexe und kulturell vielseitige Landing Page zu gestalten.
        </Paragraph>
      </TextContainer>
    </ImpactWrapper>
  );
};

export default CaseStudyImpactScreen;
