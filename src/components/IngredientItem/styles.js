import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.2rem;

  background-color: ${({ isNew }) => isNew ? 'transparent' : '#76797B'};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : '#FFFFFF'};

  border-radius: 0.8rem;
  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: 10rem;
    height: 3.2rem;
    padding: 1.2rem;
    font-size: 1.6rem;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : '#FFFFFF'};
    background: transparent;

    border: none;
  }
`;