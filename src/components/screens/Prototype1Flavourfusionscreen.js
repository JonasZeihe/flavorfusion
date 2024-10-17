import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/backgrounds/BackgroundFlavourFusion.png";
import Logo from "../../assets/images/logo/logo.png";
import LogoText from "../../assets/images/logo/logotext.png";
import Button from "../layout/Button";

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3rem;
  background-color: rgba(
    255,
    255,
    255,
    0.3
  ); /* Optionaler Hintergrund für Blending */
  border-radius: 50%; /* Kreisform */
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply; /* Blending-Effekt */
`;

const LogoTextImage = styled.img`
  position: absolute;
  width: 15rem;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-bottom: 3rem;
  max-width: 600px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`;

const CTAButton = styled(Button)`
  background-color: var(--accent-colorsaccent-3);
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Prototype1FlavourFusionScreen = () => {
  return (
    <ScreenWrapper>
      <LogoWrapper>
        <LogoImage src={Logo} alt="Flavor Fusion Logo" />
        <LogoTextImage src={LogoText} alt="Flavor Fusion Text" />
      </LogoWrapper>
      <TextWrapper>
        <h1>Willkommen bei FlavorFusion</h1>
        <p>
          Deine kulinarische Entdeckungsreise beginnt hier! Entdecke neue
          Geschmackswelten und lasse dich von uns inspirieren.
        </p>
      </TextWrapper>
      <CTAButton text="Kostenlos starten" />
    </ScreenWrapper>
  );
};

export default Prototype1FlavourFusionScreen;
