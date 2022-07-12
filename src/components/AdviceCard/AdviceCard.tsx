import { ButtonDice, Card, Container } from "./styles";
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg'
import iconDice from '../../assets/images/icon-dice.svg'

export default function AdviceCard() {
  return (
    <Container>
      <Card>
        <p>Advice #177</p>
        <h1>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</h1>
        <img className="divider" src={dividerDesktop} alt="Divider" />

        <ButtonDice>
          <img src={iconDice} alt="Dice Icon" />
        </ButtonDice>
      </Card>
    </Container>
  )
}