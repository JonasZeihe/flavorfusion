import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/layout/Button";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";

const HomePage = () => {
  return (
    <Container customStyles="padding: 50px; text-align: center;">
      <Heading size="48px" customStyles="color: #F44336;">
        Willkommen bei FlavorFusion
      </Heading>
      <Paragraph
        size="20px"
        customStyles="margin-bottom: 40px; color: #424242;"
      >
        Wählen Sie zwischen unserer interaktiven Landing Page oder der Case
        Study
      </Paragraph>
      <Container customStyles="display: flex; justify-content: center; gap: 20px;">
        <Link to="/landing">
          <Button
            text="Zur Landing Page"
            customStyles="background-color: #FFC107; color: white; padding: 10px 20px;"
          />
        </Link>
        <Link to="/case-study">
          <Button
            text="Zur Case Study"
            customStyles="background-color: #F44336; color: white; padding: 10px 20px;"
          />
        </Link>
      </Container>
    </Container>
  );
};

export default HomePage;
