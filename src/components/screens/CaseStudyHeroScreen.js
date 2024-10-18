import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/backgrounds/BackgroundFlavourFusion.png";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import Button from "../layout/Button";

// Wrapper für den gesamten Hero-Bereich
const HeroWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  color: var(--neutral6);
`;

// Container für den Textinhalt
const TextContainer = styled.div`
  background: rgba(255, 255, 255, 0.85); /* Leicht transparente Box */
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2; /* Über dem Hintergrundbild */
`;

// Projektinformationen
const ProjectInfo = styled.div`
  margin-top: 2rem;
  text-align: left;
  font-size: 1.2rem;
`;

// Call to Action Button
const CTAButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const CaseStudyHeroScreen = () => {
  return (
    <HeroWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          FlavorFusion – Landing Page für eine neue Rezept-App
        </Heading>
        <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
          In diesem Projekt habe ich die Landing Page für die Rezept-App
          FlavorFusion erstellt, die es Nutzern ermöglicht, durch eine breite
          Palette von Rezepten aus verschiedenen Weltküchen zu navigieren und
          personalisierte Empfehlungen zu erhalten. Das Ziel war es, eine
          optisch ansprechende, interaktive und kulturell vielseitige Landing
          Page zu entwickeln, die die Nutzer inspiriert, die App
          herunterzuladen.
        </Paragraph>
        <ProjectInfo>
          <strong>Rolle:</strong> UX/UI Designer – Ich habe alle Aspekte des
          Designs, der Typografie, der Farbauswahl und der interaktiven Elemente
          übernommen.
          <br />
          <strong>Dauer:</strong> 5 Werktage (1 Woche)
          <br />
          <strong>Tools:</strong> ChatGPT, Figma, FigJam, Notion, Microsoft
          CoPilot, Google Gemini (wobei letztere nur wenig hilfreich waren – 95%
          der Arbeit wurde mit ChatGPT erledigt).
          <br />
          <strong>Projektziel:</strong> Erstellung einer voll funktionsfähigen
          und interaktiven Landing Page für FlavorFusion, um die App und ihre
          Funktionen klar und ansprechend zu präsentieren.
        </ProjectInfo>
        <CTAButtonWrapper>
          <Button
            text="Mehr über das Projekt erfahren"
            bgColor="var(--primary3)"
            fontSize="var(--fontSizeButton)"
            padding="1.5rem 3rem"
          />
        </CTAButtonWrapper>
      </TextContainer>
    </HeroWrapper>
  );
};

export default CaseStudyHeroScreen;
