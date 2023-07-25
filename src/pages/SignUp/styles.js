import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15.8rem 4.7rem 0;

  @media (min-width: 768px) {
    width: 144rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;
    padding: 0 10.8rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 2rem;

  font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    height: 4.8rem;
  }
`;

export const Form = styled.form`
  margin-inline: auto;
  padding-block: 6.4rem;
  

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.2rem;

  > legend {
    font-size: 3.2rem;
    text-align: center;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin-inline: 0;
    padding: 6.4rem;

    max-width: 47.6rem;
    height: fit-content;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
  }
`;