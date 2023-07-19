import { Container, Content, Logo } from "./styles";

import logo from '../../assets/logo.svg';

export function Header() {
  return(
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logomarca polígono azul" />
          <strong>Food explorer</strong>
        </Logo>
      </Content>
    </Container>
  )
}