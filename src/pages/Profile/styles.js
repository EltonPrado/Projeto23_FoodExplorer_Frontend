import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 10.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  @media (max-width: 425px) {
    > header {
      padding: 3.6rem;
    }
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  display: flex;
 
  > span {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, 3vw, 2.4rem);

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 10.2rem auto 0;
`;

export const ButtonSave = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;

  border: 0;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.RED_200};
  cursor: pointer;

  &:hover {
    transition: .2s;
    background: ${({ theme }) => theme.COLORS.RED_100};
  }
`;