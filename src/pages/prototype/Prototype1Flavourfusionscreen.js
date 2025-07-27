import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundFlavourFusion.png'
import Logo from '../../assets/images/logo/logo.png'
import LogoText from '../../assets/images/logo/logotext.png'
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
  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 2;
`

const LogoImage = styled.img`
  width: 20rem; /* Größe des Hauptlogos */
  height: auto;
  object-fit: contain;
`

const LogoTextImage = styled.img`
  width: 30rem; /* Größe des Logotextes */
  height: auto;
  object-fit: contain;
  margin-top: -2rem; /* Optional: Leichter negativer Abstand für engeres Layout */
`

const CTAButtonWrapper = styled.div`
  margin-top: 2rem;
  z-index: 3;
`

const CTAButton = styled(Button)`
  background-color: #ff5722;
  padding: 1.75rem 3.5rem;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;

  &:hover {
    background-color: #e64a19; /* Hover-Farbe */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4); /* Hover-Schatten */
  }
`

const Prototype1FlavourFusionScreen = () => {
  return (
    <ScreenWrapper>
      <LogoContainer>
        <LogoImage src={Logo} alt="Flavor Fusion Logo" />
        <LogoTextImage src={LogoText} alt="Flavor Fusion Text Logo" />
      </LogoContainer>
      <CTAButtonWrapper>
        <CTAButton>Jetzt herunterladen und loskochen</CTAButton>
      </CTAButtonWrapper>
    </ScreenWrapper>
  )
}

export default Prototype1FlavourFusionScreen
