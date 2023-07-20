import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export function Details(){
  
  return(
    <Container>
      <Header />

      <Content>
        <div>
          <h1>FoodExplorer</h1>
          <span>Por Elton Prado</span>
        </div>
      </Content>
    </Container>
  )
}