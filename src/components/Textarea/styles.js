import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const TextareaInput= styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.4rem;

  resize: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_900};

  &::placeholder {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;