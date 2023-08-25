import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
`;

export const Content = styled.div`
  max-width: 136.8rem;
  flex: 1;
  
  @media (min-width: 768px) {
    padding-inline: 12.3rem;
    margin-inline: auto;
  }
`;

export const Slogan = styled.div`
  height: 12rem;
  margin-top: 4.4rem;
  margin-inline: auto;
  padding-inline: 10.1rem;
  margin-bottom: 6.2rem;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  
  > img {
    width: max(19.1rem);
    left: -3rem;
    bottom: 0;

    position: absolute;
  }

  > div {
    margin-top: 2rem;
    
    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(2.6rem, 1rem + 3vw, 4rem);
      margin-bottom: 0.3rem;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    height: 26.8rem;
    margin-top: 16.4rem;
    border-radius: 0.8rem;
    justify-content: flex-end;

    display: flex;
    align-items: center;
    position: relative;

    > img {
      width: max(65.6rem);
      position: absolute;
      bottom: 0rem;
      left: -5rem;
    }

    > div {
      margin-top: 0;
    }
  }
`;