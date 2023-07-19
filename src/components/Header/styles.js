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

export const Logo = styled.div` //trocar para (Link para o logo recarregar)
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;