import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.neutral5};
  color: ${theme.colors.white};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Link
        to="/"
        style={{ color: theme.colors.white, textDecoration: "none" }}
      >
        <strong>Zurück zur Startseite</strong>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
