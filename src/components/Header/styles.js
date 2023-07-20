import styled from 'styled-components';


export const Container = styled.header`
  grid-area: header;

  height: 10.4rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  max-width: 136.8rem;
  height: 10.4rem;
  margin-inline: auto;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    transition: all 1s;

    svg {
      margin-top: .3rem;
      color: white;
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem;

    > button {
      display: none;
    } 
  }
`;

export const Logo = styled.div` //transformar em link para voltar ao inicio
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;

export const Nav = styled.div`
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 40rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  padding-inline: 4rem;
  padding-top: 5rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

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
  }
`;

export const Search = styled.div`
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

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  background-color: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  }

  @media (min-width: 768px) {
    width: 21.6rem;
  }
`;

export const Logout = styled.div` //transformar em link para sair do app
  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  svg:hover {
    cursor: pointer;
  }
`;