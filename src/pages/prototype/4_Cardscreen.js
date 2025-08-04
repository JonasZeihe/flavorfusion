import React from 'react'
import styled from 'styled-components'
import CardMediterran from '../../assets/images/cards/CardMediterran.png'
import CardMediterranHover from '../../assets/images/cards_hover/Hover_CardMediterran.png'
import CardAsien from '../../assets/images/cards/CardAsien.png'
import CardAsienHover from '../../assets/images/cards_hover/Hover_CardAsien.png'
import CardLateinamerika from '../../assets/images/cards/CardLateinamerika.png'
import CardLateinamerikaHover from '../../assets/images/cards_hover/Hover_CardLateinamerika.png'
import CardNahost from '../../assets/images/cards/CardNahost.png'
import CardNahostHover from '../../assets/images/cards_hover/Hover_CardNahost.png'
import CardAfrika from '../../assets/images/cards/CardAfrika.png'
import CardAfrikaHover from '../../assets/images/cards_hover/Hover_CardAfrika.png'
import CardNordamerika from '../../assets/images/cards/CardNordamerika.png'
import CardNordamerikaHover from '../../assets/images/cards_hover/Hover_CardNordamerika.png'
import CardNordeuropa from '../../assets/images/cards/CardNordeuropa.png'
import CardNordeuropaHover from '../../assets/images/cards_hover/Hover_CardNordeuropa.png'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundLateinamerika.png'
import Button from '../../components/Button'

const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(5px); /* Blur-Effekt nur für den Hintergrund */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Hintergrund bleibt hinter dem Inhalt */
`

const ScreenWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  position: relative;
  z-index: 2; /* Karten über dem Hintergrund */
`

const CardItem = styled.div`
  width: 258px;
  height: 452px;
  border-radius: 15px;
  border: 2px solid var(--neutral-colorsneutral-1);
  background-image: url(${(props) => props.mage});
  background-size: cover;
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: url(${(props) => props.hoverImage});
  }
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  z-index: 2;
`

const Prototype4Cardscreen = () => {
  return (
    <ScreenWrapper>
      <Background />

      <CardsWrapper>
        <CardItem mage={CardMediterran} hoverImage={CardMediterranHover} />
        <CardItem mage={CardAsien} hoverImage={CardAsienHover} />
        <CardItem
          mage={CardLateinamerika}
          hoverImage={CardLateinamerikaHover}
        />
        <CardItem mage={CardNahost} hoverImage={CardNahostHover} />
        <CardItem mage={CardAfrika} hoverImage={CardAfrikaHover} />
        <CardItem mage={CardNordeuropa} hoverImage={CardNordeuropaHover} />
        <CardItem mage={CardNordamerika} hoverImage={CardNordamerikaHover} />
      </CardsWrapper>
      <ButtonWrapper>
        <Button text="Entdecke noch mehr Flavour" />
      </ButtonWrapper>
    </ScreenWrapper>
  )
}

export default Prototype4Cardscreen
