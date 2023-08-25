import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  font-size: 1.4rem;

  display: ${({ isInvisible }) => isInvisible ? 'none': 'flex'};
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  padding: 2.4rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`