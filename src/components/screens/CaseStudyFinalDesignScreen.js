import React from "react";
import styled from "styled-components";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import Image from "../layout/Image";

// Import der Background-Bilder
import MediterranBackground from "../../assets/images/backgrounds/BackgroundMediterran.png";
import AsiaBackground from "../../assets/images/backgrounds/BackgroundAsien.png";
import LatamBackground from "../../assets/images/backgrounds/BackgroundLateinamerika.png";
import NorthAmericaBackground from "../../assets/images/backgrounds/BackgroundNordamerika.png";
import AfricaBackground from "../../assets/images/backgrounds/BackgroundAfrika.png";
import NorthEuropeBackground from "../../assets/images/backgrounds/BackgroundNordeuropa.png";
import MiddleEastBackground from "../../assets/images/backgrounds/BackgroundNahost.png";

// Import der Kartenbilder
import MediterranCard from "../../assets/images/cards/CardMediterran.png";
import AsiaCard from "../../assets/images/cards/CardAsien.png";
import LatamCard from "../../assets/images/cards/CardLateinamerika.png";
import NorthAmCard from "../../assets/images/cards/CardNordamerika.png";
import AfricaCard from "../../assets/images/cards/CardAfrika.png";
import NorthEurCard from "../../assets/images/cards/CardNordeuropa.png";
import MiddleEastCard from "../../assets/images/cards/CardNahost.png";

// Wrapper für den gesamten Abschnitt
const FinalDesignWrapper = styled.div`
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

// Wrapper für die Bilder
const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;

// Bildwrapper für individuelle Karten oder Backgrounds
const ImageWrapper = styled.div`
  width: 280px;
  margin: 1rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

// Definition der fehlenden Section-Komponente
const Section = styled.div`
  margin-bottom: 4rem;
`;

const CaseStudyFinalDesignScreen = () => {
  return (
    <FinalDesignWrapper>
      <TextContainer>
        <Heading size="var(--fontSizeHeadline3)" color="var(--primary3)">
          Finale Lösung & Design (Result)
        </Heading>

        {/* Endergebnis */}
        <Section>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Das finale Design der Landing Page vereint die sieben Weltküchen mit
            ihren eigenen visuellen Hintergründen und Elementen. Für jede Küche
            wurde ein eigener <strong>Background</strong> erstellt, der die
            wichtigsten Zutaten und den Charakter der jeweiligen Küche
            visualisiert.
          </Paragraph>
          <ImageGallery>
            <ImageWrapper>
              <Image src={MediterranBackground} alt="Mediterrane Küche" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={AsiaBackground} alt="Asiatische Küche" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={LatamBackground} alt="Lateinamerikanische Küche" />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src={NorthAmericaBackground}
                alt="Nordamerikanische Küche"
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={AfricaBackground} alt="Afrikanische Küche" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={NorthEuropeBackground} alt="Nordeuropäische Küche" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={MiddleEastBackground} alt="Nahöstliche Küche" />
            </ImageWrapper>
          </ImageGallery>
        </Section>

        {/* Karten für die Weltküchen */}
        <Section>
          <Paragraph size="var(--fontSizeBody)" color="var(--neutral6)">
            Zusätzlich habe ich{" "}
            <strong>Karten im linolschnittartigen Stil</strong> erstellt, die
            die typischen Zutaten und Gerichte jeder Küche visualisieren. Diese
            Karten fügen der Seite eine künstlerische Note hinzu und sorgen für
            visuelle Konsistenz.
          </Paragraph>
          <ImageGallery>
            <ImageWrapper>
              <Image src={MediterranCard} alt="Mediterrane Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={AsiaCard} alt="Asiatische Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={LatamCard} alt="Lateinamerikanische Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={NorthAmCard} alt="Nordamerikanische Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={AfricaCard} alt="Afrikanische Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={NorthEurCard} alt="Nordeuropäische Küche Karte" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={MiddleEastCard} alt="Nahöstliche Küche Karte" />
            </ImageWrapper>
          </ImageGallery>
        </Section>
      </TextContainer>
    </FinalDesignWrapper>
  );
};

export default CaseStudyFinalDesignScreen;
