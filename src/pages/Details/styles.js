import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Content = styled.div`
  max-width: 136.8rem;
  height: 100%;
  padding-inline: 4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  @media (min-width: 768px) {
    width: 100%;
    
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-inline: 12.3rem;
    gap: 4rem;
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  margin: 2.4rem auto 4rem;
  display: flex;
  
  > span {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;

export const Main = styled.main`
  width: 31.6rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .FoodPreview {
    max-width: 26.3rem;
    border-radius: 50%;

    img {
      max-width: 100%;
    }
  }

  > .foodInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins', sans-serif;

    h1 {
      margin: 2.4rem 0;
      font-size: clamp(2.4rem, 1rem + 3vw, 4rem);
      font-weight: 500;
    }

    p {
      text-align: center;
      font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;

    > .FoodPreview {
      max-width: 39rem;
      border-radius: 50%;
    }

    > .foodInfo {
      max-width: 60rem;
      align-items: flex-start;

      h1 {
        margin-top: 0;
      }

      p {
        text-align: left;
      }
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-block: 3rem;
`;

export const Info = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1.7rem;

  .btnEdit {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .btnMinusPlus {
    display: flex;
    gap: 1.6rem;

    span {
      font-size: 2rem;
      font-weight: 700;
    }
    
    .btn {
      display: flex;
      align-items: center;

      background: none;
      border: none;

      position: relative;
      z-index: 6;
    }

    .btn,
    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`;