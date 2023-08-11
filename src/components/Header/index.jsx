import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
import { useNavigate } from 'react-router-dom';

import { CiForkAndKnife } from 'react-icons/ci';
import { FiSearch, FiLogOut, FiX, FiMenu, FiUser } from 'react-icons/fi';
import { Container, Content, Logo, Nav, Search, NewDish, Favorites, Button, Logout, User, Orders } from "./styles";

import logo from '../../assets/logo.svg';
import receipt from '../../assets/receipt.svg';
import heart from '../../assets/heart.svg';

export function Header({search, functionButton}) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const { signOut, user } = useAuth();
  const { cart, orders } = useCart();

  const navigate = useNavigate();

  const isCartIsEmpty = cart.length === 0;

  function handleGoToCart() {
    navigate("/cart")
  }

  function handleGoToOrders() {
    navigate("/orders")
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return(
    <Container>
      <Content>
        <button 
          type="button"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          {menuIsVisible ? <FiX /> : <FiMenu />}
        </button>
        
        {
          user.isAdmin ?
          <Logo to="/">
            <div className="logo">
              <strong><img src={logo} alt="logomarca polígono azul"/>food explorer</strong>
              <span>admin</span>
            </div>
          </Logo>
          :
          <Logo to="/">
            <img src={logo} alt="logomarca polígono azul" />
            <strong>food explorer</strong>
          </Logo>
        }

        <Nav isVisible={menuIsVisible}>
          <Search>
            {<FiSearch size={24} />}
            <input 
              type="text" 
              placeholder="Busque por pratos ou ingredientes"
              onChange={e => {search(e.target.value)}}
            />
          </Search>

          {
            user.isAdmin ? 
            <NewDish to="/new">{<CiForkAndKnife />}Novo prato</NewDish>
            :
            <Button
              type='button'
              onClick={handleGoToCart}
              disabled={isCartIsEmpty}
            >
              <img src={receipt} alt="receipt"/>
              Pedidos <span>({cart.length})</span>
            </Button>
          }

          {
            user.isAdmin ? 
            <Orders type="button" onClick={handleGoToOrders}>
              <img src={receipt} alt="receipt"/>
              <span>({orders.length}) Pedidos</span>
            </Orders>
            :
            <Favorites type="button" onClick={functionButton}>
              <img src={heart} alt="favorites"/>
              <span>Favoritos</span>
            </Favorites>
          }

          <User to="/profile">
            <FiUser />
            <span>Usuário</span>
          </User>

          <Logout to="/" onClick={handleSignOut}>
            <FiLogOut />
            <span>Sair</span>
          </Logout>
        </Nav>
      </Content>
    </Container>
  )
}