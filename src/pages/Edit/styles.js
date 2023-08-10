import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;

 display: flex;
 flex-direction: column;
`;

export const Content = styled.main`
 width: 100%;
 flex: 1;
 max-width: 136.8rem;
 height: 100%;
 padding-inline: 4rem;
 margin-inline: auto;


 @media (min-width: 768px) {
   width: 100%;

   padding-inline: 12.3rem;

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
      max-width: 23rem;
    }

    #file {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
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
        background-color: ${({ theme}) => theme.COLORS.DARK_900};

        @media (min-width: 768px) {
          width: 22.9rem;
        }
      }
    }

    input[type="file"] {
      display: none;
    }
  }

  .buttons {
    display: flex;
    align-self: flex-end;
    
    margin-top: 2.4rem;
    gap: 3.2rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  #delete {
    width: 100%;
    height: 4.8rem;

    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (min-width: 768px) {
      width: 13.5rem;

      button {
        display: flex;
      }
    }
  }

  #save {
    width: 100%;
    height: 4.8rem;

    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.RED_400};

    align-self: flex-end;
    
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.RED_300};
      transition: .5s;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      width: 17.2rem;

      button {
        display: flex;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin-bottom: 4rem;
  gap: 4rem;

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

  margin-bottom: 8rem;

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