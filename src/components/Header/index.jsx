import { useState } from 'react';

import { FiSearch, FiLogOut, FiX, FiMenu } from 'react-icons/fi';
import { Container, Content, Logo, Nav, Search, Button, Logout } from "./styles";

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return(
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logomarca polígono azul" />
          <strong>Food explorer</strong>
        </Logo>

        <Nav isVisible={menuIsVisible}>
          <Search>
            {<FiSearch size={24} />}
            <input 
              type="text" 
              placeholder="Busque por pratos ou ingredientes"
            />
          </Search>

          <Button type="button">
            <img src={receipt} alt="" />
            Pedidos <span>(0)</span>
          </Button>

          <Logout>
            <FiLogOut />
          </Logout>
        </Nav>

        <button 
          type="button"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
      </Content>
    </Container>
  )
}