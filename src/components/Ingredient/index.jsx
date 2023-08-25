import { Container } from './styles';

export function Ingredient({ ingredient }) {
    return(
      <Container>
        <span className="ingredient">{ingredient}</span>
      </Container>
    )
  }