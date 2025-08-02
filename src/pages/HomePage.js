import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'

const HomePage = () => (
  <Container customStyles="padding: 50px; text-align: center;">
    <h1 style={{ fontSize: 48, color: '#F44336', margin: 0 }}>
      Willkommen bei FlavorFusion
    </h1>
    <p style={{ fontSize: 20, marginBottom: 40, color: '#424242' }}>
      Wähle zwischen Prototyp (React-Nachbau) und Case Study
    </p>
    <Container customStyles="display: flex; justify-content: center; gap: 20px;">
      <Link to="/prototype">
        <Button
          text="Zum Prototype"
          customStyles="background-color: #FFC107; color: white; padding: 10px 20px;"
        />
      </Link>
      <Link to="/casestudy">
        <Button
          text="Zur Case Study"
          customStyles="background-color: #F44336; color: white; padding: 10px 20px;"
        />
      </Link>
    </Container>
  </Container>
)

export default HomePage
