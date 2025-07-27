import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundNahost.png'
import Button from '../../components/layout/Button'

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
  padding: 2rem;
`

const TextWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-bottom: 3rem;
  max-width: 700px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`

const CTAButton = styled(Button)`
  background-color: var(--accent-colorsaccent-3);
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Prototype6Pitch2screen = () => {
  return (
    <ScreenWrapper>
      <TextWrapper>
        <h1>Dein Kochassistent für Zuhause</h1>
        <p>
          FlavorFusion vereinfacht deinen Alltag in der Küche. Du erhältst
          Rezeptvorschläge, die deinem Geschmack und deinen
          Ernährungsbedürfnissen entsprechen. Starte deine kulinarische
          Entdeckungsreise – ganz ohne Einkaufsstress.
        </p>
      </TextWrapper>
      <CTAButton text="Kostenlos starten" />
    </ScreenWrapper>
  )
}

export default Prototype6Pitch2screen
