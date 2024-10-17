import React from "react";
import styled from "styled-components";
import CardMediterran from "../../assets/images/cards/Default=CardMediterran.png";
import CardMediterranHover from "../../assets/images/cards_hover/Hover=CardMediterran.png";
import CardAsien from "../../assets/images/cards/Default=CardAsien.png";
import CardAsienHover from "../../assets/images/cards_hover/Hover=CardAsien.png";
import CardLateinamerika from "../../assets/images/cards/Default=CardLateinamerika.png";
import CardLateinamerikaHover from "../../assets/images/cards_hover/Hover=CardLateinamerika.png";
import CardNahost from "../../assets/images/cards/Default=CardNahost.png";
import CardNahostHover from "../../assets/images/cards_hover/Hover=CardNahost.png";
import CardAfrika from "../../assets/images/cards/Default=CardAfrika.png";
import CardAfrikaHover from "../../assets/images/cards_hover/Hover=CardAfrika.png";
import CardNordamerika from "../../assets/images/cards/Default=CardNordamerika.png";
import CardNordamerikaHover from "../../assets/images/cards_hover/Hover=CardNordamerika.png";
import CardNordeuropa from "../../assets/images/cards/Default=CardNordeuropa.png"; // Nordeuropa hinzugefügt
import CardNordeuropaHover from "../../assets/images/cards_hover/Hover=CardNordeuropa.png"; // Nordeuropa Hover hinzugefügt
import BackgroundImage from "../../assets/images/backgrounds/Property 1=BackgroundLateinamerika.png";
import Button from "../layout/Button";

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(5px); /* Blur-Effekt */
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  position: relative;
  z-index: 2; /* Damit die Karten über dem Hintergrund-Blur angezeigt werden */
`;

const CardItem = styled.div`
  width: 258px;
  height: 452px;
  border-radius: 15px;
  border: 2px solid var(--neutral-colorsneutral-1);
  background-image: url(${(props) => props.defaultImage});
  background-size: cover;
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: url(${(props) => props.hoverImage});
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  z-index: 2;
`;

const Prototype4Cardscreen = () => {
  return (
    <ScreenWrapper>
      <CardsWrapper>
        <CardItem
          defaultImage={CardMediterran}
          hoverImage={CardMediterranHover}
        />
        <CardItem defaultImage={CardAsien} hoverImage={CardAsienHover} />
        <CardItem
          defaultImage={CardLateinamerika}
          hoverImage={CardLateinamerikaHover}
        />
        <CardItem defaultImage={CardNahost} hoverImage={CardNahostHover} />
        <CardItem defaultImage={CardAfrika} hoverImage={CardAfrikaHover} />
        <CardItem
          defaultImage={CardNordeuropa}
          hoverImage={CardNordeuropaHover}
        />
        <CardItem
          defaultImage={CardNordamerika}
          hoverImage={CardNordamerikaHover}
        />
      </CardsWrapper>
      <ButtonWrapper>
        <Button text="Entdecke noch mehr Flavour" />
      </ButtonWrapper>
    </ScreenWrapper>
  );
};

export default Prototype4Cardscreen;
