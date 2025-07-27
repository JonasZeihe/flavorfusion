import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";

// Wrapper für den gesamten Abschnitt
const ReflectionWrapper = styled.div`
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

const CaseStudyReflectionScreen = () => {
  return (
    <ReflectionWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          Reflexion und Learnings
        </Heading>

        <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
          Dieses Projekt hat mir gezeigt, wie hilfreich KI-Tools wie ChatGPT
          sein können, um den Designprozess zu beschleunigen und kreative Ideen
          zu entwickeln. Ich habe gelernt, dass es wichtig ist, regelmäßig
          Feedback einzuholen und flexibel zu bleiben, um sich nicht in eine
          bestimmte Designrichtung zu verrennen. Außerdem habe ich wertvolle
          Erfahrungen im Umgang mit interaktiven Elementen und Prototyping
          gesammelt.
        </Paragraph>

        <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
          Wenn ich dieses Projekt noch einmal machen würde, würde ich mehr Fokus
          auf <strong>Nutzerforschung</strong> und <strong>Personas</strong>
          legen, um eine noch nutzerzentriertere Lösung zu entwickeln. Außerdem
          möchte ich meine Fähigkeiten in der <strong>Bilderzeugung</strong>
          mit KI verbessern, um noch bessere visuelle Ergebnisse zu erzielen.
        </Paragraph>
      </TextContainer>
    </ReflectionWrapper>
  );
};

export default CaseStudyReflectionScreen;
