import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  max-width: 136.8rem;
  padding-inline: 3.2rem;
  margin-inline: auto;
  flex: 1;

  @media (min-width: 1024px) {
   width: 100%;
   padding-inline: 12.4rem;
   align-items: center;
  }
`;

export const ButtonBack = styled.div`
  width: 100%;
  margin: 2.4rem auto 4rem;
  display: flex;
 
  > a {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > header {
    legend {
      font-size: 3.2rem;
      margin-bottom: 3.2rem;
    }
  }
 
  .smallBox {
    width: 100%;

    @media (min-width: 768px) {
      max-width: 22.9rem;
    }

    #file {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      div {
        width: 100%;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        cursor: pointer;

        @media (min-width: 768px) {
          width: 22.9rem;
        }
      }
    }
  
    input[type="file"] {
      display: none;
    }
  }

 > button {
   width: 100%;
   height: 4.8rem;
   margin-top: 2.4rem;
   align-self: flex-end;

   color: ${({ theme }) => theme.COLORS.LIGHT_100};
   background-color: ${({ theme }) => theme.COLORS.RED_400};
   border: none;
   border-radius: 0.5rem;

   &:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_300};
    transition: .5s;
    cursor: pointer;
   }

   @media (min-width: 768px) {
    width: 17.2rem;
   }
 }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin-bottom: 4rem;
  gap: 4rem;

  .selectBox {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    select {
      width: 100%;
      height: 4.8rem;
      min-width: 31.6rem;
      padding: 1.2rem 1.4rem;

      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      border: none;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    column-gap: 3.2rem;
  }
`;

export const SectionIngredients = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-bottom: 2.4rem;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-height: max-content;
    padding: 0.8rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

 @media (min-width: 768px) {
   margin-bottom: 0;

   > div {
     max-height: 4.8rem;
     gap: 2rem;
   }
 }
`;