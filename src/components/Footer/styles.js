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
  padding-inline: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  > .brand {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      opacity: 0.3;
    }

    span {
      font-size: 2.4rem;
      font-weight: bold;

      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > p {
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem;
  }
`;