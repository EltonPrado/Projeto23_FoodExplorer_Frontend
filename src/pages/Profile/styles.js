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
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3.2rem auto 0;
`;