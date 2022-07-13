import { Attribution, ButtonDice, Card, Container } from "./styles";
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg'
import iconDice from '../../assets/images/icon-dice.svg'

export interface Props {
  id: number;
  advice: string;
  generateNew: any;
}

export default function AdviceCard(props: Props) {
  return (
    <Container>
      <Card>
        <p>Advice #{props.id}</p>
        <h1><q>{props.advice}</q></h1>
        <img className="divider" src={dividerDesktop} alt="Divider" />

        <ButtonDice onClick={props.generateNew}>
          <img src={iconDice} alt="Dice Icon" />
        </ButtonDice>
      </Card>

      <Attribution>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/rafaelnacle" target="_blank">Rafael Nacle</a>.
      </Attribution>
    </Container>


  )
}