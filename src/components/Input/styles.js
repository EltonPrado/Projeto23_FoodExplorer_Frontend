import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    height: 4.8rem;
    padding: 1.4rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 0.8rem;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
    }
  }
`;