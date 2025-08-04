import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../assets/images/backgrounds/BackgroundNordeuropa.webp'

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
`

const ImprintCard = styled.div`
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Leicht transparenter Hintergrund */
  color: #333; /* Textfarbe */
  font-family: 'Poppins', sans-serif;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  backdrop-filter: blur(10px); /* Hintergrundunschärfe */
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-colorsprimary-3);
  text-align: center;
  margin-bottom: 1.5rem;
`

const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;
`

const Prototype8Imprintscreen = () => {
  return (
    <ScreenWrapper>
      <ImprintCard>
        <Title>Impressum</Title>
        <Paragraph>
          <strong>FlavorFusion Inc.</strong> <br />
          Hauptsitz: Geschmacksgalaxie, 5ritte Straße links, dann geradeaus bis
          zum Rand der Realität
          <br />
          CEO und Geschmacksminister: Sir Fusion McFlavor, Baron von
          Bratpfannenhausen, Ehrenritter des Gaumenkitzels
        </Paragraph>
        <Paragraph>
          <strong>Kontaktmöglichkeiten:</strong> <br />
          <ul>
            <li>
              Telefon: +123 456-OMG-YUM – Bitte nur für Notfälle, z.B. wenn das
              Essen zu gut schmeckt.
            </li>
            <li>Fax: Nicht verfügbar seit 1998, bitte Brieftauben nutzen.</li>
            <li>
              E-Mail: superwichtig@flavorboom.boom – Wir versprechen, jede
              Anfrage mindestens einmal zu ignorieren.
            </li>
            <li>
              Website:{' '}
              <a
                href="http://www.ich-bin-so-lecker.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ich-bin-so-lecker.de
              </a>{' '}
              – Warnung: Betreten der Website kann zu spontanen Kochshows in der
              eigenen Küche führen.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <strong>Disclaimer:</strong> <br />
          Wir sind NICHT verantwortlich für die folgenden Dinge:
          <ul>
            <li>
              Plötzliche Lust, nach Italien zu ziehen, nachdem du unsere
              Pasta-Rezepte ausprobiert hast.
            </li>
            <li>
              Unfreiwillige Heirat mit dem Pizzaboten, nachdem du „die beste
              Pizza deines Lebens“ zubereitet hast.
            </li>
            <li>
              Sprechende Kochlöffel oder sich teleportierende Kühlschränke. Wenn
              das passiert, mach einfach mit.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <strong>Haftungsausschluss:</strong> <br />
          Solltest du durch den Gebrauch unserer App neue Freunde gewinnen,
          berühmt werden oder von einem Michelin-Stern träumen – you're welcome.
          Für allfällige Streitigkeiten mit Nachbarn, die plötzlich ständig bei
          dir essen wollen, ist dein eigener Anwalt zuständig.
          <br />
          Vorsicht: Die App kann süchtig machen. Bei Entzugserscheinungen bitte
          direkt in die Küche rennen und kochen – auf eigene Gefahr.
        </Paragraph>
        <Paragraph>
          <strong>Urheberrecht:</strong> <br />
          Alles hier gehört uns. Alles. Selbst der letzte Keks in deiner
          Keksdose. Aber keine Sorge, du darfst unsere Rezepte nachkochen –
          solange du uns bei jeder Mahlzeit anrufst und uns die ersten drei
          Bissen vorbeischickst. Rezepte, die uns besonders gut gefallen, nehmen
          wir sofort in unsere Sammlung auf und behaupten, sie seien schon immer
          da gewesen.
        </Paragraph>
        <Paragraph>
          P.S.: Wenn du das Impressum wirklich gelesen hast, schulden wir dir
          jetzt einen kostenlosen Keks. Vielleicht.
        </Paragraph>
      </ImprintCard>
    </ScreenWrapper>
  )
}

export default Prototype8Imprintscreen
