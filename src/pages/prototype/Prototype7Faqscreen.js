import React from 'react'
import styled from 'styled-components'
import FaqAccordion from '../../components/layout/Accordion'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundAfrika.png'

const ScreenWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
`

const FaqSection = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Transparenter Hintergrund für besseren Lesefluss */
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-colorsprimary-3);
  text-align: center;
  margin-bottom: 2rem;
`

const Prototype7Faqscreen = () => {
  const faqData = [
    {
      question: 'Was ist FlavorFusion?',
      answer:
        'FlavorFusion ist eine App, die dir Zugang zu einer riesigen Sammlung von Rezepten aus aller Welt bietet. Sie bietet personalisierte Empfehlungen basierend auf deinen Vorlieben und hilft dir, einfach und stressfrei zu kochen – mit integrierten Einkaufslisten und weiteren Funktionen, die das Kochen zu einem Erlebnis machen.',
    },
    {
      question: 'Ist FlavorFusion kostenlos?',
      answer:
        'Ja, FlavorFusion bietet einen kostenlosen Plan mit grundlegenden Funktionen, einschließlich einer umfangreichen Rezeptdatenbank und personalisierten Empfehlungen. Für Nutzer, die auf zusätzliche Premium-Funktionen zugreifen möchten, gibt es kostenpflichtige Pläne.',
    },
    {
      question: 'Welche Abonnements bietet FlavorFusion an?',
      answer:
        '- Free: Kostenlos, mit Zugang zu vielen Funktionen und Rezepten, jedoch werbeunterstützt und mit begrenztem Offline-Zugriff.\n- Pro: Für 9,99 €/Monat bietet der Pro-Plan werbefreien Zugang, exklusive Rezepte, interaktive Anleitungen und unbegrenzten Offline-Zugriff.\n- Business: Für 29,99 €/Monat richtet sich dieser Plan an Creator und Unternehmen, die Rezepte veröffentlichen, Analysen einsehen und mit der Community interagieren möchten.',
    },
    {
      question:
        'Welche Vorteile bietet der Pro-Plan im Vergleich zur kostenlosen Version?',
      answer:
        'Der Pro-Plan bietet exklusive Funktionen wie werbefreies Kochen, Zugang zu Premium-Rezepten, unbegrenzten Offline-Zugriff, und interaktive Schritt-für-Schritt-Anleitungen. Zusätzlich kannst du personalisierte Ernährungspläne erstellen, die auf deine Bedürfnisse zugeschnitten sind.',
    },
    {
      question: 'Für wen ist der Business-Plan geeignet?',
      answer:
        'Der Business-Plan richtet sich an professionelle Köche, Food-Blogger und Unternehmen, die ihre eigenen Rezepte in der App veröffentlichen möchten. Mit diesem Plan kannst du Rezepte branden, detaillierte Analysen einsehen und deine Reichweite durch Community-Management-Tools vergrößern.',
    },
    {
      question: 'Kann ich meine Abonnements jederzeit kündigen?',
      answer:
        'Ja, du kannst dein Abo jederzeit kündigen. Sobald du kündigst, hast du bis zum Ende des Abrechnungszeitraums weiterhin Zugriff auf die Premium-Funktionen, und danach wird dein Konto auf den Free-Plan zurückgesetzt.',
    },
    {
      question: 'Wie schützt FlavorFusion meine Daten?',
      answer:
        'Der Schutz deiner Daten hat für uns höchste Priorität. Alle von dir angegebenen Informationen werden gemäß unseren Datenschutzrichtlinien geschützt und niemals ohne deine Zustimmung an Dritte weitergegeben. Du kannst jederzeit die Daten, die wir speichern, einsehen und verwalten.',
    },
  ]

  return (
    <ScreenWrapper>
      <FaqSection>
        <Title>Häufig gestellte Fragen</Title>
        {faqData.map((faq, index) => (
          <FaqAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </FaqSection>
    </ScreenWrapper>
  )
}

export default Prototype7Faqscreen
