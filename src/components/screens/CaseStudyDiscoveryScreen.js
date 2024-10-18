import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import Image from "../layout/Image";
import ColorGrid from "../../assets/images/casestudy/ColorGrid.png"; // Bild für das Moodboard

// Wrapper für den gesamten Abschnitt
const DiscoveryWrapper = styled.div`
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

// Abschnitts-Wrapper für jede Kategorie
const Section = styled.div`
  margin-bottom: 2rem;
`;

// Überschrift für Unterabschnitte
const SectionHeading = styled.h3`
  font-size: var(--fontSizeHeadline4);
  color: var(--primary3);
  margin-bottom: 1rem;
`;

const CaseStudyDiscoveryScreen = () => {
  return (
    <DiscoveryWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          Entdeckungsphase (Task)
        </Heading>

        {/* Erster Schritt: ChatGPT und FigJam */}
        <Section>
          <SectionHeading>Erster Schritt: ChatGPT und FigJam</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Zunächst habe ich ChatGPT genutzt, um eine erste Struktur und Ideen
            für das Projekt zu entwickeln. Wie in meinen vorherigen Projekten
            habe ich auch hier <strong>FigJam</strong> verwendet, um ein
            Arbeitsfile zu erstellen. Dieses FigJam File beinhaltete Links zu
            den Projektdateien, die ich im Verlauf des Projekts genutzt habe.
            Außerdem habe ich dort ein Moodboard erstellt, in dem ich alle
            wichtigen <strong>Design-Prinzipien</strong> wie Farben,
            Zielorientierung und kulturelle Einflüsse festgehalten habe.
          </Paragraph>
        </Section>

        {/* Bild für das Moodboard */}
        <Image src={ColorGrid} alt="Moodboard und Design-Prinzipien" />

        {/* Projektstruktur und Inhalte */}
        <Section>
          <SectionHeading>Projektstruktur und Inhalte</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            In FigJam habe ich auch die Informationsarchitektur, Wireframes und
            ein Moodboard eingefügt. Alle Elemente wurden dort gesammelt, bevor
            ich dann in Figma an der eigentlichen Landing Page arbeitete. Für
            jede Weltküche habe ich verschiedene Kategorien und Inhalte
            definiert – von typischen Gerichten bis hin zu spezifischen
            Farbpaletten, die ich später in das Design integriert habe.
          </Paragraph>
        </Section>

        {/* Definition der Kategorien (Weltküchen) */}
        <Section>
          <SectionHeading>
            Definition der Kategorien (Weltküchen)
          </SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Gemeinsam mit ChatGPT habe ich sieben <strong>Weltküchen</strong>{" "}
            als "Flavours" definiert: Mediterran, Asiatisch, Lateinamerikanisch,
            Nordamerikanisch, Afrikanisch, Nordeuropäisch und Nahöstlich. Jede
            dieser Weltküchen sollte eine eigene visuelle Sprache und
            Farbpalette erhalten. Diese Informationen wurden in einem
            Notion-File festgehalten, in dem ich jedes Flavour detailliert
            beschrieben habe.
          </Paragraph>

          {/* Beispiel für Mediterrane Küche */}
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            <strong>Beispiel: Mediterrane Küche</strong>
            <br />
            <strong>Charakteristik:</strong> Leicht, frisch, gesund
            <br />
            <strong>Typische Gerichte:</strong> Pasta, Tapas, Moussaka
            <br />
            <strong>Farbpalette:</strong> Olivgrün, Zitronengelb, Meeresblau,
            Terrakotta
            <br />
            <strong>Emotionale Assoziation:</strong> Urlaub am Mittelmeer,
            Lebensfreude
          </Paragraph>
        </Section>
      </TextContainer>
    </DiscoveryWrapper>
  );
};

export default CaseStudyDiscoveryScreen;
