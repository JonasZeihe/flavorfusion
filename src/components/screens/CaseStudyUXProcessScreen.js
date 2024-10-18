import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import Image from "../layout/Image";
import ColorGrid from "../../assets/images/casestudy/ColorGrid.png"; // Color Grid Bild
import SketchWireframe from "../../assets/images/casestudy/mockupHanddrawn.png"; // Beispielbild für Wireframe
import Farbschema from "../../assets/images/casestudy/TypoScreen.png"; // Beispiel für Farbpalette und Typo
import PrototypePreview from "../../assets/images/casestudy/mockupLowFidelity.png"; // Beispiel für Prototyp

// Wrapper für den gesamten Abschnitt
const UXProcessWrapper = styled.div`
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

const CaseStudyUXProcessScreen = () => {
  return (
    <UXProcessWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          UX-Designprozess (Action)
        </Heading>

        {/* Von der Theorie zur Praxis */}
        <Section>
          <SectionHeading>Von der Theorie zur Praxis</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Nachdem die grundlegende Struktur im Notion und FigJam festgelegt
            war, habe ich mit der Erstellung eines
            <strong>Figma Files</strong> begonnen. In diesem File befindet sich
            der Prototyp der Landing Page sowie verschiedene grafische Elemente.
            Ich habe eine eigene Seite für die <strong>Typografie</strong>, die
            Farbpalette, <strong>Icons</strong> und das Logo erstellt, um die
            Elemente übersichtlich zu halten.
          </Paragraph>
          <Image src={SketchWireframe} alt="Sketch Wireframe Beispiel" />
        </Section>

        {/* Farbpalette und Typografie */}
        <Section>
          <SectionHeading>Farbpalette und Typografie</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Die Farbpalette wurde basierend auf den jeweiligen Küchen definiert.
            Jede Küche erhielt eine eigene Farbpalette, die von hellen bis zu
            dunklen Schattierungen reicht. Für die mediterrane Küche habe ich
            zum Beispiel eine <strong>Primärfarbe</strong> wie Olivgrün
            verwendet, begleitet von helleren und dunkleren Tönen, um die Seite
            harmonisch zu gestalten. Bei der <strong>Typografie</strong>
            habe ich mit ChatGPT verschiedene Schriftarten für Überschriften,
            Fließtexte und Call-to-Action-Buttons festgelegt.
          </Paragraph>
          <Image src={Farbschema} alt="Farbpalette und Typografie" />
          <Image src={ColorGrid} alt="Color Grid Beispiel" />
        </Section>

        {/* Interaktive Elemente */}
        <Section>
          <SectionHeading>Interaktive Elemente</SectionHeading>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Ein wichtiger Aspekt der Landing Page waren die{" "}
            <strong>interaktiven Elemente</strong>. Ich habe ein klickbares
            Prototyp erstellt, der alle wesentlichen Funktionen enthält, wie zum
            Beispiel eine <strong>Download-Sektion</strong>, die die Nutzer
            direkt zur App-Installation führt. Call-to-Action-Buttons wurden
            klar positioniert, um die Nutzerführung zu erleichtern. Die
            Download-Sektion wurde prominent platziert, begleitet von einem{" "}
            <strong>visuellen Background</strong>, der die jeweilige Küche
            repräsentiert.
          </Paragraph>
          <Image src={PrototypePreview} alt="Prototyp Vorschau" />
        </Section>
      </TextContainer>
    </UXProcessWrapper>
  );
};

export default CaseStudyUXProcessScreen;
