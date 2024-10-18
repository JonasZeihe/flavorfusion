import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/backgrounds/BackgroundMediterran.png";
import Button from "../layout/Button";
import Heading from "../text/Heading";
import Paragraph from "../text/Paragraph";
import Container from "../layout/Container";

const ScreenWrapper = styled.div`
  background-color: var(--neutral1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TextOverlay = styled.div`
  background-color: rgba(255, 193, 7, 0.85); /* Gelber Block mit Transparenz */
  padding: 3rem;
  border-radius: 8px;
  text-align: left;
  max-width: 800px; /* Maximale Breite für die Textbox */
`;

const CTAButtonWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;

const Prototype2PitchScreen = () => {
  return (
    <ScreenWrapper>
      <Container>
        <TextOverlay>
          <Heading
            size="var(--fontSizeHeadline3)"
            color="var(--neutral1)"
            align="left"
          >
            Dein Kochassistent für Zuhause –
          </Heading>
          <Paragraph
            size="var(--fontSizeBody)"
            color="var(--neutral1)"
            align="left"
            margin="1.5rem 0"
          >
            Entdecke einfache, personalisierte Rezepte und erhalte
            maßgeschneiderte Einkaufslisten. Für stressfreies Kochen und mehr
            Genuss.
          </Paragraph>
        </TextOverlay>
      </Container>
      <CTAButtonWrapper>
        <Button
          text="Du hast noch Fragen?"
          bgColor="var(--secondary3)"
          fontSize="var(--fontSizeButton)"
          padding="1rem 2rem"
        />
      </CTAButtonWrapper>
    </ScreenWrapper>
  );
};

export default Prototype2PitchScreen;
