import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { CiForkAndKnife } from 'react-icons/ci';
import { 
  FiSearch, 
  FiLogOut, 
  FiX, 
  FiMenu, 
  FiUser 
} from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';
import heart from '../../assets/heart.svg';

import { 
  Container, 
  Content, 
  Navigation, 
  HeaderLogo, 
  SearchBar, 
  New, 
  Favorites, 
  Button, 
  Logout, 
  User, 
  Orders 
} from "./styles";

export function Header({ search, functionButton }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { user, signOut } = useAuth();
  
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const handleSignOut = () => {
    navigate('/');
    signOut();
  };

  return(
    <Container>
      <Content>
        <button 
          type="button" 
          className="menu" 
          onClick={toggleMenu}
        >
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
        
        <HeaderLogo to="/">
          <div className="logo">
            <strong>
              <img src={logo} alt="logomarca polígono azul" />
              food explorer
            </strong>
            {user.isAdmin && <span>admin</span>}
          </div>
        </HeaderLogo>

        <Navigation active={menuIsVisible ? 'true' : 'false'}>
          <SearchBar>
            {<FiSearch size={24} />}

            <input 
              type="text" 
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => {search(e.target.value)}}
            />
          </SearchBar>

          {user.isAdmin ? (
            <New to="/new" type="button">{<CiForkAndKnife />}Novo prato</New>
          ) : (
            <Button type='button'>
              <img src={receipt} alt="receipt"/>
              Pedidos
            </Button>
          )}

          {user.isAdmin ? (
            <Orders type="button">
              <img src={receipt} alt="receipt"/>
              <span>Pedidos</span>
            </Orders>
          ) : (
            <Favorites type="button" onClick={functionButton}>
              <img src={heart} alt="favorites"/>
              <span>Favoritos</span>
            </Favorites>
          )}

          <User to="/profile">
            <FiUser />
            <span>Usuário</span>
          </User>

          <Logout to="/" onClick={handleSignOut}>
            <FiLogOut />
            <span>Sair</span>
          </Logout>
        </Navigation>
      </Content>
    </Container>
  )
}