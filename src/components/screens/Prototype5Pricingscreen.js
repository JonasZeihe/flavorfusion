import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/backgrounds/Property 1=BackgroundNordamerika.png";
import PricingCard from "../layout/PricingCard";
import { theme } from "../../styles/GlobalStyles";

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding: 2rem;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
`;

const pricingPlans = [
  {
    planName: "Free Plan",
    description: "Für Einsteiger und Hobbyköche",
    price: "Kostenlos",
    features: [
      "Zugriff auf tausende Rezepte",
      "Personalisierte Empfehlungen",
      "Integrierte Einkaufsliste",
      "Offline speichern (bis zu 10 Rezepte)",
      "Werbung (dezente Banner)",
    ],
    buttonText: "Kostenlos starten",
    buttonStyles: `background-color: ${theme.colors.accent3}; color: white;`,
  },
  {
    planName: "Pro Plan",
    description: "Für ambitionierte Köche und Genießer",
    price: "9,99 €/Monat",
    features: [
      "Werbefrei",
      "Exklusive Premium-Rezepte",
      "Unbegrenzter Offline-Zugriff",
      "Schritt-für-Schritt-Anleitungen",
      "Ernährungspläne und erweiterte Einkaufslisten",
    ],
    buttonText: "Jetzt upgraden",
    buttonStyles: `background-color: ${theme.colors.accent3}; color: white;`,
  },
  {
    planName: "Business Plan",
    description: "Für Creator, Food-Blogger & Unternehmen",
    price: "29,99 €/Monat",
    features: [
      "Rezepte veröffentlichen und Branding hinzufügen",
      "Analytik-Dashboard für Rezept-Performance",
      "Community-Management-Tools",
      "Team-Funktion für Zusammenarbeit",
    ],
    buttonText: "Für Creator und Unternehmen",
    buttonStyles: `background-color: ${theme.colors.accent3}; color: white;`,
  },
];

const Prototype5Pricingscreen = () => {
  return (
    <ScreenWrapper>
      <CardsWrapper>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonStyles={plan.buttonStyles}
          />
        ))}
      </CardsWrapper>
    </ScreenWrapper>
  );
};

export default Prototype5Pricingscreen;
