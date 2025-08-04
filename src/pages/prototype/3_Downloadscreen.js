import React from "react";
import styled from "styled-components";
import AppStoreLogoDefault from "../../assets/images/appstore/Default_apple.png";
import AppStoreLogoHover from "../../assets/images/appstore/Hover_apple.png";
import GooglePlayLogoDefault from "../../assets/images/appstore/Default_google.png";
import GooglePlayLogoHover from "../../assets/images/appstore/Hover_google.png";
import QRCodeGoogle from "../../assets/images/appstore/QR/QR_google.svg";
import QRCodeApple from "../../assets/images/appstore/QR/QR_apple.svg";
import BackgroundImage from "../../assets/images/backgrounds/BackgroundAsien.png";

const ScreenWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const DownloadSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const DownloadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 8rem;
    height: auto;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  &:hover img {
    content: url(${(props) => props.hover});
  }
`;

const QRCode = styled.img`
  width: 10rem;
  height: auto;
  margin-bottom: 1.5rem; /* Etwas mehr Abstand zwischen QR-Code und Text */
`;

const DownloadText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #fff;
  margin-top: -0.5rem; /* Optionaler negativer Abstand für engere Optik */
`;

const Prototype3Downloadscreen = () => {
  return (
    <ScreenWrapper>
      <DownloadSection>
        <DownloadBlock hover={GooglePlayLogoHover}>
          <img src={GooglePlayLogoDefault} alt="Google Play Store" />
          <QRCode src={QRCodeGoogle} alt="Google Play QR Code" />
          <DownloadText>Jetzt bei Google Play herunterladen</DownloadText>
        </DownloadBlock>
        <DownloadBlock hover={AppStoreLogoHover}>
          <img src={AppStoreLogoDefault} alt="App Store" />
          <QRCode src={QRCodeApple} alt="App Store QR Code" />
          <DownloadText>Jetzt im App Store herunterladen</DownloadText>
        </DownloadBlock>
      </DownloadSection>
    </ScreenWrapper>
  );
};

export default Prototype3Downloadscreen;
