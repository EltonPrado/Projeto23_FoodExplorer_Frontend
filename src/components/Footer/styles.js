import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  height: 100%;
  max-width: 136.8rem;
  margin-inline: auto;
  padding-inline: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding-inline: 12.3rem;
  }

  > .brand {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      opacity: 0.3;

      @media (max-width: 768px) {
        width: 15%;
      }
    }

    span {
      font-size: 2.4rem;
      font-weight: bold;

      color: ${({ theme }) => theme.COLORS.LIGHT_700};

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }

  > p {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;