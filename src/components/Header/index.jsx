import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container, Content, Logo, Nav, Search, Button, Logout } from "./styles";

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';

export function Header() {
  return(
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logomarca polígono azul" />
          <strong>Food explorer</strong>
        </Logo>

        <Nav>
          <Search>
            {<FiSearch size={24} />}
            <input 
              type="text" 
              placeholder="Busque por pratos ou ingredientes"
            />
          </Search>

          <Button type="button">
            <img src={receipt} alt="" />
            Meus pedidos
            <span>(0)</span>
          </Button>

          <Logout>
            <FiLogOut />
          </Logout>
        </Nav>
      </Content>
    </Container>
  )
}