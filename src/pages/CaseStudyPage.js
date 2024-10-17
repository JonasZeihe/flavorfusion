import React from "react";
import Container from "../components/layout/Container";
import BackgroundImage from "../components/layout/BackgroundImage";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";
import Button from "../components/layout/Button";

const CaseStudyPage = () => {
  return (
    <Container customStyles="padding: 20px; background-color: white;">
      {/* Hero Section */}
      <Container customStyles="text-align: center; margin-bottom: 50px;">
        <Heading size="48px" customStyles="color: #FFC107;">
          UX/UI Case Study: FlavorFusion Landing Page Design
        </Heading>
        <Paragraph
          size="18px"
          customStyles="color: #424242; margin-bottom: 20px;"
        >
          Die Landing Page für die Rezept-App FlavorFusion wurde mit einem Fokus
          auf visuelle Vielfalt und kulturelle Authentizität gestaltet, um
          Nutzer zu begeistern und zum Download zu animieren.
        </Paragraph>
      </Container>

      {/* Projektbeschreibung */}
      <Container customStyles="margin-bottom: 50px;">
        <Heading size="32px" customStyles="color: #F44336;">
          1. Projektüberblick
        </Heading>
        <Paragraph size="16px" customStyles="color: #424242;">
          <strong>Projektname:</strong> FlavorFusion – Landing Page für eine
          neue Rezept-App
          <br />
          <strong>Rolle:</strong> UX/UI Designer
          <br />
          <strong>Dauer:</strong> 5 Werktage
          <br />
          <strong>Tools:</strong> ChatGPT, Figma, Notion
          <br />
        </Paragraph>
      </Container>

      {/* Moodboard Section */}
      <Container customStyles="margin-bottom: 50px;">
        <Heading size="32px" customStyles="color: #F44336;">
          2. Entdeckungsphase
        </Heading>
        <Paragraph size="16px" customStyles="color: #424242;">
          In dieser Phase habe ich verschiedene kulturelle Einflüsse und
          visuelle Stile untersucht. Das Ziel war es, für jede Weltküche eine
          eigene visuelle Sprache zu entwickeln, die sowohl Authentizität als
          auch Vielfalt vermittelt.
        </Paragraph>
        <BackgroundImage
          src="https://via.placeholder.com/600x400" // Placeholder für Moodboard-Bild
          alt="Moodboard"
          customStyles="margin: 20px 0;"
        />
      </Container>

      {/* Wireframe Section */}
      <Container customStyles="margin-bottom: 50px;">
        <Heading size="32px" customStyles="color: #F44336;">
          3. UX-Designprozess
        </Heading>
        <Paragraph size="16px" customStyles="color: #424242;">
          Durch Wireframes und Prototyping habe ich eine intuitive und einfache
          Benutzerführung entwickelt, die den Nutzer durch die verschiedenen
          Küchen der Welt leitet.
        </Paragraph>
        <BackgroundImage
          src="https://via.placeholder.com/600x400" // Placeholder für Wireframe-Bild
          alt="Wireframe Sketch"
          customStyles="margin: 20px 0;"
        />
      </Container>

      {/* Farbschema Section */}
      <Container customStyles="margin-bottom: 50px;">
        <Heading size="32px" customStyles="color: #F44336;">
          4. Farbschema & Typografie
        </Heading>
        <Paragraph size="16px" customStyles="color: #424242;">
          Jede Küche hat ihr eigenes Farbschema, das ihre kulturellen
          Besonderheiten widerspiegelt. Mediterran: Olivgrün, Zitronengelb;
          Asien: Rot, Gold; Lateinamerika: Lebendige Farben.
        </Paragraph>
        <BackgroundImage
          src="https://via.placeholder.com/600x400" // Placeholder für Farbschema-Bild
          alt="Farbschema"
          customStyles="margin: 20px 0;"
        />
      </Container>

      {/* Call to Action */}
      <Container customStyles="text-align: center;">
        <Button
          text="Erfahre mehr über das Projekt"
          customStyles="width: 250px; background-color: #F44336; color: white;"
        />
      </Container>
    </Container>
  );
};

export default CaseStudyPage;
