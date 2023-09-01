import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: header;

  height: 10.4rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  max-width: 136.8rem;
  height: 10.4rem;
  margin-inline: auto;
  padding-inline: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    transition: all 1s;

    svg {
      margin-top: 0.3rem;
      color: white;
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem;

    .menu {
      display: none;
    } 
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    cursor: pointer;

    > strong {
      display: flex;
      align-items: center;
      gap: 1.1rem;
    }

    > span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
`;

export const Navigation = styled.nav`
  max-height: ${({ active }) => (active === 'true' ? '100%' : '0')};
  
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3.2rem;

  padding-inline: 2.8rem;
  padding-top: 3.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  opacity: ${({ active }) => (active === 'true' ? '1' : '0')};
visibility: ${({ active }) => (active === 'true' ? 'visible' : 'hidden')};
  transform: ${({ active }) => active ? 'translateY(0)' : 'translateY(-20%)'};

  transition: all 0.4s;

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
    height: 0;

    margin-left: 3.2rem;

    flex-direction: row;
    align-items: center;
    background: none;

    opacity: 1;
    visibility: visible;

    transform: translateY(0);
    transition: all 0s;

    span {
      display: none;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme}) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  padding-right: 1.6rem;
  position: relative;

  > svg {
    left: 1.6rem;
    position: absolute;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;

    padding-left: 4.8rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: transparent;
  border: none;
  gap: 2rem;

  > svg {
    font-size: 2.4rem;
  }
`;

export const New = styled(Link)`
  width: 100%;
  ${buttonStyles}

  @media (min-width: 768px) {
    width: 21.6rem;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.RED_200};
    font-size: 1.4rem;
  }
`;

export const Favorites = styled.button`
  ${buttonStyles}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Orders = styled.button`
  ${buttonStyles}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Button = styled.button`
  width: 100%;

  ${buttonStyles}

  @media (min-width: 768px) {
    width: 21.6rem;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
  }
`;

export const User = styled(Link)`
  ${buttonStyles}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Logout = styled(Link)`
  ${buttonStyles}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;