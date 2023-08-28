import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  padding: .4rem .8rem;
  border-radius: .5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;