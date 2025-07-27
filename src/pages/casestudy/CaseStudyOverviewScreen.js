import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import BackgroundImage from "../../assets/images/backgrounds/BackgroundAsien.png"; // Beispiel Hintergrundbild

// Wrapper für den gesamten Abschnitt
const OverviewWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--neutral6);
  min-height: 100vh;
`;

// Container für den Textinhalt
const TextContainer = styled.div`
  background: rgba(255, 255, 255, 0.85); /* Leicht transparente Box */
  padding: 2rem;
  border-radius: 12px;
  max-width: 900px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  z-index: 2;
`;

// Überschrift für Abschnitte (Produktbeschreibung, Problemstellung, etc.)
const SectionHeading = styled.h3`
  font-size: var(--fontSizeHeadline4);
  color: var(--primary3);
  margin-bottom: 1rem;
`;

// Abschnitts-Wrapper für jede einzelne Kategorie
const Section = styled.div`
  margin-bottom: 2rem;
`;

const CaseStudyOverviewScreen = () => {
  return (
    <OverviewWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          Projektüberblick (Situation)
        </Heading>

        {/* Produktbeschreibung */}
        <Section>
          <SectionHeading>Produktbeschreibung</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            FlavorFusion ist eine Rezept-App, die Nutzern hilft, verschiedene
            Weltküchen zu erkunden und personalisierte Empfehlungen zu erhalten.
            Die App bietet einfache Einkaufslistsen und eine große Sammlung von
            Rezepten aus Küchen wie der mediterranen, asiatischen,
            lateinamerikanischen und weiteren. Das Projektziel war es, die
            Vielfalt und Kreativität der App durch eine Landing Page zu
            vermitteln.
          </Paragraph>
        </Section>

        {/* Problemstellung */}
        <Section>
          <SectionHeading>Problemstellung</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Die Herausforderung bestand darin, eine Landing Page zu entwickeln,
            die die kulturelle Vielfalt der App verständlich darstellt und
            gleichzeitig visuell ansprechend ist. Die Seite musste außerdem klar
            und intuitiv sein, um Nutzer dazu zu bringen, die App
            herunterzuladen.
          </Paragraph>
        </Section>

        {/* Zielgruppe */}
        <Section>
          <SectionHeading>Zielgruppe</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Kochbegeisterte, die neue Rezepte aus verschiedenen Kulturen
            ausprobieren und ihre Kochfähigkeiten erweitern möchten.
          </Paragraph>
        </Section>

        {/* Meine Rolle */}
        <Section>
          <SectionHeading>Meine Rolle</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Ich habe alle Designaspekte eigenständig übernommen – von der
            initialen Ideengenerierung bis zur finalen Umsetzung der
            interaktiven Landing Page.
          </Paragraph>
        </Section>
      </TextContainer>
    </OverviewWrapper>
  );
};

export default CaseStudyOverviewScreen;
